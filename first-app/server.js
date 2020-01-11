const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

app.listen(PORT, () => console.log(`App is currently listening on port ${PORT}`));