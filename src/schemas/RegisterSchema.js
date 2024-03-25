import { array, object, string, number } from "yup";
export const registerSchema = [
    {
      firstname: string().required("First Name is required"),
      lastname: string().required("Last Name is required"),
      companyName: string().required("Company Name is required"),
      email: string().email().required("Email is required"),
      password: string().required("Password is required")
                .min(8, 'Password is too short - should be 8 chars minimum.'),
      phoneNumber: string().required("Phone number is required"),
      address: string().required("Address is required"),
      postalCode: string().required("Postal code is required"),
      city: string().required("City is required"),
      country: string().required("Country is required"),
    },
    {
      trucks: array().of(
        object().shape({
          model: string().required("Truck Model is required"),
          manufactureyear: number("Must be a number").required("Manufacture year is required"),
        })
      ),
    },
    {
      trailers: array().of(
        object().shape({
          model: string().required("Trailer Model is required"),
          type: string().required("Type is required"),
          capacity: number("Must be a number").required("Capacity is required"),
        })
      ),
    },
    {
      drivers: array().of(
        object().shape({
          firstname: string().required("First Name is required"),
          lastname: string().required("Last Name is required"),
          licenses: string().required("Licenses are required"),
          birth: string().required("Birth is required"),
        })
      ),
    }
  ]
