
# sudo chmod u+x generate-app-base.sh

#npm init -y

#Create directory structure
#mkdir -p config dist src/{components, models, pages, routes, services}
#mv index.template.html index.js src/pages/
#touch ./src/index.js

npm install mysql2
npm install express
npm install --save-dev eslint
npm install --save-dev nodemon

# --------------------------- Install Webpack and Plugins/Loaders ---------------------
#Install Core Webpack Tools
npm install --save-dev webpack webpack-cli
npm install --save-dev webpack-dev-server
npm install --save-dev webpack-dev-middleware webpack-hot-middleware
npm install --save-dev webpack-merge	#Used to merge configs

#Install Webpack Plugins
npm install --save-dev html-webpack-plugin  # Simplifies creation of HTML files to serve your bundles
npm install --save-dev clean-webpack-plugin	# Remove files not used by project

#Install Webpack Loaders
npm install --save-dev css-loader	#parses the CSS into JavaScript and resolves any dependencies
npm install --save-dev style-loader	#outputs our CSS into a <style> tag in the HTML document

npm install --save-dev file-loader
npm install --save-dev csv-loader xml-loader
npm install --save-dev babel-loader


# --------------------------- Install Babel ---------------------
#Install Bable and common Presets
npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/preset-env @babel/preset-react
npm install --save-dev @babel/plugin-proposal-class-properties
npm install --save core-js
# npm install @babel/polyfill #-- Deprecated as of Babel 7.4.0 inn favor of core-js


# --------------------------- Install React ---------------------
#install React and its Babel Preset
npm install react react-dom react-router-dom
npm install --save-dev react-refresh
npm install --save-dev react-hot-loader
npm install --save-dev eslint-plugin-react
npm install --save-dev eslint-plugin-react-hooks
npm install --save-dev @babel/preset-react
npm install --save-dev @babel/plugin-transform-react-jsx-source #Shows line numbers in error boundaries, Disable in Production
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
npm install --save-dev @pmmmwh/react-refresh-webpack-plugin

