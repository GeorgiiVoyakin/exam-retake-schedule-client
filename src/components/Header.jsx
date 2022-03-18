import CourseButton from "./CourseButton";
import "../styles/Header.css"

function header() {
    const buttons = [];
    for (let index = 1; index <= 4; index++) {
        buttons.push(<CourseButton number={index}></CourseButton>)
    }
    return (
        <div>
            <h1 className="header">График пересдач</h1>
            <div className="regular-info-text">
                <p>Выбор курса</p>
            </div>
            <div className="course-buttons">
            {buttons}
            </div>
        </div>
    );
}

export default header;