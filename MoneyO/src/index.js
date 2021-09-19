import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
import {AuthContextProvider} from './context/AuthContext'

Kommunicate.init("eebfeaf7429eb2570d023ebcffa557ea" , {"popupWidget" : true , "automaticChatOpenOnNavigation":true})

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
   <App />
  </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
