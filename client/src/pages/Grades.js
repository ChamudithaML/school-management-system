import React from 'react'
import './Grades.css'
import { Link } from 'react-router-dom';


const Grades = () => {
    return (
        <div class="grid-container">
            <Link to="/grade1" className='grade-links'>
                <div class="box">Grade 1</div>
            </Link>
            <div class="box">Grade 2</div>
            <div class="box">Grade 3</div>
            <div class="box">Grade 4</div>
            <div class="box">Grade 5</div>
            <div class="box">Grade 6</div>
            <div class="box">Grade 7</div>
            <div class="box">Grade 8</div>
            <div class="box">Grade 9</div>
            <div class="box">Grade 10</div>
            <div class="box">Grade 11</div>
            <div class="box">Grade 12</div>
        </div>

    )
}

export default Grades;