import axios from "axios";
import Star from "./Rating.jsx";
import { useEffect, useState } from "react";

export default function YourComment({ docId }) {
  const [commentBody, setCommentBody] = useState("");
  const [rating, setRating] = useState(0);
  const [firstTime, setFirstTime] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:4688/comment/me/${docId}`)
      .then((res) => {
        // setYourComment(res.data);
        if (res.data.comment && res.data.comment.rating) {
          console.log(res.data);
          setFirstTime(false);
          setRating(res.data.comment.rating);
          setCommentBody(res.data.comment.commentBody);
        }
      })
      .catch((err) => {});
  }, [docId]);

  return (
    <>
      <div className="has-text-weight-bold  is-size-6 mb-2 mt-4">
        Bình luận của bạn
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Star rating={rating} setRating={setRating}></Star>
        <br />
        <textarea
          placeholder="Nhập bình luận của bạn"
          className="textarea is-medium"
          // fontSize="14px"
          rows="2"
          value={commentBody}
          onChange={(e) => {
            setCommentBody(e.target.value);
          }}
        ></textarea>
        <br />
        <button
          type="submit"
          className="button is-primary is-pulled-right"
          onClick={() => {
            if (firstTime) {
              axios
                .post(`http://localhost:4688/comment`, {
                  commentBody,
                  rating,
                  docId,
                })
                .then((res) => {
                  console.log("success", res);
                  setFirstTime(false);
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              axios
                .patch(`http://localhost:4688/comment/${docId}`, {
                  commentBody,
                  rating,
                })
                .then((res) => {
                  setRating(res.body.rating);
                  console.log("success", res);
                })
                .catch((err) => {});
            }
          }}
        >
          Bình luận
        </button>
      </form>
    </>
  );
}
