import '../styles/CourseButton.css'

function courseButton(props) {
    return (
        <div className="course-button">{props.number}</div>
    );
}

export default courseButton;