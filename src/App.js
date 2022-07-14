import Header from "./components/header";
import Note from "./components/note";
import Createnote from "./components/Addnote";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <Createnote onAdd={addNote} />
      {notes.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
