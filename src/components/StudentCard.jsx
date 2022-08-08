import React from "react";

function StudentCard({ student }) {
  return (
    <section>
      <h2>{student.name}</h2>
      <h2>{student.age}</h2>
      <h2>{student.id}</h2>
      <h2>{student.term}</h2>
    </section>
  );
}


export default StudentCard