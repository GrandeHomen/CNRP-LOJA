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
    primary: '#FF8A06',      // Laranja principal (RGB 255, 138, 6)
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
    label: 'Entrar',
    url: 'https://discord.gg/ZShDd4Yqkt',  // ← COLE SEU LINK
  },

  // ---------- ESTATÍSTICAS ----------
  stats: [
    { value: '1.000+', label: 'Jogadores' },
    { value: '50+', label: 'Vendas' },
    { value: '4.9★', label: 'Avaliação' },
  ],

  // ---------- DICA ----------
  hint: {
    show: true,
    text: '👆 Escolha uma categoria acima para ver os produtos',
  },

  // ---------- CATEGORIAS ----------
  categories: [
    { slug: 'vips',     name: 'VIPs',     icon: '👑' },
    { slug: 'facs',     name: 'Facções',  icon: '⚡' },
    { slug: 'veiculos', name: 'Veículos', icon: '🚗' },
    { slug: 'skins',    name: 'Skins',    icon: '👕' },
    { slug: 'outros',   name: 'Outros',   icon: '📦' },
  ],

  // ---------- PRODUTOS ----------
  products: [
    { name: 'VIP Ouro', description: 'Acesso total a comandos exclusivos, prioridade na fila e 2x salário por 30 dias.', price: 49.90, category: 'vips', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80&auto=format&fit=crop', emoji: '👑', bg: 'bg-vip', tag: 'MAIS VENDIDO' },
    { name: 'VIP Platina', description: 'Todos os benefícios do VIP Ouro + veículos exclusivos e casa personalizada.', price: 89.90, category: 'vips', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80&auto=format&fit=crop', emoji: '👑', bg: 'bg-vip', tag: 'PREMIUM' },
    { name: 'VIP Diamante', description: 'O pacote mais completo do servidor com todos os benefícios liberados.', price: 149.90, category: 'vips', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80&auto=format&fit=crop', emoji: '💎', bg: 'bg-vip', tag: 'TOP' },
    { name: 'Facção Comando Vermelho', description: 'Kit completo para montar sua facção com armas, veículos e base.', price: 199.90, category: 'facs', image: 'https://images.unsplash.com/photo-1547941126-3d5322b218b0?w=600&q=80&auto=format&fit=crop', emoji: '⚡', bg: 'bg-fac', tag: '' },
    { name: 'Facção PCC', description: 'Pacote completo para o crime organizado com benefícios exclusivos.', price: 199.90, category: 'facs', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80&auto=format&fit=crop', emoji: '💀', bg: 'bg-fac', tag: '' },
    { name: 'Nissan Skyline GTR R34', description: 'Veículo lendário com tuning completo, som customizado e placa exclusiva.', price: 29.90, category: 'veiculos', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80&auto=format&fit=crop', emoji: '🚗', bg: 'bg-car', tag: 'NOVO' },
    { name: 'Toyota Supra MK4', description: 'O clássico JDM com body kit completo e performance turbinada.', price: 34.90, category: 'veiculos', image: 'https://images.unsplash.com/photo-1625231334168-35067f8853ed?w=600&q=80&auto=format&fit=crop', emoji: '🏎️', bg: 'bg-car', tag: '' },
    { name: 'Lamborghini Aventador', description: 'Supercarro italiano de altíssimo luxo com detalhes exclusivos.', price: 79.90, category: 'veiculos', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80&auto=format&fit=crop', emoji: '🏁', bg: 'bg-car', tag: 'RARO' },
    { name: 'Skin Policial Elite', description: 'Uniforme tático completo com equipamentos premium e acessórios.', price: 19.90, category: 'skins', image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&q=80&auto=format&fit=crop', emoji: '👮', bg: 'bg-skin', tag: '' },
    { name: 'Skin Médico Chefe', description: 'Visual de chefia da equipe médica com jaleco exclusivo.', price: 24.90, category: 'skins', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&auto=format&fit=crop', emoji: '🩺', bg: 'bg-skin', tag: '' },
    { name: 'Pacote de Armas Premium', description: 'Conjunto de 5 armas exclusivas com skins customizadas.', price: 44.90, category: 'outros', image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600&q=80&auto=format&fit=crop', emoji: '🔫', bg: 'bg-other', tag: '' },
    { name: 'Casa de Luxo em Vinewood', description: 'Propriedade exclusiva com garagem para 10 veículos.', price: 119.90, category: 'outros', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80&auto=format&fit=crop', emoji: '🏰', bg: 'bg-other', tag: 'LUXO' },
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
      { title: 'Loja',    links: [{ label: 'VIPs', href: '#' }, { label: 'Veículos', href: '#' }, { label: 'Facções', href: '#' }, { label: 'Skins', href: '#' }] },
      { title: 'Suporte', links: [{ label: 'Discord', href: '#' }, { label: 'Termos de Uso', href: '#' }, { label: 'Política de Reembolso', href: '#' }] },
    ],
    paymentText: 'Aceitamos PIX, cartão de crédito e boleto via Mercado Pago.',
  },
};
