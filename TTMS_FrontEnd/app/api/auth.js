import client from './client';

const login = (username, password) => client.post('/rest-auth/login/', { username, password })

export default {
    login
};