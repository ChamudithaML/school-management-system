import React, { useEffect, useState } from "react";
import './Classes.css'
import StudentList from "../components/StudentList";

const Classes = () => {

    const [letter, setLetter] = useState('A');

    const handleClick = (letter) => {
        setLetter(letter);
    }

    return (
        <>
            <div className='classes-center'>
                <div className="outer-container">
                    <div onClick={() => handleClick('A')} className="class-box A">Class A</div>
                    <div onClick={() => handleClick('B')} className="class-box B">Class B</div>
                    <div onClick={() => handleClick('C')} className="class-box C">Class C</div>
                    <div onClick={() => handleClick('D')} className="class-box D">Class D</div>
                </div>
            </div>

            <StudentList letter={letter} />

        </>
    )
}

export default Classes;