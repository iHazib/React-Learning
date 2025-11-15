import React, { useState } from "react";

function Github() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");

  function fetchData() {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.log("Error:", err));
  }

  return (
    <div className="p-6">

      <div className="m-4 py-4">
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          placeholder="enter Github username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />

        <button
          onClick={fetchData}
          className="bg-blue-600 text-white px-4 py-2 ml-3 rounded cursor-pointer"
        >
          Search
        </button>
      </div>

      {"followers" in data && (
        <div className="flex flex-col items-center gap-4 mt-6">

          <img
            src={data.avatar_url}
            alt="profile"
            className="w-28 h-28 rounded-full shadow"
          />

          <div className="text-center bg-gray-700 text-white text-2xl p-3 rounded">
            Followers: {data.followers}
          </div>

        </div>
      )}
    </div>
  );
}

export default Github;
