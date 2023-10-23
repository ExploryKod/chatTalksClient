import {BrowserRouter, Routes, Route} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import Profile from "./Pages/Profile";
import Connexion from "./Auth/Connexion";
import ChatBoard from "./Pages/ChatBoard";
import Navigation from "./Pages/Navigation";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigation/>}>
                    <Route index element={
                        <NeedAuth>
                            <Profile userId={''} username={''}  isAdmin={false}/>
                        </NeedAuth>
                    }/>
                    <Route path='chat/*' element={
                        <NeedAuth>
                            <ChatBoard/>
                        </NeedAuth>
                    }/>
                </Route>
                <Route path='/connexion' element={<Connexion/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
