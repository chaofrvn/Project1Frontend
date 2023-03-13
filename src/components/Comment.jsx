import YourComment from "./YourComment.jsx";
import { useEffect } from "react";
import OtherComments from "./OtherComments.jsx";
import AverageRating from "./AverageRating.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice.js";
export default function Comment({ docId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      // navigate("/");
    }
  }, [isError, navigate]);
  // console.log(docId);
  return (
    <>
      <div></div>
      <div></div>
      <div className="has-text-weight-bold mb-3 is-size-4" style={{}}>
        Bình luận và đánh giá
      </div>
      {isError == false ? (
        <>
          {" "}
          <YourComment docId={docId}></YourComment>
          <AverageRating docId={docId}></AverageRating>
          <OtherComments docId={docId} />
        </>
      ) : (
        <>
          <div className="has-text-weight-bold mb-3 is-size-6">
            Bạn phải đăng nhập để thực hiện chức năng này
          </div>
        </>
      )}
    </>
  );
}
