import {BrowserRouter, Routes, Route} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import Profile from "./Pages/Profile";
import Connexion from "./Auth/Connexion";
import ChatBoard from "./Pages/ChatBoard";
import Navigation from "./Pages/Navigation";
import BecomeAdmin from "./Pages/BecomeAdmin.tsx";
import {Credits} from "./Pages/Credits.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigation/>}>
                    <Route index element={
                        <NeedAuth>
                            <Profile />
                        </NeedAuth>
                    }/>
                    <Route path='chat/*' element={
                        <NeedAuth>
                            <ChatBoard/>
                        </NeedAuth>
                    }/>
                    <Route path='/become-admin' element={
                        <NeedAuth>
                            <BecomeAdmin/>
                        </NeedAuth>
                    }/>
                </Route>
                <Route path='/credits' element={<Credits/>}/>
                <Route path='/connexion' element={<Connexion/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
