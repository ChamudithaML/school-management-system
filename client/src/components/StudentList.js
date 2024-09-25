import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from 'react-router-dom';
import AddStudentForm from "../components/AddStudentForm";
import EditStudentForm from "../components/EditStudentForm";
import './StudentList.css'

const StudentList = ({ letter }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [letter]);

    function getUsers() {
        axios.get(`http://127.0.0.1:5000/class/${letter}`).then(function (response) {
            // console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://127.0.0.1:5000/userdelete/${id}`).then(function (response) {
            // console.log(response.data);
            getUsers();
        });
        alert("Successfully Deleted");
    }

    const [isFormVisible, setFormVisible] = useState(false);

    const addStudentForm = () => {
        setFormVisible(true);
    };

    const closeForm = () => {
        setFormVisible(false);
    };


    const [editUserId, setEditUserId] = useState(null);

    const editStudentForm = (id) => {
        setEditUserId(id);
    };

    const closeEditForm = () => {
        setEditUserId(null);
    };
    
    return (
        <div className="user-list-container">
            <div className="user-list-wrapper">
                <div className="user-list-header">
                    <p className="add-user-button" onClick={addStudentForm}>Add New Student</p>

                    {isFormVisible && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <button className="close-button" onClick={closeForm}>X</button>
                                <AddStudentForm getUsers={getUsers} closeForm={closeForm} />
                            </div>
                        </div>
                    )}


                    <h1 className="user-list-title">Class Students List</h1>
                </div>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Class</th>
                            <th>Date Added</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, key) =>
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.letter}</td>
                                <td>{new Date(user.date).toISOString().split('T')[0]}</td>

                                <td>
                                    <p className="edit-button" onClick={() => editStudentForm(user.id)}>Edit</p>

                                    {editUserId === user.id && (
                                        <div className="modal-overlay">
                                            <div className="modal-content">
                                                <button className="close-button" onClick={closeEditForm}>X</button>
                                                <EditStudentForm id={user.id} getUsers={getUsers} closeEditForm={closeEditForm} />
                                            </div>
                                        </div>
                                    )}

                                    <p onClick={() => deleteUser(user.id)} className="delete-button">Delete</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentList;