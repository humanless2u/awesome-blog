import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.nav`
	width: 100%;
	height: 80px;
	background-color: var(--primary-color);
	line-height: 80px;
	box-shadow: 0px 2px 3px 1px #000;
	@media screen and (max-width: 700px) {
		height: 400px;
		text-align: center;
	}
`;

export const Logo = styled(Link)`
	text-decoration: none;
	color: var(--font-color);
	font-size: 2rem;
	padding: 0px 40px;
`;

export const StyledUl = styled.ul`
	float: right;
	padding: 0px 20px;
	list-style: none;
	@media screen and (max-width: 700px) {
		float: none;
	}
`;

export const StyledLi = styled.li`
	display: inline-block;
	@media screen and (max-width: 700px) {
		display: block;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: var(--font-color);
	font-size: 1.2rem;
	padding: 0px 20px;
	line-height: 40px;
	&:hover {
		color: var(--background);
	}
	&:active {
		color: var(--background);
	}
`;
