import { Box, Button, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { User } from "./type";
import { userSchema } from "./schema";
import { yupResolver } from '@hookform/resolvers/yup';
import { DevTool } from "@hookform/devtools";


const Form = () => {

	const { control, handleSubmit, formState: { errors } } = useForm<User>(
		{
			mode: 'all',
			resolver: yupResolver(userSchema),
			defaultValues: {
				firstName: "John	",
				lastName: "Doe",
				email: "john.doe@gmail.com",
				phone: "",
				password: "",
			},
		}
	);

	return (
		<Box margin={5} sx={{justifyContent: 'center', alignContent: 'center', display: 'flex'}}>
			<form onSubmit={handleSubmit(data => console.log(data))}>
				<Stack spacing={1} sx={{ width: "200px" }}>
					<Controller
						name="firstName"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="First Name"
								variant="outlined"
								helperText={errors.firstName?.message}
							/>
						)}
					/>
					<Controller
						name="lastName"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="Last Name"
								variant="outlined"
								helperText={errors.lastName?.message}
							/>
						)}
					/>
					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="Email"
								variant="outlined"
								helperText={errors.email?.message}
							/>
						)}
					/>
					<Controller
						name="phone"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="Phone"
								variant="outlined"
								helperText={errors.phone?.message}
							/>
						)}
					/>
					<Controller
						name="password"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="Password"
								variant="outlined"
								type="password"
								helperText={errors.password?.message}
							/>
						)}
					/>
					<TextField 
						label="Uncontrolled not part of the form field."
						variant="outlined"
					/>
				</Stack>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					sx={{ mt: 2 }}
				>
					Submit
				</Button>
				<DevTool control={control} /> {/* set up the dev tool */}
			</form>
		</Box>
	);
};
export default Form;