const env = process.env.NODE_ENV || 'development';


// чтобы лишняя инфа не выходила в репозиторий. Конфиг.json gitignore
if (env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];

    Object.keys(envConfig).forEach(key => {
        process.env[key] = envConfig[key];
    });
}