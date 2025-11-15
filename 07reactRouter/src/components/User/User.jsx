import React from "react";
import { useParams } from 'react-router';

function User() {
  const {userid} = useParams()
  return (
    <div className="bg-gray-700 text-white text-3xl px-5 py-3">
        User: {userid} 
    </div>
  );
}

export default User;