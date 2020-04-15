import React, { Component } from "react";
import { Form as BaseForm, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Form from "../../../components/Form/Form";

class RegisterForm extends Component {
  render() {
    const success = true;

    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };

    return (
      <>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <Form>
          {!success ? (
            <BaseForm
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <BaseForm.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="E-Mail"
                  size="large"
                />
              </BaseForm.Item>
              <BaseForm.Item
                name="user"
                // hasFeedback
                // validateStatus="success"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="user"
                  placeholder="Ваше имя"
                  size="large"
                />
              </BaseForm.Item>
              <BaseForm.Item
                name="password"
                // hasFeedback
                // validateStatus="success"
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
                  placeholder="Пароль"
                  size="large"
                />
              </BaseForm.Item>
              <BaseForm.Item
                name="password"
                // hasFeedback
                // validateStatus="success"
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
                  placeholder="Повторить пароль"
                  size="large"
                />
              </BaseForm.Item>
              <BaseForm.Item>
                <Button type="primary" size="large">
                  Зарегистрироваться
                </Button>
              </BaseForm.Item>
              <Link className="auth__register-link" to="/login">
                Войти в аккаунт
              </Link>
            </BaseForm>
          ) : (
            <div className="auth__success-block">
              <div>
                <InfoCircleTwoTone style={{ fontSize: "46px" }} />
              </div>
              <h3>Подтвердите свой аккаунт</h3>
              <p>
                На Вашу почту отправлено письмо с ссылкой на подтверждение
                аккаунта.
              </p>
            </div>
          )}
        </Form>
      </>
    );
  }
}

export default RegisterForm;
