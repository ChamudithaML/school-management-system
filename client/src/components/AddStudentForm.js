import React, { useState } from "react";
import axios from "axios";
import './AddStudentForm.css'

export default function AddStudentForm({ getUsers, closeForm }) {

    const [inputs, setInputs] = useState([]);

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

        axios.post('http://127.0.0.1:5000/useradd', inputs).then(function (response) {
            console.log(response.data);
            closeForm();
            getUsers();

        }).catch(function (error) {
            console.error("There was an error adding the student!", error);
        });
    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1 className="form-title">Create User</h1>
                <form onSubmit={handleSubmit} className="user-form">
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-input" name="name" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Age</label>
                        <input type="text" className="form-input" name="age" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Class</label>
                        <input type="text" className="form-input" name="letter" onChange={handleChange} />
                    </div>
                    <button type="submit" name="add" className="form-button">Save</button>
                </form>
            </div>
        </div>

    );
}