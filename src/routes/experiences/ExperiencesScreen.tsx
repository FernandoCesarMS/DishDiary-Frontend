import styles from "./ExperiencesScreen.module.css"
import { Home, CookingPot, Bolt } from "lucide-react"
import panela from './panela.png';
import { useNavigate } from 'react-router-dom';

export default function ExperienceScreen() {
  const navigate = useNavigate();
  const loginRoute = () => {
    navigate('/login');
  }

  const createAccountRoute = () => {
    navigate('/create-account');
  }

  const homeRoute = () => {
    navigate('/');
  }

  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.myBooksHeader}>
        <h1>Experiências</h1>
      </div>

      {/* Main content */}
      <div className={styles.myBooksContent}>
        <div className={styles.myBooksWrapper}>
          <h2 className={styles.myBooksTitle}>
            Registre e descubra os sabores que já provou — e os que ainda estão na sua lista de desejos.
          </h2>

          <div className={styles.bookshelfContainer}>
            <img
              src={panela}
              alt="Panela decorativa"
              style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </div>

          <button className={styles.signUpButtonBig} onClick={createAccountRoute}>Cadastrar</button>

          <div className={styles.alreadyMember}>
            <span>Já possui cadastro? </span>
            <div className={styles.signInLink} onClick={loginRoute}>
              Entrar
            </div>
          </div>
        </div>
      </div>


      {/* Bottom navigation */}
      <div className={styles.bottomNav} style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#fff', zIndex: 10 }}>
        <div className={styles.navItems}>
          <div className={styles.navItem} onClick={homeRoute}>
            <Home className={styles.navIcon} />
            <span className={styles.navText}>Entrar</span>
          </div>
          <div className={styles.navItem}>
            <CookingPot className={styles.navIconActive} />
            <span className={styles.navTextActive}>Experiências</span>
          </div>
          <div className={styles.navItem}>
            <Bolt className={styles.navIcon} />
            <span className={styles.navText}>Config</span>
          </div>
        </div>
        {/* Bottom indicator line */}
        <div className={styles.bottomIndicator}>
          <div className={styles.indicatorActive}></div>
        </div>
      </div>
    </div>
  )
}
