import { FaStar } from "react-icons/fa";

export default function Rating({ rating, setRating }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((star, i) => (
        <FaStar
          id={i + 1}
          key={i + 1}
          onClick={() => {
            setRating(star);
          }}
          color={star <= rating ? "#ffc107" : "#e4e5e9"}
        ></FaStar>
      ))}
    </>
  );
}
