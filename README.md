# "ChatTalks" - Savez-vous parler le chat ?


<div align="center">
  <img height=50 width=50 src="./public/chat-icon.svg"/>
</div>

## Site en ligne
####  Pour voir le site en ligne <a href="https://chat-talks-client.vercel.app">cliquer ici</a>

Evaluation pour le cour de HETIC WEB3 - SOLUTION FRONT 

### Equipe conceptrice: 
- [Amaury](https://github.com/ExploryKod) 
- [Nassim](https://github.com/NasssDev)
- [Ashraf](https://github.com/Achkey)
- [Maxime](https://github.com/Jylt-wNz)
- [Khalifa Dione](https://github.com/khalifadione)

Ce repo est la partie frontend du site web. Il y a aussi le backend qui se situe sur un autre repository.

Lien vers l'API backend en ligne : <a href="https://go-chat-docker.onrender.com">cliquez ici</a>

Lien vers le repo de l'API en ligne (branch main) : https://github.com/ExploryKod/go-chat-docker 

Lien vers le repository du backend (site de test local) : https://github.com/ExploryKod/chatTalksDocker

Lien vers le repo de l'application mobile : [Consulter](https://github.com/ExploryKod/chatTalksMobile)

## Installation en local 

Créer un fichier .env à la racine et copier ce code en changeant les données :
```
REACT_APP_SERVER_PORT=8000
REACT_APP_SERVER_PORT_PROD=8000
VITE_SITE_URL_HTTP="https://go-chat-docker.onrender.com"
VITE_SITE_URL_WS="wss://go-chat-docker.onrender.com"
VITE_SITE_FRONT="https://chat-talks-client.vercel.app"
```

## Commands to start

- Pour développer : aller sur la branch dev
  ```
  git checkout dev
  ```
- Créer une branche de feature ou aller sur une branche existante
  ```
  git checkout -b feature/monnomdebranch
  ```
- Assurez-vous d'avoir accés aux commandes de make : un utilitaire pour executer le script du Makefile.
 
  Sur Windows il n'est pas nativement installé
  > Si vous avez chocolatey : choco install make 
  Info si pas de chocolatey : https://earthly.dev/blog/makefiles-on-windows/

  > Sinon : https://gnuwin32.sourceforge.net/packages/make.html

  **Vous pouvez donc utiliser les commande make sur votre terminal dans windows.**
  

- Démarrer l'environnement de dévelopmement (avec hot reloading) avec docker mais effectue `docker compose down` avant :
  ```make
  make first
  ```
- Démarrer les conteneur et le hot reloading dans docker sans `docker compose down` :
  ```make
    make uppy
  ```

  
  Cela va démarer le docker compose up -d suivi des commande permettant le hot reloading.

  Vous pourrez alors travailler avec un hot relaod tout en bénéficiant de la contenairisation.

  >**Si make ne marche pas:**

  #### 1/ Démarrer le container
  ```
  docker-compose up --build --no-recreate -d
  ```
  PS: les autres fois cette commande est suffisante : ``` docker compose up -d ```

  #### 2/ Envoyer à docker les bonnes commandes pour le dev

- Vérifier avec un ``` docker-compose ps ``` que le nom du container c'est toujours vite-docker
  
  ``` docker exec -it vite_docker sh ```

- Une fois dans le container : ``` npm i && npm run dev ```

- Avant ou aprés vous devez avoir démarrer le backend et vérifier la validité des ports
