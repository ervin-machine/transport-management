import * as Yup from "yup";
export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("password is required"),
});
