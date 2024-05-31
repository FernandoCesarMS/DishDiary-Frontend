import * as CSS from '../App.styles';

function RegisterScreen() {
  return (
    <CSS.ContainerWithBackgroundImage>
      <CSS.ArrowIcon /> 
      <CSS.ContentInitialScreen>
        <CSS.FormContainer>
          <form>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" required />

            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="confirm-password">Confirmação de Senha</label>
            <input type="password" id="confirm-password" name="confirm-password" required />

            <CSS.ButtonRegisterScreen type="submit">Registrar</CSS.ButtonRegisterScreen>
          </form>
        </CSS.FormContainer>
      </CSS.ContentInitialScreen>
    </CSS.ContainerWithBackgroundImage>
  );
}

export default RegisterScreen;