
const express = require('express');
const app = express();
app.get('/', (request, response) => {
    response.status(200).send('Welcome to my Express Server!');
});
app.get('/about', (request, response) => {
    response.status(200).json({
        name: 'G Architha',
        section: 'AIML-2B'
    });
});
app.get('/time', (request, response) => {
    response.status(200).send(new Date().toString());
});
app.use((request, response) => {
    response.status(404).send('404 - Page Not Found');
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
