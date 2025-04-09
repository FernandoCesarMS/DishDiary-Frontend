import styles from "./CreateAccountScreen.module.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CreateAccountScreen() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const loginRoute = () => {
    navigate('/login');
  }

  const homeRoute = () => {
    navigate('/');
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const novoUsuario = {
      nome,
      cpf,
      senha
    };
  
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao criar conta');
      }
  
      const data = await response.json();
      console.log('Conta criada com sucesso:', data);
  
      navigate('/my-experiences', { state: { cpf: novoUsuario.cpf } });
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      alert('Erro ao criar conta. Verifique os dados e tente novamente.');
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          onClick={homeRoute}>
          <path d="m15 18-6-6 6-6" />
        </svg>
      </div>

      <div className={styles.createAccountContent}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>Rank<b>Rango</b></h1>
        </div>

        <div className={styles.formContainer}>
          <h2 className={styles.createAccountTitle}>Criar Conta</h2>
          <form className={styles.createAccountForm} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Primeiro e último nome"
              className={styles.formInput}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="CPF"
              className={styles.formInput}
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Criar uma senha"
              className={styles.formInput}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <div className={styles.passwordHint}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={styles.infoIcon}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span>Senha deve ter mais que 6 caracteres.</span>
            </div>

            <div className={styles.showPasswordContainer}>
              <div className={styles.checkbox}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <label className={styles.showPasswordLabel}>Mostrar senha</label>
            </div>

            <button type="submit" className={styles.createAccountButton}>
              Criar conta
            </button>
          </form>

          <div className={styles.termsContainer}>
            <p>
              Criando uma conta, você concorda com os Termos de Serviço e Política de Privacidade
            </p>
          </div>
          <div className={styles.alreadyHaveAccount}>
            <div className={styles.dividerWithText}>
              <span className={styles.dividerLine}></span>
              <span className={styles.dividerText}>Já possui uma conta?</span>
              <span className={styles.dividerLine}></span>
            </div>

            <button className={styles.signInNowButton} onClick={loginRoute}>Entre agora</button>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerLinks}>
            <div className={styles.footerLink}>Termos de Serviço</div>
            <div className={styles.footerLink}>Privacidade</div>
            <div className={styles.footerLink}>Ajuda</div>
          </div>
          <div className={styles.copyright}>© 2025 RankRango.</div>
        </div>
      </div>
    </div>
  );
}
