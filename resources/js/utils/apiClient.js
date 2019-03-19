import { fetchUtils } from 'react-admin';

export default (path, options = {}) => {
	const url = `${window.origin}/api${path}`;
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};
