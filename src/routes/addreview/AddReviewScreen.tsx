import styles from "./AddReviewScreen.module.css";
import { Compass, CookingPot, BadgePlus } from "lucide-react"
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function AddReviewScreen() {
    const navigate = useNavigate();
    const location = useLocation();
    const inputCPF = location.state?.cpf;

    const [estabelecimento, setEstabelecimento] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [prato, setPrato] = useState('');
    const [tipoPrato, setTipoPrato] = useState('');
    const [nota, setNota] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const novoReview = {
            usuario: inputCPF, // supondo que você tenha o CPF disponível no state
            estabelecimento,
            mensagem,
            prato,
            tipoPrato,
            nota: Number(nota),
        };

        try {
            const response = await fetch('https://dishdiary.onrender.com/api/reviews', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoReview),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar review');
            }

            const data = await response.json();
            console.log('Review enviado com sucesso:', data);
            // Redirecionar ou mostrar feedback aqui
        } catch (error) {
            console.error('Erro ao enviar review:', error);
        }
    };

    const exploreRoute = () => {
        navigate('/explore', { state: { cpf: inputCPF } });
    }

    const experiencesRoute = () => {
        navigate('/my-experiences', { state: { cpf: inputCPF } });
    }

    return (
        <div className={styles.container}>
                  {/* Header */}
      <div className={styles.myBooksHeader}>
        <h1>Adicionar review</h1>
      </div>

            <div className={styles.createAccountContent}>
                <div className={styles.logoContainer}>
                    <h1 className={styles.logo}>Rank<b>Rango</b></h1>
                </div>

                <div className={styles.formContainer}>
                    <form className={styles.createAccountForm} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Estabelecimento"
                            className={styles.formInput}
                            value={estabelecimento}
                            onChange={(e) => setEstabelecimento(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Descrição"
                            className={styles.formInput}
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Prato"
                            className={styles.formInput}
                            value={prato}
                            onChange={(e) => setPrato(e.target.value)}
                            required
                        />

                        <select
                            className={styles.formInput}
                            value={tipoPrato}
                            onChange={(e) => setTipoPrato(e.target.value)}
                            required
                        >
                            <option value="">Tipo de prato</option>
                            <option value="BURGER">Hambúrguer</option>
                            <option value="PIZZA">Pizza</option>
                            <option value="SUSHI">Sushi</option>
                            <option value="BRAZILIAN">Brasileira</option>
                            <option value="ARABIC">Árabe</option>
                            <option value="COFFEE_SHOP">Cafeteria</option>
                            <option value="CHINESE">Chinesa</option>
                            <option value="BARBECUE">Churrasco</option>
                            <option value="KOREAN">Coreana</option>
                            <option value="HEALTHY">Comida Saudável</option>
                            <option value="DESSERTS">Doces e Sobremesas</option>
                            <option value="FAST_FOOD">Fast Food</option>
                            <option value="FRENCH">Francesa</option>
                            <option value="SEAFOOD">Frutos do Mar</option>
                            <option value="INDIAN">Indiana</option>
                            <option value="ITALIAN">Italiana</option>
                            <option value="JAPANESE">Japonesa</option>
                            <option value="MEXICAN">Mexicana</option>
                            <option value="THAI">Tailandesa</option>
                            <option value="VEGAN">Vegana</option>
                            <option value="VEGETARIAN">Vegetariana</option>
                        </select>

                        <input
                            type="number"
                            placeholder="Nota (0 a 100)"
                            className={styles.formInput}
                            value={nota}
                            onChange={(e) => setNota(e.target.value)}
                            step={1}
                            min={0}
                            max={100}
                            required
                        />

                        <button type="submit" className={styles.createAccountButton}>
                            Enviar review
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.bottomNav}>
                <div className={styles.navItems}>
                    <div className={styles.navItem}>
                        <Compass className={styles.navIcon} onClick={exploreRoute} />
                        <span className={styles.navText}>Explorar</span>
                    </div>
                    <div className={styles.navItem}>
                        <CookingPot className={styles.navIcon} onClick={experiencesRoute} />
                        <span className={styles.navText}>Experiências</span>
                    </div>
                    <div className={styles.navItem}>
                        <BadgePlus className={styles.navIconActive} />
                        <span className={styles.navTextActive}>Adicionar</span>
                    </div>
                </div>
                {/* Bottom indicator line */}
                <div className={styles.bottomIndicator}>
                    <div className={styles.indicatorActive}></div>
                </div>
            </div>
        </div>
    );
}
