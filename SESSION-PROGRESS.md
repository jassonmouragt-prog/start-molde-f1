# SESSION-PROGRESS — Start Molde F1 (landing page premium)

## Objetivo
Landing page do curso **Start Molde F1** (Carol Olmena / Carol Menan Nails) em Next.js 16, com visual premium. **Nova diretriz validada**: a página deve seguir EXATAMENTE a estrutura, ordem e o texto do export Canva (mesma copy, mesmos blocos, mesma estratégia) — apenas execução visual elevada. Não criar seções novas, não reordenar, não reescrever copy.

## Arquitetura final (espelha o Canva, nesta ordem)
1. **Hero** (`inicio`) — eyebrow "Start Molde F1 · Curso online de alongamento em gel", H1 "Domine o molde e eleve o nível de entrega dos seus alongamentos!", 3 parágrafos, faixa de credibilidade (6 anos / certificado internacional / alunas 100% satisfeitas), CTA "Quero aprender do zero ao aperfeiçoamento" → Hotmart, 4 badges (Compra 100% segura · Certificado incluso · Garantia de 7 dias · 1 ano de acesso), imagem hero.jpg.
2. **Você vai aprender** (`aprender`) — faixa de linho, título + 3 cards editoriais numerados: Teoria do Molde F1 · Acoplagem sem lixamento · Todos os tipos de unhas.
3. **Chave da profissão** (`profissao`) — split editorial: título com "chave" em itálico + parágrafo da chave + checklist 5 itens + imagem probe-nail3.
4. **Pra quem é o curso?** (`para-quem`) — faixa creme, título + 3 linhas com diamonds.
5. **Quem vai te ensinar?** (`carol`) — faixa espresso escura, retrato em arco (instrutora.jpg) + nome "Ana Carolina", role "Nail Designer & Instrutora de Unhas", bio 3 blocos + strip de stats (6 anos / +7.000 atendimentos / 3 formações).
6. **Oferta** (`oferta`) — faixa noir com glows: título "Quanto vale estar aqui?", lista 6 itens com checks, card de preço R$ 497,00 riscado → **R$ 297,00**, "À vista ou em até 12x de R$ 30,72", pagamento "Pix, boleto ou cartão em até 12x", CTA "Quero garantir minha vaga", segurança.
7. **Dúvidas** (`duvidas`) — centrado: "Ficou com alguma dúvida?" + CTA **"Fale comigo"** → WhatsApp.
8. **Footer** — minimalista: wordmark, "Fale comigo", © {ano} Carol Olmena · Todos os direitos reservados.

## Concluído (redesign fiel)
- `src/data/content.ts` reescrito com a estrutura de copy EXATA extraída do Canva (BRAND, HERO_HEADLINE, HERO_INTRO, CREDIBILITY, TRUST_BADGES, CTA_LEARN, LEARN_TITLE, LEARN_ITEMS, KEY_BODY, KEY_ITEMS, FOR_WHOM_TITLE, FOR_WHOM_ITEMS, INSTRUCTOR_TITLE/NAME/ROLE/BIO, OFFER_TITLE, OFFER_ITEMS, PRICE, DOUBTS_TITLE/CTA, FOOTER_COPYRIGHT/RIGHTS, CHECKOUT_URL, WHATSAPP_URL).
- **Removidas** as seções da antiga reinterpretação (não existem no Canva): Problem, Turn, Method, Benefits, Showcase, Transformation, Modules, Product, About, Proof, Guarantee, Faq, FinalCta, TrustBar + Marquee.
- **Novas seções fiéis**: `Hero.tsx` reescrito (layout 50/50, máscara de linha, badges, card de credibilidade flutuante), `Learn.tsx`, `KeySection.tsx`, `ForWhom.tsx`, `Instructor.tsx`, `Offer.tsx` reescrito (card de preço, `PRICE` sem campo installment), `Doubts.tsx`.
- `Header.tsx` — nav nova (Você vai aprender / Para quem é / Carol / Oferta), CTA "Quero garantir minha vaga · R$ 297 ou 12x"; `Footer.tsx` e `MobileCta.tsx` atualizados; `page.tsx` com a nova ordem.
- `primitives.tsx` ganhou `CheckIcon` (check em círculo bronze para listas).
- Tipografia/cores mantidas do design system anterior (Fraunces + Manrope, paleta marfim→espresso→noir). Backgrounds em sequência rítmica: ivory → linen → ivory → cream → espresso → noir → ivory → footer martfim.
- Tratamento de aspas/apóstrofos em JSX (regra `react/no-unescaped-entities`) respeitado.
- Verificações: `npm run lint` limpo · `npm run build` OK (prerender estático) · smoke test HTTP 200 confirmando toda a copy SSR.

## Overview visual pesada (direção de arte)
Mesma copy/seções/ordem — aparência high-end aplicada em toda a página:
- **Design system** (`globals.css`): paleta afinada (textos + contrast* — `muted #6c5b45`, `body #4c3a29`, bronze aprofundado), novas superfícies `surface-card` / `surface-card-dark` (gradiente + sombra em camadas), sistema de botões `.btn` (variantes ink/bone/bronze/ghost, sheen diagonal no hover, animação de seta, sombra elevada, `cursor: pointer`, foco via `:focus-visible` global `--color-focus`), hairlines de gradiente (`.hr-glow`/`.hr-glow-dark`), spotlights radiais, grão (`grain`/`grain-dark`), float sutil (`animate-float-soft`), underline animado de links (`.link-move`), scrollbar/selection/caret themizados.
- **Hero**: hierarquia forte, H1 maior com ênfase em itálico serifada "o nível de entrega", pill de marca com diamond, credibilidade com hairlines, CTA primário + "Fale comigo" (WhatsApp), badges 2×2 refinados com ícones em quadrados bronze, composição visual: moldura offset creme + imagem em parallax (clip-path reveal) + card da especialista flutuante + chip de preço flutuante com `R$ 297,00`, watermark "Star", scroll parallax sutil.
- **Hero v3 (Banners dedicados)**: Removida toda a estrutura HTML anterior (H1, textos, CTAs sobre o banner, badges, cards sobrepostos e molduras). Implementado hero exclusivo por dispositivo usando `next/image` (`priority`, `quality={90}`, `sizes="100vw"`): `/banner-hero-desktop.png` (1672x941) para telas `>= 768px` e `/banner-hero-mobile.png` (941x1672) para `< 768px`. Encaixe direto logo após o header (`pt-[76px]`), sem margens laterais, sem border-radius, sem layout shift.
- **Você vai aprender**: triptych editorial — cards com gradiente radial no canto, top-line de bronze no hover, diamond rotacionado, seta circular, elevam no hover com sombras profundas.
- **Chave da profissão**: coluna sticky com título e o "chave" em itálico, corpo em lead, checklist em "spec rows" (check em anel bronze que preenche no hover + "Faz parte"), figura probe-nail3 com moldura offset e chip "Apenas 10% de lixamento da estrutura" (copy real).
- **Pra quem é o curso?**: linhas editoriais com aspas serifadas enormes, watermark de aspas, setas circulares, hover premium, top-line gradiente.
- **Quem vai te ensinar?**: atmosfera espresso com grão + glows + watermark "Ana Carolina", retrato em arco com anel de gradiente ouro, spotlight atrás da cabeça, chip flutuante nome/role, drop-cap no 1º parágrafo, stats em células com divisores (valores ampliados em itálico tabular).
- **Oferta**: uma das peças mais fortes — card de preço com anel de gradiente ouro→vinho (borda 1.5px), brilho radial atrás, "de R$ 497,00" riscado + selo "por apenas", **R$ 297,00** em display gigante imediato, nota de parcela em itálico ouro, chips de pagamento (Pix/Boleto/Cartão), CTA bone full-width, microcopy de segurança, watermark "297", glow que intensifica no hover.
- **Dúvidas / Footer / Header / MobileCta**: anéis concêntricos + botão WhatsApp premium; footer com hairline de gradiente e CTA "Fale comigo" em pill; header com wordmark em bloco bronze + nav com underline animado + CTA com chip de preço; CTA móvel em barra espresso com hairline ouro.
- **Animações premium e controladas**: reveals em stagger (Reveal), máscaras de clip-path, blur→foco no H1, parallax (ParallaxImage + ScrollTrigger), float de cards, sheen em botões — nada exagerado; respeita `prefers-reduced-motion` e é desligado <768px.
- Detector mecânico do skill Impeccable: **0 findings** sobre `src/`.

## Revisão mobile (concluída — 320–768px)
Base aplicada em toda a página conforme plano de refinamento responsivo (sem alterar copy/ordem/seções):
- **`globals.css`**: `-webkit-tap-highlight-color: transparent` no body; `.btn` com `touch-action: manipulation` e cursor-pointer; `.btn-md` min-height 48px; `.btn-lg` min-height 56px com padding maior ≥640px — quedas de área de toque evitadas.
- **`ParallaxImage.tsx`**: parallax/float desligados com `innerWidth < 768` (animações apenas desktop).
- **Hero**: compacto e banner-like — `pt-[96px]`, H1 `clamp(2.05rem,8vw,3.5rem)`, suporte `text-base`, CTA `w-full sm:w-auto`, pill de marca reduzida, imagem `rounded-[2rem]`, chip "Start Molde F1 · Curso online" sobre o banner, card da especialista `hidden md:block`, badges de confiança movidas para baixo da imagem no mobile (`md:hidden`; desktop segue na coluna de texto).
- **Escala de respiração**: seções claras `py-20` + dark `py-24`, desktop `lg:py-32/36`; gaps título `mt-6/7`, blocos `mt-8/10`, CTA `mt-9/10`; resposta fixada em px-5 (20px).
- **Learn**: cards mais baixos e densos (`p-6 sm:p-7 lg:p-10`, título 22→27px), sem quebrar o triptych desktop.
- **KeySection**: grid mobile empilhado com `gap-10`, checklist em linhas compactas (`py-3`), figura com `aspect-[5/4]` e chip de legenda dentro da imagem.
- **ForWhom**: cards full-width no mobile (`px-5 py-6`, texto 16px→20px), watermark de aspas `hidden md:block`, seta circular só `sm+`.
- **Instructor**: retrato arqueado com chip nome/role flutuante responsivo (`max-w-[92%]`, sem `whitespace-nowrap` quebrado), stats em `clamp(1.8rem,7.4vw,2.6rem)`, drop-cap preservada.
- **Offer**: hierarquia mobile = título → benefícios → **preço em foco** (`clamp(3.1rem,16vw,4.9rem)`) → CTA bone `w-full` → microcopy; card `p-6 sm:p-8 lg:p-10`, chips de pagamento com wrap, garantia só desktop.
- **Doubts**: presença final maior (`py-24`), CTA WhatsApp `w-full max-w-[420px] sm:w-auto`, anéis concêntricos mantidos.
- **Footer & Header**: Adicionada a logo oficial (`/logo-start.png`) no Header (wordmark) e no Footer, com dimensionamento responsivo proporcional.
- Validação: lint limpo · build OK (prerender estático) · SSR HTTP 200 (144 KB, copy confirmada via marcadores).

## Concluído nesta sessão (deploy)
- **GitHub**: Push bem-sucedido via `gh auth setup-git`. Repositório: https://github.com/jassonmouragt-prog/start-molde-f1
- **Vercel**: Deploy em produção. URL: https://start-molde-f1.vercel.app
- **Marquee premium**: Implementada entre Hero e Learn — fundo espresso, hairlines ouro, itens "START MOLDE F1" / "SIGNATURE METHOD" / "ESTRUTURA & TÉCNICA" / "RESULTADOS REAIS" / "ALONGAMENTO EM GEL" / "DOMÍNIO DO MOLDE", ícones NailF1, 32s animation, hover pause, fade masks, respeita `prefers-reduced-motion`.
- Build e lint validados no deploy (0 erros, 2 warnings não-críticos).
- Todos os assets verificados no ar: logo-start.png, banner-hero-desktop.png, banner-hero-mobile.png, imagem-secao-02.png, imagem-sobre-a-profissional.png.

## Pendente / próxima ação recomendada
- Confirmar ritmo de fundos e espaçamentos entre seções com a Carol (último passe mobile feito; estado pronto para review).
- Substituir `metadataBase` (baseado no Canva) quando houver domínio definitivo de deploy — atualmente usa URL Vercel.
- Validar responsividade mobile/desktop em browser real (360/390/430/768/1280/1440/1920) — limitação conhecida deste ambiente.

## Quebrado
- Nenhum erro conhecido. Lint, build e SSR validados no estado atual.

## Links reais usados e URLs de deploy
- **GitHub**: https://github.com/jassonmouragt-prog/start-molde-f1
- **Vercel (produção)**: https://start-molde-f1.vercel.app
- Checkout Kiwify: `https://pay.kiwify.com.br/8EVZdIl`
- WhatsApp: `https://wa.me/message/R54BGOIKA56BJ1`
- Preço verdadeiro: De R$ 497 → R$ 297 à vista ou 12x R$ 30,72 (Pix, boleto, cartão).
- Garantia: incondicional de 7 dias · Acesso: imediato, 1 ano · Certificado incluso.