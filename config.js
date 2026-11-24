/*
 * ============================================================
 *  CONFIGURAÇÃO DA LOJA — é só este arquivo que você edita.
 * ============================================================
 *  Dados confirmados pelo Instagram (@barracadaetelvira):
 *    nome, endereço, ponto de referência e horário.
 *  Confirmado com a família: cidade Leme-SP, somente retirada.
 *  Preços: entram num segundo momento (por isso o modo reserva).
 *  ⚠️ "CONFIRMAR" = suposição minha, validar com ela.
 *
 *  Sem preço no site: a cliente RESERVA a peça e a Etelvira confirma
 *  disponibilidade e preço no WhatsApp. Para mostrar preço em uma
 *  peça, preencha "preco" (ex.: preco: 89.9 → "a partir de R$ 89,90").
 *
 *  Dicas rápidas:
 *  - Peça vendida/acabou: disponivel: false  (ou ativo: false para sumir)
 *  - Tamanho acabou: { nome: 'G', esgotado: true }
 *  - Destacar no topo ("Novidades"): destaque: true
 *  - Foto: coloque o arquivo na pasta "fotos" e use foto: 'fotos/nome.jpg'
 */
window.LOJA = {
  id: 'barraca-da-etelvira', // não mude depois de publicado (guarda o carrinho do cliente)

  nome: 'Barraca da Etelvira',
  slogan: 'Moda feminina · sábado e domingo', // CONFIRMAR
  emoji: '👗',
  logo: 'fotos/logo.jpg', // recortado do Instagram; trocar pelo arquivo original em alta

  // WhatsApp que RECEBE os pedidos (o mesmo para as duas lojas: atendimento centralizado)
  whatsapp: '5519991320025',
  whatsappExibicao: '(19) 99132-0025',
  instagram: 'barracadaetelvira',
  // Usado no botão "Como chegar" (Google Maps). Confirmado: Leme-SP
  endereco: 'Rua Angelo Consentino, Santa Rita, Leme - SP',
  cidade: 'Ao lado da pista de skate',

  orcamento: true, // modo sem preço
  textosSemPreco: {
    semPreco: 'Consulte o preço',
    seu: 'Sua reserva',
    oItem: 'a reserva',
    numero: 'Reserva',
    verCarrinho: 'Ver reserva',
    adicionar: 'Adicionar à reserva',
    enviar: 'Reservar pelo WhatsApp',
    botaoComoPedir: 'Reservar',
    titulo: 'RESERVA DE PEÇAS',
    resposta: 'Confirmamos pelo WhatsApp a disponibilidade e o preço.',
    obrigado: 'Obrigada pela reserva! 💛',
  },
  textoOrcamento: 'Disponibilidade e preço são confirmados pelo WhatsApp antes de você ir buscar.',

  mensagemContato: 'Olá! Vim pelo site da Barraca da Etelvira e quero saber de uma peça.',
  avisoFechado: 'A barraca abre sábado e domingo, mas você pode reservar agora: respondemos pelo WhatsApp.',
  avisoGeral: '',

  // Horário da barraca (do Instagram)
  horarios: {
    seg: '',
    ter: '',
    qua: '',
    qui: '',
    sex: '',
    sab: '07:00-17:00',
    dom: '07:00-12:00',
  },

  entrega: {
    retirada: true,
    textoRetirada: 'Retirar na barraca (sábado ou domingo)',
    delivery: false, // confirmado: somente retirada na barraca
    taxa: 0,
    bairros: [],
    pedidoMinimo: 0,
    observacao: '',
  },

  encomenda: { exigeData: false, antecedenciaDias: 0 },

  pagamentos: ['Pix', 'Dinheiro', 'Cartão'], // não aparece no modo sem preço
  pix: '',

  placeholderObs: 'Ex.: dúvida de tamanho, outra cor, quer ver mais fotos…',
  rodapeMensagem: 'Reserva feita pelo site 🙂',

  fotoRetrato: true, // fotos de roupa em pé (mais altas)
  tituloDestaques: '✨ Novidades',

  // Preto e branco, como o logo
  tema: {
    primaria: '#1c1c1c',
    'primaria-escura': '#000000',
    secundaria: '#f1ede7',
    fundo: '#faf9f7',
  },

  categorias: [
    { id: 'vestidos', nome: 'Vestidos' },
    { id: 'conjuntos', nome: 'Conjuntos' },
    { id: 'calcas', nome: 'Calças' },
  ],

  // Peças tiradas das fotos do Instagram. CONFIRMAR nomes e tamanhos
  // disponíveis; trocar as fotos pelas originais em alta.
  produtos: [
    {
      id: 'vestido-longo-amarelo-ciganinha',
      categoria: 'vestidos',
      nome: 'Vestido longo ciganinha amarelo',
      descricao: 'Ombro a ombro, cintura franzida e saia em camadas.',
      preco: null,
      foto: 'fotos/vestido-longo-amarelo-ciganinha.jpg',
      destaque: true,
      opcoes: [{ nome: 'Tamanho', valores: ['P', 'M', 'G', 'GG'] }],
    },
    {
      id: 'vestido-longo-amarelo-fenda',
      categoria: 'vestidos',
      nome: 'Vestido longo amarelo com fenda',
      descricao: 'Alcinha, decote com torção e fenda lateral.',
      preco: null,
      foto: 'fotos/vestido-longo-amarelo-fenda.jpg',
      destaque: true,
      opcoes: [{ nome: 'Tamanho', valores: ['P', 'M', 'G', 'GG'] }],
    },
    {
      id: 'vestido-lilas-transpassado',
      categoria: 'vestidos',
      nome: 'Vestido curto lilás transpassado',
      descricao: 'Alcinha, saia envelope com amarração lateral.',
      preco: null,
      foto: 'fotos/vestido-lilas-transpassado.jpg',
      opcoes: [{ nome: 'Tamanho', valores: ['P', 'M', 'G', 'GG'] }],
    },
    {
      id: 'conjunto-paete-preto',
      categoria: 'conjuntos',
      nome: 'Conjunto paetê preto',
      descricao: 'Top faixa e saia de paetê. Para festa e balada.',
      preco: null,
      foto: 'fotos/conjunto-paete-preto.jpg',
      destaque: true,
      opcoes: [{ nome: 'Tamanho', valores: ['P', 'M', 'G', 'GG'] }],
    },
    {
      id: 'conjunto-azul-ciganinha',
      categoria: 'conjuntos',
      nome: 'Conjunto ciganinha azul',
      descricao: 'Blusa ombro a ombro com babado e calça pantalona.',
      preco: null,
      foto: 'fotos/conjunto-azul-ciganinha.jpg',
      opcoes: [{ nome: 'Tamanho', valores: ['P', 'M', 'G', 'GG'] }],
    },
    {
      id: 'calca-pantalona-laranja',
      categoria: 'calcas',
      nome: 'Calça pantalona laranja',
      descricao: 'Cintura alta, acompanha corrente dourada.',
      preco: null,
      foto: 'fotos/calca-pantalona-laranja.jpg',
      opcoes: [{ nome: 'Tamanho', valores: ['36', '38', '40', '42', '44'] }],
    },
  ],
};
