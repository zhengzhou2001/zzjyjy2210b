import instance from "./request";
export const bannerApi = (params) => instance.get('/category/list', params)