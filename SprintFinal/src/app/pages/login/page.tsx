"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import BgLogin from "@/assets/img/BgLogin.jpeg"; 

export default function LoginPage() {
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState(''); 
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter(); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/logins/${usuario}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login bem-sucedido:', data);
        router.push('/'); 
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Erro ao fazer login');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      if (error instanceof Error && error.message === 'Failed to fetch') {
        setMessage('Servidor Tomcat está indisponível');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Erro ao realizar login');
        setTimeout(() => setMessage(''), 3000);
      }
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/logins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          usuario,
          email,
          senha,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(result);
        setTimeout(() => setMessage(''), 3000); 
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Erro ao cadastrar');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
      if (error instanceof Error && error.message === 'Failed to fetch') {
        setMessage('Servidor Tomcat está indisponível');
        setTimeout(() => setMessage(''), 3000); 
      } else {
        setMessage('Erro ao realizar cadastro');
        setTimeout(() => setMessage(''), 3000); 
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BgLogin.src})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative bg-white p-8 rounded shadow-md w-full max-w-md z-10">
        <h2 className="text-2xl font-bold mb-6 text-center">{isRegistering ? 'Cadastro' : 'Login'}</h2>
        {message && <p className="text-red-500 text-center mb-4">{message}</p>}
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          {isRegistering && (
            <div className="mb-4">
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          {isRegistering && (
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          )}
          <div className="mb-6">
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {isRegistering ? 'Cadastrar' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-indigo-600 hover:underline"
          >
            {isRegistering ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Cadastre-se'}
          </button>
        </div>
      </div>
    </div>
  );
}
