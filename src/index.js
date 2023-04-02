import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/siteheader';
import Body from './body/body';
import Footer from './footer/footer';
import './index.css';

const reftext = [
    ["hello", "Первый раздел"],
    ["price", "Второй раздел"],
    ["contacts", "Третий раздел"]]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='wrapper'>
        <Header attrs = {reftext}/>
        <Body attrs = {reftext}/>
        <Footer />
    </div>
);
