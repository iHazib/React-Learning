function Searchbar({search, setSearch}) {
  return (
    <div>
        <input
        type='text'
        value={search} 
        placeholder='Search entries..'
        onChange={(e) => setSearch(e.target.value)}/>
    </div>
  );
}

export default Searchbar;