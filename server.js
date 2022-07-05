const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 640,
  tables: 664,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);
