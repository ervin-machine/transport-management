import * as Yup from "yup";
export const ProfitEvidenceSchema = Yup.object().shape({
  route: Yup.string().required("A route is required"),
  startP: Yup.string().required("A start point is required"),
  endP: Yup.string().required("A end point is required"),
  price: Yup.string().required("A price is required"),
  vinjeta: Yup.string(),
  vinjetaPrice: Yup.string().required("A vinjeta price is required"),
  vinjetaRoute: Yup.string().required("A vinjeta route is required"),
  fuelCompany: Yup.string().required("A fuel company is required"),
  fuelLitres: Yup.string().required("A fuel is required"),
  fuelPrice: Yup.string().required("A fuel price is required"),
  driverRoute: Yup.string().required("A driver route is required"),
  driverPrice: Yup.string().required("A driver price is required"),
});
