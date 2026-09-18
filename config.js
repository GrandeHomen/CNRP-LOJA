/* ============================================================
   CONFIGURAÇÃO DA LOJA — CIDADE NOVA ROLEPLAY
   Edite este arquivo para personalizar tudo.
   ============================================================ */

window.CONFIG = {
  // ---------- IDENTIDADE ----------
  store: {
    name: 'Cidade Nova',
    suffix: ' RP',
    subtitle: 'Roleplay',
    logoText: 'CN',
    heroTitleStart: 'Bem-vindo à',
    heroTitleHighlight: 'Cidade Nova',
    heroTitleEnd: 'Roleplay',
    heroDescription: 'Adquira VIPs, veículos exclusivos, skins e muito mais. Entrega automática em segundos após o pagamento.',
    copyright: '© 2025 Cidade Nova Roleplay. Todos os direitos reservados.',
  },

  // ---------- CORES ----------
  colors: {
    primary: '#FF8A06',
    primaryDark: '#CC6E00',
    primaryLight: '#FFA733',
    background: '#0a0a0a',
    surface: '#141414',
  },

  // ---------- BADGE DO HERO ----------
  badge: {
    show: true,
    text: 'Servidor Online',
    pulse: true,
  },

  // ---------- DISCORD ----------
  discord: {
    clientId: 'COLE_SEU_CLIENT_ID_AQUI',
    redirectUri: '',
    scope: 'identify email',
    label: 'Entrar',
    inviteUrl: 'https://discord.gg/SEU-CODIGO-AQUI',
  },

  // ---------- ESTATÍSTICAS ----------
  stats: [
    { value: '12K+', label: 'Jogadores' },
    { value: '45K+', label: 'Vendas' },
    { value: '4.9★', label: 'Avaliação' },
  ],

  // ---------- DICA ----------
  hint: {
    show: true,
    text: '👆 Escolha uma categoria acima para ver os produtos',
  },

  // ---------- CATEGORIAS ----------
  categories: [
    { slug: 'vips',      name: 'VIPs',       icon: '👑' },
    { slug: 'facs',      name: 'Facs/Corps', icon: '⚡' },
    { slug: 'veiculos',  name: 'Veículos',   icon: '🚗' },
    { slug: 'skins',     name: 'Skins',      icon: '👕' },
    { slug: 'outros',    name: 'Outros',     icon: '📦' },
  ],

  // ---------- PRODUTOS ----------
  products: [
    // ============ VIPs ============
    {
      name: 'VIP Bronze',
      description: 'Pacote de entrada com benefícios essenciais para começar com vantagem no servidor.',
      price: 9.99,
      category: 'vips',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557322332606494/ChatGPT_Image_18_de_set._de_2026_12_27_41.png?ex=6aaec489&is=6aad7309&hm=89920cb0f42273247bda6fdb5a5bc2984865f8f1863069d797510a5a60cd0b73&',
      emoji: '🥉',
      bg: 'bg-vip',
      tag: 'INICIANTE',
    },
    {
      name: 'VIP Prata',
      description: 'Benefícios intermediários, comandos exclusivos e prioridade na fila de entrada.',
      price: 15.99,
      category: 'vips',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557321795477545/ChatGPT_Image_18_de_set._de_2026_12_28_59.png?ex=6aaec489&is=6aad7309&hm=a180e2d48628438a6620336063fa08c266bb731027821b5263dba8c04a07c72a&',
      emoji: '🥈',
      bg: 'bg-vip',
      tag: '',
    },
    {
      name: 'VIP Ouro',
      description: 'Acesso a veículos exclusivos, salário em dobro e todos os benefícios anteriores.',
      price: 25.99,
      category: 'vips',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557287012372600/ChatGPT_Image_18_de_set._de_2026_12_29_50.png?ex=6aaec481&is=6aad7301&hm=28ebbe3d65ddd867e7cc428ec2277f486bbf10d0f0a2d9f5e558d4358c45a97d&',
      emoji: '🥇',
      bg: 'bg-vip',
      tag: 'POPULAR',
    },
    {
      name: 'VIP Diamante',
      description: 'O pacote mais completo do servidor. Todos os benefícios liberados e prioridade máxima.',
      price: 49.99,
      category: 'vips',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557287582802143/ChatGPT_Image_18_de_set._de_2026_12_30_49.png?ex=6aaec481&is=6aad7301&hm=573e11e9fecaffc3163875af5d36fd8dad07cd1b22fac5219ece87138ddfeb14&',
      emoji: '💎',
      bg: 'bg-vip',
      tag: 'TOP',
    },

    // ============ Facs/Corps ============
    {
      name: 'Facção',
      description: 'Kit completo para montar sua facção: base, veículos, armas e membros.',
      price: 99.99,
      category: 'facs',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557284315308092/ChatGPT_Image_18_de_set._de_2026_12_37_58.png?ex=6aaec480&is=6aad7300&hm=976a59222244333708e1d812d9e3c2073e38e531decc537b6a1fa132625176dd&',
      emoji: '⚡',
      bg: 'bg-fac',
      tag: '',
    },
    {
      name: 'Corporação',
      description: 'Pacote para criar sua corporação com sede, viaturas e equipamentos táticos.',
      price: 75.00,
      category: 'facs',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557285040791682/ChatGPT_Image_18_de_set._de_2026_12_38_37.png?ex=6aaec480&is=6aad7300&hm=ade024b5d0daa1a2661d18703440222fcb3b2f52ca36dad6e70f337d8eac2181&',
      emoji: '🛡️',
      bg: 'bg-fac',
      tag: '',
    },

    // ============ Veículos ============
    {
      name: 'Veículo Particular',
      description: 'Escolha um veículo exclusivo para sua garagem pessoal com placa customizada.',
      price: 25.00,
      category: 'veiculos',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557288316539092/ChatGPT_Image_18_de_set._de_2026_12_33_58.png?ex=6aaec481&is=6aad7301&hm=7bce4db2b3a1a36f95b9cdd203ff9ec2a479f248e4d08f2b350fc85799530735&',
      emoji: '🚗',
      bg: 'bg-car',
      tag: '',
    },
    {
      name: 'Helicóptero Particular',
      description: 'Helicóptero exclusivo para locomoção aérea e domínio total do mapa.',
      price: 80.00,
      category: 'veiculos',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557283123986463/ChatGPT_Image_18_de_set._de_2026_12_52_22.png?ex=6aaec480&is=6aad7300&hm=2b22af2a5b759ddc7bb65dbe8c490d245bf66aeb001bf84edb9966b526ad96b6&',
      emoji: '🚁',
      bg: 'bg-car',
      tag: 'PREMIUM',
    },

    // ============ Skins ============
    {
      name: 'Skin Particular',
      description: 'Uma skin personalizada e exclusiva criada especialmente para o seu personagem.',
      price: 15.99,
      category: 'skins',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557545947603116/ChatGPT_Image_18_de_set._de_2026_12_34_11.png?ex=6aaec4be&is=6aad733e&hm=3363cbef7761e25fc9726f887d26cc088724c30a066aed43b0f88b97ba5d9931&',
      emoji: '👕',
      bg: 'bg-skin',
      tag: '',
    },

    // ============ Outros ============
    {
      name: '1KK de Dinheiro',
      description: 'Receba 1.000.000 em dinheiro dentro do servidor para investir como quiser.',
      price: 15.00,
      category: 'outros',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557285682778193/ChatGPT_Image_18_de_set._de_2026_12_49_04.png?ex=6aaec480&is=6aad7300&hm=4b031cca17dd47961b7b65fd07979b11268b934ea81f8f1b0d64eb7f8ca22816&',
      emoji: '💰',
      bg: 'bg-other',
      tag: 'MAIS VENDIDO',
    },
    {
      name: '1 Coin',
      description: 'Uma moeda premium para trocar por itens exclusivos na loja interna do servidor.',
      price: 1.00,
      category: 'outros',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557286529769542/ChatGPT_Image_18_de_set._de_2026_12_50_24.png?ex=6aaec481&is=6aad7301&hm=d4707b2ab2eba969ede3a49932880a4840aba2d9d234ee9136fce8024c67f70a&',
      emoji: '🪙',
      bg: 'bg-other',
      tag: '',
    },
    {
      name: 'Casa Particular',
      description: 'Uma casa exclusiva com localização privilegiada e garagem para vários veículos.',
      price: 50.00,
      category: 'outros',
      image: 'https://cdn.discordapp.com/attachments/1507765030920388744/1550557283874902106/ChatGPT_Image_18_de_set._de_2026_12_51_47.png?ex=6aaec480&is=6aad7300&hm=afb965a243e2c7c33ea9a71f0d73eeb822f4b42b2dc77002d382322d78acee50&',
      emoji: '🏠',
      bg: 'bg-other',
      tag: 'LUXO',
    },
  ],

  // ---------- CTA ----------
  cta: {
    titleStart: 'Pronto para',
    titleHighlight: 'dominar',
    titleEnd: 'a Cidade Nova?',
    description: 'Entre com seu Discord e receba sua compra em segundos.',
    buttonLabel: 'Entrar com Discord',
  },

  // ---------- RODAPÉ ----------
  footer: {
    description: 'A loja oficial da Cidade Nova Roleplay. Entrega automática e segura.',
    columns: [
      {
        title: 'Loja',
        links: [
          { label: 'VIPs',       href: '#' },
          { label: 'Facs/Corps', href: '#' },
          { label: 'Veículos',   href: '#' },
          { label: 'Skins',      href: '#' },
          { label: 'Outros',     href: '#' },
        ],
      },
      {
        title: 'Suporte',
        links: [
          { label: 'Discord',               href: '#' },
          { label: 'Termos de Uso',         href: '#' },
          { label: 'Política de Reembolso', href: '#' },
        ],
      },
    ],
    paymentText: 'Aceitamos PIX, cartão de crédito e boleto via Mercado Pago.',
  },
};
