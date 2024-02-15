import styled from "styled-components";
import { FC, InputHTMLAttributes } from "react";
import { UseFormRegister, Path, FieldErrors, FieldError } from "react-hook-form";
import type { IFormValues } from "../interfaces";

const Input = styled.input`
	padding: 20px;
	box-sizing: border-box;
	border: 1px solid rgba(255, 255, 255, 0.3);
	background: transparent;
	color: white;
	width: 100%;
	max-width: 520px;
	margin-bottom: 5px;
	font-size: 16px;
	border-radius: 50px;
	transition: all 0.3s linear;

	&:active,
	&:focus {
		outline: none;
		transition: all 0.3s linear;
		box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
	}
`;

const InputContainer = styled.div`
	position: relative;
	width: 100%;

	& label {
		position: absolute;
		top: -10px;
		left: 25px;
		color: white;
		background: #131316;
		padding: 0 5px;
	}

	& p {
		margin-bottom: 20px;
		margin-top: 0;
		color: white;
		margin-left: 20px;
	}
`

interface IValidatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
	registerlabel: Path<IFormValues>;
	inputLabel: string;
	register: UseFormRegister<IFormValues>;
	errors: FieldErrors<IFormValues>
}

export const ValidatedInput: FC<IValidatedInputProps> = ({ registerlabel, inputLabel, register, errors, type }) => {
	return (
		<InputContainer>
			<Input {...register(registerlabel, { required: true })} type={type} />
			<label>{inputLabel}</label>
			{errors[registerlabel]?.type === "required" && <p>Поле обязтально для заполнения</p>}
		</InputContainer>
	)
};