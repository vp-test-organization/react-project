import axios from 'axios';

const $api = axios.create({
	baseURL: __API__,
	headers: {},
});

export default $api;