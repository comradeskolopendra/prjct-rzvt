import { useMutation } from '@tanstack/react-query';
import { FC, FormEvent, useState } from 'react';
import { redirect } from 'react-router';
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

	const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutate({ email: formData.email, password: formData.password, username: formData.username });
	};

	return (
		<Section>
			<form onSubmit={submitHandler}>
				<input
					type='password'
					onChange={e => setFormData({ ...formData, password: e.currentTarget.value })}
				/>
			</form>
		</Section>
	);
};

export default RegsiterPage;
