# Projeto Final M3 Grupo 2
### Base Url:
`https://projeto-final-m3.herokuapp.com/`

## Rotas sem TOKEN

### Listar mesas
`GET /tables`
### Buscar mesa
`GET /tables?tablename_like=:tablename`
### Limitar página
`GET /tables?_page=:page&_limit=:maxTables`
### Registrar 
`POST /register`
    
```json
{
    "email": "kenzinho@kenzie.com.br",
    "password": "kenzinho123",
    "username": "kenzinho",
    "myTables": []
}
```
  <sub>id automático pelo json-server</sub>

### Logar
`POST /login` 
    
 ```json
{
    "email": "kenzinho@kenzie.com.br",
    "password": "kenzinho123",
}
```
    
## Rotas com TOKEN
###  Listar usuários
`GET /users`
###  Listar mesas que participa
`GET /users/:id?_embed=tables`
`GET /users?id=:id&tables`
###  Buscar usuário
`GET /users?username_like=:username`
### Criar nova mesa
`POST => /tables`
    
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
<sub>id automático pelo json-server</sub>

### Deletar mesa
`DELETE /tables/id`
