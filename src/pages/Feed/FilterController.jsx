import './FilterController.css';

function FilterController() {
  return (
    <div className="FilterController">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="FilterController__input__icon lucide lucide-filter"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
      </svg>
      <input
        className="FilterController__input"
        type="text"
        placeholder="Search for tags to filter articles by"
      ></input>
      <div className="FilterController__dropdown">
        All Posts
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="lucide lucide-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  );
}

export default FilterController;
