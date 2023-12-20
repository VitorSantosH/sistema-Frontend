

const emissores = [
    {
        sigla: 'ABNC',
        extenso: 'Academia Brasileira de Neurocirurgia',
    },
    {
        sigla: 'AGU',
        extenso: 'Advocacia-Geral da União',
    },
    {
        sigla: 'ANAC',
        extenso: 'Agência Nacional de Aviação Civil',
    },
    {
        sigla: 'CAER',
        extenso: 'Clube de Aeronáutica',
    },
    {
        sigla: 'CAU',
        extenso: 'Conselho de Arquitetura e Urbanismo',
    },
    {
        sigla: 'CBM',
        extenso: 'Corpo de Bombeiro Militar',
    },
    {
        sigla: 'CFA',
        extenso: 'Conselho Federal Administração',
    },
    {
        sigla: 'CFB',
        extenso: 'Conselho Federal de Biblioteconomia',
    },
    {
        sigla: 'CFBIO',
        extenso: 'Conselho Federal de Biologia',
    },
    {
        sigla: 'CFBM',
        extenso: 'Conselho Federal de Biomedicina',
    },
    {
        sigla: 'CFC',
        extenso: 'Conselho Federal de Contabilidade',
    },
    {
        sigla: 'CFESS',
        extenso: 'Conselho Federal de Serviço Social',
    },
    {
        sigla: 'CFF',
        extenso: 'Conselho Regional de Farmácia',
    },
    {
        sigla: 'CFFA',
        extenso: 'Conselho Federal de Fonoaudiologia',
    },
    {
        sigla: 'CFM',
        extenso: 'Conselho Federal de Medicina',
    },
    {
        sigla: 'CFMV',
        extenso: 'Conselho Federal de Medicina Veterinária',
    },
    {
        sigla: 'CFN',
        extenso: 'Conselho Federal de Nutrição',
    },
    {
        sigla: 'CFO',
        extenso: 'Conselho Federal de Odontologia',
    },
    {
        sigla: 'CFP',
        extenso: 'Conselho Federal de Psicologia',
    },
    {
        sigla: 'CFQ',
        extenso: 'Conselho Regional de Química',
    },
    {
        sigla: 'CFT',
        extenso: 'Conselho Federal dos Técnicos Industriais',
    },
    {
        sigla: 'CFTA',
        extenso: 'Conselho Federal dos Técnicos Agrícolas',
    },
    {
        sigla: 'CGPI',
        extenso: 'Coordenação Geral de Privilégios e Imunidades',
    },
    {
        sigla: 'CGPMAF',
        extenso:
            'Coordenadoria Geral de Polícia Marítima, Aeronáutica e de Fronteiras',
    },
    {
        sigla: 'CIPC',
        extenso: 'Centro de Inteligência da Polícia Civil',
    },
    {
        sigla: 'CNIG',
        extenso: 'Conselho Nacional de Imigração',
    },
    {
        sigla: 'CNT',
        extenso: 'Confederação Nacional do Transporte',
    },
    {
        sigla: 'CNTV',
        extenso: 'Confederação Nacional de Vigilantes & Prestadores de Serviços',
    },
    {
        sigla: 'COFECI',
        extenso: 'Conselho Federal de Corretores de Imóveis',
    },
    {
        sigla: 'COFECON',
        extenso: 'Conselho Federal de Economia',
    },
    {
        sigla: 'COFEM',
        extenso: 'Conselho Federal de Museologia',
    },
    {
        sigla: 'COFEN',
        extenso: 'Conselho Federal de Enfermagem',
    },
    {
        sigla: 'COFFITO',
        extenso: 'Conselho Regional de Fisioterapia e Terapia Ocupacional',
    },
    {
        sigla: 'COMAER',
        extenso: 'Comando da Aeronáutica',
    },
    {
        sigla: 'CONFE',
        extenso: 'Conselho Federal de Estatística',
    },
    {
        sigla: 'CONFEA',
        extenso: 'Conselho Federal de Engenharia e Agronomia',
    },
    {
        sigla: 'CONFEF',
        extenso: 'Conselho Federal de Educação Física',
    },
    {
        sigla: 'CONFERE',
        extenso: 'Conselho Federal dos Representantes Comerciais',
    },
    {
        sigla: 'CONRE',
        extenso: 'Conselho Regional de Estatística',
    },
    {
        sigla: 'CONRERP',
        extenso: 'Conselho Federal de Profissionais de Relações Públicas',
    },
    {
        sigla: 'CORE',
        extenso: 'Conselho Regional dos Representantes Comerciais',
    },
    {
        sigla: 'CORECON',
        extenso: 'Conselho Regional de Economia',
    },
    {
        sigla: 'COREM',
        extenso: 'Conselho Regional de Museologia',
    },
    {
        sigla: 'COREN',
        extenso: 'Conselho Regional de Enfermagem',
    },
    {
        sigla: 'CRA',
        extenso: 'Conselho Regional de Administração',
    },
    {
        sigla: 'CRAS',
        extenso: 'Centro de Referência de Assistência Social',
    },
    {
        sigla: 'CRB',
        extenso: 'Conselho Regional de Biblioteconomia',
    },
    {
        sigla: 'CRBIO',
        extenso: 'Conselho Regional de Biologia',
    },
    {
        sigla: 'CRBM',
        extenso: 'Conselho Regional de Biomedicina',
    },
    {
        sigla: 'CRC',
        extenso: 'Conselho Regional de Contabilidade',
    },
    {
        sigla: 'CREA',
        extenso: 'Conselho Regional de Engenharia e Agronomia',
    },
    {
        sigla: 'CRECI',
        extenso: 'Conselho Regional de Corretores de Imóveis',
    },
    {
        sigla: 'CREF',
        extenso: 'Conselho Regional de Educação Física',
    },
    {
        sigla: 'CREFITO',
        extenso: 'Conselho Regional de Fisioterapia e Terapia Ocupacional',
    },
    {
        sigla: 'CRESS',
        extenso: 'Conselho Regional de Serviço Social',
    },
    {
        sigla: 'CRF',
        extenso: 'Conselho Regional de Farmácia',
    },
    {
        sigla: 'CRFA',
        extenso: 'Conselho Regional de Fonoaudiologia',
    },
    {
        sigla: 'CRM',
        extenso: 'Conselho Regional de Medicina',
    },
    {
        sigla: 'CRMV',
        extenso: 'Conselho Regional de Medicina Veterinária',
    },
    {
        sigla: 'CRN',
        extenso: 'Conselho Regional de Nutrição',
    },
    {
        sigla: 'CRO',
        extenso: 'Conselho Regional de Odontologia',
    },
    {
        sigla: 'CRP',
        extenso: 'Conselho Regional de Psicologia',
    },
    {
        sigla: 'CRPRE',
        extenso: 'Conselho Regional de Profissionais de Relações Públicas',
    },
    {
        sigla: 'CRQ',
        extenso: 'Conselho Regional de Química',
    },
    {
        sigla: 'CRT',
        extenso: 'Conselho Regional dos Técnicos Industriais',
    },
    {
        sigla: 'CRTA',
        extenso: 'Conselho Regional de Técnicos de Administração',
    },
    {
        sigla: 'CTPS',
        extenso: 'Carteira de Trabalho e Previdência Social',
    },
    {
        sigla: 'CV',
        extenso: 'Cartório Civil',
    },
    {
        sigla: 'DELEMIG',
        extenso: 'Delegacia de Polícia de Imigração',
    },
    {
        sigla: 'DETRAN',
        extenso: 'Departamento Estadual de Trânsito',
    },
    {
        sigla: 'DGPC',
        extenso: 'Diretoria Geral da Polícia Civil',
    },
    {
        sigla: 'DIC',
        extenso: 'Diretoria de Identificação Civil',
    },
    {
        sigla: 'DICC',
        extenso: 'Diretoria de Identificação Civil e Criminal',
    },
    {
        sigla: 'DIREX',
        extenso: 'Diretoria Executiva',
    },
    {
        sigla: 'DPF',
        extenso: 'Departamento de Polícia Federal',
    },
    {
        sigla: 'DPMAF',
        extenso: 'Divisão de Polícia Marítima, Aérea e de Fronteiras',
    },
    {
        sigla: 'DPT',
        extenso: 'Departamento de Polícia Técnica Geral',
    },
    {
        sigla: 'DPTC',
        extenso: 'Departamento de Polícia Técnico Científica',
    },
    {
        sigla: 'DREX',
        extenso: 'Delegacia Regional Executiva',
    },
    {
        sigla: 'DRT',
        extenso: 'Delegacia Regional do Trabalho',
    },
    {
        sigla: 'EB',
        extenso: 'Exército Brasileiro',
    },
    {
        sigla: 'FAB',
        extenso: 'Força Aérea Brasileira',
    },
    {
        sigla: 'FENAJ',
        extenso: 'Federação Nacional dos Jornalistas',
    },
    {
        sigla: 'FGTS',
        extenso: 'Fundo de Garantia do Tempo de Serviço',
    },
    {
        sigla: 'FIPE',
        extenso: 'Fundação Instituto de Pesquisas Econômicas',
    },
    {
        sigla: 'FLS',
        extenso: 'Fundação Lyndolpho Silva',
    },
    {
        sigla: 'FUNAI',
        extenso: 'Fundação Nacional do Índio',
    },
    {
        sigla: 'GEJSP',
        extenso: 'Gerência de Estado de Justiça, Segurança Pública e Cidadania',
    },
    {
        sigla: 'GEJSPC',
        extenso: 'Gerência de Estado de Justiça, Segurança Pública e Cidadania',
    },
    {
        sigla: 'GEJUSPC',
        extenso: 'Gerência de Estado de Justiça, Segurança Pública e Cidadania',
    },
    {
        sigla: 'GESP',
        extenso: 'Gerência de Estado de Segurança Pública',
    },
    {
        sigla: 'GOVGO',
        extenso: 'Governo do Estado de Goiás',
    },
    {
        sigla: 'I CLA',
        extenso: 'Carteira de Identidade Classista',
    },
    {
        sigla: 'ICP',
        extenso: 'Instituto de Polícia Científica',
    },
    {
        sigla: 'IDAMP',
        extenso: 'Instituto de Identificação Dr. Aroldo Mendes Paiva',
    },
    {
        sigla: 'IFP',
        extenso: 'Instituto Félix Pacheco',
    },
    {
        sigla: 'IGP',
        extenso: 'Instituto Geral de Perícias',
    },
    {
        sigla: 'IIACM',
        extenso: 'Instituto de Identificação Aderson Conceição de Melo',
    },
    {
        sigla: 'IICC',
        extenso: 'Instituto de Identificação Civil e Criminal',
    },
    {
        sigla: 'IICCECF',
        extenso:
            'Instituto de Identificação Civil e Criminal Engrácia da Costa Francisco',
    },
    {
        sigla: 'IICM',
        extenso: 'Instituto de Identificação Carlos Menezes',
    },
    {
        sigla: 'IIGP',
        extenso: 'Instituto de Identificação Gonçalo Pereira',
    },
    {
        sigla: 'IIJDM',
        extenso: 'Instituto de Identificação João de Deus Martins',
    },
    {
        sigla: 'IIPC',
        extenso: 'Instituto de Identificação da Polícia Civil',
    },
    {
        sigla: 'IIPC',
        extenso: 'Instituto de Identificação Pedro Mello',
    },
    {
        sigla: 'IIRGD',
        extenso: 'Instituto de Identificação Ricardo Gumbleton Daunt',
    },
    {
        sigla: 'IIRHM',
        extenso: 'Instituto de Identificação Raimundo Hermínio de Melo',
    },
    {
        sigla: 'IITB',
        extenso: 'Instituto de Identificação Tavares Buril',
    },
    {
        sigla: 'IML',
        extenso: 'Instituto Médico-Legal',
    },
    {
        sigla: 'INI',
        extenso: 'Instituto Nacional de Identificação',
    },
    {
        sigla: 'IPF',
        extenso: 'Instituto Pereira Faustino',
    },
    {
        sigla: 'ITCP',
        extenso: 'Instituto Técnico-Científico de Perícia',
    },
    {
        sigla: 'ITEP',
        extenso: 'Instituto Técnico-Científico de Perícia',
    },
    {
        sigla: 'MAER',
        extenso: 'Ministério da Aeronáutica',
    },
    {
        sigla: 'MB',
        extenso: 'Marinha do Brasil',
    },
    {
        sigla: 'MD',
        extenso: 'Ministério da Defesa',
    },
    {
        sigla: 'MDS',
        extenso: 'Ministério da Cidadania',
    },
    {
        sigla: 'MEC',
        extenso: 'Ministério da Educação e Cultura',
    },
    {
        sigla: 'MEX',
        extenso: 'Ministério do Exército',
    },
    {
        sigla: 'MINDEF',
        extenso: 'Ministério da Defesa',
    },
    {
        sigla: 'MJ',
        extenso: 'Ministério da Justiça',
    },
    {
        sigla: 'MM',
        extenso: 'Ministério da Marinha',
    },
    {
        sigla: 'MMA',
        extenso: 'Ministério da Marinha',
    },
    {
        sigla: 'MPAS',
        extenso: 'Ministério da Previdência e Assistência Social',
    },
    {
        sigla: 'MPE',
        extenso: 'Ministério Público Estadual',
    },
    {
        sigla: 'MPF',
        extenso: 'Ministério Público Federal',
    },
    {
        sigla: 'MPT',
        extenso: 'Ministério Público do Trabalho',
    },
    {
        sigla: 'MRE',
        extenso: 'Ministério das Relações Exteriores',
    },
    {
        sigla: 'MT',
        extenso: 'Ministério do Trabalho',
    },
    {
        sigla: 'MTE',
        extenso: 'Ministério da Economia',
    },
    {
        sigla: 'MTPS',
        extenso: 'Ministério do Trabalho e Previdência Social',
    },
    {
        sigla: 'NUMIG',
        extenso: 'Núcleo de Polícia de Imigração',
    },
    {
        sigla: 'OAB',
        extenso: 'Ordem dos Advogados do Brasil',
    },
    {
        sigla: 'OMB',
        extenso: 'Ordens dos Músicos do Brasil',
    },
    {
        sigla: 'PC',
        extenso: 'Polícia Civil',
    },
    {
        sigla: 'PF',
        extenso: 'Polícia Federal',
    },
    {
        sigla: 'PGFN',
        extenso: 'Procuradoria Geral da Fazenda Nacional',
    },
    {
        sigla: 'PM',
        extenso: 'Polícia Militar',
    },
    {
        sigla: 'POLITEC',
        extenso: 'Perícia Oficial e Identificação Técnica',
    },
    {
        sigla: 'PRF',
        extenso: 'Polícia Rodoviária Federal',
    },
    {
        sigla: 'PTC',
        extenso: 'Polícia Tecnico-Científica',
    },
    {
        sigla: 'SCC',
        extenso: 'Secretaria de Estado da Casa Civil',
    },
    {
        sigla: 'SCJDS',
        extenso: 'Secretaria Coordenadora de Justiça e Defesa Social',
    },
    {
        sigla: 'SDS',
        extenso: 'Secretaria de Defesa Social',
    },
    {
        sigla: 'SECC',
        extenso: 'Secretaria de Estado da Casa Civil',
    },
    {
        sigla: 'SECCDE',
        extenso: 'Secretaria de Estado da Casa Civil e Desenvolvimento Econômico',
    },
    {
        sigla: 'SEDS',
        extenso: 'Secretaria de Estado da Defesa Social',
    },
    {
        sigla: 'SEGUP',
        extenso: 'Secretaria de Estado da Segurança Pública e da Defesa Social',
    },
    {
        sigla: 'SEJSP',
        extenso: 'Secretaria de Estado de Justiça e Segurança Pública',
    },
    {
        sigla: 'SEJUC',
        extenso: 'Secretaria de Estado da Justica',
    },
    {
        sigla: 'SEJUSP',
        extenso: 'Secretaria de Estado de Justiça e Segurança Pública',
    },
    {
        sigla: 'SEPC',
        extenso: 'Secretaria de Estado da Polícia Civil',
    },
    {
        sigla: 'SES',
        extenso: 'Secretaria de Estado da Segurança',
    },
    {
        sigla: 'SESC',
        extenso: 'Secretaria de Estado da Segurança e Cidadania',
    },
    {
        sigla: 'SESDC',
        extenso: 'Secretaria de Estado da Segurança, Defesa e Cidadania',
    },
    {
        sigla: 'SESDEC',
        extenso: 'Secretaria de Estado da Segurança, Defesa e Cidadania',
    },
    {
        sigla: 'SESEG',
        extenso: 'Secretaria Estadual de Segurança',
    },
    {
        sigla: 'SESP',
        extenso: 'Secretaria de Estado da Segurança Pública',
    },
    {
        sigla: 'SESPAP',
        extenso:
            'Secretaria de Estado da Segurança Pública e Administração Penitenciária',
    },
    {
        sigla: 'SESPDC',
        extenso: 'Secretaria de Estado de Segurança Publica e Defesa do Cidadão',
    },
    {
        sigla: 'SESPDS',
        extenso: 'Secretaria de Estado de Segurança Pública e Defesa Social',
    },
    {
        sigla: 'SGPC',
        extenso: 'Superintendência Geral de Polícia Civil',
    },
    {
        sigla: 'SGPJ',
        extenso: 'Superintendência Geral de Polícia Judiciária',
    },
    {
        sigla: 'SIM',
        extenso: 'Serviço de Identificação da Marinha',
    },
    {
        sigla: 'SJ',
        extenso: 'Secretaria da Justiça',
    },
    {
        sigla: 'SJCDH',
        extenso: 'Secretaria da Justiça e dos Direitos Humanos',
    },
    {
        sigla: 'SJDS',
        extenso: 'Secretaria Coordenadora de Justiça e Defesa Social',
    },
    {
        sigla: 'SJS',
        extenso: 'Secretaria da Justiça e Segurança',
    },
    {
        sigla: 'SJTC',
        extenso: 'Secretaria da Justiça do Trabalho e Cidadania',
    },
    {
        sigla: 'SJTS',
        extenso: 'Secretaria da Justiça do Trabalho e Segurança',
    },
    {
        sigla: 'SNJ',
        extenso: 'Secretaria Nacional de Justiça / Departamento de Estrangeiros',
    },
    {
        sigla: 'SPMAF',
        extenso: 'Serviço de Polícia Marítima, Aérea e de Fronteiras',
    },
    {
        sigla: 'SPTC',
        extenso: 'Secretaria de Polícia Técnico-Científica',
    },
    {
        sigla: 'SRDPF',
        extenso: 'Superintendência Regional do Departamento de Polícia Federal',
    },
    {
        sigla: 'SRF',
        extenso: 'Receita Federal',
    },
    {
        sigla: 'SRTE',
        extenso: 'Superintendência Regional do Trabalho',
    },
    {
        sigla: 'SSDC',
        extenso: 'Secretaria da Segurança, Defesa e Cidadania',
    },
    {
        sigla: 'SSDS',
        extenso: 'Secretaria da Segurança e da Defesa Social',
    },
    {
        sigla: 'SSI',
        extenso: 'Secretaria de Segurança e Informações',
    },
    {
        sigla: 'SSP',
        extenso: 'Secretaria de Segurança Pública',
    },
    {
        sigla: 'SSPCGP',
        extenso:
            'Secretaria de Segurança Pública e Coordenadoria Geral de Perícias',
    },
    {
        sigla: 'SSPDC',
        extenso: 'Secretaria de Segurança Pública e Defesa do Cidadão',
    },
    {
        sigla: 'SSPDS',
        extenso: 'Secretaria de Segurança Pública e Defesa Social',
    },
    {
        sigla: 'SSPPC',
        extenso: 'Secretaria de Segurança Pública Polícia Civil',
    },
    {
        sigla: 'SUSEP',
        extenso: 'Superintendência de Seguros Privados',
    },
    {
        sigla: 'SUSEPE',
        extenso: 'Superintendência dos Serviços Penitenciários',
    },
    {
        sigla: 'TJ',
        extenso: 'Tribunal de Justiça',
    },
    {
        sigla: 'TJAEM',
        extenso: 'Tribunal Arbitral e Mediação dos Estados Brasileiros',
    },
    {
        sigla: 'TRE',
        extenso: 'Tribunal Regional Eleitoral',
    },
    {
        sigla: 'TRF',
        extenso: 'Tribunal Regional Federal',
    },
    {
        sigla: 'TSE',
        extenso: 'Tribunal Superior Eleitoral',
    },
    {
        sigla: 'XXX',
        extenso: 'Orgão Estrangeiro',
    },
    {
        sigla: 'ZZZ',
        extenso: 'Outro',
    },
];

const ufs = [
    { uf: 'AC', nome: 'Acre' },
    { uf: 'AL', nome: 'Alagoas' },
    { uf: 'AP', nome: 'Amapá' },
    { uf: 'AM', nome: 'Amazonas' },
    { uf: 'BA', nome: 'Bahia' },
    { uf: 'CE', nome: 'Ceará' },
    { uf: 'DF', nome: 'Distrito Federal' },
    { uf: 'ES', nome: 'Espirito Santo' },
    { uf: 'GO', nome: 'Goiás' },
    { uf: 'MA', nome: 'Maranhão' },
    { uf: 'MS', nome: 'Mato Grosso do Sul' },
    { uf: 'MT', nome: 'Mato Grosso' },
    { uf: 'MG', nome: 'Minas Gerais' },
    { uf: 'PA', nome: 'Pará' },
    { uf: 'PB', nome: 'Paraíba' },
    { uf: 'PR', nome: 'Paraná' },
    { uf: 'PE', nome: 'Pernambuco' },
    { uf: 'PI', nome: 'Piauí' },
    { uf: 'RJ', nome: 'Rio de Janeiro' },
    { uf: 'RN', nome: 'Rio Grande do Norte' },
    { uf: 'RS', nome: 'Rio Grande do Sul' },
    { uf: 'RO', nome: 'Rondônia' },
    { uf: 'RR', nome: 'Roraima' },
    { uf: 'SC', nome: 'Santa Catarina' },
    { uf: 'SP', nome: 'São Paulo' },
    { uf: 'SE', nome: 'Sergipe' },
    { uf: 'TO', nome: 'Tocantins' }
]

const bancosBrasil = [
    {
        "code": 1,
        "bank": "Banco Do Brasil S.A (BB)"
    },
    {
        "code": 237,
        "bank": "Bradesco S.A."
    },
    {
        "code": 335,
        "bank": "Banco Digio S.A."
    },
    {
        "code": 260,
        "bank": "Nu Pagamentos S.A (Nubank)"
    },
    {
        "code": 290,
        "bank": "PagSeguro Internet S.A."
    },
    {
        "code": 323,
        "bank": "Mercado Pago – Conta Do Mercado Livre"
    },
    {
        "code": 237,
        "bank": "Next Bank (Mesmo Código Do Bradesco)"
    },
    {
        "code": 637,
        "bank": "Banco Sofisa S.A (Sofisa Direto)"
    },
    {
        "code": 77,
        "bank": "Banco Inter S.A."
    },
    {
        "code": 341,
        "bank": "Itaú Unibanco S.A."
    },
    {
        "code": 104,
        "bank": "Caixa Econômica Federal (CEF)"
    },
    {
        "code": 33,
        "bank": "Banco Santander Brasil S.A."
    },
    {
        "code": 212,
        "bank": "Banco Original S.A."
    },
    {
        "code": 756,
        "bank": "Bancoob – Banco Cooperativo Do Brasil S.A."
    },
    {
        "code": 655,
        "bank": "Banco Votorantim S.A."
    },
    {
        "code": 655,
        "bank": "Neon Pagamentos S.A (Memso Código Do Banco Votorantim)"
    },
    {
        "code": 41,
        "bank": "Banrisul – Banco Do Estado Do Rio Grande Do Sul S.A."
    },
    {
        "code": 389,
        "bank": "Banco Mercantil Do Brasil S.A."
    },
    {
        "code": 422,
        "bank": "Banco Safra S.A."
    },
    {
        "code": 70,
        "bank": "BRB – Banco De Brasília S.A."
    },
    {
        "code": 136,
        "bank": "Unicred Cooperativa LTDA"
    },
    {
        "code": 741,
        "bank": "Banco Ribeirão Preto S.A."
    },
    {
        "code": 739,
        "bank": "Banco Cetelem S.A."
    },
    {
        "code": 743,
        "bank": "Banco Semear S.A."
    },
    {
        "code": 100,
        "bank": "Planner Corretora De Valores S.A."
    },
    {
        "code": 96,
        "bank": "Banco B3 S.A."
    },
    {
        "code": 747,
        "bank": "Banco Rabobank Internacional Do Brasil S.A."
    },
    {
        "code": 748,
        "bank": "Banco Cooperativa Sicredi S.A."
    },
    {
        "code": 752,
        "bank": "Banco BNP Paribas Brasil S.A."
    },
    {
        "code": 91,
        "bank": "Unicred Central Rs"
    },
    {
        "code": 399,
        "bank": "Kirton Bank S.A. – Banco Múltiplo"
    },
    {
        "code": 108,
        "bank": "Portocred S.A."
    },
    {
        "code": 757,
        "bank": "Banco Keb Hana Do Brasil S.A."
    },
    {
        "code": 102,
        "bank": "XP Investimentos S.A."
    },
    {
        "code": 348,
        "bank": "Banco XP S/A"
    },
    {
        "code": 340,
        "bank": "Super Pagamentos S/A (Superdital)"
    },
    {
        "code": 84,
        "bank": "Uniprime Norte Do Paraná"
    },
    {
        "code": 180,
        "bank": "Cm Capital Markets Cctvm Ltda"
    },
    {
        "code": 66,
        "bank": "Banco Morgan Stanley S.A."
    },
    {
        "code": 15,
        "bank": "UBS Brasil Cctvm S.A."
    },
    {
        "code": 143,
        "bank": "Treviso Cc S.A."
    },
    {
        "code": 62,
        "bank": "Hipercard Banco Múltiplo S.A."
    },
    {
        "code": 74,
        "bank": "Banco J. Safra S.A."
    },
    {
        "code": 99,
        "bank": "Uniprime Central Ccc Ltda"
    },
    {
        "code": 25,
        "bank": "Banco Alfa S.A."
    },
    {
        "code": 75,
        "bank": "Bco Abn Amro S.A."
    },
    {
        "code": 40,
        "bank": "Banco Cargill S.A."
    },
    {
        "code": 190,
        "bank": "Servicoop"
    },
    {
        "code": 63,
        "bank": "Banco Bradescard"
    },
    {
        "code": 191,
        "bank": "Nova Futura Ctvm Ltda"
    },
    {
        "code": 64,
        "bank": "Goldman Sachs Do Brasil Bm S.A."
    },
    {
        "code": 97,
        "bank": "Ccc Noroeste Brasileiro Ltda"
    },
    {
        "code": 16,
        "bank": "Ccm Desp Trâns Sc E Rs"
    },
    {
        "code": 12,
        "bank": "Banco Inbursa"
    },
    {
        "code": 3,
        "bank": "Banco Da Amazônia S.A."
    },
    {
        "code": 60,
        "bank": "Confidence Cc S.A."
    },
    {
        "code": 37,
        "bank": "Banco Do Estado Do Pará S.A."
    },
    {
        "code": 159,
        "bank": "Casa do Crédito S.A."
    },
    {
        "code": 172,
        "bank": "Albatross Ccv S.A."
    },
    {
        "code": 85,
        "bank": "Cooperativa Central de Créditos – Ailos"
    },
    {
        "code": 114,
        "bank": "Central Cooperativa De Crédito no Estado do Espírito Santo"
    },
    {
        "code": 36,
        "bank": "Banco Bradesco BBI S.A."
    },
    {
        "code": 394,
        "bank": "Banco Bradesco Financiamentos S.A."
    },
    {
        "code": 4,
        "bank": "Banco Do Nordeste Do Brasil S.A."
    },
    {
        "code": 320,
        "bank": "China Construction Bank – Ccb Brasil S.A."
    },
    {
        "code": 189,
        "bank": "Hs Financeira"
    },
    {
        "code": 105,
        "bank": "Lecca Cfi S.A."
    },
    {
        "code": 76,
        "bank": "Banco KDB Brasil S.A."
    },
    {
        "code": 82,
        "bank": "Banco Topázio S.A."
    },
    {
        "code": 286,
        "bank": "Cooperativa de Crédito Rural de De Ouro"
    },
    {
        "code": 93,
        "bank": "PóloCred Scmepp Ltda"
    },
    {
        "code": 273,
        "bank": "Ccr De São Miguel Do Oeste"
    },
    {
        "code": 157,
        "bank": "Icap Do Brasil Ctvm Ltda"
    },
    {
        "code": 183,
        "bank": "Socred S.A."
    },
    {
        "code": 14,
        "bank": "Natixis Brasil S.A."
    },
    {
        "code": 130,
        "bank": "Caruana Scfi"
    },
    {
        "code": 127,
        "bank": "Codepe Cvc S.A."
    },
    {
        "code": 79,
        "bank": "Banco Original Do Agronegócio S.A."
    },
    {
        "code": 81,
        "bank": "Bbn Banco Brasileiro De Negocios S.A."
    },
    {
        "code": 118,
        "bank": "Standard Chartered Bi S.A."
    },
    {
        "code": 133,
        "bank": "Cresol Confederação"
    },
    {
        "code": 121,
        "bank": "Banco Agibank S.A."
    },
    {
        "code": 83,
        "bank": "Banco Da China Brasil S.A."
    },
    {
        "code": 138,
        "bank": "Get Money Cc Ltda"
    },
    {
        "code": 24,
        "bank": "Banco Bandepe S.A."
    },
    {
        "code": 95,
        "bank": "Banco Confidence De Câmbio S.A."
    },
    {
        "code": 94,
        "bank": "Banco Finaxis"
    },
    {
        "code": 276,
        "bank": "Senff S.A."
    },
    {
        "code": 137,
        "bank": "Multimoney Cc Ltda"
    },
    {
        "code": 92,
        "bank": "BRK S.A."
    },
    {
        "code": 47,
        "bank": "Banco do Estado de Sergipe S.A."
    },
    {
        "code": 144,
        "bank": "Bexs Banco De Cambio S.A."
    },
    {
        "code": 126,
        "bank": "BR Partners Banco de Investimento S.A."
    },
    {
        "code": 301,
        "bank": "BPP Instituição De Pagamentos S.A."
    },
    {
        "code": 173,
        "bank": "BRL Trust Dtvm Sa"
    },
    {
        "code": 119,
        "bank": "Banco Western Union do Brasil S.A."
    },
    {
        "code": 254,
        "bank": "Paraná Banco S.A."
    },
    {
        "code": 268,
        "bank": "Barigui Companhia Hipotecária"
    },
    {
        "code": 107,
        "bank": "Banco Bocom BBM S.A."
    },
    {
        "code": 412,
        "bank": "Banco Capital S.A."
    },
    {
        "code": 124,
        "bank": "Banco Woori Bank Do Brasil S.A."
    },
    {
        "code": 149,
        "bank": "Facta S.A. Cfi"
    },
    {
        "code": 197,
        "bank": "Stone Pagamentos S.A."
    },
    {
        "code": 142,
        "bank": "Broker Brasil Cc Ltda"
    },
    {
        "code": 389,
        "bank": "Banco Mercantil Do Brasil S.A."
    },
    {
        "code": 184,
        "bank": "Banco Itaú BBA S.A."
    },
    {
        "code": 634,
        "bank": "Banco Triangulo S.A (Banco Triângulo)"
    },
    {
        "code": 545,
        "bank": "Senso Ccvm S.A."
    },
    {
        "code": 132,
        "bank": "ICBC do Brasil Bm S.A."
    },
    {
        "code": 298,
        "bank": "Vip’s Cc Ltda"
    },
    {
        "code": 129,
        "bank": "UBS Brasil Bi S.A."
    },
    {
        "code": 128,
        "bank": "Ms Bank S.A Banco De Câmbio"
    },
    {
        "code": 194,
        "bank": "Parmetal Dtvm Ltda"
    },
    {
        "code": 310,
        "bank": "VORTX Dtvm Ltda"
    },
    {
        "code": 163,
        "bank": "Commerzbank Brasil S.A Banco Múltiplo"
    },
    {
        "code": 280,
        "bank": "Avista S.A."
    },
    {
        "code": 146,
        "bank": "Guitta Cc Ltda"
    },
    {
        "code": 279,
        "bank": "Ccr De Primavera Do Leste"
    },
    {
        "code": 182,
        "bank": "Dacasa Financeira S/A"
    },
    {
        "code": 278,
        "bank": "Genial Investimentos Cvm S.A."
    },
    {
        "code": 271,
        "bank": "Ib Cctvm Ltda"
    },
    {
        "code": 21,
        "bank": "Banco Banestes S.A."
    },
    {
        "code": 246,
        "bank": "Banco Abc Brasil S.A."
    },
    {
        "code": 751,
        "bank": "Scotiabank Brasil"
    },
    {
        "code": 208,
        "bank": "Banco BTG Pactual S.A."
    },
    {
        "code": 746,
        "bank": "Banco Modal S.A."
    },
    {
        "code": 241,
        "bank": "Banco Classico S.A."
    },
    {
        "code": 612,
        "bank": "Banco Guanabara S.A."
    },
    {
        "code": 604,
        "bank": "Banco Industrial Do Brasil S.A."
    },
    {
        "code": 505,
        "bank": "Banco Credit Suisse (Brl) S.A."
    },
    {
        "code": 196,
        "bank": "Banco Fair Cc S.A."
    },
    {
        "code": 300,
        "bank": "Banco La Nacion Argentina"
    },
    {
        "code": 477,
        "bank": "Citibank N.A."
    },
    {
        "code": 266,
        "bank": "Banco Cedula S.A."
    },
    {
        "code": 122,
        "bank": "Banco Bradesco BERJ S.A."
    },
    {
        "code": 376,
        "bank": "Banco J.P. Morgan S.A."
    },
    {
        "code": 473,
        "bank": "Banco Caixa Geral Brasil S.A."
    },
    {
        "code": 745,
        "bank": "Banco Citibank S.A."
    },
    {
        "code": 120,
        "bank": "Banco Rodobens S.A."
    },
    {
        "code": 265,
        "bank": "Banco Fator S.A."
    },
    {
        "code": 7,
        "bank": "BNDES (Banco Nacional Do Desenvolvimento Social)"
    },
    {
        "code": 188,
        "bank": "Ativa S.A Investimentos"
    },
    {
        "code": 134,
        "bank": "BGC Liquidez Dtvm Ltda"
    },
    {
        "code": 641,
        "bank": "Banco Alvorada S.A."
    },
    {
        "code": 29,
        "bank": "Banco Itaú Consignado S.A."
    },
    {
        "code": 243,
        "bank": "Banco Máxima S.A."
    },
    {
        "code": 78,
        "bank": "Haitong Bi Do Brasil S.A."
    },
    {
        "code": 111,
        "bank": "Banco Oliveira Trust Dtvm S.A."
    },
    {
        "code": 17,
        "bank": "Bny Mellon Banco S.A."
    },
    {
        "code": 174,
        "bank": "Pernambucanas Financ S.A."
    },
    {
        "code": 495,
        "bank": "La Provincia Buenos Aires Banco"
    },
    {
        "code": 125,
        "bank": "Brasil Plural S.A Banco"
    },
    {
        "code": 488,
        "bank": "Jpmorgan Chase Bank"
    },
    {
        "code": 65,
        "bank": "Banco Andbank S.A."
    },
    {
        "code": 492,
        "bank": "Ing Bank N.V."
    },
    {
        "code": 250,
        "bank": "Banco Bcv"
    },
    {
        "code": 145,
        "bank": "Levycam Ccv Ltda"
    },
    {
        "code": 494,
        "bank": "Banco Rep Oriental Uruguay"
    },
    {
        "code": 253,
        "bank": "Bexs Cc S.A."
    },
    {
        "code": 269,
        "bank": "Hsbc Banco De Investimento"
    },
    {
        "code": 213,
        "bank": "Bco Arbi S.A."
    },
    {
        "code": 139,
        "bank": "Intesa Sanpaolo Brasil S.A."
    },
    {
        "code": 18,
        "bank": "Banco Tricury S.A."
    },
    {
        "code": 630,
        "bank": "Banco Intercap S.A."
    },
    {
        "code": 224,
        "bank": "Banco Fibra S.A."
    },
    {
        "code": 600,
        "bank": "Banco Luso Brasileiro S.A."
    },
    {
        "code": 623,
        "bank": "Banco Pan S.A."
    },
    {
        "code": 204,
        "bank": "Banco Bradesco Cartoes S.A."
    },
    {
        "code": 479,
        "bank": "Banco ItauBank S.A."
    },
    {
        "code": 456,
        "bank": "Banco MUFG Brasil S.A."
    },
    {
        "code": 464,
        "bank": "Banco Sumitomo Mitsui Brasil S.A."
    },
    {
        "code": 613,
        "bank": "Omni Banco S.A."
    },
    {
        "code": 652,
        "bank": "Itaú Unibanco Holding Bm S.A."
    },
    {
        "code": 653,
        "bank": "Banco Indusval S.A."
    },
    {
        "code": 69,
        "bank": "Banco Crefisa S.A."
    },
    {
        "code": 370,
        "bank": "Banco Mizuho S.A."
    },
    {
        "code": 249,
        "bank": "Banco Investcred Unibanco S.A."
    },
    {
        "code": 318,
        "bank": "Banco BMG S.A."
    },
    {
        "code": 626,
        "bank": "Banco Ficsa S.A."
    },
    {
        "code": 270,
        "bank": "Sagitur Cc Ltda"
    },
    {
        "code": 366,
        "bank": "Banco Societe Generale Brasil"
    },
    {
        "code": 113,
        "bank": "Magliano S.A."
    },
    {
        "code": 131,
        "bank": "Tullett Prebon Brasil Cvc Ltda"
    },
    {
        "code": 11,
        "bank": "C.Suisse Hedging-Griffo Cv S.A (Credit Suisse)"
    },
    {
        "code": 611,
        "bank": "Banco Paulista"
    },
    {
        "code": 755,
        "bank": "Bofa Merrill Lynch Bm S.A."
    },
    {
        "code": 89,
        "bank": "Ccr Reg Mogiana"
    },
    {
        "code": 643,
        "bank": "Banco Pine S.A."
    },
    {
        "code": 140,
        "bank": "Easynvest – Título Cv S.A."
    },
    {
        "code": 707,
        "bank": "Banco Daycoval S.A."
    },
    {
        "code": 288,
        "bank": "Carol Dtvm Ltda"
    },
    {
        "code": 101,
        "bank": "Renascença Dtvm Ltda"
    },
    {
        "code": 487,
        "bank": "Deutsche Bank S.A (Banco Alemão)"
    },
    {
        "code": 233,
        "bank": "Banco Cifra S.A."
    },
    {
        "code": 177,
        "bank": "Guide Investimentos S.A. Corretora de Valores"
    },
    {
        "code": 633,
        "bank": "Banco Rendimento S.A."
    },
    {
        "code": 218,
        "bank": "Banco Bs2 S.A."
    },
    {
        "code": 292,
        "bank": "BS2 Distribuidora De Títulos E Investimentos"
    },
    {
        "code": 169,
        "bank": "Banco Olé Bonsucesso Consignado S.A."
    },
    {
        "code": 293,
        "bank": "Lastro Rdv Dtvm Ltda"
    },
    {
        "code": 285,
        "bank": "Frente Cc Ltda"
    },
    {
        "code": 80,
        "bank": "B&T Cc Ltda"
    },
    {
        "code": 753,
        "bank": "Novo Banco Continental S.A Bm"
    },
    {
        "code": 222,
        "bank": "Banco Crédit Agricole Br S.A."
    },
    {
        "code": 754,
        "bank": "Banco Sistema S.A."
    },
    {
        "code": 98,
        "bank": "Credialiança Ccr"
    },
    {
        "code": 610,
        "bank": "Banco VR S.A."
    },
    {
        "code": 712,
        "bank": "Banco Ourinvest S.A."
    },
    {
        "code": 10,
        "bank": "CREDICOAMO CRÉDITO RURAL COOPERATIVA"
    },
    {
        "code": 283,
        "bank": "RB Capital Investimentos Dtvm Ltda"
    },
    {
        "code": 217,
        "bank": "Banco John Deere S.A."
    },
    {
        "code": 117,
        "bank": "Advanced Cc Ltda"
    },
    {
        "code": 336,
        "bank": "Banco C6 S.A – C6 Bank"
    },
    {
        "code": 654,
        "bank": "Banco A.J. Renner S.A."
    },
    {
        "code": null,
        "bank": "Banco Central do Brasil – Selic"
    },
    {
        "code": null,
        "bank": "Banco Central do Brasil"
    },
    {
        "code": 272,
        "bank": "AGK Corretora de Câmbio S.A."
    },
    {
        "code": null,
        "bank": "Secretaria do Tesouro Nacional – STN"
    },
    {
        "code": 330,
        "bank": "Banco Bari de Investimentos e Financiamentos S.A."
    },
    {
        "code": 362,
        "bank": "CIELO S.A."
    },
    {
        "code": 322,
        "bank": "Cooperativa de Crédito Rural de Abelardo Luz – Sulcredi/Crediluz"
    },
    {
        "code": 350,
        "bank": "Cooperativa De Crédito Rural De Pequenos Agricultores E Da Reforma Agrária Do Ce"
    },
    {
        "code": 91,
        "bank": "Central De Cooperativas De Economia E Crédito Mútuo Do Estado Do Rio Grande Do S"
    },
    {
        "code": 379,
        "bank": "COOPERFORTE – Cooperativa De Economia E Crédito Mútuo Dos Funcionários De Instit"
    },
    {
        "code": 378,
        "bank": "BBC LEASING S.A. – Arrendamento Mercantil"
    },
    {
        "code": 360,
        "bank": "TRINUS Capital Distribuidora De Títulos E Valores Mobiliários S.A."
    },
    {
        "code": 84,
        "bank": "UNIPRIME NORTE DO PARANÁ – COOPERATIVA DE CRÉDITO LTDA"
    },
    {
        "code": null,
        "bank": "Câmara Interbancária de Pagamentos – CIP – LDL"
    },
    {
        "code": 387,
        "bank": "Banco Toyota do Brasil S.A."
    },
    {
        "code": 326,
        "bank": "PARATI – CRÉDITO, FINANCIAMENTO E INVESTIMENTO S.A."
    },
    {
        "code": 315,
        "bank": "PI Distribuidora de Títulos e Valores Mobiliários S.A."
    },
    {
        "code": 307,
        "bank": "Terra Investimentos Distribuidora de Títulos e Valores Mobiliários Ltda."
    },
    {
        "code": 296,
        "bank": "VISION S.A. CORRETORA DE CAMBIO"
    },
    {
        "code": 382,
        "bank": "FIDÚCIA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE L"
    },
    {
        "code": 97,
        "bank": "Credisis – Central de Cooperativas de Crédito Ltda."
    },
    {
        "code": 16,
        "bank": "COOPERATIVA DE CRÉDITO MÚTUO DOS DESPACHANTES DE TRÂNSITO DE SANTA CATARINA E RI"
    },
    {
        "code": 299,
        "bank": "SOROCRED CRÉDITO, FINANCIAMENTO E INVESTIMENTO S.A."
    },
    {
        "code": 359,
        "bank": "ZEMA CRÉDITO, FINANCIAMENTO E INVESTIMENTO S/A"
    },
    {
        "code": 391,
        "bank": "COOPERATIVA DE CRÉDITO RURAL DE IBIAM – SULCREDI/IBIAM"
    },
    {
        "code": 368,
        "bank": "Banco CSF S.A."
    },
    {
        "code": 259,
        "bank": "MONEYCORP BANCO DE CÂMBIO S.A."
    },
    {
        "code": 364,
        "bank": "GERENCIANET S.A."
    },
    {
        "code": 14,
        "bank": "STATE STREET BRASIL S.A. – BANCO COMERCIAL"
    },
    {
        "code": 81,
        "bank": "Banco Seguro S.A."
    },
    {
        "code": 384,
        "bank": "GLOBAL FINANÇAS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO"
    },
    {
        "code": 88,
        "bank": "BANCO RANDON S.A."
    },
    {
        "code": 319,
        "bank": "OM DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA"
    },
    {
        "code": 274,
        "bank": "MONEY PLUS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORT"
    },
    {
        "code": 95,
        "bank": "Travelex Banco de Câmbio S.A."
    },
    {
        "code": 332,
        "bank": "Acesso Soluções de Pagamento S.A."
    },
    {
        "code": 325,
        "bank": "Órama Distribuidora de Títulos e Valores Mobiliários S.A."
    },
    {
        "code": 331,
        "bank": "Fram Capital Distribuidora de Títulos e Valores Mobiliários S.A."
    },
    {
        "code": 396,
        "bank": "HUB PAGAMENTOS S.A."
    },
    {
        "code": 309,
        "bank": "CAMBIONET CORRETORA DE CÂMBIO LTDA."
    },
    {
        "code": 313,
        "bank": "AMAZÔNIA CORRETORA DE CÂMBIO LTDA."
    },
    {
        "code": 377,
        "bank": "MS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA"
    },
    {
        "code": 321,
        "bank": "CREFAZ SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORTE LT"
    },
    {
        "code": 383,
        "bank": "BOLETOBANCÁRIO.COM TECNOLOGIA DE PAGAMENTOS LTDA."
    },
    {
        "code": 324,
        "bank": "CARTOS SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
        "code": 380,
        "bank": "PICPAY SERVICOS S.A."
    },
    {
        "code": 343,
        "bank": "FFA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA."
    },
    {
        "code": 349,
        "bank": "AL5 S.A. CRÉDITO, FINANCIAMENTO E INVESTIMENTO"
    },
    {
        "code": 374,
        "bank": "REALIZE CRÉDITO, FINANCIAMENTO E INVESTIMENTO S.A."
    },
    {
        "code": null,
        "bank": "B3 SA – Brasil, Bolsa, Balcão – Segmento Cetip UTVM"
    },
    {
        "code": null,
        "bank": "Câmara Interbancária de Pagamentos – CIP C3"
    },
    {
        "code": 352,
        "bank": "TORO CORRETORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA"
    },
    {
        "code": 329,
        "bank": "QI Sociedade de Crédito Direto S.A."
    },
    {
        "code": 342,
        "bank": "Creditas Sociedade de Crédito Direto S.A."
    },
    {
        "code": 397,
        "bank": "LISTO SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
        "code": 355,
        "bank": "ÓTIMO SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
        "code": 367,
        "bank": "VITREO DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A."
    },
    {
        "code": 373,
        "bank": "UP.P SOCIEDADE DE EMPRÉSTIMO ENTRE PESSOAS S.A."
    },
    {
        "code": 408,
        "bank": "BÔNUSCRED SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
        "code": 404,
        "bank": "SUMUP SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
        "code": 403,
        "bank": "CORA SOCIEDADE DE CRÉDITO DIRETO S.A."
    },
    {
        "code": 306,
        "bank": "PORTOPAR DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA."
    },
    {
        "code": 174,
        "bank": "PEFISA S.A. – CRÉDITO, FINANCIAMENTO E INVESTIMENTO"
    },
    {
        "code": 354,
        "bank": "NECTON INVESTIMENTOS S.A. CORRETORA DE VALORES MOBILIÁRIOS E COMMODITIES"
    },
    {
        "code": null,
        "bank": "BMF Bovespa S.A. – Bolsa de Valores, Mercadorias e Futuros – Camara BMFBOVESPA"
    },
    {
        "code": 630,
        "bank": "Banco Smartbank S.A."
    },
    {
        "code": 393,
        "bank": "Banco Volkswagen S.A."
    },
    {
        "code": 390,
        "bank": "BANCO GM S.A."
    },
    {
        "code": 381,
        "bank": "BANCO MERCEDES-BENZ DO BRASIL S.A."
    },
    {
        "code": 626,
        "bank": "BANCO C6 CONSIGNADO S.A."
    },
    {
        "code": 755,
        "bank": "Bank of America Merrill Lynch Banco Múltiplo S.A."
    },
    {
        "code": 89,
        "bank": "CREDISAN COOPERATIVA DE CRÉDITO"
    },
    {
        "code": 363,
        "bank": "SOCOPA SOCIEDADE CORRETORA PAULISTA S.A."
    },
    {
        "code": 365,
        "bank": "SOLIDUS S.A. CORRETORA DE CAMBIO E VALORES MOBILIARIOS"
    },
    {
        "code": 281,
        "bank": "Cooperativa de Crédito Rural Coopavel"
    },
    {
        "code": 654,
        "bank": "BANCO DIGIMAIS S.A."
    },
    {
        "code": 371,
        "bank": "WARREN CORRETORA DE VALORES MOBILIÁRIOS E CÂMBIO LTDA."
    },
    {
        "code": 289,
        "bank": "DECYSEO CORRETORA DE CAMBIO LTDA."
    }
]


export { emissores, ufs, bancosBrasil };