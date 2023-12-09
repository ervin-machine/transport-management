import * as Yup from "yup";
export const AddRouteSchema = Yup.object().shape({
  driver: Yup.string().required("A driver is required"),
  truck: Yup.string().required("A truck is required"),
  deadline: Yup.string().required("A deadline is required"),
  price: Yup.string().required("A price is required"),
  companyName: Yup.string(),
  country: Yup.string().required("A country is required"),
  distance: Yup.string().required("A distance is required"),
  type: Yup.string().required("A type is required"),
  placefrom: Yup.string().required("A place from is required"),
  placeto: Yup.string().required("A place to is required"),
});
