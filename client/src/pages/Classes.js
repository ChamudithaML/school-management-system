import React, { useEffect, useState } from "react";
import './Classes.css'
import axios from "axios"
import { Link } from 'react-router-dom';
import AddStudentForm from "../components/AddStudentForm";
import EditStudentForm from "../components/EditStudentForm";

const Classes = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://127.0.0.1:5000/listusers').then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://127.0.0.1:5000/userdelete/${id}`).then(function (response) {
            console.log(response.data);
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
        <>
            <div className='classes-center'>
                <div className="outer-container">
                    <div className="class-box A">Class A</div>
                    <div className="class-box B">Class B</div>
                    <div className="class-box C">Class C</div>
                    <div className="class-box D">Class D</div>
                </div>
            </div>
            <div>
            </div>

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


                        <h1 className="user-list-title">List Users</h1>
                    </div>
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Date Added</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, key) =>
                                <tr key={key}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.date}</td>
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

                                        <button onClick={() => deleteUser(user.id)} className="delete-button">Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default Classes;