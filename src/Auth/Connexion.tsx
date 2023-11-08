import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoggedStore } from '../StateManager/userStore';
import useFlashMessage from '../Hook/useFlashMessage';
import '../Styles/_flashMessage.scss';
import { usePasswordMeter } from "../Hook/usePasswordMeter.tsx";


const Connexion = () => {
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({password: "", username: ""})
  const [registerData, setRegisterData] = useState({username: "", password: ""})
  const { flashMessage, setFlashMessage, toastMessage } = useFlashMessage('')
  const navigate = useNavigate();
  const { setToken, setUsername } = useLoggedStore();
  const { isError, onPasswordChange } = usePasswordMeter()

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
          setFlashMessage({alert: "", name: 'alert'});
        }, 3000);
        handleToggle();
      } else if (response.status !== 500) {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        setFlashMessage({alert: errorData.message, name: 'alert'});
        setTimeout(() => {
          setFlashMessage({alert: "", name: 'alert'});
        }, 3000);
      }
    } catch(error) {
      console.error('log failed:', error);
      setFlashMessage({alert: 'Il y a eu une erreur dans la requête', name: 'alert'});
      setTimeout(() => {
        setFlashMessage({alert: "", name: 'alert'});
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
      } else {
        const errorData = await response.json();
        toastMessage(errorData.message);
      }
    } catch (error) {
      console.error('log failed:', error);
      toastMessage(`Mot de passe et/ou identifiant incorrect`);
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
      {(flashMessage && flashMessage.alert != "") && <div className="output-message padding-5 width-50">{flashMessage.alert}</div>}
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