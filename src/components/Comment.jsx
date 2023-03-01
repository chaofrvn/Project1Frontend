import YourComment from "./YourComment.jsx";

import OtherComments from "./OtherComments.jsx";
import AverageRating from "./AverageRating.jsx";
export default function Comment({ docId }) {
  // console.log(docId);
  return (
    <>
      <div></div>
      <div></div>
      <div className="has-text-weight-bold mb-3 is-size-4" style={{}}>
        Bình luận và đánh giá
      </div>
      <YourComment docId={docId}></YourComment>
      <AverageRating docId={docId}></AverageRating>
      <OtherComments docId={docId} />
    </>
  );
}
