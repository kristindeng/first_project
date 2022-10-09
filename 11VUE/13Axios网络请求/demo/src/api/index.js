import axios from "@/utils/request";
import path from "@/api/path";

const api = {
    getChengpin() {
        return axios.get(path.baseUrl + path.chengpin)
    },
    getKuayu() {
        return axios.get(path.kuayuqian)
    }
}
export default api

