import React, { useState, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useLogin } from "./login.query";
export const Login = () => {
  const { mutate, isSuccess, isError } = useLogin();
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);

  const onFinish = (values) => {
    setIsLoadingBtn(true);
    const { email, password } = values;
    mutate({ email, password });
  };
  useEffect(() => {
    (isSuccess || isError) && setIsLoadingBtn(false);
  }, [isSuccess, isError]);
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={isLoadingBtn}
        >
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
      {isError && <>error</>}
    </Form>
  );
};
