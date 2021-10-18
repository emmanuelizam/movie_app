import React from 'react';
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
import TMDBLogo from '../../images/tmdb_logo.svg';
import RMDBLogo from "../../images/react-movie-logo.svg";


const Header = () => {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt="rmdb-logo"/>
                <TMDBLogoImg src={TMDBLogo} alt="tmdblogo" />
            </Content>
        </Wrapper>
    )
}

export default Header;