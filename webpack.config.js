var UglifyJsPlugin = require('./node_modules/webpack/lib/optimize/UglifyJsPlugin.js')
module.exports = {
	entry: {
		index: './index.js'
	},
	output: {
		path: './dist/',
		filename: '[name].min.js',
		library: ["M"],
		libraryTarget: "umd"
	},
	plugins: [
		new UglifyJsPlugin({
			mangle: {
		        except: ['$super', '$', 'exports', 'require']
		    },
		    compress: {
		    	drop_console: true
		    }
		})
	]
}