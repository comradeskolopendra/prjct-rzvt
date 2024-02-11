import styled from "styled-components";

export const Button = styled.button`
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
