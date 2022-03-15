const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, './'), { maxAge: 86400000 }));

app.listen(8080, () => {
    console.log(`Serving on port 8080.`);
});