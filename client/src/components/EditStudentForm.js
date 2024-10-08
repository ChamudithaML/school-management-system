import React, { useState, useEffect } from "react";
import axios from "axios";
import './EditStudentForm.css'

export default function EditStudentForm({ id, getUsers, closeEditForm }) {
    const [inputs, setInputs] = useState([]);

    console.log(id);

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://127.0.0.1:5000/userdetails/${id}`).then(function (response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const { name, age, letter } = inputs;

        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            alert('Name is required and should be a string.');
            return;
        }
        inputs.name = name.charAt(0).toUpperCase() + name.slice(1);

        if (!age || isNaN(age) || age < 3 || age > 25) {
            alert('Age should be a number between 3 and 25.');
            return;
        }

        if (!letter || letter.length !== 1 || !['A', 'B', 'C', 'D'].includes(letter.toUpperCase())) {
            alert('Class should be a single letter: A, B, C, or D.');
            return;
        }

        axios.put(`http://127.0.0.1:5000/userupdate/${id}`, inputs).then(function (response) {
            console.log(response.data);
            getUsers();
            closeEditForm();
        });
    }

    return (
        <div className="edit-form-container">
            <div className="edit-form-wrapper">
                <h1 className="edit-form-title">Edit User</h1>
                <form onSubmit={handleSubmit} className="edit-user-form">
                    <div className="edit-form-group">
                        <label className="edit-form-label">Name</label>
                        <input type="text" value={inputs.name} className="edit-form-input" name="name" onChange={handleChange} />
                    </div>
                    <div className="edit-form-group">
                        <label className="edit-form-label">Age</label>
                        <input type="text" value={inputs.age} className="edit-form-input" name="age" onChange={handleChange} />
                    </div>
                    <div className="edit-form-group">
                        <label className="edit-form-label">Class</label>
                        <input type="text" value={inputs.letter} className="edit-form-input" name="letter" onChange={handleChange} />
                    </div>
                    <button type="submit" name="update" className="edit-form-button">Save</button>
                </form>
            </div>
        </div>

    );
}