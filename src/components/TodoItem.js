import React, { useState } from 'react';

const TodoItem = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    let {title,description, onDelete } = props

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const cardStyle = {
        width: '15rem',
        backgroundColor: isChecked ? '#101417' : '#212529',
        color: isChecked ? '#666666': 'white',
        boxShadow: isChecked ? '0 0 5px rgba(0, 0, 0, 0.5)' : 'none',
    };

    return (
        <>
            <div className="card my-3" style={cardStyle}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{title}</h5>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            style={{ backgroundColor: '#212529',width:'22px', height:'22px' }}
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                    <hr />
                    <p className="card-text">
                        {description}
                    </p>
                    <button type="button" className="btn btn-outline-secondary" onClick={onDelete} >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default TodoItem;