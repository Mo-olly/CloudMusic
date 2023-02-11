import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://music.cpengx.cn'
    })

    return instance(config)
}