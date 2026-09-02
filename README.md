# Sistema de Gerenciamento de Salas de Cinema

Projeto acadêmico para gerenciamento de sessões, salas e ingressos de cinema, desenvolvido em **TypeScript**, seguindo a arquitetura **Controller → Service → Model**.

## 📌 Objetivo

Permitir o cadastro de filmes, salas e sessões, além da venda/reserva de ingressos para clientes, com uma modelagem simples e extensível.

## 🧱 Arquitetura

O projeto segue uma separação em camadas:

```
src/
├── controllers/     # Recebem requisições, validam entrada e chamam os services
├── services/        # Regras de negócio da aplicação
├── models/           # Entidades e definição de tipos/interfaces
├── repositories/      # (opcional) Acesso a dados/persistência
└── routes/            # Definição das rotas da API
```

**Fluxo de responsabilidade:**
`Rota → Controller → Service → (Repository) → Model`

- **Controller**: não deve conter lógica de negócio, apenas orquestrar a chamada ao service e formatar a resposta.
- **Service**: concentra as regras de negócio (ex: verificar se assento está disponível antes de vender ingresso).
- **Model**: define a estrutura dos dados (interfaces/classes/tipos).

## 🎬 Escopo do Projeto (versão simples)

Entidades que farão parte desta primeira versão:

1. **Cinema** — dados do estabelecimento
2. **Sala (Room)** — salas pertencentes a um cinema
3. **Filme (Movie)** — catálogo de filmes
4. **Sessão (Screening)** — associa um filme a uma sala em um horário
5. **Cliente (Customer)** — usuário que compra ingressos
6. **Ingresso (Ticket)** — vínculo entre cliente, sessão e assento

### Relacionamentos principais

- Cinema → possui várias Salas (1:N)
- Sala → possui várias Sessões (1:N)
- Filme → possui várias Sessões (1:N)
- Sessão → possui vários Ingressos (1:N)
- Cliente → possui vários Ingressos (1:N)

## 🚀 Possíveis expansões futuras

Ideias para caso o escopo cresça (não implementar agora, apenas manter em mente na modelagem):

- **Assento (Seat)** — mapa de assentos por sala, com tipos (comum, VIP, etc.)
- **Pedido/Reserva (Booking)** — agrupar múltiplos ingressos em uma única compra
- **Pagamento (Payment)** — métodos e status de pagamento separados do pedido
- **Funcionário/Papel (Employee/Role)** — controle de acesso administrativo
- **Gênero (Genre)** — normalização dos gêneros de filme em entidade própria

> 💡 Dica: ao modelar os models agora, evite deixar os tipos "engessados" demais — por exemplo, já pense no Ticket referenciando um `seatId` opcional, mesmo que Seat não exista ainda, para facilitar a migração futura.

## 🗂️ Sugestão de organização de arquivos

```
src/
├── controllers/
│   ├── cinema.controller.ts
│   ├── room.controller.ts
│   ├── movie.controller.ts
│   ├── screening.controller.ts
│   ├── customer.controller.ts
│   └── ticket.controller.ts
├── services/
│   ├── cinema.service.ts
│   ├── room.service.ts
│   ├── movie.service.ts
│   ├── screening.service.ts
│   ├── customer.service.ts
│   └── ticket.service.ts
├── models/
│   ├── cinema.model.ts
│   ├── room.model.ts
│   ├── movie.model.ts
│   ├── screening.model.ts
│   ├── customer.model.ts
│   └── ticket.model.ts
├── routes/
│   └── index.ts
└── app.ts
```

## ✅ Regras de negócio a definir

Antes de codar os services, vale decidir (e documentar aqui depois):

- [ ] Um cliente pode comprar mais de um ingresso para a mesma sessão?
- [ ] Existe limite de ingressos por sessão (capacidade da sala)?
- [ ] É possível cancelar um ingresso? Até quanto tempo antes da sessão?
- [ ] Uma sessão pode ser criada em uma sala que já tem outra sessão no mesmo horário?
- [ ] O preço do ingresso é fixo por sessão ou pode variar (ex: meia-entrada)?

## 🛠️ Próximos passos sugeridos

1. Definir as interfaces/tipos das entidades em `models/`
2. Implementar os services com as regras de negócio básicas (CRUD + validações)
3. Implementar os controllers conectando rotas aos services
4. Definir a camada de persistência (em memória, arquivo JSON, ou banco de dados)
5. Escrever testes básicos para os services (regra de negócio é o que mais quebra)

---

*Este README serve como guia inicial de organização do projeto e deve ser atualizado conforme o escopo evoluir.*
