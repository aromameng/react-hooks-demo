import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BlankLayout from "../layouts/BlankLayout";

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const About = lazy(() => import("../examples/About"));
const Count = lazy(() => import("../examples/count"));
const New = lazy(() => import("../examples/New"));


export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: HomeLayout,
        routes: [
          {
            path: "/",
            exact: true,
            name: '首页',
            render: () => <Redirect to={"/about"} />
          },
          {
            path: "/about",
            name: '关于',
            component: SuspenseComponent(About),
          },
          {
            path: "/new",
            name: '新闻',
            component: SuspenseComponent(New),
          },
          {
            path: "/count",
            name: '计数',
            component: SuspenseComponent(Count),
            // routes: [
            //   {
            //     path: "/recommend/:id",
            //     component: SuspenseComponent(Count)
            //   }
            // ]
          },
        ]
      }
    ]
  }
]