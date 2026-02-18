# Layout com Sidebar - Guia de Implementação

## 📐 Estrutura do Layout

O layout foi implementado usando **Flexbox**, que é a abordagem mais flexível e responsiva para este tipo de estrutura.

### Arquitetura

```
┌─────────────────────────────────────┐
│ app-container (flex)                │
├──────────────┬──────────────────────┤
│              │ main-content (flex)  │
│   Sidebar    ├──────────────────────┤
│   (250px)    │    Header            │
│   width:     │                      │
│   flex:0     │ ──────────────────── │
│              │                      │
│   fixed      │    Content (flex: 1) │
│   scrollable │                      │
│              │ ──────────────────── │
│              │    Footer            │
│              │    (flex-shrink: 0)  │
└──────────────┴──────────────────────┘
```

## 🎯 Como Funciona - Flexbox vs Grid

### Por que Flexbox?
- **Sidebar + Conteúdo**: Flexbox é perfeito para layouts 2D lineares (esquerda/direita)
- **Responsividade**: Fácil de fazer a sidebar desaparecer em mobile
- **Altura total**: `height: 100vh` funciona naturalmente com flexbox

### Se usasse Grid:
```css
.app-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 0;
  height: 100vh;
}
```
Funciona também, mas flexbox é mais simples para este caso.

---

## 🛠️ Estrutura de Arquivos

```
components/layout/
├── Sidebar.jsx          ← Menu de navegação
├── Sidebar.css
├── Header.jsx           ← Barra de topo com busca
├── Header.css
├── Footer.jsx           ← Rodapé
└── Footer.css

app/
├── layout.jsx           ← Layout principal (renderiza todos os componentes)
├── globals.css          ← Estilos globais do layout
├── page.jsx             ← Página de exemplo (dashboard)
└── page.css             ← Estilos da página
```

---

## 📝 Como Customizar

### 1. **Mudar a largura do Sidebar**

**Em `components/layout/Sidebar.css`:**
```css
.sidebar {
  width: 250px;  /* Mude para: 280px, 200px, etc */
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    max-height: 150px;  /* Altura quando em mobile */
  }
}
```

### 2. **Mudar cores**

**Em `app/globals.css`:**
```css
:root {
  --primary-color: #ff6b35;       /* Mude a cor primária */
  --sidebar-bg: #1a1a1a;          /* Cor do sidebar */
  --text-primary: #1a1a1a;
  --text-secondary: #666;
  --border-color: #e0e0e0;
}
```

### 3. **Ocultar conteúdos em mobile**

Já foi configurado responsividade em `@media (max-width: 768px)`, mas você pode ajustar:

```css
@media (max-width: 1024px) {
  .sidebar {
    width: 200px;  /* Sidebar menor em tablets */
  }
}

@media (max-width: 640px) {
  .sidebar {
    display: none;  /* Ou mostrar como menu hamburger */
  }
}
```

---

## 🚀 Componentes Criados

### Sidebar.jsx
- Menu de navegação com links
- Avatar do usuário no rodapé
- Scroll automático em conteúdo grande

### Header.jsx
- Campo de busca responsivo
- Botões de notificação e configurações
- Integra-se com a barra superior

### Footer.jsx
- Informações de rodapé
- Links de privacidade, termos, suporte
- Copyright automático

### Layout Principal (layout.jsx)
```jsx
<div className="app-container">        {/* flex: height 100vh */}
  <Sidebar />                           {/* width: 250px */}
  <div className="main-content">        {/* flex: column, flex: 1 */}
    <Header />                          {/* flex-shrink: 0 */}
    <main className="content">          {/* flex: 1, overflow-y: auto */}
      {children}
    </main>
    <Footer />                          {/* flex-shrink: 0 */}
  </div>
</div>
```

---

## 📱 Responsividade

| Breakpoint | Comportamento |
|-----------|---|
| **≥ 968px** | Layout desktop normal (sidebar à esquerda) |
| **768px - 967px** | Sidebar reduzida |
| **< 640px** | Sidebar em modo mobile (horizontal ou oculta) |

---

## 🎨 Classes CSS Disponíveis

### Layout
- `.app-container` → Container principal com flexbox
- `.main-content` → Coluna direita (flex-direction: column)
- `.content` → Área de conteúdo (flex: 1, overflow-y: auto)

### Sidebar
- `.sidebar` → Elemento principal
- `.nav-link.active` → Link ativo (já destacado)
- `.nav-link:hover` → Efeito hover

---

## 💡 Exemplo de Uso

A página padrão (`page.jsx`) já contém um dashboard de exemplo com:
- Cards de estatísticas
- Tabela de documentos recentes
- Estilos responsive

Para criar uma nova página, basta adicionar um diretório em `app/`:

```
app/
├── page.jsx              ← / (home)
├── documents/
│   └── page.jsx          ← /documents
└── users/
    └── page.jsx          ← /users
```

---

## 🔧 Troubleshooting

**Problema**: Sidebar não aparece
- Verifique se `Sidebar.jsx` foi importado em `layout.jsx`

**Problema**: Conteúdo não tem scroll
- Verifique: `.content { flex: 1; overflow-y: auto; }`

**Problema**: Flex items não dividem espaço
- Adicione: `flex-shrink: 0` para elementos que devem manter tamanho

---

**Pronto!** 🎉 Seu layout está funcionando. Customize as cores, tamanhos e conteúdo conforme necessário.
