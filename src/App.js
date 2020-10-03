import React from 'react';
import '../src/assets/css/App.css';

//引入antd的css
import 'antd/dist/antd.css'
//引入路由模式
import {HashRouter} from 'react-router-dom'
//引入redux仓库
import store from './store/index'
import {Provider} from 'react-redux'
//引入组件
import Layouts from './views/layout'
function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <HashRouter>
            <Layouts/>
          </HashRouter>    
        </Provider>  
    </div>
  );
}

export default App;
