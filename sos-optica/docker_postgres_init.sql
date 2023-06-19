CREATE TABLE
  public.cliente (
    id bigserial NOT NULL,
    nome character varying(150) NULL,
    email character varying(100) NULL,
    telefone character varying(14) NULL,
    data_de_nascimento character varying(10) NULL,
    cpf character varying(14) NULL,
    data_cadastro date NULL DEFAULT now()
  );

ALTER TABLE
  public.cliente
ADD
  CONSTRAINT cliente_pkey PRIMARY KEY (id);

CREATE TABLE
  public.produto (
    id bigserial NOT NULL,
    nome character varying(150) NULL,
    descricao character varying(255) NULL,
    fornecedor character varying(255) NULL,
    marca character varying(255) NULL,
    preco_custo numeric NULL,
    preco_venda numeric NULL,
    qt_de_pecas numeric NULL,
    data_cadastro date NULL DEFAULT now()
  );

ALTER TABLE
  public.produto
ADD
  CONSTRAINT produto_pkey PRIMARY KEY (id);

CREATE TABLE
  public.usuario (
    id bigserial NOT NULL,
    nome character varying(150) NULL,
    email character varying(100) NULL,
    senha character varying(20) NULL,
    data_cadastro date NULL DEFAULT now()
  );

ALTER TABLE
  public.usuario
ADD
  CONSTRAINT usuario_pkey PRIMARY KEY (id);

CREATE TABLE
  public.vendas (
    id bigserial NOT NULL,
    nome_produto character varying(150) NULL,
    nome_cliente character varying(100) NULL,
    quatidade_produto integer NULL,
    valor numeric NULL,
    data_cadastro date NULL DEFAULT now()
  );

ALTER TABLE
  public.vendas
ADD
  CONSTRAINT vendas_pkey PRIMARY KEY (id);




