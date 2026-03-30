# 📊 Digital Store — Painel Administrativo

<div align="center">
  <img src="src/assets/images/logo-header.svg" alt="Digital Store Logo" height="50" />
  <br /><br />

  ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
  ![Biome](https://img.shields.io/badge/Biome-2.4-60A5FA?logo=biome&logoColor=white)
  ![License](https://img.shields.io/badge/Licença-MIT-green)
</div>

<br />

> [!IMPORTANT]
> **Projeto Final — Geração Tech 3.0**
> Este repositório contém o **Painel Administrativo (Front-end)** da plataforma **Digital Store**, desenvolvido como **Trabalho Final do Curso** do **Geração Tech 3.0**. Trata-se de um E-commerce para vestuário e acessórios.

---

## 📦 O Ecossistema Digital Store

O projeto **Digital Store** é composto por **3 repositórios independentes** que juntos formam um ecossistema completo de E-commerce:

| Repositório | Descrição | Responsável por |
|---|---|---|
| **🖥️ digital-store-frontend** https://github.com/Caio-Ian-Oliveira/digital-store-frontend-client/tree/stable-version-v1 | Interface do consumidor final | Navegação de produtos, carrinho, checkout, gestão de pedidos e perfil do usuário |
| **🔧 digital-store-api** https://github.com/Caio-Ian-Oliveira/digital-store-api/tree/stable-version-v1 | API RESTful | Autenticação, CRUD de produtos, gestão de pedidos, controle de estoque, processamento de pagamentos e lógica de negócio |
| **📊 digital-store-admin** (este repo) | Painel administrativo | Cadastro/edição de produtos, gestão de categorias/marcas, visualização de pedidos e métricas do negócio |

### Como os projetos se conectam

```
┌──────────────────────┐         ┌──────────────────┐         ┌──────────────────────┐
│   Front-end Cliente  │◄───────►│    API (Back-end) │◄───────►│   Front-end Admin    │
│ (digital-store-frontend) │  HTTP   │   Express / REST  │  HTTP   │  (Este repositório)  │
│                      │ Cookies │                   │         │                      │
│  • Catálogo          │         │  • Auth JWT       │         │  • CRUD de Produtos  │
│  • Carrinho          │         │  • Rotas REST     │         │  • Gestão de Pedidos │
│  • Checkout          │         │  • Banco de Dados │         │  • Categorias/Marcas │
│  • Meus Pedidos      │         │  • Upload Imagens │         │  • Dashboard         │
│  • Perfil do Usuário │         │  • Validações     │         │                      │
└──────────────────────┘         └──────────────────┘         └──────────────────────┘
```

> O **Painel Admin** consome a mesma API que o **Front-end do Cliente**, porém com permissões e endpoints diferentes. A autenticação é feita via **HTTP-Only Cookies**, garantindo segurança contra ataques XSS.

---

## 🚀 Funcionalidades Implementadas

### 🔐 Autenticação & Autorização
- **Tela de Login** dedicada para administradores.
- **Rotas Protegidas** que exigem autenticação para acesso ao painel.
- **Controle de Acesso** baseado em permissões (ex: admin vs. editor).
- **Autenticação Segura** com **HTTP-Only Cookies**, prevenindo ataques XSS.
- **Gerenciamento de Sessão** com `interceptors` Axios para renovação automática de tokens.

### 📦 Gestão de Produtos (CRUD Completo)
- **Listagem Paginada** de todos os produtos com busca e filtros.
- **Criação e Edição** de produtos através de um formulário completo.
- **Upload de Múltiplas Imagens** com pré-visualização e ordenação.
- **Gerenciamento de Variações** (ex: cor, tamanho) e controle de estoque para cada variação.
- **Exclusão de Produtos** com diálogo de confirmação para evitar ações acidentais.
- **Validação de Dados** robusta utilizando **Zod** e **React Hook Form**.
- **Reordenação por Drag & Drop** da ordem de exibição dos produtos na vitrine.

### 📚 Gestão de Categorias (CRUD Completo)
- **Visualização** de todas as categorias cadastradas com busca e filtros.
- **Criação, Edição e Exclusão** de categorias em modais, sem a necessidade de recarregar a página.
- **Autogeração de Slug** a partir do nome da categoria, tanto na criação quanto na edição.
- **Associação de Produtos** a uma ou mais categorias.

### 🛒 Gestão de Pedidos
- **Listagem de Pedidos** com informações essenciais como cliente, data, status e valor total.
- **Visualização de Detalhes do Pedido** em um modal, incluindo produtos, quantidades e endereço de entrega.
- **Atualização de Status do Pedido** (ex: "Processando", "Enviado", "Entregue") com um clique.

### 👥 Gestão de Usuários
- **Listagem de Usuários** cadastrados na plataforma.
- **Filtros e Busca** por nome, e-mail, CPF, papel (USER/ADMIN) e inicial do nome.

### 📱 Interface Responsiva
- **Menu Lateral Adaptativo**: A sidebar é exibida em telas maiores e converte-se em um menu drawer acionado por um ícone "hamburger" em dispositivos móveis (< 1024px).
- **Overlay de Fechamento**: Ao abrir o menu em mobile, um fundo escurecido permite fechá-lo tocando fora.
- **Cabeçalhos Adaptados**: Títulos e botões de ação se empilham verticalmente em telas pequenas para evitar quebras de layout.
- **Tabelas com Scroll Horizontal**: Todas as tabelas suportam rolagem horizontal para garantir a legibilidade em telas estreitas.
- **Formulários Responsivos**: Os formulários de produto e categoria alternam entre 1 e 2 colunas dependendo do espaço disponível.

### 🎨 UI/UX Focado em Administração
- **Layout Administrativo** consistente com menu lateral de navegação.
- **Componentes Reutilizáveis** de alta qualidade (Inputs, Tabelas, Modais) construídos com **Radix UI**.
- **Feedback Visual Instantâneo** com Toasts (Sonner) para todas as operações (sucesso, erro).
- **Carregamento Progressivo** com estados de loading para uma experiência de usuário fluida.

---

## 💻 Tech Stack

| Camada | Tecnologia | Versão |
|---|---|---|
| **Framework** | React | 19 |
| **Linguagem** | TypeScript | 5.9 |
| **Build Tool** | Vite | 7 |
| **Estilização** | Tailwind CSS | 4 |
| **Componentes UI** | Radix UI | — |
| **State & Fetching** | TanStack Query (React Query) | 5 |
| **Roteamento** | React Router DOM | 7 |
| **Forms** | React Hook Form + Zod | 7 / 4 |
| **HTTP Client** | Axios | 1.13 |
| **Notificações** | Sonner | 2 |
| **Drag & Drop** | DND Kit | — |
| **Linter & Formatter** | BiomeJS | 2.4 |

---

## 🗂️ Arquitetura do Projeto (Feature-Based)

O projeto segue uma **arquitetura baseada em features** (domínios), separando responsabilidades por módulo de negócio para maior escalabilidade e manutenção:

```
src/
├── assets/                    # Imagens e SVGs globais
│
├── features/                  # 🎯 Módulos de domínio (Feature-Based)
│   ├── auth/                  # Autenticação e autorização
│   │   ├── components/        #   Componentes de proteção de rota (RequireAuth)
│   │   ├── context/           #   AuthContext para estado de sessão global
│   │   ├── hooks/             #   useAuth para acesso ao contexto
│   │   ├── pages/             #   Página de Login
│   │   ├── services/          #   Chamadas HTTP para autenticação
│   │   └── types/             #   Tipagens de usuário e sessão
│   │
│   ├── categories/            # Gestão de Categorias
│   │   ├── components/        #   Modais de formulário e exclusão
│   │   ├── hooks/             #   useCategories e useCategory
│   │   ├── pages/             #   Página de listagem de categorias
│   │   ├── schemas/           #   Esquemas de validação com Zod
│   │   ├── services/          #   Chamadas HTTP para o CRUD de categorias
│   │   └── types/             #   Tipagens de Categoria
│   │
│   ├── layout/                # Layout do painel administrativo
│   │   └── components/        #   AdminLayout (sidebar, header, outlet)
│   │
│   ├── orders/                # Gestão de Pedidos
│   │   ├── components/        #   Modal de detalhes, dropdown de status
│   │   ├── pages/             #   Página de listagem de pedidos
│   │   ├── services/          #   Chamadas HTTP para pedidos
│   │   └── types/             #   Tipagens de Pedido
│   │
│   ├── products/              # Gestão de Produtos
│   │   ├── components/        #   Formulários, diálogos, upload de imagem, ordenação
│   │   ├── hooks/             #   useProductForm para lógica de formulário
│   │   ├── pages/             #   Páginas de listagem e edição
│   │   ├── schemas/           #   Esquema de validação de produto
│   │   ├── services/          #   Chamadas HTTP para o CRUD de produtos
│   │   └── types/             #   Tipagens de Produto
│   │
│   └── users/                 # Gestão de Usuários
│       ├── pages/             #   Página de listagem de usuários
│       ├── services/          #   Chamadas HTTP para usuários
│       └── types/             #   Tipagens de Usuário
│
├── shared/                    # Utilitários e lógica compartilhada
│   └── lib/                   #   Instância do Axios (api.ts), funções (utils.ts)
│
├── App.tsx                    # Componente raiz (Providers + Rotas)
└── main.tsx                   # Entry point da aplicação
```

---

## 📐 Convenções de Código

O projeto adota as seguintes regras para garantir consistência e manutenibilidade:

### JSDoc Obrigatório
Todos os componentes, hooks, funções e serviços devem conter comentários **JSDoc** em **Português (PT-BR)**, incluindo:
- `@param` para descrever cada parâmetro.
- `@returns` para descrever o valor retornado.
- Descrição clara do propósito da função ou componente.

```typescript
/**
 * Hook customizado para acessar o contexto de autenticação de forma segura.
 *
 * @returns {AuthContextType} O objeto contendo o estado do usuário e métodos de auth.
 * @throws {Error} Se o hook for utilizado fora de um AuthProvider.
 */
export function useAuth() { ... }
```

### Comentários Inline
Comentários inline devem ser escritos em **Português (PT-BR)** e explicar o "porquê" de decisões não óbvias, não o "o quê" do código.

### Linting e Formatação
- **BiomeJS** é utilizado para linting e formatação automática.
- Indentação com **tabs** e aspas **duplas** para strings.
- Execute `npm run check` para validar e corrigir automaticamente.

---

## ⚙️ Como Rodar Localmente

### Pré-requisitos
- **Node.js** v20+ (LTS recomendado)
- **npm** ou **yarn** instalados
- **API do Digital Store** rodando em background (veja a seção do ecossistema acima)

### Observações Importantes
> [!WARNING]
> **API Obrigatória:** Para que o painel administrativo funcione, a **API do Digital Store** precisa estar em execução. Para mais detalhes, acesse a documentação da API em [https://github.com/CaioIan/digital-store-api](https://github.com/CaioIan/digital-store-api).

> [!NOTE]
> **Criando uma Conta Admin:** Por padrão, todos os usuários são criados com a role `USER`. Para acessar o painel, você precisará:
> 1. Cadastrar um novo usuário através do front-end do cliente ([digital-store-frontend](https://github.com/CaioIan/digital-store-frontend)).
> 2. Acessar o banco de dados da aplicação.
> 3. Alterar a `role` do usuário recém-criado de `USER` para `ADMIN`.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/CaioIan/digital-store-admin.git
   cd digital-store-admin
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   A aplicação estará disponível em `http://localhost:5174`.

---

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite na porta 5174. |
| `npm run build` | Compila o projeto para produção (TypeScript + Vite). |
| `npm run preview` | Pré-visualiza o build de produção localmente. |
| `npm run lint` | Executa o linter do BiomeJS para encontrar erros. |
| `npm run format` | Formata todos os arquivos do projeto com BiomeJS. |
| `npm run check` | Executa lint, formatação e outras verificações com BiomeJS. |

---

## 🔐 Segurança

- **Autenticação Segura:** Tokens de autenticação são gerenciados via **HTTP-Only Cookies**, uma medida de segurança que mitiga ataques de Cross-Site Scripting (XSS), pois impede o acesso aos tokens por meio de scripts do lado do cliente.
- **Proteção de Rotas:** Rotas sensíveis do painel são protegidas pelo componente `<RequireAuth />`, que verifica se o usuário está autenticado antes de permitir o acesso.
- **Renovação Automática de Sessão:** **Interceptors Axios** são utilizados para interceptar requisições e respostas da API, permitindo a renovação automática de tokens de acesso sem interromper a experiência do usuário.
- **Validação de Dados:** A validação de formulários é realizada no client-side com **Zod**, garantindo que os dados enviados para a API estejam no formato correto, complementando a validação que já ocorre no back-end.

---

## 🏆 Sobre o Geração Tech 3.0

O **Geração Tech** é um programa de capacitação em tecnologia. Este projeto representa o **TF (Trabalho Final)** da turma 3.0, demonstrando na prática todos os conceitos aprendidos ao longo do curso, desde fundamentos de HTML/CSS/JS até arquitetura de aplicações modernas com React e TypeScript.

O ecossistema completo (Front-end Cliente + API + Painel Admin) foi desenvolvido para simular um cenário real de produto de E-commerce, com foco em:

- 📐 **Arquitetura escalável** — Feature-Based Design
- 🔒 **Segurança** — HTTP-Only Cookies, validação em múltiplas camadas
- ⚡ **Performance** — Assets WebP, React Query com cache inteligente, Vite
- 🎨 **UI/UX profissional** — Design System, componentes reutilizáveis
- 📱 **Responsividade** — Mobile-first, sidebar adaptativa, tabelas com scroll
- 🧹 **Código limpo** — TypeScript estrito, BiomeJS, JSDoc em PT-BR, zero warnings

---

<div align="center">
  <sub>Desenvolvido com ❤️ como projeto final do <strong>Geração Tech 3.0</strong></sub>
</div>
