import styled from 'styled-components';
import img from './assets/InitialScreenBackground.jpg';
import arrow from './assets/left-arrow.png';

export const ContainerWithBackgroundImage = styled.div`
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

export const FormContainer = styled.div`
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.3); /* Fundo semi-transparente */
    border-radius: 10px;

    form {
        display: flex;
        flex-direction: column;
        width: 300px;
    }

    input {
        margin-bottom: 15px;
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    label {
        margin-bottom: 5px;
        font-size: 14px;
        color: white;
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

export const ButtonRegisterScreen = styled.button`
    background-color: transparent;
    border: 2px solid white; /* Borda sólida branca */
    color: white;
    font-size: 15px;
    font-weight: 500;
    height: 50px;
    width: 100%; /* Ajusta a largura do botão para 100% do formulário */
    max-width: 200px; /* Define uma largura máxima */
    cursor: pointer;
    display: block; /* Garantir que o margin: auto funcione corretamente */
    margin: 5vh auto; /* Centraliza o botão horizontalmente */
`;

export const ArrowIcon = styled.div`
    position: absolute;
    top: 2vh; /* Ajuste a posição vertical conforme necessário */
    left: 2vw; /* Ajuste a posição horizontal conforme necessário */
    width: 3vw; /* Largura da seta */
    height: 3vh; /* Altura da seta */
    background-image: url(${arrow});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer; /* Muda o cursor para pointer quando sobre a seta */
`;