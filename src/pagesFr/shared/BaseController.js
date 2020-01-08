import Controller from '../../shared/BaseController';
import * as sharedActions from './sharedActions';
import { message } from 'antd';
export default class extends Controller {
  preload = {
    antd: '/pagesFr/css/antd.min.css',
    antdPro: '/pagesFr/css/ant-design-pro.css',
    customize: '/pagesFr/css/customize.css',
    common: '/pagesFr/css/common.css'
  };
  /**
   * 动态获取初始化状态
   */
  // async getInitialState(initialState) {
  //   let state = await super.getInitialState(initialState);
  //   let { context, location } = this;
  //   let url = context.basename + '/'
  //   let options = {
  //     method: 'POST',
  //     credentials: 'include',
  //     raw: true,
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // cookieorigin: getCookieOriginByContext(context)
  //     },
  //     body: JSON.stringify({ pageName: this.modulePagename })
  //   }

  //   if (context.isServer) {
  //     options.headers.cookie = context.req.headers.cookie
  //   }
  //   try {
  //     let response = await fetch(url, options)
  //     let result = await response.json()
  //     let { ResponseStatus } = result
  //     if (ResponseStatus.Ack !== "Success" && ResponseStatus.Errors[0].ErrorCode == '401') {
  //       redirect(this.context, '/v2/authorized/403') //11111111111111111111
  //       return
  //     }
  //   } catch (error) {
  //     console.error('getUserInfo', error)
  //   }
  //   return {
  //     ...sharedInitialState,
  //     ...state
  //   };
  // }

  /**
   * 动态获取最终的 actions 集合
   */
  getFinalActions(actions) {
    return {
      ...sharedActions,
      ...actions
    };
  }

  /** 对fetch接口封装一次 方便调用*/
  postApi(url, data = {}, options = {}) {
    options = {
      method: 'POST',
      ...options,
      body: JSON.stringify(data)
    };
    return this.fetch(url, options);
  }
  formDataApi(url, data = {}, option = {}) {
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        formData.append(key, element);
      }
    }
    const options = {
      method: 'POST',
      ...option,
      body: data
    };
    return fetch(url, options);
  }
  getApi(url, params, options = {}) {
    options = {
      method: 'GET',
      ...options
    };

    return this.fetch(
      url + (params ? `?${querystring.stringify(params)}` : ''),
      options
    );
  }
  /**
   * 请求结构处理
   * @method resHandler
   * @param {Function} func : api接口配置
   * @param {Function} success : 成功回调
   * @param {Function} fail : 失败回调
   * @param {Number} options.limit : 请求失败重试开关，调用方可根据实际场景设置失败后重试次数，默认1不重试
   * @param {String} options.name : 自定义埋点名称
   */
  async resHandler(func, success, fail, options = {}) {
    let { limit = 1, name = '' } = options;
    if (limit < 1) {
      // this.recordLog({...options,errcode:3001},{ctripUid});
      message.error(`网络出错，请再试试吧。`);
      return;
    }
    try {
      let res = await func();
      if (res.ResponseStatus.Ack == 'Success') {
        if (res.returnStatus.isSuccess === true) {
          return success(res);
        } else {
          // this.recordLog({...options,respdata:res},{ctripUid})
          return fail(res);
        }
      } else {
        if (
          res.ResponseStatus.Errors[0].ErrorCode ==
          'MobileRequestFilterException'
        ) {
          this.login();
          return;
        }
        if (res.ResponseStatus.Errors[0].ErrorCode == '401') {
          redirect(this.context, '/v2/authorized/403');
          return;
        }
        message.error(`网络出错，请再试试吧。`);
      }
    } catch (e) {
      console.log(
        name,
        '***************请求异常****************',
        e.toString()
      );
      // this.recordLog(options,{ctripUid});
      this.resHandler(func, success, fail, { limit: limit - 1 });
    }
  }
  // getKeyTranlate(key, options = {}) {
  //   const language = this.store.getState().language || {};
  //   return language[key] ? language[key].replace(/\$\{\s*(\w+)\s*(([\+\-])\s*(\d+)\s*)?\}/g, (text) => options[text.substring(2, text.length - 1)]) : '';
  // }
  // logout() {
  //   let logoutTips = '确定退出系统？';
  //   try {
  //     logoutTips = this.store.getState().language.logoutTips || '确定退出系统？';
  //   } catch (error) {

  //   }
  //   Modal.confirm({ content: logoutTips, onOk: () => super.logout() });
  // }
}