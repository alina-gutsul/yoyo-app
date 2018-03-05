import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import './styles/main.scss';
import App from './app/containers/App';


const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
  	<BrowserRouter>
  	    <App />
  	</BrowserRouter>
  </Provider> 
), document.getElementById('root'));
registerServiceWorker();
