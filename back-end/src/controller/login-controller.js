
import { UserModel } from "../model/user-model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const login = async (req, res) => {
    const body = req.body;

    if (body.email === undefined || body.password === undefined) {
        res.status(403).json({ message: "Email and password are required" });
        return;
    }

    try {
        const user = await UserModel.findOne({ email: body.email });

        if (!user) {
            res.status(405).json({ message: "User not found" });
            return;
        }

        if (await bcrypt.compare(body.password, user.password)) {
            const token = jwt.sign(
                { user_id: user._id, email: user.email },
                "MySuperDuperPrivateKey",
                {
                    expiresIn: '2h'
                }
            )
            res.status(200).json({ token })
            // const filteredUserData = {
            //     "_id": user._id,
            //     "name": user.name,
            //     "email": user.email,
            // };


            // res.status(200).json({ user: filteredUserData });
        } else {
            res.status(405).json({ message: "Password not match" });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};