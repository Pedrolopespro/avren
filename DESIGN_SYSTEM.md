# AVREN Design System

## Direção

O sistema visual deve parecer um financial club de alta classe: reservado, cinematográfico, preciso e editorial. A direção é **Old Money Modern**: códigos de clube privado, sobriedade institucional, fotografia escura, off-white editorial e tipografia contemporânea. A referência não é "banco digital"; é mais próxima de hotelaria de luxo, private club, arquitetura institucional e revista premium.

Palavras-guia:
- Discreto
- Estratégico
- Institucional
- Sensorial
- Reservado
- Atemporal

---

## Marca AVREN

A marca deve permanecer como elemento central da identidade. A matriz oficial em PNG deve ser usada para manter nitidez, proporção e consistência de aplicação em telas, materiais editoriais e peças impressas.

### Arquivos-matriz
- **Padrão / ivory:** `assets/avren logos/padrao/`
- **Branco:** `assets/avren logos/branco/`
- **Preto:** `assets/avren logos/preto/`
- **Uso principal no projeto:** `avren_logo_full_horizontal_ivory_transparente.png` e `avren_icone_ivory_transparente.png`

### Regras de uso
- Usar preferencialmente sobre verde profundo, preto absoluto ou creme editorial.
- Preservar sempre a proporção original; não comprimir, esticar ou redesenhar.
- Manter área de respiro mínima equivalente à altura do monograma.
- Não aplicar contornos, sombras coloridas, gradientes fora da paleta ou efeitos 3D diferentes da sombra discreta já prevista.
- O símbolo isolado deve ser usado em favicon, avatar, selo, marca d'água, assinatura e detalhes de alto impacto.

---

## Regra 60 / 30 / 10 (Refinada)

### 60% Off-white Editorial
- **Uso:** Fundo da página, seções de respiro, manifesto e público-alvo.
- **Token:** `--page`, `--white-frame`
- **Hex:** `#f8f3e8`, `#fbf8f0`

### 30% Preto / Verde Profundo
- **Uso:** Hero, prova social, serviços, vídeo, formulário e rodapé.
- **Token:** `--color-primary`
- **Hex:** `#050605`, `#061c17`

### 10% Dourado Sofisticado
- **Uso:** Chamadas, linhas, botões principais, detalhes de marca, ícones e estados de destaque.
- **Token:** `--color-accent`
- **Hex:** `#c5a463`

### Cores de Apoio / Profundidade
- **Fundo Profundo:** `#030d0b` (Token `--color-bg`)
- **Texto Muted:** `rgba(247, 246, 242, 0.72)` (Token `--color-text-muted`)
- **Verde Destaque:** `rgba(12, 36, 29, 0.8)`
- **Linha Premium:** `rgba(197, 164, 99, 0.16)` (Token `--border-hairline`)

---

## Tipografia (Google Fonts)

### Title / Display
- **Fonte:** Inter
- **Uso:** H1, H2, H3, números grandes, chamadas de manifesto e navegação.
- **Direção:** Sans-serif slim, moderna e precisa. Mantém o luxo pela composição, contraste, fotografia e espaçamento, sem depender de uma serifa clássica.
- **Código:**
  ```css
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  ```

### Texto / UI
- **Fonte:** Inter
- **Uso:** Parágrafos, navegação, botões, formulários, legendas, texto de apoio.
- **Direção:** Limpa, fina, contemporânea e altamente legível.
- **Código:**
  ```css
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  ```

### Escala Tipográfica
- **Display XL (Hero):** `clamp(56px, 7.2vw, 108px)` | Line-height: `0.94` | Weight: 300-400
- **Display LG (Seções):** `clamp(42px, 6.2vw, 92px)` | Line-height: `0.95` | Weight: 300
- **Heading SM (Cards):** `30px` | Line-height: `1.15`
- **Body Text:** `18px` | Line-height: `1.7` (Mobile: `16px` | Line-height: `1.6`)
- **Kicker:** `12px` | Weight: 700 | Letter-spacing: `2.6px` | Uppercase

---

## Bordas & Linhas (Arquitetônicas)

As linhas e bordas finas estruturam a página imitando a precisão de plantas arquitetônicas.
- **Hairline Border:** `1px solid rgba(197, 164, 99, 0.16)`
- **Active Border:** `1px solid rgba(197, 164, 99, 0.45)`
- **Radii de Elementos:**
  - Cantos dos Cards/Formulário: `4px` (Token `--radius-sm`) ou `8px` (Token `--radius-md`). Cantos muito arredondados reduzem a sensação de sofisticação; cantos finos e precisos denotam modernidade.
  - Botões/Tags: `999px` (Pílula, Token `--radius-pill`).

---

## Ícones (Lucide)

Ícones são usados de forma pontual para ilustrar conceitos e acompanhar botões de ação:
- **Biblioteca:** Lucide Icons (CDN)
- **Implementação:**
  - Patrimônio: `shield` (proteção e estabilidade)
  - Inteligência: `compass` (direção, curadoria estratégica)
  - Conexões: `network` (redes de relacionamento de alta renda)
  - Setas de Ação: `arrow-right` e `chevron-right`
- **Micro-animação:** Ao passar o mouse sobre botões ou cards, os ícones se movem (`transform: translateX(4px)` ou `scale(1.1) rotate(5deg)`).

---

## Cards (Glassmorphism & Depth)

Os cards representam convites formais. Devem parecer físicos e translúcidos.
- **Estrutura:**
  ```css
  background: rgba(10, 29, 24, 0.55);
  border: 1px solid var(--border-hairline);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.6);
  ```
- **Hover State:** Elevação sutil (`translateY(-6px)`), acentuação da borda (`var(--border-active)`) e sombra mais densa.

---

## Botões

### Primário (CTA Principal)
- **Estilo:** Fundo em ouro escovado (`var(--color-accent)`), texto escuro.
- **Hover:** Transiciona para Champagne (`var(--color-accent-soft)`), eleva-se levemente (`translateY(-1.5px)`) e o ícone de seta desliza para a direita.

### Secundário / Header CTA
- **Estilo:** Fundo transparente com leve opacidade, borda dourada suave, texto Champagne.
- **Hover:** Aumenta a opacidade da borda e do preenchimento dourado de fundo.

---

## Menus (Responsivos)

- **Desktop:** Menu fixo no topo com `backdrop-filter: blur(20px)`, links centrais e botão de CTA à direita. Links têm efeito de sublinhado que cresce a partir do centro.
- **Mobile:** Introdução de botão hambúrguer elegante que abre um menu fullscreen em verde profundo com links staggered (atrasos de transição sucessivos de `0.1s` a `0.3s` para entrada suave dos itens).

---

## Motion Design

A animação deve ser sutil e discreta para preservar o luxo silencioso (quiet luxury).
- **Page Load:** Efeito suave de entrada vertical (`fade-slide-in-up`) para elementos acima da dobra no carregamento.
- **Scroll Entrance:** Efeitos de revelação controlados por scroll (Scroll-Driven Animations) em navegadores compatíveis via CSS nativo (`animation-timeline: view()`).
- **Scroll Fallback:** Lógica de fallback leve via `IntersectionObserver` em JavaScript para garantir animações fluidas em navegadores legados e Firefox.
- **Transição Padrão:** `0.45s cubic-bezier(0.25, 1, 0.5, 1)` (suave e desacelerada).
