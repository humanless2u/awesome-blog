import React from "react";
import { Wrapper, Logo, StyledLink, StyledUl, StyledLi } from "./styles";

const Header = () => {
	return (
		<Wrapper>
			<Logo to="/">Awesome Blog</Logo>
			<StyledUl>
				<StyledLi>
					<StyledLink to="/">Home</StyledLink>
				</StyledLi>
				<StyledLi>
					<StyledLink to="/blog">Blog</StyledLink>
				</StyledLi>
				<StyledLi>
					<StyledLink to="/about">About</StyledLink>
				</StyledLi>
				<StyledLi>
					<StyledLink to="/contact">Contact</StyledLink>
				</StyledLi>
			</StyledUl>
		</Wrapper>
	);
};

export default Header;
