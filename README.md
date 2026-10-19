# João Pedro Lessa — Portfólio

Portfólio profissional desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Executar

Node.js 22.18+ (recomendado: 24) e pnpm 11.

```sh
pnpm install
pnpm dev
```

Acesse http://localhost:3000. Para verificar a versão de produção:

```sh
pnpm build
pnpm start
```

## Estrutura

- `src/app/`: página, layout, metadados, robots e sitemap.
- `src/components/`: seções e interações React (terminal, busca, abas, estudos de caso, copiar e-mail e expansão da Dataprev).
- `src/content/`: projetos, estudos de caso e experiência em arquivos JSON versionados.
- `src/lib/`: configurações do site, filtros e geometria animada com partículas e paralaxe.
- `public/assets/`: currículo final, fonte Inter e ícones.
- `tests/`: filtros, estudos de caso e validação do currículo público.

## Decisões

O conteúdo principal é renderizado pelo servidor. Somente recursos interativos usam componentes client. Não há formulário, banco de dados ou painel administrativo. O conteúdo fica em arquivos locais, organizado para permitir a futura versão em inglês.

Os estilos aprovados foram mantidos sem o reset de estilos do Tailwind, para preservar medidas, tipografia e aparência. Tailwind está integrado pelo PostCSS e disponível para utilitários. A fonte Inter é local, sem consulta ao Google Fonts em tempo de execução.

Os estudos de caso usam HTML editorial confiável, versionado no repositório, sem entrada externa. Não inserir HTML enviado por visitantes nesse conteúdo. As respostas do terminal são texto; nenhum comando de sistema é executado.

Partículas e geometria usam Canvas 2D com `requestAnimationFrame`, pausa fora da área visível e em abas inativas, limite de densidade de pixels e suporte a redução de movimento. Listeners e observers são removidos ao desmontar.

Seções são reveladas uma única vez ao rolar; conteúdo permanece disponível sem JavaScript. O botão da Dataprev comunica o estado via ARIA. Abas de competências aceitam setas, Home e End. Estudos de caso usam dialog nativo, com Escape e restauração de foco.

## Atualizar conteúdo e currículo

Edite `src/content/projects.json`, `experience.json`, `vet.json` ou `ai.json`. Textos institucionais ficam em `src/components/Sections.tsx`; competências em `Skills.tsx`.

Substitua `public/assets/Joao_Pedro_Lessa_Curriculo.pdf` para atualizar o PDF sem mudar os links. O documento de teste não é incluído na aplicação.

## Verificações

```sh
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

O GitHub Actions executa as quatro verificações. A revisão visual deve abranger desktop e celular, incluindo filtros, terminal, estudos de caso, currículo e expansão/recolhimento da experiência.

## Vercel

Importe o repositório como projeto Next.js. Comando de instalação: `pnpm install --frozen-lockfile`. Build: `pnpm build`. A Vercel detecta o resultado do Next automaticamente.

Defina `NEXT_PUBLIC_SITE_URL` com a URL real, incluindo `https://`, para os metadados, canonical e sitemap. O arquivo `.env.example` contém apenas uma sugestão; a disponibilidade do endereço ainda precisa ser verificada. Os links da página e do PDF são relativos e permitem mudar o domínio.

O deploy automático pode usar a integração Git da Vercel. O workflow de CI valida alterações; configure a proteção de branch se quiser exigir sua aprovação antes de integrar.

Este trabalho não publica o site nem cria um repositório externo automaticamente.

## Evolução

- Versão completa em inglês.
- Analytics agregado após escolher e configurar uma ferramenta.
- Novos projetos e aprofundamento dos estudos de caso.

## Créditos

Inter: Fontsource / licença SIL Open Font License. Ícones das tecnologias: Devicon (MIT). Ícones da interface: Feather (MIT). O estilo segue a referência visual fornecida pelo proprietário do portfólio.
