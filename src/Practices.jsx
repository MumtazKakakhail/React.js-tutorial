import React from "react";
export const Practices = () => {
    const students = [1];
    return (
    <>
    {/* <p>{students.length && "No students found"}</p> */}
    <p>Number of students : {students.length}</p>
    <p>{students.length === 0 && "No students found" }</p>
    </>
    );
};
export default Practices