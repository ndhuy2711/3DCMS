import React, { memo } from "react";
import { Layout, Menu, theme, Breadcrumb } from "antd";
import { useUser } from ".";
import { Skeleton, Button } from "antd";
import { Routes } from "../route";
import { useLocation, matchPath, Link } from "react-router-dom";
import logo from "../assets/images/logo/logoLogin.png";
import { LogoutOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
export const LayoutAdmin = memo(({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const location = useLocation();
  const { isLoading, isSuccess, isError, data } = useUser();

  const user = data;
  const items = Routes.map((route, index) => {
    if (route.children) {
      return route.children.map((routeChild) => {
        return (
          routeChild?.name && {
            key: String(routeChild.key),
            icon: routeChild.icon,
            label: (
              <Link to={route.path + "/" + routeChild.path}>
                {routeChild.name}
              </Link>
            ),
            path: routeChild.path,
          }
        );
      });
    } else {
      return (
        route?.name && {
          key: String(route.key),
          icon: route.icon,
          label: <Link to={route.path}>{route.name}</Link>,
          path: route.path,
        }
      );
    }
  });
  const handleGetKey = Routes.map((route) => {
    if (route.children) {
      const checkArrRoute = () =>
        route.children.map((routeChildren) => {
          const allRoute = route.path + "/" + routeChildren.path;
          const isMatch = matchPath(allRoute, location.pathname);
          if (isMatch) {
            return routeChildren;
          } else {
            return null;
          }
        });
      const checkRoute = checkArrRoute().filter((route) => route !== null);
      return checkRoute[0];
    } else {
      if (route.path === location.pathname) {
        return route;
      } else {
        return undefined;
      }
    }
  }).filter((IsArrRoute) => IsArrRoute !== undefined);
  const defaultSelectedKey = handleGetKey[0].key;
  const handleBreadcrumb = () => {
    // const route = Routes.find((route) => route.path === location.pathname);
    // const route = Routes.map((route) => {
    //   if (route.children) {
    //     return
    //   } else {
    //     Routes.find((route) => route.path === location.pathname);
    //   }
    // });
    // const path = route.path;
    // const name = (
    //   <div>
    //     {route.icon}
    //     <span> {route.name} </span>
    //   </div>
    // );
    return { href: "path", title: "name" };
  };

  const breadcrumb = handleBreadcrumb();
  return (
    <div>
      {isLoading && <Skeleton active />}
      {isError && <div>Error </div>}
      {isSuccess && (
        <Layout className="h-screen">
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => broken}
            onCollapse={(collapsed) => collapsed}
          >
            <div className="demo-logo-vertical" />
            <div className="w-4/5 mx-auto my-9">
              <img alt="logo" src={logo} />
            </div>
            <hr className="w-3/5 mx-auto mb-6 border-1" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[String(defaultSelectedKey)]}
              items={items.flat()}
            />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              <div className="h-[inherit] flex items-center ml-6">
                <div>
                  <Breadcrumb separator="/" items={[breadcrumb]} />
                </div>
                <div className="absolute right-5">
                  <Button type="text" danger className="flex items-center">
                    <LogoutOutlined />
                    Logout
                  </Button>
                </div>
              </div>
            </Header>
            <Content
              style={{
                margin: "24px 16px 0",
              }}
            >
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {children ? (
                  React.cloneElement(children, { user })
                ) : (
                  <div>Loading</div>
                )}
              </div>
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}
            >
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      )}
    </div>
  );
});
