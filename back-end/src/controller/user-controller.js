
import { request } from "express";
import { UserModel } from "../model/user-model.js";
import bcrypt from 'bcrypt'
export const users = [
    {
        "id": "sanoifhjsapomfp868",
        "name": "bob",
        "email": "email@gmail.com",
        "password": "pass"
    }
];

export const getAllUsers = async (req, res) => {
    const users_data = await UserModel.find({});
    res.status(200).json({ users: users_data })
}
  
  export const getUser = async (req, res) => {
  const user = req.user
    // const filteredUser = users.filter((cur) => cur.id === params.id);
    const oneUser = await UserModel.findById(user.user_id)
  
    if (!oneUser) {
      res.status(405).json({ message: "User not found" });
    } else {
      res.status(200).json({ user: oneUser });
    }
  };
 
  
    

  export const createUser = async (req, res) => {
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
          const body = req.body;
      
          const newUser = await UserModel.create({
              name: body.name,
              password: hashedPassword,
              email: body.email,
              createdOn:  Date()
          });
          const userResponse = {
              name: newUser.name,
              password: hashedPassword,
              email: newUser.email,
              createdOn:  Date()
          };
  
          res.status(201).json({ user: userResponse, message: 'User created successfully' });
      } catch (error) {
          console.error('Error creating user:', error);
          res.status(500).json({ message: 'Internal server error' });
      }
  };
  