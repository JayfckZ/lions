# Lions Seminovos

Projeto de frontend para o site da Lions Seminovos, uma concessionária de veículos seminovos. Desenvolvido como teste técnico.

---

## Requisitos

- Node.js 18+
- npm ou yarn

## Instalação e execução

```bash
# Instale as dependências
npm install # (ou npm i)

# Rode o servidor
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.
Ou para uma visualização direta sem necessidade de instalação e execução em `https://lions-two.vercel.app/`.

---

## Páginas

### Home `/`

Página principal do site. Apresenta um carrossel de imagens em tela cheia com autoplay, uma grade de categorias de veículos (Utilitários, SUV, Hatch, Sedan) e quatro CTAs de ação rápida: encontrar uma loja, solicitar contato, acessar o catálogo e falar com um vendedor pelo WhatsApp.

### Catálogo `/catalogo`

Listagem completa do estoque de veículos. Conta com um painel de filtros laterais por marca, cor, combustível, ano modelo e carroceria, além de ordenação por preço, quilometragem e ano. Os resultados são paginados de 6 em 6. Em mobile, o painel de filtros é recolhido por padrão e exibido via botão de alternância.

### Agende sua Visita `/agende-sua-visita`

Formulário de agendamento de visita presencial. O usuário informa nome, telefone, e-mail, a loja de preferência, data e horário desejados. O campo de telefone aplica máscara automática no formato `(00) 00000-0000`. Em desktop, a metade direita exibe uma imagem de fundo com texto institucional; em mobile ela é ocultada para dar espaço ao formulário.

---

## Stack utilizada

- **React** com **TypeScript**
- **Vite** como bundler
- **Styled Components** para estilização
- **React Router** para navegação
- **Embla Carousel** para o carrossel da home
- **Bootstrap Icons** para ícones

---

## Decisões técnicas

**Styled Components com arquivo separado de estilos**
Na maioria dos arquivos optei por separar os estilos em um arquivo `styles.ts` por componente em vez de colocar tudo inline no mesmo arquivo do componente. Isso facilita a leitura do JSX e torna mais fácil localizar e ajustar estilos sem precisar navegar por blocos de lógica e CSS.

**Responsividade via media queries nos próprios Styled Components**
Em vez de usar uma biblioteca de grid externa, mantive os breakpoints diretamente nos componentes estilizados. Assim o comportamento responsivo de cada elemento fica documentado junto da sua definição, sem depender de classes utilitárias externas.

**Filtros do catálogo em estado local**
Todos os filtros e a paginação são controlados por `useState` local no componente da página, sem necessidade de estado global. Os dados de veículos são um array estático no próprio arquivo, o que seria facilmente substituído por uma chamada de API futuramente.

**Menu mobile com accordion via `max-height`**
O menu de navegação em mobile usa transição de `max-height` de `0` para um valor fixo alto o suficiente, evitando a necessidade de JavaScript para calcular altura dinâmica e mantendo a animação suave com CSS puro.

**Carrossel com Embla**
O Embla Carousel foi escolhido por ser leve, sem dependências e com API simples. O autoplay é configurado para não parar na interação do usuário, mantendo o comportamento de vitrine contínua esperado para uma página inicial.
