# Trabalho-Dev-Web

Este é um projeto de desenvolvimento web utilizando Node.js e Express para o trabalho PI da UNIFEOB, com renderização de páginas dinâmicas através do EJS (Embedded JavaScript).

---

## 📝 Descrição do Funcionamento

Este sistema foi desenvolvido para calcular o frete de entrega dos produtos vendidos por assistência técnica.  
Ao receber os dados de origem, destino e dimensões/peso dos itens, o servidor Express processa as informações e retorna o valor do frete estimado diretamente na página renderizada pelo EJS.

---

## 👨‍🎓 Alunos:

- **Vinicius da Silva Giovaneli**  
  📧 viniciusdasilvagiovanelii613@gmail.com  
  🎓 RA: 24000478

- **João Gabriel da Silva**  
  📧 sjoao5498@gmail.com  
  🎓 RA: 25001142

- **Bryan Toledo de Oliveira**  
  📧 toledob379@gmail.com  
  🎓 RA: 1012023200082

- **Luis Felipe da Silva Nogueira**  
  📧 nogluis7@gmail.com  
  🎓 RA: 24000897

---

## 📁 Estrutura do Projeto

- `index.js` : Arquivo principal que inicia o servidor e define as rotas.  
- `views/` : Contém os arquivos `.ejs` responsáveis pelas páginas renderizadas.  
- `public/` : Diretório para arquivos estáticos como CSS, JavaScript e imagens.  
- `package.json` : Gerencia as dependências e scripts do projeto.  
- `node_modules/` : Diretório onde ficam as dependências instaladas.  
- `.vs/` : Arquivos de configuração do Visual Studio Code.

---

## 🚀 Instalação e Execução

Siga os passos abaixo para executar o projeto localmente:

1. Clone o repositório:  
   ```bash
   git clone https://github.com/joaosilva-prog/Trabalho-Dev-Web.git

2. Acesse o diretório do projeto:  
   ```bash
   cd Trabalho-Dev-Web

3. Instale as dependências:
   ```bash
   npm install

4. Inicie o servidor:
   ```bash
   node index.js

5. Acesse o projeto no navegador:
Abra o navegador e vá para http://localhost:3000 (ou a porta definida no index.js).

🛠️ Tecnologias Utilizadas:

Node.js: Ambiente de execução JavaScript no servidor.


Express: Framework web para Node.js.


EJS: Motor de templates para gerar HTML com JavaScript.
