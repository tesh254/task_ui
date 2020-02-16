import React from "react";

const PaginationBtn = ({
  handlePrevPage,
  handleNextPage,
  handleLimitChange,
  lastPage,
  firstPage,
  handlePageChange
}) => (
  <section className="pagination-section">
    <div>
      {firstPage ? null : (
        <button className="button is-black is-large" onClick={handlePrevPage}>
          Prev
        </button>
      )}

      <input
        className="input"
        type="number"
        name="limit"
        onChange={handleLimitChange}
        placeholder="Per Page"
      />

      {lastPage ? null : (
        <button className="button is-black is-large" onClick={handleNextPage}>
          Next
        </button>
      )}
    </div>
  </section>
);

export default PaginationBtn;
