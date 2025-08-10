const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // 'public' — папка с HTML/CSS

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'book', 'book.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
