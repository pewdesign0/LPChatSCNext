# ChatSC Next

Versão da landing page ChatSC migrada para Next.js, TypeScript e Material UI.

## Desenvolvimento

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Validação

```bash
npm run lint
npm run build
```

## Rotas

- `/` — landing page principal
- `/politica-de-privacidade` — política de privacidade
- `/termos-de-uso` — termos de uso

## Estrutura principal

- `src/app` — rotas, metadados e estilos globais
- `src/components` — componentes compartilhados
- `src/theme.ts` — tema Material UI da marca ChatSC
- `public/images` — imagens e identidade visual
- `public/script.js` — interações preservadas da versão original
