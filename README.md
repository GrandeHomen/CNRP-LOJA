# 🎮 Cidade Nova Roleplay — Loja Oficial

Loja virtual moderna para servidor de MTA:SA, com tema dark e cor principal laranja (#FF8A06).

## 📦 Estrutura

- `index.html` — a loja em si
- `config.js` — **arquivo de configuração** (edite tudo por aqui)
- `README.md` — este arquivo

## 🚀 Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub
2. Faça upload dos 3 arquivos (`index.html`, `config.js`, `README.md`)
3. Vá em **Settings → Pages**
4. Em **Source**, selecione **Deploy from a branch**
5. Em **Branch**, escolha `main` e a pasta `/ (root)`
6. Clique em **Save**
7. Aguarde ~1 minuto. O site estará em: `https://seu-usuario.github.io/nome-do-repo/`

## ⚙️ Como personalizar

Abra o `config.js` e edite:

- **`store`** — nome, textos do hero, copyright
- **`colors`** — cores (laranja, fundo)
- **`discord`** — link do seu servidor Discord
- **`categories`** — categorias da loja
- **`products`** — produtos (nome, preço, imagem, categoria)
- **`cta`** — texto do CTA final
- **`footer`** — rodapé

### Adicionar um produto

Copie um bloco existente em `products` e edite:

```js
{
  name: 'Nome do produto',
  description: 'Descrição curta',
  price: 49.90,
  category: 'vips',         // slug de uma categoria
  image: 'https://...',     // URL da imagem
  emoji: '🎁',              // aparece se a imagem falhar
  bg: 'bg-vip',             // fundo do card
  tag: 'NOVO',              // opcional
}
