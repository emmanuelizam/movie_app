import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoImg = styled.img`
    width: 200px;
    @media screen and (max-width: 500px) {
        width: 150px;
    }
`

export const TMDBLogoImg = styled.img`
    width: 100px;
    @media screen and (max-width: 500px){
        width: 80px;
    }
`