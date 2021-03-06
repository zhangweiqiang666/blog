// src/home/Controller
import Controller from '../shared/BaseController'; // 加载 react-imvc controller 控制器
import View from './View';
import * as Model from './Model';
import api from '../api';
export default class extends Controller {
  // 继承它，编写你的控制器逻辑
  View = View; // 将 react 组件赋值给控制器的 View 属性
  Model = Model;
  pageName = 'home';

  async componentWillCreate() {
    await super.componentWillCreate();
    await this.getArticleList();
  }

  getArticleList = async () => {
    await this.resHandler(
      () => this.getApi(api.getArticleList, { status: 1 }),
      (res) => {
        console.log('res', res);
        this.handleChangeState(res);
      },
      (res) => {
        console.log('res', res);
      }
    );
  };
  handleChangeLikeCount = async (value, callback) => {
    await this.resHandler(
      () => this.postApi(api.saveArticle, value),
      (res) => {
        console.log('res', res);
        callback();
        // this.handleChangeState(res);
      },
      (res) => {
        console.log('res', res);
      }
    );
  };
}
