import axios, { AxiosInstance } from 'axios';
import { Message } from 'element-ui';
import store from '../store';

export interface ResponseData {
  code: number;
  data?: any;
  message: string;
}

// 创建 axios 实例
let service: AxiosInstance | any;
service = axios.create({
  baseURL: store.state.BASE_URL,
  timeout: 5000000, // 请求超时时间
});

// axios设置
// axios.defaults.withCredentials = true;

// respone 拦截器 axios 的一些配置
service.interceptors.response.use(
  (res: any) => {
    if (res.status === 200) {
      const data: any = res.data;
      return data;
    } else {
      Message({
        message: '网络错误!',
        type: 'error',
      });
      return Promise.reject(new Error(res.data.message || 'Error'));
    }
  },
  (error: any) => {
    console.log('error');
    Message({
      message: '网络错误!',
      type: 'error',
    });
    Promise.reject(error);
  }
);

export default service;
