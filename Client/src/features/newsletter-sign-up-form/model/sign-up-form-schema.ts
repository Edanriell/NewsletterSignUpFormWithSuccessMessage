import * as Yup from "yup";

export const SignUpFormSchema = Yup.object().shape({
	emailAddress: Yup.string().email("Invalid email").required("Required")
});
