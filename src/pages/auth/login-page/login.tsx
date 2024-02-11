import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import strapi from '../../../services/strapi';

const Section = styled.section`
	width: 520px;
	height: auto;
	min-height: 150px;
	padding: 25px 0;
	margin: 50px auto 0 auto;
	border-radius: 12px;
	backdrop-filter: blur(10px);
	background: #0000005a;
	border: 1px solid rgba(255, 255, 255, 0.5);
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	padding: 15px 15px;
	box-sizing: border-box;
	border: 1px solid rgba(255, 255, 255, 0.3);
	background: transparent;
	color: white;
	border-radius: 8px;
	width: 100%;
	max-width: 320px;
	margin-bottom: 15px;

	&:active,
	&:focus {
		outline: none;
	}
`;

const Button = styled.button`
	background-color: transparent;
	border: 1px solid white;
	color: white;
	border-radius: 8px;
	width: 100%;
	padding: 15px;
	box-sizing: border-box;
	max-width: 320px;
	font-family: 'Open Sans', sans-serif;
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
		color: black;
		background: white;
		transition: all 0.3s ease-in-out;
	}
`;

const Title = styled.h3`
	margin-top: 0;
	margin-bottom: 10px;
	color: white;
	font-size: 36px;
	text-align: center;
	font-weight: 300;
`;

const LoginPage: FC = () => {
	const [formData, setFormData] = useState<{ email: string; password: string }>({
		email: '',
		password: '',
	});

	const { mutate, data, isPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: async ({ email, password }: { email: string; password: string }) => {
			return await strapi.login({ identifier: email, password });
		},
		onSuccess: data => {
			// dispatch data to redux
			console.log(data);
			// redirect('/login');
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
			<Title>Авторизация</Title>
			<Form onSubmit={handlerOnSubmit}>
				<Input
					type='text'
					name='email'
					placeholder='E-mail'
					value={formData.email}
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
					Войти
				</Button>
			</Form>
		</Section>
	);
};

export default LoginPage;
