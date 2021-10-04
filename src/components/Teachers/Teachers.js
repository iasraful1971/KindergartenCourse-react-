import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import SingleTeacher from '../SingleTeacher/SingleTeacher';
import './Teacher.css';

const Teachers = () => {
    const [teachers , setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teachers.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data))
    }, []);

    return (
        <div className="tacher-container">
            <div className="container">
       
                <div className="teacher-grid">
                    {
                        teachers.map(teacher => <SingleTeacher
                        key={teacher.id}
                        teacher={teacher}
                        ></SingleTeacher>)
                    }
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Teachers;