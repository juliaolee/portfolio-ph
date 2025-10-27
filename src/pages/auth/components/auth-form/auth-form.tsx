import { Button, Form, Input } from "antd";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { authFormSchema } from "./hooks";
import { type Auth } from "../../../../shared";
import { auth } from "../../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Item = Form.Item;

export const AuthForm = () => {
  type AuthFormSchema = z.infer<typeof authFormSchema>;

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<AuthFormSchema>({
    resolver: zodResolver(authFormSchema),
  });

  const onSubmit: SubmitHandler<Auth> = async (data) => {
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.username,
        data.password
      );

      const user = userCredential.user;
    } catch (error: any) {
      console.error("Firebase auth error:", error);

      // todo : вынести ошибки в отдельный файл
      let errorMessage = "Ошибка входа";

      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "Пользователь не найден";
          setError("username", { message: " " });
          break;
        case "auth/wrong-password":
          errorMessage = "Неверный пароль";
          break;
        case "auth/invalid-email":
          errorMessage = "Неверный email";
          break;
        case "auth/too-many-requests":
          errorMessage = "Слишком много попыток. Попробуйте позже";
          break;
        default:
          errorMessage = error.message || "Неизвестная ошибка";
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      style={{ maxWidth: 600 }}
      onFinish={handleSubmit(onSubmit)}
    >
      <Item
        help={errors.username?.message}
        validateStatus={errors.username && "error"}
      >
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Username" disabled={loading} />
          )}
        />
      </Item>

      <Item
        help={errors.password?.message}
        validateStatus={errors.password && "error"}
      >
        {" "}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password
              {...field}
              placeholder="Password"
              disabled={loading}
            />
          )}
        />
      </Item>

      <Item label={null}>
        <Button type="primary" disabled={loading} htmlType="submit">
          {loading ? "Entering..." : "Enter"}
        </Button>
      </Item>
    </Form>
  );
};
