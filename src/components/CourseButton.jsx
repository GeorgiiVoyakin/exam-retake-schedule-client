import '../styles/CourseButton.css'

function CourseButton(props) {
    return (
        <div className="course-button">{props.number}</div>
    );
}

export default CourseButton;