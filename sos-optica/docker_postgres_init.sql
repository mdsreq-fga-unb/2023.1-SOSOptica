create table cliente
(
    id                 bigserial
        primary key,
    nome               varchar(150),
    email              varchar(100),
    telefone           varchar(14),
    data_de_nascimento varchar(10),
    cpf                varchar(11),
    data_cadastro      date default now()
);


create table produto
(
    id            bigserial
        primary key,
    nome          varchar(150),
    descricao     varchar(255),
    fornecedor    varchar(255),
    marca         varchar(255),
    preco_custo   numeric,
    preco_venda   numeric,
    qt_de_pecas   numeric,
    data_cadastro date default now()
);


create table usuario
(
    id            bigserial
        primary key,
    nome          varchar(150),
    email         varchar(100),
    senha         varchar(20),
    data_cadastro date default now()
);