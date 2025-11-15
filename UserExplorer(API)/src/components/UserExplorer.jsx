import { useState, useEffect } from "react";
import SearchUsers from "./SearchUsers";
import DisplayUsers from "./DisplayUsers";

function UserExplorer() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const visibleUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>;
  if (error)
    return (
      <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
        Error: {error}
      </p>
    );

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fafafa",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#007bff",
          fontSize: "28px",
          marginBottom: "20px",
        }}
      >
        👥 User Explorer
      </h2>

      <SearchUsers onSearch={setSearch} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {visibleUsers.length > 0 ? (
          visibleUsers.map((user) => (
            <DisplayUsers key={user.id} user={user} />
          ))
        ) : (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              color: "#777",
            }}
          >
            No users found 
          </p>
        )}
      </div>
    </div>
  );
}

export default UserExplorer;
