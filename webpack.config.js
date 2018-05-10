var path = require('path');
process.env.BABEL_ENV = 'development'
module.exports = {
	entry: './public/assets/js/app.js',
	output: {
	    path: path.resolve(__dirname, "./public/assets/dist"),
	    filename: 'bundle.js'
    },
    module:{
    	loaders:[
    	{	exclude: /node_modules/ ,
			test: /\.js$/,
			loader: "babel-loader",
			query: {
                  presets: ['es2015', "stage-1", 'react'],
                  plugins: [
                    "transform-decorators-legacy"
                  ]
                } 
    	}]
    }
}; 