import React, { Component } from "react";
import { Form as BaseForm, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Form from "../../../components/Form/Form";

class LoginForm extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };

    return (
      <>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Form>
          <BaseForm
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <BaseForm.Item
              name="username"
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
                size="large"
              />
            </BaseForm.Item>
            <BaseForm.Item
              name="password"
              hasFeedback
              validateStatus="success"
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
                size="large"
              />
            </BaseForm.Item>
            <BaseForm.Item>
              <Button type="primary" size="large">
                Войти в аккаунт
              </Button>
            </BaseForm.Item>
            <Link className="auth__register-link" to="/register">
              Зарегистрироваться
            </Link>
          </BaseForm>
        </Form>
      </>
    );
  }
}

export default LoginForm;
