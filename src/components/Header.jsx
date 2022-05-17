import CourseButton from './CourseButton';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const buttons = [];
  for (let index = 1; index <= 4; index++) {
    buttons.push(
      <Link to={'/course/' + index} style={{ textDecoration: 'none' }}>
        <CourseButton number={index} key={index}></CourseButton>
      </Link>,
    );
  }
  return (
    <div>
      <h1 className="header">График пересдач</h1>
      <div className="regular-info-text">
        <p>Выбор курса</p>
      </div>
      <div className="course-buttons">{buttons}</div>
    </div>
  );
}

export default Header;
