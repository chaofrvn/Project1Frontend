import axios from "axios";
import { useEffect, useState } from "react";
import OtherComment from "./OtherComment.jsx";
export default function OtherComments({ docId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`http://localhost:4688/comment/${docId}`, {
          // params: { other: true },
        })
        .catch((err) => {
          console.log(err);
          setComments([
            {
              rating: 3,
              commentBody: "This is a comment",
              author: "2",
            },
            {
              rating: 4,
              commentBody: "This is a comment",
              author: "3",
            },
          ]);
        })
        .then((res) => {
          setComments(res.data.comment);
        });
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="has-text-weight-bold  is-size-5 mb-2 mt-4">
        Tất cả bình luận
      </div>

      {comments.map((comment, i) => {
        return (
          <OtherComment
            key={i}
            rating={comment.rating}
            commentBody={comment.commentBody}
            author={comment.user.name}
            updatedAt={comment.updatedAt}
          ></OtherComment>
        );
      })}
    </>
  );
}
