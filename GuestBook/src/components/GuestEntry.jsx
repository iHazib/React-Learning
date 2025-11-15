function GuestEntry({name, message, category, onDelete}) { 
      
  return (
    <div>
       <h4>Name : {name}</h4>
       <p>Message : {message}</p>
       <p>Category : {category}</p>
       <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default GuestEntry