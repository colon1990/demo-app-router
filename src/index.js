import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Demo1 from './App';
// import Demo2 from './App2.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import App from './pages/1_BasicExample';
// import App from './pages/2_URL_Parameters';
// import App from './pages/3_Nesting';
// import App from './pages/4_Redirects_Auth';
// import App from './pages/5_Custom_Link';
// import App from './pages/6_Preventing_Transitions';
// import App from './pages/7_No Match_404';
// import App from './pages/8_Recursive_Paths';
// import App from './pages/9_sidebar';
// import App from './pages/10_animated_transitions';
// import App from './pages/11_route_config';
// import App from './pages/12_modal_gallery';
// import App from './pages/13_static_router';
// import App from './pages/14_query_parameters';






// ReactDOM.render(
//   <React.StrictMode>
//     <Demo2 />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

