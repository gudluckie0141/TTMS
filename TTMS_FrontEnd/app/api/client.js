import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://172.20.10.4:8000/"
});

export default apiClient;