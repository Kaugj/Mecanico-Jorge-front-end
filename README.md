# Mecânico Jorge Auto Peças — Front-end

React 18 + Vite + React Router. Layout fiel ao PDF de design.

## Como rodar
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # produção (pasta dist/)
```
Opcional: copie `.env.example` para `.env` e defina `VITE_API_URL` quando houver back-end.
O atalho `@` aponta para `src/` (ex.: `import Button from '@/shared/components/Button/Button'`).

## Paleta de cores (extraída do PDF)
| Cor | Hex | Token | Uso |
|---|---|---|---|
| Preto | `#050505` | `--color-black` | Fundo, cabeçalho, rodapé |
| Vermelho | `#EB0F16` | `--color-red` | Botões, títulos, item ativo, ícones |
| Grafite | `#141414` | `--color-surface` | Cards de serviços e da área do cliente |
| Cinza borda | `#323232` | `--color-border` | Bordas de cards e campos escuros |
| Cinza claro | `#EEEEEE` | `--color-light` | Fundo das páginas Sobre e Produtos |
| Branco | `#FFFFFF` | `--color-white` | Textos sobre preto, faixa do "Sobre", cards de produto |
| Cinza texto | `#AFAFAF` | `--color-text-muted` | Textos secundários sobre preto |
| Verde WhatsApp | `#43E660` | `--color-whatsapp` | Botão "Chamar no whatsapp" |

Definidas em `src/shared/styles/tokens.css` — nunca use hex direto nos componentes.

## Estrutura (por área → página → seção)
Regra: **o que compõe uma página mora junto, na pasta dela.** Só vai para `shared/` o que é usado por mais de uma área.

```
src/
  main.jsx · App.jsx                 entrada, provedor de login e mapa de rotas
  areas/
    public/                          ── ÁREA PÚBLICA (qualquer visitante)
      home/
        HomePage.jsx                 monta as seções abaixo
        HeroIntro/                   títulos, slogan e botões
        HeroPhoto/                   foto circular do Jorge  (+ images/)
        Highlights/                  faixa de diferenciais (+ FeatureHighlight)
      about/
        AboutPage.jsx
        AboutBanner/ · AboutPhoto/ · AboutContent/ (+ ChecklistItem)
      services/
        ServicesPage.jsx · services.data.js
        ServiceCard/
      products/
        ProductsPage.jsx · products.data.js · useProductFilter.js
        ProductFilters/ · ProductList/ · ProductCard/   (+ images/)
      contact/
        ContactPage.jsx · contactService.js
        ContactIntro/ · ContactChannels/ (+ ContactInfoItem) · ContactMap/
        ContactForm/ · AddressCard/
      login/
        LoginPage.jsx
        LoginIntro/ · LoginForm/
      NotFoundPage.jsx
    private/                         ── ÁREA PRIVADA (exige login)
      client-area/
        ClientAreaPage.jsx           rota /conta
        ClientAreaHeader/ · ClientSection/
  shared/                            ── usado por mais de uma área
    auth/        AuthContext.jsx · ProtectedRoute.jsx · authService.js
    layouts/     PublicLayout · AccountLayout · Header/ · Footer/
    components/  Button/ · Logo/ · PageTitle/ · ScrollToTop.jsx
    data/ · utils/ · services/ · styles/ · assets/
```

## Rotas
| Rota | Área | Página |
|---|---|---|
| `/` | pública | HomePage |
| `/sobre` · `/servicos` · `/produtos` · `/contato` | pública | páginas homônimas |
| `/login` | pública (porta de entrada) | LoginPage |
| `/conta` | **privada** | ClientAreaPage (redireciona para `/login` se não houver sessão) |

## Como adicionar algo novo
- **Nova página pública:** crie `areas/public/<pagina>/` com `<Pagina>Page.jsx` + uma pasta por seção; registre a rota em `App.jsx`.
- **Nova seção privada:** crie dentro de `areas/private/client-area/` (ou nova pasta em `areas/private/`) e coloque a rota dentro do `<ProtectedRoute />`.
- **Componente usado em 2+ áreas:** mova para `shared/components/`.

## Pendências (procure por `TODO` no código)
- Confirmar número do WhatsApp, telefone fixo e cidade do mapa (`src/shared/data/site.js`).
- Marcas "A definir" e descrições dos produtos (`products.data.js`).
- Conectar login, cadastro, formulário e dados da área do cliente ao back-end.
- Trocar as imagens recortadas do PDF por fotos em alta resolução.
