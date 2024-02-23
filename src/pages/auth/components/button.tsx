import styled from "styled-components";

export const Button = styled.button`
	background-color: transparent;
	border: 1px solid white;
	color: white;
	border-radius: 8px;
	width: 100%;
	padding: 15px;
	box-sizing: border-box;
	max-width: 160px;
	font-family: 'Open Sans', sans-serif;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	font-size: 16px;
	margin-top: 15px;
	border-radius: 50px;

	&:hover {
		color: black;
		background: white;
		box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
		transition: all 0.3s ease-in-out;
	}
`;
