import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { redirect } from 'react-router';
import styled from 'styled-components';
import strapi from '../../../services/strapi';

import { Input, Button, Title, Form, Section } from '../components';
import { CustomLink } from '../../../components/link/link';

const RegsiterPage: FC = () => {
	const [formData, setFormData] = useState<{ email: string; password: string; username: string }>(
		{ email: '', password: '', username: '' }
	);

	const { mutate, data, isPending } = useMutation({
		mutationKey: ['register'],
		mutationFn: async ({
			email,
			password,
			username,
		}: {
			email: string;
			password: string;
			username: string;
		}) => {
			return await strapi.register({ email, password, username });
		},
		onSuccess: () => {
			// dispatch data to redux

			redirect('/login');
		},
		onError: response => {
			console.log(response);
		},
	});

	const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormData(prevState => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handlerOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		mutate(formData);
	};

	return (
		<Section>
			<Title>Регистрация</Title>
			<Form onSubmit={handlerOnSubmit}>
				<Input
					type='email'
					name='email'
					placeholder='E-mail'
					value={formData.email}
					onChange={handlerOnChange}
				/>
				<Input
					type='text'
					name='username'
					placeholder='Имя пользователя'
					value={formData.username}
					onChange={handlerOnChange}
				/>
				<Input
					type='password'
					name='password'
					placeholder='Пароль'
					value={formData.password}
					onChange={handlerOnChange}
				/>
				<Button type='submit' disabled={isPending}>
					Регистрация
				</Button>

				<CustomLink style={{ marginTop: "15px" }} to={"/auth/login"}>
					Есть аккаунт?
				</CustomLink>
			</Form>
		</Section>
	);
};

export default RegsiterPage;
