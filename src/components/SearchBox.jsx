import "../styles/SearchBox.css";

function SearchBox() {
    // const dataSearch = e => {
    //     const value = e.target.value.toLowerCase();
      
    //     const filter = data.filter(user => {
    //       return user.name.toLowerCase().includes(value);
    //     });
      
    //     update({
    //       data: filter,
    //       active: 0,
    //       term: value
    //     });
    //   };

    return (
        <div className="search-box">
            <label htmlFor="search" id="search-label">Поиск предмета, преподавателя или группы:</label>
            <input type="search" id="search" name="q"></input>
        </div>
    );
}

export default SearchBox;

// Жизнь - это поиск