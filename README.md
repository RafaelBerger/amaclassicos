#  Ama Clássicos

Single Page Application desenvolvida com **React + TypeScript**, consumindo dados de um CMS headless via **GraphQL**.

A aplicação funciona como uma vitrine digital para um catálogo de carros clássicos, com rotas dinâmicas e conteúdo totalmente gerenciável pelo CMS.

🔗 **Demo:** [https://amaclassicos.vercel.app/]

---

## 🚀 Como rodar o projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/RafaelBerger/amaclassicos.git
cd amaclassicos 
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione:

```env
VITE_HYGRAPH_ENDPOINT=ENDPOINT_DO_HYGRAPH
```

> O endpoint pode ser obtido no painel do Hygraph.

### 4️⃣ Rode o projeto

```bash
npm run dev
```


---

## 🛠 Tecnologias Utilizadas

- React  
- TypeScript  
- React Router (roteamento client-side)  
- Hygraph (Headless CMS)  
- GraphQL  
- CSS puro  

---

## 🧠 Arquitetura do Projeto

- Aplicação estruturada como **SPA (Single Page Application)**  
- Roteamento feito no client-side com React Router  
- Consumo de dados via GraphQL  
- Tipagem forte com TypeScript para maior previsibilidade  
- Separação da lógica de consumo de dados da camada visual  
- Componentização focada em reutilização e organização  

---

## ⚙️ Funcionalidades

- Listagem dinâmica de veículos  
- Página individual para cada carro  
- Rotas dinâmicas  
- Conteúdo gerenciável via CMS  
- Layout responsivo  
- Estrutura preparada para expansão futura  

---

## 🌐 Deploy

Projeto hospedado na **Vercel**.

Versão demonstrativa disponível para portfólio, utilizando dados fictícios.

---


## 👨‍💻 Autor

Desenvolvido por **Rafael Berger**
