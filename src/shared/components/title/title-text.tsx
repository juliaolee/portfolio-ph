import { Typography } from "antd";

const { Title } = Typography;

interface TitleTextProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5;
}

export const TitleText = ({ children, ...props }: TitleTextProps) => {
  return <Title {...props}>{children}</Title>;
};
