// устанавливаем переменную PORT и MONGODB_URI
require('./config/config');
const app = require('./app');

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`started on port ${port}`);
});
