import React from "react";
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
import validateField from "../../../utility/helpers/validateField";

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    // isValid,
    // dirty,
  } = props;
  const success = false;
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
          >
            <BaseForm.Item
              validateStatus={validateField("email", touched, errors)}
              hasFeedback
              help={!touched.email ? "" : errors.email}
            >
              <Input
                prefix={<MailOutlined />}
                id="email"
                placeholder="E-Mail"
                size="large"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </BaseForm.Item>
            <BaseForm.Item
              validateStatus={
                !touched.user ? "" : errors.user ? "error" : "success"
              }
              hasFeedback
              help={!touched.user ? "" : errors.user}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="fullname"
                placeholder="Ваше имя"
                size="large"
              />
            </BaseForm.Item>
            <BaseForm.Item
              validateStatus={validateField("password", touched, errors)}
              hasFeedback
              help={!touched.password ? "" : errors.password}
            >
              <Input
                id="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                size="large"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </BaseForm.Item>
            <BaseForm.Item
              validateStatus={validateField("password", touched, errors)}
              hasFeedback
              help={!touched.password ? "" : errors.password}
            >
              <Input
                id="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password2"
                placeholder="Повторить пароль"
                size="large"
              />
            </BaseForm.Item>
            <BaseForm.Item>
              {/* {dirty && !isValid && (
                <span>
                  Пароль должен содержать хотя бы одну букву из верхнего
                  регистра, одну цифру и быть не меньше 8 символов
                </span>
              )} */}
              <Button onClick={handleSubmit} type="primary" size="large">
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
  // };
};
export default RegisterForm;
