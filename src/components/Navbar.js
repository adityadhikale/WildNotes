import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import TodoList from './TodoList';
import '../assets/style/Navbar.css'

const Navbar = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');
    const [savedNotes, setSavedNotes] = useState([]);

    const handleNoteTitleChange = (e) => {
        setNoteTitle(e.target.value);
    };

    const handleNoteDescriptionChange = (e) => {
        setNoteDescription(e.target.value);
    };

    const saveNote = () => {
        // Save the note to a list of saved notes
        const newNote = { title: noteTitle, description: noteDescription };
        setSavedNotes([...savedNotes, newNote]);

        // Clear the input fields
        setNoteTitle('');
        setNoteDescription('');
    };

    return (
        <>
            <nav className="navbar bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{ marginRight: '15px' }} />
                        WildNotes
                    </a>
                    <button className="btn btn-outline-light" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ marginRight: '10px', fontWeight: 'bolder' }}>+</button>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="noteTitle"
                                        placeholder="Title"
                                        value={noteTitle}
                                        onChange={handleNoteTitleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        id="noteDescription"
                                        placeholder="Description"
                                        value={noteDescription}
                                        onChange={handleNoteDescriptionChange}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" onClick={saveNote}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <TodoList savedNotes={savedNotes} setSavedNotes={setSavedNotes} />


        </>
    );
};

export default Navbar;
