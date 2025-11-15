import {useState} from "react";
import Feed from './Feed';

function FeedbackManager() {
  
   const [feedbacks, setFeedbacks] = useState([
    { id: 1, name: "Hazib", comment: "Great app!", rating: 5 },
    { id: 2, name: "Anabya", comment: "Nice experience!", rating: 4 },
    { id: 3, name: "Hashir", comment: "Could be better.", rating: 3 },
   ]);

   return (
    <div>
        <h1>Feedback Manager</h1>
        {feedbacks.map((item) => (
           <Feed
           key={item.id}
           name={item.name}
           comment={item.comment}
           rating={item.rating}
           removeItem={() => setFeedbacks(feedbacks.filter((f) => f.id !== item.id))}
           />
        ))}
    </div>
  );
}

export default FeedbackManager;