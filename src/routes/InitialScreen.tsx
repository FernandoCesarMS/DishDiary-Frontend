import * as CSS from '../App.styles';
import logotype from '../assets/pngegg.png'

function InitialScreen() {
  return (
    <CSS.ContainerWithBackgroundImage>
      <CSS.ContentInitialScreen>
        <img src={logotype} alt="logotype" />
        <CSS.ButtonInitialScreen>
          Entrar
        </CSS.ButtonInitialScreen>
        <CSS.ButtonInitialScreen>
          Cadastrar-se
        </CSS.ButtonInitialScreen>
      </CSS.ContentInitialScreen>
    </CSS.ContainerWithBackgroundImage>
  );
}

export default InitialScreen;
