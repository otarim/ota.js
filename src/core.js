var dom = require('./dom'),
	event = require('./event'),
	util = require('./util'),
	ajax = require('./ajax'),
	storage = require('./storage')
require('./style')
require('./animate')
;(function(mods){
	util.each(mods,function(mod){
		util.extend(exports,mod)
	})
})([dom,event,util,ajax,storage])
exports.version = '1.0'
exports.author = 'otarim'
