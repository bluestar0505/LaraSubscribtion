import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_GET_PERMISSIONS, AUTH_CHECK } from 'react-admin';
import { SubmissionError } from 'redux-form';

const API_HOST = `${window.location.origin}/api`;

export default (type, params) => {
	console.log(type, params);

	if (type === AUTH_LOGIN) {
		const { email, password } = params;
		const request = new Request(API_HOST + '/auth/login', {
			method:  'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({'Content-Type': 'application/json'})
		});
		return fetch(request).then((res) => {
			if (res.status === 401 || res.status === 403) {
				throw new Error(res.statusText);
			}
			return res.json();
		}).then(({ access_token }) => {
			localStorage.setItem('token', access_token);
			return Promise.resolve({ redirectTo: '/', basePath: '/' });
		});
	}

	if (type === AUTH_ERROR) {
		const { status, json } = params;
		if (status === 401 || status === 403) {
			localStorage.removeItem('token');
            return Promise.reject();
		}
		if (json.message == 'Token has expired') {
			localStorage.removeItem('token');
			return Promise.reject({ redirectTo: '/login', basePath: '/' });
		}
		return Promise.resolve();
	}

    if (type === AUTH_CHECK) {
    	return localStorage.getItem('token') && localStorage.getItem('token') != 'undefined' ? Promise.resolve() : Promise.reject({ redirectTo: '/login', basePath: '/' });
    }

    return Promise.resolve();
}