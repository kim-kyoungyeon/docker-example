const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('🐳 this is hypervisor OS DOCKER in nodeJS! 🐳');
});

app.listen(8080, () => console.log('Server is running 🤖'));
