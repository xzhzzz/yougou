requirejs.config({
	paths:{
		"jquery":"../lib/jquery-3.1.1",
		"jqueryUi":"../lib/jquery-ui-1.12.1.custom/jquery-ui",
		"jqueryFdj":"../lib/jq-zoom/fdzoom",
		"jquerycookie":"../lib/jquery.cookie",
		"commom":"../lib/common"
	},
	shim:{
		"jqueryUi":["jquery"],
		"jqueryFdj":["jquery"],
		"jquerycookie":["jquery"]
	}
});