# Igor Adriano — SuperBio

Landing page (SuperBio) do personal trainer **Igor Adriano**.

O site é um **`index.html` standalone**: todo o CSS, JavaScript, imagens
(base64) e fontes já estão embutidos no próprio arquivo. Não há dependência
de assets externos além de Google Fonts e libs (GSAP/Lenis) via CDN.

O projeto está empacotado com **Vite** só para dar `npm run build` e o deploy
padrão na Vercel. O Vite usa o `index.html` da raiz como entrada e gera a
pasta `dist/`.

## Rodar / buildar

```bash
npm install
npm run dev      # ambiente local (http://localhost:5173)
npm run build    # gera dist/
npm run preview  # pré-visualiza o build
```

## GitHub

```bash
git init
git add .
git commit -m "Igor Adriano - SuperBio"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/igor-adriano.git
git push -u origin main
```

## Vercel

Importe o repositório na Vercel. Ela detecta o Vite automaticamente:

- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

O `vercel.json` já deixa isso configurado.

### Alternativa sem build (opcional)

Como o site é um único `index.html`, ele também funciona 100% estático,
sem Vite. Se preferir, apague `package.json`, `vite.config.js` e
`vercel.json`, deixe só o `index.html`, e na Vercel use Framework
Preset **Other** com Output Directory `.` (raiz).

## Observações

- Não há pasta `src/`: o site inteiro vive no `index.html` (standalone).
  Foi mantido assim de propósito para não alterar em nada o visual/funcionamento.
- Sem backend, sem banco, sem Supabase — é só frontend.
- Sem variáveis de ambiente / segredos.
- WhatsApp e Instagram configurados no topo do `<script>` do `index.html`
  (objeto `IGOR`).

---

Feito por AVLZ · @avlzsites
