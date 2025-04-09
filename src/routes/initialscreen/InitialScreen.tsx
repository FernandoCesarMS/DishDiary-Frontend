import styles from "./Initialscreen.module.css"
import { Home, CookingPot, Bolt } from "lucide-react"
import { useNavigate } from 'react-router-dom';

export default function InitialScreen() {
  const navigate = useNavigate();
  const loginRoute = () => {
    navigate('/login');
  }

  const createAccountRoute = () => {
    navigate('/create-account');
  }

  const experiencesRoute = () => {
    navigate('/experiences');
  }

  return (
    <div className={styles.container}>
      {/* Main content */}
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Goodreads logo */}
          <h1 className={styles.logo}>Rank<b>Rango</b></h1>

          {/* Tagline */}
          <p className={styles.tagline}>Registre suas experiências culinárias.</p>

          {/* Sign In button */}
          <button className={styles.signInButton} onClick={loginRoute}>Entrar</button>

          {/* Sign Up button */}
          <button className={styles.signUpButton} onClick={createAccountRoute}>Cadastrar</button>

          {/* Version */}
          <p className={styles.version}>Version 1.0.0</p>
        </div>
      </div>
      {/* Bottom navigation */}
      <div className={styles.bottomNav} style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#fff', zIndex: 10 }}>
        <div className={styles.navItems}>
          <div className={styles.navItem}>
            <Home className={styles.navIconActive} />
            <span className={styles.navTextActive}>Entrar</span>
          </div>
          <div className={styles.navItem} onClick={experiencesRoute}>
            <CookingPot className={styles.navIcon} />
            <span className={styles.navText}>Experiências</span>
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
