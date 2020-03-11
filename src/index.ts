import dva from 'dva';
import './index.css';
import model from './models/example';
import router from './router';
// history路由

const createHistory = require('history').createBrowserHistory;
// 1. Initialize 实例化
const app = dva({
  history: createHistory()
});

// 2. Plugins
app.use({});

// 3. Model
app.model(model);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
