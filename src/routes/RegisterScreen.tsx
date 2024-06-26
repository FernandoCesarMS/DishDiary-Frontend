import React, { useState } from 'react';
import * as CSS from '../App.styles';
import { useNavigate } from 'react-router-dom';

function RegisterScreen() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const backToInitialScreen = () => {
    navigate('/');
  }

  const isValidCPF = (cpf: string) => {
    // Expressão regular para validar CPF
    return true;
  }

  const isValidEmail = (email: string) => {
    // Expressão regular para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const isValidTelefone = (telefone: string) => {
    // Expressão regular para validar o formato de telefone
    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return telefoneRegex.test(telefone);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Verificar se as senhas correspondem
    if (senha !== confirmSenha) {
      alert('As senhas não correspondem');
      return;
    }

    // Validar CPF
    if (!isValidCPF(cpf)) {
      alert('CPF inválido');
      return;
    }

    // Validar e-mail
    if (!isValidEmail(email)) {
      alert('E-mail inválido');
      return;
    }

    // Validar telefone
    if (!isValidTelefone(telefone)) {
      alert('Telefone inválido');
      return;
    }

    // Se todas as validações passaram, enviar os dados
    const userData = {
      cpf,
      telefone,
      email,
      senha
    };

    try {
      const response = await fetch('https://dishdiary.onrender.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Erro ao registrar usuário');
      }

      const data = await response.json();
      console.log(data);
      // Redirecionar ou exibir uma mensagem de sucesso
      alert('Usuário registrado com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao registrar usuário');
    }
  }

  return (
    <CSS.ContainerWithBackgroundImage>
      <CSS.ArrowIcon onClick={backToInitialScreen}/> 
      <CSS.ContentInitialScreen>
        <CSS.FormContainer>
          <form onSubmit={handleSubmit}>
            <label htmlFor="cpf">CPF</label>
            <input 
              type="text" 
              id="cpf" 
              name="cpf" 
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required 
            />

            <label htmlFor="telefone">Telefone</label>
            <input 
              type="tel" 
              id="telefone" 
              name="telefone" 
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required 
            />

            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />

            <label htmlFor="senha">Senha</label>
            <input 
              type="password" 
              id="senha" 
              name="senha" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required 
            />

            <label htmlFor="confirmSenha">Confirmação de Senha</label>
            <input 
              type="password" 
              id="confirmSenha" 
              name="confirmSenha" 
              value={confirmSenha}
              onChange={(e) => setConfirmSenha(e.target.value)}
              required 
            />

            <CSS.ButtonRegisterScreen type="submit">Registrar</CSS.ButtonRegisterScreen>
          </form>
        </CSS.FormContainer>
      </CSS.ContentInitialScreen>
    </CSS.ContainerWithBackgroundImage>
  );
}

export default RegisterScreen;
