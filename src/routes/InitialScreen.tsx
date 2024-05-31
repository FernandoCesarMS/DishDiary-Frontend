import * as CSS from '../App.styles';
import logotype from '../assets/pngegg.png'
import { useNavigate } from 'react-router-dom';

function InitialScreen() {

  const navigate = useNavigate();

  const register = () => {
    navigate('/register');
  }

  const login = () => {
    navigate('/login');
  }

  return (
    <CSS.ContainerWithBackgroundImage>
      <CSS.ContentInitialScreen>
        <img src={logotype} alt="logotype" />
        <CSS.ButtonInitialScreen onClick={login}>
          Entrar
        </CSS.ButtonInitialScreen>
        <CSS.ButtonInitialScreen onClick={register}>
          Cadastrar-se
        </CSS.ButtonInitialScreen>
      </CSS.ContentInitialScreen>
    </CSS.ContainerWithBackgroundImage>
  );
}

export default InitialScreen;
