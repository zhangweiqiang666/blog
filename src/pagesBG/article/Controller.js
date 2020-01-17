import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器

import View from './View';
import * as Model from './Model';
import api from '../api';
export default class extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  Model = Model;
  SSR = false;
  preload = {
    ...this.preload,
    braft: '/css/braft.css',
    output: '/css/output.css'
  };

  async getInitialState(initialState) {
    return {
      ...initialState,
      currentPath: this.location.pathname
    };
  }
  async componentWillCreate() {
    if (this.context.isClient) {
      let Editor = await import('braft-editor');
      this.handleChangeState({ Editor });
    }
  }
  async componentDidFirstMount() {}
}
