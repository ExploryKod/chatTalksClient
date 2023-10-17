import {BrowserRouter, Routes, Route} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import UserList from "./Component/UserList";
import Connexion from "./Auth/Connexion";
import Profile from "./Page/Profile";



function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/profile' element={
                        <NeedAuth>
                            <UserList/>
                        </NeedAuth>
                    }/>
                    
                    <Route path='/pr' element={
                        <NeedAuth>
                            <Profile/>
                        </NeedAuth>
                    }/>
                
                    <Route path='/connexion' element={<Connexion/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;