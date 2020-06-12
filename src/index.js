//esto hace es que si existe un archivo llamado .env lo asignara a las
//variables de entorno
require('dotenv').config();
const app = require('./server');

//const { listen } = require('./server');

require('./database');

app.listen(app.get('port'), () => {
    console.log('server en el puerto: ', app.get('port'));
})