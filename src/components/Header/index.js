import React from "react";

// Assets
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb-logo.svg";

// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./HeaderStyle";

// Component
const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={RMDBLogo} alt="RMDBLogo" />
      <TMDBLogoImg src={TMDBLogo} alt="TMDBLogo" />
    </Content>
  </Wrapper>
);

export default Header;
