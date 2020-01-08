// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import api from '../api';
export default class extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  preload = {
    ...this.preload
  };
  async getInitialState(initialState) {
    return {
      ...initialState,
      currentPath: this.location.pathname
    };
  }
  async componentWillCreate() {
    await this.getArticleList();
  }
  async componentDidFirstMount() {
    await super.componentDidFirstMount();
  }
  getArticleList = async () => {
    // this.handleStateChange({ isLoading: true });
    await this.resHandler(
      () => this.handlePostApi(api.getArticleList),
      res => {
        this.handleStateChange({
          res
        });
      }
    );
  };
}