import '../styles/SearchBox.css';

function SearchBox(props) {
  return (
    <div className="search-box">
      <label htmlFor="search" id="search-label">
        Поиск предмета, преподавателя или группы:
      </label>
      <input
        type="search"
        id="search"
        name="q"
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBox;

// Жизнь - это поиск
