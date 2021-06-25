create table tb_user
(
    id         bigserial not null,
    email      varchar(255),
    first_name varchar(255),
    last_name  varchar(255),
    password   varchar(255),
    primary key (id)
);

create table tb_role
(
    id        bigserial not null,
    authority varchar(255),
    primary key (id)
);

create table tb_user_role
(
    user_id int8 not null,
    role_id int8 not null,
    primary key (user_id, role_id)
);

alter table tb_user_role
    add constraint FKea2ootw6b6bb0xt3ptl28bymv foreign key (role_id) references tb_role;
alter table tb_user_role
    add constraint FK7vn3h53d0tqdimm8cp45gc0kl foreign key (user_id) references tb_user;

INSERT INTO tb_user (first_name, last_name, email, password)
VALUES ('Operator', 'Master', 'admin@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password)
VALUES ('Admin', 'Master', 'jptick@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority)
VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority)
VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id)
VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id)
VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id)
VALUES (2, 2);