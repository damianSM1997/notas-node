const { response } = require("../server");

const notesCtrl = {};

module.exports = notesCtrl;

notesCtrl.renderNoteForm = (req, res) => {
        //esto tiene que cambiar
        res.render('notes/new-note');
    }
    /// esto es para generar una nueva nota
notesCtrl.createNewNote = (req, res) => {

    console.log(req.body);
    res.send('nueva nota')
}

//creara todas las notdas, mas bien msotrara

notesCtrl.renderNotes = (req, res) => {
    //esto tiene que cambiar
    res.render('notes/new-note');
}

notesCtrl.renderEditForm = (req, res) => {
    res.send('editar');
}

notesCtrl.updateNote = (req, res) => {
    res.send('Actualizar');
}

notesCtrl.deleteNote = (req, res) => {
    res.send('eeliminar nota');
}