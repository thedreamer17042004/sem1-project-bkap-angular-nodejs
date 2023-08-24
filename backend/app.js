const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
var cors = require('cors');
// bao mat http header
const helmet = require('helmet');
// de chan so request qua nhieu lan len sever trong bao nhieu thoi gian day
const rateLimit = require('express-rate-limit')
// Lỗ hổng XSS – Tấn công lấy cắp phiên đăng nhập của người dùng
const xss = require('xss-clean');
const session = require('express-session');
const router = require('./routes/route');
const connection = require('./configs/connectdb');
var coroptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};
const notfounderror = require('./middlewares/notfound');

app.use(session({
	secret : '1234567890abcdefghijklmnopqrstuvwxyz',
	resave : false,
	saveUninitialized : true,
	cookie : { secure : false }
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '300kb' }));
app.use(morgan('tiny'));
app.use(cors());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(helmet());
app.use(xss());
app.set('trust proxy', 1);
// app.use(
//     rateLimit({
//       windowMs: 15 * 60 * 1000,
//       max: 100,
//     })
//   );
app.use('/vege', router);


//misunderstanding
app.use(notfounderror);

app.listen(PORT, (req, res) => {
    console.log(`listening on ${PORT}`);
})