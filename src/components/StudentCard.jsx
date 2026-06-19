import studentImg from "../assets/student.png";

function StudentCard({ student }) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
      }}
    >
      <img
        src={studentImg}
        width="80"
        alt="student"
      />

      <h3>{student.name}</h3>

      <p>Age: {student.age}</p>

      <p>Course: {student.course}</p>
    </div>
  );
}

export default StudentCard;