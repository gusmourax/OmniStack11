const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => console.log('Server running on port 3000'));
//teste
