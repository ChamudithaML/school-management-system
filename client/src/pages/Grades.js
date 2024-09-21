import React from 'react'
import './Grades.css'
import { Link } from 'react-router-dom';

const Grades = () => {
    return (
        <div className="grid-container">
            <Link to="/grade1" className='grade-links'>
                <div className="box">Grade 1</div>
            </Link>
            <div className="box">Grade 2</div>
            <div className="box">Grade 3</div>
            <div className="box">Grade 4</div>
            <div className="box">Grade 5</div>
            <div className="box">Grade 6</div>
            <div className="box">Grade 7</div>
            <div className="box">Grade 8</div>
            <div className="box">Grade 9</div>
            <div className="box">Grade 10</div>
            <div className="box">Grade 11</div>
            <div className="box">Grade 12</div>
        </div>

    )
}

export default Grades;