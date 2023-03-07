import "./styles.css";
import React, { useState } from "react";

const groups = [
  { id: "1", name: "Red", color: "red" },
  { id: "2", name: "Green", color: "green" },
  { id: "3", name: "Blue", color: "blue" }
];

function AttendanceForm() {
  const [input, setInputs] = useState({});

  const handleChange = (event) => {
    // Deconstruct event properties for all types
    const { name, value, type, checked } = event.target;
    switch (type) {
      case "checkbox":
        setInputs((values) => ({ ...values, [name]: checked }));
        break;
      default:
        // Handle remaining HTML element types: text, number, select
        setInputs((values) => ({ ...values, [name]: value }));
        break;
    }
  };
  console.log("Inputs:", input);
  const handleSave = () => {
    // TODO: Quality checks:
    // 1. Ensure required fields provided
    // 2. Validate field data
    addAttendee(inputs);

    // Clear fields
    setInputs({});
  };

  return (
    <div>
      <div>
        First Name: <input type="text" value={input.first || ""} />
      </div>
      <div>
        Last Name: <input type="text" value={input.last || ""} />
      </div>
      <div>
        Age: <input type="number" value={input.age || "0"} />
      </div>
      <div>
        Student: <input type="checkbox" value={input.student || false} />
      </div>
      <div>
        <label for="group-select" value={input.group || ""}>
          Group:{" "}
        </label>
        <select name="groups" id="group-select">
          <option value="">Select Group</option>
          {groups.map((group) => (
            <option key={`group-${group.id}`} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

function AttendanceStats() {}

const Attendance = () => {
  // Array of attendees used for lifting state
  const [attendees, setAttendees] = useState([]);
  <AttendanceStats attendees={attendees} />;

  const addAttendee = (attendee) => {
    // Deconstruct attendee info with defaults
    const { first = "", last = "", age = "", group = "" } = attendee;
    const { addAttendee = () => {} } = props;
    // Deconstruct attendees
    const { attendees = [] } = props;

    // Set attendees by deconstructing current attendees,
    // and object of current attendee
    setAttendees([...attendees, { first, last, age, group }]);
  };

  <AttendanceForm addAttendee={addAttendee} />;

  return (
    <div>
      <AttendanceForm />
      <AttendanceStats />
      <h2>Attendance Stats</h2>
      <p>
        Total Attending:
        <br />
        Oldest:
        <br />
        Youngest:
        <br />
        Red:
        <br />
        Green:
        <br />
        Blue:
      </p>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Lab06</h1>
      <h3>Add Attendee</h3>
      <Attendance />
    </div>
  );
}
