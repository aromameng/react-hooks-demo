import React from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";
import { Layout } from 'antd';
import './layout.less'

function Home(props) {
  const { route } = props;

  return (
    <Layout className="page">
      <header className="page_header">
        <NavLink to="/about" activeClassName="selected">首页</NavLink>
        <NavLink to="/count" activeClassName="selected">计数</NavLink>
        <NavLink to="/new" activeClassName="selected">新闻</NavLink>
      </header>
      {renderRoutes(route.routes)}
    </Layout>
  )
}

export default React.memo(Home);
