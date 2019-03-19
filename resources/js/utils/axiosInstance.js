import axios from 'axios';

const token = localStorage.getItem('token');
const baseUrl = `${window.origin}/api`;
const headers = {
	'Content-type': 'application/json',
	'Authorization': `Bearer ${token}`
};

export const createCustomer = (values) => {
    return axios({
        url: `${baseUrl}/customers`,
        method: 'post',
        headers: headers,
        data: values
    }).then((res) => {
        return res.data;
    });
};

export const updateCustomer = (props, values) => {
	return axios({
        url: `${baseUrl}/customers/${props.match.params.id}`,
        method: 'put',
        headers: headers,
        data: values
    }).then((res) => {
        return res.data;
    });
};

export const deleteCustomer = (props) => {
	return axios({
        url: `${baseUrl}/customers/${props.match.params.id}`,
        method: 'delete',
        headers: headers
    }).then((res) => {
        return res.data;
    });
};
