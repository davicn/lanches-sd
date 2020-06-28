createdb db_lanches; 

-- Tabela de cardapio
CREATE TABLE cardapio (
	idCardapio serial PRIMARY KEY,
	descricao varchar (50) NOT NULL
	);

-- Tabela de pedidos
create table pedidos(
    idPedido serial primary key ,
    items int [] not null
);

-- Tabela de entregas
create table entregas(
    idEntrega serial primary key ,
    pedido int not null ,
    data date not null default current_timestamp,
    endereco varchar(50) not null
);