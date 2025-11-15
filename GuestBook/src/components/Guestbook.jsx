import {useState} from "react";
import GuestEntry from "./GuestEntry";
import Searchbar from "./Searchbar";

function Guestbook() {
  const [entries, setEntries] = useState([
    {id: 1, name: "Hayden", message: "Today i feel really exhausted.", category: "friend"},
    {id: 2, name: "Emma", message: "The acting class went quite good.", category: "relative"},
  ]);

  const CATEGORIES = {
    FRIEND: "friend",
    RELATIVE: "relative",
    COLLEAGUE: "colleague",
  }
  
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState(CATEGORIES.FRIEND);
  const [search, setSearch] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value); 
  const handleCategory = (e) => setCategory(e.target.value);

  const searchEntries = entries.filter(
    (entry) => 
        entry.name.toLowerCase().includes(search.toLowerCase()) ||
        entry.message.toLowerCase().includes(search.toLowerCase()) ||
        entry.category.toLowerCase().includes(search.toLowerCase())
  );
 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name} , message and category`);

    const newEntry = {
        id: Date.now(),
        name,
        message,
        category,
    };

    setEntries([newEntry, ...entries]);
    setName(""); //reset
    setMessage(""); //reset
    setCategory(CATEGORIES.FRIEND); //reset
  };

  return (

    <div>
      <form onSubmit={handleSubmit}>
         <input type="text" value={name} placeholder="enter your name" onChange={handleName}/>
         <input type="text" value={message} placeholder="your message" onChange={handleMessage} />
         <select value={category} onChange={handleCategory}>
            <option value={CATEGORIES.FRIEND}>friend</option>
            <option value={CATEGORIES.RELATIVE}>relative</option>
            <option value={CATEGORIES.COLLEAGUE}>colleague</option>
         </select>
         <button>Submit</button>
      </form>

      <Searchbar search={search} setSearch={setSearch}/>

      {searchEntries.map((entry) => (
        <GuestEntry 
        key = {entry.id}
        name = {entry.name}
        message = {entry.message}
        category = {entry.category}
        onDelete = {() => 
            setEntries(entries.filter((f) => f.id !== entry.id))
        } />
      ))}
    </div>
  );
}

export default Guestbook;