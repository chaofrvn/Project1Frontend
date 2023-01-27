import YourComment from "./YourComment.jsx";

import OtherComments from "./OtherComments.jsx";
import AverageRating from "./AverageRating.jsx";
export default function Comment({ docId }) {
  console.log(docId);
  return (
    <>
      <div className="has-text-weight-bold mb-3 is-size-3">
        Bình luận và đánh giá
      </div>
      <AverageRating docId={docId}></AverageRating>
      <YourComment docId={docId}></YourComment>
      <OtherComments docId={docId} />
    </>
  );
}
