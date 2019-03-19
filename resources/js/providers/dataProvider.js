import { stringify } from 'query-string';
import apiClient from '../utils/apiClient';
import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    UPDATE_MANY,
    DELETE,
    DELETE_MANY,
    CRUD_CREATE_FAILURE,
} from 'react-admin';

export default () => {

    const convertDataRequestToHTTP = (type, resource, params) => {
        let path = '';
        const options = {};

        switch(type) {
            case GET_LIST: {
                const { page, perPage } = params.pagination;
                const { field, order } = params.sort;
                const query = {
                    sort: JSON.stringify([field, order]),
                    range: JSON.stringify([
                        (page - 1) * perPage,
                        page * perPage - 1,
                    ]),
                    perPage: perPage,
                    filter: JSON.stringify(params.filter),
                };
                path = `/${resource}?${stringify(query)}`;
                break;
            }
            case GET_ONE: {
                path = `/${resource}/${params.id}`;
                break;
            }
            case GET_MANY: {
                const query = {
                    filter: JSON.stringify({ id: params.ids }),
                };
                path = `/${resource}?${stringify(query)}`;
                break;
            }
            case GET_MANY_REFERENCE: {
                const { page, perPage } = params.pagination;
                const { field, order } = params.sort;
                const query = {
                    sort: JSON.stringify([field, order]),
                    range: JSON.stringify([
                        (page - 1) * perPage,
                        page * perPage - 1,
                    ]),
                    filter: JSON.stringify({
                        ...params.filter,
                        [params.target]: params.id,
                    }),
                };
                path = `/${resource}?${stringify(query)}`;
                break;
            }
            case UPDATE: {
                path = `/${resource}/${params.id}`;
                options.method = 'PUT';
                options.body = JSON.stringify(params.data);
                break;
            }
            case CREATE: {
                path = `/${resource}`;
                options.method = 'POST';
                options.body = JSON.stringify(params.data);
                break;
            }
            case DELETE: {
                path = `/${resource}/${params.id}`;
                options.method = 'DELETE';
                break;
            }
            default:
                throw new Error(`Unsupported fetch action type ${type}`);
        }

        return { path, options };
    };

    const convertHTTPResponse = (response, type, resource, params) => {
        const { headers, json } = response;

        switch(type) {
            case GET_LIST:
            case GET_MANY_REFERENCE:

                if (!headers.has('X-Total-Count')) {
                    throw new Error(
                        'The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?'
                    );
                }
                return {
                    data: json.data,
                    total: parseInt(headers.get('X-Total-Count'), 10),
                };
            case CREATE:
                return { data: { ...params.data, id: (json.data ? json.data.id : 0) } };
            case DELETE:
            	console.log(type, json)
                return { data: { id: 123, value: null} };
            default:
                return { data: json.data };
        }
    };

    return (type, resource, params) => {
        if (type === UPDATE_MANY) {
            return Promise.all(
                params.ids.map(id =>
                    apiClient(`/${resource}/${id}`, {
                        method: 'PUT',
                        body: JSON.stringify(params.data),
                    })
                )
            ).then(responses => ({
                data: responses.map(response => response.json),
            }));
        }

        if (type === DELETE_MANY) {
            return Promise.all(
                params.ids.map(id =>
                    apiClient(`/${resource}/${id}`, {
                        method: 'DELETE',
                    })
                )
            ).then(responses => ({
                data: responses.map(response => response.json),
            }));
        }

        const { path, options } = convertDataRequestToHTTP(
            type,
            resource,
            params
        );

        return apiClient(path, options).then(response =>
            convertHTTPResponse(response, type, resource, params)
        ).catch((error) => {
            return Promise.resolve({});
        });
    };
}