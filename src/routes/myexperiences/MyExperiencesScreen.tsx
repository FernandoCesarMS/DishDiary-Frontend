import styles from "./MyExperiencesScreen.module.css"
import { Compass, CookingPot, BadgePlus } from "lucide-react"
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Usuario {
  id: number;
  cpf: string;
  telefone: string;
  nome: string;
  email: string;
  senha: string;
}

interface Review {
  id: number;
  usuario: Usuario;
  estabelecimento: string;
  mensagem: string;
  prato: string;
  tipoPrato: string;
  nota: number;
}

export default function MyExperiencesScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const inputCPF = location.state?.cpf;

  const exploreRoute = () => {
    navigate('/explore', { state: { cpf: inputCPF } });
  }

  const addExperienceRoute = () => {
    navigate('/add-experience', { state: { cpf: inputCPF } });
  }

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("CPF: %s", inputCPF)
    fetch(`https://dishdiary.onrender.com/api/reviews/customer/${inputCPF}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        return response.json();
      })
      .then((data: Review[]) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.myBooksHeader}>
        <h1>Experiências Anteriores</h1>
      </div>
      <div className={styles.mainContent}>
        {loading && <p>Carregando...</p>}
        {error && <p>Erro: {error}</p>}
        {!loading && !error && (
          <div>
            {reviews.map((review) => (
              <div className={styles.activityList}>
                <div className={styles.activityItem}>
                  <div className={styles.activityContent}>
                    <div className={styles.activityTitle}>{review.prato}</div>
                    <div className={styles.activityUser}>
                    <span>{review.estabelecimento}</span>
                    </div>
                    <div className={styles.activityUser}>
                    <span>{review.mensagem}</span>
                    </div>
                  </div>
                  <div className={styles.activityTime}>{review.nota} de 100</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Bottom navigation */}
      <div className={styles.bottomNav}>
        <div className={styles.navItems}>
          <div className={styles.navItem} onClick={exploreRoute}>
            <Compass className={styles.navIcon}/>
            <span className={styles.navText}>Explorar</span>
          </div>
          <div className={styles.navItem}>
            <CookingPot className={styles.navIconActive} />
            <span className={styles.navTextActive}>Experiências</span>
          </div>
          <div className={styles.navItem} onClick={addExperienceRoute}>
            <BadgePlus className={styles.navIcon} />
            <span className={styles.navText}>Adicionar</span>
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
