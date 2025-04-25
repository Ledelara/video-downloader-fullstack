# Video Downloader

Este é um projeto de baixador de vídeos que permite baixar vídeos de plataformas como YouTube diretamente para o seu computador.

## Tecnologias Utilizadas

- **Frontend:** React com TypeScript
- **Backend:** FastAPI com Python
- **Lib para Download de Vídeos:** yt-dlp

## Funcionalidade

O projeto consiste em um frontend em React, onde o usuário pode inserir a URL de um vídeo. O backend, desenvolvido em FastAPI, é responsável por processar a URL, fazer o download do vídeo usando a biblioteca **yt-dlp** e retornar o arquivo para o usuário.

## Features

- Inserção da URL do vídeo.
- Download direto do vídeo no formato .mp4.
- Backend em Python usando FastAPI.
- Frontend com React e TypeScript.
- Gerenciamento de arquivos temporários com remoção automática.

## Instalação

## Backend

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/SEU_USUARIO/video-downloader.git
   cd video-downloader/backend

2. **Crie e ative um ambiente virtual:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/MacOS
   .\venv\Scripts\activate   # Windows

3. **Instale as dependências:**

   ```bash
   pip install -r requirements.txt

4. **Execute o backend:**

   ```bash
   uvicorn run:app --reload

O servidor estará disponível em http://localhost:8080.

## Frontend

1. **Navegue até o diretório do frontend:**

   ```bash
   cd video-downloader/frontend

2. **Instale as dependências:**

   ```bash
   npm install

3. **Execute o frontend:**

   ```bash
   npm run dev
O frontend estará disponível em http://localhost:3000.

## Como usar

1. Abra o frontend em seu navegador.
2. Insira a URL do vídeo que deseja baixar (como um link do YouTube).
3. Clique em "Baixar". O vídeo será baixado diretamente para o seu computador.

## Como Funciona

- O frontend envia uma requisição para o backend, passando a URL do vídeo.
- O backend usa o yt-dlp para processar e baixar o vídeo.
- O vídeo é então retornado como resposta ao frontend, onde é forçado o download no formato .mp4.

## Contribuições

Sinta-se à vontade para abrir issues ou fazer pull requests. Todo tipo de contribuição é bem-vinda!
## Licença

[MIT](https://choosealicense.com/licenses/mit/)

Este projeto é licenciado sob a MIT License.

