import {BrowserRouter, Routes, Route} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import UserList from "./Component/UserList";
import Login from "./Auth/Login";
import Connexion from "./Auth/Connexion";
import UserProvider from "./Context/UserContext";
import Profile from "./Page/Profile";

function App() {
    return (
        <UserProvider>
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
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/connexion' element={<Connexion/>}/>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;