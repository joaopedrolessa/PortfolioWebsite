# Migração da prévia aprovada para Next.js

Data: 17/10/2026.

## Fonte visual e implementação

- Fonte: `preview/index.html` com `style.css`, `sections.css`, `dataprev.css`, `geometry.js`, `script.js` e `dataprev.js`, versão aprovada pelo usuário.
- Implementação: Next.js 16.4.2, React 19.3.1, TypeScript 6.0.2 e Tailwind CSS 4.3.3.
- Prévia aprovada: http://127.0.0.1:4174/
- Versão de produção local: http://127.0.0.1:3000/

## Evidências visuais

- Fonte: `mocks/approved-before-next.png`.
- Implementação desktop: `mocks/next-desktop.png`.
- Comparação lado a lado: `mocks/next-comparison.png`.
- Experiência: `mocks/next-about.png`.
- Celular: `mocks/next-mobile.png` e `mocks/next-mobile-experience.png`.
- Desktop: viewport CSS 1366 × 1000; imagens 1351 × 989, excluindo barras do navegador. Comparação na mesma escala, tema e estado inicial.
- Celular: viewport CSS 390 × 844. Conteúdo com largura de 375 px, sem rolagem horizontal.

## Resultado da comparação

Não foram encontrados desvios P0/P1/P2. Família Inter, tamanhos, pesos, quebra do título, espaçamento, terminal, links e composição foram mantidos. A fonte Inter foi salva localmente; as diferenças entre quadros de partículas e geometria são esperadas, pois a animação continua em movimento.

A divisão em componentes React não alterou a ordem de leitura nem o conteúdo aprovado. Textos dos resumos e estudos de caso possuem teste de regressão contra a prévia original. O PDF final foi copiado byte a byte; o PDF demonstrativo não está na pasta pública.

## Interações verificadas no navegador

- Terminal com comando `projects` e resposta textual.
- Filtro Backend e busca por VetDash.
- Abertura dos dois estudos de caso, fechamento por botão e Escape.
- Dataprev: expandir com Enter, recolher com Space; tecnologias sempre visíveis.
- Abas de competências: clique e seta para a direita.
- Celular: expansão/recolhimento sem overflow.
- Cópia do e-mail com feedback de sucesso.
- Links para currículo final; arquivo HTTP 200.
- Canvas único após montagem, sem imagens ausentes, fonte carregada.
- Console sem erros durante os cenários testados.

## Verificações de código

- TypeScript estrito: aprovado, incluindo a compilação de produção.
- ESLint: aprovado sem avisos após ajuste de configuração.
- Testes: 3 aprovados (filtros e busca; preservação dos textos; integridade do PDF).
- Build de produção: aprovado, página principal estática, robots e sitemap gerados.

## Limites

O site está pronto localmente. Repositório externo e deploy na Vercel ainda não foram criados nesta etapa. A URL canônica depende de configurar `NEXT_PUBLIC_SITE_URL` com o endereço definitivo. Analytics e inglês continuam como evolução futura; não foram introduzidos na migração.

final result: passed
