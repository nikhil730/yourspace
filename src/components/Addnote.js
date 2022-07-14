import { useState } from "react";

function Createnote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    console.log(note.title);
    if (note.title !== "" && note.content !== "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    } else if (note.title === "") {
      alert("please add a title");
    } else if (note.content === "") {
      alert("Please add some content");
    }
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handlechange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handlechange}
          value={note.content}
          placeholder="Take a note... "
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
export default Createnote;
