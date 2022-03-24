import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Quiz from './view/pages/quiz';
import Result from './view/pages/result';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Quiz />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
