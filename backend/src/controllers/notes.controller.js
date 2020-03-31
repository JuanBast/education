const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    await newNote.save();
    res.json({ message: "Note Created!" })
};

notesCtrl.updateNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        date,
        author        
    });
    res.json({ message: "Note Updated!" })
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note Deleted!" })
};

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.getOneSingleNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

module.exports = notesCtrl;