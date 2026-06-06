# AVREN — Homepage Copy + UX/UI Brief para Codex

Este documento é a fonte principal para atualizar a **homepage** do site AVREN com a nova copy e as diretrizes de UX/UI.

Objetivo: adaptar o design atual à nova narrativa estratégica da AVREN, mantendo uma leitura curta, elegante, objetiva e com alta percepção de autoridade.

---

## 1. Direção estratégica da homepage

A homepage deve comunicar que a AVREN não é apenas uma empresa nova de investimentos. Ela é uma **plataforma de inteligência patrimonial** que já nasce com força, capital, acesso e ambição nacional.

A percepção desejada:

> A AVREN nasceu grande.  
> Nasceu em Brasília.  
> Nasceu com chancela XP.  
> Nasceu com mais de R$ 500 milhões sob gestão/assessoria.  
> E nasce preparada para se tornar uma das grandes referências patrimoniais do país.

A página não deve parecer apenas “premium” ou “luxuosa”.  
Ela deve parecer **séria, institucional, estratégica, reservada e em movimento de expansão**.

---

## 2. Vocabulário de marca

### Usar

- Plataforma patrimonial
- Inteligência patrimonial
- Mesa privada
- Estrutura privada
- Ecossistema patrimonial
- Capital
- Acesso
- Estratégia
- Patrimônio
- Legado
- Relações estratégicas
- Atuação nacional
- Brasília
- Chancela XP
- Escala nacional
- Gestão/assessoria patrimonial

### Evitar

- Boutique
- Clube financeiro
- Luxo
- Premium genérico
- Ostentação
- Alta renda em tom apelativo
- Promessas de rentabilidade
- Garantia de resultado
- “A melhor do Brasil”
- “Faz parte da XP”, salvo validação formal
- Excesso de texto explicativo

### Observação importante

O termo **“sob gestão”** deve ser validado com o cliente antes da publicação final.  
Caso o cliente prefira uma formulação mais conservadora, trocar por:

- “sob custódia e assessoria”
- “patrimônio assessorado”
- “sob gestão e assessoria”, se juridicamente permitido

Na versão visual/protótipo, usar conforme copy abaixo, mas manter este alerta no projeto.

---

## 3. Princípios de UX/UI

### 3.1. Regra central

A homepage deve ser uma leitura em camadas:

1. Impacto imediato
2. Credenciais fortes
3. Clareza sobre o que a AVREN faz
4. Soluções palpáveis
5. Chancela institucional
6. Processo de trabalho
7. Origem estratégica
8. Movimento de expansão
9. Liderança
10. Conversão reservada

A página não deve parecer um catálogo de produtos.  
Deve parecer uma **apresentação institucional de alto nível**, com soluções claras e objetivas.

---

## 4. Direção visual geral

### Estilo

- Institucional
- Reservado
- Forte
- Contemporâneo
- Financeiro
- Nacional
- Pouco ostentatório
- Sofisticado sem parecer decorativo

### Sensação visual

A interface deve transmitir:

- capital
- confiança
- silêncio
- precisão
- acesso
- escala
- Brasília como origem de poder e decisão

### Evitar

- Alternância excessiva de cores seção por seção
- Muitas imagens genéricas de banco internacional
- Textos muito pequenos
- Blocos muito parecidos visualmente
- Excesso de dourado
- Cara de template financeiro comum
- Imagens com pessoas aleatórias demais
- Layout que pareça só “bonito”, mas sem autoridade

---

## 5. Sistema de cor recomendado

A alternância atual de cor não deve seguir “claro / escuro / claro / escuro” em todas as seções.

Usar zonas narrativas:

### Zona 1 — Escura
- Hero
- Barra de credenciais

Objetivo: impacto, autoridade e primeira impressão.

### Zona 2 — Clara ou off-white
- Seção institucional
- Marco de fundação
- Mesa AVREN / Soluções

Objetivo: clareza, leitura e tangibilidade.

### Zona 3 — Escura
- Chancela XP
- Ecossistema AVREN

Objetivo: voltar para autoridade e profundidade.

### Zona 4 — Clara
- Como funciona
- Brasília / Brasil
- AVREN em movimento

Objetivo: explicar o método, origem e expansão.

### Zona 5 — Escura
- Para quem é
- Liderança
- CTA final
- Footer

Objetivo: fechamento institucional e conversão.

### Paleta sugerida

Manter a paleta atual, com ajustes de contraste:

```css
--avren-green-950: #07130F;
--avren-green-900: #0B1D17;
--avren-green-800: #10261F;
--avren-gold-500: #B89A5E;
--avren-gold-300: #D8C28A;
--avren-offwhite: #F3EFE7;
--avren-cream: #E8E0D2;
--avren-text-dark: #1A1A16;
--avren-text-muted: #6F6A5D;
--avren-line-dark: rgba(255,255,255,0.12);
--avren-line-light: rgba(11,29,23,0.12);
```

### Uso de dourado

Usar dourado apenas para:

- labels
- divisores finos
- hover de botão
- pequenos detalhes
- números importantes

Não usar dourado em excesso.

---

## 6. Tipografia e leitura

### Diretrizes

- Headlines grandes, mas elegantes.
- Parágrafos curtos.
- Blocos com no máximo 2 parágrafos.
- Cards com textos de 1 a 2 linhas.
- Labels pequenos em caixa alta, com letter spacing.
- Linhas de texto com no máximo 680px.
- Não centralizar textos longos.
- Usar bastante respiro.

### Hierarquia sugerida

```css
.hero-title {
  font-size: clamp(48px, 7vw, 96px);
  line-height: 0.95;
  letter-spacing: -0.04em;
}

.section-title {
  font-size: clamp(34px, 5vw, 64px);
  line-height: 1.02;
  letter-spacing: -0.035em;
}

.section-subtitle {
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.45;
}

.body-text {
  font-size: 17px;
  line-height: 1.65;
}

.card-title {
  font-size: 20px;
  line-height: 1.2;
}

.card-text {
  font-size: 15px;
  line-height: 1.55;
}
```

---

## 7. Componentes globais

### 7.1. Label institucional

Usar labels curtos acima dos títulos.

Exemplo:

```text
A AVREN
Mesa AVREN
Chancela XP
Experiência AVREN
Origem estratégica
```

Estilo:

```css
.label {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 11px;
  color: var(--avren-gold-500);
}
```

### 7.2. CTA principal

Texto padrão:

```text
Solicitar reunião reservada
```

Usar no hero, CTA final e footer.

### 7.3. CTA secundário

Texto padrão:

```text
Conhecer a AVREN
```

Usar apenas no hero ou em uma seção institucional.

### 7.4. Cards

Cards devem ser limpos, sem muito texto.

Estilo recomendado:

- borda fina
- fundo levemente contrastado
- hover discreto
- número ou ícone minimalista
- sem ícones genéricos exagerados

---

# 8. Homepage — estrutura final com copy e instruções UX/UI

---

## 8.1. HERO

### Função da seção

Criar impacto imediato e posicionar a AVREN como uma plataforma patrimonial que nasce grande.

### Layout

- Fundo escuro.
- Pode usar imagem/texture sutil de Brasília, arquitetura, Lago Sul ou ambiente institucional.
- Manter contraste alto.
- Headline em destaque, ocupando boa parte da primeira dobra.
- Subheadline curta abaixo.
- CTAs logo abaixo.
- Microcopy pequena após os botões ou abaixo da subheadline.
- Evitar imagem muito genérica de executivo internacional.

### Copy

#### Headline

```text
Patrimônio exige estratégia.
Grandes decisões exigem acesso.
```

#### Subheadline

```text
A AVREN é uma plataforma de inteligência patrimonial nascida em Brasília, com chancela XP Investimentos e mais de R$ 500 milhões sob gestão e assessoria.
```

#### CTAs

```text
Solicitar reunião reservada
Conhecer a AVREN
```

#### Microcopy

```text
Para empresários, investidores e famílias que tratam capital como construção de futuro.
```

### Nota de implementação

Se o termo “sob gestão e assessoria” for substituído pelo cliente, atualizar para:

```text
mais de R$ 500 milhões sob custódia e assessoria
```

---

## 8.2. BARRA DE CREDENCIAIS

### Função da seção

Transformar os principais ativos da AVREN em prova de autoridade.

### Layout

- Deve vir imediatamente após o hero.
- Fundo ainda escuro, como continuação da Zona 1.
- Grid com 4 colunas no desktop.
- No mobile, 2 colunas ou stack vertical.
- Números e palavras-chave em destaque.
- Separadores finos verticais ou horizontais.
- Não usar muitos ícones.

### Copy

#### Item 1

```text
R$ 500 mi+
sob gestão e assessoria
```

#### Item 2

```text
XP Investimentos
chancela e acesso institucional
```

#### Item 3

```text
Brasília
origem no centro das decisões
```

#### Item 4

```text
Brasil
estrutura preparada para atuação nacional
```

---

## 8.3. SEÇÃO INSTITUCIONAL

### Função da seção

Explicar a essência da AVREN sem alongar demais.

### Layout

- Entrar em fundo claro/off-white.
- Usar layout editorial com título grande à esquerda e texto à direita, ou imagem + texto.
- Se usar imagem, preferir algo real/institucional.
- Não usar parágrafo longo.

### Copy

#### Label

```text
A AVREN
```

#### Título

```text
Mais que investimentos:
uma mesa privada para proteger, expandir e conectar capital.
```

#### Texto

```text
A AVREN nasce para apoiar decisões patrimoniais relevantes com estratégia, discrição e visão de longo prazo.

Unimos inteligência financeira, acesso institucional e relacionamento próximo para empresários, investidores e famílias que enxergam patrimônio como responsabilidade, oportunidade e legado.
```

#### CTA

```text
Saiba mais
```

---

## 8.4. SEÇÃO MARCO DE FUNDAÇÃO

### Função da seção

Dar peso ao fato de a AVREN ter começado com meio bilhão, sem parecer arrogante.

### Layout

- Ainda na Zona 2 clara.
- Pode ser um bloco de destaque com número grande “R$ 500 mi+”.
- O número deve ser tratado como marco fundacional.
- Usar design limpo, com bastante espaço.
- Pode ter uma linha fina/dourada ou selo discreto “Dia zero”.

### Copy

#### Label

```text
Dia zero
```

#### Título

```text
Uma nova estrutura patrimonial que já nasce com meio bilhão sob gestão.
```

#### Texto

```text
A AVREN inicia sua trajetória com uma base rara para uma nova operação patrimonial: capital relevante, relações estratégicas e uma visão clara de expansão.

Mais que um número, esse marco representa confiança, tração e o início de uma mesa preparada para crescer em escala nacional.
```

### Nota de UX

Essa seção deve causar o “uau” silencioso.  
Não precisa gritar. Precisa parecer inevitável.

---

## 8.5. MESA AVREN / SOLUÇÕES

### Função da seção

Tornar a proposta palpável. Mostrar o que a AVREN faz.

### Layout

- Seção clara ou off-white.
- Grid de 6 cards.
- Desktop: 3 colunas x 2 linhas.
- Tablet: 2 colunas.
- Mobile: 1 coluna.
- Cards com borda fina, fundo sutil e hover elegante.
- Cada card deve ter título curto e texto objetivo.
- Pode usar numeração discreta: 01, 02, 03...
- Evitar ícones genéricos de banco.

### Copy

#### Label

```text
Mesa AVREN
```

#### Título

```text
Soluções para quem constrói, protege e expande patrimônio relevante.
```

#### Texto

```text
A Mesa AVREN organiza capital, acesso e inteligência em uma experiência reservada para decisões patrimoniais de longo prazo.
```

#### Card 1

```text
Portfólio Estratégico
Carteiras alinhadas ao perfil, momento e objetivos de cada cliente.
```

#### Card 2

```text
Wealth Planning
Planejamento patrimonial, sucessório e fiscal para proteção e continuidade.
```

#### Card 3

```text
AVREN Global
Estratégias para diversificação internacional e exposição global do patrimônio.
```

#### Card 4

```text
Crédito & Liquidez
Soluções para acessar liquidez com inteligência e preservar decisões de longo prazo.
```

#### Card 5

```text
Empresas & Sócios
Estratégias que conectam patrimônio pessoal, empresa, caixa e crescimento.
```

#### Card 6

```text
Family & Legacy
Organização patrimonial para famílias que pensam em sucessão, continuidade e legado.
```

### UX importante

Esta é uma das seções mais importantes da home.  
Ela deve aparecer antes da seção XP ou logo depois do marco de fundação.

A pessoa precisa entender rapidamente:

> “Agora entendi o que eles fazem.”

---

## 8.6. SEÇÃO XP

### Função da seção

Usar a XP como chancela de acesso e autoridade, sem tirar protagonismo da AVREN.

### Layout

- Entrar em Zona 3 escura.
- Design mais sóbrio e institucional.
- Pode usar imagem real de bastidor/evento XP se disponível e autorizado.
- Pode usar logotipo XP apenas se autorizado.
- Não usar logos de bancos concorrentes.
- AVREN deve continuar protagonista.

### Copy

#### Label

```text
Chancela XP
```

#### Título

```text
Acesso institucional.
Visão AVREN.
```

#### Texto

```text
A relação com a XP Investimentos amplia o acesso da AVREN a uma das principais estruturas do mercado financeiro brasileiro.

A partir dessa base, a AVREN entrega uma experiência mais próxima, estratégica e reservada para quem precisa tomar decisões patrimoniais com clareza.
```

### Nota legal

Não afirmar “faz parte da XP” sem validação formal.  
Preferir “chancela”, “relação com”, “acesso institucional” ou “ecossistema XP”, conforme aprovação do cliente.

---

## 8.7. ECOSSISTEMA AVREN

### Função da seção

Mostrar que a AVREN é mais do que produtos financeiros. É uma estrutura de capital, inteligência e relacionamento.

### Layout

- Zona 3 escura.
- Pode usar cards horizontais ou grid 4 colunas.
- Visual mais abstrato, porém sóbrio.
- Não repetir demais a seção “Mesa AVREN”.
- Esta seção é mais conceitual; os textos devem ser ainda mais curtos.

### Copy

#### Label

```text
Ecossistema
```

#### Título

```text
Um ecossistema discreto, construído em torno do cliente.
```

#### Texto

```text
A AVREN conecta patrimônio, inteligência, relações e visão de futuro em uma estrutura pensada para decisões consistentes.
```

#### Card 1

```text
Patrimônio
Proteção, organização e expansão do capital.
```

#### Card 2

```text
Inteligência
Leitura de cenário, riscos e oportunidades.
```

#### Card 3

```text
Conexões
Acesso a relações e soluções qualificadas.
```

#### Card 4

```text
Legado
Estratégia para continuidade e longo prazo.
```

---

## 8.8. COMO FUNCIONA

### Função da seção

Organizar o processo e reduzir abstração.

### Layout

- Zona 4 clara.
- Usar timeline ou step cards.
- Desktop: linha horizontal com 4 etapas.
- Mobile: timeline vertical.
- Cada etapa deve ter número grande discreto.
- Não exagerar no texto.

### Copy

#### Label

```text
Experiência AVREN
```

#### Título

```text
Como funciona a experiência AVREN.
```

#### Texto

```text
Um processo reservado para entender, estruturar e acompanhar decisões patrimoniais relevantes.
```

#### Etapa 1

```text
Diagnóstico patrimonial
Entendimento do momento, perfil, objetivos e prioridades do cliente.
```

#### Etapa 2

```text
Estratégia personalizada
Construção de uma visão patrimonial alinhada ao cenário e ao longo prazo.
```

#### Etapa 3

```text
Curadoria e acesso
Conexão com soluções, especialistas e oportunidades compatíveis com a estratégia.
```

#### Etapa 4

```text
Acompanhamento contínuo
Revisões estratégicas conforme mercado, objetivos e novas decisões.
```

---

## 8.9. BRASÍLIA / BRASIL

### Função da seção

Transformar Brasília em origem estratégica, não apenas localização.

### Layout

- Zona 4 clara.
- Usar imagem de Brasília de forma sofisticada.
- Evitar clichê turístico simples.
- Preferir arquitetura, linhas, luz, concreto, Lago Sul, horizonte.
- Texto curto, com grande título.

### Copy

#### Label

```text
Origem estratégica
```

#### Título

```text
Nascida em Brasília.
Preparada para o Brasil.
```

#### Texto

```text
Brasília não é apenas o endereço da AVREN. É o ponto de partida de uma estrutura criada no centro das decisões nacionais.

A partir dessa origem, a AVREN se posiciona para atender empresários, investidores e famílias que buscam estratégia, discrição e acesso qualificado em escala nacional.
```

---

## 8.10. AVREN EM MOVIMENTO

### Função da seção

Mostrar que a AVREN não é apenas um conceito. Ela já nasce com rede, presença e movimento.

### Layout

- Zona 4 clara.
- Usar fotos reais do evento, se disponíveis.
- Fotos podem ter tratamento editorial, P&B ou verde/dourado sutil.
- Evitar parecer feed de Instagram.
- Criar sensação de bastidor institucional.
- Pode ser um carousel discreto ou grid editorial.

### Copy

#### Label

```text
Expansão
```

#### Título

```text
Capital, inteligência e relacionamento em escala nacional.
```

#### Texto

```text
A AVREN nasce conectada a empresários, investidores, grupos privados e lideranças com atuação relevante no mercado.

Esse movimento marca o início de uma plataforma patrimonial criada para crescer com consistência, reputação e visão de longo prazo.
```

---

## 8.11. PARA QUEM É

### Função da seção

Definir o público sem parecer excludente demais.

### Layout

- Zona 5 escura.
- Título forte.
- Tags ou chips.
- Pode usar composição com poucos elementos.
- Evitar parágrafos longos.

### Copy

#### Label

```text
Perfil de cliente
```

#### Título

```text
Para empresários, investidores e famílias que tratam patrimônio como legado.
```

#### Texto

```text
Para quem busca proteger capital, ampliar oportunidades e tomar decisões com visão de futuro.
```

#### Tags

```text
Empresários
Investidores
Famílias
Capital privado
Sucessão
Holding
Legado
Crescimento patrimonial
```

---

## 8.12. LIDERANÇA

### Função da seção

Gerar confiança. Como a empresa é nova, a credibilidade também precisa vir das pessoas e da rede por trás.

### Layout

- Zona 5 escura.
- Usar fotos reais dos fundadores/liderança, se disponíveis.
- Se não houver fotos, deixar estrutura preparada para inserir depois.
- Pode ser grid com cards de liderança ou bloco institucional com 3 pilares.
- Não inventar nomes, cargos ou biografias.

### Copy

#### Label

```text
Liderança
```

#### Título

```text
Uma mesa próxima, liderada por quem entende grandes decisões.
```

#### Texto

```text
A AVREN nasce da união entre capital, relacionamento e visão estratégica.

Por trás da plataforma, existe uma liderança comprometida em construir uma nova referência patrimonial: mais próxima, mais conectada e preparada para atuar em escala nacional.
```

#### Card 1

```text
Experiência dos fundadores
Trajetórias conectadas ao mercado financeiro, empresários e investidores.
```

#### Card 2

```text
Relação com XP
Acesso institucional com curadoria, proximidade e visão estratégica.
```

#### Card 3

```text
Visão para a AVREN
Construir uma plataforma patrimonial nacional, reservada e relevante.
```

---

## 8.13. CTA FINAL

### Função da seção

Converter com discrição. O CTA não deve parecer venda agressiva.

### Layout

- Zona 5 escura.
- Bloco forte, limpo, com formulário.
- Formulário simples.
- Usar microcopy de discrição.
- Botão claro e objetivo.
- Pode ter textura sutil no fundo.

### Copy

#### Label

```text
Reunião reservada
```

#### Título

```text
Converse com uma mesa privada da AVREN.
```

#### Texto

```text
Solicite uma reunião reservada para avaliar seu momento patrimonial, seus objetivos e as próximas decisões.
```

#### Campos

```text
Nome completo
E-mail ou telefone
Perfil
Mensagem
```

#### Botão

```text
Solicitar reunião reservada
```

#### Microcopy

```text
Atendimento reservado. Suas informações serão tratadas com discrição.
```

---

## 8.14. FOOTER

### Função da seção

Fechamento institucional, simples e coerente.

### Layout

- Fundo escuro.
- Logo AVREN.
- Frase institucional.
- Links essenciais.
- CTA discreto.
- Dados legais/contato, se fornecidos pelo cliente.
- Evitar rodapé pesado.

### Copy

#### Frase institucional

```text
AVREN — inteligência patrimonial para grandes decisões.
```

#### Links

```text
Início
Soluções
Experiência
Contato
```

#### CTA

```text
Solicitar reunião reservada
```

---

# 9. Ordem final da homepage

Implementar nesta ordem:

1. Hero
2. Barra de credenciais
3. Seção institucional
4. Marco de fundação
5. Mesa AVREN / Soluções
6. Chancela XP
7. Ecossistema AVREN
8. Como funciona
9. Brasília / Brasil
10. AVREN em movimento
11. Para quem é
12. Liderança
13. CTA final
14. Footer

---

# 10. Regras de responsividade

### Desktop

- Usar grids amplos.
- Máximo de largura geral: 1200px a 1320px.
- Hero com headline grande e subheadline controlada.
- Cards em 3 colunas quando houver 6 itens.
- Barra de credenciais em 4 colunas.

### Tablet

- Reduzir grids para 2 colunas.
- Manter boa margem lateral.
- Cuidar para títulos não quebrarem mal.

### Mobile

- Evitar blocos muito altos.
- Cards em 1 coluna.
- Headline do hero deve continuar impactante, mas sem quebrar palavras de forma estranha.
- Barra de credenciais pode virar 2 colunas ou lista vertical.
- Formulário em tela cheia com campos confortáveis.
- Botões com altura mínima de 48px.

---

# 11. Microinterações

Usar animações discretas:

- Fade-in suave nas seções.
- Cards com hover leve.
- Botões com transição de cor e borda.
- Nada de animações chamativas.
- Evitar parallax exagerado.
- Movimento deve sugerir precisão, não espetáculo.

Exemplo:

```css
.card {
  transition: transform 240ms ease, border-color 240ms ease, background-color 240ms ease;
}

.card:hover {
  transform: translateY(-4px);
}
```

---

# 12. SEO básico da homepage

### Title sugerido

```text
AVREN | Inteligência Patrimonial para Grandes Decisões
```

### Meta description sugerida

```text
Plataforma de inteligência patrimonial nascida em Brasília, com chancela XP Investimentos e mais de R$ 500 milhões sob gestão e assessoria.
```

### H1

Usar apenas uma vez:

```text
Patrimônio exige estratégia. Grandes decisões exigem acesso.
```

### H2 sugeridos

- Mais que investimentos: uma mesa privada para proteger, expandir e conectar capital.
- Uma nova estrutura patrimonial que já nasce com meio bilhão sob gestão.
- Soluções para quem constrói, protege e expande patrimônio relevante.
- Acesso institucional. Visão AVREN.
- Como funciona a experiência AVREN.
- Nascida em Brasília. Preparada para o Brasil.
- Para empresários, investidores e famílias que tratam patrimônio como legado.
- Converse com uma mesa privada da AVREN.

---

# 13. Checklist para Codex

- [ ] Remover qualquer uso da palavra “boutique”.
- [ ] Remover “clube financeiro” se existir.
- [ ] Atualizar copy do hero.
- [ ] Atualizar barra de credenciais.
- [ ] Criar ou atualizar seção de marco de fundação com R$ 500 mi+.
- [ ] Criar seção “Mesa AVREN / Soluções” com 6 cards.
- [ ] Atualizar seção XP com linguagem de chancela/acesso institucional.
- [ ] Ajustar ecossistema para textos curtos.
- [ ] Criar timeline ou cards para “Como funciona”.
- [ ] Criar seção Brasília/Brasil com origem estratégica.
- [ ] Criar seção AVREN em movimento.
- [ ] Criar seção de liderança sem inventar nomes ou dados.
- [ ] Atualizar CTA final.
- [ ] Ajustar alternância de cores por zonas, não por seção individual.
- [ ] Melhorar contraste de textos pequenos.
- [ ] Garantir boa responsividade.
- [ ] Evitar promessas financeiras.
- [ ] Deixar comentário/TODO para validar uso de “sob gestão”, “chancela XP” e logotipo XP com cliente.

---

# 14. Tom final desejado

A página precisa soar como:

> “Essa empresa acabou de nascer, mas não nasceu pequena.”

Ela deve provocar a percepção:

> “A AVREN veio para disputar espaço entre grandes estruturas patrimoniais.”

Mas sem parecer arrogante, sem exagero e sem prometer o que não pode ser prometido.

O texto deve ser curto, claro e com peso.

O design deve seguir a copy, e não o contrário.
