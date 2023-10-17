import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoggedStore } from '../StateManager/userStore';

interface Session {
  session?: boolean;
}

const Connexion = () => {
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({password: "", username: ""})
  const [registerData, setRegisterData] = useState({username: "", password: ""})
  const [flashMessage, setFlashMessage] = useState('');
  const [sessionStatus, setSessionStatus] = useState<Session>({});
  const navigate = useNavigate();
  const { setLogged } = useLoggedStore();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleRegisterSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        body: new URLSearchParams({
          ...registerData
        })
      });

      if (response.ok) {
        console.log('réponse register bien reçu');
        const data = await response.json();
        console.log(data)
        setFlashMessage(data.message);
        setTimeout(() => {
          setFlashMessage('');
        }, 3000);
        handleToggle();
       
      } else {
        console.log('échec de la réponse register');
      }

    } catch(error) {
      console.error('log failed:', error);
      setFlashMessage('Il y a eu une erreur dans la requête');
      setTimeout(() => {
        setFlashMessage('');
      }, 3000);
    }
  };


//   useEffect(() => {
//     const fetchSessionStatus = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/auth/session');
//         if (response.ok) {
//           const data = await response.json();
//           setSessionStatus({data});
//         } else {
//           console.error('Error fetching images:', response.status);
//         }
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchSessionStatus();
//   }, []);

  useEffect(() => {
    setSessionStatus({session: false});
  }, []);

  
  // console.log(sessionStatus);
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
          setLogged(true);
        } else {
          setLogged(false);
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
        setFlashMessage('');
      }, 3000);
    }
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
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
    {!sessionStatus.session ? ( 
    <div className="outer-connexion">
      <div className="inner-connexion">
      {flashMessage && <div className="output-message x-center-position">{flashMessage}</div>}
        {toggle ? (
          <div className="container-inscription">
            <form className="form-container" onSubmit={handleRegisterSubmit} method="post">
              <div className="form-elem">
                <label htmlFor="username-register"></label>
                <input type="text" name="username" id="username-register" placeholder="Votre pseudo" onChange={handleRegisterChange} required  />
              </div>
              <div className="form-elem">
                <label htmlFor="password-register"></label>
                <input type="text" name="password" id="password-register" placeholder="Choisir un mot de passe" onChange={handleRegisterChange} required />
              </div>
             
              <div className="form-elem">
                <button className="btn-1" type="submit">Créer son compte</button>
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
                  <button type="submit" className="btn-1">Se connecter</button>
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
    ): (<div className="no-session">Vous êtes déjà connecté</div>)}
  </main>
);
};

export default Connexion;