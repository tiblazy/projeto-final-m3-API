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

### Logar
POST=> /login +
    {
       email,
       password
    }
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

### Deletar mesa
DELETE => /tables + id
