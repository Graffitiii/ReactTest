import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Slide from './SlideContent'
import Slideimg from './carouselPage';
import Menu from './menu';
import Article from './article'
import Subcontent from './subcontent';
import reportWebVitals from './reportWebVitals';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Slideimg />
    <Menu />
    <Article />
    <Subcontent/>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
