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
       password, ...,
       tables:[]
    }
    
        id (automático) pelo json-server
        tables deve ser inserida no body da requisição, usuário não deve ter acesso a ela enquanto faz registro. 
   

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
       password (Opcional),
       system, 
       maxParticipants,
       participants (valor não pode ser superior ao máximo de participantes)
    }
    id (automático) pelo json-servers

### Deletar mesa
DELETE => /tables + id
