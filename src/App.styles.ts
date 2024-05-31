import styled from 'styled-components';
import img from './assets/InitialScreenBackground.jpg';

export const ContainerInitialScreen = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex; /* Habilita flexbox */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Camada escura com opacidade de 50% */
        z-index: 1; /* Certifica-se de que a camada esteja acima da imagem */
    }

    /* Colocar o conteúdo acima da camada escura */
    & > * {
        position: relative;
        z-index: 2;
    }
`;

export const ContentInitialScreen = styled.div`
    z-index: 3;
    display: flex; /* Habilita flexbox para o conteúdo */
    justify-content: center; /* Centraliza o conteúdo horizontalmente */
    align-items: center; /* Centraliza o conteúdo verticalmente */
    display: flex;
    flex-direction: column;

    img {
        width: 30%;
        height: 15%;
    }
`;

export const ButtonInitialScreen = styled.button`
    margin-top: 5vh;
    background-color: transparent;
    border: 2px solid white; /* Borda sólida branca */
    color: white;
    font-size: 15px;
    font-weight: 500;
    height: 50px;
    width: 50vw;
    cursor: pointer;
`;



