import styles from "./LoginScreen.module.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function LoginScreen() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const createAccountRoute = () => {
    navigate('/create-account');
  }

  const homeRoute = () => {
    navigate('/');
  }

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://dishdiary.onrender.com/api/users/login', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'cpf': cpf,
          'password': password
        }
      });
  
      if (!response.ok) {
        throw new Error('CPF ou senha inválidos');
      }
  
      const data = await response.json();
      console.log('Login realizado:', data);
  
      navigate('/my-experiences', { state: { cpf } });
    } catch (error) {
      console.error('Erro no login:', error);
      alert('CPF ou senha inválidos');
    }
  };

  return (
    <div className={styles.container}>
      {/* Back button */}
      <div className={styles.backButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={homeRoute}
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </div>
      {/* Main content */}
      <div className={styles.createAccountContent}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>Rank<b>Rango</b></h1>
        </div>

        {/* Create Account Form */}
        <div className={styles.formContainer}>
          <h2 className={styles.createAccountTitle}>Entrar</h2>
          <form className={styles.createAccountForm}>
            <input
              type="text"
              placeholder="CPF"
              className={styles.formInput}
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />

            <input
              type="password"
              placeholder="Senha"
              className={styles.formInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className={styles.showPasswordContainer}>
              <div className={styles.checkbox}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <label className={styles.showPasswordLabel}>Mostrar senha</label>
            </div>

            <button
              type="submit"
              className={styles.createAccountButton}
              onClick={login}
            >
              Entrar
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

            <button className={styles.signInNowButton} onClick={createAccountRoute}>Cadastre-se agora</button>
          </div>
        </div>
        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.footerLinks}>
            <div className={styles.footerLink}>
              Termos de Serviço
            </div>
            <div className={styles.footerLink}>
              Privacidade
            </div>
            <div className={styles.footerLink}>
              Ajuda
            </div>
          </div>
          <div className={styles.copyright}>© 2025 RankRango.</div>
        </div>
      </div>
    </div>
  )
}
