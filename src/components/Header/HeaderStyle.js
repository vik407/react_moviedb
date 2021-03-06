import styled from "styled-components";

/* --- HeaderStyle --- */
// Header->Wrapper
export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;
// Header->Content
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;
// Header->Logo
export const LogoImg = styled.img`
    width: 200px;
    @media screen and (max-width: 500px){
        width: 150px;
    }
`;
// Header->TMDBLogo
export const TMDBLogoImg = styled.img`
    width: 100px;
    @media screen and (max-width: 500px){
        width: 80px;
    }
`;
