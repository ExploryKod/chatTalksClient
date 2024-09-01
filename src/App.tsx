import {BrowserRouter, Routes, Route} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import Profile from "./Pages/Profile";
import Connexion from "./Auth/Connexion";
import ChatBoard from "./Pages/ChatBoard";
import Navigation from "./Pages/Navigation";
import {Credits} from "./Pages/Credits.tsx";
import { ErrorBoundary } from 'react-error-boundary'
import { useState } from "react";

function FallbackComponent({ error, resetErrorBoundary }: any) {
    return (
        <div role="alert" className="boundary-error">
            <div className="boundary-error__inner">
                <h1>Oups...</h1>
                <p>Une erreur est survenue.</p>
                <p>Vérifiez votre connexion ou contactez un administrateur</p>
                <button onClick={resetErrorBoundary}>Réessayer</button>
                <div className="inner__error">
                    <pre>{error.message}</pre>
                </div>
            </div>


        </div>
    )
}

function logErrorToService(error: any, info: any) {
    // Use your preferred error logging service
    console.error("Caught an error:", error, info);
}

function App() {
    const [someKey, setSomeKey] = useState(null);

    return (
        <ErrorBoundary
            FallbackComponent={FallbackComponent}
            onError={logErrorToService}
            onReset={() => setSomeKey(null)} // reset the state of your app here
            resetKeys={[someKey]} // reset the error boundary when `someKey` changes
        >
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
                </Route>
                <Route path='/credits' element={<Credits/>}/>
                <Route path='/connexion' element={<Connexion/>}/>
            </Routes>
        </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
