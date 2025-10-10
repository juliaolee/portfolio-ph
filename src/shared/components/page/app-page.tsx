import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Typography } from "antd";
import { useState } from "react";
import { ROUTES } from "../../enum";
import { useLocation } from "react-router";

interface AppPageProps {
  children?: React.ReactNode;
}

type MenuItem = Required<MenuProps>["items"][number];

const { Link } = Typography;
const { Header, Content } = Layout;

export const AppPage = ({ children, ...props }: AppPageProps) => {
  const [current, setCurrent] = useState("home");
  const location = useLocation();

  const getCurrentKey = () => {
    const path = location.pathname.split("/")[1] || "home";
    return path === "" ? "home" : path;
  };

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  const items: MenuItem[] = [
    {
      key: ROUTES.HOME,
      label: <Link href="/">HOME</Link>,
    },
    {
      key: ROUTES.PORTFOLIO,
      label: <Link href={`/${ROUTES.PORTFOLIO}`}>PORTFOLIO</Link>,
    },
    {
      key: ROUTES.BLOG,
      label: <Link href={`/${ROUTES.BLOG}`}>BLOG</Link>,
    },
    {
      key: ROUTES.ABOUT,
      label: <Link href={`/${ROUTES.ABOUT}`}>ABOUT</Link>,
    },
    {
      key: ROUTES.CONTACTS,
      label: <Link href={`/${ROUTES.CONTACTS}`}>CONTACTS</Link>,
    },
  ];
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          background: "white",
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[getCurrentKey()]}
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          className="gap-5 "
        />
      </Header>
      <Content
        style={{ padding: "10px 48px 80px", overflow: "auto", height: "100vh" }}
      >
        <div
          style={{
            minHeight: 380,
            padding: 24,
            borderRadius: "16px",
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};
