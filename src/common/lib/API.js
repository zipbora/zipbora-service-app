import axios from "axios";
import Config from "../config";
import EventBus from "./EventBus";

function API() {}

API.prototype = {
  $instance: null,
  $baseURL: undefined,
  $refreshTokenHandler: () => {
    return Promise.resolve(false);
  },

  get baseURL() {
    return this.$baseURL || Config.serviceURL;
  },

  set baseURL(url) {
    this.$baseURL = url;
    this.$instance = null;
  },

  // token을 refresh하고 cookie에 set 하는 custom handler
  set refreshTokenHandler(handler) {
    this.$refreshTokenHandler = handler;
  },
  get refreshTokenHandler() {
    return this.$refreshTokenHandler;
  },

  get CancelToken() {
    return axios.CancelToken;
  },

  get isCancel() {
    return axios.isCancel;
  },

  /**
   * API 인스턴스
   * @return AxiosInstance
   */
  get instance() {
    if (this.$instance === null) {
      this.$instance = axios.create({
        baseURL: this.$baseURL || Config.serviceURL,
        withCredentials: true,
      });

      this.$instance.interceptors.response.use(
        response => {
          return response;
        },
        async error => {
          if (this.isCancel(error)) {
            return Promise.reject(error);
          }
          if (error.response.status === 403) {
            // do something for handling 403 status
            const details = { response: error.response };
            EventBus.dispatch("CoreRequest:forbidden", details);
          }
          const originalReq = error.config;
          if (originalReq && !originalReq.retry) {
            const res = await this.refreshTokenHandler();
            originalReq.retry = true;
            return res ? this.$instance(originalReq) : Promise.reject(error);
          }
          return Promise.reject(error);
        },
      );
    }

    if (Config.cache === false) {
      this.$instance.defaults.params = {
        _ts: Date.now(),
      };
    }

    return this.$instance;
  },

  /**
   * HTTP Get 요청
   * @deprecated
   * @alias module:API
   * @param  {string} url
   * @param  {object} params
   * @return {Promise}
   */
  async Get(url, params) {
    return this.get(url, params);
  },
  /**
   * HTTP Post 요청
   * @deprecated
   * @alias module:API
   * @param  {string} url
   * @param  {object} params
   * @param  {object} config
   * @return {Promise}
   */
  async Post(url, params, config) {
    return this.post(url, params, config);
  },
  /**
   * HTTP Put 요청
   * @deprecated
   * @alias module:API
   * @param  {string} url
   * @param  {object} params
   * @param  {object} config
   * @return {Promise}
   */
  async Put(url, params, config) {
    return this.put(url, params, config);
  },
  /**
   * HTTP Delete 요청
   * @deprecated
   * @alias module:API
   * @param  {string} url
   * @param  {object} params
   * @return {Promise}
   */
  async Delete(url, params) {
    return this.delete(url, params);
  },

  /**
   * HTTP Get 요청
   * @alias module:API
   * @param  {string} url
   * @param  {object} params
   * @return {Promise}
   */
  async get(url, params) {
    return this.instance.get(url, params || undefined);
  },
  /**
   * HTTP Post 요청
   * @alias module:API
   * @param  {string} url
   * @param  {object} params
   * @param  {object} config
   * @return {Promise}
   */
  async post(url, params, config) {
    return this.instance.post(url, params || undefined, config || undefined);
  },
  /**
   * HTTP Put 요청
   * @alias module:API
   * @param  {string} url
   * @param  {object} params
   * @param  {object} config
   * @return {Promise}
   */
  async put(url, params, config) {
    return this.instance.put(url, params || undefined, config || undefined);
  },
  /**
   * HTTP Delete 요청
   * @alias module:API
   * @param  {string} url
   * @param  {object} params
   * @return {Promise}
   */
  async delete(url, params) {
    const data = params ? { data: params } : undefined;
    return this.instance.delete(url, data);
  },
};

/**
 * API 모듈
 * @module API
 */
export default new API();

export class ApiResponse {
  status = null; /* fulfilled | rejected */

  data = null; /* fulfilled 상태 일 때 얻은 응답 데이터 */

  error = null; /* rejected 상태 일 때 설정된 오류 데이터 */

  constructor({ status = null, data = null, error = null }) {
    this.status = status;
    this.data = data;
    this.error = error;
  }
}
