import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ newSubmit }) {
  return (
    <>
      <button className={css.btn} onClick={newSubmit}>
        Load More
      </button>
    </>
  );
}
