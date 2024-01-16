# Frontend du chat fait avec chatTalks repository as backend

## Site en ligne
####  Pour voir le site en ligne <a href="https://chat-talks-client.vercel.app">cliquer ici</a>
(site en cours de développement) 

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

  Vous pouvez donc utiliser les commande make sur votre terminal dans windows.

- Démarrer l'environnement de dévelopmement avec docker
  ```
  make first
  ```
  Cela va démarer le docker compose up -d suivi des commande permettant le hot reloading.

  Vous pourrez alors travailler avec un hot relaod tout en bénéficiant de la contenairisation.

  Si make ne marche pas:

  1/ Démarrer le container
  ```
  docker-compose up --build --no-recreate -d
  ```
  PS: les autres fois cette commande est suffisante : ``` docker compose up -d ```

  2/ Envoyer à docker les bonnes commandes pour le dev

- Vérifier avec un ``` docker-compose ps ``` que le nom du container c'est toujours vite-docker
  
  ``` docker exec -it vite_docker sh ```

- Une fois dans le container : ``` npm i && npm run dev ```

- Si nécessaire, ajouter un .env avec : (A compléter)

- Avant ou aprés vous devez avoir démarrer le backend et vérifier la validité des ports
    
    
## Ce repo a été construit avec Vite + React + TypeScript - voici la doc:

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
