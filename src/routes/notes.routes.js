const { Router } = require('express');
const router = Router();

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');


// para direccionar a la parte que creara las notas
router.get('/notes/add', renderNoteForm);
//router.get('/notes/add', renderNoteForm);
// te panga a hacer la nota xd entonces se puede modificar el link xd

//el de abajo es el del curso pero a mi me interesa la siguiente line
router.post('/notes/new-note', createNewNote);
//router.post('/notes/add', createNewNote);

//get all notes
router.get('/notes', renderNotes);

//editas notas
router.get('/notes/edit/:id', renderEditForm);
// actualicar los datos
router.put('notes/edit/:id', updateNote);
//Eliminar notas
router.delete('/notes/delete/:id', deleteNote);
//


module.exports = router;