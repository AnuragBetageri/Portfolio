import React, { useState } from 'react';
import "../css/displayCode.css";


function DisplayCode() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            <div className= "runCode" onClick={openModal}> <span>&lt;/ </span>RUN CODE <span> /&gt;</span></div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>My Details:</p>
                        <p>Name: Anurag C Betageri</p>
                        <p>Age: 22</p>
                        <p>Education:</p>
                        <p>_________________________________________</p>
                        <p>UnderGraduation:</p>
                        <p>University: Reva University, Bangalore, India</p>
                        <p>Course/Board: B Tech Computer Science</p>
                        <p>Year: 2024</p>
                        <p>PreUniversity:</p>
                        <p>College: Mahesh PU College, Mangalore, India</p>
                        <p>Course/Board: PCMC in Karnataka Board</p>
                        <p>Year: 2020</p>
                        <p>Schooling:</p>
                        <p>School: Bhuvana Jyothi Residential School, Shirthady, Karnataka</p>
                        <p>Course/Board: CBSE</p>
                        <p>Year: 2018</p>
                        <p>Hobbies: Painting, Testing custom Android OS, and Testing games</p>
                        <p>=== Thank You ===</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DisplayCode;
