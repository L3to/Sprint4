# Sprint 4

Confira o vídeo do Projeto aqui: [Link para o Vídeo](https://youtu.be/j04An_uHJBY)

## Visão Geral

Na Sprint 4, evoluímos nossa aplicação web para um modelo mais moderno e escalável. Substituímos o React Router pelo Next.js para otimizar o desempenho e simplificar o gerenciamento de rotas. Além disso, aplicamos o Tailwind CSS para a estilização, garantindo uma interface limpa e responsiva, e integramos uma API em Java para as operações de cadastro e login.

Introduzimos o modelo de IA da nossa aplicação, o *Bina*, que futuramente permitirá a previsão e cálculo de danos físicos em veículos, auxiliando na geração de orçamentos automáticos. Esse modelo foi desenvolvido no Google Cloud usando a Vertex AI AutoML.

## Funcionalidades

•⁠  ⁠(Futuro!) Análise de danos físicos do veículo com geração de orçamento.
•⁠  ⁠(Futuro!) Acesso às oficinas e serviços da Porto Seguro.
•⁠  ⁠Navegação otimizada e carregamento rápido com Next.js.
•⁠  ⁠Página HOME visualmente atraente e responsiva.
•⁠  ⁠Seção "Nossa Equipe" bem elaborada.
•⁠  ⁠Páginas de Login e SignUp integradas com a API Java, sem uso de localStorage.

## Vantagens do Next.js

A adoção do Next.js trouxe várias melhorias ao nosso projeto:

•⁠  ⁠*SSR e SSG*: O Next.js permite Renderização no Lado do Servidor (SSR) e Geração de Sites Estáticos (SSG), garantindo um carregamento mais rápido e uma melhor experiência de navegação.
•⁠  ⁠*Rotas automáticas*: A estrutura de rotas é baseada em pastas, simplificando o gerenciamento e reduzindo a configuração.
•⁠  ⁠*Melhor Experiência do Usuário*: As transições de páginas são mais rápidas, proporcionando uma navegação fluida.
•⁠  ⁠*SEO otimizado*: A renderização do lado do servidor ajuda no SEO, uma vantagem importante para uma aplicação de serviços.

## Integração com API de Cadastro/Login

Para o sistema de autenticação, integramos uma API em Java, que gerencia as operações de *cadastro* e *login* com métodos HTTP.
