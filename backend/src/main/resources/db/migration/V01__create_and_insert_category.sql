create table tb_category
(
    id         bigserial not null,
    name       varchar(255),
    created_at TIMESTAMP WITHOUT TIME ZONE,
    updated_at TIMESTAMP WITHOUT TIME ZONE,
    primary key (id)
);

INSERT INTO tb_category (name, created_at)
VALUES ('Livros', NOW());
INSERT INTO tb_category (name, created_at)
VALUES ('Eletrônicos', NOW());
INSERT INTO tb_category (name, created_at)
VALUES ('Computadores', NOW());