import "../styles/SearchBox.css";

function searchBox() {
    return (
        <div className="search-box">
            <label for="search" id="search-label">Поиск предмета, преподавателя или группы:</label>
            <input type="search" id="search" name="q"></input>
        </div>
    );
}

export default searchBox;