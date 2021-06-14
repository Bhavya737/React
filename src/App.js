import { useEffect, useState } from "react";
import { nanoid} from "nanoid";
import NotesList from "./components/NotesList"
import Search from "./components/Search";
import Header from "./components/Header";

const App = () =>{
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "this is my first note",
    date: "15/06/2021"
  },
  {
    id: nanoid(),
    text: "this is my second note",
    date: "15/06/2021"
  },
  {
    id: nanoid(),
    text: "this is my third note",
    date: "15/06/2021"
  },
]);

const [darkMode, setDarkMode] = useState(false);

const [searchText, setSearchText] = useState('');

useEffect(() => {
  const saveNotes = JSON.parse(localStorage.getItem('notes-data'));
  if(saveNotes)
  {
    setNotes(saveNotes);
  }
}, []);

useEffect(()=>{
  localStorage.setItem('notes-data',JSON.stringify(notes));
}, [notes]);


const addNote=(text) => {
  const date= new Date();
  const newNote= {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  setNotes([...notes,newNote]);
};
const deleteNote = (id) => {
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}
return(
  <div className={`${darkMode && 'dark-mode'}`}> 
<div className="container">
  <Header handleToggle={setDarkMode} />
  <Search handleSearchNote ={setSearchText} />
  <NotesList 
  notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
   handleAddNote={addNote}
   handleDeleteNote = {deleteNote} />
</div>
</div>
);
};
export default App;