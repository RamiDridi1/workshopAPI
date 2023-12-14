import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import {Routes,Route} from "react-router-dom"
import UserList from './UserList';
import Profile from './Profile';
function App() {
  return (
    <div className="App">
      <NavBar />
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/list" element={<UserList />}/>
  <Route path="/Profile/:element" element={<Profile />}/>

</Routes>

    </div>
  );
}

export default App;
