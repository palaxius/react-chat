import React from "react";
import { Form as BaseForm, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Form from "../../../components/Form/Form";
import validateField from "../../../utility/helpers/validateField";

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    status
    // isValid,
    // dirty,
  } = props;
  return (
    <>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Form>
        <BaseForm
          onSubmit={handleSubmit}
          name="normal_login"
          className="login-form"
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
          <BaseForm.Item>
            {/* {dirty && !isValid && (
                <span>
                  Пароль должен содержать хотя бы одну букву из верхнего
                  регистра, одну цифру и быть не меньше 8 символов
                </span>
              )} */}
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              type="primary"
              size="large"
            >
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
};

export default LoginForm;
