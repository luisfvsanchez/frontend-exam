import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8)
`;

const FlexStyles = css` 
    display: flex;  
    flex-direction: column;
    align-items: center;
`;

export const MenuContainer = styled.div`
    ${FlexStyles}
    width: 35%; 
    justify-content: flex-start;

`;

export const PlaylistContainer = styled.div`
    ${FlexStyles}
    width: 65%;
    background-image: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1));
    border-left: 1px solid #3a3a3a;

`;

export const Menu = styled.div`
    ${FlexStyles};
    img {width: 75%};
    height: 75%;
    justify-content: space-around;

`;

export const ButtonsContainer = styled.div`;
    button:first-child {
        margin-bottom: 20px;
    }
    display: flex;
    flex-direction: column;
    width: 55%;
`;