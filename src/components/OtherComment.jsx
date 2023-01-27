import Rating from "./Rating";

export default function OtherComment({
  rating,
  commentBody,
  author,
  updatedAt,
}) {
  const date = new Date(updatedAt);
  const month = [];
  return (
    <div className="is-size-5">
      <section>
        <span className="mr-3"> {author}</span>

        {`${date.getDate()} tháng ${
          date.getMonth() + 1
        } năm ${date.getFullYear()}`}
      </section>
      <Rating
        style={{ display: "inline-block" }}
        rating={rating}
        setRating={() => {
          return;
        }}
      ></Rating>
      {commentBody ? (
        <>
          <br />
          <p>{commentBody}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
