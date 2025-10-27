import { AuthForm } from "./components";
import { TitleText } from "../../shared/components";

export const AuthPage = () => {
  return (
    <div className="flex flex-col items-center absolute inset-x-0 top-50 ">
      <TitleText level={3} className="m-10! ">
        Log In
      </TitleText>
      <AuthForm />
    </div>
  );
};
