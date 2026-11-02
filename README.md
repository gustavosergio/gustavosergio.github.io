# Gustavo Sérgio · Portfólio Full Stack

Portfólio pessoal em português e inglês, com tema escuro por padrão, preferência de tema persistida e layout responsivo.

**Site:** https://gustavosergio.github.io

## Stack e execução

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 e Lucide React. Animações em CSS, sem biblioteca adicional. Node.js 24 e npm.

```sh
npm ci
npm run dev
```

Verificações e exportação:

```sh
npm run lint
npm run typecheck
npm run build
```

O build gera `out/`, pronto para um servidor estático. `output: 'export'`, imagens sem serviço de otimização e nenhum `basePath`. Sem backend, chaves ou serviços pagos.

## Estrutura e manutenção

- `src/data/content.ts`: traduções PT/EN, projetos e tecnologias. Adicione projetos ao array e traduza seu conteúdo nas duas línguas; o componente usa o primeiro projeto como destaque.
- `src/components/portfolio.tsx`: layout e interações; componente `External` centraliza a proteção de links externos.
- `src/app/globals.css`: identidade visual, temas, breakpoints, foco e movimento reduzido.
- `src/app/layout.tsx`: SEO e Open Graph.
- `public/fotominha3.jpeg`: cópia original, sem edição. O enquadramento é feito por CSS.
- `scripts/generate-og.mjs`: gera o PNG de compartilhamento com `node scripts/generate-og.mjs` (usa Sharp, fornecido pelo Next.js).
- `.github/workflows/deploy.yml`: validação, build e deploy automático em pushes para `main`.

Para adicionar e-mail ou LinkedIn, substitua o botão desabilitado por um link real no bloco de contato. Para o currículo, adicione o PDF a `public/` e use um link com `download`. Nunca publique dados pessoais sem verificar os destinos. Atualize o período acadêmico em ambas as traduções quando necessário.

## Publicação no GitHub Pages

No repositório, abra **Settings → Pages → Build and deployment → Source → GitHub Actions**. O workflow publica o artefato `out/` ao enviar mudanças para `main`. Caso a primeira execução tenha falhado antes de ativar Pages, use **Actions → Deploy portfolio to GitHub Pages → Run workflow**. Nunca faça force push.

## Conteúdo verificado e pendências

O README e o package.json públicos de `gustavosergio/DonaSil` foram consultados. A descrição usa catálogo, carrinho, finalização pelo WhatsApp e gestão de produtos/estoque, em vez de afirmar um gateway de pagamentos. A URL de demonstração foi fornecida pelo proprietário.

O repositório informado para Dra. Juliana retornou HTTP 404 na consulta. O projeto aparece com descrição mínima fornecida pelo proprietário, sem tecnologias atribuídas, link ativo ou demonstração inventada. Os visuais dos cards são composições ilustrativas em CSS, identificadas como tal.

Pendentes: LinkedIn, e-mail profissional, currículo PDF e certificados concluídos. Contatos não fornecidos aparecem desabilitados. O contato ativo leva ao perfil público do GitHub, sem formulário ou envio de mensagem automático.

Metadados sociais têm português como idioma padrão; o conteúdo visível é traduzido integralmente no navegador. Preferências ficam no armazenamento local. Sem JavaScript, o conteúdo inicial em português permanece disponível.
