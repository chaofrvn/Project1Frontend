export default function Pagination({ page, setPage = () => {}, totalPages }) {
  const pageNumbers = [];
  for (let i = 2; i <= totalPages - 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        <li>
          <a
            className={`pagination-link  ${
              1 == page ? "is-current" : undefined
            }`}
            aria-label="Page 1"
            aria-current={1 == page ? "page" : undefined}
            onClick={() => setPage(1)}
          >
            1
          </a>
        </li>
        {pageNumbers.map((number) => {
          if (number > page - 2 && number < page + 2) {
            return (
              <li key={number}>
                <a
                  className={`pagination-link  ${
                    number == page ? "is-current" : undefined
                  }`}
                  aria-label="Page 1"
                  aria-current={number == page ? "page" : undefined}
                  onClick={() => setPage(number)}
                >
                  {number}
                </a>
              </li>
            );
          } else if (number == page - 2) {
            return (
              <li key={number}>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
            );
          } else if (number == page + 2) {
            return (
              <li key={number}>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
            );
          } else return;
        })}
        {totalPages > 1 && (
          <li>
            <a
              className={`pagination-link  ${
                totalPages == page ? "is-current" : undefined
              }`}
              aria-label="Page 1"
              aria-current={totalPages == page ? "page" : undefined}
              onClick={() => setPage(totalPages)}
            >
              {totalPages}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

// Path: src\components\Documents.jsx
