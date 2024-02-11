import styled from "styled-components";

export const Input = styled.input`
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