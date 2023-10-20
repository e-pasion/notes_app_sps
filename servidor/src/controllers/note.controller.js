import Note from '../models/note.js';

export const getNotes = async (req, res)=>{
    const tasks = await Note.find().populate('user');
    res.json(tasks)
}

export const getNote = async (req, res)=>{
    const task = await Note.findById(req.params.id).populate('user');
    if (!task)return res.status(404).json({ message: 'Note not found' });
    res.status(200).json(task)
}

export const createNote = async (req, res) => {
    const {title, description, date, user }= req.body;
    console.log(user);
    const newNote = new Note({
        title,
        content,
        date,
        user
    });
    await newNote.save();
    res.sendStatus(201);
}

export const updateNote = async (req, res)=>{
    const task = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new : true
    });
    if (!task)return res.status(404).json({ message: 'Note not found' });
    res.sendStatus(204);
}

export const deleteNote = async (req, res)=>{
    const task = await Note.findByIdAndDelete(req.params.id);
    if (!task)return res.status(404).json({ message: 'Note not found' });
    res.sendStatus(204);
}