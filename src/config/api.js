import { get, post } from './http'

const baseURL = process.env.VUE_APP_BASEURL;
export const apiAddress = p => post(`${this.baseURL}:8080/hello`, p);
