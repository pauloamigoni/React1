/* Inicia o projeto */
yarn init -y 

/* Instalando o React */
yarn add react

/* Instalando o React Dom para manipular a DOM do Browser, é o que manipula as ações */
yarn add react-dom

/* Babel - Transpilador do React para JS */
yarn add @babel/core @babel/cli @babel/preset-env -D

/* Utilizando a CLI do Babel*/
yarn babel src/index.js --out-file dist/bundle.js

/* Babel para conseguir ler código react*/
yarn add @babel/preset-react -D

/* Compilar*/
yarn babel src/index.jsx --out-file dist/bundle.js

/* WebPack - Instalação - faz importações de CSS / Imagens / SASS / LESS - Qualquer tipo de arquivos - Faz as conversões que sejam legivel para o Browser */
yarn add webpack webpack-cli webpack-dev-server -D

/* Instalar o Babel Loader  para que seja usado dentro do webpack.config.js  - Faz a integração entre o Babel e  o WebPack */
yarn add babel-loader -D

/* Executar a aplicação */
yarn webpack

yarn add html-webpack-plugin -D

/* ========= ESTRUTURA ======== */

/* SOURCE MAP */
NODE_ENV=production yarn webpack

yarn add cross-env -D

yarn add style-loader css-loader -D

/* Compilador CSS */
yarn add node-sass -D 
yarn add sass-loader -D

yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh