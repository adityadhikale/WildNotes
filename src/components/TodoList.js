import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {


    const { savedNotes, setSavedNotes } = props;
    

    if (!savedNotes || savedNotes.length === 0) {
        return (
            <div className="container my-5 text-center" style={{color:'gray'}}>
                <h5>You don't have a note yet</h5>
                <p>Tap + to create one</p>
            </div>
        );
    }

    const handleNoteDelete = (index) => {
        // Create a copy of the savedNotes array
        const updatedNotes = [...savedNotes];
        // Remove the note at the specified index
        updatedNotes.splice(index, 1);
        // Update the savedNotes state
        setSavedNotes(updatedNotes);
    };

    return (
        <div className='container my-4'>
            <div className='row'>
                {savedNotes.map((note, index) => (
                    <div key={index} className='col-md-3 col-sm-6 mb-4'>
                        <TodoItem
                            title={note.title}
                            description={note.description}
                            onDelete={() => handleNoteDelete(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

TodoList.defaultProps = {
    savedNotes: [] 
};

export default TodoList;

