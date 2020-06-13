const notesCtrl = {};

// Models
const Note = require("../models/Note");

// este puede que cambie por lo que se desea




notesCtrl.renderNoteForm = (req, res) => {
        //esto tiene que cambiar
        //este se encarga de renderizar la vista
        res.render('notes/new-note');
        //res.render('notes/add');
    }
    /// esto es para generar una nueva nota
notesCtrl.createNewNote = async(req, res) => {
    //// gracias al res.body se puede tomar su informacion

    const { title, description } = req.body;
    const newNote = new Note({


        title,
        description
    })

    //para guardarlos se pueden guadar en nuestra db
    // como se tardare un buen rato entonces tiene que ser
    // una funcion acincrona
    await newNote.save();
    console.log(newNote);
    res.send('nueva nota')
        //res.render('notes/new-note')
}

//creara todas las notdas, mas bien msotrara

notesCtrl.renderNotes = async(req, res) => {
    //esto tiene que cambiar
    //   res.render('notes/new-note');
    //crea un areglo de notas
    const notes = await Note.find();
    res.render("notes/all-notes", { notes });
    //res.render("notes/all-notes", { notes });
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

module.exports = notesCtrl;