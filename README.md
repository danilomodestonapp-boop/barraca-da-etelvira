# Barraca da Etelvira (roupas): site de reservas pelo WhatsApp

Moda feminina, Rua Angelo Consentino, Bairro Santa Rita, ao lado da pista de skate. Sábado das 7h às 17h e domingo das 7h às 12h. A cliente vê as peças, escolhe o tamanho e **reserva pelo WhatsApp**; a Etelvira confirma a disponibilidade e o preço, e a cliente retira na barraca. O site pode ser instalado no celular como app (PWA).

>  As reservas chegam no WhatsApp **(19) 99132-0025**.
>
> Endereço, horário, logo e fotos vieram do Instagram. Cidade (Leme-SP) e somente retirada confirmados. Os tamanhos de cada peça ainda são suposição (`CONFIRMAR`). Logo e fotos foram recortados de um print: trocar pelos originais em alta.

## Modo reserva (sem preço)

Os preços não aparecem no Instagram, então o site usa o modo sem preço (`orcamento: true`) com os textos de reserva (`textosSemPreco`):
- mostra "Consulte o preço" e o botão "Reservar pelo WhatsApp";
- não pede pagamento nem endereço (somente retirada na barraca);
- a mensagem chega como **RESERVA DE PEÇAS**.

**Recomendação:** mostrar o preço vende mais e reduz as perguntas no WhatsApp. Basta colocar `preco` em cada peça; se todas tiverem preço, dá para desligar o modo reserva (`orcamento: false`) e o site passa a mostrar total e forma de pagamento.

Exemplo de mensagem que chega:

```
*RESERVA DE PEÇAS — Barraca da Etelvira*
Reserva nº 2411-1101

*Cliente:* Maria
*Receber:* Retirar na barraca (sábado ou domingo)

*Itens:*
• 1x Vestido longo ciganinha amarelo (Tamanho: M)
• 1x Calça pantalona laranja (Tamanho: 38)

Reserva feita pelo site 🙂
```

## Arquivos

| Arquivo | Para que serve | Precisa editar? |
|---|---|---|
| `config.js` | Nome, WhatsApp, horários, entrega, pagamento, Pix, cores, **produtos e preços** | **Sim, é o único** |
| `fotos/` | Fotos dos produtos e o logo | Colocar as fotos |
| `index.html` | Título e prévia do link no WhatsApp | Só se mudar o nome |
| `app.js`, `styles.css`, `sw.js` | Funcionamento e visual | Não |
| `manifest.webmanifest`, `icons/` | Ícone e nome do app instalado | Opcional |

## Editar as peças (`config.js`)

```js
{
  id: 'vestido-midi-floral', // identificador único, sem espaço nem acento
  categoria: 'vestidos',     // precisa existir em "categorias"
  nome: 'Vestido midi floral',
  descricao: 'Viscose, alcinha regulável.',
  preco: 89.9,               // 89.9 = R$ 89,90
  foto: 'fotos/vestido-floral.jpg', // em roupa, a foto é essencial
  emoji: '👗',
  destaque: true,            // aparece em "Mais pedidos"
  disponivel: false,         // mostra "Esgotado"
  ativo: false,              // some do site
  opcoes: [                  // o cliente escolhe 1 opção de cada grupo
    { nome: 'Tamanho', valores: ['P', 'M', 'G', { nome: 'GG', esgotado: true }] },
    { nome: 'Cor', valores: ['Azul', 'Rosa'] },
  ],
}
```

**Estoque:** o site não controla estoque. Quando um tamanho acabar, marque `esgotado: true` naquele tamanho; quando a peça inteira acabar, `disponivel: false`. Por isso a mensagem pede confirmação de disponibilidade antes do pagamento.

Fotos: preferir quadradas, até ~200 KB cada (JPG). Foto pesada deixa o site lento em 4G.

## Publicar (gratuito)

**Opção A, recomendada: GitHub Pages.** Repositório → Settings → Pages → Branch `main`, pasta do projeto. O site fica em `https://<usuario>.github.io/<repositorio>/`. A cada alteração no `config.js` o site atualiza sozinho.

**Opção B: Netlify Drop** (app.netlify.com/drop). Arrasta a pasta e recebe um link. Bom para mostrar rápido, mas cada alteração exige arrastar de novo.

**Domínio próprio** (ex.: `barracadaetelvira.com.br`) é opcional: custa cerca de R$ 40/ano no Registro.br e aponta para qualquer uma das opções acima.

Depois de publicar:
1. Colocar o link na **bio do Instagram**.
2. Configurar o link na **mensagem de saudação/ausência do WhatsApp Business** (quem chamar no WhatsApp recebe o link das peças).
3. Gerar um **QR Code** do link para imprimir na barraca, nas sacolas e nas etiquetas.

## Testar localmente

Abrir `index.html` direto no navegador já funciona para conferir as peças e a mensagem. A instalação como app só funciona depois de publicado (exige HTTPS).

## Checklist antes de publicar

- [x] WhatsApp (19) 99132-0025 configurado
- [ ] Teste com uma reserva de verdade
- [x] Cidade: Leme-SP
- [ ] Peças à venda e tamanhos de cada uma
- [ ] Preços (segunda etapa)
- [ ] Política de troca (pode ir em `avisoGeral`)
- [x] Somente retirada na barraca
- [ ] Logo e **foto de cada peça**
- [ ] Teste completo em Android e iPhone
