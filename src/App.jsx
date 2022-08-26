import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

const Profile = () => {
  return (
    <div className="row">
      <h2>Это страница с профилем</h2>
    </div>
  );
}
const Messages = () => {
  return <h2>Это страница с сообщениями</h2>;
}
const Settings = () => {
  return <h2>Это страница с настройками</h2>;
}
const Friends = () => {
  return <h2>Это страница с друзьями</h2>;
}

function App() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-3">
        <div className="nav flex-column nav-pills" aria-orientation="vertical">
          <NavLink className="nav-link" to="profile">Профиль</NavLink>
          <NavLink className="nav-link" to="messages">Сообщения</NavLink>
          <NavLink className="nav-link" to="settings">Настройки</NavLink>
          <NavLink className="nav-link" to="friends">Друзья</NavLink>
        </div>
      </div>
        <div className="col-9">
          <Routes>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/messages' element={<Messages/>}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
            <Route path='/friends' element={<Friends/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
