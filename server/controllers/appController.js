import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";

/** ⁡⁢⁢⁣𝗣𝗢𝗦𝗧 𝗵𝘁𝘁𝗽:𝗹𝗼𝗰𝗮𝗹𝗵𝗼𝘀𝘁:𝟴𝟬𝟴𝟬/𝗮𝗽𝗶/𝗿𝗲𝗴𝗶𝘀𝘁𝗲𝗿
 * ⁡⁣⁢⁣@𝗽𝗮𝗿𝗮𝗺⁡ ⁡⁢⁣⁣: {
 * 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲: '',
 * 𝗽𝗮𝘀𝘀𝘄𝗼𝗿𝗱: '',
 * 𝗳𝗶𝗿𝘀𝘁𝗡𝗮𝗺𝗲: ''
 * 𝗹𝗮𝘀𝘁𝗡𝗮𝗺𝗲: '',
 * 𝗲𝗺𝗮𝗶𝗹: '',
 * 𝗺𝗼𝗯𝗶𝗹𝗲: '',
 * 𝗮𝗱𝗱𝗿𝗲𝘀𝘀: '',
 * 𝗽𝗿𝗼𝗳𝗶𝗹𝗲: ''
 * }⁡
 */

export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // check the existing user
        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, function (err, user) {
                if (err) reject(new Error(err));
                if (user) reject({ error: "Please use unique username" });

                resolve();
            });
        });

        // check for existing email
        const existEmail = new Promise((resolve, reject) => {
            UserModel.findOne({ email }, function (err, email) {
                if (err) reject(new Error(err));
                if (email) reject({ error: "Please use unique Email" });

                resolve();
            });
        });

        Promise.all([existUsername, existEmail])
            .then(() => {
                if (password) {
                    bcrypt
                        .hash(password, 10)
                        .then((hashedPassword) => {
                            const user = new UserModel({
                                username,
                                password: hashedPassword,
                                profile: profile || "",
                                email,
                            });

                            // return save result as a response
                            user
                                .save()
                                .then((result) =>
                                    res.status(201).send({ msg: "User Register Successfully" })
                                )
                                .catch((error) => res.status(500).send({ error }));
                        })
                        .catch((error) => {
                            return res.status(500).send({
                                error: "Enable to hashed password",
                            });
                        });
                }
            })
            .catch((error) => {
                return res.status(500).send({ error });
            });
    } catch (error) {
        return res.status(500).send(error);
    }
}

/** ⁡⁢⁢⁣𝗣𝗢𝗦𝗧 𝗵𝘁𝘁𝗽:𝗹𝗼𝗰𝗮𝗹𝗵𝗼𝘀𝘁:𝟴𝟬𝟴𝟬/𝗮𝗽𝗶/𝗹𝗼𝗴𝗶𝗻
 * ⁡⁣⁢⁣@𝗽𝗮𝗿𝗮𝗺⁡ ⁡⁢⁣⁣: {
⁡⁢⁣⁣ * 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲: '',
 * 𝗽𝗮𝘀𝘀𝘄𝗼𝗿𝗱: '',
 * }⁡
 */

export async function login(req, res) {
    res.json("Login route");
}

/** ⁡⁢⁢⁣⁡⁢⁢⁣𝗚𝗘𝗧 𝗵𝘁𝘁𝗽:𝗹𝗼𝗰𝗮𝗹𝗵𝗼𝘀𝘁:𝟴𝟬𝟴𝟬/𝗮𝗽𝗶/𝘂𝘀𝗲𝗿/𝗲𝘅𝗮𝗺𝗽𝗹𝗲𝟭𝟮𝟯⁡ */
export async function getUser(req, res) {
    res.json("GetUser route");
}

/** ⁡⁢⁢⁣𝗣𝗨𝗧 𝗵𝘁𝘁𝗽:𝗹𝗼𝗰𝗮𝗹𝗵𝗼𝘀𝘁:𝟴𝟬𝟴𝟬/𝗮𝗽𝗶/⁡⁢⁢⁣𝘂𝗽𝗱𝗮𝘁𝗲𝗨𝘀𝗲𝗿⁡
 * ⁡⁣⁢⁣@𝗽𝗮𝗿𝗮𝗺⁡ ⁡⁢⁣⁣: {
 *  "𝗶𝗱" : "<𝘂𝘀𝗲𝗿𝗜𝗱>"
 * }⁡⁡⁣⁣⁢
⁡⁣⁣⁢ * 𝗯𝗼𝗱𝘆: {
 *  𝗳𝗶𝗿𝘀𝘁𝗡𝗮𝗺𝗲: '',
 *  𝗮𝗱𝗱𝗿𝗲𝘀𝘀: '',
 *  𝗽𝗿𝗼𝗳𝗶𝗹𝗲: '',    
 * }⁡⁡
 */

export async function updateUser(req, res) {
    res.json("UpdateUser route");
}

/** ⁡⁢⁢⁣⁡⁢⁢⁣⁡⁢⁢⁣𝗚𝗘𝗧 𝗵𝘁𝘁𝗽:𝗹𝗼𝗰𝗮𝗹𝗵𝗼𝘀𝘁:𝟴𝟬𝟴𝟬/𝗮𝗽𝗶/𝗴𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗢𝗧𝗣⁡⁡ */
export async function generateOTP(req, res) {
    res.json("generateOTP route");
}

/** ⁡⁢⁢⁣⁡⁢⁢⁣⁡⁢⁢⁣⁡⁢⁢⁣𝗚𝗘𝗧 𝗵𝘁𝘁𝗽:𝗹𝗼𝗰𝗮𝗹𝗵𝗼𝘀𝘁:𝟴𝟬𝟴𝟬/𝗮𝗽𝗶/𝘃𝗲𝗿𝗶𝗳𝘆𝗢𝗧𝗣⁡ */
export async function verifyOTP(req, res) {
    res.json("verifyOTP route");
}

// ⁡⁢⁢⁢𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗿𝗲𝗱𝗶𝗿𝗲𝗰𝘁 𝘂𝘀𝗲𝗿 𝘄𝗵𝗲𝗻 𝗢𝗧𝗣 𝗶𝘀 𝘃𝗮𝗹𝗶𝗱⁡
/** ⁡⁢⁢⁣⁡⁢⁢⁣⁡⁢⁢⁣⁡⁢⁢⁣⁡⁢⁢⁣𝗚𝗘𝗧 𝗵𝘁𝘁𝗽:𝗹𝗼𝗰𝗮𝗹𝗵𝗼𝘀𝘁:𝟴𝟬𝟴𝟬/𝗮𝗽𝗶/𝗰𝗿𝗲𝗮𝘁𝗲𝗥𝗲𝘀𝘀𝗲𝘁𝗦𝗲𝘀𝘀𝗶𝗼𝗻⁡ */
export async function createRessetSession(req, res) {
    res.json("createRessetSession route");
}

// ⁡⁢⁢⁢𝗨𝗽𝗱𝗮𝘁𝗲 𝘁𝗵𝗲 𝗽𝗮𝘀𝘀𝘄𝗼𝗿𝗱 𝘄𝗵𝗲𝗻 𝘄𝗲 𝗵𝗮𝘃𝗲 𝘃𝗮𝗹𝗶𝗱 𝘀𝗲𝘀𝘀𝗶𝗼𝗻⁡
/** ⁡⁢⁢⁣𝗣𝗨𝗧 𝗵𝘁𝘁𝗽:𝗹𝗼𝗰𝗮𝗹𝗵𝗼𝘀𝘁:𝟴𝟬𝟴𝟬/𝗮𝗽𝗶/⁡⁢⁢⁣𝗿𝗲𝘀𝗲𝘁𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱⁡ */
export async function resetPassword(req, res) {
    res.json("resetPassword route");
}
