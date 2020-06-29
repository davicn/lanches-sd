# Micro Projeto 2 - Sistemas Distribuidos

## Server

### Listar cardápio
```http
GET https://rest-api-lanches-sd.herokuapp.com/cardapio
```
#### Response

```javascript
[
    {
        "idCadarpio" : int,
        "descricao" : string,
    }
]
```
### Inserir item no cardápio
```http
POST https://rest-api-lanches-sd.herokuapp.com/cardapio
```
#### Body
```javascript
{
    "descricao":string
}
```
#### Response
```javascript
{
    "msg": "Novo lanche inserido!",
    "body": {
        "lanche": {
            "descricao": string
        }
    }
}
```


### Deletar item do cardápio

```http
DELETE https://rest-api-lanches-sd.herokuapp.com/cardapio/idCardapio
```
| Parâmetro | Tipo | 
| :--- | :--- | 
| `idCardapio` | `int` |


#### Response
```javascript
{
    "message": "Item deleta do cardápio!",
    "idItem": int
}
```
## Cliente

### Inserindo pedidos

```http
POST https://rest-api-lanches-sd.herokuapp.com/pedidos
```
#### Body (array com id's de itens do cardápio)
```javascript
{
    "pedidos":array
}
```

#### Response

```javascript
{
    "msg": "Pedido salvo!",
    "body": {
        "lanche": {
            "pedidos": array
        }
    }
}
```


### Encaminahndo entrega

```http
POST https://rest-api-lanches-sd.herokuapp.com/entregas
```
#### Body 
```javascript
{
    "endereco":string
}
```

#### Response

```javascript
{
    "msg": "Entrega solicitada!",
    "body": {
        "endereco": {
            "endereco": string
        }
    }
}
```
