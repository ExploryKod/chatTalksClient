import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoggedStore } from '../StateManager/userStore';
import '../Styles/_flashMessage.scss';

interface Session {
  session?: boolean;
}

type passwordInput = {
    password: string;
}

const Connexion = () => {
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({password: "", username: ""})
  const [registerData, setRegisterData] = useState({username: "", password: ""})
  const [flashMessage, setFlashMessage] = useState('');
  const navigate = useNavigate();
  const { setToken, setUsername } = useLoggedStore();
  const [passwordEntries, setPasswordEntries] = useState<passwordInput>({
    password: "",
  });
  const [isError, setError] = useState<string | null>(null);

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let password = e.target.value;
    setPasswordEntries({
      ...passwordEntries,
      password: e.target.value,
    });
    setError(null);
    let caps, small, num, specialSymbol;

    if (password.length < 4) {
      setError(
          "Au moins 4 caractères requis"
      );
      return;
    } else {
      caps = (password.match(/[A-Z]/g) || []).length;
      small = (password.match(/[a-z]/g) || []).length;
      num = (password.match(/[0-9]/g) || []).length;
      specialSymbol = (password.match(/\W/g) || []).length;
      if (caps < 1) {
        setError("Majuscule requise");
        return;
      } else if (small < 1) {
        setError("Ajoutez au moins une lettre minuscule");
        return;
      } else if (num < 1) {
        setError("Ajoutez un nombre");
        return;
      } else if (specialSymbol < 1) {
        setError("Ajoutez un symbol: @$! % * ? &");
        return;
      }
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleRegisterSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        mode: "cors",
        body: new URLSearchParams({
          ...registerData
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log("register DATA ",data)
        setFlashMessage(data.message);
        setTimeout(() => {
          setFlashMessage('');
        }, 3000);
        handleToggle();
      }
    } catch(error) {
      console.error('log failed:', error);
      setFlashMessage('Il y a eu une erreur dans la requête');
      setTimeout(() => {
        setFlashMessage('');
      }, 3000);
    }
  };

  const handleLoginSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/auth/logged', {
        method: 'POST',
        body: new URLSearchParams({
          ...formData
        })
      });
      console.log('response login ', response)
      if (response.ok) {
        console.log('réponse bien reçu');
        const data = await response.json();
        if(data.token) {
          console.log('token bien reçu ', data.token)
          setToken(data.token);
          setUsername(formData.username);
        } else {
          setToken('');
        }
        navigate(data.redirect)
        // setFlashMessage(data.message);
        setTimeout(() => {
          setFlashMessage('');
        }, 3000);
      
      } else {
        const errorData = await response.json(); 
        setFlashMessage(`${errorData.message}`);
        setTimeout(() => {
          setFlashMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('log failed:', error);
      setFlashMessage('Il y a eu une erreur dans la requête');

      setTimeout(() => {
        setFlashMessage( `${error}`);
      }, 3000);
    }
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    if(e.target.name === "password") {
      onPasswordChange(e);
    }

    setRegisterData(prevState => {
        return {
            ...prevState,
           
            [e.target.name]: e.target.value
        }
    }) 
}

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => {
        return {
            ...prevState,
            
            [e.target.name]: e.target.value
        }
    }) 
}

return (
  <main className="page-connexion">
    <div className="outer-connexion">
      {flashMessage && <div className="output-message">{flashMessage}</div>}
      <div className="inner-connexion">

        {!toggle ? (
          <div className="container-inscription">
            <form className="form-container" onSubmit={handleRegisterSubmit} method="post">
              <div className="form-elem">
                <label htmlFor="username-register"></label>
                <input type="text" name="username" id="username-register" placeholder="Votre pseudo" onChange={handleRegisterChange} required  />
              </div>
              <div className="form-elem">
                <label htmlFor="password-register"></label>
                <input type="text" name="password" id="password-register" placeholder="Choisir un mot de passe" onChange={handleRegisterChange} required />
                {isError && <p className={"output-message"}>{isError}</p>}
              </div>
             
              <div className="form-elem">
                <button className="button-container" type="submit">Créer son compte</button>
              </div>
              <div className="form-elem">
                <p> Déjà inscris ?
                 <span className="to-connexion-link" onClick={handleToggle}> Se connecter</span></p>
              </div>
            </form>
          </div>
        ) : (
          <div className="container-connexion">
            <div className="form-container">
              <form id="login-form" method="post" onSubmit={handleLoginSubmit}>
                <div className="form-elem">
                  <label htmlFor="username" className="connexion__username"></label>
                  <input type="text" name="username" id="username" placeholder="Votre pseudo" onChange={handleChange} required />
                </div>
                <div className="form-elem">
                  <input type="text" name="password" id="password" placeholder="Mot de passe" onChange={handleChange} required />
                </div>
                <div className="form-elem">
                  <button type="submit" className="button-container">Se connecter</button>
                </div>
                <div className="form-elem">
                <p>
                  <span className="to-connexion-link" onClick={handleToggle}>Créer son compte</span>
                </p>
              </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  </main>
);
};

export default Connexion;