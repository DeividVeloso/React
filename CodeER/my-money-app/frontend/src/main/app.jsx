import React from 'react';
import Header from '../common/template/header';
import SideBar from '../common/template/sideBar';
import Footer from '../common/template/footer';
import Messages from '../common/message/';
import '../common/template/dependencies';
import Routes from './routes';

const a = 1;
const b = 2;
a = 4;

export default props => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
    <Messages />
  </div>
);
