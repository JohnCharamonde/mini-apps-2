const express = require('express');

const app = express();
const PORT = 3800;

app.use('/', express.static('./public'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

