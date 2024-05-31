import * as CSS from '../App.styles';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const navigate = useNavigate();

  const backToInitialScreen = () => {
    navigate('/');
  }

  return (
    <CSS.ContainerWithBackgroundImage>
      <CSS.ArrowIcon onClick={backToInitialScreen}/> 
      <CSS.ContentInitialScreen>
        <CSS.FormContainer>
          <form>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" required />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />

            <CSS.ButtonRegisterScreen type="submit">Entrar</CSS.ButtonRegisterScreen>
          </form>
        </CSS.FormContainer>
      </CSS.ContentInitialScreen>
    </CSS.ContainerWithBackgroundImage>
  );
}

export default LoginScreen;