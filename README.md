## Rotas sem TOKEN

### GET=> 
/tables => lista mesas

### GET=> 
/tables?tablename_like=:tablename

### GET=> 
/tables?\_page=:page&\_limit=:maxTables

### POST=> 
/register +
    {
       email,
       password, ...,
       tables:[]
    }
    id (automático) pelo json-server
    tables deve ser inserida no body da requisição, usuário não deve ter acesso a ela enquanto faz registro.

### POST=> 
/login +
    {
       email,
       password
    }

## Rotas com TOKEN

### GET=> 
/users => lista usuários

### GET=> 
/users?id=:id&tables => lista suas mesas

### GET=> 
/users?username_like=:username

### POST => 
/tables +
    {
       tablename,
       password (Opcional),
       system, 
       maxParticipants,
       participants (valor não pode ser superior ao máximo de participantes)
    }
    id (automático) pelo json-servers

### DELETE => 
/tables + id
