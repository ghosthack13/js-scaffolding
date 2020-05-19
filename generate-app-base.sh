
# sudo chmod u+x generate-app-base.sh

npm init -y

#Create directory structure
# mkdir public src dist
# touch ./src/index.js

npm install express
npm install --save-dev nodemon


# --------------------------- Install Webpack and Plugins ---------------------
#Install Webpack Tools
npm install --save-dev webpack webpack-cli
npm install --save-dev webpack-dev-server
npm install --save-dev webpack-dev-middleware webpack-hot-middleware
npm install --save-dev webpack-merge

#Install Webpack Plugins
npm install --save-dev html-webpack-plugin  # Simplifies creation of HTML files to serve your bundles
npm install --save-dev clean-webpack-plugin	# Remove files not used by project

npm install --save-dev css-loader	#parses the CSS into JavaScript and resolves any dependencies
npm install --save-dev style-loader	#outputs our CSS into a <style> tag in the HTML document

npm install --save-dev file-loader
npm install --save-dev csv-loader xml-loader
npm install --save-dev babel-loader


# --------------------------- Install Babel ---------------------
#Install Bable and common Presets
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save-dev @babel/plugin-proposal-class-properties
npm install --save @babel/polyfill core-js


# --------------------------- Install React ---------------------
#install React and its Babel Preset
npm install react react-dom
npm install react-router-dom
npm install --save-dev react-hot-loader
npm install --save-dev @babel/preset-react

