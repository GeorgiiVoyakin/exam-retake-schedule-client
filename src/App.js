import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  const courses = [1, 2, 3, 4];
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<MainContent course={1}></MainContent>}/>
       {
         courses.map(course => (
          <Route path={'/course/'+course} element={<MainContent course={course}></MainContent>}/>
         ))
       }
     </Routes>
    </div>
  );
}

export default App;
