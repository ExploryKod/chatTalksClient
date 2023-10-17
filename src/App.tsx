import {BrowserRouter, Routes, Route} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import UserList from "./Component/UserList";
import Connexion from "./Auth/Connexion";
import Profile from "./Page/Profile";
import "./App.css";


function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <NeedAuth>
                            <UserList/>
                        </NeedAuth>
                    }/>
                    
                    <Route path='/profile' element={
                        <Profile/>
                    }/>
                
                    <Route path='/connexion' element={<Connexion/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;