import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";

const app = express();

/* ⁡⁣⁢⁣𝗠𝗶𝗱𝗱𝗹𝗲𝘄𝗮𝗿𝗲𝘀⁡ */

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))
app.disable('x-powered-by')

const port = 8080;

/* ⁡⁣⁢⁣𝗛𝗧𝗧𝗣 𝗚𝗘𝗧 𝗥𝗲𝗾𝘂𝗲𝘀𝘁⁡ */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request")
})

/** ⁡⁣⁢⁣𝗔𝗣𝗜 𝗥𝗼𝘂𝘁𝗲𝘀⁡ */
app.use('/api', router)

/* ⁡⁣⁢⁣𝗦𝘁𝗮𝗿𝘁 𝗦𝗲𝗿𝘃𝗲𝗿 𝗢𝗻𝗹𝘆 𝗪𝗵𝗲𝗻 𝗪𝗲 𝗛𝗮𝘃𝗲 𝗩𝗮𝗹𝗶𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻⁡ */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);  
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid database connection");
})