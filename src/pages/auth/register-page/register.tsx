import { FC } from 'react';

import { ValidatedInput, Button, Title, Form, Section, RegisterLink } from '../components';

import { useForm, SubmitHandler } from 'react-hook-form';

import type { IFormValues } from '../interfaces';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const RegsiterPage: FC = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>({
		defaultValues: {
			email: "",
			password: ""
		}
	})

	const onSubmit: SubmitHandler<IFormValues> = async ({ email, password }) => {
		await createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
			console.log(`user: ${userCred.user} is registered`);
		}).catch(error => console.log(error.code))
	};

	return (
		<Section>
			<Title>Регистрация</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<ValidatedInput register={register} type='email' registerlabel='email' inputLabel='E-mail' errors={errors} />
				<ValidatedInput register={register} type='password' registerlabel='password' inputLabel='Пароль' errors={errors} />

				<Button type='submit'>
					Регистрация
				</Button>

				<RegisterLink to={"/auth/login"}>
					Есть аккаунт?
				</RegisterLink>
			</Form>
		</Section>
	);
};

export default RegsiterPage;
