import { useState } from "react";

function SearchUsers({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Search user by name or email..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "10px",
          width: "60%",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "14px",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 16px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
      <button
        type="button"
        onClick={() => {
          setInput("");
          onSearch("");
        }}
        style={{
          backgroundColor: "#e0e0e0",
          color: "#333",
          border: "none",
          padding: "10px 16px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Clear
      </button>
    </form>
  );
}

export default SearchUsers;
