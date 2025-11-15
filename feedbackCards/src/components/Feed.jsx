
function Feed({name, comment, rating, removeItem}) {
  const textColor = rating >= 4 ? "green" : "gray";
  const star = rating >= 4 ? "🌟" : "";
  return (
    <div>
        <h3>{name} {star}</h3>
        <p>{comment}</p>
        <p style={{ color : textColor }}>Rating: {rating}</p>
        <button onClick={removeItem}>Delete</button>
    </div>
  );
}

export default Feed;