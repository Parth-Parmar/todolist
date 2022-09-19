
import './App.css';
import Crud from './components/Crud';
import FetchApi from './components/FetchApi';
import Today from './components/Today';
import Todo from './components/Todo';
import UserData from './components/UserData';
import Viewdata from './components/Viewdata';
import Dark from './components/Dark';




import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      {/* <Crud /> */}

      {/* <HashRouter>
        <Routes>
          <Route path='/' element={<FetchApi />} />
          <Route path='/viewprofile/:id' element={<UserData />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </HashRouter> */}

     
      {/* <Todo/> */}
      {/* <Viewdata/> */}
      <Today/>

      {/* <Dark/> */}



    </>

  );
}

export default App;
