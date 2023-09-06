const Note = require("../../models/note");
const User = require("../../models/user");

module.exports = {
    
    viewNotes,
    create, 
};

async function viewNotes(req, res) {
    try {
        
        const userNotes = await Note.find({user: req.user._id}).sort('-createdAt'); 
        res.json(userNotes);
    } catch (err) {
        res.status(400).json('Error');
    }
}

async function create(req, res) {
    try {
        console.log(req.body.text, req.user._id, req.body.createdAt);
        const note = await Note.create({
            text: req.body.text,
            user: req.user._id
        });
        res.json(note);
    } catch (err){
        res.status(400).json(err);
    }
}

