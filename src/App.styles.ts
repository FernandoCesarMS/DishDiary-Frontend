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
