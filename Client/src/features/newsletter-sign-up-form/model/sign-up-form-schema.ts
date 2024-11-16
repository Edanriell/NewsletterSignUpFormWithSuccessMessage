import * as Yup from "yup";

export const SignUpFormSchema = Yup.object().shape({
	emailAddress: Yup.string().email("Valid email required").required("Valid email required")
});
