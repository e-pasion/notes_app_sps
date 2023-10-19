import User from '../models/user.js';

export const getUsers = async (req, res)=>{
    const users = await User.find();
    res.json(users)
}

export const getUser = async (req, res)=>{
    const user = await User.findById(req.params.id);
    if (!user)return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user)
}

export const createUser = async (req, res) => {
    const {name}= req.body;
    const newUser = new User({
        name
    });
    await newUser.save();
    res.sendStatus(201);
}

export const updateUser = async (req, res)=>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new : true
    });
    if (!user)return res.status(404).json({ message: 'User not found' });
    res.sendStatus(204);
}

export const deleteUser = async (req, res)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user)return res.status(404).json({ message: 'User not found' });
    res.sendStatus(204);
}