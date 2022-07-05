## Rotas sem TOKEN

### Listar mesas
GET=> /tables
### Buscar mesa
GET=> /tables?tablename_like=:tablename
### Limitar página
GET=> /tables?_page=:page&_limit=:maxTables
### Registrar 
POST=> /register +
    {
       email,
       password, username,
       myTables:[]
    }
    id (automático) pelo json-server
    
```json
{
    "email": "kenzinho@kenzie.com.br",
    "password": "kenzinho123",
    "username": "kenzinho",
    "myTables": []
}
```

### Logar
POST=> /login +
    {
       email,
       password
    }
    
 ```json
{
    "email": "kenzinho@kenzie.com.br",
    "password": "kenzinho123",
}
```
    
## Rotas com TOKEN
###  Listar usuários
GET=> /users
###  Listar mesas que participa
GET=> /users/:id?_embed=tables
GET=> /users?id=:id&tables
###  Buscar usuário
GET=> /users?username_like=:username
### Criar nova mesa
POST => /tables +
    {
       tablename,
       owner,
       system, 
       invite,
       password (Opcional),
       maxParticipants,
       participants (valor não pode ser superior ao máximo de participantes)
    }
    id (automático) pelo json-servers
    
 ```json
{
    "tablename": "Kenzie",
    "owner": "id",
    "system": "D&D",
    "invite": "",
    "password": "",
    "maxParticipants": 10,
    "participants": []
}
```

### Deletar mesa
DELETE => /tables + id
