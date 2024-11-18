
import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setNote(value);
    }
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note}
        />
        <button
          onClick={(event) => {
            props.addition(title, note, event);
            setTitle("");
            setNote("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
