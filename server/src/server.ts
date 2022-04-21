import express, { Application, Router, urlencoded, Request, Response } from 'express';
import router from './api/routers';
import bodyParser from 'body-parser';
import dbInit from './db/init';

dbInit();
const cors = require('cors');
const app = express();
let corsOptions = {
              origin: "*",
              methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
              preflightContinue: false,
              optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use((req: Request, res: Response, next) => {
    const currentDate = new Date();
    console.log(`${currentDate}\nURL:\t${req.url}\nNew request:\t${req.method}\nIP:\t\t\t${req.ip}`);
    next();
});

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
    res.json({message: 'Where have you gone?'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// class Server {
//     private app;

//     constructor() {
//         this.app = express();
//         this.config();
//         this.routerConfig();
//         this.dbConnect();
//     }

//     private config() {
//         this.app.use(bodyParser.urlencoded({extended: true}));
//         this.app.use(bodyParser.json({limit: '1mb'})); //100kb default
        
//         let cors = require('cors');
//         let corsOptions = {
//           origin: "*",
//           methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//           preflightContinue: false,
//           optionsSuccessStatus: 204
//         };
//         this.app.use(cors(corsOptions));
//     };
    
//     private async dbConnect() {
//         try {
//             await sequelize.authenticate();
//             console.log('Connection has been established successfully.');
//         } catch (error) {
//             console.error('Unable to connect to the database:', error);
//         }
//     }

//     private routerConfig() {
        
//     }

//     public start = (port: number) => {
//         return new Promise((resolve, reject) => {
//             this.app.listen(port, () => {
//                 resolve(port);
//             }).on('error', (err: Object) => reject(err));
//         });
//     }
// }
// export default Server;