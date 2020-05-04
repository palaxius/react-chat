import LoginForm from "../components/LoginForm";
import { withFormik } from "formik";
import validateForm from "../../../utility/validate";
import { connect } from "react-redux";
import store from "../../../redux/store";

import userActions from "../../../redux/actions/user";

const LoginFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    store.dispatch(userActions.fetchUserLogin(values)).then(() => {
      setSubmitting(false);
    });
  },
  displayName: "LoginForm",
})(LoginForm);

export default LoginFormContainer;
