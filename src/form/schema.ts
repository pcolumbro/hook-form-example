import { object, string } from 'yup';
import 'yup-phone-lite';

export const userSchema = object({
	firstName: string().required(),
	lastName: string().required(),
	email: string().email().required(),
	password: string()
		.min(8, "Password must be at least 8 characters")
		.required(),
	phone: string().phone().required(),
});