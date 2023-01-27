import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function AverageRating({ docId }) {
  const [rating, setRating] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`http://localhost:4688/rating/${docId}`)
        .then((res) => {
          setRating(res.data.averageRating);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
    return () => clearInterval(interval);
  }, [docId]);

  return (
    <>
      <div className="has-text-weight-bold  is-size-5">
        Đánh giá trung bình:{"   "}
        {rating}/5 {"  "}
        <FaStar color="#ffc107" />
      </div>
    </>
  );
}
