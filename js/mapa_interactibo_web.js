(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ver_rafael = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#611F5B").s().p("AgUAxQgHgBgGgDIAAgWQAGAFAHADQAHADAIgBIAGgBIAFgBIAEgDIABgFQAAgCgCgCIgFgFIgGgDIgIgEQgLgFgGgGQgFgHgBgKQAAgHADgFQAEgGAFgEQAFgDAHgCQAHgCAHABIAOAAQAFABAFACIAAAVIgFgEIgGgCIgGgBIgGAAIgGABIgFABIgDADIgBAFQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAIADAEIAGADIAHAEIALAFQAEACAEADQADAEACAEQABAFAAAGQAAAHgDAGQgDAGgFADQgGAEgGABQgHACgIgBIgPgBg");
	this.shape.setTransform(29,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#611F5B").s().p("AAZBAIgIgWIgiAAIgGAWIgYAAIAkhgIAZAAIAjBggAgBgHIgLAgIAZAAIgLgfIgCgJIAAAAQAAAEgBAEgAgOgpIARgXIATAAIgWAXg");
	this.shape_1.setTransform(20.1,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#611F5B").s().p("AAiAxIAAg6IABgVIgBAAIgCAOIgYBBIgRAAIgXhBIgDgOIgBAAIABAaIAAA1IgUAAIAAhhIAhAAIATA5IADAOIAAAAIAFgOIATg5IAgAAIAABhg");
	this.shape_2.setTransform(8.5,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#611F5B").s().p("AAQAxIgPgZIgDgFIgDgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgEgBIgGAAIAAAlIgWAAIAAhhIAjAAQAjAAAAAaQAAAGgCAEQgBAEgDAEIgHAFIgJAEIAEACIAEAEIAEAEIADAFIASAdgAgSgEIAKAAQAHAAADgFQAEgDAAgHQAAgNgOABIgKAAg");
	this.shape_3.setTransform(-6,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#611F5B").s().p("AgdAxIAAhhIA4AAIAAASIghAAIAAAWIAfAAIAAAQIgfAAIAAAXIAjAAIAAASg");
	this.shape_4.setTransform(-14.6,-0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#611F5B").s().p("AgMAxIghhhIAYAAIAUBDIABAKIABAAIACgKIAUhDIAXAAIgiBhg");
	this.shape_5.setTransform(-23.4,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#611F5B").ss(3).p("AMIDYI4PAAIAAmvIYPAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5E0EE").s().p("AgUAxQgHgBgGgDIAAgWQAGAFAHADQAHADAIgBIAGgBIAFgBIAEgDIABgFQAAgCgCgCIgFgFIgGgDIgIgEQgLgFgGgGQgFgHgBgKQAAgHADgFQAEgGAFgEQAFgDAHgCQAHgCAHABIAOAAQAFABAFACIAAAVIgFgEIgGgCIgGgBIgGAAIgGABIgFABIgDADIgBAFQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAIADAEIAGADIAHAEIALAFQAEACAEADQADAEACAEQABAFAAAGQAAAHgDAGQgDAGgFADQgGAEgGABQgHACgIgBIgPgBg");
	this.shape_7.setTransform(29,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B5E0EE").s().p("AAZBAIgIgWIgiAAIgGAWIgYAAIAkhgIAZAAIAjBggAgBgHIgLAgIAZAAIgLgfIgCgJIAAAAQAAAEgBAEgAgOgpIARgXIATAAIgWAXg");
	this.shape_8.setTransform(20.1,-2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B5E0EE").s().p("AAiAxIAAg6IABgVIgBAAIgCAOIgYBBIgRAAIgXhBIgDgOIgBAAIABAaIAAA1IgUAAIAAhhIAhAAIATA5IADAOIAAAAIAFgOIATg5IAgAAIAABhg");
	this.shape_9.setTransform(8.5,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5E0EE").s().p("AAQAxIgPgZIgDgFIgDgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgEgBIgGAAIAAAlIgWAAIAAhhIAjAAQAjAAAAAaQAAAGgCAEQgBAEgDAEIgHAFIgJAEIAEACIAEAEIAEAEIADAFIASAdgAgSgEIAKAAQAHAAADgFQAEgDAAgHQAAgNgOABIgKAAg");
	this.shape_10.setTransform(-6,-0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5E0EE").s().p("AgdAxIAAhhIA4AAIAAASIghAAIAAAWIAfAAIAAAQIgfAAIAAAXIAjAAIAAASg");
	this.shape_11.setTransform(-14.6,-0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5E0EE").s().p("AgMAxIghhhIAYAAIAUBDIABAKIABAAIACgKIAUhDIAXAAIgiBhg");
	this.shape_12.setTransform(-23.4,-0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#611F5B").s().p("AsHDYIAAmvIYPAAIAAGvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-23.1,158.1,46.3);


(lib.ver_palacio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#611F5B").s().p("AgUAxQgHgBgGgDIAAgWQAGAFAHADQAHADAIgBIAGgBIAFgBIAEgDIABgFQAAgCgCgCIgFgFIgGgDIgIgEQgLgFgGgGQgFgHgBgKQAAgHADgFQAEgGAFgEQAFgDAHgCQAHgCAHABIAOAAQAFABAFACIAAAVIgFgEIgGgCIgGgBIgGAAIgGABIgFABIgDADIgBAFQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAIADAEIAGADIAHAEIALAFQAEACAEADQADAEACAEQABAFAAAGQAAAHgDAGQgDAGgFADQgGAEgGABQgHACgIgBIgPgBg");
	this.shape.setTransform(29,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#611F5B").s().p("AAZBAIgIgWIgiAAIgGAWIgYAAIAkhgIAZAAIAjBggAgBgHIgLAgIAZAAIgLgfIgCgJIAAAAQAAAEgBAEgAgOgpIARgXIATAAIgWAXg");
	this.shape_1.setTransform(20.1,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#611F5B").s().p("AAiAxIAAg6IABgVIgBAAIgCAOIgYBBIgRAAIgXhBIgDgOIgBAAIABAaIAAA1IgUAAIAAhhIAhAAIATA5IADAOIAAAAIAFgOIATg5IAgAAIAABhg");
	this.shape_2.setTransform(8.5,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#611F5B").s().p("AAQAxIgPgZIgDgFIgDgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgEgBIgGAAIAAAlIgWAAIAAhhIAjAAQAjAAAAAaQAAAGgCAEQgBAEgDAEIgHAFIgJAEIAEACIAEAEIAEAEIADAFIASAdgAgSgEIAKAAQAHAAADgFQAEgDAAgHQAAgNgOABIgKAAg");
	this.shape_3.setTransform(-6,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#611F5B").s().p("AgdAxIAAhhIA4AAIAAASIghAAIAAAWIAfAAIAAAQIgfAAIAAAXIAjAAIAAASg");
	this.shape_4.setTransform(-14.6,-0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#611F5B").s().p("AgMAxIghhhIAYAAIAUBDIABAKIABAAIACgKIAUhDIAXAAIgiBhg");
	this.shape_5.setTransform(-23.4,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#611F5B").ss(3).p("AMIDYI4PAAIAAmvIYPAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5E0EE").s().p("AgUAxQgHgBgGgDIAAgWQAGAFAHADQAHADAIgBIAGgBIAFgBIAEgDIABgFQAAgCgCgCIgFgFIgGgDIgIgEQgLgFgGgGQgFgHgBgKQAAgHADgFQAEgGAFgEQAFgDAHgCQAHgCAHABIAOAAQAFABAFACIAAAVIgFgEIgGgCIgGgBIgGAAIgGABIgFABIgDADIgBAFQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAIADAEIAGADIAHAEIALAFQAEACAEADQADAEACAEQABAFAAAGQAAAHgDAGQgDAGgFADQgGAEgGABQgHACgIgBIgPgBg");
	this.shape_7.setTransform(29,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B5E0EE").s().p("AAZBAIgIgWIgiAAIgGAWIgYAAIAkhgIAZAAIAjBggAgBgHIgLAgIAZAAIgLgfIgCgJIAAAAQAAAEgBAEgAgOgpIARgXIATAAIgWAXg");
	this.shape_8.setTransform(20.1,-2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B5E0EE").s().p("AAiAxIAAg6IABgVIgBAAIgCAOIgYBBIgRAAIgXhBIgDgOIgBAAIABAaIAAA1IgUAAIAAhhIAhAAIATA5IADAOIAAAAIAFgOIATg5IAgAAIAABhg");
	this.shape_9.setTransform(8.5,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5E0EE").s().p("AAQAxIgPgZIgDgFIgDgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgEgBIgGAAIAAAlIgWAAIAAhhIAjAAQAjAAAAAaQAAAGgCAEQgBAEgDAEIgHAFIgJAEIAEACIAEAEIAEAEIADAFIASAdgAgSgEIAKAAQAHAAADgFQAEgDAAgHQAAgNgOABIgKAAg");
	this.shape_10.setTransform(-6,-0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5E0EE").s().p("AgdAxIAAhhIA4AAIAAASIghAAIAAAWIAfAAIAAAQIgfAAIAAAXIAjAAIAAASg");
	this.shape_11.setTransform(-14.6,-0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5E0EE").s().p("AgMAxIghhhIAYAAIAUBDIABAKIABAAIACgKIAUhDIAXAAIgiBhg");
	this.shape_12.setTransform(-23.4,-0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#611F5B").s().p("AsHDYIAAmvIYPAAIAAGvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-23.1,158.1,46.3);


(lib.ver_gonzalo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#611F5B").s().p("AgUAxQgHgBgGgDIAAgVQAGAFAHACQAHADAIAAIAGgBIAFgDIAEgDIABgDQAAgEgCgCIgFgEIgGgEIgIgDQgLgFgGgGQgFgHgBgJQAAgIADgGQAEgFAFgEQAFgEAHgBQAHgCAHAAIAOABQAFABAFACIAAAUIgFgCIgGgDIgGgBIgGgBIgGABIgFADIgDADIgBADQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIADADIAGAEIAHADIALAGQAEACAEADQADADACAFQABAFAAAFQAAAIgDAHQgDAFgFAEQgGADgGABQgHACgIAAIgPgCg");
	this.shape.setTransform(29,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#611F5B").s().p("AAZBBIgIgXIgiAAIgGAXIgYAAIAkhiIAZAAIAjBigAgBgGIgLAgIAZAAIgLggIgCgJIAAAAQAAAFgBAEgAgOgqIARgVIATAAIgWAVg");
	this.shape_1.setTransform(20.1,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#611F5B").s().p("AAiAxIAAg5IABgVIgBAAIgCAMIgYBCIgRAAIgXhBIgDgNIgBAAIABAZIAAA1IgUAAIAAhhIAhAAIATA5IADAOIAAAAIAFgOIATg5IAgAAIAABhg");
	this.shape_2.setTransform(8.5,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#611F5B").s().p("AAQAxIgPgZIgDgGIgDgDQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBIgEgBIgGAAIAAAmIgWAAIAAhhIAjAAQAjAAAAAaQAAAGgCAEQgBAEgDAEIgHAFIgJAEIAEADIAEADIAEAFIADAEIASAdgAgSgEIAKAAQAHAAADgEQAEgEAAgGQAAgOgOAAIgKAAg");
	this.shape_3.setTransform(-6,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#611F5B").s().p("AgdAxIAAhhIA4AAIAAASIghAAIAAAWIAfAAIAAARIgfAAIAAAWIAjAAIAAASg");
	this.shape_4.setTransform(-14.6,-0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#611F5B").s().p("AgMAxIghhhIAYAAIAUBDIABAKIABAAIACgKIAUhDIAXAAIgiBhg");
	this.shape_5.setTransform(-23.4,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#611F5B").ss(3).p("AMIDYI4PAAIAAmvIYPAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5E0EE").s().p("AgUAxQgHgBgGgDIAAgVQAGAFAHACQAHADAIAAIAGgBIAFgDIAEgDIABgDQAAgEgCgCIgFgEIgGgEIgIgDQgLgFgGgGQgFgHgBgJQAAgIADgGQAEgFAFgEQAFgEAHgBQAHgCAHAAIAOABQAFABAFACIAAAUIgFgCIgGgDIgGgBIgGgBIgGABIgFADIgDADIgBADQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIADADIAGAEIAHADIALAGQAEACAEADQADADACAFQABAFAAAFQAAAIgDAHQgDAFgFAEQgGADgGABQgHACgIAAIgPgCg");
	this.shape_7.setTransform(29,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B5E0EE").s().p("AAZBBIgIgXIgiAAIgGAXIgYAAIAkhiIAZAAIAjBigAgBgGIgLAgIAZAAIgLggIgCgJIAAAAQAAAFgBAEgAgOgqIARgVIATAAIgWAVg");
	this.shape_8.setTransform(20.1,-2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B5E0EE").s().p("AAiAxIAAg5IABgVIgBAAIgCAMIgYBCIgRAAIgXhBIgDgNIgBAAIABAZIAAA1IgUAAIAAhhIAhAAIATA5IADAOIAAAAIAFgOIATg5IAgAAIAABhg");
	this.shape_9.setTransform(8.5,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5E0EE").s().p("AAQAxIgPgZIgDgGIgDgDQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBIgEgBIgGAAIAAAmIgWAAIAAhhIAjAAQAjAAAAAaQAAAGgCAEQgBAEgDAEIgHAFIgJAEIAEADIAEADIAEAFIADAEIASAdgAgSgEIAKAAQAHAAADgEQAEgEAAgGQAAgOgOAAIgKAAg");
	this.shape_10.setTransform(-6,-0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5E0EE").s().p("AgdAxIAAhhIA4AAIAAASIghAAIAAAWIAfAAIAAARIgfAAIAAAWIAjAAIAAASg");
	this.shape_11.setTransform(-14.6,-0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5E0EE").s().p("AgMAxIghhhIAYAAIAUBDIABAKIABAAIACgKIAUhDIAXAAIgiBhg");
	this.shape_12.setTransform(-23.4,-0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#611F5B").s().p("AsHDYIAAmvIYPAAIAAGvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-23.1,158.1,46.3);


(lib.ver_gaitan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#611F5B").s().p("AgUAxQgHgBgGgDIAAgVQAGAFAHACQAHADAIAAIAGgBIAFgDIAEgDIABgDQAAgEgCgCIgFgEIgGgEIgIgDQgLgFgGgGQgFgHgBgJQAAgIADgGQAEgFAFgEQAFgEAHgBQAHgCAHAAIAOABQAFABAFACIAAAUIgFgCIgGgDIgGgBIgGgBIgGABIgFADIgDADIgBADQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIADADIAGAEIAHADIALAGQAEACAEADQADADACAFQABAFAAAFQAAAIgDAHQgDAFgFAEQgGADgGABQgHACgIAAIgPgCg");
	this.shape.setTransform(29,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#611F5B").s().p("AAZBBIgIgXIgiAAIgGAXIgYAAIAkhiIAZAAIAjBigAgBgGIgLAgIAZAAIgLggIgCgJIAAAAQAAAFgBAEgAgOgqIARgVIATAAIgWAVg");
	this.shape_1.setTransform(20.1,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#611F5B").s().p("AAiAxIAAg5IABgVIgBAAIgCAMIgYBCIgRAAIgXhBIgDgNIgBAAIABAZIAAA1IgUAAIAAhhIAhAAIATA5IADAOIAAAAIAFgOIATg5IAgAAIAABhg");
	this.shape_2.setTransform(8.5,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#611F5B").s().p("AAQAxIgPgZIgDgGIgDgDQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBIgEgBIgGAAIAAAmIgWAAIAAhhIAjAAQAjAAAAAaQAAAGgCAEQgBAEgDAEIgHAFIgJAEIAEADIAEADIAEAFIADAEIASAdgAgSgEIAKAAQAHAAADgEQAEgEAAgGQAAgOgOAAIgKAAg");
	this.shape_3.setTransform(-6,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#611F5B").s().p("AgdAxIAAhhIA4AAIAAASIghAAIAAAWIAfAAIAAARIgfAAIAAAWIAjAAIAAASg");
	this.shape_4.setTransform(-14.6,-0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#611F5B").s().p("AgMAxIghhhIAYAAIAUBDIABAKIABAAIACgKIAUhDIAXAAIgiBhg");
	this.shape_5.setTransform(-23.4,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#611F5B").ss(3).p("AMIDYI4PAAIAAmvIYPAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5E0EE").s().p("AgUAxQgHgBgGgDIAAgVQAGAFAHACQAHADAIAAIAGgBIAFgDIAEgDIABgDQAAgEgCgCIgFgEIgGgEIgIgDQgLgFgGgGQgFgHgBgJQAAgIADgGQAEgFAFgEQAFgEAHgBQAHgCAHAAIAOABQAFABAFACIAAAUIgFgCIgGgDIgGgBIgGgBIgGABIgFADIgDADIgBADQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIADADIAGAEIAHADIALAGQAEACAEADQADADACAFQABAFAAAFQAAAIgDAHQgDAFgFAEQgGADgGABQgHACgIAAIgPgCg");
	this.shape_7.setTransform(29,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B5E0EE").s().p("AAZBBIgIgXIgiAAIgGAXIgYAAIAkhiIAZAAIAjBigAgBgGIgLAgIAZAAIgLggIgCgJIAAAAQAAAFgBAEgAgOgqIARgVIATAAIgWAVg");
	this.shape_8.setTransform(20.1,-2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B5E0EE").s().p("AAiAxIAAg5IABgVIgBAAIgCAMIgYBCIgRAAIgXhBIgDgNIgBAAIABAZIAAA1IgUAAIAAhhIAhAAIATA5IADAOIAAAAIAFgOIATg5IAgAAIAABhg");
	this.shape_9.setTransform(8.5,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5E0EE").s().p("AAQAxIgPgZIgDgGIgDgDQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBIgEgBIgGAAIAAAmIgWAAIAAhhIAjAAQAjAAAAAaQAAAGgCAEQgBAEgDAEIgHAFIgJAEIAEADIAEADIAEAFIADAEIASAdgAgSgEIAKAAQAHAAADgEQAEgEAAgGQAAgOgOAAIgKAAg");
	this.shape_10.setTransform(-6,-0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5E0EE").s().p("AgdAxIAAhhIA4AAIAAASIghAAIAAAWIAfAAIAAARIgfAAIAAAWIAjAAIAAASg");
	this.shape_11.setTransform(-14.6,-0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5E0EE").s().p("AgMAxIghhhIAYAAIAUBDIABAKIABAAIACgKIAUhDIAXAAIgiBhg");
	this.shape_12.setTransform(-23.4,-0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#611F5B").s().p("AsHDYIAAmvIYPAAIAAGvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-23.1,158.1,46.3);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1UVVMAAAgqpMAqpAAAMAAAAqpg");
	mask.setTransform(159.3,152.4);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C1B3D").s().p("AgJAZIgFgjIAGgdQAEgQASAAQABAKgIAtQgHAiAOAWQgVgJgCgWg");
	this.shape.setTransform(256.5,81.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#742E7B").s().p("AgBgFIADAHIgDAEg");
	this.shape_1.setTransform(278.2,235.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C2B72").s().p("AAFgMIAAAZQgTgNATgMg");
	this.shape_2.setTransform(246.2,94.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#63225A").s().p("AgjALQgRgXAegNIAhAAQAUAAALANIgcAmg");
	this.shape_3.setTransform(256.5,103.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#712C77").s().p("AgLAwQgOgbADgbQADgcATgaIAYAAIAAA9QgdANAQAYQgDAQgFAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQgFAAgGgNg");
	this.shape_4.setTransform(251.8,100.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#742E7B").s().p("AgLAKQgHgKgTgrIBLAAIAAAZQgUAMAUAMIAAAmQgggGgRgcg");
	this.shape_5.setTransform(242.9,95.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E3286").s().p("AgEgHIABAAIAIAMIgEAEg");
	this.shape_6.setTransform(233.3,107.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#712C77").s().p("AgCAIQgFgIAMgHIAAALIgHAEIAAAAg");
	this.shape_7.setTransform(179.7,87.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#742E7B").s().p("AgSgSQAjACACAjQgjgCgCgjg");
	this.shape_8.setTransform(173.3,87.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#782F7E").s().p("AAFgMIAAAZQgTgNATgMg");
	this.shape_9.setTransform(241.2,84.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#782F7E").s().p("AgngMQAHgEAaAHQAVAGAHgWQAWADADARQACAIgBAWIg+AAIgOABQggAAAVgmg");
	this.shape_10.setTransform(240.6,88.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#68296D").s().p("AgDgRQAlgIgFArIgxABQgXgbAogJg");
	this.shape_11.setTransform(251.2,70.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#742E7B").s().p("AgTgSQASgRAhAOIAMAAQAAAfgQARIhHABQALgiANgMg");
	this.shape_12.setTransform(247.3,79.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#712C77").s().p("AgEAcQgGgSgIgDIgMAAQACgWgPgaIAxgBQASgBAIAFQAMAHABARIgBANQgUAAgEAPIgGAdIgBAAQgNAAgEgPg");
	this.shape_13.setTransform(253.6,76.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#782F7E").s().p("AgVAGQgEgHACgRQAbAAAVAOIgZAXQgQgBgFgMg");
	this.shape_14.setTransform(270.4,259.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#68296D").s().p("AgKAhQABgEgLgGQgKgGAIgJIAEgEIgEgHQAGgSASgIQAFABAGgLQAFgKAJAIIAABXg");
	this.shape_15.setTransform(280.3,235.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#742E7B").s().p("AgLA8IgBgMQgsgQgCgbQgDgWAcgiIAYgFQANgDAKAAQAOgBAKANIAPAWQANAPgMAGQgTAIAAACQgDAHgDAWQgTAIgHASg");
	this.shape_16.setTransform(277.7,228.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#68296D").s().p("AgCAOQgEgBgCgGIgFgLQANgUAOAUIgFANQgDAGgGAAIgCgBg");
	this.shape_17.setTransform(295.6,268);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6C2B72").s().p("AgWAcIAYg9IAMgBIAAAQQgBAJADAGQAOAigPADIgCABQgHAAgcgHg");
	this.shape_18.setTransform(291.6,271);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6C2B72").s().p("AgBgBIADgDIAAAJg");
	this.shape_19.setTransform(260.2,120.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#712C77").s().p("AgHAFQADgGADgBQADgDAHACIgEAIg");
	this.shape_20.setTransform(266.3,91.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#712C77").s().p("AAAgEIACAEIgDAFg");
	this.shape_21.setTransform(273.7,102);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#642665").s().p("AgDAiQgLgEAHgMQANgWgMgIQgTgFgGgHIAMgMIAxABIACAjQgKAFgCAMQgBAFAAAQQgRgCgFgCg");
	this.shape_22.setTransform(276.1,78.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7C3083").s().p("AgPAZIgiAAIAAg9QANALASgEIAegIQAHAJAQAOQANANACANQgMAAgIAJQgJAMgHAFQgLgNgSAAg");
	this.shape_23.setTransform(259.2,98.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#642665").s().p("AgZBHIgOgHQgEgTAOgeQgSg2AGgPQAGgOAsgHQASAFACAHQACAGgNAPQgUAYgCAHQgGARApAAQALAAABAIQABAHgGAHQgLAWgIAJQgMAQgSAAIgBABQgFAAgIgFg");
	this.shape_24.setTransform(265.8,113.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6C2B72").s().p("AAgA7IgZAAQgKgSgJgIQgNgLgSAAIgMAAQABgWgCgIQgDgRgWgDIgLABIgBgmIBUgBQAFA2AHANQAQAeAxgKQACADAPANQAKAKgBAMIgfAIIgJAAQgMAAgKgIg");
	this.shape_25.setTransform(251,88.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#63225A").s().p("AgvA6QgHgOgFg1QAQgRAAggQAIADAGASQAFAQAOgBIAFAjQADAWAUAJQgNgWAGgiQAJgtgBgKIABgNQAkASACAsIgCAkQgBAWAFAOIgqAZQgMACgJAAQgfAAgNgXg");
	this.shape_26.setTransform(256.1,82.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6C2B72").s().p("AgBgBIADgBIABAEIgFABIABgEg");
	this.shape_27.setTransform(263.6,130.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6C2B72").s().p("AgbgGIAzgMQgBADAEAQQAEAMgNAEQgKACgIAAQgXAAgEgZg");
	this.shape_28.setTransform(266.9,126.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6C2B72").s().p("AADASQgggGgMAEQAOgcAUgEQANgEAYAJQAEABAEAIQAFAHgCABQgLANgRAAIgKgBg");
	this.shape_29.setTransform(268.2,144);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#63225A").s().p("AgfARQACgLgBgGQgDgQABgGQABgMAMABQATAAAKAEQARAFAGAPQAGAPgNAEQgSADgFAEQgGAEgMAFIgTAIIADgRg");
	this.shape_30.setTransform(266.5,154.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C2B72").s().p("AgSAQQACgcATgDQAJgCAEAHIADAOIgYANg");
	this.shape_31.setTransform(273.6,164.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7E3286").s().p("AgYAJQACgzgCgZQASAZALApIAUBFQgrgRgGgqg");
	this.shape_32.setTransform(273,206.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7C3083").s().p("AgLAAIAXgLIAAAXQgRAAgGgMg");
	this.shape_33.setTransform(274.2,166);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#742E7B").s().p("AgFAGIAKgLQACAFgCAGg");
	this.shape_34.setTransform(272.3,265.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0D010A").s().p("AgIAbQgGgbgIgDIAAgUQAAgMAIgFQAHgEAGAEQAFAEADAIIgCAJIAAAJQABAJAOAUQAJARgRAGIgGABQgKAAgEgQg");
	this.shape_35.setTransform(263.8,278);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#68296D").s().p("AgBAJQgRgMgGgCQAYgTALAKQAJAHAFAaIgCAAQgMAAgMgKg");
	this.shape_36.setTransform(254.2,244.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7C3083").s().p("AgdgYIANAAQAFACARAOQAOAJANgBQgCAVgRADQgUgBgKACQgXgRAKggg");
	this.shape_37.setTransform(253.4,246.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#63225A").s().p("AgGALQgjgOgMADIABgOIBWgCQARAFACACQAFAFgPAMQgLAJgOAAQgLAAgNgGg");
	this.shape_38.setTransform(259.6,235.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#68296D").s().p("AgNAeQgFgBgWgNIAAgXQAKgCAVABQAQgDACgVQAGABAOgCQALABABAPQgPgBgGAgQgEAUgPAAQgGAAgIgEg");
	this.shape_39.setTransform(255.7,249.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7E3286").s().p("AgjAGQgBgUACgKQADgQAVgDQgBASADAHQAFAMAQACIARAMIAHAYIgLAMg");
	this.shape_40.setTransform(269.1,261.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7C3083").s().p("AgkAmQAEgIgGgXQgGgTAKgLQANgEAWgPQAVgMATAGIgBAOQgBANgYAaQgUAYAHAWg");
	this.shape_41.setTransform(250.2,238.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#712C77").s().p("AAQBXQACglgPggQgNgggcgUQgQgNACgPQAGgQgCgIIAwAJIAPAAIAAAMQgIAKAKAFQALAHgBAEQgeAXAdAZQAPANAGAJQAIAOgCAPIgeAbg");
	this.shape_42.setTransform(276.5,242.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#63225A").s().p("AAdApQgkgEgTAAQgVgPgcAAQgdhEBKAHQAMABArABIAHAAQAEAHAaAbQATATADATQgSAGgYAAIgNAAg");
	this.shape_43.setTransform(275.6,255.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#712C77").s().p("AgMACIAZgMQgDAPgEAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgEAAgKgJg");
	this.shape_44.setTransform(95,68);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#712C77").s().p("AgKgMQAPADAEADQAGAGgNANQgLgHgBgSg");
	this.shape_45.setTransform(254,223.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#712C77").s().p("AhTAOQAIgagEgKQAMgDAXgWQAVgLAPAkQAGgEABgJIAAgOIAyACQgRAaAVAMQAfARACACIAAAOIhWACQgTgGgVALQgXAQgNAEQgOgNAHgYg");
	this.shape_46.setTransform(254.4,231.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7C3083").s().p("AADgGIAAANQgMgHAMgGg");
	this.shape_47.setTransform(161.1,102.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#782F7E").s().p("AgGgGIANABIgMAMg");
	this.shape_48.setTransform(162.1,102.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7C3083").s().p("AgKAJQACgLACgDQADgHAJAEQAHADgCAFQgCAFgHAFg");
	this.shape_49.setTransform(162.5,101.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7C3083").s().p("AgvgZQAogCAnAOQARAHgBAKQgBAHgIAPQgpgPgtgkg");
	this.shape_50.setTransform(168.7,98.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6C2B72").s().p("AgHAAIADgEIAMAJg");
	this.shape_51.setTransform(179.4,144.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7E3286").s().p("AAHATIgQgQQgKgJACgMIAXANQANAIAAAQg");
	this.shape_52.setTransform(169.5,80.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7C3083").s().p("Ag5AhQgKgYgNgDIBvg+IAAAAIANANIAAANQABAiAlACQgLAXgVAJQgRAIgcgCQgOgFgGAAQgOgBgCATQgRAAgJgYg");
	this.shape_53.setTransform(167.1,88.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#742E7B").s().p("AgCANQAAgDgQgMQgLgJAPgNQAUAJAIAJQAMAMgDATIgZABg");
	this.shape_54.setTransform(180.5,85.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#68296D").s().p("AgEgMQATAMgTANg");
	this.shape_55.setTransform(220.8,95.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#68296D").s().p("AgfgaIA+AoIABALIgBABIgMABQguAAgEg1g");
	this.shape_56.setTransform(223.5,100.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6C2B72").s().p("AgTATQAKgEAFgYQADgVATAAIACAXIgOAnQgRAAgIgNg");
	this.shape_57.setTransform(268.6,166.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6C2B72").s().p("AgXAYIgBgLIAYgkIANAAIAMAYQgLgBgOANQgKALgKAAIgDAAg");
	this.shape_58.setTransform(260.5,124.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7C3083").s().p("AAEAOQgMgFgEgJQgDgGAEgEQAEgFAHACQADABAFAFIAGAHQABAHgDAEQgCADgDAAIgDAAg");
	this.shape_59.setTransform(254.8,151.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#712C77").s().p("AgJgFQAGgMAQgBQAAASgDAHQgGALgQABQAAgSADgGg");
	this.shape_60.setTransform(252.9,112.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#782F7E").s().p("AgJgOQAYgPgCARQgDAWAFAAIgLAMQgcgKAPgag");
	this.shape_61.setTransform(235.1,123.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#782F7E").s().p("AgPAIQgEgOABgMIABgOIAYANIAMAyIgXACIgLgZg");
	this.shape_62.setTransform(241,134.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#63225A").s().p("AgRAWQACgRgYAPQgJgZAdgKQAfgKgCgRIANgCIALADQATAigaASIgXAQQgOAJgEAJQgGAAADgXg");
	this.shape_63.setTransform(238.1,120.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7C3083").s().p("AgTA4IgNgMIABAAQgIgZgCgMQgDgUAcgMQAKgEgKgJQgPgNAAgEIBJAAQgPAeAFATIgPABIgEADIAEAHIABAOIgYAlg");
	this.shape_64.setTransform(258.7,120.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#712C77").s().p("Ag+BMQAOgagCgmIAMgWIAcgoQAGgEAIgMQAJgJALAAQACAcAdALQAOAGgIAGQgLAJAAABQguAHgFANQgGAPASA3g");
	this.shape_65.setTransform(261.8,107);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7C3083").s().p("AAjCqQgogKgLAFIgLgDIgShHQgKgrAGgfQAEgSgigTQgigTgbAEIgFhJQADgSAggNQAfgMACgVQALAIABAPIAAAaQgZAvAxgJQATAsAHAKQASAbAfAGIAFACIgFgDIAAhWQARAAAOALQAJAIALASQgUAagCAbQgDAcAOAbQAIARAHgHQAFgEACgQIAyAPIgMAYQgYABgBAYQgRABgFAMQgDAHAAASQgMAVgWAAQgHAAgIgDg");
	this.shape_66.setTransform(243.3,99.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#562354").s().p("AgOgJIAdABIgKASg");
	this.shape_67.setTransform(249.3,204.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#7C3083").s().p("AgBAMQgLgCgFgKIAKgLQAXABACAWIgMAAIgHAAg");
	this.shape_68.setTransform(272.5,222.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7C3083").s().p("AgSAKIAAgYIAkgCQACAXgHAHQgEADgFAAQgIAAgOgHg");
	this.shape_69.setTransform(273.6,217.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#782F7E").s().p("AABAMQgQAAgMgJQAMgDAUgLQAPgEAIAbIAAAAg");
	this.shape_70.setTransform(242.6,204.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7C3083").s().p("AgZAAQAMgNAIgEQANgHASAGIgzAog");
	this.shape_71.setTransform(267.8,187.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#562354").s().p("AgCAJQgRgLgJgPQANgJAPABIAbAEIACAvQgVgKgKgHg");
	this.shape_72.setTransform(245,201);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#712C77").s().p("AgfAeIAMglQALgCACgSQAAgQAIABQAUACAAAZQAAAcAKAGIgBALIgLAMIgyABg");
	this.shape_73.setTransform(263.6,175.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#68296D").s().p("AAKAsQgUgegNgCIgJgUQgGgMgKgFQgKggAUAJIA1AZQAdARAIAeQgPAbgOAAQgGAAgHgHg");
	this.shape_74.setTransform(262.8,220);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#642665").s().p("AgXAmQABgFgHgLIgLgSQgJgUAqgCQAKAAgDgLQgHgNgBgGIAygBQADALgJAbQgIAXAKAPIAAAXg");
	this.shape_75.setTransform(261.4,184.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#68296D").s().p("AglATIgdAAIgDgvQAYgTANARQAHAKAQAaQADgmAZgIQAKgEApABQgeAegGAIQgRAWAEAbQgaggggAHg");
	this.shape_76.setTransform(254.6,201.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#7E3286").s().p("AgTAfIgbgGQgDgaAQgYQAGgIAdgdIAbAMIALANQgGABgHAEQgHAEACACQAgAXgIAXQgEALgaAfIgfABQgTAAAPggg");
	this.shape_77.setTransform(261.4,203.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7E3286").s().p("AAGBVIABgMQAMgNgFgGQgEgEgPgCQgBgRgJAAQgFgBgOAHQgQAIgHgCQgJgDgCgSQAcgRgNgZQgRglACgHQAIgPAHgEQALgHANAKQANAKADAGQAFAKgIAOQgNAWARAMIAdASQAKAMAIgGQAHgGACgOQAKAFAGALIAJAWQgcAEAJASQALAYgDAFg");
	this.shape_78.setTransform(253.5,217.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7E3286").s().p("AgtBIIgIgUQgIgRAEgVQAEgTALgDQAggHgHgWQgLgdAFgGQAOAFAUgEIAmgIIABANQABAGAHANQAEALgKAAQgrACAKAVIALARQAGAKgBAGIgNAbQgLAZglAHIgFABQgJAAgFgIg");
	this.shape_79.setTransform(255.5,186.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#63225A").s().p("AArA7QgPgOgbgBIgsgDQgCgCgfgSQgVgMARgZQAEgFgMgYQgJgSAdgEQAMACAVAeQAVATAUgoIAbAAQAFAKALABQAHABANgBIAAACQgcAiADAWQACAbAsAQIABAMg");
	this.shape_80.setTransform(267.4,228);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#782F7E").s().p("AgEAJQgHgEADgIQAAgCAHgDIALgEIgBAZIgNgEg");
	this.shape_81.setTransform(178,129.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#782F7E").s().p("AgPgBIAbgIQAAAAABAAQAAABAAAAQABABAAABQAAAAABABQABAEAAABQgEAIgKABIgQABg");
	this.shape_82.setTransform(180.5,127.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#7E3286").s().p("AgZAHIADgYQAHgEACgHQACgEABgLQAtAWgJA2IglALQgSAAAEglg");
	this.shape_83.setTransform(173.9,135.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6C2B72").s().p("AAFgGIgJANQgCgKALgDg");
	this.shape_84.setTransform(226,135.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#782F7E").s().p("AgIABIAOgGIACALg");
	this.shape_85.setTransform(209.5,130.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#712C77").s().p("AgUAMQAAgSAMgGQAFAEANAFQALAEAAAMg");
	this.shape_86.setTransform(208.7,125.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#782F7E").s().p("AgGALQgNgNgCAAIACgNQAIACAPgCQAOAAAEAPQAAACgDAFQgDAEgDACQgGADgEAAQgFAAgEgFg");
	this.shape_87.setTransform(230.1,127.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#7C3083").s().p("Ag0BkIgKAAIAOhLQACABAMAOQAIAJAMgHQADgCADgFQAEgFgBgDQgDgOgOgBQgRACgIgCQAAgWASgoQATgoAAgWIAiATQAVALARgFQACARggAKQgdAKAJAaQgOAaAbAKIAmAyIgBAOIgMADQgHACgCAEQgYAcgbAAQgUAAgWgNg");
	this.shape_88.setTransform(232.9,124.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#742E7B").s().p("AASBeIgigTQgHgXgJgJQgNgLgXAHQgCgnAXACQANABAcAKIAFAQIAEgDIgIgOQADgWgTgeQgWgjgCgQQgBgFADgEQAcgEAgATQAiATgDATQgGAgAKApIARBIIgNACQgFACgGAAQgNAAgOgIg");
	this.shape_89.setTransform(233.5,105.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6C2B72").s().p("AgGACQADgGAEACQACAAAEAFg");
	this.shape_90.setTransform(168.3,127.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7C3083").s().p("AANgIIgZASQADgTAWABg");
	this.shape_91.setTransform(162.8,106.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7C3083").s().p("AgRAKQAGgUAVABQAGABACAGIAAAMg");
	this.shape_92.setTransform(165.8,105.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#782F7E").s().p("AgKAbQgVgEgMgXQAQgBAHgFQALgGACgPIABAAIANABIAZAIIAMARQgBAKgBAEQgDAHgHAEQgRAEgOAAIgLgBg");
	this.shape_93.setTransform(168.3,130.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#782F7E").s().p("AgBAaQgSgBgJgDQgNgFABgLQAAgSASgGQAKgEATgDQAIACARgBQAMABgDAQQgHAhgfAAIgEAAg");
	this.shape_94.setTransform(164.6,113.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6C2B72").s().p("AgHBbQAAglgIg0QgMg5gEgdQAEgaARAFIAcAIIAAAyQgOAcARAwQARA0gJAag");
	this.shape_95.setTransform(192.2,101.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#782F7E").s().p("AhJBqQgBgIAbgQQAWgMgYgXQAIgPABgHQABgLgRgHQgogNgoACIAAgMQACgSANAAQAHABAPAFQAbABASgHQAUgJALgXQgCgkgkgCIAAgMIgMgNIgBAAIABgNIAMABIAZgFQAPgDAKAHQASABAHALQgPAOAKAJQARANAAADQgNAHAFAJQAAABAIgFIAMAAQAaAXgLAeQgGASgSAhQAWABAUgeQATgdAXAFQAFAcALA6QAJA0gBAlg");
	this.shape_96.setTransform(177.6,96.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#7C3083").s().p("AgBAFQgHgCgDgHIAXAJIgGAAIgHAAg");
	this.shape_97.setTransform(226.5,220.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7C3083").s().p("AgTgDQAGgLAMgCQAGgCAPABIgWAjg");
	this.shape_98.setTransform(249.7,253.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#562354").s().p("AAAABQgggcgVgIIAlgBQAQAIAjANQAZAPgIAlQgVgHgfgdg");
	this.shape_99.setTransform(233.3,224.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#562354").s().p("AAHA8QgJgQgDgQQgDgSAGgNQAJgYgKgQQgFgGgYgSQANgJASAHQAXAJAIgBQAFAJgJAcQgHAXAOAMQgJALAFAUQAGAXgDAIg");
	this.shape_100.setTransform(243.4,235.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#712C77").s().p("AgYABQgPghACgZIAYANIAmAOQgKAgAXAQIAAAaQgPgBgHACQgMACgFALQgDgNgUgsg");
	this.shape_101.setTransform(247.9,246.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7C3083").s().p("AgBAMQgOgGgVgUQAgACAKADQATAFAMAPQgLAEgLAAQgJAAgHgDg");
	this.shape_102.setTransform(241.1,47.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7C3083").s().p("AgIADQgBgDgBgIIAVADIgEAIQgDAFgDAAIgBABQgFAAgDgGg");
	this.shape_103.setTransform(240.4,69.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#68296D").s().p("AgfAXIAQgnIAwgHIgQAvg");
	this.shape_104.setTransform(277.4,72.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#742E7B").s().p("AAOBmQgZgIgHAFIAAgaQgBgPgKgIIgOgaIAagwQAFgagsgNIAAgOQAKgdATAEQALACAXAPQABAJACADQADAGAHgBQACAAADgFIAFgJQAQgIAKAMQAFAUgPANQgVAMgHAIQgZAbADASQADASAgALIAAAMQgUANAVAMIALAAQgGARgOAAIgJgBg");
	this.shape_105.setTransform(238.5,77.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#7C3083").s().p("ABoCDQgCgDgEgOIAEgJQgGgCgFADQgCABgEAHQgHgDgHgTQgGgQgOAAQgEgOAAgWIACglQgBgrglgSQgBgRgKgHQgJgFgSABQAFgsgmAIQgoAJAXAcQAPAagCAXQghgNgTARQgMAMgLAiIgNAAQghgLgDgRQgDgSAagcQAHgIAVgMQAPgNgFgUQAXgOApABQAvAAAKgDQAigLA8ATQA7ASAfgMQABgBAKAOIgRApIgMANQgBALACAZQgEAQgigKQgOgFgRAIQgWAJAIAbQAFASAFAFQAJAKAOgYQALgSAOAGQAIAEACAIQACAHgEAIQgEAHgFAdQgEAXgLALQgHAHgEAAQgDAAgCgDg");
	this.shape_106.setTransform(256.9,80.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#7C3083").s().p("AgFAHIAAgNIALANg");
	this.shape_107.setTransform(78.1,204.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#782F7E").s().p("AgFgMIALAAIAAAZQgKgHgBgSg");
	this.shape_108.setTransform(76.8,203.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#642665").s().p("AgCAHQgBAAgCgNIALAAIgBAIQgBAFgFAAIgBAAg");
	this.shape_109.setTransform(79.3,122.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#712C77").s().p("AgHgFIAPAFIgOAGg");
	this.shape_110.setTransform(80.8,114);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#7E3286").s().p("AgCgCIAFAEIgBABg");
	this.shape_111.setTransform(44.6,79.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#712C77").s().p("AgIAEIgEgMIAZAAIgEAKQgEAGgDABIgCAAQgGAAgCgFg");
	this.shape_112.setTransform(92.5,108.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#712C77").s().p("AgTAcQAGghgGgOIADglQAjAKABAiQAAASgBAmIAAANQglgBgBgcg");
	this.shape_113.setTransform(69.3,85.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#782F7E").s().p("AgEgMQATAMgTANg");
	this.shape_114.setTransform(74.2,204.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#7E3286").s().p("AgCAEIgDgJIALAFQgFAGgBAAIgCgCg");
	this.shape_115.setTransform(104.4,160.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#7E3286").s().p("AgFAFIADgJIAIAAIAAAJg");
	this.shape_116.setTransform(79.3,121.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#642665").s().p("AgGgFIANAAIAAALg");
	this.shape_117.setTransform(93,171.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6C2B72").s().p("AgMAHIANgNIALANg");
	this.shape_118.setTransform(92.5,170.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#782F7E").s().p("AgCACIACgFIADACIgCAFg");
	this.shape_119.setTransform(86.8,183.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#642665").s().p("AgRAFQgFgFAAgFQAAgHAHgDQANgGAJALIAQAQQgKAMgKAAQgKAAgKgNg");
	this.shape_120.setTransform(88.9,170.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#68296D").s().p("AgKAHQgQgRACgZIAxAOIAAA5QgdgXgGgGg");
	this.shape_121.setTransform(95,183.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6C2B72").s().p("AAAARQgegRgTADIAAgXQAmgUAYAUQAIAHAdArIgIABQgRAAgZgOg");
	this.shape_122.setTransform(98.7,174.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#782F7E").s().p("AgkAuQAAgIgDgEQgTgdgCgQQgEgZAYgVQAHAJASAEIAeAEQAmAGgCAoQAAABALADIgZAYIhJAYIAAgMg");
	this.shape_123.setTransform(96.2,197.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6C2B72").s().p("AgFgFIALAAIgLALg");
	this.shape_124.setTransform(71.8,90.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#7E3286").s().p("AgHAQQgIgBgEgHQgEgGACgHQAEgPATAIQAEABAKAAQAHABgBAKQgJAQgQAAIgEAAg");
	this.shape_125.setTransform(87.3,100.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#7E3286").s().p("AgUAPQgFgGAEgEQARgRASgHQAGgCACAHQADAGgCAGQgCAKgKAFQgDACgPAFQgIAAgFgFg");
	this.shape_126.setTransform(82.4,95.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7E3286").s().p("AgSANQgFgOAHgKIAQgHIgQgGQgBgGgCgGIAngBQgEAOAFAgQAAAcgjAAQABgGgFgSg");
	this.shape_127.setTransform(81.7,115.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7E3286").s().p("AAHAgQgKgCgGgEQgNgHgCgPQgCgJAEgSQAAgDAEgEQAEgEADAAQAMAAAIAMQAEAGAGAQQADAGABAKIADATIgBAAIgSgDg");
	this.shape_128.setTransform(75,108.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#7C3083").s().p("AgXAfQgKgJAFgOIAMgVQAFgNADgGQAHgKAMAEQAOAEAEAMQADAIgBAPQgTANATAMQgNAOgPABIgBAAQgNAAgMgKg");
	this.shape_129.setTransform(85.6,83.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#712C77").s().p("AgFAIIAFgPIAGAPg");
	this.shape_130.setTransform(64.3,211.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#7C3083").s().p("AgIgMQALgGACAJIAFAOIgPAKg");
	this.shape_131.setTransform(302.6,271.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#742E7B").s().p("AgNALQgKgJAPgWIAVAMIAEAbIABACQgYgEgHgGg");
	this.shape_132.setTransform(300.3,270.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#742E7B").s().p("AgMAXIgZAAIAAgBQABgaAYgLQAbgPALAQIAMAkIgYABQgOgUgMAUg");
	this.shape_133.setTransform(295.6,265.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#7E3286").s().p("AgIAHQgTgDgGgKIANgMIA2ACIgGASQgDAMgIAFQgFgKgUgCg");
	this.shape_134.setTransform(293.9,251.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#7C3083").s().p("AAVCOQgQgDANgbQgJgEgDgfQgDgagcAFQgDgTgTgUQgagagEgHIAdgaIAGAEIgFgFQACgQgIgNQgGgJgPgNQgegaAfgXIAmAMQgEAjAdAeIAxAwQAFALAUACQAUADAFAJIAAAZQgeACgIAEQgPAHAgAcQAGAFACALIABARQgZALgBAbIgGAAQgRAAgHgCg");
	this.shape_135.setTransform(286.6,253.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#742E7B").s().p("AgmAGIAQgvIA9AAIgBBHIhKAMg");
	this.shape_136.setTransform(283,73.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#7C3083").s().p("AgVgMQAHACAQgCQAOABAGALQgGAMgOAAQgQgBgHACg");
	this.shape_137.setTransform(296.5,186);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#562354").s().p("AgFgEIAMgBIgNALg");
	this.shape_138.setTransform(277.3,278);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#6C2B72").s().p("AgDAlQgLgKgEgGQgGgKAIgLQABgSACgGQAEgMAPgBQAXAigLApg");
	this.shape_139.setTransform(268.4,287.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#562354").s().p("AgRATIgBgWQACgFgCgHIgHgYIAFgEQAIgHALAFQAKAEgGADQgQAKAGANQADAGAPAQQAOAOAAAIQABALgaAIQgQgGgBgXg");
	this.shape_140.setTransform(274.7,266.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#7E3286").s().p("AgnAtQgGgNAQgUQAQgSgIgOQATAAAFgCQAMgFABgRIAWABQAPArgvASQgEACgQAPQgLAKgMAAIgCAAg");
	this.shape_141.setTransform(266.3,295.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#782F7E").s().p("AgLAqQgTgTgXARQgFgKAOgWQALgQgSgMQgBgaAYAOQAIAEAGAbQAGAUAOgGQARgGgJgQQgOgVAAgJIAAgJIABgJQAOgOANAIQAIAFANANQALAOgHAXQgIAdABAIQgQACgEAMQgCAFgBATQgJAAgZgZg");
	this.shape_142.setTransform(264.4,280.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#742E7B").s().p("Ag/AhQAagIgBgLQAAgIgOgNQgRgRgCgGQgGgNARgKQAFgDgLgEQgKgFgJAHIgEAEIgRgNIAZgYQATAAAlAEQAgACAWgIQAdgFADAaQADAfAJAEQgNAbAQADQAJADAWgBIAAABIgZA9Qg3gWgRAGQgPAGgLAvIgbABQgYgiAEgcg");
	this.shape_143.setTransform(281.1,268.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#6C2B72").s().p("AgFgrQAXANABAcQABAOgCAfQg6gbAjg7g");
	this.shape_144.setTransform(294.9,241.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7C3083").s().p("AgOBXQAJgcgUgiQgbgsgCgMQgFgYAGgNQAGgMAUgIQABAMATANQARANAAANQgiA6A6AcIAQABQAIATAAAEQAAAMgSAEg");
	this.shape_145.setTransform(293.3,241.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#742E7B").s().p("AgTA/QgdgdAEgiIAAhYQANgDAWgQQAVgKASARIAAAYQgUAIgGAMQgFANAEAYQACAMAbAsQAUAigJAcIgNANIgxgxg");
	this.shape_146.setTransform(287.5,240);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#7E3286").s().p("AgeBqQAEgWACgHQABgCASgJQALgGgLgPIgQgWQgKgNgOABQgKAAgNADIgYAFIAAgCQgDgVgXgBIAAgZQAXANAJgIQAHgHgCgZIAAgLQAQADALgUQAMgVAMABQALANgGAhQgGAgAPAOQAEgCAKggQAGgWAbANIAQAaQAFAPgWANQgNAHAGAMIARAVQAKgJARgXQARgQAXAFQAAASAMAGQgcAMgLAIQgTAPAIAcQgSgRgWAKQgWAQgMADQgJgIgFAKQgGAKgEAAIgBAAg");
	this.shape_147.setTransform(283.6,221.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#7E3286").s().p("AAFgMQABASgKAHQgDgRAMgIg");
	this.shape_148.setTransform(233.6,299.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#3C1B3D").s().p("AgNAGIACgMIAPAAQAKABgBAGQAAAGgMAAIgOgBg");
	this.shape_149.setTransform(243,303.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#63225A").s().p("AglAJQAGgCASgCQANgEgDgIQgMgjARgCQALgBAZADIgGALQgEAHABAEQAFAkgTAPQgPAMgkACg");
	this.shape_150.setTransform(247.8,296.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3C1B3D").s().p("AgKAJQgLgfgcAFQAkgeAYASIASASQAKALAJAAIACAkIgXAAIgHABQgVAAgJgcg");
	this.shape_151.setTransform(239.2,297.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#562354").s().p("AgqATIgLgUQgDgLAUgEQAkgHAdARIAWAGIADATg");
	this.shape_152.setTransform(283.7,156.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#63225A").s().p("AgKAlQgZgNgUgjIAAgLQArgfAYAOQAZANATBAQgSAHgQAAQgSAAgOgIg");
	this.shape_153.setTransform(297.4,173.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#712C77").s().p("AgMAWQgJgBAAgQIgHgaIAXAEIAiALQgBAXgYABQgKAEgFAAIgBAAg");
	this.shape_154.setTransform(295.2,145.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#7E3286").s().p("AgPA+QgHgBgEgDQgIgFADgIQAFgIABgEQAMgfAEgPQAGgbgOgVQARABAMALQAKAJAKARQgUAVgEAFQgJARAIATQAIARgSAFIgIABIgEAAg");
	this.shape_155.setTransform(301.1,125.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#68296D").s().p("AgkAuQAFgMgIgRQgMgXgBgHQA1AQABg2IAZAAQAAAQAIABQAEABAOgFQgDAEgjAlQgXAZgGAYg");
	this.shape_156.setTransform(290.3,151.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#712C77").s().p("AgeBGQgMgJACgPIAIgcQACgGACgkIAAgaQABgQALgIQAzAWAFAPQAFAQgYBHQgPAPgHAGQgGAEgHAAQgIAAgIgFg");
	this.shape_157.setTransform(287.1,139.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6C2B72").s().p("AADAOQgJgBgEgCQgGgDAFgJQACgEAGgFQAFgEADABQAKACAAAKIgBAQg");
	this.shape_158.setTransform(292.8,278.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#642665").s().p("AgYAVQgDgHABgKQADghAZAEQAWADADAOQgDAQgOAIIgYAKIgEABQgEAAgCgGg");
	this.shape_159.setTransform(300.8,293.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#642665").s().p("Agog+IAPgLIANAAIAkA5QAAAIgBAPQgBAMAFAGQAYAbgKALQgHAJgfACQg7hCAQhGg");
	this.shape_160.setTransform(280.6,284.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#7C3083").s().p("AhxAVQALgtARgHQAQgGA3AWQAgAHAFAAQAPgEgOgjQgDgFABgKIAAgQIAMABIAFAMQADAGADABQAIACAEgHIAFgOIAYgBIABAMQgQAXALAJQAGAHAZADQAEAbgSAXQgKAMgdAVQgSACgIgNIABgRQABgJgKgDQgDgBgHAEQgFAFgDAEQgFALAHADQADABAKABQgSALgeAIQgrAKgJADg");
	this.shape_161.setTransform(290.8,275.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#712C77").s().p("AgHAGIACgMIAMANg");
	this.shape_162.setTransform(287.4,112.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#742E7B").s().p("AgLgLQARAAAHALIgNAMQgLgGAAgRg");
	this.shape_163.setTransform(296.8,113.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#742E7B").s().p("AgGAJQgEgDgCgQQASACAGALQgJAIgFAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBg");
	this.shape_164.setTransform(274.3,126.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#712C77").s().p("AAhApQgTgJgBADQgBgTgBgFQgDgMgKgHIgZgDQgPgBAEgPQADgPASACQAbACADgBIAWA7QAJAWgHAAIgEgBg");
	this.shape_165.setTransform(275.5,108.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#562354").s().p("AAfAQQgSgQgOAWIg/gCQAAgPABgFQACgLAKgGIBJgMIAcANQgGALAKAMQALAPAAAHQgDABgEAAQgKAAgRgOg");
	this.shape_166.setTransform(284.5,79.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#712C77").s().p("AgIANQABgOgUgBIgSAAQgJgCABgMQACgMAKgGQAKgFALADQAMAEAUAPQATAIAQgUIAHAdQgFAVgVAHQgaAFgLAFQgBgCACgXg");
	this.shape_167.setTransform(287.7,107.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#68296D").s().p("AgqgZQgBgSAAgIQABgPAMgIIAeAGQgJAbATAZIAiApQgLAIgBAPIAAAbg");
	this.shape_168.setTransform(281.1,129.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#7C3083").s().p("AASBGQgggCgDgCQgPgGAGgcQAGgagRgMIgOgNIAAgLQAMgFAagFQAUgHAFgWQAngEAAARQABAIgQAeQAAASANAGIgBAZQgKABgBAUQAAASgRAAIgCAAg");
	this.shape_169.setTransform(291.9,114);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#742E7B").s().p("AhtDuIgNgZIgMABIgBgZIAPgBIAOAHQAIAEAGAAQATAAAMgRQAHgJAMgVQAFgIAAgGQgBgJgLAAQgqABAFgTQACgGAVgYQANgPgCgHQgCgHgRgEQAAgCALgJQAIgGgOgGQgdgLgCgaQgCgPgNgNQgQgOgHgIQACgMgLgKQgPgNgBgDIAqgZQAOABAGAPQAHATAGADIAOABQADAOADADQAFAGALgLQALgKAEgXQAFgdADgIQAEgHgBgHQgCgIgJgEQgOgGgKARQgOAYgKgJQgFgGgFgSQgHgaAVgLQARgIAPAFQAhALAEgRQgBgZABgLQAFAGASAGQANAIgNAWQgIAMAMAFQAFACASABIA+ACQAEAIAPA1QAKAlAYASQAUA2g3AFQhFAGgYArQgDABgbgDQgSgCgDAQQgEAOAPACIAYADQALAGADANQABAGABASQgcATgBAqQgCA2gGAMIglgBIg0ANgAgDARIADgEIgCgFg");
	this.shape_170.setTransform(274,100.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#7C3083").s().p("AAMDCIAAAAIgDgPQgEgHgIACQgUADgCAdIgLAAIgCgYQgIgUgSgEQgFgBgeAAIgNgbIABAAIgkgkQgOgXAPgdQAFgIgJgLQgLgNgBgEQALgHABgQQAAgSAAgIQApgngCgSQgCgRgwhCQAKADAOgOQAOgOALACIALAMQAFAjAqgLQAMgEgDgMQgFgRABgDIAlAAIAAALQACARAEADQAGAGAMgMIAOAAIBKBkQgDAlgBAGIgIAcQgCAOAMAJQAPAKAOgJQAIgGAPgOIANAMQgBA3g2gSQABAIALAYQAJAQgGANQgegRgjAHQgUAEACALIAMAUIAEAYQACAPgBAJQgCAagMAEIgFABQgKAAgQgOgAhuBIQAAAHADAPQAAAIgBAKIgDASIATgIQAMgFAGgFQAGgEASgCQAMgEgFgRQgGgOgRgGQgKgDgUgBIgBAAQgMAAgBALgAg5AEQAZAFAOgPQABgCgEgHQgFgIgEgCQgXgIgPADQgTAFgOAbQAEgBAIAAQAMAAAUADgAhsiTIgBAFIAGgBIgBgFg");
	this.shape_171.setTransform(274.3,145.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#642665").s().p("AgEgLQASANgRAKg");
	this.shape_172.setTransform(270.9,179.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#742E7B").s().p("AgMgMIAZAMIAAAMIgNABQgMgHAAgSg");
	this.shape_173.setTransform(295.6,222.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#782F7E").s().p("AgFABIAGgOIADADQAFAOgOAKg");
	this.shape_174.setTransform(297.4,222.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#742E7B").s().p("AAAAKQgEgCgFgHIABgLQALACACACQAHADgDAIQgDAGgDAAIgDgBg");
	this.shape_175.setTransform(278.9,188.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#712C77").s().p("AgEAMQgLgBABgNQABgIALgBIARgBIAAAYIgIABIgLgBg");
	this.shape_176.setTransform(292.7,186);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#642665").s().p("AgRAKQgFgwAnAZIACALQgCAZgYAAg");
	this.shape_177.setTransform(266.1,197.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#7E3286").s().p("AgYAZIAAgxQAPACAMANIAWAWIAAAMg");
	this.shape_178.setTransform(275.5,186);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#642665").s().p("AgXAbQALgIAAgYQAAgYAMgJIAZAOQgQAgAEAeIglABg");
	this.shape_179.setTransform(269.2,174.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#712C77").s().p("AgfARIABgJIANgnIAYABQAGAMATABIAAAXQgcABgJAYg");
	this.shape_180.setTransform(272.3,169.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#68296D").s().p("AggAUQgPgHANgTQAMgFABgTQAHAHAagBQAYAAAFAUIAAAKQgVgBgKACQgQADgCAVIgYgLg");
	this.shape_181.setTransform(287.7,171.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#6C2B72").s().p("AgZAAQAGgggLgNIAYAAQgBAOATALQAVAKgCANQgbgMgGAVQgKAggEACQgPgOAGggg");
	this.shape_182.setTransform(283.6,215.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#742E7B").s().p("AgoAaQgGgMANgIQAWgLgFgPIgQgaQAuACAFABQAaAJgCAlQgXgEgRAQQgQAXgKAJIgRgVg");
	this.shape_183.setTransform(290,220.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#6C2B72").s().p("AgEBbQgOgEADgWQAFgcgSgEQgXAAgKgBQAaggADgKQAJgYghgWQgCgCAIgFQAGgEAGgBQAaAAABgZIAXABIABAaQACAZgCAyQAGAqAsARIgBAYIglADQgUAAgJgEg");
	this.shape_184.setTransform(269.2,206.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#742E7B").s().p("AgMBoIAAgNIgThGQgMgogSgZIgBgaQACgkAZACQAHABAPAEQANACAGgDQgUAXAHAjQAHAlAfATQASAMAHALQAIAMgCASIgYAAQgMgBgMAVQgJASgNAAIgEgBg");
	this.shape_185.setTransform(276.7,204.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#6C2B72").s().p("AglBBQgPgDgQgNIAAgxQATARAMgFQAMgEACgYQABgKgDgOIgEgYIBhAAQADAZgFAOQgGASgVAIQgVAKANAaQgBATgMAGQgcADgQAAIgLAAg");
	this.shape_186.setTransform(282.4,164.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#712C77").s().p("AAFBhQgJgjgagTQgHgFAIgSQAIgUgJgOQgGgJgMgqQgKghgVgPQgJgHgDgOQgEgRAOgEQAQgGAQAGQARAIAEAUQAGAjAaA3QAeA8AIAZQAGAUAMAOQALAMAWANQgVAEgTAWQgTAXgPADQgIgqgGgUg");
	this.shape_187.setTransform(289.7,196.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#3C1B3D").s().p("AgBgBIADABIgCACg");
	this.shape_188.setTransform(208.5,298.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#63225A").s().p("AAIAAIgPADQAHgJAIAGg");
	this.shape_189.setTransform(230.9,282);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#3C1B3D").s().p("AgHgHIAJACQAGABgBAFQAAACgFACIgIADg");
	this.shape_190.setTransform(208.7,302);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#63225A").s().p("AgCgDIAEABQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAABIgEABg");
	this.shape_191.setTransform(245.4,270.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#7C3083").s().p("AgUAPIACgiIAYAHQANAFACANQABAHgJADIgOAEg");
	this.shape_192.setTransform(251.4,258.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#742E7B").s().p("AghAGQAWgTAIgEQARgJAUALQgHACgIALIgNARQgGAHgHAAQgMAAgOgQg");
	this.shape_193.setTransform(194.9,269.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#642665").s().p("AgSAIQgPgPACgXIAYgBQApATgCApIgSADQgXgNgJgLg");
	this.shape_194.setTransform(227.3,292);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#642665").s().p("AgrgJIgBgZQANgQAOAFQAJADAPAMQAAASANAPQAIAKAQARQgFAIgJAEIgTAFQgSgigkgWg");
	this.shape_195.setTransform(251,287.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#7C3083").s().p("AgdAfQgJgeAAgMQgCgXAhgIQgBAYANAQQAKAKAYAMQABARgMAGg");
	this.shape_196.setTransform(224.8,293.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#7C3083").s().p("AgJAnQgYgPgGgHQgMgQANgVQAYAaAQgRIANgSQAIgLAHgCQAVAHgHAYQgIAZAIAIIgZARQgIAEgHAAQgGAAgHgEg");
	this.shape_197.setTransform(195.3,272.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#63225A").s().p("AgSA7QgggHgLgiQATgDgBgRQgBgXAGgFQAIABARAYQAOAMAHgoQAGgpAeASQASALgBAMQgBAKgPAPQgNAMgCAIQgFANAOAMIABAZIgPABQgcAAgPgEg");
	this.shape_198.setTransform(242.6,280);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#742E7B").s().p("AAGAqQgiADgPgGQgRgSgHgJQgNgQAAgSIAqgdQAVACAMgZQAQAMgLARQgMAWAEAKQAWgSAUATQAZAYAKAAQgJAMAHAKQAEAGAKAKQgBARgMAGQgGACgTAAQgIgfgdgCg");
	this.shape_199.setTransform(259.8,286.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#6C2B72").s().p("AgvBdQAQgjgUgmQgVgkgxgbIA4gXQAbAVAhgVQAogbANABIA+AmIALAAIABAWQgcAAgJAcIAKALQAEAJgFALIgIASQgOgNgHgEQgNgIgOANQgEgIgFgEQgHgEgGAEQgIAFgBAMIABAUQgYgOACAbQgLAWgTAAIgDAAg");
	this.shape_200.setTransform(260.7,271.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#782F7E").s().p("AhfCfIgdgwIAPgDQAIgDgBgHQgBgOgNgGIgZgGIgCgOIAXgkIAAgBQAWAMAFACQAdAMAFgdQAGggAPABQgBgOgLgBQgOABgGgBQgFgbgJgHQgMgJgYASIgMAAQgJgWAVgYQAZgbAAgNQANgDAjAPQAdANATgQQAQgNgGgFQgBgCgQgFIgBgOQAGACAmABQAbACAPANQACAJgGAQQgCAPAQAMQAcAVAOAgQAPAhgCAkQgsgBgMgBQhKgHAdBFQgVADgDAQQgDAKACAVQgNAAgoAbQgQAKgPAAQgPAAgOgLg");
	this.shape_201.setTransform(263.7,249.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#63225A").s().p("AgDgBIAHACIgGABIgBgDg");
	this.shape_202.setTransform(126.4,28.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#742E7B").s().p("AgFAIIAFgPIAGAPIgGAAg");
	this.shape_203.setTransform(78.1,53.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#7E3286").s().p("AgPACQgMgYABgUIAQgBIAGABIAFgBQgBAMAFAMQADAHAKANQAKAOgCALQgCANgTAFIgUgqg");
	this.shape_204.setTransform(78.6,58.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#562354").s().p("AgkANQAAgXAZgOQAZACAIAFQAQAHgBAXQgSALgTAAQgSAAgSgLg");
	this.shape_205.setTransform(84.9,68.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#562354").s().p("AgZAoQANgKAIgjQAHgiATgLIAEAqIgDA7g");
	this.shape_206.setTransform(65,78);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#7C3083").s().p("AAYBAQgFgMgEgGQgHgNgEAIIgEAQIgMAAQACgmgBgTQgBghgkgKIABgXQAEgCAOAFQALAEAHgIQAKAFAXAEQAQAIgTAeQgGAKAMAPQARAVACAGQAEAPAAAEQABAKgJAEQgFADgEAAQgEAAgDgEg");
	this.shape_207.setTransform(72.4,83.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#562354").s().p("AghA6QAZgZgNgqQgQg1AFgQIAjgCQgCAUANAZIAUApIgWBJIgrACg");
	this.shape_208.setTransform(75.6,62.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#7C3083").s().p("AgxAyIAAgZQgBgOANgEQAIgDAGAOQAGAOAMgCQAFgOgHgaQgIgbAEgNIAbAjQARAUASAIIgBAYQgCANgUgRQgSgPADAfIgYACg");
	this.shape_209.setTransform(94.9,102.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#742E7B").s().p("AgFAGIALgLIgBALg");
	this.shape_210.setTransform(174.7,152.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#712C77").s().p("AgCgFIAEAHIgDAEg");
	this.shape_211.setTransform(131.6,196.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#712C77").s().p("AgJALQgCgDADgFIANgQIAGAJIgGAJQgEAFgDACIgEACQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_212.setTransform(133.2,200.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#63225A").s().p("AgEAAIADgCIADAAIADAFg");
	this.shape_213.setTransform(104.3,160.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#712C77").s().p("AACgEIACAJQgPgDANgGg");
	this.shape_214.setTransform(210.1,39.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#63225A").s().p("AgcAgIgNgaIgCgKIABglIAMAAIANALIABgBQAAAMADAFQAEAHAMgBQAUgCAKAMQAIAJADAWQgEgBghAJIgKABQgPAAgKgKg");
	this.shape_215.setTransform(214.7,39.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#6C2B72").s().p("AADAoIgcgjQAEgKgQgZQgOgVAOgRQAQAWAtAhQAiAigVAwQgRgIgRgVg");
	this.shape_216.setTransform(96.3,96.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#7C3083").s().p("AgFgCQAFgDAFgBIABANg");
	this.shape_217.setTransform(232.3,70);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#7C3083").s().p("AgSArIgBhWQArANgFAaIgZAwIgMgBg");
	this.shape_218.setTransform(234.8,75.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#63225A").s().p("Agyg3QASgHAWAMQAeARAFABIAMACIAOAaQgCAUgfAMQgfAMgDATg");
	this.shape_219.setTransform(230.4,82.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#6C2B72").s().p("AgGAZQgGgKgMgCIgVgBQgSgMASgMIBLgMQARAAAFAMQADAHAAARQgKANgUAAQgWgBgJABg");
	this.shape_220.setTransform(93.2,84.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#7C3083").s().p("AgFgCIALgBQgDAHgDAAQgBAAgEgGg");
	this.shape_221.setTransform(232.2,142.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#782F7E").s().p("AgSAAQgCgGAEgFIAKgNIABAAIAJAAQAQAUAAAdIgmABg");
	this.shape_222.setTransform(227.2,137.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#6C2B72").s().p("AgvAYQAAgcgQgUQA1AfAnguQADgEAGgCIANgDQgCAMAEAPIALAYQgBAQgNAGQgWgRgRAKQgKAHgNAYIgMABg");
	this.shape_223.setTransform(234.1,137.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#7C3083").s().p("AgGAGIABgMIAMABIgLAMg");
	this.shape_224.setTransform(169.5,161.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#742E7B").s().p("AgeAUIAAgWQAHABARgNQANgLAMAJQAMAHAAARQgHAJgRgBQgSAAgGAFg");
	this.shape_225.setTransform(172,158.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#712C77").s().p("AgLAUQgNgFAAgRQgDgfASAPQATARACgNIANAYIgLANQgSAAgHgDg");
	this.shape_226.setTransform(98.7,107.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#782F7E").s().p("AgHgLQAIABADAIQACADACAMQgOgFgBgTg");
	this.shape_227.setTransform(160.9,71.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7E3286").s().p("AgDACIAEgEIADACIgEADg");
	this.shape_228.setTransform(176.5,75.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#6C2B72").s().p("AgTAGIgZgMQABgRAMgFQAFgCAUAAQAIAHANAQQAOAMAPABIgCAZQgKgHgPADIgYAEQABgQgNgJg");
	this.shape_229.setTransform(172.2,78.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#7E3286").s().p("AgxAKQALgHAngRQAggPAQgPQAEARgJASIgTAeQgUAAgFACQgLAFgBARQgjgBgCgig");
	this.shape_230.setTransform(169,73.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#7E3286").s().p("AALAcQgJgJgTgJQgHgKgTgBIACgZQAkAFAFgmQAQADAJASQALAVAIADQgBAugXAcQACgTgLgNg");
	this.shape_231.setTransform(180.8,82.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#7C3083").s().p("AglglQAqgGASAWQARATgDApQg6gOgQg+g");
	this.shape_232.setTransform(239.1,188.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#7C3083").s().p("AgGAFIAGgPIAHAPQgDAGgEAAQgCAAgEgGg");
	this.shape_233.setTransform(88.1,56.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#742E7B").s().p("AgLgLIAXgOIAAAyIgMAAg");
	this.shape_234.setTransform(89.9,45.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#782F7E").s().p("AgYgCQAJgCAPgPQAOgIALAYIAAAMIgZANg");
	this.shape_235.setTransform(93.7,66);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#7C3083").s().p("AgmAgQABgYgQgHQgIgEgagCIAAg/QAKACAWAOQARAKAOAAIAMAlIAYAZQAOAMAFgFQAEgEACgQIAAgMIAhgDQAUgCgCAdQgXgEgIAYQgIAcgLACg");
	this.shape_236.setTransform(92.5,66.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#68296D").s().p("AgGASIgZgLQADgTAQgEQAKgCAUgCQAKAHADAMQABAHgBAOIgkABg");
	this.shape_237.setTransform(228.5,219.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#7E3286").s().p("AgLAmIgOgNQACgcAFgKQAHgTAXgFQAAAgABAGQACAWALAPg");
	this.shape_238.setTransform(236.7,207.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#68296D").s().p("AgNAZQgOgaADgLQADgPAiADIANANQADAlghAAIgJgBg");
	this.shape_239.setTransform(232.8,212.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#782F7E").s().p("AAJBbQgRgHgNAJIgQADQAIglgZgQQgkgNgQgIQACgOgCgIQgCgLgKgHIALgWQArAFgDgrIAmAAQAPgZAVAHQAMAEAZAOQgCAIARAkQANAbgcAQQACASAJACQAHACAQgHQAOgHAFAAQAJAAAAARQACATALAHIAAALIAAAPQAAAIgHAFQgPglgUAMQgYAVgMAEIgDAAQgJAAgUgIg");
	this.shape_240.setTransform(242.3,219);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#712C77").s().p("AgKgMQAPACAEAFQAGAFgNANQgLgHgBgSg");
	this.shape_241.setTransform(109.8,30.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#7E3286").s().p("AgLAJIAAgWIAXAAQABAUgBACQgCAFgGAAQgFAAgKgFg");
	this.shape_242.setTransform(111.2,52.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#6C2B72").s().p("AgOAEQgXgpACglQAkAMAXA3QAXA2gUAcQgcgvgNgYg");
	this.shape_243.setTransform(107.3,40.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#712C77").s().p("AgDACIACgEIAEABIgBAEg");
	this.shape_244.setTransform(151.4,98.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#712C77").s().p("AhmBOQAmgIgFgeQgNgjADgOQABgFgHgJIgMgPQAKgMACgRQABgIAAgYIAlgMQAOACAKAZQAJAXAQAAIAAAMQAtAlArAOQAYAXgWAMQgcAQABAIIgagHIAAgNQgCgGgGgBQgWgBgGAVIABgCQgWgBgDAUQgZAagMAKQgGAFgGAAQgQAAgQgigAgSgBQgCACgCAMQgNAHAOAGIAMgMQAHgFACgFQABgFgGgDIgGgBQgFAAgCAEg");
	this.shape_245.setTransform(163.7,100.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#6C2B72").s().p("AgVADQgPgPAIgRQAQgCAPAPQAUAQAJACQgCAPgKAHQgIAFgPABQgBgIgRgTg");
	this.shape_246.setTransform(164.3,127.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#642665").s().p("AgrAHQgNgZAcgeIAAgBIAAAAIAAABQANAXAUAEQAQAEAbgIIgDAZQgcgGgLAQQgGAKgCAdQgjgfgGgLg");
	this.shape_247.setTransform(166.8,135.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#6C2B72").s().p("AAJBGQgLgLgaADQgbAEgLgJQADgQgGgWQgJgeAAgGQADgeAGgJQALgRAcAGQgEAkASABIAlgLIgDALIgEAMQgLAOgDAHQgGAMAJAJQAMALAPAAQAQgBAMgOIASAGQAIAGgMAJQgRAOgLAGQgRAJgQAAIgCAAg");
	this.shape_248.setTransform(174.4,142.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#782F7E").s().p("AgYANIAAglIAxAYQgBATgLAGg");
	this.shape_249.setTransform(181.5,134.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#712C77").s().p("AgHAfQAAgSgMgGIgBgZIACgNIALABQABASALAHQAJABACACQAGACgBAGQgDAYgZABg");
	this.shape_250.setTransform(176,156.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#7C3083").s().p("AhFBLIABgmQASABARgKQALgGARgOQALgIgHgGIgRgGIgOgJIgDAFIARAEQgNANgPABQgPAAgMgKQgLgJAHgMQAEgIAKgOIAEgMIADgMQAYAAABgYIAlAMIgMAiQgBAQAhgEQAQgBAOAJQAGAFATAUQgnAJglAlQgnAsgWASQgMgGgBgTg");
	this.shape_251.setTransform(182.1,145.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#63225A").s().p("AgEAAIAFgCIADACIgEADg");
	this.shape_252.setTransform(249.2,55.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#63225A").s().p("AgVANIAOgZQAJgNARABQAGAigEAJQgDAGgJAAQgKAAgUgMg");
	this.shape_253.setTransform(248.8,62);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#6C2B72").s().p("AgPAHIgKgVQAagPAMAMQAKAJADAbIgYAFQgJgFgIgMg");
	this.shape_254.setTransform(152.8,65.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#742E7B").s().p("AgaAMQgIgIABgKQACgOATgBQAFAJAPADQATAEAHAGQgQARgNADIgHABQgNAAgLgKg");
	this.shape_255.setTransform(138.9,79.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#6C2B72").s().p("AgQASQgIgFgCgGQgFgKAIgIQAEgEAOgHQAMALAWgJIgIAbQgGAPgRABQgGAAgIgFg");
	this.shape_256.setTransform(153.5,72.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#63225A").s().p("AACACQAigLAIgWIAAABQABAYgBAHQgDARgKALIhKADQAJgRAkgNg");
	this.shape_257.setTransform(150.7,93.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#6C2B72").s().p("AgcAOQgEgMADgJQAEgKAKgGQAMgHAIAHQADADAKAOQADAEAKAIIAAANIgZABQgMAGgHABIgCAAQgJAAgEgNg");
	this.shape_258.setTransform(149.5,85.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#742E7B").s().p("Ag9BkQgCgKAPgPQANgOgGgOQgLgGgNAMQgNANgJgDIABgNIATgYQAKgPgagMQgGgCACgOQADgOAKABQApADgCgbIgDgYQgCgOAEgGIAZgBQABAUANAFIAXAPQACAiAjABQgCAMALAKIAQAPIAAAMIhwA/IglAMg");
	this.shape_259.setTransform(161.4,80.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#712C77").s().p("AgFgCIALAAQgDAFgDAAQgCAAgDgFg");
	this.shape_260.setTransform(198.4,97.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#782F7E").s().p("AgLANIgBgZIAZAAIAAAZg");
	this.shape_261.setTransform(195.2,93.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#712C77").s().p("AgLADIgBgMQAUgLADAMQACAHAAAQg");
	this.shape_262.setTransform(194,76.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#712C77").s().p("AgKAAQgEgKAZgIIAAAlQgTgOgCgFg");
	this.shape_263.setTransform(206.7,95.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#712C77").s().p("AgSANIAAgZIAYAAQANAHAAASg");
	this.shape_264.setTransform(195.9,95.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#68296D").s().p("AgBAXIgXgRIAAgXQgBgOAJAAQAUgCAKASQAGAKAFAZIAAANIgDAAQgLAAgMgKg");
	this.shape_265.setTransform(217.8,91.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#63225A").s().p("AASAbQgSgFgDAAIgmgWQAFgMAKgGQAIgFAQgEQAXgBAKARQAFAIAGAcQgGADgHAAIgLgBg");
	this.shape_266.setTransform(196.9,87);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#782F7E").s().p("AgWADQAXgZgCgbIAYAMIANA8QgPADgIAFQgLAHgDAMQg3gKAiglg");
	this.shape_267.setTransform(192.9,82);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#712C77").s().p("AgJAWQgKgagUACQAFgRATgEQASgFAEgIIAZgNQAPAVgMAdQgQAnAAAKQgSgBgKgbg");
	this.shape_268.setTransform(204.6,104.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#742E7B").s().p("AggAKIABgJQATgNgTgMIAAgNIAngNQATACAEAPQABACABAbIgDA3g");
	this.shape_269.setTransform(223.5,97);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#0D010A").s().p("AAPB0QgBgbgBgCQgEgPgSgCQABgQgLgXQgNgbgCgJQgBgHAEgeQACgWgHgOIgBgmQAMACAIAPQAKASAHADIAhByIAFBJQgDADABAGg");
	this.shape_270.setTransform(225.3,84.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#63225A").s().p("Ag5AmQgOgCgKgIQgKgJABgMQAAgOAOAAIAYAAIBjglIAmAAQAIAOgDAXQgDAdAAAGQggAPgoACIgDAAQgbAAgqgHg");
	this.shape_271.setTransform(213.1,81.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#712C77").s().p("AhPBuQASgjAHgRQALgfgbgWIAOgBQAXgbABgvQANAAAVgYQAUgUAVAHQADAbgZAaQghAlA2AKIAmAVIAAAcIgaAAIgcgHQgSgFgEAZQgWgEgTAdQgUAegVAAIgBAAg");
	this.shape_272.setTransform(188.5,87.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#742E7B").s().p("AARBjIgZgDQgQgBgKAEQgVgIgHgTQAAgKAQgnQAMgdgPgVIAAg+QANgNAGAFQADAEACAQQgCATALAOQAIAKASAMQA6AjgFA9QgNAZgdAAIgEAAg");
	this.shape_273.setTransform(212.8,102.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#7E3286").s().p("AgYBUQAFg+g5gjQgTgLgIgKQgMgOADgUQAuAaAFg0IAWARQAOALANgBIAAAjQAEA8A6gIIAGAFIgFgGIgCgMIADg3IAWACQACAQAVAhQAUAegEAYIgBAAQgcgJgNgBQgWgDACAoQgSALgTAAQgSAAgUgLg");
	this.shape_274.setTransform(221.6,101.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#782F7E").s().p("AgbBSQgRg6gSgXQAJgYgRg0QgRgyAOgcIAmAAQAGAOAGgOQAMgIAKABQAJABgCAJQgEAQAZgBQAWAAgKAUQgDAIgUAFQgSAEgEASQATgCAKAaQAKAcATABQAHASAVAIQADATgNAqQgMAnAGAXQgMAGAAATIgqAPQgUgYgRg4g");
	this.shape_275.setTransform(201.4,112.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#742E7B").s().p("AAAADIgFABQAFgNAGANg");
	this.shape_276.setTransform(257.3,143.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#742E7B").s().p("AgCAHQgGgCABgFQgBgCADgDQACgDADABQAFAAACAFIACAKIgBABIgKgCg");
	this.shape_277.setTransform(250.9,143.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#6C2B72").s().p("AgBAWIgMgzQAXAEACAVIABAig");
	this.shape_278.setTransform(243,135.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#742E7B").s().p("AACAUQgHgFgEgBQABgDgFgQQgEgMAMgCQAOgCAEAMQACAIAAAPQgEAGgFAAIgEAAg");
	this.shape_279.setTransform(257.7,167);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#642665").s().p("AAIAgQgFAAgUgQIgBgjIAigNIADAjQABAegKAAIgCgBg");
	this.shape_280.setTransform(242.3,147.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#6C2B72").s().p("AgSAMQgIgNACgdIAagCQAPAAAIAMIgDA1QgegCgKgTg");
	this.shape_281.setTransform(235.4,153);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#712C77").s().p("AgsACQAAgVApAOIAEAFIgEgFQgBgSgMgIIAAgLQAeAAAFABQASAEAIAUQgUAAgEAUQgEAZgKAEQgYgDgXAOQgEgcAAgNg");
	this.shape_282.setTransform(265.9,165.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#63225A").s().p("AgkAfIgEgxQANgGACgQIAYgCIAOAIIAZAHQAKAFgXAQQgKAGgDALIgEATIgiANg");
	this.shape_283.setTransform(243.1,141.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#6C2B72").s().p("AAiA5QgGgOgGAOQgmglgPgVQgYglAPgrQAUAHANAVQAHAMALAbIAOAZQAIAPAOAGQgBAIABASQgCAQgLAHg");
	this.shape_284.setTransform(254.5,137.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#7E3286").s().p("AAlAKQABgYgVgCQgIgBgBAQQgBARgKACIgiABQgTAAgPgIQAAgIAMgSQAKgQgEgNIAAAAQAFABAIAFQAIADAEgJIAbAMQAVgOAZADQAIANASAAIAAAJQgMAJAAAYQgBAYgLAJQgJgGgBgdg");
	this.shape_285.setTransform(262.1,172.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#782F7E").s().p("AAiBKIgOgbQgLgagIgNQgMgUgUgGIgZAAIgBAAQAFgpgpADQgBgjAXgCQAOgBAcAGQAGAAAQAKQAOAJALABIAMAMIANAAIABALQAxBBABARQACASgoAnQgOgGgIgOg");
	this.shape_286.setTransform(253.6,131.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#742E7B").s().p("AA8BNIgZgQQgfgOgXAlQgxgCgNgcQgJgWAPgzQAQg0AUgPIAAgBQAGgBAWAYQAPASATgcQABAFALANQAJAKgFAIQgQAdAPAWIAkAlIgBAAIAMAaIAAAMQgKgBgPgKgAgUgdQgEAFADAGQAEAJANAFQAEACADgEQADgEgBgJIgFgGQgFgFgEgBIgEgBQgEAAgDADg");
	this.shape_287.setTransform(255.7,153.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#6C2B72").s().p("AhHBqIgmgxIAMgNQAEgJAPgJIAXgPQAagTgTgiQALgFAoAKQAhAJAQgbQARgBAFgLQADgHAAgTQACgYAXgBQACAmgOAZQAAAFAPAMQAKAKgKAEQgbAMADAUQABAMAIAYQgKAAgQgKQgQgJgHAAQgcgGgNABQgWACAAAjQAAAJgQAUQgOASAFAPg");
	this.shape_288.setTransform(246.5,120.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#742E7B").s().p("ABmDlIg2gZQgUgJAKAgQgCAPgHAFQgIAGgKgMIgdgTQgSgLANgWQAJgOgGgLQgDgGgNgKQgNgJgKAGQgHAEgIAPQgZgOgMgEQgWgHgQAZQgKgPgCgVQgBgHAAggIAOgEQAHgDgDgIQgDgJgJgBIgSAAQASgrAJgFQAKgGArAKQADgKgLgKQgMgMABgIQADgrgRgTQgSgVgqAFQACgRAXgUQAXgVACgRQASAlAJAHQAUAPAlgZIgzgQIAAgHQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQAQgOAigWQAbgWABgmQAAgWATAMQAYAQAIgFQAEAMgKARQgMASAAAJQAOAHAUAAIAigBIgNAnIgmAIQgVADgNgEQgFAGALAdQAGAVgfAIQgLADgEAUQgEAVAIARIAIAUQAGAJANgCQAlgHALgZIANgbIA/AMIAzgpQgSgGgNAHQgJAEgLANQgKgPAIgYQAJgcgEgLIALgLIAmgBIAAAAIAAAAIAAAAIAAAXQgBAbAaAAIAAAyQgaAOgMAQQgQATADAbQgpgZAFAwIgbgMQgpgBgKAEQgYAIgEAnQgPgbgIgKQgNgRgXATIgbgDQgQgBgNAIQAJAQARALQALAIAVAKIAAgBIATATIAKgTQAggHAaAgIAbAHQgPAgATAAIAggBQAKACAYgBQARAEgFAdQgDAVAPAFQAJADAVAAIAAAxIgLAMIgbABQgHgfgdgRgAhuBaQgVALgMAEQANAJARAAIAaAAIAFADIgFgDQgGgZgOAAIgDABg");
	this.shape_289.setTransform(254.2,194.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#712C77").s().p("AgCACIACgFIADACIgCAFg");
	this.shape_290.setTransform(208.4,147.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#7E3286").s().p("AAKAOQgPgDgDgFQgFgGANgMQAGgCAEACIABAag");
	this.shape_291.setTransform(224.3,138.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#742E7B").s().p("AgJANQgOgBAQgYQAZgCgCAaIgSABIgHAAg");
	this.shape_292.setTransform(192.5,127.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#712C77").s().p("AgLAQQgFgHAAgJQgBgPAMgEQAGgCARAAIAAALIgBAUQgCAMgOAAQgHAAgFgGg");
	this.shape_293.setTransform(208.5,140.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#6C2B72").s().p("AgOAhIAJgTQAEgLgMgHIAAgnIAMAEQAEAPAMAdQADAaggANg");
	this.shape_294.setTransform(211.8,135.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#7E3286").s().p("AgIAlIgJglQgGgVADgQIAqABIgHAYIgPAIIARAEIABAAIgBAmg");
	this.shape_295.setTransform(208.6,130.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#712C77").s().p("AgagcIApgPQgEAQAGAWIAKAkIgmANg");
	this.shape_296.setTransform(205.1,131.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#7C3083").s().p("AAQA5IgxgaIgBgLIABgZIARgBQAKgBAEgIQAAgCgBgEQgBgBAAAAQgBgBAAgBQAAAAAAgBQgBAAAAAAIgcAIQAAgSADgIQAGgMARgBQAhASAIAfQAHAZgLAng");
	this.shape_297.setTransform(182.4,129);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#6C2B72").s().p("AgeALIgNgPQAJgJACgFQADgJgIgIIgPgFQgKgDAXgCQAXgBAPgLQAMgJAKgVQAQAAAIAEQAKAGABAPQgRABgGAMQgDAIAAASIABAMIgMAEQgHADAAACQgDAIAHAEIAOAEIABALIAAAmQgBAZgYAAQAJg3gtgWg");
	this.shape_298.setTransform(175.9,129.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#0D010A").s().p("AAjBcQACgigPgNIgLgNQgHgHgIACQgKACACAIIAEANQgHAcgVAFQgLACghgGIgMgEIAAABIgDgMIAHgZQAAgLgLgGQgOgEgFgEQgGgWAMgnQANgqgDgUQAJgEAQABIAbADQAgACANgbQAoAWAjgWQAWgHANALQAKAJAGAXQABAWgTAoQgTAnABAXIgQBYIAAgBQgMADABALQgDAFABAFQgEgBgGACQgOgMADgig");
	this.shape_299.setTransform(219.7,123.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#0D010A").s().p("AD3CTQgDgSgdgYQgdgWgBgVQABgbgaABQgPgPgsgSQgpgQgQgVQgHgJgJAIQgIAJADANQgKAUgNAKQgOAKgXACQgXABAKADIAPAFQAIAJgDAIQgCAFgJAJIgYgIQgFgGgCAAQgEgCgEAHIgBgBQgJgCgUgRQgQgPgQADQgIgDgkgCQgcgBgPgKQgmAAgOgZQgBghATghQAKgTAfglQAVAuAXgRQAMgKAZgaIAagTIgBACIAkAAIAaAHIDTApIAlAPQASAXARA6QARA4AVAXIAPBJQgDANgDAFQgGAHgLABgAiFhqQgSAGAAAUQgBAKANAFQAJADASABQAkADAHglQADgQgMgBQgRABgIgCQgUADgKAEg");
	this.shape_300.setTransform(175.7,122.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#0D010A").s().p("AgiAiIALgfIATgXQAHgMAJgBQAKgBAIAKQAMAQgWAOIgSALQgIAIgEAJg");
	this.shape_301.setTransform(203.8,245.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#3C1B3D").s().p("AgRA5QgBgpAEgYQAFgkAPgbIAMBrIgLAeQgKAGgFAAQgIAAgBgPg");
	this.shape_302.setTransform(199.6,241.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#0D010A").s().p("AgUBqIgFgMQANglAKg+QAMhSAEgTIAGgBQAMAXgMBXQgNBZgRAOQgDACgCAAQgDAAgCgCg");
	this.shape_303.setTransform(193.1,244.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#3C1B3D").s().p("AguA2IgMg/IAAgXQgBgOAJABIAygHQAegFAUAYQAMAOgEAKQgCAFgJAKQgHAKAFAOIAIAYg");
	this.shape_304.setTransform(203.7,289.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#63225A").s().p("ACNCRQgzg8gagcQgGgIgPgWQgQgYgJgJQgNgPgTATQgVASgMgPIgageQgQgQgRgGQgTgHgFAKQgDAGACARQAHAsgTAuQgMAfghAwQgOgFgGgTQgJgZgDgEQADgKAKgHIARgMQAXgOgMgQQgJgLgJACQgJABgIALIgTAYIgMhqIAyiFIAygPQATgMAmAKQAmALATgMIAjAEIAAgBQADAIAHACQAEABALAAIABADQAVAHAgAeQAgAdAWAHIAOgDQAZASAEAGQAMAQgKAYQgGAOADASQADAPAKAQQgCAZAPAiQAUAsADANIAQAWIACAOIgCAiQg3gJgwgwg");
	this.shape_305.setTransform(224.9,239.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#68296D").s().p("AgFAEQABgIgCgDIANAMQgGADgCAAQgDAAgBgEg");
	this.shape_306.setTransform(96.9,228.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#7E3286").s().p("AgLAHIgDgHIAIgHIAVAPg");
	this.shape_307.setTransform(106,160.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#68296D").s().p("AgLgFIAXABQgGAKgGAAQgFAAgGgLg");
	this.shape_308.setTransform(100,206.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#642665").s().p("AgJALQgCgXAWADQAAAUgTAAIgBAAg");
	this.shape_309.setTransform(96.2,209.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#68296D").s().p("AgUAMQAJgcALAGQADABASAVg");
	this.shape_310.setTransform(91.8,225);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#68296D").s().p("AgKATQgXgFADggIAXAAIAZANQANAIABAQIgaABIgQgBg");
	this.shape_311.setTransform(101.9,182.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#712C77").s().p("AgQAhQgIgCAAgQQgDgYAUgJQAYgHAJgHIgCAnQgXgDACAYQgKAFgGAAIgDAAg");
	this.shape_312.setTransform(94.9,208.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#63225A").s().p("Ag2ASQgCgSABgHQAAgQANgIQATgEAeASQAfARASgEQgDAEgNALQgKAJABAMIgXgBIgMABg");
	this.shape_313.setTransform(98,177.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#68296D").s().p("AgaAAQAHgcAsgkQgFAYADAaIAGApQgBAUgDAGQgFALgRABQglgiAIgfg");
	this.shape_314.setTransform(85.9,223.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#712C77").s().p("AgYAnQgEgJAAgGQgDgdAAgPQAAgZAVgGQAWgHAHAYQAKAiADADQABAMgKAOQgNATgCAEIgZABIgHgOg");
	this.shape_315.setTransform(104.3,219.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#642665").s().p("Ag/AcQgFgKgBgjIAzgCIBJgYIAPAPIgDAjIgXgBIgOgLQgJAHgYAHQgUAJAEAYIgOACQgWAAgIgQg");
	this.shape_316.setTransform(94.4,205.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#68296D").s().p("AAGBCIgngJIgPgPIAYgYQAFgFAMgrQAJgeAZgJIAJAmQADAWgMAPQgPASAKAQQADAGAYAVQgJADgKAAQgLAAgNgEg");
	this.shape_317.setTransform(104.8,196.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#7E3286").s().p("AgwBUQghgLgGgtQAZgBABgYQAEgjAFgRQAIgdAggGQgHAQAOAcQANAdgIARQAVgMAYAAQAQAAAbAIIgCAaIgLAAQgMASgWAFQgLACgeAAIgFgRIgGAQQgFAHgHARQgGAJgKAAIgJgBg");
	this.shape_318.setTransform(64.9,207.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#68296D").s().p("AgDATQgkgBgCgBQgSgHAFgcQAOAOAWgFQAggJAEABIAnABIgPAaQgIAJgOAAIgXAAg");
	this.shape_319.setTransform(217.3,45);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#562354").s().p("AAHAfQgDgVgGgKQgKgLgVACQgMAAgFgGQgDgFAAgMIBGAGQAFAKAXAOQAQANgPAWg");
	this.shape_320.setTransform(218.3,40);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#63225A").s().p("AgagPQAPgTAgAEQAWACgBAMQAAAHgJAQQgTgHgUAMQgeATgFABQAFghAKgOg");
	this.shape_321.setTransform(229.5,41.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#7C3083").s().p("AhMA7QgKgBATgNQAVgQAIgSQAJgRgDgYQAGgCAcgSQAVgNATAIQAHAPAMgKQAOgMAFAHQAEANgTAjQgQAcARAVQgSAIgsgDQgogDgVANIgRACIgCAAgAgggeIAAgBIAAABg");
	this.shape_322.setTransform(228.6,47.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#712C77").s().p("AgBgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIACAEIgFABQAAgBAAgBQAAgBAAAAQAAAAAAAAQABgBAAAAg");
	this.shape_323.setTransform(249.8,40.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#712C77").s().p("AgKA9QgqgLgVgCQgSgVAQgcQATgjgDgNIA9gNIARAOQAKAIAHAEQAtAWACAMQADAMghAmQgUAPgaAAQgHAAgKgCgAgQAUQAQAHAVgIQgMgQgSgFQgLgDgfgCQAVAVAOAGg");
	this.shape_324.setTransform(242.7,46.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#63225A").s().p("AghAVQgbAAgJgMQgJgMAPgZQAtgMAoATQAqATAKAjQgugNg9ABg");
	this.shape_325.setTransform(283.2,62.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#63225A").s().p("AgBA4QgQgbgLADQgLgbABgSQACgYATgTIANgMIAZAYQAAAKANAoQAKAfgKAWQgLAKgIAAQgKAAgGgNg");
	this.shape_326.setTransform(263.4,57.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#3C1B3D").s().p("ACVA2QgfAMg7gSQg8gSgiAKQgKADgwAAQgpAAgWAOQgLgNgQAJIgXgDQgXgPgLgCQgTgEgLAcQgFABgGAEQgMgBgOgMQgQgQgHgCIBGgUQAogHAhAOQAOAGAQgKIAZgQQAkAUAHgPQAEgIgGgjQAlAmARACQARABAagdQALgEAQAcQAOAWAWgUQARgCANgRIAVgdQASgUAMAEQAKADAJAXQgPAZAJANQAJALAbAAQA+gBAuANQAaAMgCAYIg+AFIg+gBIgwAHQgJgOgBAAg");
	this.shape_327.setTransform(259.9,63.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#782F7E").s().p("AgFgCIALAAQgDAFgDAAQgCAAgDgFg");
	this.shape_328.setTransform(46.7,79.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#782F7E").s().p("AgGAgQgSgFgEgXIABgLIAMgMIAYgNIAQAdQAKAQgOAMQgJAIgLAAIgHgBg");
	this.shape_329.setTransform(30.1,74);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#7C3083").s().p("AgHBBQAAgWgFgJQgHgOgOgUIgXggQAFgMAWgMQAUgLAEgNIAYgBQgFAVAUAZQAXAbAAAOQgXAQgJAPQgNAUAGAZIgBAAQgUAAgEgRg");
	this.shape_330.setTransform(39.1,72.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#7E3286").s().p("AgCgDIAJgBIgMAJQgDgIAGAAgAAHgEIAAAAg");
	this.shape_331.setTransform(52.9,170.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#7E3286").s().p("AgLgLIAXAAQAAAYgXAAg");
	this.shape_332.setTransform(54.9,168.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#782F7E").s().p("AglgDQAYggASAFQARAFAQAhQgWAXgQAAQgWAAgPgig");
	this.shape_333.setTransform(47.3,151.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#6C2B72").s().p("AgBgEIADAHIgDACg");
	this.shape_334.setTransform(102.7,155.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#6C2B72").s().p("AAEgEIgBAJQgNgFAOgEg");
	this.shape_335.setTransform(57.1,86.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#6C2B72").s().p("AADgGIAAANQgMgHAMgGg");
	this.shape_336.setTransform(54.5,140.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#6C2B72").s().p("AgCAAIACgEIADAEIgDAFIgCgFg");
	this.shape_337.setTransform(74.3,196.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#712C77").s().p("AAAgHQAHAGgDADQgCACgGAEg");
	this.shape_338.setTransform(90.4,121.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#712C77").s().p("AgCAAIACgDIADADIgCAEg");
	this.shape_339.setTransform(75.6,134.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#68296D").s().p("AgLAGIgBAAQAHgMARABIABAAQgGALgQAAIgCAAg");
	this.shape_340.setTransform(62.4,181.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#68296D").s().p("AgBgBIACgBIACAEIgFABIABgEg");
	this.shape_341.setTransform(89.3,139.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#7E3286").s().p("AAFgMIAAAZQgUgNAUgMg");
	this.shape_342.setTransform(40.7,94.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#6C2B72").s().p("AgFANIAAgYIAAAAQAMAFgBATg");
	this.shape_343.setTransform(76.8,201.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#6C2B72").s().p("AgFgBQACgLAJgGIABAYIgNAMIABgTg");
	this.shape_344.setTransform(81.8,201.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#562354").s().p("AgDAIQgLgDgEgNIAUAFQALAEAGAIQgTAAgDgBg");
	this.shape_345.setTransform(79.4,138.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#6C2B72").s().p("AgMAAIAAgLQARgBAIAMIgNANg");
	this.shape_346.setTransform(78.8,203.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#68296D").s().p("AgIAEIgEgNIAZAAIgEALQgDAHgCABIgDAAQgFAAgEgGg");
	this.shape_347.setTransform(87.4,135.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#63225A").s().p("AgGgEIAIgEQAEAIABAEIgKAFIgDgNg");
	this.shape_348.setTransform(51.1,93.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#6C2B72").s().p("AgLAFIAAgWQAQAAAFAMQACAFAAASg");
	this.shape_349.setTransform(47.4,112.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#712C77").s().p("AgLACQAHgLAKgDQAFgCACAFQACADgBAGQgCAMgOABQgPgCAGgJg");
	this.shape_350.setTransform(67.1,123.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#642665").s().p("AgIALIgFgNQAIgOASABIgBARQgBAKgIADIgEABQgFAAgCgFg");
	this.shape_351.setTransform(78.7,147.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#6C2B72").s().p("AgRACIgBgTIAUAAQALACAGAKIgZAYQgJgHgCgKg");
	this.shape_352.setTransform(93.1,166.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#7E3286").s().p("AgFASQgLgEgCgPIAkgRIABAlIgBABQgTgBgEgBg");
	this.shape_353.setTransform(44.3,111.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#6C2B72").s().p("AgCAHQgGgGgMgSQAUgBAKAKQAJAIACASIAAAAQgOgBgJgKg");
	this.shape_354.setTransform(67.9,188);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#68296D").s().p("AgFADQgGgXgJgEQAZAEAJAJQANALgKAZQgRgCgFgUg");
	this.shape_355.setTransform(97,123.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#68296D").s().p("AgJAMQgOgJgBgVQAYAFAHAFQAPAIADATIgFAAQgUAAgJgHg");
	this.shape_356.setTransform(83.7,132.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#712C77").s().p("AABATQgHgFgRggQAPgEAMAJQAEADARAQQgMAOgIAAIgEgBg");
	this.shape_357.setTransform(33.6,102.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#68296D").s().p("AAEAWQgagJgCABIAAgkQALgCANAOQAOANALgBIAAAAQgDAVgNAAIgFgBg");
	this.shape_358.setTransform(58.6,182.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#6C2B72").s().p("AgIAFQgKgKABgGQABgKANgBIAWgBIAAAXQgBAPgKAJIgQgTg");
	this.shape_359.setTransform(75.5,169.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#712C77").s().p("AgNANQgPgBgJgMIAAgMQANADAZgDQAXAAAOAMIgaANIgOAAIgLAAg");
	this.shape_360.setTransform(95,113.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#6C2B72").s().p("AgMgnQAWAZACAKQACAJgJAig");
	this.shape_361.setTransform(70.3,181.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#642665").s().p("AgTAKQAHgWACgMIAXAAQABAIAFAQQACAPgIAKIgHAAQgYAAgBgPg");
	this.shape_362.setTransform(82.4,169.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#63225A").s().p("AgKgMQAPgPAZAEQgGAVgRALQgMAKgYAGQAIgaALgLg");
	this.shape_363.setTransform(70.6,139.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#7E3286").s().p("AgIgFIgLgSQgHgKALgFQANgGAGALQAEAHADASQgDAWAPAaIgYABQgDgfgEgPg");
	this.shape_364.setTransform(83.9,107.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#68296D").s().p("AgOAFQgTgRALgZQAIAMAOABQAJABASgBQgJANgCAQQgBAKAAAXQgCgGgbgbg");
	this.shape_365.setTransform(93.5,117.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#6C2B72").s().p("AgXAMIAAgLQAUgMgUgNIAAAAQAGgMASgBQABATALAHIAMAAQgLApgmAIg");
	this.shape_366.setTransform(76.1,206.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#7E3286").s().p("AABAjIgFABIgIgNQgFgIAAgFQgCgKAAgMIABgXIAMACQAGAAADADQAOAOACAEQAFAMgPAMQgCACAAAIIAAAOg");
	this.shape_367.setTransform(68,114.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#712C77").s().p("AgEArQgNgDADgMIAGgWQgBgJAAgPIACgZIAXADIAAAwQgHADABATQAAAOgKAAIgEgBg");
	this.shape_368.setTransform(74.7,126.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#642665").s().p("AgJAKQgYAGgFgKIAbgeIAwANQADARgEAIQgEALgSAAQgEgVgTAGg");
	this.shape_369.setTransform(58.5,145.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#6C2B72").s().p("AgbAfQATgLAAgSQAAgJgJgXQAUACAMAJQAPAKgCARQgCAUgTADIgiAAg");
	this.shape_370.setTransform(52.7,117.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#562354").s().p("AgcAAQAMgcABgDIAxAjQgiAZgcADQgJgPAJgRg");
	this.shape_371.setTransform(82.8,142.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#642665").s().p("AgQAiQgMgEAPgPQAEgEgCgMIgDgXQgBgYAlAYIgDAfQgDASgIAMQgRgBgHgCg");
	this.shape_372.setTransform(95.4,144.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#6C2B72").s().p("AgYAgQgHgIAFg6QAMAkArAYQgdAJgOAAQgHAAgDgDg");
	this.shape_373.setTransform(55.6,132);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#6C2B72").s().p("AgPAfQgKAAgCgLQABgNgBgGIAAgBIAPgJIAMgRQAHgJANAIQADACADAIQADAIgBACQgDACgQAWQgJAOgOAAIgBAAg");
	this.shape_374.setTransform(72.7,189.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#63225A").s().p("AgQASQAAgDgNgPQgIgMAJgKQAKgLAPAEIAYAJIAMAZQADAPgPALg");
	this.shape_375.setTransform(81.6,189.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#6C2B72").s().p("AgDAwQgLAAgDgKQgBgDAAgPIABhCIAIgBQARAXAEAJQAKASgEAUQgGAZgOAAIgBAAg");
	this.shape_376.setTransform(60.5,94.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#7C3083").s().p("AgIAeIgYAAIAAgvIAZgCQACAOABAAQAGABABgFIABgKIAAgLQAGAEAOAEQALAHgDAPQgGAfgaAAIgIgBg");
	this.shape_377.setTransform(79.5,124.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#642665").s().p("AgPAdQgSgHgJgKQAYgHANgIQAQgMAGgVIAagBQAAAbgEAOQgGAVgSANQgUgFgKgEg");
	this.shape_378.setTransform(71.9,141);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#642665").s().p("AgYAvIgNgjQAmAKAHgWIADgwIABgBIAVAAQACAFABAHIAAAMQgHAKAFAPQAFASgBAGIgLAPIgEAKIgXACg");
	this.shape_379.setTransform(76.4,117.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#642665").s().p("AAHAZIg3gCQgBgPAOgIQASgHAGgGIAlgLQADAGAOAKQAKAJgHANQgGAKgMABIgVAAg");
	this.shape_380.setTransform(66.1,158.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#63225A").s().p("AgWAbQgBgEgBgKIAAgLQAJgKgKgIQgLgKABgHIAugEIANABIAMAyQgQgBgJADQgLAFgDAPIgJACQgHgEgDgHg");
	this.shape_381.setTransform(60,85.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#63225A").s().p("AgCAHQgVgMgSgDQALgbAUgBQAKAAAaAJQARAHgBATQgCAfACAHIgsgeg");
	this.shape_382.setTransform(30.7,136.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#6C2B72").s().p("AgeAgQgGgZANgTQAJgPAWgQIAYAZQgIAHAFALQAFAOgBAFIgYgBIgHgFIAFAHQgEAYgLAAQgJAAgNgMg");
	this.shape_383.setTransform(44,77.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#63225A").s().p("AgXAuQgMgGgDgPQASgNAGgUQAEgOgBgcIANAGQADAOAMAEQAEABASAAIgNAdQgJATAJAPIABAAQgUgBgHAOQgRgCgGgDgAAngZIAAgBIAAABgAAngZIAAAAg");
	this.shape_384.setTransform(77.3,142.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#68296D").s().p("AAFATQgZADgNgDQgjgNAWgkIAMACIAEANQADAGAJgBQADgBADgGIAEgLIAYgDQAAATANAFQAHACATAAIgBAUQgDALgKAFQgNgMgXAAg");
	this.shape_385.setTransform(94.6,110.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#7E3286").s().p("AgiAbQAGgCAQABQAMgCgMgTQgHgKgBgPIgBgbIAAgBIAXANIAYABQAJAXAAAKQAAAQgTALQgIAFgQAQQgEACgDAAQgKAAgJgWg");
	this.shape_386.setTransform(48.3,118.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#63225A").s().p("AgpAUQgEgQAQgQQAPgRATgCQAUgDALAPQAMAQgJAPQgJAQgXAFQgWgPgaACg");
	this.shape_387.setTransform(84.3,158.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#63225A").s().p("AgsAqQgDgLAPgNQAPgMgDgLQABgFgBgGIABgaIBBAeQgUAdgRANQgSANgXAAIgMgBg");
	this.shape_388.setTransform(43.2,97.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#7E3286").s().p("AABA5IgBgZQgUgagIgMQgPgZATgZIAlAOQgEAMATAjQAQAegUAWg");
	this.shape_389.setTransform(82.4,196.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#6C2B72").s().p("Agqg9IAwAKQAFAOgFAjQABAaAlABIAAAaQgIANgXgGQgWgHgIAMgAgrg+IAAAAIABABg");
	this.shape_390.setTransform(66.8,88.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#642665").s().p("Ag+gEQAVANAQgJIAbgXQASgQAJgGQASgKALAPQALAOgOALQgIAGgVAJQgHADgHALIgMATIgkARQgTgQgHgmg");
	this.shape_391.setTransform(46.1,106.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#742E7B").s().p("AANAgIg+AAQgBgaABgKQABgWAagEQAYgCAXAOIAaAZQgBARgMAFQgGADgOAAIgFAAg");
	this.shape_392.setTransform(82.4,164);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#642665").s().p("AgTAFQgBgbgRgUQAIgMAXAHQAWAGAIgNQAXApgQAbQgNAXgqATQAGgjgBgQg");
	this.shape_393.setTransform(68.7,98.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#712C77").s().p("AgpAAQgOgcAHgQIAAAAQAbgEAaAVQAqAeAFACIgBAAIABAlQgbgJgQAAQgXAAgVANQAIgSgOgcg");
	this.shape_394.setTransform(68.5,203.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#7E3286").s().p("AADBHQgXgHgEAAIgNAAIgLg8QgEgXALgUQAKgTAUgKQARgIASAKQAQAJAKAVQgGAGgSAIQgOAIABAOQgCAXAEAMQAFASARAKQgLAKgMAAIgLgCg");
	this.shape_395.setTransform(59.9,160.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#742E7B").s().p("AADAlQgYgUgmAUIAAgMIgMgOIAAgLIAZgZQAmAGAKgSQAKgPgJgjIApAFIgDABIADAKQACAEAHgJIgCAAIAPABQAAAKAGAVQACASgTAJQgLAFgCALQgDAKAJAKQAQARgFATQgCAHgRAZIAAABQgdgsgIgHg");
	this.shape_396.setTransform(99.7,168.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#712C77").s().p("AgVBVQgIgEgYgFQgagLAAgbQAjAFAGglQADgNgLgHQgOgFgGgDIgIAAIAKgPQAlAAAAgcQgGghAFgOIAYAAQAFAOAPAdQAJAZgLAWIATALQABAQAMAFQAGACATABQAfBQhRAUIgYAAQgDgTgPgJg");
	this.shape_397.setTransform(86.6,123.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#742E7B").s().p("AhNCyQgIgDgFgLIgfhJQAPgMAaASQAYARAKgSQARgVAFgNQALgXgOgTQgQgigRgEQgTgGgYAfIgQgPQgJgKgMABQANgpgCgiQgBghgSg0QAaAKAMALQAPAOAHAYQAMArAeAIQAdAGAagfIAAgOQADgLACgCQAEgFAGANQAEAIADANIADAYIgbAeQAFALAYgHQAUgGAEAVQARAAAFgLQAEgIgDgSQAhgJANAYQAHAMAJAfQAFAIgBARIgCAdIgmALQgKgVgQgJQgRgLgSAJQgUAKgKATQgLAUADAYIAMA8IgYAAIgegOQgSgIgNAWQgEAJgGAAIgEgBg");
	this.shape_398.setTransform(53.9,150.2);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#712C77").s().p("AhzC2QATgWgPgdQgTgkADgNQAQgLgEgPIgMgaIADglQACgXgegFQgKgBACgLIAGgTIAGgQQAFgIAMADQAEABAKAJQAJAFAEgOQAGgSgdgOQAJgKgDgPQgFgRgBgIQASAAAIgDQAMgFAAgRIAmAAIAAAUQADALAJAGIABAMIgOAOIgQgRQgKgLgNAGQgGADgBAHQAAAGAFAFQAWAZATgYIAMgBIANANIAAAYQgMAIAAAQQgBAIACASQgCAZAQASQAFAGAdAXIAAg6IAOgBQgDAhAWAEQAOACAegCQANAEAWAVQAUAUATACQgMANgPgFQgUgFgDABQgZAIgKAfQgNArgEAGQgLgDAAgBQACgpglgHIgfgEQgSgDgHgKQgYAVAEAaQADAQASAeQADADABAIIAAANIgzABQgTgBgHgLgAhjgDIAFABIACgFIgFgCIgCAGg");
	this.shape_399.setTransform(96.5,184.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#712C77").s().p("Ag7DzIgnAAIAAgOQAAgIADgCQAOgNgFgMQgCgFgOgNQgCgDgIgBIgMgBIAAAXQAAANABAJQABAGAEAIIAIANQgUgGgaglQgaglAHgOQACgGAJgFQAJgFAEABQAdAOAAgQQgEgXAEgGQArgTANgWQAQgdgXgoIAAgZIANgNIAEgQQAEgIAHANQAEAGAFAMQAFAGALgFQAJgEgBgKQAAgEgEgPQgCgGgRgVQgMgQAGgKQATgegQgIQgYgEgKgFQgHgLARgUQAQgSgOgPIAsgBQAKACALgDIAVgJQAmAXAlgXIBMAlQghAsAhAsIhMAMQACgPgDgJQgFgMgOgEQgNgEgGALQgEAFgFAOIgMAWQgFANAKAJQANALAPgBQAPgBAMgNIAVABQAMACAGAKIgBAYQgOARAPAWQAQAXgEAMQgEANAIAbQAIAbgGAOQgMACgGgOQgGgOgIADQgNAEABAOIAAAZIgxgBQgEgRgEgHQgGgMgNAGQgMAFAHALIAMASQADAPAEAgIg9ABIgCgTQgCgKgDgHQgFgQgFgGQgHgMgOAAQgCAAgEAEQgEAEgBADQgDASABAKQADAPAMAHQAGAEALACIATADIgDAxQgFAQgVAAQgJAAgMgDgABCA4QgCAIAEAGQAEAGAIACQAUACAKgTQABgLgHgBQgKABgEgCQgGgCgFAAQgKAAgDAKgAA0gBQgTAFgRATQgDAEAFAFQAEAGAJAAQAPgFADgCQAKgGADgKQABgHgCgGQgCgDgEAAIgDAAg");
	this.shape_400.setTransform(78.5,94.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#712C77").s().p("AgZAIQgCgcAVABIAgACIgBAlIgHABQgSAAgZgNg");
	this.shape_401.setTransform(28.6,283);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#7C3083").s().p("AgFgMIALAMIAAANQgLgGAAgTg");
	this.shape_402.setTransform(27.9,199.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#742E7B").s().p("AgoANIAjgiQAUgVAaADIAAAZQgQAqgKAIQgGAEgHAAQgQAAgagbg");
	this.shape_403.setTransform(32,158.7);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#742E7B").s().p("AgSgMIAlABQgBAXgYABg");
	this.shape_404.setTransform(56.8,208.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#742E7B").s().p("AA3BDQgXgEgRgOQgTgQggADQgkAHgSABQgZgPgJgJQgQgRAJgWQgDgTABgKQADgTAdAaQAEAEAPgQQAQgRANADQAGAtAiALQAPAFAIgNQAHgRAFgHIAMABQAeAAALgCQAWgFANgSQAGAKgDARIgHAeQgIAkAlAMQgCACgWAIQgPAFABAQQgdAAgNgCg");
	this.shape_405.setTransform(61.5,216.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#712C77").s().p("AgqBdIAAgMQAOgBAFgHQAHgHgFgNQgYg9AAgRQABgSAbgyQAsAGAMALQASARgdAqQgBACAGAIIALANIAAABQggAFgJAeQgDAQgFAkg");
	this.shape_406.setTransform(59.2,198);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#7C3083").s().p("AgFAUIAAgnQAMAMgBAJQgBAIgKAKg");
	this.shape_407.setTransform(39.2,252.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#7C3083").s().p("AgIAGQgFgGANgMQAKAHAAASQgPgEgDgDg");
	this.shape_408.setTransform(27.5,228.7);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#7C3083").s().p("AgBANQgIAAgDgHQgBgDAGgFIAHgKQANAHAAASIgOAAg");
	this.shape_409.setTransform(29.7,252.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#782F7E").s().p("AgOgBQAIgKAHABQAIAAAFAKQADAHgHACIgLACg");
	this.shape_410.setTransform(21.2,258.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#7C3083").s().p("AgIAkIAAhHQAQATABAUQABAMgEAVg");
	this.shape_411.setTransform(33.9,241.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#7C3083").s().p("AgFAWIgTgJQABgUAPgJQAKgGAXgCIgMAwIgHABQgGAAgFgDg");
	this.shape_412.setTransform(26,234.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#742E7B").s().p("AgPAlIgGhJQAWAJAHAaQALAiADAEg");
	this.shape_413.setTransform(27.6,263.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#63225A").s().p("AgcAmIgPgZQAMgGAFgQQAGgXAEgFIASAJQAKAFAJgDQARAFAFAHQAFAJgQAJQgJAGgSAQQgPAMgPAAIgDAAg");
	this.shape_414.setTransform(25.2,239.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#6C2B72").s().p("AgUAcQgJgIgDgUQgEgUATgKQARgKALARQAOAWAJAAIgBAJQAAAagZAAIgIABQgMAAgIgHg");
	this.shape_415.setTransform(45.3,254);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#782F7E").s().p("AAGAfQgBgXgUAKQgNAGgFgBQgKgBAAgQIABgTQADgLAJgGIAkAAQAPgCAFATQAGATAMAAIAAANQgIANgTAAIgLgBg");
	this.shape_416.setTransform(29.2,270.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#742E7B").s().p("AgrAxQACgCAGgdQAFgSAbAIQAWgNgJgPQgKgOgCgGQgGgMAPgGQAPgHAJAOQAFAHAGATQACAEAAAIIgTAdQgJARACARIg9AMg");
	this.shape_417.setTransform(38,266.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#63225A").s().p("AgEgDIAJgCIgBALg");
	this.shape_418.setTransform(33,281.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#712C77").s().p("AgHAKQAFgSAKgFIgBAYIgKADg");
	this.shape_419.setTransform(32.9,280.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#7C3083").s().p("AgEgBQABgIAIgDQACARgMAJQAAgMABgDg");
	this.shape_420.setTransform(185.8,262.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#782F7E").s().p("AAAAKQgMgCgJgHQAIgBARgJQAOgEAEAYIgKAAIgMgBg");
	this.shape_421.setTransform(82.8,235.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#3C1B3D").s().p("AgNgHQgCgSAdAIQACAXgZAPIgEgcg");
	this.shape_422.setTransform(54.7,260.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#742E7B").s().p("AgTAFQACgWANABQACAAAWAKIgZAXg");
	this.shape_423.setTransform(43,270.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#782F7E").s().p("AANgYQAOALgEANQgCAJgIAPIgjABg");
	this.shape_424.setTransform(78.6,232.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#3C1B3D").s().p("AgYAEQgBgCABgEIACgJIAwAKQgUALgKACIgDAAQgKAAgHgIg");
	this.shape_425.setTransform(56.6,266.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#742E7B").s().p("AgfgkIApgBQADADANAFQAJADgDACQgXAJAHAVQAJAagHAGQg3gRAGg5g");
	this.shape_426.setTransform(55.5,252.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#7C3083").s().p("Ag3BTQgDgSAJgRIATgdQAbgHAGgWQADgJABgkQAZAAAAgbQAUAJAFASQgYATgNAoQgUA7gDAIQgXgKgCAAQgNgCgCAYg");
	this.shape_427.setTransform(45.4,263.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#63225A").s().p("AhAARIgSgeQADgcAZgJIAagBQAMABAcAPQAaANASgDQgCAWAEAKQAFAQAUAFQgXATgugDQgygCgSAKQgBgQgJgTg");
	this.shape_428.setTransform(108.1,230);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#782F7E").s().p("AhOAUQgFgUADgQQARgBAFgLQADgGABgUIAJABIAzAAIANALQABADAAAKQABAHALgGIAWgBIASAeQAJATABAQQghgFgrAHIhKARIgKgjg");
	this.shape_429.setTransform(94.3,231.6);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#782F7E").s().p("AgGACIACgUQAJAHABAKQABAFgBAOQgLgEgBgMg");
	this.shape_430.setTransform(304.9,250.4);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#742E7B").s().p("AgCAHQgUgKgBgRQAYgQAXAQIAAAxQgEgKgWgMg");
	this.shape_431.setTransform(303,115.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#562354").s().p("AgtAPIBNgpIAMANIABAOIgEANQgYANgVAAQgVAAgUgMg");
	this.shape_432.setTransform(203.5,302.7);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#712C77").s().p("AgcgJQANABAMgLQAQgPAEgCQALAPAAAVQABAMgFAZIgrAAg");
	this.shape_433.setTransform(265.2,301.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#642665").s().p("AgDAsQAIgSgVgaQgWgZAKgTIA5AMQABAFgJAcQgGAUARANQgGAJgKACIgTgBg");
	this.shape_434.setTransform(224.8,300.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#742E7B").s().p("AAUAmQgHgEgEAAQgggFgFgKQgGgMAegVIAOgSQAJgLALgBIAABZIgKgHg");
	this.shape_435.setTransform(302.3,97.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#642665").s().p("AAFAAQABgSgrAMQAGgYAbgFQAigGAGgFQADAZgBAOQgCAUgJAQIgsASQAWgkAAgLg");
	this.shape_436.setTransform(301.8,145.4);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#712C77").s().p("AAhAzQgKgSgKgIQgNgMgRgBQAAgXgZAAIAAgZIANgOIAZAAQABASATAKQAXAMAEAKIAAAzg");
	this.shape_437.setTransform(301.1,118.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#3C1B3D").s().p("AgyAnQAQgPAEgIQAHgOgVgPQgKgJAJgHQAGgGAOgDQAMARADACQAJAGAQgNQAPgMALAIQAKAIgBAVIhMAog");
	this.shape_438.setTransform(201.6,300.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#3C1B3D").s().p("AgrA0QAdgUALgNQAQgVgDgcIgBgCIAQgLIATgQIAAAzQgQAmgLAPQgLAPgSAAQgNAAgSgIg");
	this.shape_439.setTransform(301.1,276);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#562354").s().p("AgiANQAIgcgBgFQAMgGgBgQIARgDQAkADAAAjQgOAHADARIADAOQgJAMgQACIgcABQgRgNAHgUg");
	this.shape_440.setTransform(230.4,299.5);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#782F7E").s().p("AAAAKQglgXgLgVQAWAJAcgLIAwgRIgBBrQgLgVgmgXg");
	this.shape_441.setTransform(300.5,260.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#63225A").s().p("AgpAsQgkhBBGgjQgBAXAEAKQAFAQASAHQAgANADApQggADgRAAQgbAAgTgNg");
	this.shape_442.setTransform(280,299.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#68296D").s().p("AAwA+QgDgJgMAGIgWgMIgBgMIgLgkQgLgPgcAOIgBgRQgBgLgHgFQgfgcAOgHQAJgEAegCIAAAJQALAVAlAYQAmAWALAVIABAoIgTAQg");
	this.shape_443.setTransform(298.4,264);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#63225A").s().p("AgwA1IAAgiQAIgFADgMIAGgTQATgEgBgMQAAgEgIgSIA9AOIgBAIIgCAVQABALAMAEIAAAeIgwASQgPAFgOAAQgLAAgKgDg");
	this.shape_444.setTransform(300.5,251.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#742E7B").s().p("AAVBaIgjgSQgegPgKgTQgMgXAQgdQAIgCAKARQAJAPAOgKQASgPAGgKQAKgQgJgVQgKgYAUgOQALgIAJAKIAOAOIAACxIgEAAQgQAAgTgJg");
	this.shape_445.setTransform(299.4,81);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#782F7E").s().p("AAAA7QgKgSgIACIgvgMIgcgOIABhGIA9gFQAQAGAugMQAngLAYAUIgBAkIgPgPQgIgJgMAIQgTANAKAYQAJAUgKARQgGAJgTAQQgGAFgFAAQgHAAgFgKg");
	this.shape_446.setTransform(296.1,75.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#712C77").s().p("ABAB3QgPgCAFgZQAFgYghABQgqABgCgnQAHgBAPABQAOgBAGgMQgGgMgOAAQgPABgIgBIABAAQgBgQAPgFIAYgIQgOgLgsgWQgmgSgSgTQADgVARgDQAJgCAWAAQAUAlAYANQAdAPAmgOIAYgBQgDAZAGAzQACAvgUAdQgDAEAHAMIALAVIgcgBg");
	this.shape_447.setTransform(296.2,184.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#0D010A").s().p("Ah0A8IAGAAQAbAEAAgJQABgHgKgBIgQAAQgCgHADgFIAXAAQAkgBAPgMQAUgQgGgjQAAgEADgHIAHgMQADgDABgEIASgFQAKgDAFgIQAPAFAigCQAeACAIAfQAHAOgQATQgQASAHAOIAJAvIhvADIgNAAQg7AAgngQg");
	this.shape_448.setTransform(252.7,297.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#3C1B3D").s().p("AgUC5QgcgEgOAAQAFgZgBgMQAAgVgLgQQAvgTgPgrQAMgqgXgiQgBgIAIgdQAGgXgKgPIAIgSQAFgLgEgJIgKgMQAJgcAcAAQABAYAPAGQgDAbAYAiIgCALQgQBHA8BBIgRAQQhFAjAjBCQgPAOgWAAIgCAAg");
	this.shape_449.setTransform(273.9,286.9);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#782F7E").s().p("AADBqIgOgBQACgfgBgQQgCgbgYgNQAAgNgSgMQgTgNgBgMIAAgYQgHgcATgPQALgIAbgMIANAAIAAAAQALAUAcAJQAlANAJAHQAAAgADA/QABA4gNAng");
	this.shape_450.setTransform(298,235.6);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#712C77").s().p("Ag4BhIgCgNQALgHgBgTQAAgigkgDQACgpgqgTQgKgeAHgPQAHgSAggDIAQgDIAwgCQAKAjAfAHQATAEAogBQAkAWATAiQgBAEgDADQgZgCgLABQgTABANAjQADAIgOAEQgRADgHACQgJgCgKgKIgTgSQgXgTgkAfQAcgGALAgQAJAgAcgFQgDAFACAHIgCANIgGAAIgmABQgYgBgOgNg");
	this.shape_451.setTransform(239,292.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#7C3083").s().p("AAiBXQgagOgqAfQgFgUgYAAQgbABgHgHQgNgbAVgJQAVgJAGgTQAFgOgDgXIgEgVQAGgYAYgZQAjglADgFQAXAAABgYQArgNAAATQAAAMgXAkIAsgSQAMA4gBBXIgCCQIgXABQgThBgZgNg");
	this.shape_452.setTransform(295.3,160.7);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#742E7B").s().p("AgHCjIgNgMQAWhJgDgPQgFgQg0gWIgigoQgUgZAJgbIgegGQgMgzAMgMQAMgNBKgNIAPAAQARANgGAaQgFAcAOAGQAEACAfACQATABABgTQABgUAKgBQAZAAAAAZQAPAVgHAbQgDAPgMAfQgBAFgFAHQgDAHAHAFQAFADAHABQAGABAGgCQATgEgIgSQgJgRAKgRQAEgGAUgVIAKAAIAACsQgGAFgjAHQgaAFgGAXIgjgLIgWgEIAHAbg");
	this.shape_453.setTransform(291.4,129.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#562354").s().p("ABZCWQgcgGg0AEQg2AEgYgDQgDgqgggNQgSgHgGgQQgEgLABgWIARgQQAfgDAHgIQAKgLgYgbQgFgFABgNQABgQAAgHQAIgDArgKQAggIARgLIALABQAIANARgCQAqATATgbQALgPAQgnIACEBQAAAsggAAIgMgBgAA5AhQgBAKADAHQADAIAHgDIAZgKQAOgIADgRQgDgOgWgDIgFgBQgVAAgDAfg");
	this.shape_454.setTransform(292.4,290.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#7E3286").s().p("AiID0QgGgLgTgCIAAgLQAGgLACg3QACgqAcgTQABgCASAIQAOAHgMgbIgVg8QAYgrBFgFQA2gGgVg2QgWgSgLglQgOg1gEgIQAPgWASARQAWATALgHQAAgGgKgPQgJgOAEgKIAvAMQgPAeAMAXQAKATAeAPIAjASQAVAKATgBIAAAXQgMABgJALIgPASQgeAWAGAMQAFAJAhAFQAFABAGAEIALAGQgBASgGAlQgDAhAKAXQgXgQgaAQIgYAAQgHgMgSABQAPgfAAgIQgBgQgnAEIgHgdQgQATgSgIQgVgPgLgDQgMgEgJAFQgLAGgCAMQgBAMAJACIASABQAUAAgBAPQgCAXABACIAAALIgBANQhKANgNANQgLAMAMAzQgMAIgBAPQgBAIACASg");
	this.shape_455.setTransform(289.2,102.7);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#7C3083").s().p("ACOESQgegJgKgUQAPgKgFgOIgEgDIgGAPIgZgNQACgmgagJQgFgCgvgBQACgPgUgKQgUgKABgPQACgSgIgMQgHgLgSgMQgggTgHglQgHgjAVgXQgHADgNgCQgPgEgHgBQgZgCgCAlIgYgBIgCgMQgCgbAPgUQAMgPAbgOIAxAAQAFAHAFACQAGACADgHQADgJgHgEQgCgBgMgCIgWgXQgOgNgPgCQgZAAABgbQASgJgSgOQgEgfAQggQAKgYAcgCQAQAOAPADQAPACApgGQgNAUAOAHIAXAMQASASAmATQAtAWAOAKIgZAIQgPAGABARIgTAAQgLABgBAJQgBANALABQAHABAOAAQACAmArAAQAhgBgFAYQgFAZAPABIAcABIgBFDQgJgHgkgNgAgyi5QgOAFAEAQQADAPAJAHQAVAOAKAiQAMAqAFAJQAJAOgIAVQgHARAGAFQAaATAKAiQAGAVAIApQAPgDATgWQATgWAVgFQgWgNgLgLQgMgOgGgUQgIgYgeg+Qgbg2gGgkQgDgUgRgHQgIgDgJAAQgHAAgIACgAihjNIABAAIAAAAgAigjNIAAAAg");
	this.shape_456.setTransform(286.6,199.1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#0D010A").s().p("AiVFYIAFgNIAJgDQAFgCAAgCQABgGgGgBIgKgCIgNgMQABgVgKgIQgLgIgPAMQgRANgJgGQgDgCgMgRQACgHgCgFIBkAAIgIgYQgFgOAHgKQAJgLACgFQAEgKgMgOQgUgYgfAFIgyAHQgJgBABAOIAAAXQgqgZgVg1IgdhhQgHgVAQgUQANgRAZgLQBNgjAyhFQAhgvAMggQATgtgHgtQgCgSADgFQAFgKATAHQARAGAQAQIAaAfQAMAPAUgUQAUgTANAQQAJAKAQAYQAPAWAGAHQAaAdAzA8QAwAwA3AJIATAFIAdAwIg3AXQAxAaAUAlQAUAmgQAjIgpAeQgRgLgIgDQgPgFgMAPQgOgMAEgNQADgHANgOQAPgOABgKQABgNgSgLQgegSgHAqQgHApgPgOQgRgYgIgBQgFAFABAXQABATgTACIgwACQgIgGgIAJQggADgHASQgHAPAKAeIgYAAQggAHABAYQABANAJAeQgKATAVAaQAWAagJASIhUADIgJAAQgtAAgegNgAiMEgIACgDIgDgBgAkXgUQgIAEgWATQgOAWANAQQAFAHAZAPQANAJAPgJIAagRQgJgIAIgaQAHgXgVgHQgLgGgKAAQgJAAgIAEgADjANIAFgCQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAIgFgBg");
	this.shape_457.setTransform(222.5,269.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#712C77").s().p("AgdAwIgBABIgNgLIgMAAQAXgOgMgYQgOgdADgIQARgOAZgCQANAAAeAEQAFAIAIgDIANgFQgJANAIAnQAHAjgWAQg");
	this.shape_458.setTransform(216,31.9);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#7E3286").s().p("AAAADIgHgHIAPAEQgEAFgDAAIgBgCg");
	this.shape_459.setTransform(113.3,17.3);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#68296D").s().p("AglAHIAjgkQATAAAGANQAAADALAMQAJAIgIAKQgJgQgcAWQgKAHgHAAQgNAAgFgXg");
	this.shape_460.setTransform(129,36.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#742E7B").s().p("AgGgCIAMAAQgDAFgDAAQgCAAgEgFg");
	this.shape_461.setTransform(106.9,30.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#782F7E").s().p("AADgFIAAALQgMgGAMgFg");
	this.shape_462.setTransform(105.9,27.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#712C77").s().p("AgKACIgCgRIAZgCIAAAWIgNAMQgIgEgCgLg");
	this.shape_463.setTransform(113.8,27.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#742E7B").s().p("AARAlQgLgCgGgKQANgNgGgGQgDgEgPgCIgNAAIgNgLIABgNIANgNIAwAFIACASQACAKAJAEIAAAmIgVgBg");
	this.shape_464.setTransform(110,29.3);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#712C77").s().p("AAGAQQgLgCgFgJQgEgGgCgOIACgBQAaADAEATQABAFgDADQgCADgEAAIgCgBg");
	this.shape_465.setTransform(26.4,25.9);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#782F7E").s().p("AgCgSIALAAQAMASgMATQgpgIAegdg");
	this.shape_466.setTransform(51.4,21.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#742E7B").s().p("AgFADQAFgLAFALg");
	this.shape_467.setTransform(124.4,17.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#63225A").s().p("AgkAQIgNgOIAzgVQAFANAVgQQATgPADAbQgPAegtAIQgGgMgUAAg");
	this.shape_468.setTransform(132.4,31.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#7C3083").s().p("AgxBGIgMgfQgGgVAOgOQAMgLACgPQABgPgKgPQAGgRATgHIALAAIABgBQAPA3ANALQANALAhgNIABAyIg0AXIgRABQgIgCgTAOQgHAFgEAAQgFAAgBgIgAAAAfIAGgBIgHgCIABADg");
	this.shape_469.setTransform(126.2,25.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#63225A").s().p("AAOAyIgLgBIgFAAQgCgagegPQgjgRgGgNQgJgQALgLIASgTIAyADIAkgDIAwABIABCIIhCgTg");
	this.shape_470.setTransform(297.5,58.7);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#742E7B").s().p("AhFBCQgjgEAVgbIAYgSQAOgLAAgOQAMgTgMgTIAjghQAOAJAAAUQABAZAFAIQAMgHAagJQAVgLgCgbIAZAMIgBAPQgLAIgBAPIAAAZIgNAMIgJAGQgNgLgWgBQgSAAgIAEQgWANAUAOQAWAQgJAMIgFALg");
	this.shape_471.setTransform(57,24);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#6C2B72").s().p("AgSACQAAgSgBgJQATADAJAQIALAfIgaABQgLgJgBgPg");
	this.shape_472.setTransform(105.7,48.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#6C2B72").s().p("AgZAZIABgxQAKAHAOgDIAZgFQAIAzgsAAIgOgBg");
	this.shape_473.setTransform(102.5,54.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#6C2B72").s().p("AgSAsIABhXQATAMAGAdQAIAoADAGg");
	this.shape_474.setTransform(93.1,43.7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#7E3286").s().p("AgTAJQgMgMAGgOQAIgQARAGQAXAJAFgBIgBAkIgZANIgVgVg");
	this.shape_475.setTransform(88.5,41.4);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#782F7E").s().p("AgZgQQAHgFApgPIANAkQgDAWgaABQgcABgFANQgTgkAUgRg");
	this.shape_476.setTransform(86.4,48.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#7E3286").s().p("AAQA4QgJgQgTgDIglhJQAKgHAFgRQAGgUAEgGIAMgBQgBAlAWArQANAXAcAvIAAAYIgXABIgLggg");
	this.shape_477.setTransform(105,41.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#7C3083").s().p("AgMBBQgNgGADgNQACgHALgPQAHgJABgJQAAgJgJgEQgmgNAMgRQAXgTADgKQATgEANANQAIAIAJAVIAAAwQgSACgOAOQgBACAAAWQABAIgHAAQgEAAgIgDg");
	this.shape_478.setTransform(96.1,54.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#782F7E").s().p("AgkB2IAXhKQASgEACgNQACgLgJgOQgKgOgDgGQgFgMABgMIgGgQIgGAQIgzACQgGgKgMADQgPAFgDgBIALgXQAXgCAdgUQAkgZAMgFQABAJAAASQABAQAKAIQARA0AtgCQAHANAHgNIAggSQAGARgKATIgQAgQgOAAgRgLQgWgNgKgDIAABAQgZANAAAZIgUAJQgHACgHAAIgJgBg");
	this.shape_479.setTransform(80.5,58.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#642665").s().p("AANgFIABAAIgBALIgaABQAJgNARABg");
	this.shape_480.setTransform(25.9,73.8);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#642665").s().p("AgMAMQAAgYAZABIgBALIgXANg");
	this.shape_481.setTransform(29.8,70.7);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#742E7B").s().p("AgNAFIADgHQACgEACgBQALgFAFAHQABADADAMg");
	this.shape_482.setTransform(49.7,44.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#68296D").s().p("AgJAIQgEgCADgGQADgGAJgDQAMgDgCAPQgIAGgEABIgDAAQgEAAgCgCg");
	this.shape_483.setTransform(66.9,45.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#742E7B").s().p("AgLABIgBgSQAYgDABAaIgNAMQgJgGgCgLg");
	this.shape_484.setTransform(58.5,33.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#712C77").s().p("AgFgSQADgFAFACQAGABAEAGIgNAlQgWgSARgXg");
	this.shape_485.setTransform(56.1,68.4);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#7C3083").s().p("AAAAXQgNgIgGgCIAYglQgDAJAMAPQAKANgHAIQgDAEgFAAQgEAAgFgCg");
	this.shape_486.setTransform(63.1,68.2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#742E7B").s().p("AgZAEIAAgKQADAAAUgFQAPgFANAIQgQAPgIAEQgDADgFAAQgJAAgKgKg");
	this.shape_487.setTransform(54.9,56.4);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#742E7B").s().p("AgKAQQgPgGgEgbQASAAALAFQARAGAOAQQgTAIgMAAQgFAAgFgCg");
	this.shape_488.setTransform(54.2,47.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#68296D").s().p("AgfAFIABgYQAHgBAXAFQAUAEAMgIQgDAVgRAKQgMAIgTAAQgMAAAAgPg");
	this.shape_489.setTransform(73,41.3);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#642665").s().p("AgVgFQAfgLADgFQAEAAAJgGQAHgDAFAJQgEANgUALQgVAMgFALIgYADQgHgbAWgHg");
	this.shape_490.setTransform(34.7,66.6);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#7C3083").s().p("AgYAlIAAgMQAJgGACgLIABgTIAMgmQAYAAABAZQgKAPgCAUIAAAng");
	this.shape_491.setTransform(57.4,72);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#562354").s().p("AgZAHIAZg+QACAKgCAWQACASAYABQgGAKgEAaQgGAVgWADg");
	this.shape_492.setTransform(26,52.3);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#63225A").s().p("AgwALQAQgJAagdQAZgTAeAfIABAAQgMAEgkAYQgcAVgXABg");
	this.shape_493.setTransform(74.9,48.4);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#6C2B72").s().p("AglAOQAGgfAWgHQAQgGAfAJIgBAXIgLAXIghACQgTAAgLgNg");
	this.shape_494.setTransform(66.2,51.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#63225A").s().p("AgVAfQgPgMgNADQAZghAOgPQAYgbAkAMQgBAIgLAIIgRAOQgSASAcAYQAGAFgLAFQgKAEgLAAQgIAAgSgOg");
	this.shape_495.setTransform(33.5,49.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#63225A").s().p("AhDAmQgJAFgEABQgBgcAYgMQAegIAMgHQARgKAegIIAygOIAAALIgnAjQgoAGghAiIgZABQgFgJgHADg");
	this.shape_496.setTransform(44.1,60.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#63225A").s().p("AgBBYQAKghgMgmQgTgrgHgWIAAgaQABgPALgIQAAASANAFIAAAKQgBAGACACQAgAeABArQAAAJgLBIg");
	this.shape_497.setTransform(67.9,29.3);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#63225A").s().p("Ag+AXQAAgPAUgPQAVgRABgOIBGAOIABAAIABAUQACAKAJAGQgVgDgjAPQgkAPgSAAg");
	this.shape_498.setTransform(52.1,34.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#7E3286").s().p("AAmBFQgEgEAFgTQADgOgHgMQgIgLgPgGQgOgFgEANQgGASgGABQgBgbgaADIAAgBIAFgKQAJgLgXgRQgUgOAWgMQAJgFASABQAWABAMALIAJgHIANgMQAHAXATArQANAmgLAgQgKAFgGAAQgEAAgBgCg");
	this.shape_499.setTransform(61.8,31.4);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#712C77").s().p("AAgBNQgcgIgKADIgYgZQAAgPgXgbQgUgXAFgWQAigiAngFQAIAQAJAvQAJAoAPAVQAKANANACIABANQgJAHgMAAQgIAAgJgDg");
	this.shape_500.setTransform(47.9,68.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#6C2B72").s().p("AgiBYIgNgCQAEgkgcgNIAAglQACgVAKgPIAMAAQAHABANAJQAMAFAGgHQAGgIgKgOQgLgPACgJIANgNQAKACAWAZQATAVAWgJIACAXQAOAPgQARQgSAUAHALQgHAIgLgEQgNgFgFABIgEgpQgSALgIAhQgIAkgNALg");
	this.shape_501.setTransform(65.9,73.2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#63225A").s().p("AAPA/QgVgagLgBQAAgagVgJQgkgPADgVQACgQAbgZQALANATAAIAhgCQADABAPgEQAMgDAGAKQgFAQAQA0QANArgZAZQgGACgHAAQgOAAgOgOg");
	this.shape_502.setTransform(66.7,60.8);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#742E7B").s().p("AhQBLQgXgCgCgSQACgWgCgKIgBgJQArgNAPgJQAbgSADgkQAPgKAoAJQAlAIARgUIAQAQIgHARQgDAKgBAHQgFBShJgtQgjgMgZAbQgOAPgYAhIAAAAIgBABIABgBg");
	this.shape_503.setTransform(36.7,44.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#742E7B").s().p("AgFAGIAAgLIALALg");
	this.shape_504.setTransform(195.9,28.7);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#712C77").s().p("AgMAEQAMgSANASIgNABg");
	this.shape_505.setTransform(181.5,20.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#782F7E").s().p("AgLAMIAAgXQAXABAAAWg");
	this.shape_506.setTransform(150.1,24.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#6C2B72").s().p("AAOAWQgggJgNADQgDgXAYgBQAagBACgMIAMAAQAKArgZAAIgBAAg");
	this.shape_507.setTransform(147.1,27.8);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#782F7E").s().p("AgHAFIAPgJQgDAJgIAAIgEAAg");
	this.shape_508.setTransform(197.3,151.6);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#782F7E").s().p("AgEACIAKgJIAAAPg");
	this.shape_509.setTransform(134.5,86.6);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#68296D").s().p("AgBgGIADAIIgCAFg");
	this.shape_510.setTransform(102.9,98.7);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#68296D").s().p("AgBgCQAAgBADgCIAAALIgDgIg");
	this.shape_511.setTransform(103.1,114);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#782F7E").s().p("AgJAHIAJgNIAJANg");
	this.shape_512.setTransform(189.7,220.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#742E7B").s().p("AAAgEIABAEIgBAFg");
	this.shape_513.setTransform(133.2,90.7);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#63225A").s().p("AgDgEIAEgCIADANg");
	this.shape_514.setTransform(135.9,214);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#712C77").s().p("AgMAAQACgJAIgFIAPAOQgEAPgUAAQgCgLABgEg");
	this.shape_515.setTransform(163.9,153.2);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#712C77").s().p("AgMAGQgDgRgDgDQASgFAHACQAMADAAAUIgOANIgDAAQgMAAgCgNg");
	this.shape_516.setTransform(130.8,191.7);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#742E7B").s().p("AgSgFQADgQAUgCIALgBQADAFABAGQgMADgJAOQgMASgGADQgBgVACgJg");
	this.shape_517.setTransform(118.3,179.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#6C2B72").s().p("AgHATQgPgBgHgLQAiADABgeIAYADIgNAmIgYgCg");
	this.shape_518.setTransform(128.3,234.2);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#7E3286").s().p("AANAaIgQAAIgRgYQgKgNAEgPIA2AuQgFAHgJAAIgBgBg");
	this.shape_519.setTransform(191.9,158.4);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#7E3286").s().p("AAAghQALANABAUQAAAKgCAXIgLABQgUgfAVgkg");
	this.shape_520.setTransform(118.9,173.9);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#712C77").s().p("AgKAOQgIgHgDgOIATABIATgMQgBACAFARQAEAMgNAEQgFACgFAAQgGAAgGgFg");
	this.shape_521.setTransform(191,221.7);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#68296D").s().p("AgDAYIgOgYIABgZIAbAKQALARgGAYg");
	this.shape_522.setTransform(101.7,105.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#6C2B72").s().p("AACARQgegKANgYIACAAQAGADAPADQANAEgBAOQgBAGgFADQgDACgEAAIgFgBg");
	this.shape_523.setTransform(124.9,155.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#7E3286").s().p("AgugDQACAAAiAGQAWAFAJgYQAEAAAJgFQAIgDAFAJQgXAmgZAAQgWAAgXgag");
	this.shape_524.setTransform(234.4,171.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#7E3286").s().p("AgYAFQAGgEAMgQQAJgPAMgDQAUAegTAOQgLAJgcAOg");
	this.shape_525.setTransform(118.8,181.8);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#7E3286").s().p("AgGAZQgSAAgBgSQgCgWASgGQAJgDAbABQgKARAHAcQgTADgJAAIgCAAg");
	this.shape_526.setTransform(187,153.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#63225A").s().p("AglgEQAMgQAZABIAmAAQgBAZgTAJQgKAEgbABg");
	this.shape_527.setTransform(142.6,99);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#7E3286").s().p("AgRAAQgRgcAggRQATAFAEARQACALABAVIgCgBIgMAPQABAKgCAFQgDAGgJACQAFgLgTgjg");
	this.shape_528.setTransform(144.3,132.7);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#7E3286").s().p("AAEALQgMgQgUAIQgDgOAMgMIATgVQAWgBACAXIAFBDIgZgig");
	this.shape_529.setTransform(229.4,201.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#7E3286").s().p("AgngQQAEgWAWAIQAWAHAFgLIAUAgQAIATgEASg");
	this.shape_530.setTransform(146.2,212.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#7C3083").s().p("AgRAHQAAghgCgRIAjANIADBKQgegJgGgcg");
	this.shape_531.setTransform(103.2,72.6);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#782F7E").s().p("AgeAjIAOhGIAwAcQgSArglAAIgHgBg");
	this.shape_532.setTransform(160.7,64);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#712C77").s().p("AABAvQgMgGgGgCQABgngCgUQgEgfAPAFIAZAKIACBJQgGALgJAAIgEgBg");
	this.shape_533.setTransform(110.6,216);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#6C2B72").s().p("AgWASQgIgOACglQAfAGAOANQARAPgHAfQgKACgIAAQgXAAgIgQg");
	this.shape_534.setTransform(120.3,150.7);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#742E7B").s().p("AgCAMQgWgJgQAMIgIgOIAIgRQAHALAMgDQAEAAASgJQAfgPANAhQAIATgGADIgOAAIgBAAQgHAAgbgLg");
	this.shape_535.setTransform(200.1,196.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#63225A").s().p("AgUAWQgegGAIgqIAsAHQAaAGARALQgKACABALQABANgFADQgkgCgQgDg");
	this.shape_536.setTransform(164.6,216.1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#7C3083").s().p("AgCAsIADgOQAAgIgLgGQgVgMgDgOQgDgSAYgPQANACAJAZQAJAVAQABIABAng");
	this.shape_537.setTransform(218.1,72.6);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#742E7B").s().p("AgBAgQgRgBgEgBQgLgEABgOQACglAigFQAcgEAAAiQAEAggjAAIgCAAg");
	this.shape_538.setTransform(204.9,171.6);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#7E3286").s().p("Ag/AQQAIgEgCgXQgCgUAVgBIAvABQAgABAXAQQgKACgRgCIgagDQgZAAACAjIgyAPg");
	this.shape_539.setTransform(211.6,218.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#712C77").s().p("AgMAYQgDgWgPACIAAgvQAEACAeAAQAVAAAHAVQgMALgFATIgJAiIgDAAQgMAAgDgUg");
	this.shape_540.setTransform(118.2,224.4);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#68296D").s().p("AgvgUIAAgQIANgBQAGAFAmAWQAcAOAKAXIhDALg");
	this.shape_541.setTransform(139.8,89.5);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#742E7B").s().p("AgMAbQghgIgIABQABgYAkADQAhACgCgcQArgEgEAoIgOABIgLAKQgLAJgQAAQgGAAgIgCg");
	this.shape_542.setTransform(131,84.8);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#7C3083").s().p("AgfAZQgWgEgEgZQAAgFAEgBQAUAAAFgQIBWAPIAAAZQgMgJgOAKQgRANgHgBIgIAAQgVAAgKgCg");
	this.shape_543.setTransform(168.1,155.8);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#6C2B72").s().p("AgkgtQAWAWALAHQATAOAVABIgCAjQgOAIgVACIgkACg");
	this.shape_544.setTransform(108.9,151.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#6C2B72").s().p("AgoAOQgDgZAJgTQAUAKAEgKQABgDAAgVQAXgMAJAVQANAbAGACQgaAFgRAaQgbAogEAEQgHgegBgPg");
	this.shape_545.setTransform(113.5,56.2);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#63225A").s().p("AgeAcQgLgLAEgVQAFgbgCgJQAsADAcAyQAFAIgMAHIgVANg");
	this.shape_546.setTransform(109.3,133.1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#63225A").s().p("AgWAdQgKgNgCgXQABgYgBgNIALABQAHAAAEACQA0AcgGAqQgCAUgWgGQgYgHgGAKg");
	this.shape_547.setTransform(139.9,219.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#7E3286").s().p("AABAMQgLgMgbAPIgNgKQAjghAJgHQAlgeAUApIgPBGIgWADQgDgcgKgJg");
	this.shape_548.setTransform(154,62.9);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#642665").s().p("AAJAhQgggMgQgCQgKgBgDgKQgDgKAHgNQAIgOANgDQAMgCAIAIQALANAQAFQAMAEAUgBIACAPQgOAXgWAAIgJAAg");
	this.shape_549.setTransform(132.4,223);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#7E3286").s().p("AgHAcQgdgPgMgBQABgEANgSQALgOgCgMIAOAAQAGACALAGQAMADAHgNIAZADIAAAvQgJADgCAIIgDAPIgHABQgQAAgUgLg");
	this.shape_550.setTransform(110.1,223.6);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#6C2B72").s().p("AgVAjQgFgMgRgBIAWg3QAPgoAlAXQgCALAOAfQAFAXgrAAQgFAAgGAQIgMAdQAAgTgDgGg");
	this.shape_551.setTransform(139.5,71);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#63225A").s().p("AgpARIgRgPIAAgPQAYgSASABQALAJAagEQAagDALALIAAAYIgLANIgCAMg");
	this.shape_552.setTransform(169.4,151.4);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#63225A").s().p("AAMAgQgHgMgKgEQgJgEgPABIgVgPQgOgPAMgSIAlgBQAUgCAOgIIACAMQAAASAPAUQAUAcADAGQgRAIgJABIgBAAQgNAAgHgPg");
	this.shape_553.setTransform(110.4,159.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#6C2B72").s().p("AgHAqQgggagRgLQACgDAKgcQAGgUAUgBIACgCQgIArAdAGQAQACAkACIgCAlQgQAJgQAAQgQAAgOgIg");
	this.shape_554.setTransform(162.1,218.4);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#7C3083").s().p("AAPA+IhBg8IAJghQAFgUAMgLIAcA4QATAeAcALQgBAcgcAAIgHgBg");
	this.shape_555.setTransform(123.8,228.6);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#6C2B72").s().p("AANAdQglgKgTALQgCgjAaAAIAZADQARACAKgCQgXgPgfgBIgwgCQASgKAdgBQApAAAHgCQAXACAJAWQAFALAHAZQgKAHgPAAQgOAAgSgFg");
	this.shape_556.setTransform(214.7,216.8);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#6C2B72").s().p("AgHA4IgFgXQgCgOgGgGQgegiAuguIAHgIIAQANQgDAYAQAWQggAQARAdQAUAjgFAKIgNACQgVAAgFgUg");
	this.shape_557.setTransform(140.7,129.8);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#7C3083").s().p("AggAMQgSgkAJgwIA9A7QAEACADASQACAOAQgCIAAAmQgUABgHAPQgkgegOgfg");
	this.shape_558.setTransform(126.8,191.6);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#6C2B72").s().p("AgxAAQgBgRANgMQASgNAHgJQAbAMAMAUQgDANANAOQAOAQAAAKQgFALgXgHQgWgIgDAWQgxgEACgwg");
	this.shape_559.setTransform(142.5,205.2);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#63225A").s().p("AgIA/QgBgWgCgLQgFgRgUgFQgQgUADgZQAQADAMgJIAVgVQAMAaAmAAIgMA3QgHAigYAOg");
	this.shape_560.setTransform(147.6,127.3);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#642665").s().p("AAMAeQglACgTgMQgQgIgGgGQgMgKAIgQQAGgNAOAAQAIAAAQADQANACAYANQAWAJARgTQAGAHADAWQACAVANAJQgTgGgrACg");
	this.shape_561.setTransform(202.6,179.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#782F7E").s().p("AgfA0QgdgMgCglQAHgPAUgBIAEgDIgEgJIAAgZIANgNQArAzAqAZQgHAJgSANQgNAMABARQgngGgSgGgAgZAUQgDAFACAEQACAEAFgDQAEgCAEgGIAGgJIgGgJIgOAQg");
	this.shape_562.setTransform(135,198.7);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#7C3083").s().p("AhPgIQgBgNAFgGQAFgHAKAGQAfAVAogOQA+gWAFgBIADADQgCAQgYAWQgXATgCARQgbgBgKABQgVADgQAJQgggXgDgeg");
	this.shape_563.setTransform(232.3,181.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#68296D").s().p("AgtAfQgMgOAAgOQgBgRANgRQANgSAQACQAbACAVAMQAaAPABAXQAAASgbAKQgkAJgRAHQgOgHgKgLg");
	this.shape_564.setTransform(116,86);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#7E3286").s().p("AAiBaIgpgFIAZgnIAEgDIgEgHIg+g/QAHgMADgSIADggQAIAAAYAXQATARAUgPIAFAWIgBBbQgNARAOAQIgIAIg");
	this.shape_565.setTransform(100.8,151.2);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#7E3286").s().p("AhDAUQAYgQAIgJQAPgRgCgWIAKglQAFgWgDgQIAOAAQgEAIAOAeQANAYgYAOIAAAlQgOAHAQADIAMAaQgFAdASAHQACABAkABQgFAUgEAJQgIAPgMAIg");
	this.shape_566.setTransform(210.1,40.1);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#7C3083").s().p("AApA5QgHgCgIgIQghghg4AIIgLgMIACgkQAFgDgBgNQgBgMAKgCICGA3IgFAOQgCAIgBAGQAAAFAEAJQACAIgNAFQgIADgHAAIgEAAg");
	this.shape_567.setTransform(175.1,221.5);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#742E7B").s().p("AACBDQgSgHgKgOQAEgTgIgTIgUggQAAgKgOgQQgNgPADgNQALAFA3AjQAmAZAgAEQAOACAAALIgCAWQgTACgHATQgKAdgCADIgigMg");
	this.shape_568.setTransform(152.7,211);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#7C3083").s().p("AATBZQAWgwgigjQgugggQgWIABgZQAKgBAWABQATAAAKgMIAxgNIgKCGIACAOIgBAxg");
	this.shape_569.setTransform(98.1,94.4);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#742E7B").s().p("AAUAtQgUgMgTAHQgHgDgKgSQgIgOgMgDIAAg9IA1gDQAFACARAQQANAMAMAAIAMAKIABBWQgGgCgfgRg");
	this.shape_570.setTransform(227.3,73);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#742E7B").s().p("AgugcQAJgGACgLIACgVQAjAJAXAWQAZAZgDAeQgCAcgiAFQgwAIgJAGg");
	this.shape_571.setTransform(153.7,229.1);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#782F7E").s().p("AgNA/QgFgMgSAAQghgtAigqQALgDAIgcQAIgYAWAEIAAABQABARABAiQAFAcAgAIIgEAlIgJAQIgCAWIgwAMQAAgSgDgHg");
	this.shape_572.setTransform(99.9,76.9);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#7C3083").s().p("AgygTQA6AIgIg7IAAgKIAxgCIAAAYQgJAUADAaQABAOAHAeQgBAOgNAOQgRAQgDAHQg/ghgEhFg");
	this.shape_573.setTransform(105.1,58.9);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#7E3286").s().p("AAyA3QgIgMgPgBIgbACQgJgdgnACIgCgWQACgMgOgOQgNgPAAgLIAngBIAYAaQAHAOAFgPQANgYAKgGQAQgKAWAQIAEAyIAKAMIABAjIgDAcg");
	this.shape_574.setTransform(232.9,145.4);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#712C77").s().p("AhBAtQgUgSgEgaQgDgVAVgOQAfgVACgCQAEAaAWAEQAMACAbAAIgBAjIgCAGIAEgFIAMgMQAGgFATAAQARABAHgJIABAAIAAAyQgVAMgmACQgsACgPAFIgJABQgNAAgPgNg");
	this.shape_575.setTransform(166.2,161.2);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#6C2B72").s().p("AgYAaQgJgXglgDQgIAAgDgLIgCgTQASgDAjgKQAegCAUAhIAAhAQATgGAMANIASAXQgYAPADASQADAOAVAMQAMAHAAAHIgEAOIhkAlQADgkgHgQg");
	this.shape_576.setTransform(209.9,72.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#7C3083").s().p("Ag9BYQAKgagNgLQgJgJgZgFQAAgWABgJQACgRAJgNIAZgNQAKgFADgMIABgUIALgNIAUACIABAxQgEACAAABIAEAJQgCAbAKANQALANAcgDQASgDASAHQASAHAGAFQALAIgEAMQgGASgNgGQgOgLgFgCQglgQgYAEQgeAFgTAigAhjAlIABAAIAAABg");
	this.shape_577.setTransform(104.9,117.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#63225A").s().p("AgiAqQgCgMgCgEQgDgHgJgCIgZABIgGAAIgGAAQgWAKgNgLIAAgXIAugHQAsAEATgvQAbAMAoAHQAXAEAuAFQABAPgPAGQgUAGgDADQgPAQggAOQgnASgLAHg");
	this.shape_578.setTransform(165.2,69);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#6C2B72").s().p("AAeBIQghgHgCAAQhNgsAdhRQALAAAWAMQAUAHAOgaQAGgKANALQAOALACAPIANBcQgIAVgRAAIgHgBg");
	this.shape_579.setTransform(230.3,164.5);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#742E7B").s().p("AAgBDQgHgLgKAAQgMACgFAAQgnAFgOgDQgZgFAlgwQAJgLgJgVIgVgvQAUAYAWgJQAZgMAJAFQAWAMATApQATAogIAXQgEANgKAGQgEACgDAAQgGAAgFgGg");
	this.shape_580.setTransform(171,240.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#782F7E").s().p("AAMAxQgJgSgQgDQgFAmgkgFQgQgBgNgNQgOgQgJgHIATgdQAKgSgEgSQADgEATgGQAPgGAAgPIANAFQALAPgBAUQAAAPgGAYQAQgFAKgWQAIgWAPgDQgCAkAiALQAvAQAFAFIABANQgVgHgUAUQgWAYgNAAQgIgDgLgVgAg7ATIAFABIADgDIgDgDg");
	this.shape_581.setTransform(182.1,73.4);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#68296D").s().p("AgWBQQgOgNgIgDQgCgXgWABQAFgbgFgeQgEgWgLgiQAPgJAVgDQALgBAbABQAPA/A7APQgBAHAMAMQALALgDAKQgrgKgKAGQgJAFgSArQgGAFgHAAQgHAAgGgEg");
	this.shape_582.setTransform(236.3,193.2);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#7C3083").s().p("AACBpQglgWgSAAIgCgMIADgkQAGgEAEgFQADgGgGgDQgmgRgQgpQgFgPgMg/IApANQAEAIgHAWQAAASAhgGQANgCAHAaQAJAeAMAGQgCAlAHAOQALAWAngIIADABQgNAaAfAKQAHACAFgEQAFgDABgGQABgPgNgEQgQgCgGgEQADAAAWgLQAPgIAJAKQAIAIADAMQADAOgFAMQgHARgQACQgUgBgKACIgMABQgVAAgagPg");
	this.shape_583.setTransform(117.9,147.8);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#712C77").s().p("ABJBeIAAAAQACgegUACIghADQgKgYgOAIQgQAOgJACIgMglIAQggQAKgTgGgRIggASIgHgQIgHAQQgtACgRg0IAZAAQAFgNAdgCQAagBADgVIAxgBIAAABQgDAKgWATQgMARAlANQAJAEAAAKQgBAJgHAJQgLAOgBAHQgDANAMAGQAUAJgBgOQAAgVABgCQAOgOASgCQAEBGBAAgIgTAXg");
	this.shape_584.setTransform(94,58.8);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#7C3083").s().p("AgqB8QgYAAABgUIAQghIAQACQAIgCACgNIgDgpQgBgXAVgMQABAAgCgHQgBgGgBAAQgogEAHgXQAQgdgCgLQAWAJAYgYQAagaASADIAEAEQgEATgNBSQgKA9gNAmIgFgrQgQARgFAnQgFApgKAPQgDgNgYAAg");
	this.shape_585.setTransform(187.9,247.4);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#7C3083").s().p("AhDBiQgIgZgFgMQgIgWgXgCQAvgkAKgKQAdgeAGgkQATgJANASIAZAhIgFhEQAIADANANQAOAJAOgKIARAAQAKACADAIQADAJgIADIgOADQgXAFgIATQgEAKgCAcQgjgDgDAPQgDALAOAbIgLAWQgUACgKADQgRADgCAVg");
	this.shape_586.setTransform(228.5,209.8);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#63225A").s().p("AhKAuQgIgagCgqQAMgJAIgPQAEgJAFgUIAYAAQAOAAAIgJIAmgQQADAYgJASQgIASgUARQgTANAKAAQAFABANgCQACASARAEQAJACAUAAQAOAEAJAIQALAJgBALQgCALgJAMIgTAVQgJAKgKgEQgGgCgMgKQgXgWgMACQgPADgBAjQgdgUgMgjg");
	this.shape_587.setTransform(222.4,54.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#712C77").s().p("AAxBPQgXAJgJgTQgOgcgDgCIg4ggQgggPgggFQgcgEANgPQAVgSACgIQA3gIAjAiQAIAIAHABQAHACALgFQANgFgCgIQgEgJAAgFQAAgGADgIIAFgOQAHAAAEAGQACAEABAIQASAzAMAEQAMAEAhghQAYApABAmQgSgEgaAaQgSASgQAAQgHAAgGgDg");
	this.shape_588.setTransform(180.1,229.6);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#782F7E").s().p("AAMBnQgJgVgXAMIgYAAIgBgBIAAgZQAVgcgYg2QgXg3glgMIAAgZIAZgBQAHAOAGgNIAAgNIANAAQABATALAHQAGAJALACIAVABIAAgmIALgMQAFAPARAeQAGAagqAMQgOAEAKAUQAMAVACgDQAYgTAVATQAcAXAHABIAAANQgZANAGANQAFAMAQAAQAWABAFACQgGAXgdAMQgjAPgIAKQgGgCgNgbg");
	this.shape_589.setTransform(114.6,41.3);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#782F7E").s().p("AhoAxQAAgagSgTQgFgEADgIQAEgHAIgFQAJAhAagSQAdgVAJAPQAIgKgIgJQgLgLAAgEQAugIAOgfQALAAAWAEQAUAAALgPQAAASADAHQAFAMARAAQgMAXAJAQQAHANAXAMQhiAciLA+QAHgpAAgGg");
	this.shape_590.setTransform(136.5,39);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#782F7E").s().p("AgzCFIgQgNQgXgMAEgWIANgjQAOggACgPQADgYgYgVQgJgHAFgQQAIgSACgJQAdgBAKgEQASgJABgZIBJgDIANAQQAHAJgBAFQgDAPANAiQAFAegmAJQgfAkgLASQgRAhABAiIgUAVQgKAHgMAAIgGgBgAAfhuIAGABIACgEIgGgCgAgPiCIABgBIAAABg");
	this.shape_591.setTransform(147.9,110.2);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#782F7E").s().p("AAlB3QgLgIgHgBQg6gDgcgrQgRgbgMhCQAYgOAHgiIAMg3QAPAJAcACQAjACAIACQgIAQAPAQQARAUABAIQgcAeANAaQAGALAjAfQAAAGAJAfQAGAWgDAQQgSgBgXASIgSgOg");
	this.shape_592.setTransform(158.1,136.7);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#782F7E").s().p("AC/B6Qg+gigzAKQgTADgWgOQgggXg5gWQhKgcgSgJQgvgRgWgOQgpgXgKgnIAOgnQAxAIAnAoQAbAcA4AWQBPAfALAGQAkAUBFAJQBLALAeAMQAKAEATAEQAPAGgBATIgQAhIgcACIgEAAQgOAAgLgGg");
	this.shape_593.setTransform(156.5,245.2);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#742E7B").s().p("AiTCWIAAgyQAZgBADgZQABgHgFgCQgDgCgJgBQAWgSAogsQAlgkAmgKQgSgUgGgFQgOgJgQABQgiAEABgQIANgiQAMgGABgTIAMAAIA+AIQAfALABAuQAAAMASAJQAVAJARgJQAPgJAHAAQAMgBALAMQgEAKgPAHIgcALQggAPANAiIgCgBIgPAKQgRAQgUgIQgVgNgKgGQgbgBgKADQgSAGACAXQACASARAAQAKABAVgEIgBABQgEAOAKAPIAQAYQgeAegvAHQgKABgZAAIgygBg");
	this.shape_594.setTransform(190,149.7);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#562354").s().p("AjTA7QAAgkAPgCQANgCAYAVQALALAGACQAKAEAKgKIASgVQAJgNACgKQACgKgMgJQgJgIgOgEQgUgBgJgCQgRgDgCgTQAWgNAoACQAtADASgHQAVABApAMQAlAGAagTIAzgEQAegDATgFQAMgEAJAGIAPAKQgTASgBAZQgBATALAaQgbAegRgCQgRgCglgmQgSgBgKANIgOAaIgYARQgQAKgPgGQgfgOgoAHIhGAUIg0ADgABUgkIAEAEIAFgDIgEgDIgFACg");
	this.shape_595.setTransform(240.3,58.7);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#782F7E").s().p("AhKCXIACgbIBEgMQgKgXgcgPQgngWgFgFQAEgpgrAEQgDgfAEgPQAFgaAUgPQARABAGAMQACAHAAASQgTABgCAOQgBALAIAIQAPANARgFQANgDAQgQQgHgGgTgEQgQgEgFgJIANgdQAHgQAFAAQArAAgFgYQgOgeACgMIA9gZIANALIAKAVQAHANALAFIgBAXQgOAGgEAFQgIAHAFAMQACAGAIAEQAIAFAHABQARgBAHgPIAIgcIAGgBIAGABQgEAGACAOIADAYQACAbgpgEQgKAAgDAOQgCANAGACQAaAMgKAQIgTAXQgLgIgCgEQgKgOgEgDQgIgHgMAHQgLAFgDALQgDAJADAMQAFAPALgBQAGgCAOgFIAYgBQAJADANgNQANgNALAHQAGAOgNANQgPAQACAKQgIAVgjANQgkAMgKARIglgBQgYgBgNAQQgMgIAAgQgAAMChIABAAIgBAAg");
	this.shape_596.setTransform(145.1,81);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#7C3083").s().p("AAYCcQgYAAADgPQACgJgJgCQgJgBgMAJIgNAAQAAgSgMgHIAAg1QADAAATAFQAOADAKgFQgHgdgFgIQgKgRgYABIgNg7QAAgRgBgHQgDgMgVALQgFgGgwgQQghgLACgkQgPACgKAWQgKAYgQAFQAHgaAAgPQAAgTgKgPQATgLAVACQARABAXAKQAyAWAUAGQAoALAjgKIACATQACALAJABQAkADAKAXQAGAQgDAkIgXAAQgOABgBAOQAAALAKAJQAJAJAOACQAuAHAcgBQAogBAggPQACAKANAbQALAXgBAQIgoANQgFgagGgKQgKgRgVABQgJABABAOIAAAYQgFAzgugZQgCgQgDgEQgGgFgNANQgbAIAFALQACAEATAOIABAZIgZANQAKgVgXABg");
	this.shape_597.setTransform(201.6,83.2);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#7C3083").s().p("AgVEUQgIgHgSgkIgDgDQgBgUANgcQAQghACgNQgNgCgLAKQgNANgDABQgFgJgIADQgJAFgEAAIgNhdQgCgPgOgLQgNgLgGAKQgOAagVgHQgWgMgLAAQgDg5Ahg3QAngCALAdQgDAdAIAOQALASAfADIADg1IAWANIAEgcQAUAQAGABQAMACgCgfIgDglIAEgTQAEgLAIgGQAYgQgKgGIgZgGIgBgkQgCgUgYgEQgFgQAOgRQAQgUABgKQAogDgFApIgCAFIADgFIAZAAQgPAqAYAlQAPAWAnAlIAGAAIAGAAIAAAZQgSAcgQgSQgWgYgGABIgCgLQgBgFgHAAQgCAAgDACQgCADAAACQAAAHAFABIALACQgUAOgPA0QgQA0AKAVQAMAdAyACQAXgmAfAPIAZAQQAQAJAKABQAMAIABASIgBAAQgogOAAAWQgBANAFAcIgagMQAAgQgCgIQgEgMgPACQgMACAEAMQAFARgBADIgBAAQgHAFgZgPQgTgMgBAWQgBAlgaAXQgiAWgPANQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAABIABAHIAyAPQgXAQgQAAQgKAAgIgGg");
	this.shape_598.setTransform(245.2,154);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#782F7E").s().p("ABRC8QgDgNAOgOQARgQABgLQgRAAgUgRQgWgVgLgJQgpgigsAsQgNgjAggPIAbgLQAPgHAEgKQgLgMgLABQgHAAgPAJQgRAJgVgJQgSgJAAgLQgBgugfgLIg/gIQALgngGgZQgJgfgigSQAAgQgLgGQgIgEgQABQgDgOAJgJQAIgIAHAJQARAVAoARQAtATAPAOQgQAZAOABIAaAAQACAVAcAXQAeAXACATIAMAPQAMAAAEgIQADgFAEgNIAmgMIAaAAQAMAIgEALIgIATQgRAAgHACQgMAEABAQQAAAIAFAHQAFAGAIAAQAOAAACgMIABgUQAhgNgEgaQgMgegEgPQAgAGALgCQAWgFAGgcIgDgNQgDgIALgCQAJgCAGAHIALANQAQANgDAiQgDAiAPAMQgPAMAFAHQAEAFAQACQgBALAOAOQANAOgCAMQgsAdgDADQgUAWARAmQAHAPgLAjQgLAkAKAXgAA1A6IAEACIACgGIgFgBIgBAFg");
	this.shape_599.setTransform(202.8,141.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#782F7E").s().p("AgqG6IgkijQgVhggMhEQgDgRAIgaQAJgdADgOQANgIgCgTIgBABQALgOAFgqQAFgmARgSIAFArIAFAMQAEAFAGgFQASgOALhZQANhYgMgXIgFABIgFgDQAAgmgYgqQgiAhgLgEQgMgEgSgzQAOAEANgIQAIgFALgNQADAPAIAHQAJAHAOgEQANgEgDgNQgFgRABgDQAOgUAGgEQAOgHARASIAOAJQANgnARAQQAFAFAJAMQAJAKAGgBIABARIgzCFQgQAbgFAkQgEAZABApQABAPAIAAQAFAAALgGIAYABQAEAEAIAZQAGATAPAFQgzBFhLAiQgZALgNAQQgQAUAHAXIAcBgQAVA2ApAZIAMA/QACAGgBAGQgOADgHAGQgJAIALAIQAVAQgIAOQgEAJgPAPQgLAJgSAAQgUgBgLABg");
	this.shape_600.setTransform(194.7,260.9);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#7C3083").s().p("AhIF8QgEgCgHgIQgEgYgOADQgRAKgIACIgEABIgEgDQAIgPACgIQAEgOgNgLIglAxQgTASgVgNIgjgVQgehCA3giQgBgQAPgFQAWgHACgCQgmgNAIglIAIgdQADgRgHgLIALAAQAogIALgqIAPgMIAKAAIAOgNIAXAAQAHALATABQABAkAFAKQAKAVAigGQAAAQAIACQAFACANgHQAWABgBgWIACgoIAOAMQAMAWALgWIADgjIAnAJQAZAGATgGQgYgVgDgFQgKgQAOgSQANgQgDgWIgJglQAEgBATAFQAPAFAMgNQgSgCgVgUQgWgVgNgEQgBgQgNgJIgagMQgBgMAKgJQAPgNACgEQAQgZACgHQAGgTgRgRQgIgKACgLQADgLAKgFQAUgJgCgSQgGgVAAgKIALAAQAPgBAJAEQALAEAHAMQAIAQANgBQAJgBARgIQAPAXAFAKQAIAUgCASQgWAlAUAfQgVACgDARQgBAJABAVIABAdQACAfgTBWQgRBIAPAuQACAFgOAJQgOAKAFAMIgagKQgPgFAEAeQACAUgBAoIgNAAQgEgDgKgjQgHgXgWAGQgVAGgBAaQAAAPAEAeQAAAGAEAIIAHAPQgZAJgDAcIgWAAIgagZIgKAAQgRgVgDgBQgMgGgJAcIgJAAIgGgqQgDgbAFgXQgtAjgHAdQgIAgAmAiQgDAPAFAVIAKAkQgEACgEAAQgDAAgDgCg");
	this.shape_601.setTransform(93.3,199.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#7E3286").s().p("AgMAGIABgMIAXgEIABAPIgNAGIgDAAQgFAAgEgFg");
	this.shape_602.setTransform(220.3,26.3);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#7E3286").s().p("AgcBFQAPgWgQgOQgXgOgFgKQAVgPgHgkQgIgnAJgOIAAAAIAaAAIANAXQAGAOAAAIQgBAcARARQALAKAcANQghgFgPAUQgKANgEAiIgnAQgAgEBQIAAAAIAAAAg");
	this.shape_603.setTransform(225.8,36.4);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#742E7B").s().p("AgJB5QAIgRABgHQAAgMgVgCQgdgNgLgKQgRgRABgcQABgJgHgMIgNgXQAlgEAUgPQAYgSAEgkQADgbAXAAQAUAGAPAdQAQAhANAIQAUAdgCAsIgHBLIAAANIg+ANQgGgHgNAMQgFAEgEAAQgFAAgEgJg");
	this.shape_604.setTransform(233.9,29.8);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#7C3083").s().p("AgCgGQAMAHgMAGg");
	this.shape_605.setTransform(260.8,39.9);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#7C3083").s().p("ABBBUQgJgGgMAEQgTAFgdADIgzAEQAhgngCgMQgDgNgsgWQgIgDgKgIIgQgOIAAgMQAUgDAJgFQAPgHACgPQADgYARgGIAigEIAkBMQgJARAAAHQABALAWgGQAigJAFABQAMAEgMAjQgCAGAIAEIAQAFIgMAYIgOAMIgPgKgAgngTQAAAAAAAAQAAABAAAAQgBABAAABQAAAAAAABIAHgBIgCgEQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABg");
	this.shape_606.setTransform(253.5,42.4);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#742E7B").s().p("AgFgCIALAAQgDAFgDAAQgCAAgDgFg");
	this.shape_607.setTransform(278.6,35.9);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#7C3083").s().p("AgLgMQAXABAAAXQgQgGgHgSg");
	this.shape_608.setTransform(283,40.6);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#712C77").s().p("AAPAkQgagJgNgDIgagYIANgXQAsASAegeQAMAIABAPQABAJgBARQgLAWgTAAIgFAAg");
	this.shape_609.setTransform(268,50.5);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#7C3083").s().p("AAUAwQgJAAgjgEQgbgDgRAJIgBguQgBgaAOgQIApA5QAKgOAAgVQgCgXABgLQAiAJASAgQAEAHAUA1g");
	this.shape_610.setTransform(289.9,47);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#562354").s().p("ACJBSQguAMgQgGQACgYgagMQgKgkgpgSQgpgTgtAMQgJgXgKgDQgMgDgSAUIgVAcQgNAQgRADQAKgWgKgeQgNgpAAgKQANADAbAJQAXADAMgZQAPgDAOAKIAXATQAwAcABg1QARgKAaAEQAkAEAIgBIgSATQgKALAIAQQAHANAjASQAdAPACAZIAHAAIALABIBBAUIAAAnQgXgUgoALg");
	this.shape_611.setTransform(285.5,60.4);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#742E7B").s().p("AAAAsIglhLIADgMQAUAEASAYQAZAdAJAGIAAAYg");
	this.shape_612.setTransform(256.7,36.2);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#642665").s().p("AgmAAQADgsgVgdQAdABAQAjQAIAUAOADQAJACAWgFIAPARIgDALIghAEQgRAGgDAYQgBAOgPAIQgKAEgTADIAGhKg");
	this.shape_613.setTransform(247.5,31.9);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#712C77").s().p("AgYAPQAPgFAAgdQAAgdAWgCIAMAbIAAAKIgZA+IgKACg");
	this.shape_614.setTransform(23.5,48.1);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#7E3286").s().p("AgCACIAFgEIgCADIgDACg");
	this.shape_615.setTransform(13.8,67.9);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#782F7E").s().p("AgKAKIgCgUIAZAIIgMANg");
	this.shape_616.setTransform(20.9,74.7);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#642665").s().p("AgMA3IAIgjQAFgfgBgCQAAgTgZgEQgBgNALgNIAQgXIAKgCIANAwQAGAdgKAkQgGAVgOApQgOgNACgUg");
	this.shape_617.setTransform(22.3,61.9);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#782F7E").s().p("AgcACQAPgqgIgbQASgFAMAKQAFADAPAUIAPAkIgRAWQgLAOABAMIg8AZQgBgVAQgvg");
	this.shape_618.setTransform(18,53.6);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#7E3286").s().p("AgKgBQAKgOAIAIQAJAIgPAKg");
	this.shape_619.setTransform(22,84.7);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#7E3286").s().p("AggAZIgCgiQAHgIAYgEQAVgDAIgMQASAbgQAVQgMAPgWAIQgHACgFAAQgLAAgDgMg");
	this.shape_620.setTransform(15.8,90.6);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#782F7E").s().p("AgMAlIgBgNQAOgJgIgJQgJgIgKAOIgXgBIgBgTQACgLAJgGQAOgMAcAEQAfAEAMgJQAKApgMATQgKARgcAAIgSgCg");
	this.shape_621.setTransform(23.6,83.3);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#7E3286").s().p("AADCXQgMgJgPAEIgagBIgug+QgbglALgnQArAHAOgVQAMgSgKgqQgMAIgfgEQgdgEgOANIANgyIANgOIAyAAQAEAXASAFQAPAEANgLQANgMgJgRIgQgdIAAgMIAYgCIAWAhQAOAUAHAOQAFAJAAAWQAEARAWAAQAgAdAGgpIACgCIAMABQAGANAGgNQAIAXgSANQgRANglACQgLABgRgJQgSgJgLAAQgdgBgJAKQgJALALAbQAEAJAjAdQAcAWgJAfIAlACQADAMgPAMQgPANADALQgGAOgVABQgRgQgEgDg");
	this.shape_622.setTransform(33.6,86.3);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#63225A").s().p("AgBBrIhEgDQgIgYAAgJQABgRAeABQARABAHgKQAHgLgMgKQgdgZABgnQAIgtACgWIAYACQAGAtAjgJIAfgJQARgDAKAIQgJAbgnAPQgvATgNAMQAVAFAqABQAiAGAFAeQADARgVADQgSACgdgIQAYAZABAMQACANgbAAIgIAAg");
	this.shape_623.setTransform(30.6,119);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#7E3286").s().p("AgJANQgFgGACgIQABgKAHgDQAIgEAFAHIAEAOIAAAAQgDAAgIAKQgCADgDAAQgDAAgDgDg");
	this.shape_624.setTransform(17.2,163.2);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#7C3083").s().p("AgMAZIAAgZQAKgFACgLIAAgUQANANAAAXIAAAlg");
	this.shape_625.setTransform(14.8,145.9);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#7E3286").s().p("AgRAJQABgegCgPIAAgBQAfgBAFAWQACANgBAcIgBANQgfgEgEgZg");
	this.shape_626.setTransform(20.4,167.2);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#68296D").s().p("AgNArQAAgXgNgNIgOgZQAFgGgKgcQgIgWAbgGQgDAeAjAdQAnAeADAWQgNADgCACQgIADADAJQAIAcgRAFQgWgBgKACIAAgng");
	this.shape_627.setTransform(17.5,141.5);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#7C3083").s().p("AARCuIACgiQABgYgMgSQgLgSgSgCQgxgGgKghQgGgUAJguQAGghAChCQgNABgIAQQgJASgHADIAAgZIgNg/IABglQARAAACAMQABAHgBAQQAPAxAPgvQAMgBAKAKIAQAQQAbBBAvg1QAPAUgLAXQgGAMgQAWQgLASgWgRQgbgSgOAMIAfBHQAFAMAIADQAHACAGgKQANgWASAJIAdANIAAAZIAAAAIgKAAQgFAAACAJIANgJIAAAAQAZAAAAgZIANAAQADAMALAXQAEAUgdALQgOAEAAAQIAAAcIAMAMIAAAlIgMAAIgeAMQgRAHgDAVQgMgSgCgWg");
	this.shape_628.setTransform(46.8,166.1);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#782F7E").s().p("ADQKAQgJgNgSAAQABgTgNgGIgGgDIAFADIAAAZQgSABgGAMQgFgCgqgfQgbgVgbAEIgLgOQgGgIABgCQAdgqgSgRQgMgLgsgGQgWgRgEgiIANAAQACgBAbAJQAQAGAEgaQATABAGgOIAFgFIgFAFQgTgBgGAOQgLABgNgOQgOgOgLACIAAAAIgMgMIgBgbQABgQANgFQAdgKgEgUQgLgYgDgMQAEAAAYAHQASAGAPgOQgRgKgFgSQgDgMACgXIA3ACIAWAAQAMgBAFgKQAHgNgKgKQgNgKgEgGIACgdQABgQgFgJQgJgfgHgNQgNgYghAKIgwgNIgDgXQgDgOgEgHQgGgMgEAEQgCADgDAKQgNAHANAHQgbAfgdgHQgegIgMgpQgHgZgPgOQgMgLgagKQASA0ABAhQACAhgNAqQgPAugPgxQAAgPgBgHQgBgNgSAAQgGgKgQgBQgUgCgDgBQghgQgKANQgHAKAHAgQgQAEgJgKIgNgTQgCgXgngeQgkgdACgeQABgCgJgbQgFgRAagEQAMAHAVAeQAVASAWgtIBEADQAjADgBgQQgBgMgYgZQAdAIASgCQAVgDgDgRQgGgegigFQgrgCgUgFQAMgNAxgSQAmgQAJgbQgKgIgRADIgeAJQgkAJgHgsQAGgKgQgeQgNgYAZgOIAaABQARAhAJAEQAIAEAPgRQAUgBAHgOQAeAFAYgRQARgNAUgeIhCgeQgWAMAVAOQABAGgBAFIglgCQAJgfgcgWQgkgdgEgJQgLgcAJgLQAJgKAeABQALAAASAJQARAJALgBQAlgCARgNQASgNgIgXQABgFgFgOQgFgMAIgHQALgEAcAJQAYAHAOgMIAlANQAcAMgFAlIguADQgBAIAMAJQAKAIgJAMQgPAEAOAHQABAKACAEQADAHAHADIgBBDQAAAPABADQADAKAKAAQAQABAGgaQAEgUgKgTQgEgJgSgXQAEgPAMgFQAIgEARABIANBMQARAUABAcQABAQgGAiQgEAGAEAXQAAAQgdgOQgEgBgJAFQgJAFgCAGQgHAOAaAlQAaAlAUAGIAGgBIAGABIAnAAIANAjIgBAZQgBAPABAKIgFAWQgEAMANADQAQAEgBgRQgBgTAHgDIAYAAQAAAcAaAKQABAWAOAJQAMAIAWgBIAEAOQAEAHAJgCQACAAADgHIAEgNQBRgTgfhRQgTAAgGgDQgMgFgBgRQAHgEACgCQADgEgHgGIgFAQIgTgLQALgWgJgZQgPgdgGgOQgOgbADgXIAxABQgWAkAjAOIAAANQgLAYATATQAbAaACAGQAJAEAGAXQAGAVARACIAMAAQgKAtAhAtQAOATAGAbQAEATACAgQgVAPgTgRQgZgXgHAAQgngYABAYIAEAXQACANgEAEQgQAPAMAEQAHACATABIA/BAIAAAKIgZAnQAJAjgKAQQgLASgmgGQgGgKgLgCIgVAAIgmgBIgZgZQAYgFAJgQQAJgQgNgQQgLgPgUADQgTACgQARQgQARAFAQQgaAFgBAVQgBAMABAZIAnABQgCALgHAYQAAARAhgCQAcANgGATQgEANgIgFQgKgJgFgBQgMgCgFAHIgFAQIgGATQgDALAKACQAfAFgCAXIgDAmIgZgKQgPgDgKAKQgJALAIALQANARAAACQgTAZAPAYQAIAOAVAaQgKAGgCALIgBAUgACTI0IACAGIAEgFIgDgFIgDAEgABBHSQALATAGAGQAKAKAOABQABAGgBANQACALAKABQAOABALgQQAQgXADgCQABgBgDgIQgDgJgDgCQgNgHgHAJIgNAQIgPALQgCgTgJgIQgJgJgSAAIgDAAgABzHHQAJgjgCgKQgDgKgWgYgACeEVQgNACgBAJQgBAGAKALIARATQAKgJABgPIAAgXIgXAAgABmgLQgMALgIAZQAKALASAGQAKAEAVAGQADAOAMAGQAGADASACIAEAOQAEAHAJgDQAIgCABgLIABgRIgBgBQAcgDAjgZIgygkIAAAAQgGgHgLgFIgUgFIgOgGIgZABIgLgBQgSAAgMAMgAlIgpQASADAVANIAuAdQgCgGACggQABgTgSgHQgbgJgJAAQgVABgLAbgAEqgCIgBAEIAGgBIgCgEgAg9grQAHAIAvgOQgsgYgMglQgFA7AHAIgACfgyIAFAFIACgFIgDgEgABTixQgKADgIAMQgCAFADADQADADAFAAQAPgBACgNQABgFgCgEQgBgDgDAAIgDAAgAiQi6QALAbAPgIQARgPAIgFIAjAAQATgDACgUQACgSgPgKQgMgJgVgCIgYAAQAAgTgCgGQgFgLgRgBIgBgPIAMgSQAHgLAHgEQAWgJAIgGQANgLgLgOQgLgPgRAKQgKAFgSARIgbAXQgRAJgUgNQAHAmATARQABAQAMAEQADABAVAAIABAbQABAPAHALQAMAUgMACIgKgBQgIAAgEACgAhYnRIACAOIALgFQAAgFgEgIIgJAEg");
	this.shape_629.setTransform(59.3,139.6);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#7E3286").s().p("AgLgGIALAAIAMAMQgBgBgOACIgBAAQgJAAACgNg");
	this.shape_630.setTransform(14.8,260.6);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#68296D").s().p("AAJBLQAHgogCgJQgFgYgkgCQABgLgKgJIgQgQIAMgMQAeAPAUgDIABgmQAEgCAEABIAFAEIAKAKQABARABAhQABAcAIASQAPAhgNAGQgDACgLAAIgYgBg");
	this.shape_631.setTransform(30.1,288.7);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#712C77").s().p("AgngHQAHgQAnghIAMABIAQAQQALAJgBALQgGAJgVAKQgPALAJAXQAHARgNADQgQABgHACQglgjAPgdg");
	this.shape_632.setTransform(22.8,290.7);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#742E7B").s().p("AANBWQhDhAgHhJIgOgNIABgaIAyANIAMANIADA+QAFAhAdARQAAAPAKACQAFAAANgGQAVgJABAWQgTATgUAAQgLAAgMgFg");
	this.shape_633.setTransform(22.3,266.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#63225A").s().p("AhSBEIgVgXQgHgOAVgPQAJgHAAgOQgCgRAAgJQAhAPAdgcQAaAEALgQIA+gLIANAAIANAMQgEAdghALQgqAOgIAHQgMAEgFAUQgDgCgEACIghgCQgVgBACAdIgMAMg");
	this.shape_634.setTransform(31.9,278.2);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#7E3286").s().p("AgFACQAHgLAEANg");
	this.shape_635.setTransform(24.1,220.9);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#742E7B").s().p("AgFgMQAFgBAGABQABASgMAHg");
	this.shape_636.setTransform(34.2,211.1);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#742E7B").s().p("AgCAJQgCAAgDgHIgFgKIAZAAIgEANQgCAEgGAAIgDAAg");
	this.shape_637.setTransform(27.3,179.4);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#68296D").s().p("AgmgRIBNAJQgaAZgRAAQgVAAgNgig");
	this.shape_638.setTransform(22.5,187.8);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#642665").s().p("AgOAIQgBgSgFgOQgFgPAIABQAEAAALAEQA4AthDAdIgBggg");
	this.shape_639.setTransform(38.7,187.1);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#642665").s().p("AgEANQgjABgEgBIgMgNIAAAAQAOgOAkACQAjABAOgOQAQAQgGANQgEAJgTANQgNgOgWABg");
	this.shape_640.setTransform(32.9,198.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#6C2B72").s().p("AgUgSQAlgLAQgHQAHANgDAXQgDAbABAJIhCABQgPgoAagPg");
	this.shape_641.setTransform(52.9,245);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#642665").s().p("AgGAtQgBgVgKgFQgFgRgVgJIABg7IALgCIAZAAQgFA6A3AQQgBAKgCAFQgCAHgIADQgegJACASIAEAdQgMgEgBgUg");
	this.shape_642.setTransform(53,255.6);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#7E3286").s().p("AANAyQgDgCgbgKQgTgGgBgUIABg9QADABAigBQAYgBANAOIgNBWQgGgBgGABg");
	this.shape_643.setTransform(32.3,204.8);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#742E7B").s().p("AAdBKIhSh6QgFgIAEgKQAGgLACgGQAEgBATAXQANARAQgcQADgFAGACQAFACAAAEQAAASAXArQAUAjgKAbQgCAGgFATQgDAFgDAAQgFAAgGgKg");
	this.shape_644.setTransform(43.3,227);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#6C2B72").s().p("AgyBZQgZgqAggoQAcghAJgPQARgdABgdIANABQgBASAEAHQAFALARABIABAZQgNAMAFAGQADADAQAEIAAAWQgXACgLAGQgPAJgBAVQgEAGgGAWQgEASgMAFg");
	this.shape_645.setTransform(22.3,231.2);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#712C77").s().p("AALBjQgPAAgHgCQgLgCgBgNQAEgngBgSQgCgfgfgPQAIgLAAgiQAAgdAPgLQARgMALAWQAMAYANgEQAAAUANAFIgBAyQgfAUAIAXQAEALAZAdQATAVgJAFIgbADIgNgMg");
	this.shape_646.setTransform(25,206.2);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#782F7E").s().p("ABNBcQgUgDAAgQQAFgUAAgJQAAgTgNgGQgygTgPAHQgQAIABAtQgIALgNgUQgNgTgKAYQgTABgGAMQgtgPAKgfQAVgkABgRIAmg+IAkAMIAOAYIAFAMQADAHADABQBDAQAHADQAmARAGAuQABAIALACIAVAAIABAAQgJAlgnAAIgNgBg");
	this.shape_647.setTransform(24.8,249.3);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#63225A").s().p("AhKBEQgMgPgHgCQgKgWAJgmQAJgrgDgSQASgCAlgGQAfgDAUAQQARANAWAEQANACAeAAQg3AiAeBBQgMAEg1ACQgnABgVAUIgDAAQgLAAgKgMg");
	this.shape_648.setTransform(61.2,228.2);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#782F7E").s().p("AgkCZQAEgRgKgRIgTgcIgMgNIAAgNIAXgBQAMgCgCgOQgEgaAHglQAIgzABgMQACg3AOgMQANgMAyAKIANA/QgagEgVAWIgiAjQAjAlAUgPQAKgIAQgqQAiBQhKA9QgHAGgCAJIgBASQADAMgQAHQgPAHAEAMg");
	this.shape_649.setTransform(29.7,163.2);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#7E3286").s().p("AAlCYQAKgbgTglQgYgrAAgRQABgEgFgCQgGgCgDAFQgQAbgOgQQgSgXgFABQgVgGgNgRQgJgNgHgZQANgHAAgTIArgYQAbgOgFggQgBgJAKABQAKAAAEAGQAGAIAFAMIAKAWQAPgJAAgTQAAgXAEgGQAjAlAkAMIAAANIAMAZQgNgCgQARQgPAPgEgDQgcgagEATQgBAKADASQgJAYAQAPQAKAJAYAQQADASgKArQgIAnAKAWg");
	this.shape_650.setTransform(44.9,217.2);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#742E7B").s().p("AhRDCQATgMAEgKQAGgNgQgQQgagTgDgFQgHgOAkgLQBEgdg5guQATgKAHgNQAGgPgNgPQgOgOgSALQgUAQgLAEQgCgCgEgdQgCgTgWgBIABgSQACgJAHgHQBKg8gihRQAIgEAIgRQAIgQAOgBQgCBCgHAhQgJAuAGAVQAKAgAwAGQATADALASQAMARgBAYIgBAiQABAWANASQACgVASgIIAdgLQAEAhAWARQgbAygBASQAAARAYA+QAFANgHAHQgFAHgOABQgkgMgkgmQgEAHAAAXQAAASgOAKIgLgWQgGgNgFgHQgEgHgKAAQgKAAABAIQAFAhgbAOIgrAYg");
	this.shape_651.setTransform(44.2,181.7);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#7E3286").s().p("AABDUQgEgTgPACQgDgFgKgjQgIgagXgJIAHBLQgKAGgCALIgBAUQgegQgGgiIgCg+IANgCQAGgDgDgHQgFgKgIgBQgIgBgHALIgygNIgBgMQAHgMATgBQAKgYAMATQAOAUAHgLQAAgtAPgIQAQgIAzAUIgJAKQgFAGABACQACAHAJAAIAOAAQABAJgFAUQgBAQAUADQAzAHAJgrQALgKABgIQABgKgNgMIAAAoIgVAAQgMgCgBgIQgGgvglgQQgHgDhDgQQgDgBgDgHIgFgMQARACARgNQASgQAJgHQAQgKgFgJQgFgHgRgFIAMgwIAAgYQAAgSgLgHIgBgZQAfgGAGAbQAIAlAEAEQBEA7gFBWQAEgEALgbQAHgQAPAFQAOAEANALQAPAMADAMQACAIAHALIAKAPIAAAyQgJAAgOgWQgLgRgSAKQgTAKAEAVQADAUAJAIQAKAJATgDQgBAlgCAIQgHAYgbAHQgBgJgBgEQgHgSgFgIQgIgNgPAGQgQAHAFALQADAHALAOQAJAPgYANQgagJgFATQgHAegBABQgMAAgGgUgAANgZIAPABQAEgVgBgMQgBgVgRgTg");
	this.shape_652.setTransform(31.7,248);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#0D010A").s().p("ArUGLQgcgEgUAJQABgZgCgMQgEgVgXgGQgIgDABgGQAAgEAFgGQACgBAPgEQAfACAGgDQANgGgPghQgHgSgCgdQAAghgCgRIADglQAHgIArgOQAggLAFgdIAagZQAEgHAUg6QANgpAYgUQAKAFABAVQABAVANAEQAagPgBgYQAHgDADgHQABgFABgJQAGgHgIgaQgIgWAXgJQAEgBgKgEQgNgFgDgDQgBgIADgcQADgXgHgOQAagYgbgaQAVgUAogBQA1gCAMgEIAjAVQAVANATgSIAkgBIAEADIAEgBQAIAHANACQAHABAPgBQAHAIAEACQAGAEAIgEIBLgRQArgHAhAEQATgKAyADQAtACAXgSQgUgGgFgQQgEgLADgWIACgOQADgIAIgDQAPgCADAWQAEAWAPgCIBCA8QAHAMAPABIAZABQAJAnApAYQAWANAvASQASAKBKAbQA6AWAgAXQAWAPATgEQA0gKA9AjQANAHAQgBIAcgCQAAAUAXAAQAYAAADANQgIADgBAIQgBADAAAMQgDAOgJAdQgIAaADAQQAMBEAVBgIAkCkI3MABIgwgHgAorAHQgBAFACACQAIAKALgBQALgCAUgNIgxgJg");
	this.shape_653.setTransform(109.6,265);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#909090").s().p("A2XWyQgggRgOgpICigDQAUgIAdAEIAvAHIXMgCQALgBAVABQASAAALgKIAYAAQAmAZAwgZQAhAPAzgBIBVgEIATABQALgCAGgKIAcgBQARgBAIgMQAOANAYAAIAngBQAsASBDgBIBwgEIAsgBQANAAAdAEQAYAAAQgOQASANAcAAQARAAAhgDQAXAEA3gFQA0gDAcAGQAtAIgBgzIgCkCIAAjlQABgOgBgGQgCgKgJgHIABgIQANgngCg5QgCg/AAghIAAlEIgLgUQgHgNADgDQAUgdgCgvQgGg0ADgaIABiPQAChYgMg4QAJgQACgVQABgOgDgZIAAkTQgKgWADgiQAGglABgSIACsBQABgYgCgNQgDgTgHgQQAaABAQAPQAOAOAIAbQAIAZAAAxMAAAAp4QAABUgZAZQgYAYhXAAMgqJAABQgxAAgbgPg");
	this.shape_654.setTransform(163.9,165.3);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#642665").s().p("AgHgCIAPAAQgFAFgDAAQgEAAgDgFg");
	this.shape_655.setTransform(61.9,17);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#642665").s().p("AgLAHIgBAAQAAgUAMgFIANAlg");
	this.shape_656.setTransform(64.9,16.1);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#712C77").s().p("AAMAZQgBgUgNgHIgkAgIgMAAIgYgxQAagPAKgYQAaADAWAWIAmAlQAHAOAJgOIAJABIABAAQACAbgUALQgbAJgLAGQgFgHgBgag");
	this.shape_657.setTransform(56.2,16.3);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#742E7B").s().p("AADgFIABALQgNgFAMgGg");
	this.shape_658.setTransform(203.7,23.6);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#742E7B").s().p("AAAANIgYgBIAAgkQA2gEgFA1g");
	this.shape_659.setTransform(210.3,16.8);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#712C77").s().p("AgdAAQAOgTABgFIAZANQAHALATAAQAFAMgHAAQgJgBgDACIg8AMQgCgNAKgMg");
	this.shape_660.setTransform(211.7,20.5);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#782F7E").s().p("Ag2AOIgCgTIABgNIA8gNQADAUAQAIQAFADAcAGIgBAOQgfgFgNAAQgYACgRAOIgOAAQgJgFgCgMg");
	this.shape_661.setTransform(213.4,25);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#742E7B").s().p("AAcC2QgRgBgEgMQgHgNAagMIAEACIgEgDIAAgMIACgFIgCAFQgIgBgagZQgVgTgYAUQgDACgMgUQgKgUAOgEQArgNgGgZQgSgdgEgPIAAgXQAVgegWgIIgUgGQgNgDgDgFQgBgPABgGQABgMALgFIAHAIQAEADAFgHIgQgEIAAghQACgSAOgBQAUgCAQAQQAMAMALAZQgOAOAHAKIATAOQALAPgCAPQgBAPgMAMQgOAOAGAVIALAeQACANAPgKQATgOAIACIASgBIAOANIgkAlQgJAFgDAHQgDAIAEAGQATASgBAaQAAAHgGAnQgGgBgTgBg");
	this.shape_662.setTransform(120,30);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#63225A").s().p("AgSAVQgQgJgDgSQADgCAJABQAHAAgFgMIABgKQALgCANAOQANANALgDQAKAFACAKIgBATIgYAEQgagIgFgCg");
	this.shape_663.setTransform(217.7,22.5);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#7E3286").s().p("AALAcQAFg2g2AFIAAgNQAygLAOAMQAOAMgCAzIgBAKQgSAAgIgMg");
	this.shape_664.setTransform(211.6,16.5);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#63225A").s().p("AgXAmQACgXgVgTQgdgagEgHIABgLQAKABAMgFIARgMQAbAAAeAWQApAbAMAEQgCAkgbARQgPAKgqANg");
	this.shape_665.setTransform(27.2,39.3);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#7C3083").s().p("AgRgLIAXAAIAMALIAAAMg");
	this.shape_666.setTransform(95.6,31.8);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#712C77").s().p("AgLAAIAAgMIAXAAIAAAYIgMABg");
	this.shape_667.setTransform(102.5,31.9);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#712C77").s().p("AgLAMIgBgXIAZAAQgBAXgWAAIgBAAg");
	this.shape_668.setTransform(98.7,33.1);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#7C3083").s().p("AgMAAQAHgLABgHQAXAIgGAKIgQATQgNgIAEgLg");
	this.shape_669.setTransform(97.9,24.9);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#7C3083").s().p("AgYgGQAYABAAgZIANAAIAMAMQgEAHgGASQgFASgKAHQgYgNAAgZg");
	this.shape_670.setTransform(100,35);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#7E3286").s().p("AgfAjIAAgzIAggSQARgFANAZIgMAMQgOAFANAHIANANIAAAMg");
	this.shape_671.setTransform(104.4,27.1);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#63225A").s().p("AgKAYQgNgYgSAEIggASQAGghAUgQIBKACQADAGAMADIAVAFQAWAIgVAeIgaABg");
	this.shape_672.setTransform(108.6,23.2);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#782F7E").s().p("AgIAJIgCgKIAAgMQALABADACQAHADgBAIQAAAEgDAEQgDAEgEABIgBAAQgFAAgCgFg");
	this.shape_673.setTransform(42.1,19.5);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#63225A").s().p("AglgHIAagBQAOgBAJgJIARgBQAKABAEAJQADAIgHAGQgFAGgHABIgjAFIgjADg");
	this.shape_674.setTransform(38.7,31.5);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#7C3083").s().p("AAkB1QgngJgQAKQgMgEgpgcQgggVgaAAQgXgigCgMQgDgXAngOQACANADAGQAGAJALADQAGABADgDQADgDgBgGQgEgSgcgDQgFgaAMgXQAJgRAVgVQAAAOANAJIAWAOQAjAeAIAUQAMAdgbAiIgFAcIAigDIAjgFQAIgBAFgGQAGgHgDgIQgDgJgKgBIgSABIgBgzQgCggAPgTIACALQACAGAHgBQADgBAEgEQADgEAAgEQAAgJgGgDQgEgCgLgBQgIgXATgFQAZgFACgFIAnAAIAYAyQgeAeAqAIQAAAPgOALIgXARQgVAbAiAEQgBAOgUARQgUAQAAAPQgNAPgWAAQgJAAgLgDg");
	this.shape_675.setTransform(36.7,26.3);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#7C3083").s().p("AANAlQgEAAgTgJIAAAAIgNgNIAAgYQgIgcASACIAbABQABAJgBASQABAOALAIQgBAWgMAAIAAAAg");
	this.shape_676.setTransform(197.6,26.5);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#782F7E").s().p("AgeAyQADgQgKgSIgTgcIgMgkIANgBQAKABAVAGQASAEANgLQABABAXAhQAOAUAYgFIAAAlIgZABQgQgNgWAMQgZANgKAAIgBAAg");
	this.shape_677.setTransform(188.4,25.6);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#6C2B72").s().p("AAAAlQgTgdgSgIQgLgHgBgPQABgTgBgIIAmgZQALAHAAASQgMAHANAFIAkABIACAUQACAMAJAEQACARgFAVIgKAlQgQgIgVgeg");
	this.shape_678.setTransform(204,28.1);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#712C77").s().p("AgGgCQAEgHAIABQACAAACADQAAAIgGAEQgDABgKACIADgMg");
	this.shape_679.setTransform(144.8,20.8);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#712C77").s().p("AAFAvQAJgRgdgdQgagYAZgYQAFACAFgCIAKAIQAHAEAAADIAOAkQAJAWgJARQgDAFgNAAIgEgBg");
	this.shape_680.setTransform(136.9,15.2);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#642665").s().p("AArAkIgYgIQghAOgNgLQgMgLgQg2IANgBIBiAyQgBAVgLAAIgBAAg");
	this.shape_681.setTransform(130.7,21.6);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#6C2B72").s().p("AgtAkQgHgKAPgOQAKgGACgKIAAgUIAZgXIAXgDQAhAPgLAWQgFANgPAYIgNACIgBAAQgGgMgFAMQgSAHgHARIgUgOg");
	this.shape_682.setTransform(123.9,15.5);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#712C77").s().p("AABAtQgWgEgLABQgDgcgTAPQgVARgFgOIgBgyIAYAIQAMABABgWQAKgEAdABQAYABAMgLQAEAaASgGQAagIACAAIABABIAAAYQgCAMgcABQgYABADAXIAAABQgKAOgTAAIgBAAg");
	this.shape_683.setTransform(140.7,26.3);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#7C3083").s().p("AAHBLQADgGANgKQAIgJgNgNQgKgKgYgiQgUgdgTgMIAAgZQAigGAVAVQAOANAPAkQAEAIADAOQAFAMAOACIABAxg");
	this.shape_684.setTransform(299.9,44.3);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#712C77").s().p("AgKAJQgSgfgjgJQgIgMAGgKIAPgQIAmAMQARANAVAdQAYAiAKAKQAOANgJAJQgNAJgCAGIglAEQgTg2gEgHg");
	this.shape_685.setTransform(295.6,45.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#742E7B").s().p("AgMAVIAAgMQAAgXgYgBIgNgmQAAgTANgGQApAMAHADQAbAMALAXIgOAQQgHAKAJALQgCALACAXQAAAWgJAOg");
	this.shape_686.setTransform(285.5,41);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#642665").s().p("AgJAJIABgMQACgGAHABQAHABABAGQACAFgHAFg");
	this.shape_687.setTransform(70.8,13.4);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#742E7B").s().p("AgMgLIABgBQAWABACAXIgNABQgLgHgBgRg");
	this.shape_688.setTransform(78.7,25.6);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#742E7B").s().p("AgMAAQgFgOAHgKQAcAKgDAOQgDAKgVAPQACgHgFgSg");
	this.shape_689.setTransform(74.7,30.6);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#742E7B").s().p("AgMgJQAIgQAKAHQANAHgDAMQgBAHgIAOQgggDANgcg");
	this.shape_690.setTransform(84.2,23.4);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#712C77").s().p("AgGAlQgMgFAAgSIAAgOIgNglIA/ABIgBAwQgLgDgIAQQgGANgIAAIgEgBg");
	this.shape_691.setTransform(68,18.1);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#6C2B72").s().p("AgdA/QAegWgIgnQgMg2ACgKIAOgBQAXALABAcQgEAPANAjQAFAegnAIg");
	this.shape_692.setTransform(80.4,33.1);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#712C77").s().p("AgxAAQAOgTAigFQAngGALgHQgBAHgHAMQgDALAMAHIgMAlIgZABg");
	this.shape_693.setTransform(92.5,26.9);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#6C2B72").s().p("AAMBmQgXgFgHABIgBgCQALhJgBgIQAAgsghgdQgCgCAAgGIAAgKQAMADAHgQQAIgQALAEQACAIAPAiQANAagGAUQgHAJAFAPQAFASgCAHQgGAQAOARQARAUABAJIgBAAQgIAFgMAAIgMgBg");
	this.shape_694.setTransform(71.8,29.5);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#742E7B").s().p("ABMCCQgJgVgIgIQgNgNgUAEIgBgBQgDgFgHgpQgGgdgTgMQgFABgYgIQgRgGgIAPQgGAOAMANIAWAVQgqAPgHAGQgUARATAlIgZAAQgMgIgBgQQABgSgCgJIgBAAQAOgNgHgXQgJgcAEgJQAngHgFgeQgMgkADgPQAWgRAEghQASABAHALIBjA/IAAAMQgBAbAaAMIAlBJQABAJAAATQABAPALAJIAAALIgZAFIgJAAQgJAAgHgEg");
	this.shape_695.setTransform(92.4,39);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#782F7E").s().p("AkjDWIAAglQAPgqAGgVQAKgkgGgdQAXgDAGgVQADgZAGgKIAAAAIABgBIgBABQANgCAPAMQARANAKAAQALAAAKgEQALgFgGgFQgcgYASgSIARgOQAKgJACgHQBIAsAGhSQAAgHAEgKIAGgSQASAAAkgPQAjgOAVACIAOgMQAHgBAFgSQAFgOAPAGQAPAGAHALQAIAMgEAOQgFATAEAEQAEAFASgIIAVALIABACIgBAZQAAAPAMAAQATAAANgIQARgKADgWIAlABQgEAKAIAbQAIAXgOAOQgegfgZATQgbAegPAJQgfgJgRAGQgWAHgHAfQgaAZgDAQQgDAVAlAQQAVAJAAAaIgNANIgZAlIgMABQgBgagZAAQgEgGgFgBQgGgCgEAFQgQAYAXASIgBAUQgCALgKAGQgNgCgKgNQgOgVgJgpQgJgvgIgQIAmgkQAPAOAMgHQAIgEAQgQQgNgIgPAFQgUAFgDAAIgxAOQgeAIgSAKQgMAGgeAKQgYAMABAbQgDAFggALQgWAIAHAaQgZAAAAAZIgNANQgSgBgJAOgAgXhcQgCABgCAFIgDAIIAcAFQADAcAQAGQAOAFAbgMQgOgQgQgHQgNgFgRABQgDgOgCgCQgDgEgFAAIgIABgACdhRQgKADgDAHQgDAFAEADQADACAGgBQAFgBAIgGQABgNgHAAIgEABg");
	this.shape_696.setTransform(51.4,53);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#68296D").s().p("AAAACIgCgDIABAAIAEADg");
	this.shape_697.setTransform(189.2,34.6);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#6C2B72").s().p("AADgGIABANQgOgFANgIg");
	this.shape_698.setTransform(180,23.6);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#7C3083").s().p("AgGgBIAEgFIAJAGIgHAHg");
	this.shape_699.setTransform(176.3,18.2);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#6C2B72").s().p("AgMAJQAGggATAYQgHAJgKAAIgIgBg");
	this.shape_700.setTransform(160.1,38.1);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#6C2B72").s().p("AgLAMQgCgDAAgFQAAgPANAAIAOADIgRASQgDACgCAAIgDAAg");
	this.shape_701.setTransform(175.5,27);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#7C3083").s().p("AgKATIgCglIAMABIAMAkg");
	this.shape_702.setTransform(181.5,22.4);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#6C2B72").s().p("AgMgFQAAgXAXgDQgBALADAVQAAAUgNALg");
	this.shape_703.setTransform(160.2,18.6);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#7C3083").s().p("AgSAEQAJgFgDgIQgFgIgBgFIAkAAIABAYIgSASQgCADgDAAQgIAAgGgTg");
	this.shape_704.setTransform(194.7,31.6);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#712C77").s().p("AgRALQAAgcgBgOIAMAAIASAdQAKARgDAQIgEABQgcAAgEgVg");
	this.shape_705.setTransform(183.4,27.5);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#68296D").s().p("AgcgNIAAgNQAkgPAMASQAJANAAAsg");
	this.shape_706.setTransform(163.1,28.3);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#68296D").s().p("AgDAcQgRgHgHgFQgNgJAAgPQAJABAcgPQAVgMARANQABAFAEAIQADAIgIAFQgTgCgHADQgLAFAAARg");
	this.shape_707.setTransform(189.3,31.5);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#642665").s().p("AgmAiQgPgGgBgSQAAgWAQAFQAWAGACgCQAJgEATgFQAQgIACgRIAVADQAHAUgQAKQgVAIgGAIQgYACABAYQgXAAgJgEg");
	this.shape_708.setTransform(159.6,14.3);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#6C2B72").s().p("Ag3ANIgBgBIAOgwQAKADAlATQAeAPAWgBIAAAZQgMAEghgBQgbgBgPAKQAAgXgZgBg");
	this.shape_709.setTransform(154.5,21.8);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#6C2B72").s().p("AgxAHQgJgQAMgWQAmgDAYAPQACADAVAQQAPAMAAAPIhJAGQgXgOgHgMg");
	this.shape_710.setTransform(151.1,36.3);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#7C3083").s().p("AAZApQgVgHgJgBQgNgUgNAUIgZgxIANAAIAxgZQAdADAJAaQAGAOAHAfQgKAJgNAAIgJgBg");
	this.shape_711.setTransform(183.4,17.2);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#742E7B").s().p("Ag4AmQgQAAgFgMQgEgHAAgSIAAgBQAOgBAhAIQAZAAgJgrIANAAQAOgLAcACQAhAAALgEIAAAZQgdgCgOAhQgRAmgPAFQgYgOgmACg");
	this.shape_712.setTransform(152,29.3);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#712C77").s().p("AgOA2QgQgOgNACQASgcACgOQAFgVglgLIAAgYQAUAIAEABQAMAAABgWQASAIATAdQAVAeAQAHQACAXgOARQgJAKgYAPQgKgBgPgPg");
	this.shape_713.setTransform(202.1,35.1);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#0D010A").s().p("ABzRAQAAgTgPgGQgTgEgKgEQgegNhKgKQhFgKgkgUQgLgGhQgfQg3gWgcgdQgngogxgIIgYgCQgcgLgTgfIgdg4QgGgVgWAAQgfAAgEgCIgYgDIgChKQgFgMAOgKQAOgJgCgFQgPguARhJQAThWgCgfQAcgNALgJQATgPgUgeQAAgHgDgFQACgXAAgLQgBgUgLgNQACgSgIgUQgFgKgPgXQgDgGgUgcQgPgVAAgSQASAAAmAWQAiAUAZgGQAKgCAUABQAQgCAHgRQAFgMgDgOQgDgMgIgIQgJgKgPAIQgWALgDAAIgCAAIgDgBQAHgfgRgQQgOgNgggGQgMgGgJgdQgHgagNACQghAGAAgSQAHgWgEgIIAVgMQAMgHgFgIQgcg0gtgDQACAJgFAcQgEAVALALQAMA/AFAPQAQAoAmASQAGADgDAGQgEAFgGAEQgWgCgUgNQgKgIgWgVIgEgVQgCghgEgTQgGgbgOgTQghgtAKguQATgiAegFQAZgEAlAQQAFACAOALQANAGAGgRQAEgNgLgIQgGgEgSgHQgSgIgSADQgcAEgMgOQgKgMACgcIgBg+QAGgYgLgRIABgxIADgFIgEgJIALidIAKgQIADglIgDhMIATgWQADgHARgRQAOgOAAgNQAFgEAbgoQASgcAZgEQAIgKAjgPQAdgMAGgXIgBAAQCMg9BhgcIBigHQARAEAJgMQA9gDB4gLQBpgDBMAcQANgBAQANQAQAPAKABIBrBlQACArAIAaQAMAjAdAUIAaAYIAAA/QgRgBgJgXQgKgZgNgCIgSgXQgMgNgSAGIAABAQgWghgeACQgjAKgSADQgjAKgogLQgUgGgygWQgXgKgRgBQgVgCgTALIgOgGQgugFgWgEQgogGgcgNIgwgcQgUgpglAeQgKAHgiAiIg/AYQgmgXgPApIgWA4QgVAPgFAZQgDAQADAfQACAdgigCQgkgDgBAYQAIgBAhAIQAZAHARgOIALAGIAcA8IgCAbQAAAQAMAJIARAZQgBAIgIATQgFAPAJAIQAYAUgDAZQgDAPgOAgIgNAjQgEAWAXANIgIAIQguAuAeAjQAGAGACAOIAFAXQAHAZAhgHQAJgBADgHQADgFgCgKIANgPIACABIAQACQAMBDASAbQAbAqA7ADQAIABAKAIIASAOIAAAQQgIAGgBAIQgBAGACALQgEABAAAFQgCACgfAWQgVANADAXQAEAZAUASQATASASgGQAPgFAtgBQAlgCAVgNQBDACASgCQAvgHAfgeIARAAQAKAAAFgGIg3gvIABgBQgGgcAJgSQALAGAVANQAUAIARgQQAMACAEgMIABABQAsgsAqAiQALAJAWAVQAUARARAAQgBALgRAQQgOAOADANIBxAuQgKgXALgkQALgjgHgPQgRgmAUgWQADgDAsgcIACAWQghA3ADA6QgdBSBNAsQA0A8AqhIQADgBANgNQALgKANACQgCANgQAhQgNAcABAUQgFAAg+AWQgpAOgfgUQgKgHgFAIQgFAGABANQADAfAgAXQAMAiADAWQAGAfgGAbIgTAVQgMAMADAOQgGAkgdAeQgKALgvAkQgIACgpAAQgeABgSAKQgVABACAVQADAYgIAEQgGAAgJgKQgJgMgFgEQgRgRgNAoIgOgJQgRgSgOAHQgHAEgOAUIgVAMIgJgPIgKAOQgLAOgIAFQgNAHgOgDQgCgJgCgDQgDgGgIgBIiGg3QgRgLgagGIgtgHIgCACIACgWQAAgMgOgCQgggEgngZQg3gjgLgFQgMgUgcgLQgqgbgsgzQABgVgMgDQgHgBgUAFIg+g7QgJAwASAlQAOAfAlAeQACAlAeAMQARAHAoAFQgCAyAxADIBOA1QAKANATAIIAiAMQARALAhAaQAeARAhgSIALAMQgCAIgVARQgMAPAcAFQAfAFAfAPIA5AgQAEADAOAbQAJATAWgIQADALgQAdQgIAXAoAEQABAAACAGQABAHgBAAQgUAMABAYIADApQgDANgHACIgBAAIgPgCgAAcPzQAIAKAKgGQAKgGAEgNQAIgXgTgpQgTgpgWgMQgIgFgaAMQgWAJgUgYIAVAvQAJAVgJAMQglAwAZAFQAOADAngFQAGAAALgCQAKAAAHALgAjUMTQgCAMgKAFIAABgQAJgGAxgHQAjgFACgcQACgggYgYQgXgXglgIIgBAUgAmiLkQgNADgIAOQgHANADALQAEAKAKABQAPACAhAMQAdAFAQgcQAHgKAZAHQAVAGADgTQAFgsg0gbQgFgCgHgBIgLgBQABANAAAZQABAXAKAOQgTABgMgEQgQgFgNgNQgFgGgJAAIgGAAgAlmKmIAIAMIgDgOgAEcIIQAdAMAHgBIAOAAQAGgDgIgTQgNgigfAPQgTAJgEAAQgMADgHgLIgIASIAIAOQAJgHAMAAQAIAAAJAEgAGCFxQgNgJgCgVQgDgXgGgHQgRATgWgJQgZgNgNgCQgQgDgIAAQgOAAgGANQgIAQAMALQAGAGAQAIQATAMAmgCQArgCATAGIAAAAgAFTDkQgkAFgBAmQgBAOAKAEQAEABASABQAlABgDgiQAAgfgXAAIgFABgAl+ohIACgEIgBgFgApXp0QgNARABASQAAAOAMAOQAKALAOAHQARgHAlgJQAbgKAAgSQgBgYgagPQgVgMgcgCIgCAAQgPAAgMAQg");
	this.shape_714.setTransform(171.4,145.7);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#7C3083").s().p("AgCAHQgCgBgCgIIAFgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQABABABADIACAFQgGAEgCAAIgBAAg");
	this.shape_715.setTransform(254.2,13.1);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#7C3083").s().p("AgLACQgCgHAFgDQAEgDAGABQADAAADADQAEAEAAADQABABgEAEIgGAGQgNgGgBgDg");
	this.shape_716.setTransform(253.5,20.7);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#7E3286").s().p("AABAVQgWgLgPAIQgCgUACgJQADgRAVgCQAFAIAWAVQATAPAEARIgEAAQgLAAgWgKg");
	this.shape_717.setTransform(224.1,18.7);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#7E3286").s().p("AglAfIAQgXQAKgNgBgNIABAAQALgGAAgTIAmAmIgZAUQgOAMABARg");
	this.shape_718.setTransform(279.2,21.2);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#7C3083").s().p("AgeAVIAAgZQABgQALgIIAlAMIANAlIgfAIIgIAAQgNAAgKgIg");
	this.shape_719.setTransform(277.3,27.2);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#7E3286").s().p("AgDAgIgNgNIAAgBQgBgDgPgSQgKgOABgNQANALATgEIAegHQAVACAAALQAAAEgJATQgMAHAAATg");
	this.shape_720.setTransform(278.4,32.5);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#7E3286").s().p("AAzBWQgQgDgIgUQgPgjgdgBQgNgIgPggQgPgdgVgHIABglQApAYAsA1IBMBWIAAAHQgPADgJAAIgGgBg");
	this.shape_721.setTransform(243.5,21.8);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#7C3083").s().p("Ag+BLIgBgQIAAgTQgBgKgKgFIAAgMQAPgJAXALQAaAMAKgCQAYgEACgUIgCghQgBgiANgHQAMgGAbASIAAAlQgYABgDAaQgEAkgYASQgUAPgkAEg");
	this.shape_722.setTransform(227.9,19.3);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#6C2B72").s().p("AAAA+IgQgFQgJgEADgGQAMgjgNgEQgEgBgiAJQgXAGAAgLQgBgHAKgRIAmAAQANgGgNgHIAAgKQANgEAVgWQATgOAVAaQATgZASAZIAKAyQAGAdgQAUQgTATgZAAQgPAAgPgGg");
	this.shape_723.setTransform(264.3,42);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#782F7E").s().p("AACBgIgWgSQgOgLgPAEQABgSgBgJQgBgQgLgIQAQgUgHgdIgKgyQAFgCATgOQAOgLANABIAAABIAMAMQAFANAHgNIANAAIAMAmQAHASASAHIAAAMQgPAQABAbIACAuQAAAigVAAQgLAAgRgKg");
	this.shape_724.setTransform(278,44.9);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#7C3083").s().p("AgwBfQgTgYgVgEIgPgRIgBgGQAbgFA3gDQAqgLAHg1QADgPABgGQACgNgHgHQgSgUAHgQQAFgNAVgKQASgHAHAPQAEAHADALQAoAYgKAeQgGASgYAgQgNAXgBAiIAAA6QgVgZgUANQgUAXgNADQgJgGgYgeg");
	this.shape_725.setTransform(262.1,25.1);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#712C77").s().p("AAkCpQgDgQgEgHQgPgkgOgOQgVgVgiAGQgFgTALgVQADgHASgaQAVgdAQhBQAShDATgdQAMAEgEAJIgIA/QAIAPACAUQACANgBAYIgCDZQgOgCgFgMg");
	this.shape_726.setTransform(299.9,28.7);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#68296D").s().p("AAFgGIgJANQgCgJALgEg");
	this.shape_727.setTransform(10.4,205.3);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#712C77").s().p("AgSAAQgBgQANgIIAaAAIgBAZQgLgBgIAJIgPAQIgDgZg");
	this.shape_728.setTransform(11.5,148.4);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#742E7B").s().p("AgSAfIABgXQAAgSACgGQAFgNAQgCIAOAaIgBATQgCAMgKAFg");
	this.shape_729.setTransform(12.8,142.8);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#742E7B").s().p("AgRglIAiAAQABAhgDALQgHAXgYAIg");
	this.shape_730.setTransform(11.7,79.5);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#742E7B").s().p("AgGgfQADAGAUALQARAJgEAPQgEAVgXgFQgZgFgGALQgIggAegfg");
	this.shape_731.setTransform(12.8,105.1);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#782F7E").s().p("AgQg3IAhANQgMAMADAnQABAkgZALg");
	this.shape_732.setTransform(11.7,51.3);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#712C77").s().p("AgtgeQAWgEAXAWQAbAbAUAGQgUAGghgBQgbgBgNAHg");
	this.shape_733.setTransform(14.6,155.3);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#7E3286").s().p("AgYgYIAjgNIAAABIAMAjQAFAUgGARIgMABIgiABg");
	this.shape_734.setTransform(12.4,71.9);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#68296D").s().p("AgdAbIAAgZQAJgVAOgJQAOgLAWAFQgCA2gBACQgFAOgRAAQgNAAgVgJg");
	this.shape_735.setTransform(13,225.9);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#68296D").s().p("AAMBQIgkgXIABiJIAiAYQgBASgUAkQgLAfAsAPIABALIgBAag");
	this.shape_736.setTransform(12.4,251.9);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#642665").s().p("AgOA+QgKgMgGgEIABgPQAZgLgBgjQgCgoAKgMIAZgBQAIAbgPAqQgQAvACAVIgFAAQgIAAgIgHg");
	this.shape_737.setTransform(13,53.7);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#68296D").s().p("AgQA/QgVgyAJhLQAqAdASAtQgTgCgGAbQgHAagPAAIgBAAg");
	this.shape_738.setTransform(12.8,197.4);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#7C3083").s().p("AgjAxIgBhiQAYgCAQAcQASAfAPAEQgBAkgaACQgggEgNADg");
	this.shape_739.setTransform(13.6,34.4);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#6C2B72").s().p("AgHAOQgRgbgYACIAAgaIA8gMQAmArgBAsIgBALIgXABQgPgEgRggg");
	this.shape_740.setTransform(14.8,30.6);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#782F7E").s().p("AgdhBQAygWAGA4IACAhIABAhQgWgFgOALQgNAJgKAWg");
	this.shape_741.setTransform(12.9,218.9);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#7C3083").s().p("AgPhkQAUABALAQQAHAKAKAXQgaAEAFASQAJAagBACQgaAGAHAVQALAdgFAFQgQACgFANQgCAGgBATQgehaAghvg");
	this.shape_742.setTransform(12.7,133.5);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#7E3286").s().p("AgaAxQgLgYgTAMIAAgZQAGgLAaAFQAXAFADgUQADgQgPgJQgWgLgCgGIgBgKQAPAEAhgHQAdgBAMAcIgBAAQgPACgFAHQgGAIAMAKQAOAMADAQQADAOgGASQgEACgfgMQgWgIgMAfIgBACQgDAAgGgQg");
	this.shape_743.setTransform(15.7,107.1);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#642665").s().p("Ag2A6IAAgyQAZgIAIgXQACgLAAgiIALgBIA/ACIgNAyQgJAGgCALIABATIgDAYQgHAMgWAEQgXAEgHAHg");
	this.shape_744.setTransform(15.5,82.5);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#562354").s().p("AAQAvQgOgKgQAFIgZACIgigNIAAg+QANgEAhAEQAbgCAAgkIAXgBQADAHAdAaQAVATgCAWQgXADAAAcQAAAfgPAFQgQgUgEgEg");
	this.shape_745.setTransform(17.4,42.6);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#712C77").s().p("AgOBWQAGgRgFgVIgMgjIAEgCIABgEIgFAFIgkANIAAhuQAGAEAKAMQAKAJALgCIA8gZQAZAFABASQABADgGAgIgIAiQgCATAOAOIAAAlIAAAAIgbgIIACAVg");
	this.shape_746.setTransform(16.1,66.9);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#712C77").s().p("AATCKQAGgSgDgOQgDgQgOgNQgLgKAGgIQAEgHAPgCIAGADIgFgDQgMgcgcABQgiAHgPgEQgXgXgCgkQAEgsAAgVIAXAMIACAjQAEASAWgIQAYgIALgPQAPgWgRgbIACgYIAXAAIANANIAAAMQgLAnAbAlIAvA9QgZAOANAYQAPAegFAKIgYgDQgOgBgLAUQgJATgNAAIgDAAg");
	this.shape_747.setTransform(19.1,98.3);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#742E7B").s().p("AADB1QgVgfgMgHQgKgWgGgKQgMgRgUgBQgRgYABglQAEgqAAgVQATgNALAZQAIATACgFQAMgfAXAIQAeALAEgCQAPACAKgUQALgVAOACQgCAWgIAtQgBAnAdAZQAMAKgHALQgHAKgRgBQgegBgBARQAAAJAIAYQgQAggPAAQgFAAgGgFg");
	this.shape_748.setTransform(19.1,120.4);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#742E7B").s().p("Ah7DaIgBkTQANgHAcABQAhABAUgFQgUgGgcgcQgWgWgXAEIAAgOIAOgQQAJgJAMABIAaAMQAKgBAXAAQARgEgIgdQgDgIAIgEQACgBANgDIAMAUQAJAJAQgDQgIggAIgLQAJgNAhAQQAEACAUACQAPABAHAKIgBAlQgygKgOAMQgOAMgCA3QgBAMgIAzQgHAlAEAaQACAOgMACIgWABQABgdgCgNQgEgVggABIgFgOQgEgHgJAEQgIADgBAKQgBAJAEAEQAHAHAFgHQAIgIADAAQACAOgBAfQAFAZAgAEIALANIATAcQAKARgEARQhCAJgHBCg");
	this.shape_749.setTransform(22.4,164.2);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#782F7E").s().p("AhkDiQgKgEgCgJIAAgTIABmvIAlAXQgCAPAKAAQAPgCABABQAIBJBDBAQAAAJACARQAAAPgJAHQgUAPAGANIAVAXQgnAggIARQgOAeAkAjQAGgCASgBQANgDgHgRQgKgXAQgMQAVgLAFgIQAlACAFAYQACAJgHAoQgPAEgCABQgEAGgBAEQAAAHAHACQAXAGAEAVQADAMgBAZIiiADg");
	this.shape_750.setTransform(21.1,281.4);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#7C3083").s().p("ACMFiQgHgLgCgIQgDgMgPgMQgNgKgOgFQgPgEgHAQQgLAagEAEQAFhWhDg7QgEgDgJgmQgGgbgfAGQgRgBgFgLQgEgHABgSQgFgOgIANQgBAegSAdQgJAOgcAiQggApAZApIglA+IgjgYIAAiZQAvAVAKgZQABgCACg3IgBghIgCgiQgGg4g0AWIABg+IAKgNQgBgFADgFQARAAAGgaQAGgbATABQgRgtgrgdIAAgzIBWAAQANAjAVAAQASAAAagaIhOgJQAHhCBDgJIAFALQADAHACABQAJABADgGIAEgOQgEgMAQgGQAQgIgDgLQAVABADATQADAcACACQALgDAUgRQASgLAOAPQANAOgHAQQgGAOgTAKQgLgEgFgBQgIAAAGAPQAFAOABASIAAAhQgjAKAGAOQADAGAaASQgOAOgigBQgkgCgOAPQgOAEgNgYQgLgWgRANQgPALAAAcQAAAigIALQAfAPACAgQABASgEAnQABAMALACQAHACAQAAIANAMIAbgCQAJgGgTgVQgZgcgEgLQgIgXAfgVQABAUATAGQAcALADACIAAAZQAGAZAJANQANARAVAGQgCAGgGALQgEAKAFAIIBTB7QALARAGgNQAFgSACgGIAgAKQAHACANAPQALANAMgCQAbAagZAZQgQAHgmAKQgbAPAQAqIgLABIgKgQg");
	this.shape_751.setTransform(33.7,211.8);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#CCCCCC").s().p("A1pX5QhOAAgfgdQgfgegDhMIAzAMQAOAqAgARQAcAOAwAAMAqJgABQBXAAAZgXQAYgZAAhVMAAAgp3QAAgygHgZQgJgbgOgNQgQgQgagBIAIg+QBBAWAZAhQAZAiAABCMAAAArQQAAAkgFAUQgGAegQAVQgSAUgcAGQgKABgrAAg");
	this.shape_752.setTransform(163.9,164.7);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#F5F5F5").s().p("AgHgFIAPAAIgDALg");
	this.shape_753.setTransform(93.1,9.9);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#F5F5F5").s().p("AgHgEIAPAAIgCAJIgCAAQgIAAgDgJg");
	this.shape_754.setTransform(108.1,9.9);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#F5F5F5").s().p("AgEAFIgCgKIANAAIgCAKIgFABIgEgBg");
	this.shape_755.setTransform(135.7,9.9);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#F5F5F5").s().p("AgHgFIAPAAIgCAKIgDABQgHAAgDgLg");
	this.shape_756.setTransform(180.9,9.9);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#F5F5F5").s().p("AgHgDIAPAAIgGAIg");
	this.shape_757.setTransform(226,9.8);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#F5F5F5").s().p("AgHgDIAPAAIgJAHg");
	this.shape_758.setTransform(266.1,9.8);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#F5F5F5").s().p("AgMAAQAMgVANAVQgGALgHAAQgFAAgHgLg");
	this.shape_759.setTransform(36.1,9.4);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#7E3286").s().p("AgLgRIAXAAIAAAjg");
	this.shape_760.setTransform(206.6,11.3);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#F5F5F5").s().p("AgSABQASgbATAbQgJAMgKAAQgJAAgJgMg");
	this.shape_761.setTransform(247.3,9.4);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#F5F5F5").s().p("AgQALIgCgLQASgZATAZIgPANg");
	this.shape_762.setTransform(164.6,9.5);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#F5F5F5").s().p("AgSAAQASgaATAaQAAAFgBAFIgXADg");
	this.shape_763.setTransform(124.4,9.4);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#742E7B").s().p("AgYgRIAkAAIANANIgZAWQgYgKAAgZg");
	this.shape_764.setTransform(121.3,11.2);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#642665").s().p("AgSAYIACgvIAkAAQgQAXADAYg");
	this.shape_765.setTransform(66.8,11.9);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#7C3083").s().p("AgSAeIAYg8IANAAQABAegEAJQgIATgZADg");
	this.shape_766.setTransform(259.8,12.5);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#742E7B").s().p("AgFAfQAFgogegUIAwgBQACAMALgBQgNAOgGAHQgJAOADAPg");
	this.shape_767.setTransform(178.3,12.4);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#782F7E").s().p("AgYACQAFgHANgOIACgLIAkABIgNAjIgxAZQgEgPAKgOg");
	this.shape_768.setTransform(182.1,12.4);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#7C3083").s().p("AgeAMIAigjIAbAAQgCAhgOAKQgFAEgIAAQgMAAgUgMg");
	this.shape_769.setTransform(24.2,11.9);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#7E3286").s().p("AgrgZIAZAAQANAXAMgXIAlAAQgcAzgMAAQgMAAgjgzg");
	this.shape_770.setTransform(36.7,12);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#6C2B72").s().p("AgegqIAlAAIAZAkIgBAAIAAAxQg7gOgChHg");
	this.shape_771.setTransform(204.7,13.7);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#782F7E").s().p("AgXAYQgOgNgGgIQgJgMADgOIBkAAIAAAKQgKAWgaAPg");
	this.shape_772.setTransform(47.3,11.9);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#7C3083").s().p("AgdANQABgeACgPQADgbAggDQAaAfgHAbQgHAagtApg");
	this.shape_773.setTransform(12.5,18);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#7C3083").s().p("AAnAkIgQAAIglgmQgXgVgZgDIAAgKIB+ABIgCAuQgNAFgBAVIgJgBg");
	this.shape_774.setTransform(58.7,13.1);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#63225A").s().p("AAGAYIgwgNQgdgJgJgZIChAAQgOAYgQALQgQAMgWAAIgHAAg");
	this.shape_775.setTransform(291.1,11.9);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#7E3286").s().p("AAHBJIAAgMQgBgSgLgHQgEgXgIgNQgKgSgTgJQgYgMADgjIAxAAQADBIA7ANIAYAAQgBAFgOATQgKANACANIgBAOIglgCg");
	this.shape_776.setTransform(203.4,16.9);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#742E7B").s().p("AgaAzQgKgIgDgFQgGgHAKgJQAZgWgIgVQgFgMgagXIBjAAQACAcgTAcQgaAfgKAQQgHAKgGAAQgFAAgFgGg");
	this.shape_777.setTransform(78.7,15.2);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#7E3286").s().p("AhXA2IAyhjIACgKIBhABQABAZAZAKIgBAUQgCALgKAFQgMgXgLgMQgRgRgTACQgPACgBASIAAAfQgKAGgBALQgBAHABAOg");
	this.shape_778.setTransform(112.6,15);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#712C77").s().p("AAaAzQgNgOgLACQACgzgOgMQgOgMgyALIAAgkICVAAQgLANAEASIAHAeQgVACgDARQgCAJACAVIAAAMIgEABQgKAAgLgLg");
	this.shape_779.setTransform(215.3,15.6);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#642665").s().p("AhIA+QAugpAHgZQAHgbgagfQATgbAhABQAUABAnADIgjAkQgSALgGAHQgMAMgBARQAGACASgIQAPgHAGANQAHANgKAKIgVAMQgUAKgNAgIg9ANg");
	this.shape_780.setTransform(17.3,18);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#712C77").s().p("AgZB8QABgsgmgrQAPggATgKIAVgMQAJgJgFgOQgHgOgPAIQgSAJgFgDQABgRALgNQAHgGASgMQAdATAQgKQAOgKACgjIAMAAIAAA9QgVAWgIARQgMAXAEAYIgBABQglAOACAYQADANAVAhIgQAMQgKAFgIAAIgEgBg");
	this.shape_781.setTransform(22.3,21.9);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#742E7B").s().p("AAjAvQglgTgKgDIgDgLQgCgGgBAAQgdABgZgaIgogsIDfAAIACALQgCARgQAHQgUAFgIAFQgDACgWgGQgQgFABAXQAAARAQAGQAJADAWAAIANAmIgDAAQgVAAgcgPg");
	this.shape_782.setTransform(151.5,15.6);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#7C3083").s().p("AAnBHIgegTIgUgNIglgmQgbgVgLgzIBMAAQAJAaAbAJIAyANQgBAEgKAJQgHAGAGAEQAUAPADAMQADAPgRASQgLAMgNAAQgFAAgFgBg");
	this.shape_783.setTransform(284.2,16.7);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#742E7B").s().p("AgkBxIgMgNIAMgmIASgSQAFgLgXgIQASgSABgMQACgQgVgSQgKgJgLgTQgLgXgHgKIADgMICGABQADAMALgCIgyBkQgTAPgGAiIAABBg");
	this.shape_784.setTransform(101.2,20.6);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#742E7B").s().p("AgCAqQgJgUgjgdIgWgOQgNgJAAgOIAAg9IAmAAQAiA0ANAAQAMAAAbg0IANAAQgDAOAJANQAFAIAOANQgBAFgaAFQgSAFAHAXIAAAMQgOASABAgIACA0QgKAJgPABIgZABQAbgigLgeg");
	this.shape_785.setTransform(36.7,20.1);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#742E7B").s().p("AgTBAQgWgggCgCQgHgegFgPQgJgagdgDIANgkIBwAAQgDAjAYAMQATAJAKASQAIANAEAXIglAZIgdgBQgRgCAIAcIgJABQgRAAgMgRg");
	this.shape_786.setTransform(193.4,17.5);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#7C3083").s().p("AA4A0QALgCADgBQAHgEgBgJQgBgDgDAAQgJgBgDAHIgEANQgMALgZgBQgcgBgJAEIhjg0QAPgYAFgNQAKgWgggPQABgFABgFIBWgBIACALQgZAYAbAZQAcAcgIARQAQABADgFQAKgRgKgVIgMglQgBgDgHgEIgLgIIACgLIAkABIApAsQAZAbAdgBQABAAACAFIADALIgOAxQgCAAgaAIIgGABQgMAAgEgVg");
	this.shape_787.setTransform(138.2,16.6);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#782F7E").s().p("AgMCJQgMgXgagMQgIgDgqgMQAJgUAAgEQAAgLgVgDIgNglQgCgQAPgMIAZgVIAUANIAfATQASAFAQgQQAPgSgDgPQgDgMgTgQQgFgEAHgGQAKgJAAgEQAZACATgOQAQgLAOgZIAygBIACALQgTAcgRBDQgSBBgUAeQgSAZgEAHQgKAVAFAUIAAAZg");
	this.shape_788.setTransform(291.8,24.4);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#7C3083").s().p("AhGCWQgBgJgRgUQgOgRAGgQQAWgQADgKQADgOgdgKQAGgUgNgZQgQgigCgIIABgyQAHgFgCgGQgBgGgHgBQgIgBgCAGIgBANIgXAAQgEgaAQgXIAyAAQAaAXAFAMQAIAVgZAXQgKAJAGAIQADAEAKAIQALAPAMgSQALgQAagfQASgdgCgdIBWgBIANALQAGALALAWQALAUALAJQAUARgBARQgCANgSASQgLAGgpAGQghAFgPASQgGgLgTgBQAIgNABgHQADgMgNgIQgLgHgHAQQgNAcAgADQgDAhgVASQgBgcgXgLQgCgXgYgBIgFgEIAFAEQABASALAHQgDAKANA2QAJAoggAVg");
	this.shape_789.setTransform(83.4,24.3);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#782F7E").s().p("AAiB8Qh4ALg9ADQgUgYgGAgIgYABQABgPgPgMQgVgRgDgDQAPgFAQgnQAOghAeACIA6AxQABgtgJgOQgNgRglAPIAAglQANgLAAgUQgCgWABgLQAGgHAVgJQAQgKgHgUIAQgOIBXAAQAeAUgGApIAZAyIAAAYQgNAIAOAFIALAAQACANgBAdQAFAWAggBQAAAQANAJQAHAFARAHIACAFIAEAAIgFgFQAAgRAMgFQAHgDATACQAIAbALgLIASgSQAlAKgFAXQgCANgSAcQhMgchpADgAgUAfQAAAFACACQADADAFgEIARgTIgOgEQgNABAAAQgAgFg+IAFAJIAHgHIgJgHIgDAFg");
	this.shape_790.setTransform(176.2,24.3);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#742E7B").s().p("ACtCJIABg6QABgiAMgXQAZggAFgSQALgegpgYQgCgLgEgHQgIgPgRAHQgWAKgFANQgGAQARAUQAHAHgCANQAAAGgEAPQgHA1grALQg3ADgaAFIhLhWQgug1gogYQgcgSgMAGQgMAHAAAhIADAjQgDAUgYAEQgDgQgTgRQgXgVgFgIIgHgfQgFgSAMgNIAYAAIAKAJIAFgJIC6ABQAUAXATgYIBvAAIgcBDIADgFQAbgDAHgTQAEgKgBgeIAlAAIAFAIIAKgIIBWAAQALA0AbAWQgBATgLAGIgGgDIAFADQABANgKAOIgQAWQgLAJgBAPIAAAaQgBAOAKANQAPAUABADQgNgBgOALQgTAOgFABQgRgYgUAYgAAUghQgFAEACAIQABADAOAGIAGgHQAEgEgBgCQAAgDgEgDQgDgDgDgBIgDAAQgFAAgDACgAAihqIgFAEQACAIACACQACAAAIgEIgCgGQgBgEgBgBIgBAAIgEABg");
	this.shape_791.setTransform(250.6,23.1);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#F5F5F5").s().p("AAQX3QARgVAGgdQAEgVAAgjMAAAgrQQAAhCgZgiQgYgihAgWQADgJgMgEIgCgKQAtgOA4ApQA4ApAFAyIABAlMAAAAr5QAAAwgHAPQgMAdgsAAg");
	this.shape_792.setTransform(312.4,162.1);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#F5F5F5").s().p("AW+XmMgsOAAAQhPAAgvguQgvguAAhPMAABgrcQgEgaAAgMQABgXAZgIIAEAxIAAKCQAAAVgDAsQABAlAYAXIAAAKQgeAfAIAhIAAAZQABAVgEArQgBAlAQAZQggBwAeBaIgBAXQgNAIABAPIADAbIAAGRQgJBMAVAyQgCAFAAAFQgMAEACAJIgCO0IABATQACAJAKAEQADBNAfAdQAfAeBNAAMArlAAAQAqAAAKgCQAdgFARgUIADADQABA/g/AAIgFgBg");
	this.shape_793.setTransform(160.6,170.4);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FEFEFE").s().p("A49ZrQgcAAgJgIQgIgJAAgcQABljAAzbQAAzagBljQAAgcAIgJQAJgIAcAAQY9ABY+gBQAcAAAJAIQAIAJAAAcQgCY9ACY+QAAAcgIAJQgJAIgcAAQ4+gC49ACgA3t35QghADgDAaQgCAPgBAgQgYAIgBAWQgBANAEAaMgABArcQABBOAuAuQAvAvBQAAMAsOAAAQBDACAAhBQArAAANgdQAGgPAAgwMAAAgr5IAAglQgFgyg5gpQg4gpgtAOIonAAQgTgbgTAcIsVgBQgTgagTAaIlqAAQgTgbgUAbItTAAQgNgWgNAWIhmABQgogEgTAAIgDAAQggAAgSAag");
	this.shape_794.setTransform(165.2,164.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355,this.shape_356,this.shape_357,this.shape_358,this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.shape_367,this.shape_368,this.shape_369,this.shape_370,this.shape_371,this.shape_372,this.shape_373,this.shape_374,this.shape_375,this.shape_376,this.shape_377,this.shape_378,this.shape_379,this.shape_380,this.shape_381,this.shape_382,this.shape_383,this.shape_384,this.shape_385,this.shape_386,this.shape_387,this.shape_388,this.shape_389,this.shape_390,this.shape_391,this.shape_392,this.shape_393,this.shape_394,this.shape_395,this.shape_396,this.shape_397,this.shape_398,this.shape_399,this.shape_400,this.shape_401,this.shape_402,this.shape_403,this.shape_404,this.shape_405,this.shape_406,this.shape_407,this.shape_408,this.shape_409,this.shape_410,this.shape_411,this.shape_412,this.shape_413,this.shape_414,this.shape_415,this.shape_416,this.shape_417,this.shape_418,this.shape_419,this.shape_420,this.shape_421,this.shape_422,this.shape_423,this.shape_424,this.shape_425,this.shape_426,this.shape_427,this.shape_428,this.shape_429,this.shape_430,this.shape_431,this.shape_432,this.shape_433,this.shape_434,this.shape_435,this.shape_436,this.shape_437,this.shape_438,this.shape_439,this.shape_440,this.shape_441,this.shape_442,this.shape_443,this.shape_444,this.shape_445,this.shape_446,this.shape_447,this.shape_448,this.shape_449,this.shape_450,this.shape_451,this.shape_452,this.shape_453,this.shape_454,this.shape_455,this.shape_456,this.shape_457,this.shape_458,this.shape_459,this.shape_460,this.shape_461,this.shape_462,this.shape_463,this.shape_464,this.shape_465,this.shape_466,this.shape_467,this.shape_468,this.shape_469,this.shape_470,this.shape_471,this.shape_472,this.shape_473,this.shape_474,this.shape_475,this.shape_476,this.shape_477,this.shape_478,this.shape_479,this.shape_480,this.shape_481,this.shape_482,this.shape_483,this.shape_484,this.shape_485,this.shape_486,this.shape_487,this.shape_488,this.shape_489,this.shape_490,this.shape_491,this.shape_492,this.shape_493,this.shape_494,this.shape_495,this.shape_496,this.shape_497,this.shape_498,this.shape_499,this.shape_500,this.shape_501,this.shape_502,this.shape_503,this.shape_504,this.shape_505,this.shape_506,this.shape_507,this.shape_508,this.shape_509,this.shape_510,this.shape_511,this.shape_512,this.shape_513,this.shape_514,this.shape_515,this.shape_516,this.shape_517,this.shape_518,this.shape_519,this.shape_520,this.shape_521,this.shape_522,this.shape_523,this.shape_524,this.shape_525,this.shape_526,this.shape_527,this.shape_528,this.shape_529,this.shape_530,this.shape_531,this.shape_532,this.shape_533,this.shape_534,this.shape_535,this.shape_536,this.shape_537,this.shape_538,this.shape_539,this.shape_540,this.shape_541,this.shape_542,this.shape_543,this.shape_544,this.shape_545,this.shape_546,this.shape_547,this.shape_548,this.shape_549,this.shape_550,this.shape_551,this.shape_552,this.shape_553,this.shape_554,this.shape_555,this.shape_556,this.shape_557,this.shape_558,this.shape_559,this.shape_560,this.shape_561,this.shape_562,this.shape_563,this.shape_564,this.shape_565,this.shape_566,this.shape_567,this.shape_568,this.shape_569,this.shape_570,this.shape_571,this.shape_572,this.shape_573,this.shape_574,this.shape_575,this.shape_576,this.shape_577,this.shape_578,this.shape_579,this.shape_580,this.shape_581,this.shape_582,this.shape_583,this.shape_584,this.shape_585,this.shape_586,this.shape_587,this.shape_588,this.shape_589,this.shape_590,this.shape_591,this.shape_592,this.shape_593,this.shape_594,this.shape_595,this.shape_596,this.shape_597,this.shape_598,this.shape_599,this.shape_600,this.shape_601,this.shape_602,this.shape_603,this.shape_604,this.shape_605,this.shape_606,this.shape_607,this.shape_608,this.shape_609,this.shape_610,this.shape_611,this.shape_612,this.shape_613,this.shape_614,this.shape_615,this.shape_616,this.shape_617,this.shape_618,this.shape_619,this.shape_620,this.shape_621,this.shape_622,this.shape_623,this.shape_624,this.shape_625,this.shape_626,this.shape_627,this.shape_628,this.shape_629,this.shape_630,this.shape_631,this.shape_632,this.shape_633,this.shape_634,this.shape_635,this.shape_636,this.shape_637,this.shape_638,this.shape_639,this.shape_640,this.shape_641,this.shape_642,this.shape_643,this.shape_644,this.shape_645,this.shape_646,this.shape_647,this.shape_648,this.shape_649,this.shape_650,this.shape_651,this.shape_652,this.shape_653,this.shape_654,this.shape_655,this.shape_656,this.shape_657,this.shape_658,this.shape_659,this.shape_660,this.shape_661,this.shape_662,this.shape_663,this.shape_664,this.shape_665,this.shape_666,this.shape_667,this.shape_668,this.shape_669,this.shape_670,this.shape_671,this.shape_672,this.shape_673,this.shape_674,this.shape_675,this.shape_676,this.shape_677,this.shape_678,this.shape_679,this.shape_680,this.shape_681,this.shape_682,this.shape_683,this.shape_684,this.shape_685,this.shape_686,this.shape_687,this.shape_688,this.shape_689,this.shape_690,this.shape_691,this.shape_692,this.shape_693,this.shape_694,this.shape_695,this.shape_696,this.shape_697,this.shape_698,this.shape_699,this.shape_700,this.shape_701,this.shape_702,this.shape_703,this.shape_704,this.shape_705,this.shape_706,this.shape_707,this.shape_708,this.shape_709,this.shape_710,this.shape_711,this.shape_712,this.shape_713,this.shape_714,this.shape_715,this.shape_716,this.shape_717,this.shape_718,this.shape_719,this.shape_720,this.shape_721,this.shape_722,this.shape_723,this.shape_724,this.shape_725,this.shape_726,this.shape_727,this.shape_728,this.shape_729,this.shape_730,this.shape_731,this.shape_732,this.shape_733,this.shape_734,this.shape_735,this.shape_736,this.shape_737,this.shape_738,this.shape_739,this.shape_740,this.shape_741,this.shape_742,this.shape_743,this.shape_744,this.shape_745,this.shape_746,this.shape_747,this.shape_748,this.shape_749,this.shape_750,this.shape_751,this.shape_752,this.shape_753,this.shape_754,this.shape_755,this.shape_756,this.shape_757,this.shape_758,this.shape_759,this.shape_760,this.shape_761,this.shape_762,this.shape_763,this.shape_764,this.shape_765,this.shape_766,this.shape_767,this.shape_768,this.shape_769,this.shape_770,this.shape_771,this.shape_772,this.shape_773,this.shape_774,this.shape_775,this.shape_776,this.shape_777,this.shape_778,this.shape_779,this.shape_780,this.shape_781,this.shape_782,this.shape_783,this.shape_784,this.shape_785,this.shape_786,this.shape_787,this.shape_788,this.shape_789,this.shape_790,this.shape_791,this.shape_792,this.shape_793,this.shape_794];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(22.8,16,273,273), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A1eVfMAAAgq9MAq9AAAMAAAAq9g");
	mask_1.setTransform(149.8,149.5);

	// Capa 3
	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#5087A9").s().p("AgDgFIAFgCIACAPg");
	this.shape_795.setTransform(154.3,35.5);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#477696").s().p("AgFgEIAAgBIALALIgBAAg");
	this.shape_796.setTransform(189.5,51.7);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#13212B").s().p("AgfgHQAHAAADgDIA0AAQgRAVgPAAQgPAAgPgSg");
	this.shape_797.setTransform(211.7,58.9);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#4E83A4").s().p("AgCADIACgGIADADIgCAEIgDgBg");
	this.shape_798.setTransform(197,104.8);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#4E83A4").s().p("AgBAAIABgBIACADg");
	this.shape_799.setTransform(142.2,62.7);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#43708E").s().p("AgCADQgFgDADgFIAKALQgGgBgCgCg");
	this.shape_800.setTransform(170.1,69);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#5087A9").s().p("AgIgGIAKACQAHACAAABQABAFgFABIgJABg");
	this.shape_801.setTransform(161.4,67.7);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#5087A9").s().p("AgFgDIALAAIgHAIg");
	this.shape_802.setTransform(173.5,64.2);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#43708E").s().p("AgIAQIgDgKIABgVIAWALIgDAUg");
	this.shape_803.setTransform(155.8,38);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#4A7D9D").s().p("AgCAMQgFgBgBgIIAAgOIASAAQgBAFAAAKQgBAIgIAAIgCAAg");
	this.shape_804.setTransform(155.8,40.8);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#43708E").s().p("AgbAAIgBgWQAoACARArg");
	this.shape_805.setTransform(166.7,43.1);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#43708E").s().p("AgCAXQgYgVgHgCQACgXAVgLIAJAAIAWAgQALASACASIgJABQgOAAgNgMg");
	this.shape_806.setTransform(160.4,37.5);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#4A7D9D").s().p("AgFgHIAJAFQAEACgDAIg");
	this.shape_807.setTransform(179.2,100.9);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#5590B4").s().p("AAGgEQgBAEABAEIgLABg");
	this.shape_808.setTransform(145,292.8);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#477696").s().p("AgGgJIALgBIACAVQgMgFgBgPg");
	this.shape_809.setTransform(180.5,70.4);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#43708E").s().p("AgJABQgCgEAEgDQADgCAFABIAKACIgOAOIgGgIg");
	this.shape_810.setTransform(183.6,64.3);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#5087A9").s().p("AgBAAIAEAAIgCACg");
	this.shape_811.setTransform(191.1,87.6);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#528BAE").s().p("AgVgBQACgMAKgDIAiAVIgxAMIADgSg");
	this.shape_812.setTransform(196.7,204.8);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#5087A9").s().p("AgQgQQAeAEADAcIgdABg");
	this.shape_813.setTransform(187.2,108.8);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#477696").s().p("AgLAXIAAgLIAWgiQABAWgOAXIgJAAg");
	this.shape_814.setTransform(160.4,31.7);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#4A7D9D").s().p("Ag9g9QAKgKAEgCQAIgDAJAKQAIAIAcAbQAXAVALAQIAWAAIAAALQgUALgCAYIgXgLIgDgRIgGADIAJAOIgBAWIghAMg");
	this.shape_815.setTransform(153,32.3);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#477696").s().p("AAAgFIABAHQAAABAAAAQAAAAAAABQgBAAAAABQAAABAAAAg");
	this.shape_816.setTransform(197.1,56.4);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#5087A9").s().p("AgLgPIALgBIAMAMIAAAVQgUgJgDgXg");
	this.shape_817.setTransform(195.8,56.2);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#477696").s().p("AgIgLQAMACADAEQAFAFgIAMg");
	this.shape_818.setTransform(191.9,50.1);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#477696").s().p("AgNgIQAFgCAPgBIANALQgMAMgXABQgIgRAKgEg");
	this.shape_819.setTransform(185.9,46.6);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#477696").s().p("AgTAGQgQgRACgWIABgBIAsAYIAAAAQACAXAVAIIgXAOQgWgSgJgLg");
	this.shape_820.setTransform(193.4,55.7);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#5087A9").s().p("AgKAhQADgLgJgWQgJgVAFgNIAWACQANACAIAIIgLA2QgEADgGAAg");
	this.shape_821.setTransform(208.3,54.6);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#13212B").s().p("AhGAaIgOgNIAHgOQAKgDAigEQAcgCAOgJIA3gJQAggDgSAYQgXgIgNANQgGAFgLAaQgvgNgwAKg");
	this.shape_822.setTransform(193.7,62.4);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#5087A9").s().p("AgbA+IgYgOIgLgXIAAguIAXgrQAXgBAMgMIAeAXIAlA4IgugWIgLgMIgDgCIACADIALALQgBAWAQASQAJAKAWASIABAMQgQAJgbACQghAEgLADg");
	this.shape_823.setTransform(188.4,54.4);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#528BAE").s().p("AAdBkQgigcgUgDIgNgMIABAAQgRgsgpgCQgCgRgLgSIgXggQAOgXAAgXIALgLQAUgNASADQARACASASQAQAQAaAUIArAiQAIAUAhAYQAgAYAHAVQgPACgGACQgJAEAIARIgXAsIgDAAQgYAAgfgZg");
	this.shape_824.setTransform(173.4,39.7);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#477696").s().p("AgFgDIAAAAIALgBIgCAJg");
	this.shape_825.setTransform(145,293.7);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#477696").s().p("AgQALQAEgWAdAAIAAAMIgMAKIAAABg");
	this.shape_826.setTransform(143.9,292.2);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#477696").s().p("AgbAAQAPgMAOAFQAKADAQANQgFgCgXACIgEABQgPAAgIgKg");
	this.shape_827.setTransform(19.3,224.8);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#528BAE").s().p("AgDAAIADgCIAEABIgBAFg");
	this.shape_828.setTransform(248.3,291);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#528BAE").s().p("AgEAEIgDgDQAAgKAKAEIADAEIABADQAAABgHAEIgEgDg");
	this.shape_829.setTransform(253.5,292.1);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#528BAE").s().p("AAAAKQgGgDgDgHQgBgEADgDQADgCAFAAIAFAFIAEAFQABAFgDACQgCACgDAAIgDAAg");
	this.shape_830.setTransform(244.3,292.7);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#528BAE").s().p("AgcAAQAGgMAOgBIAXAAIAOALQgPAQgOAAQgOAAgOgOg");
	this.shape_831.setTransform(261.4,287.8);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#4A7D9D").s().p("AgDAWQgIgCgHgIQgHgJABgJQAAgNAKgCIASgBQAMAAADACQAIADgCANQgCABgJAQQgGAKgIAAIgDgBg");
	this.shape_832.setTransform(249.4,282);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#528BAE").s().p("AgFAGIAAgLIAKALg");
	this.shape_833.setTransform(267.2,219.5);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#4A7D9D").s().p("AgGAPIgFgKQAFgSASgEQgBAGABAMQgBALgJAFIgCABQgDAAgDgDg");
	this.shape_834.setTransform(199.2,47.2);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#528BAE").s().p("AgWAOQgRgPAQggQAlAHANASQAMASgRAYQgigLgKgJg");
	this.shape_835.setTransform(193.6,39.7);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#528BAE").s().p("AAIBhQgIgIgMgCIgYgCIgBgLQAKgngGgYQgIgdgkgQQgMgGAEgKQAEgIAKgHQAHgFAJgUQALgOASATIgFAuIAyAAQAEAWASARQAJAJAaATQAUAdgPARQgEAEgjATg");
	this.shape_836.setTransform(209.9,42.6);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#081218").s().p("AgCACIABgEIADABQAAAAAAABQABAAAAAAQAAAAAAABQAAABAAABg");
	this.shape_837.setTransform(231.8,82.5);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#081218").s().p("AgGgFIAJAAQAIAIgKADQgBAAgGgLg");
	this.shape_838.setTransform(225,86);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#081218").s().p("AgCAAIACgDIADACIgDAFIgCgEg");
	this.shape_839.setTransform(216.5,98.9);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#13212B").s().p("AgEABIAHgFIACAEIgHAFg");
	this.shape_840.setTransform(224.6,100.5);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#13212B").s().p("AAFgLIAMALQgMAMgVAAg");
	this.shape_841.setTransform(218.1,95.7);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#60A2CA").s().p("AgQAIIABgSQAXgCAJAMIgXALg");
	this.shape_842.setTransform(220.3,59.2);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#081218").s().p("AgSAKIADgJQAGgBAKgHQAKgGAIAKQgMANgWAAIgDAAg");
	this.shape_843.setTransform(198.7,66);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#081218").s().p("AAAASIgKgMIAAgXIAVABIAAAig");
	this.shape_844.setTransform(219.8,93.9);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#13212B").s().p("AgNAAIAXgLIADAFQAAABABAAQAAABAAABQAAAAAAABQAAAAAAAAQgDAJgJACIgPADg");
	this.shape_845.setTransform(212.3,100.3);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#43708E").s().p("AgiAQQAMgZAGgGQANgNAWAIIAQAeIgaAJQgIgJgJAFQgLAIgGABg");
	this.shape_846.setTransform(199.7,63.7);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#43708E").s().p("AghAKQgOgFgEgOQAwgKAvANIAIAHIgDAJIg3AEIgbgEg");
	this.shape_847.setTransform(191.8,66);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#081218").s().p("AgSAMIgCgOIADgRIAEgQQAEgKAGgEQAGgFAJAEQANAGgGAHQgIAIgDAEQgGANgBAXQAAAegCAMg");
	this.shape_848.setTransform(229.9,83.3);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#081218").s().p("AgmgLQAPgMAVAEIAfAMQAPAGgIAEIgRAIQgRAKgMAAQgWAAgGggg");
	this.shape_849.setTransform(205.3,88.9);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#43708E").s().p("AgaALQgFgRAJgQQAJgQAPAEQARAEAKATIgBAXIgWAXQgZgDgHgVg");
	this.shape_850.setTransform(215.8,93.4);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#081218").s().p("AgkAdQADgHgDgPIgFgXQgCgbAnAAQgPASAKAOQAFAGATALQAOAJAGAHQAHAJAAANQgngSgnADg");
	this.shape_851.setTransform(188.2,73.1);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#528BAE").s().p("AgYAtIgKgXIgYgWQAqACAUgIQAegNAJglIAPAsIAAAMQgGAXgfAKQgkAMgIAMg");
	this.shape_852.setTransform(205.1,101.5);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#13212B").s().p("AgiAdQARgTgKgaQgHgVAMgBQAHgBAPABQAGAMACAAQAJgDgIgJQAEgXAVgCIACAPQgCAugIANQgJAOgzAmg");
	this.shape_853.setTransform(224.4,89.4);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#5590B4").s().p("AglgDIANACQAPASAOAAQAQAAARgVIg0AAIAMg3IAgAAQAEAUAUADQAAAOAEAIQAGAKANADIgBASQgJAJgTAEIgeAFIgMAHIhSASg");
	this.shape_854.setTransform(211,58.3);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#5087A9").s().p("AgIBhQgLgIgggkIgKgXQAYgYgHgqQgLg4AEgOIABgBQAWgKALAVQAMAaAIABQgHAXAKAXQAHANATAYQABACgCAFIgDAJIAXAXIALAWIABANIgMAWQgJACgIAAQgXAAgTgPgAACBDIAFAAIACgEIgEgDg");
	this.shape_855.setTransform(196.4,98.4);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#233C4A").s().p("AgUAvQgGgCAAgMQABgPgGgGQgFgHgOAAIABgkIAWgIQANgBAaACQAXABAPgJQgBAHACARQgCAMgTgCQghgFgEATQgBADAEAmQgJAEgFAAIgCAAg");
	this.shape_856.setTransform(173.4,74.3);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#5590B4").s().p("AhTAJQABgHAQgBQAegDArgIIBKgOQAIAUgLAHQgHAFgTACQgaAEgmAEIhCAHIgFgQg");
	this.shape_857.setTransform(145.5,72.7);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#528BAE").s().p("AAAgFIABAHQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAg");
	this.shape_858.setTransform(167.4,49.4);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#4E83A4").s().p("AgFAFIALgKIAAAKIgBABg");
	this.shape_859.setTransform(141.6,62);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#4A7D9D").s().p("AgFgEIAIABQAEADgBAFg");
	this.shape_860.setTransform(171.2,54);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#43708E").s().p("AgKAFIAVgLQAAAKgHADIgEAAQgDAAgHgCg");
	this.shape_861.setTransform(170.6,59.9);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#46758F").s().p("AgKAAIAHgQQAOAEABAKQAAAGgHAMIgLABQgGgIACgJg");
	this.shape_862.setTransform(135.8,42.5);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#528BAE").s().p("AgRgLQAGACANgCQAMAAAEALQABABgOALg");
	this.shape_863.setTransform(120.9,57);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#233C4A").s().p("AgfgFQALgKARgCIAeABIABAAIAEANIgyAVg");
	this.shape_864.setTransform(157.7,68.7);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#528BAE").s().p("AgngBQAKAAANgRQAMgOAJADQAbAJAGAOQAIAQgZAVQgogIgUgYg");
	this.shape_865.setTransform(133.2,65.2);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#528BAE").s().p("AgOAqQAAgFgPgXQgKgPAMgPIALABIADACIgCgEIAAgLQAJgaASAMQAXAOgBAVIgFA2g");
	this.shape_866.setTransform(143.7,64.3);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#477696").s().p("AAAAiQgagCgNABIAAgHIgKgNIgCgtIANgBIAXABIADAJIAIgJQAfAVAZAjIgOABQgPAJgWAAIgBAAg");
	this.shape_867.setTransform(174.6,67);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#5590B4").s().p("AhJAbIAzgWIAKgBQAFgBgBgFQAAgBgHgCIgLgCIgBAAQAQgXAJAFQARAMASgIQAKgFATgOIABAtQgCAHAEACQADACAGACIgBAHIgWAHIg+AJIgPAAQgcAAgTgOg");
	this.shape_868.setTransform(163.2,67.8);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#5590B4").s().p("AgWA9QAHgMAAgHQgBgKgPgEIgDhaQAfAOAPAQQAVAUACAdQgLACgNAbQgIARgOAAQgFAAgGgCg");
	this.shape_869.setTransform(138.6,38);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#43708E").s().p("AhBBBQAngagBglIgOhCQAZgEAbAHQASAFAfAPQAKATgIAIQgHAHgTgDQgagEgIAGQgKAIAGAaQAFAdgRAIQgIAEgRAAIgagCg");
	this.shape_870.setTransform(160,58.9);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#4A7D9D").s().p("AA6AwQgMgJgZgWQgegagDArQgiAAAAgiQABAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIgDgIQgSgdgQAfQgZgNAGgRQABgEATgZIA4AXIAAAAIANAMQASADAkAcQAgAZAagBIAAAvQgWgGgWgPg");
	this.shape_871.setTransform(171.9,50);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#528BAE").s().p("AgjAlIgigBIgMggQALACAEgBQAHgCAAgKIABgvQABgHgEgCIgJgCQADgsAfAbQAZAWAMAJQAWAPAVAFIALAXIAYANIADAQIgHAQIgFgBIgKgCQgHgBgCACQgEAEABAEIAHAIQABANgHALQgFAHgLALIgMABQgYglgggUg");
	this.shape_872.setTransform(177.7,60);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#528BAE").s().p("ABHBCQgcgHgZAEQgLgngLgKQgTgOgnAUQgXAMgTgcQgTgbAFgoIAQAAQAKgBAAACQAPAsASgNQALgIAVgYIAhgLIADAKIgBAPQABAIAGABQALABABgJQgBgLABgFIADgVQAHADAYAUQASAQATgFIABAWQgTAZgBAEQgGAQAZANIAWA5QgfgPgSgFg");
	this.shape_873.setTransform(154,46.1);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#233C4A").s().p("AgGgHIANACIgNANg");
	this.shape_874.setTransform(89.1,105.2);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#60A2CA").s().p("AgMACQADgVAAgKQAPgHAFAJIADAUQgIAFgDAJIgDARIgJAJQgFgMACgTg");
	this.shape_875.setTransform(188.7,207.2);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#13212B").s().p("AgFgCIAKgIQABAJgBADQgCAHgHACg");
	this.shape_876.setTransform(175.8,186);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#5087A9").s().p("AgFgFIALACQABAFgFAEg");
	this.shape_877.setTransform(35.4,213.8);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#477696").s().p("AgFAKQgIgCAEgLQAFgPAQAPIgCAOIgPgBg");
	this.shape_878.setTransform(23.5,221.8);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#5590B4").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_879.setTransform(157.5,291.6);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#4E83A4").s().p("AgWgLIALABIAiAKIAAAMIgDAAQgdAAgNgXg");
	this.shape_880.setTransform(154.7,291);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#5087A9").s().p("AgFgCIAEgDIAHALg");
	this.shape_881.setTransform(41,204.7);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#5087A9").s().p("AgngHQALADAcgPQAWgNASAOIg3AsQgVgLgDgWg");
	this.shape_882.setTransform(45.6,206.2);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#081218").s().p("AgHAJIABgLQABgGAFAAQAFABACAFQACAGgEAFg");
	this.shape_883.setTransform(235.4,75.4);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#081218").s().p("AgVAOQACgagDgKQAoAGAEAEQAFAFgNASQgRAMgJAAQgIAAgBgJg");
	this.shape_884.setTransform(230.1,73);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#36596E").s().p("AgQADIAPgMIAEABIAOAAIgBANIgQAFIgBAAQgIAAgHgHgAgQADIAAAAIAAABgAgQADg");
	this.shape_885.setTransform(90.1,105.6);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#040C11").s().p("AgNgEIAWgBIAFACIgPAIg");
	this.shape_886.setTransform(97.9,121.4);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#13212B").s().p("AAIgQIABAAIALALQgJASgZAEQgRggAngBg");
	this.shape_887.setTransform(95.6,122.5);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#040C11").s().p("AgDAPQgMgJADgHQACgFALgIIAMAIIAAAVg");
	this.shape_888.setTransform(125.9,157.1);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#3D6680").s().p("AgEAAQgDgHANgFIgBAZQgIgLgBgCg");
	this.shape_889.setTransform(173.5,189.5);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#3D6680").s().p("AgJACQABgPgDgDQAagDgEAOIgIAWQgMgCAAgNg");
	this.shape_890.setTransform(175,196.8);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#040C11").s().p("AgSAmQABgFgKgjQgGgZAYgMQACADAAAQQgBAMAMADQAgACgIAQQgOAaABABg");
	this.shape_891.setTransform(174.9,199.1);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#081218").s().p("AgCgHIAGAHIgHAHg");
	this.shape_892.setTransform(232,88.9);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#528BAE").s().p("AgGAKQgKgEgBgOQATgLAQAWQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAABQgCADgCABIgJAAQgGAAgEgCg");
	this.shape_893.setTransform(6.5,273.5);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#5087A9").s().p("AgFgQQAMAMgBAVg");
	this.shape_894.setTransform(182.7,110.6);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#5087A9").s().p("AgGgHQANADAAABQACAGgFADIgKACg");
	this.shape_895.setTransform(177,110.7);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#5590B4").s().p("AAAAQQgQgIgHgGQgMgIAHgPQAFgNAQAAIAbADIABAeIALAOIgMAWIgUgTg");
	this.shape_896.setTransform(176.5,100.3);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#5087A9").s().p("AgSANIALgVQADgIgEgDIgKgEIAAgeIALgEIAaAOIgDBlQgigOAAgfg");
	this.shape_897.setTransform(180.5,102.5);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#46758F").s().p("AgFAIQgNgIgEgQIAiAAIALAhQgTgEgJgFg");
	this.shape_898.setTransform(230.1,170.5);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#5590B4").s().p("AgDAAIADgDIADACQABAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABQgBAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAQgCAAAAgEg");
	this.shape_899.setTransform(139.6,280.6);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#477696").s().p("AAAAMIgWgLIABgMIAaAEQAOAFAEAPg");
	this.shape_900.setTransform(151.2,288.6);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#477696").s().p("AgcALQALgVAPAAQAMgBATAMIgBALg");
	this.shape_901.setTransform(142.8,287.6);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#5087A9").s().p("AgcAgIACgKQgBgFABgFIABgtIAgALIAWALQgHAPgRAMQgKAIgWAKg");
	this.shape_902.setTransform(148.3,291);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#233C4A").s().p("AgDAAIAGgDQACADgCAEg");
	this.shape_903.setTransform(104.5,205.9);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#5590B4").s().p("AgJAAQAGgKABgFQALAOACADQACAKgSAFQgHgIADgJg");
	this.shape_904.setTransform(101.3,201.8);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#60A2CA").s().p("AgRgBQACgMAJgFIAYAOIgBAMIgiALIAAgUg");
	this.shape_905.setTransform(101.6,218.3);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#5087A9").s().p("AgEAGIgBgKIABgBIAKALg");
	this.shape_906.setTransform(226.1,272.2);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#5087A9").s().p("AgGgFIABgBIAMAHIgFAGg");
	this.shape_907.setTransform(225,266.5);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#5087A9").s().p("AgGgBIAGgFIAHAMIgBABg");
	this.shape_908.setTransform(224.8,270.9);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#60A2CA").s().p("AADgKQAOARgYAEg");
	this.shape_909.setTransform(214.9,272.7);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#5087A9").s().p("AgKALQgFgDACgIIAGgMIAWAKQgEACgIAJQgDAEgEAAQgDAAgDgCg");
	this.shape_910.setTransform(229.8,261.4);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#528BAE").s().p("AgFgCIALgBIgGAIg");
	this.shape_911.setTransform(245.5,231);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#4E83A4").s().p("AgQgBIACgOQADgHAHgBQAFAAADAFIADALIAKAfQgcgBgFgYg");
	this.shape_912.setTransform(256.8,230.4);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#5590B4").s().p("AgDgCIAEgBIADADIgEAEg");
	this.shape_913.setTransform(71.4,207.6);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#5590B4").s().p("AgFAOIgRgdIAXADQAOADAJAHQgOASgKAAQgCAAgDgCg");
	this.shape_914.setTransform(71.4,221.6);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#5590B4").s().p("AgVAhQABgjgWgTIAKgZIAgAAQAiABAHALQAJANgYAaQgNAOgCAcg");
	this.shape_915.setTransform(67.8,214.6);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#4A7D9D").s().p("AAUAiQgHgNgOAFQgEgFgVgHQgRgGgDgNIAcgCQAQgBAAgUIABgOQASgSAGAOQAEAHAEARQAQARAAATQAAAUgOATQgEgBgJgSg");
	this.shape_916.setTransform(92,109);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#5087A9").s().p("AABARQgJgEgBgLQABgMgBgGQALAEAEAGQAHAGgEAMQgBACgDACIgDABIgBAAg");
	this.shape_917.setTransform(84.8,128.2);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#477696").s().p("AgXAJQgIgJANgPQAIgIAMABQANACAHAJQAKAOgMAHQgTALgBACQgSgIgFgGg");
	this.shape_918.setTransform(83.8,124.1);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#5087A9").s().p("AggAPIAagaQAMgMAQAFQAIADACAHQACAHgEAGQgIAQgRAAIglgGg");
	this.shape_919.setTransform(83.7,136.6);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#4A7D9D").s().p("AgTARIADgLIAMgXQAEABAEgCIALANQAHAGgDAHQgFAKgNABQgNgCgHAAg");
	this.shape_920.setTransform(121,105.3);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#43708E").s().p("AgYgKIAcgDQARgDAEAOQADAKgLADIgUADIAAAAg");
	this.shape_921.setTransform(107.1,154.8);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#43708E").s().p("AgDAAIAGgEIABAIIgDABQgCAAgCgFg");
	this.shape_922.setTransform(101.5,198.6);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#233C4A").s().p("AgCAiIghgIQABgRAKgRIAPgbIAtAiIgBAAQgCAFgFAKQgEAKAHAHQgKAFgLAAIgMgCg");
	this.shape_923.setTransform(97.5,200.3);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#13212B").s().p("AgHAHQAHgNgKgKQALgLAEAHQADAEADAMIgJAbg");
	this.shape_924.setTransform(191.5,211.6);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#3D6680").s().p("AgFAKQgIgEgCgJIAJgJIAQACQAKAKgHANQgMAAgGgDgAgPgEIAAABIAAAAgAgPgDIAAAAg");
	this.shape_925.setTransform(189.3,211);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#477696").s().p("AgUAMQgFgGgMALIgRgDIAEgQQADgKAIgEQAJgLAMACQAGACANAHIAygMQANAqgcAHQglACgOAGQgDgMgCgFg");
	this.shape_926.setTransform(194.1,208.2);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#4A7D9D").s().p("AgFgEIAAgBIAKAAIABAKg");
	this.shape_927.setTransform(267.2,220.7);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#43708E").s().p("AgRABIAIgSQAFgKAJAEQAKAFABARQAAAWABAEg");
	this.shape_928.setTransform(251.2,199.4);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#5087A9").s().p("AgSAVQgGgWgCgLQgEgTAOgNQANACALALIAUAVQgRADAAAZQgBAZgQADg");
	this.shape_929.setTransform(264.9,232.8);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#5087A9").s().p("AgFAGIALgLIgDAIQgCADgCAAIgEAAg");
	this.shape_930.setTransform(174.7,84.9);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#5087A9").s().p("AgQgKQAWgBAMALIgXAMg");
	this.shape_931.setTransform(180.3,93.4);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#5087A9").s().p("AgRADQABgYAKgBQAIgBAQAQIgPAfQgQgCgEgTg");
	this.shape_932.setTransform(185,93.2);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#4A7D9D").s().p("AgEAaQgCgagLgDIgcgOIABgVIAXgMIALABQAEATAQACIAkA5QgJACgJAGIgOAOQgRgDgBgWg");
	this.shape_933.setTransform(184.3,98.5);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#4A7D9D").s().p("Ag5goQgCgYAZABQAOgBAGAHQAFAHgBAOQAAANAHABQAEABAKgFQALARAJAEQAMAFAPgOIgXAtIgLALQgKABgJAIIgPAOQgIhEgnglg");
	this.shape_934.setTransform(171.7,81.2);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#477696").s().p("AgtgDQAPgGgHgMQgJgPADgEQAngEAmATQAZAagcAdIhKAMg");
	this.shape_935.setTransform(188.9,80.1);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#5087A9").s().p("AhFBUQgJgEgKgRQgEgmAAgDQAFgTAiAEQATADACgMQgCgRABgHIAOgBQABAQANAFQAEgEgEgEIgCgOQALgLAEgHQAHgLgBgNIAPgPIAGABIANANQAFAPANAFIAbAEIgiAMQgnABACAbIAFAXQADAOgDAIQgCAEAIAPQAHAMgPAGQgEABgdgRQgUgLgOAbQgLALgJAAIgHgCg");
	this.shape_936.setTransform(181.8,72.2);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#43708E").s().p("AAVBbIAEgJQABgFgBgCQgSgZgHgNQgLgXAJgWQgKgBgMgZQgKgWgXAKIgFgBIAEADQgEAOALA2QAIArgZAZIgNAAIgkg7IAPggQApgzhAgdIBLgMQAcAdANAIQAYAPAcgGQAJAyAxgbQAhAWgLAjQgJAlgeANQgQAHgeAAIgRgBg");
	this.shape_937.setTransform(197.1,92.3);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#477696").s().p("AgPgKQANAAAEABQAJABAGAIIgXALg");
	this.shape_938.setTransform(154.1,246.5);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#4A7D9D").s().p("AgFAIQgNgIgDgQIAhAMIAKAVQgTgDgIgGg");
	this.shape_939.setTransform(151.2,246);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#13212B").s().p("AgEAAIAHgFIACALg");
	this.shape_940.setTransform(224.8,105.4);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#4A7D9D").s().p("AgFgLIAGAFQAFACAAACQACAGgFADIgJAFg");
	this.shape_941.setTransform(209.2,122);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#4A7D9D").s().p("AgKAFQgBgPAIAAQACAAANAHQgEAOgIAAQgEAAgGgGg");
	this.shape_942.setTransform(211.7,109.9);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#13212B").s().p("AgOAWQgIgCACgIQAIgdAhgFIgMArQgEACgFAAIgOgBg");
	this.shape_943.setTransform(214.3,104.9);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#081218").s().p("AAAAfQgegSgDAAIAMgrQAagMAJAYQALAeAJACQgKAVgNAAQgFAAgGgEg");
	this.shape_944.setTransform(218.6,105.6);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#040C11").s().p("AgKAEIAAgKIAVABQAAAKgHACIgCAAQgEAAgIgDg");
	this.shape_945.setTransform(21,201.5);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#528BAE").s().p("AhPAjQAVg4AlgYQAMAJAOADIAfADQARABAJAGQAIAHAAAQIgLABQgQgNgFANQgEAMAHADIAQABQAVANACANIguACQgRgOgJgDQgPgFgPANQgGgCgXAJQgFADgFAAQgLAAgHgLg");
	this.shape_946.setTransform(18.8,221.2);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#5087A9").s().p("AgCgCIAEAAIABADIgDADg");
	this.shape_947.setTransform(31.2,240.6);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#5087A9").s().p("AgIAHIAMgPIAFAFIgQAMg");
	this.shape_948.setTransform(33.9,241.6);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#5087A9").s().p("AgHADIgDgKIAVAFIgFAGQgDAEgCABQgGgBgCgFg");
	this.shape_949.setTransform(8.5,239.1);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#5087A9").s().p("AgHABQgCgDgCgTIAXACIAAApQgPgIgEgNg");
	this.shape_950.setTransform(22.2,240.8);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#5087A9").s().p("AgSAIIgEgUQAKgKAMAFIAXAIQgDAMgEAHQgGAJgLAAQgNAAgEgLg");
	this.shape_951.setTransform(17.6,239.5);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#081218").s().p("AgEgBIADgJIAHAKIgGALg");
	this.shape_952.setTransform(92.5,157.9);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#081218").s().p("AgIBaQgSgTAagnQAGgLgKgZQgKgYgTgQIgXgYIACgLQAFgHAYgGQATgEADgQQADACAKAhQAHAWAYgBQANARADARQADASgKANQgSAWABAeQABASAGAiQgsgUgEgDg");
	this.shape_953.setTransform(99.1,145.9);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#4A7D9D").s().p("AgCgCQADACACADIgBAAQgEAAAAgFg");
	this.shape_954.setTransform(34.4,227.4);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#13212B").s().p("AgGAJIAFgVQAMAJgHAMQgBAEgDAAQgBAAgFgEg");
	this.shape_955.setTransform(38.7,221.6);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#040C11").s().p("AgFATIgCgfIAHgTIAIATIgEAsg");
	this.shape_956.setTransform(38.7,211.2);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#13212B").s().p("AgRAIQACgPgCgIQAEgEgBgGIAUgDIALAOQAEALgPAKQgNALADALQgMgGgBgPg");
	this.shape_957.setTransform(37.4,216);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#233C4A").s().p("AgEAhQAEgLgMgVQgLgTAHgNQARgFAJAJQAIAIgBAQIACAZQgCAMgPAAIgGgBg");
	this.shape_958.setTransform(37.5,231.6);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#43708E").s().p("AgcAAIAugiQAAAMABAHQADAJAHAGIgKAYIgNALg");
	this.shape_959.setTransform(61.6,210);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#43708E").s().p("AgoATIADgLIA3gsIAWAMIABAhQgfAYgHADQgFABgFAAQgRAAgQgSg");
	this.shape_960.setTransform(47.8,208);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#13212B").s().p("AAEgEQACAJgJAAg");
	this.shape_961.setTransform(102.5,164.7);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#040C11").s().p("AgKAIQgCgFAEgTIAUAhIgGAAQgNAAgDgJg");
	this.shape_962.setTransform(105.5,175);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#040C11").s().p("AgJAbIgCggQgBgTAYgCIgDAqIgJAKIgEACg");
	this.shape_963.setTransform(102.1,162.6);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#528BAE").s().p("AgoAgQgLgEABgSQACgSABgFQAFgNANAHQAKAFAkgOQAbgLAGAdQAEAWgVAMQgVALgYgGQgNADgIAAIgHAAg");
	this.shape_964.setTransform(84.6,176.6);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#5087A9").s().p("AgGABIANgHIgHANg");
	this.shape_965.setTransform(122,283.7);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#4A7D9D").s().p("AgLgFIAXgLIgCAhQgSgEgDgSg");
	this.shape_966.setTransform(131.9,293.9);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#5087A9").s().p("AgCASQgEAAgFgFQgHgEAAgEQAAgPANgEQAGgDARgBQgBAIAAAQQgCANgPAAIgCgBg");
	this.shape_967.setTransform(120.9,270);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#4A7D9D").s().p("AATAeQglgKgQgiQgGgMAYgDQAQgBANAQQAIAJANASQAFAEgGAHQgFAGgGAAIgDAAg");
	this.shape_968.setTransform(106.7,291.9);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#5590B4").s().p("AgGAGIAHgMIAGAGIgMAHg");
	this.shape_969.setTransform(112,283.5);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#46758F").s().p("AgIgEQABgEAEgBIAMALQABAFgEAEg");
	this.shape_970.setTransform(209.1,172.6);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#4A7D9D").s().p("AgJAFQAEgMAJADIAGAKg");
	this.shape_971.setTransform(183,199.1);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#36596E").s().p("AgKAAQABgIAHgEIAOAPQABAFgEAEIgUABIABgNg");
	this.shape_972.setTransform(208.5,173.3);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#13212B").s().p("AgEgCIAEgCIAFAGIgFADg");
	this.shape_973.setTransform(201.5,187.2);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#60A2CA").s().p("AgGARIgBgaIAIgSIAHAUIgCAjg");
	this.shape_974.setTransform(187.3,201.5);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#4A7D9D").s().p("AgGAeQgGgIgCgOQAAgPgCgHIAPgCIASgNIABAbQgKADgBALIgBASg");
	this.shape_975.setTransform(184.8,203.5);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#5590B4").s().p("AgYgBQgCgPAPgHIAeADIAGAUIgQABQgLgCgGAJQgKAPgCABIgEgZg");
	this.shape_976.setTransform(182.1,201.9);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#36596E").s().p("AACALQgUgOgEgKIAAgaIALAAIAeALIAEBEQgBgQgUgNg");
	this.shape_977.setTransform(176.4,192.2);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#3D6680").s().p("AgRAsQAIgWgZgDIABgNQAAgGADgCQAFgDASgaQAMgSARAHQASAIgHATQgJAbABAFQABAFgBAJIAAAOg");
	this.shape_978.setTransform(206.9,195.1);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#60A2CA").s().p("AAAA4QgIgBgGgGQgGgHACgKQABgEgGgoQgEgcAUgPIAUAAQAPAtgEApQgCAZgUAAIgCAAg");
	this.shape_979.setTransform(208.2,180.2);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#233C4A").s().p("AgDAnQgMgDgJALIgDgVQgFgIgPAGIACgiQALAAAHgDQAJgEAEgKQAHgSAEgBQAEgBAMATQAJAQAGgNQAIgSAFgBIAGARQAFALgFAIQgDAEgCAIQgDAIgIABQgKADgCAMIgDATQgOgHgFgBgAgwAYIABAAIAAABg");
	this.shape_980.setTransform(192.6,201.8);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#528BAE").s().p("AgfAeIgHgRQABgDgIgYQgEgRAMgLQAJgIAPADQAIABAOAGQAOAEgBATQgCAVAIAGQAaAEgJAWQgmgCgnAPQAFgIgEgLg");
	this.shape_981.setTransform(200.6,196);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#43708E").s().p("AgkASIgjgVQAIgBADgIQACgKADgEQAogPAlACIArABQAHAbAAANQgBAWgPAQQgggSg8gEg");
	this.shape_982.setTransform(202.9,203.5);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#528BAE").s().p("AgDAAIADgCIAEACQAAAAAAAAQAAAAAAAAQAAABAAABQgBAAAAABg");
	this.shape_983.setTransform(177.4,290.9);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#4E83A4").s().p("AAAgEQAEgBATAAIAAAJIguACQAJgIAOgCg");
	this.shape_984.setTransform(162.7,291.6);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#5087A9").s().p("AgFAGIgBgCQAAgFAFgCIAIgDIgDAIQgCAFgFAAIgCgBg");
	this.shape_985.setTransform(187.1,268.9);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#477696").s().p("AALgMQgDARgSAIQABgVAUgEg");
	this.shape_986.setTransform(182.1,266);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#5087A9").s().p("AgBAMQgJgCADgIQAFgJAAgEIALACIgCAOQgCAHgFAAIgBAAg");
	this.shape_987.setTransform(212,259.2);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#528BAE").s().p("AgJAKIADgPQACgIAJADQAMAEgPASg");
	this.shape_988.setTransform(173.9,293.2);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#528BAE").s().p("AgHgCQAEgHAHgDQAFgBACADQADACgBAFQgDAIgHAEIgPAEQACgLADgEg");
	this.shape_989.setTransform(166.3,287.4);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#5087A9").s().p("AAAAMQgDgBgDgDQgDgDAAgDQgBgCADgDIAFgIIAHAGQAEADABACQACAGgDADQgDADgEAAIgCAAg");
	this.shape_990.setTransform(196.2,271);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#43708E").s().p("AAAAPIgngGIAAgVIBPgCIAAAYQgNAFgRAAIgKAAg");
	this.shape_991.setTransform(161,293.5);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#528BAE").s().p("AgJAIQgPgNACgWIAtACIAAA1QgXgKgJgKg");
	this.shape_992.setTransform(227.8,293.9);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#477696").s().p("AgtACQAmgSA1gEIgnAlQgHAEgJAAQgRAAgTgTg");
	this.shape_993.setTransform(195.8,292);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#477696").s().p("AgeAXIAAgLQgHgNABgHQACgKAPgEIA4AMIAAAWQgTAAgFABQgNACgIAIg");
	this.shape_994.setTransform(161.2,289.8);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#5087A9").s().p("AgHAWQgUgCgNgaQAOgCAZgMQAVgGAQASQAMALgSAJQgVAKgMAAIgEAAg");
	this.shape_995.setTransform(195.9,262.7);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#528BAE").s().p("Ag0AaQgXgGgSACQgYAEAAgWQAEgcgDgKIDjABQAYAwg5gDQg3AFglASQgIAAgegJg");
	this.shape_996.setTransform(192.7,288.6);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#477696").s().p("AAAgFIABAHQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAg");
	this.shape_997.setTransform(174.2,128.2);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#477696").s().p("AgEgEIAJAIIgEABQgFAAAAgJg");
	this.shape_998.setTransform(174.8,123.8);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#5590B4").s().p("AgDgOIAOAKIgLALIgKAIg");
	this.shape_999.setTransform(176.4,184.1);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#4E83A4").s().p("AgDAAIAGgDIABAEIgEADg");
	this.shape_1000.setTransform(192.4,159.7);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#4E83A4").s().p("AgGAAIANgLIAAAXg");
	this.shape_1001.setTransform(187.1,151.7);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#13212B").s().p("AgHAGQgDgEgCgLIATAAQAMAOgLAEIgHABQgEAAgEgEg");
	this.shape_1002.setTransform(201.7,182.2);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#46758F").s().p("AgJAMIABgNQACgHAGgDQAEgCADACQADADAAAFQgBAHgFAEQgEACgIADg");
	this.shape_1003.setTransform(189.9,128.7);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#4A7D9D").s().p("AgCAFQgMgFgEgMIAlACIgBAXQgOgEgGgEg");
	this.shape_1004.setTransform(187,183.6);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#13212B").s().p("AgXAGQAHgEAPgMQAMgIANAOQgDAAgTANQgFAFgFAAQgIAAgHgIg");
	this.shape_1005.setTransform(198.1,181.8);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#4A7D9D").s().p("AAFALQgMgEgFgHQgDgFAEgCQADgDAIAAIAHAFQAFAEACACQACAFgDADQgDACgCAAIgDAAg");
	this.shape_1006.setTransform(180.9,180.8);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#477696").s().p("AgJAFQgDgIACgTIAUALIACAiQgQgFgFgNg");
	this.shape_1007.setTransform(171.9,124.3);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#4A7D9D").s().p("AgWAAIAEgXIAcAAIANAMQgDAAgPAdQgDAGgDAAQgJAAgMgYg");
	this.shape_1008.setTransform(187.8,112.9);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#3D6680").s().p("AgcARIADgKQAHgDACgFQABgFgCgJIANgMIAfAWQAFANgLAIIgSAMg");
	this.shape_1009.setTransform(178,186.4);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#477696").s().p("AgUAbIABgpQAGgPAMABIAWAFIgHA0g");
	this.shape_1010.setTransform(190.9,184.1);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#43708E").s().p("AgKATQgMgJABgRQABgKAHgGQAHgGAHADQAPAFgBAUQgBAWAIAHQgWgCgKgHg");
	this.shape_1011.setTransform(182.4,169.7);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#13212B").s().p("AgcAVIAGg0QAHgFAIAEIALAHQgBAMAKAQQAOAYACAIIgJAAQgZAAgXgOg");
	this.shape_1012.setTransform(195.3,184.9);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#4E83A4").s().p("AgJAZQgTgCgFglQAbgMANACQAUADAHAdQgaARgOAAIgDAAg");
	this.shape_1013.setTransform(191.2,154.3);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#233C4A").s().p("AgFBCIgBACQACgWgOgLQACgDgCgEIAEhkQALAEACAZQABAXARADIgJARQgGAJANAIIAEAiIgEAWg");
	this.shape_1014.setTransform(184,105.4);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#46758F").s().p("AgLAoQgFgIgCgRIgIgeQgDgSANgJQAPgKAKANIASAVIAAABIgLAVQAKAOAAAKQAAAMgQAFQgFACgEAAQgHAAgFgHg");
	this.shape_1015.setTransform(186.2,131.8);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#4E83A4").s().p("AgEACIAJgHIgBAKg");
	this.shape_1016.setTransform(197.7,161.4);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#43708E").s().p("AgJgJIAUANQgKAGgEAAQgJAAADgTg");
	this.shape_1017.setTransform(213,174.4);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#4E83A4").s().p("AgKAAIAVgMIAAAXQgGACgEAAQgKAAgBgNg");
	this.shape_1018.setTransform(199.2,157.5);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#4E83A4").s().p("AgNARIABgkQANgGAIAGQAHAGgCANQgCAXgMAAQgFAAgIgGg");
	this.shape_1019.setTransform(202.9,154.4);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#3D6680").s().p("AgCAaQgGgTgCgJQgCgSALgQQAKAPABAVIABAlg");
	this.shape_1020.setTransform(198.2,148.1);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#4A7D9D").s().p("AgHgnQAOAbABATQABAWgNALg");
	this.shape_1021.setTransform(219.6,160.2);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#3D6680").s().p("AgQASQgDgbAbgJQABgBAEAFQAEAFAAACQgDAagVAAIgJgBg");
	this.shape_1022.setTransform(202.9,140.9);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#5087A9").s().p("AgMAkIgGgZQgEgNAAgKQABgZALACQAEABARAOQAOAXgDAhg");
	this.shape_1023.setTransform(229,165.2);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#477696").s().p("AgXADQABgXgHgLQAZgOANAQQAIAJALAYQAGAZgTAEQgXAAgIAFQgJgLACgYg");
	this.shape_1024.setTransform(222.7,182.3);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#5590B4").s().p("AAAASQgHgdgUgDQgNgCgcAMIAAgXIAMgNQAgAOA5ABIAOALIAWAHIgBAjIgMABIgWAMg");
	this.shape_1025.setTransform(194.7,153.3);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#233C4A").s().p("AgFBUQgLgIAJgQQAMgXgCgOQgBgSgWgQQgEgDANgfIAVg2QAHADABAIIABANIADBOIgGBhIgVgQg");
	this.shape_1026.setTransform(216.9,163.8);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#4A7D9D").s().p("AAfArQgNgggcgYQgQgPgqgbQACgKAKgCQAGgCAMgDQAgAlAKAIQAbATAhgGIAFAgIgHAfQgEASgPAFg");
	this.shape_1027.setTransform(195.1,111);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#528BAE").s().p("AgMA5QgggKAMghQACgDgDglQgBgZAYgIQgBApAigRQAHAKgBAZQgCAXAJALQgGASgLAFQgGADgHAAQgIAAgKgDg");
	this.shape_1028.setTransform(217.4,182.8);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#4E83A4").s().p("AAuBLQgWgDgDABQAAgUgHgKQgIgNgRgDIgNgMQgDgcgfgFQgNgHAGgLIAJgRIAOgNQAJgHAJgBIANAAIAKAWQgMACgGACQgKADgCAKQApAbARANQAdAaAMAgQgGAMgMAAIgEAAg");
	this.shape_1029.setTransform(191.4,109);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#081218").s().p("AgfBeQgJgNgBgNIAAgwQAAgbgFgTQAPgGAEgSIAHgeQAOADAUgLQAXgNAKAAIgCCRQgHAOgUAPQgYATgGAHQgEADgDAAQgGAAgGgIg");
	this.shape_1030.setTransform(204.1,120.9);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#5590B4").s().p("AgJAHQgDgHAGgGQADgDAKgDIAEATIgLAGIgBAAQgFAAgDgGg");
	this.shape_1031.setTransform(83.1,269.5);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#5590B4").s().p("AABAKQgHgCgDgIQgCgJANAAIAEAFIAEAFQABAFgCACQgCACgDAAIgDAAg");
	this.shape_1032.setTransform(10.1,284.7);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#5590B4").s().p("AgOgIIAfgDQADATgNADQgQgBgHACg");
	this.shape_1033.setTransform(76.3,267);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#43708E").s().p("AgMAWQgHAAgDgEQgEgFABgGQAEgRAPgGIAdgGIADAEQgGAIgHASQgIAPgPAAIgCgBg");
	this.shape_1034.setTransform(56.2,273.6);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#4E83A4").s().p("AAAATQgJgDgdgiQAQABAWANQAWAKARgBQgZAOgLAAIgDAAg");
	this.shape_1035.setTransform(62.9,286.5);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#477696").s().p("AgRAOQgNgHgBgLQgCgMALgDQAFgCAOACQAQACAIAEQALAHABANQAAAJgIADQgGACgLAAIgZgHg");
	this.shape_1036.setTransform(44.6,293.2);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#36596E").s().p("AgwAMQAHgMANgGQALgFARgBIAKgKIAAABIAfABQABAFAGAMQAEAIgKABIgsAPQgJACgIAAQgQAAgNgLg");
	this.shape_1037.setTransform(82.9,281.8);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#4E83A4").s().p("AANAbQgpgKgMgoQAOgJAXAKQAWAKANgGQAKgEgCAfQgBATgQAAIgKgBg");
	this.shape_1038.setTransform(46.6,287.4);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#233C4A").s().p("AhWAEQBOgZBfASQgYAOg4AAQgnAAg2gHg");
	this.shape_1039.setTransform(54,281.9);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#477696").s().p("AgbAAQgFgkgQgQQARAFAeAPQAbAKAWgEIABAsIgKAKQgSABgLAEQgMAGgHAOQgNgOgFgngAAxASIABAAIgBABg");
	this.shape_1040.setTransform(79,277.8);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#43708E").s().p("AAJAiQgJgCg9gRIgHgBIgFgTIACgJQAUgOAqADQAsACATgJQALgGAGAKQAEAKgDALQgGAYgQALQgLAHgPAAIgPgBg");
	this.shape_1041.setTransform(91.2,268.8);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#46758F").s().p("AgCAAIADgCIACACIgFADg");
	this.shape_1042.setTransform(126,4.1);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#5087A9").s().p("AAaBzQAAgCgKABIgQAAIAAAAQgCgegUgVQgQgPgfgPIgBgzQgCgegMgVIgGhPIAXADQANAUAdAQIAvAcQABAYACAJQAFASARAJIAsCHQgVAYgKAIQgFADgEAAQgNAAgMgig");
	this.shape_1043.setTransform(142.1,28.3);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#528BAE").s().p("AgsACIALgjIBOA6IgFAJg");
	this.shape_1044.setTransform(142.1,8.9);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#43708E").s().p("AgCAdQgdgQgNgTIACgyIAVAOQAIANAaAZQAZAWAHASIAAAVIgvgcg");
	this.shape_1045.setTransform(139.8,14.4);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#528BAE").s().p("AAgBTQgKgRgWgVQgegbgHgIQgJgKgJADQgDACgLAKQgQgJgFgQQgDgJgBgZIAAgUQAZgbAZAMQAKAFAbAcQASATAQAEQASAEAVgLIAKACQAdAagQAnIgLALIgXAjg");
	this.shape_1046.setTransform(153.8,24.6);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#3D6680").s().p("AgGAFQgEgFAIgKIAKAVQgLgCgDgEg");
	this.shape_1047.setTransform(128.8,18);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#36596E").s().p("AgOARIgLgVIABgYIArgLIAHBOIgoABg");
	this.shape_1048.setTransform(131.1,17.4);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#4A7D9D").s().p("AgLAAQAEgGAGgDIAMgCIABAXg");
	this.shape_1049.setTransform(286,284.1);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#5087A9").s().p("AgGALIABgOQACgIAEABQAHABgBAIIgCAMg");
	this.shape_1050.setTransform(291.3,286.3);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#4A7D9D").s().p("AgHgHIALAAIAEAJQABAFgHABIgBAAQgHAAgBgPg");
	this.shape_1051.setTransform(291.4,288.2);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#4A7D9D").s().p("AgRgQIAYAAIALAhQgcgDgHgeg");
	this.shape_1052.setTransform(275.1,292.7);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#4A7D9D").s().p("AgYAEQALgVAMAGIAbAYg");
	this.shape_1053.setTransform(278.3,290.6);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#4A7D9D").s().p("AgVAGIgOgKQAFgTAYgFQAFgBACACQAWAUADAEQAMAOgDASg");
	this.shape_1054.setTransform(266.5,286.9);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#233C4A").s().p("Ag6AgQgJgMgPgBQgTABgJgBQgSAAgJgBQgPgDgCgRIAYgDQAaAEAxgQQAwgQAZAFQAdgIAiAJQAVAGAnAPQARAFgEAVIgNADQgHACgDAGQgmgLg1AEQg8AHgeACQgDgDgFACg");
	this.shape_1055.setTransform(271.7,280.9);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#3D6680").s().p("AgGAAIANgBQgDADgEAAQgDAAgDgCg");
	this.shape_1056.setTransform(206.7,283.6);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#3D6680").s().p("AgHgCIAPABQgEAEgEAAQgDAAgEgFg");
	this.shape_1057.setTransform(189.5,283.8);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#3D6680").s().p("AgYgBQAYgIAZAIQgNAHgMAAQgMAAgMgHg");
	this.shape_1058.setTransform(184.4,283.7);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#60A2CA").s().p("AgKgKIAKAAIALAUIgVABg");
	this.shape_1059.setTransform(226.6,273.9);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#5087A9").s().p("AgVgFQAegBANAJIgrADg");
	this.shape_1060.setTransform(234.5,273.3);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#60A2CA").s().p("AgWAJQAIgSAMgBQAJAAAQALIgWAHQgHADgHAAIgJgCg");
	this.shape_1061.setTransform(222.1,275);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#3D6680").s().p("AgjAAQAigKAlAKQgRAGgSAAQgRAAgTgGg");
	this.shape_1062.setTransform(195.8,283.6);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#60A2CA").s().p("AgiANQgDgkAkAPIAlACQgNAOgUAEQgIABgMAAIgRAAg");
	this.shape_1063.setTransform(214.2,275.8);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#4A7D9D").s().p("AgXgJQAAgNAHgDQAGgDALAEQACAHAMARQAKANgBAMIgYADg");
	this.shape_1064.setTransform(256.2,277.8);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#5087A9").s().p("AghASQABgTANgJQAKgHAUgCQANgCAGAKQADAGABANIghAKQgJACgJAAQgJAAgHgCg");
	this.shape_1065.setTransform(195.8,277.4);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#60A2CA").s().p("AhxAHIAAgNQAFgDAEABQAYAOAagOIATAAQAHAJAIgIIATgBQAmAOAhgOIArACIABAPg");
	this.shape_1066.setTransform(192.4,284.4);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#5590B4").s().p("Ag+AiQABgMgLgOQgMgQgBgHICdgTQgDAMAFAMQADAIAJANQgbgFgvAQQgnANgYAAIgLgBg");
	this.shape_1067.setTransform(265,276.9);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#43708E").s().p("AAaAoQgIgIgzgPQgmgLgFgjQAOgLAYAAIAmAAQARAJAoAPQAcAQgNApg");
	this.shape_1068.setTransform(222.9,287.1);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#43708E").s().p("AhZAfQgXgnAIgMQAIgNA1gFIAZACQAPACAIAFQAsASAKACQANADAggCQAIAGgRAJQgOAJASAIIiPAQQgOgLgfACg");
	this.shape_1069.setTransform(241.3,269.7);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#477696").s().p("AgiAEQgLgFABgGQAAgGAMgEIAVABQAqAKAPAYIgMAAQgmAAgegOg");
	this.shape_1070.setTransform(94.1,10.5);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#477696").s().p("AgGAFIABgLIAMAJIgEAEg");
	this.shape_1071.setTransform(161,21);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#477696").s().p("AgKgLQATAEACATQgSgDgDgUg");
	this.shape_1072.setTransform(159.3,19.1);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#4E83A4").s().p("AgCADQgFgCABgHIANACIAAALIgJgEg");
	this.shape_1073.setTransform(187.1,33.4);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#5087A9").s().p("AgCASQgLgMgGgEIgBgWIAQAHQAEAEAPAGQAKAGgJAMQgFAGgFAAQgEAAgEgDg");
	this.shape_1074.setTransform(186.4,27);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#43708E").s().p("AgOATQgPgFgGgOQgEgIAGgGIAPgIQAlACAPAXQAJAOgJAEQgOABgFABQgUgBgJgDg");
	this.shape_1075.setTransform(186.3,14.5);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#477696").s().p("AAjAqQgagVgPgQQgSgQgRgDQgSgCgVAMQARgogegaIAEgEIArgBQABAQAEAHQAFALAOADQANAQAkAXQAkAXAOASIANAPQAGAIgDAKIgOABIgsgig");
	this.shape_1076.setTransform(170.7,28.8);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#4E83A4").s().p("AA7A/QgKgaghgJIg1gPQgJgEgIAMIgNAVQgOgDgFgLQgEgHgBgQQAAgdAGgKQAJgPAfAIQAQAFARgOIAhgfQgHAuAVAgQARAYAnAVIABAXQgMAPgFACIgBAAQgIAAgHgTg");
	this.shape_1077.setTransform(175.2,20.7);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#4E83A4").s().p("ABWB1QASgZggADIg3AJIAAgLIAXgOIAAgIQAAgBABAAQAAgBABgBQAAAAAAAAQABgBAAAAIgDgJIAAAAIgNgMIgKABIgWgiQAHgMgEgEQgDgEgNgCIgfgXIgNgNQgIgVgggYQgggZgIgUIAOAAIAbABQAPABALAHQAPAJAFgJQACgCADgSIAiALQgQAgARAQQAKAJAiALQgKASAIALQAGAIASAJIAFAKQAEAFAFgDQAIgFABgLQgBgNABgGQAIgGAFACQAFABABAKQAAASALAJQAJAIASACIACAMQgFAMAJAWQAJAWgDAMIgnA/IABADIgDABg");
	this.shape_1078.setTransform(192.9,49.9);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#528BAE").s().p("AgFAEIAAgIIAKAIIgFABg");
	this.shape_1079.setTransform(230.6,297.2);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#5087A9").s().p("AgKAEIgBgHIAXAHg");
	this.shape_1080.setTransform(169.5,297.3);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#528BAE").s().p("AgFAEIAHgHIAEAHg");
	this.shape_1081.setTransform(244.3,297.3);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#528BAE").s().p("AgLAGQAJgKACgBQAHgDAFAOg");
	this.shape_1082.setTransform(29.1,297);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#528BAE").s().p("AgLAHIAFgJQAEgFAFACQACABADAEIADAHg");
	this.shape_1083.setTransform(251.8,297);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#528BAE").s().p("AgCALIgFgMQgCgIAJgBQAFgCACAJIACAPIgLgBg");
	this.shape_1084.setTransform(204,296.5);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#528BAE").s().p("AgMgQIAQACQAJAEgBAJQAAAIgIAFQgDACgMADg");
	this.shape_1085.setTransform(3.1,281.3);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#4A7D9D").s().p("AgVANIALgSQAHgKALACQAEABAEAKIAGAQg");
	this.shape_1086.setTransform(137.5,296.3);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#4A7D9D").s().p("AgNADQANgGAAgNIAYAJQAMAHgCAQIhDABg");
	this.shape_1087.setTransform(276.9,296.1);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#43708E").s().p("AgGARIgYgIQAEgRAOgFQAGgCAVgBIAMACQAHAKgEAHQgDAGgLAIg");
	this.shape_1088.setTransform(171.4,296);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#4A7D9D").s().p("AgbAWQgCgUANgXIAVABIAKAJIACABIALAgg");
	this.shape_1089.setTransform(143.8,295.5);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#477696").s().p("AAAAIQgCABgJALIgVAAQAAgUAMgJQALgKASAAQASAAAEANQACAFAAAVIgVAAQgFgPgHADg");
	this.shape_1090.setTransform(29,295.6);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#5087A9").s().p("AhDAQQAVghAkABIAmAGQAYACARgHIAAAgg");
	this.shape_1091.setTransform(158.1,296.1);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#5590B4").s().p("AgtAnIgLghQAWgJALgHQAQgMAHgRIAMAAQANAZAggBIAAAVQgjgBgWAjg");
	this.shape_1092.setTransform(151.2,293.8);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#5590B4").s().p("AAAAcQgEgJgEgBQgMgDgHALIgLATIgYAAIABg2IAYgFQAOgDALADQAVAGgBgOQgFgRADgFIA5ABIAAAWQgeABgEAVQgNAYACAUIgNAAIgFgRg");
	this.shape_1093.setTransform(139.2,293.2);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#477696").s().p("AhbAKQgIgLAHgNQAGgLAMgCQAHgBAPADQAPADAwgDQAngCAYALQADASASAFIABAUIiqABIgRgSg");
	this.shape_1094.setTransform(123.3,294.9);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#43708E").s().p("AhPAxIAXgfQAOgSALgLQAmgpAXAEQAXAEAcAyIgPArg");
	this.shape_1095.setTransform(82.9,292.7);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#13212B").s().p("Ah3BBQgQAJgPgLQgPgOgJgFQgGgRAJgbQAJgfgBgMQAKgBAcgQQAWgOASAGQAKAPASgHQAXgJAGACQAJAKATgBQAWgCAGACIAugCQACABAXAHQAPAFABASQAAAHAFgHQAGgHAFgVIAQAMQAAAHAGgBIALAHQgHANALATQAMAVgEALIgLAIQhMALgxAUIgjgDIgWgIQgNgFgKAKIg5AGg");
	this.shape_1096.setTransform(19.4,231.7);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#5590B4").s().p("AAeBoIgEgHQgCgFgDgBQgGgBgDAEIgFAKIg4AAIgEgIIgHAIIh+AAIgLgJIAAg3QANgpgcgRQgogOgRgKIAMgKQAGgGAFABQAcAABWgbQBHgWAvAOQAJACAQgFIAcgIIAZAlQACASAPADQAIACATgBQAJABASgBQAQABAIAMQgYAEgFATIgYABQgOABgGAMQAeAdAcggIA5AXIABAAIAOALIASAAQAGAgAeADQgBAMgNAHIgUAOgAg/AuQgDADABAEQADAIAIADQAEABADgDQADgCgBgFIgEgGIgEgFIgCAAQgFAAgDACgAAcAyIADADIAEADQAIgEAAgBIgBgFIgDgDIgFgBQgGAAAAAIgAgTAlIAHAEIABgGIgFgBgAgThJQgKACAAANQAAAJAHAKQAGAIAJACQAKACAGgLQAJgRACgBQACgNgHgEQgEgBgLAAIgTABg");
	this.shape_1097.setTransform(249.9,287.3);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#43708E").s().p("AgDAEQgEgDACgGIALALQgHAAgCgCg");
	this.shape_1098.setTransform(286.6,213.9);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#4A7D9D").s().p("AgDABIAFgEIACADIgFAEIgCgDg");
	this.shape_1099.setTransform(278.1,225.9);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#4E83A4").s().p("AAAgDIADADIgCADIgDABg");
	this.shape_1100.setTransform(277,208.8);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#081218").s().p("AgHAAQAAgMAMgGIADAVIgKAQQgFgQAAgDg");
	this.shape_1101.setTransform(276.4,216.4);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#4E83A4").s().p("AgKgKIAVAHIgKAOg");
	this.shape_1102.setTransform(272.2,216.8);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#60A2CA").s().p("AgNALIgDgVIARABQAKADAGAGIgKALg");
	this.shape_1103.setTransform(278.6,215.6);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#43708E").s().p("AgCANQgKgBgDgJIgBgQIAiAMQgJAPgJAAIgCgBg");
	this.shape_1104.setTransform(288.9,215.8);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#4E83A4").s().p("AgKAMIgMgMQAEgSASgEIAOAWQAIALABAMg");
	this.shape_1105.setTransform(288.3,213.3);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#4A7D9D").s().p("AgWgRIAtACQgBAcgWAFQgWgOAAgVg");
	this.shape_1106.setTransform(270.1,223.1);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#46758F").s().p("AgLASQgFgEAAgIQgBgKAGgHQAGgHAKgCQAMgCAAARQAAAWgQAEIgDAAQgFAAgEgDg");
	this.shape_1107.setTransform(274.8,204.6);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#4E83A4").s().p("AgOAUQgEgEABgGQACgMACgGQAFgJAIgDQAOgEAEATQAAAVgVAGIgEAAQgEAAgDgCg");
	this.shape_1108.setTransform(266.8,201.3);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#4A7D9D").s().p("AgVgTQAcgPAKAMQAIAJgEAdIgVANQgYgSADgeg");
	this.shape_1109.setTransform(256.4,206.1);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#43708E").s().p("AAGgDQgJgMgeAPIgBgLQALgUAYgDQA/Abg3AqQAFgegIgIg");
	this.shape_1110.setTransform(257.5,204.2);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#4A7D9D").s().p("AALAnQgMgCABgMQADgTgPgQQgTgVgCgIQAjgDASAXIAOAuIAAANQgQAAgHgBg");
	this.shape_1111.setTransform(263.2,216.2);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#46758F").s().p("AgPACQAAgggNgJQAmgBATAZIgBAHIgWAwQgVgHAAgfg");
	this.shape_1112.setTransform(293.5,192.2);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#233C4A").s().p("AgNAfQgEgMgDgCQgDgUABgGQACggAdADQAQABgCANIgBAUQgCAVgCAFQgFAOgOADIgCAAQgHAAgDgIg");
	this.shape_1113.setTransform(283.9,229.8);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#3D6680").s().p("AgLAiIgBgLIgLgMIgPguQAOgCARAFIAbALIANAWQAKAVgJAPg");
	this.shape_1114.setTransform(269,217.8);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#43708E").s().p("AghAlIAAgXQARgCAAgZQABgZAPgDIAMAKIAWAZQgKAdgMAKQgKAJgNAAQgKAAgMgFg");
	this.shape_1115.setTransform(267.7,235.9);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#3D6680").s().p("AAEAUQgUgHgCgVQAAgGAEgEQAEgDAGADQATAJAEASQgCAMgIAAIgFgBg");
	this.shape_1116.setTransform(278,30.1);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#5087A9").s().p("AgBgFIACAHIgCAEg");
	this.shape_1117.setTransform(294.6,171.7);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#5087A9").s().p("AAAgBIABgEIAAALIgBgHg");
	this.shape_1118.setTransform(284.4,177.4);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#4E83A4").s().p("AADgQIAAAhQgLgRALgQg");
	this.shape_1119.setTransform(295.7,116.8);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#5087A9").s().p("AgIgcIAQALIABAYIgRAWg");
	this.shape_1120.setTransform(295.3,177.3);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#477696").s().p("AgGAXIgMgRQAMgBAHgLIAOgVQABAJADATQABAQgKAIQgEADgEAAQgDAAgFgFg");
	this.shape_1121.setTransform(291.3,50.5);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#60A2CA").s().p("AgHASIgBgiIAQgWIABBNg");
	this.shape_1122.setTransform(295.4,181.9);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#477696").s().p("AgQgKQAegYANAgQgRABgHACQgKAFgBAPQgfgMAXgTg");
	this.shape_1123.setTransform(293.6,43.3);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#5087A9").s().p("AgbALIgBgBQACgKAUgJQASgKgBgPIARAWIABAvQgTgZglABg");
	this.shape_1124.setTransform(293.5,187.2);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#4E83A4").s().p("AgEAAIAEhoQAIBRgECAQgJgtABg8g");
	this.shape_1125.setTransform(295.5,101.2);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#60A2CA").s().p("AgJBhIAAgWIADgEIgDgIIgBipIASgBIADBZIgEB+g");
	this.shape_1126.setTransform(295.4,164.7);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#4E83A4").s().p("AgLAAQgChLAFg4IASAAIADEHIgSAAQgFhXgBgtg");
	this.shape_1127.setTransform(295,140.8);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#60A2CA").s().p("AgOAjQAMgfgCgwQgChHABgJIgBgvQgBgcANgRIADBBIgFBpQAAA7AKAsIAAAiQgMASAMARIABBaIgTABg");
	this.shape_1128.setTransform(294.5,106);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#3D6680").s().p("AgKAAQgCiNAJhZIAPAAIAADTQgNARAAAbIABAuQgBAKACBHQABAwgLAfQABgkgCjDg");
	this.shape_1129.setTransform(294,86.3);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#3D6680").s().p("AAGgLQABAOgMAJg");
	this.shape_1130.setTransform(58.2,20.4);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#3D6680").s().p("AgGgCQADgNALgHQgCAIgBAPQgCAPgKAHQAAgTABgGg");
	this.shape_1131.setTransform(59.5,16.9);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#43708E").s().p("AgCAWQgpgUgHgBIAAgJIANgYIAJABQAHASAdANQAhAQAKAPQgHACgIAAQgSAAgUgLg");
	this.shape_1132.setTransform(66.1,14.4);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#4A7D9D").s().p("AgDgBIAGAAIABADIgHAAIAAgDg");
	this.shape_1133.setTransform(215.2,23.7);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#4E83A4").s().p("AgGgEQADgEALgDIgJAXQgJgKAEgGg");
	this.shape_1134.setTransform(222.4,42.1);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#4A7D9D").s().p("AgFgBQADgJAJgEQAGANgGAHQgEAFgMAEIAEgQg");
	this.shape_1135.setTransform(215.1,31.3);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#4A7D9D").s().p("AgNgIQAIgNAagWIgdBXQgVgfAQgVg");
	this.shape_1136.setTransform(230.9,15.7);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#4A7D9D").s().p("AgGAHQgRgQgFgWQAsgMAJAZQAFAPgCAnQgagTgIgKg");
	this.shape_1137.setTransform(214.6,41.8);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#4A7D9D").s().p("AgkAdIAFgtIBEgLQgCAHgNAUQgKAPACAOg");
	this.shape_1138.setTransform(210.4,35.8);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#43708E").s().p("AgkAjQgDgHACgIQAEgfAEgMQAHgTAWABQAQABAMAJQANAKgDAOQgDARgRAOQgPAMgUAFIgHABQgIAAgEgHg");
	this.shape_1139.setTransform(226.5,29.5);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#4E83A4").s().p("AgIA+QgJgMgYACQgNgDgGgKQgEgIgBgOQgTgDgEgTQAjgTAEgEQAPgRgTgcIAvgBQALAEAcAgQAXAZAagDQAKAQgFAKQgGAJgTgBQgdgBgLAQQgJANABAdg");
	this.shape_1140.setTransform(222.9,52.9);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#43708E").s().p("AhPBcQgcgggMgEIAAgWIAKgXQAUgIAjgaQAhgTAhAQQALAGADgMQABgEAAgRQABgsAzgOQANgEAKAFQALAEADANQAHAegDAVQgFAcgWAGQgfAJgVAXQgNANgUAjQgGAKgLAMIgVAUIgGAAQgWAAgVgWg");
	this.shape_1141.setTransform(234.2,39.8);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#5087A9").s().p("ABMC7QgLgJgBgSQAAgKgGgCQgFgBgHAGQgTAEgFASQgSgIgEgIQgJgMAJgRQASgYgNgTQgLgTgngHIgigLIAAgXIAugbQARgTgcgmQgQgXgGgKQgNgXAAgTQAFgCAOgBQAJgDgJgOQgPgYgmgDQAVgVAjAEIA5AHQgcB4BgAmQAcALAKARQAJAOgBAbQgSgTgLAOQgJAUgHAFQgKAHgEAIQgEAKAMAGQAkAQAIAeQAGAYgKAnQgSgEgJgHg");
	this.shape_1142.setTransform(195.8,30.2);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#040C11").s().p("AhdEMIgFgiIAMgWQAIgMAlgMQAfgKAGgXIAPgDQAJgDADgJQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIgDgFIgXALIgPgsQALgkghgWIARgIQAIgFgPgGIgggMQgVgEgPAMQgcAGgZgPQgNgIgcgcQAdgcgZgcQAAgNgHgJQgGgHgOgJQgUgMgFgGQgKgOAPgSIAigMIA5gEQAZABANgQIAcgKIgBgDIBSgSIANgHIAegFQASgEAKgJIAJADIAYgMIAXANIARAOQAKAIgBALQgDANgKAYQgCAVAYAMQADAKgCAbQAEASAggVIAfAWIANAAIABCXQgHAOgFgDQgEgDABgLQABgPgDgFQgEgHgPADIgHgGIgBAPQACAXgGAMQgGALgcAaQgJALgEAcQgEAcgKAMIgIAFIALAHQgCAVgKgBQgDAAgTgJQgJgCgLgfQgJgZgbANQgiAFgIAdQgCAJAIABIAPACIgDAOQgDAHgIADQgNgHgCAAQgHAAAAAQIgSACQgKABgXAMQgQAJgMAAIgHgBgAB/CSIACAEIAIgGIgDgEgAAwCBIACAEIAFgFIgEgCIgDADgAAVAzQgJAQAGASQAGAVAbADQAWAAALgMIALAAQA0gmAJgOQAJgOABgtIARAoQADgMAAgdQABgYAGgNQADgEAIgIQAGgHgNgGQgJgEgHAFQgGAEgEAKIgEAQIgDARQgVADgEAVIgJAAQgQgBgHABQgMACAHAUQAKAagRAUIgWgBQgKgTgQgEIgHgBQgLAAgIANgADJggIAGAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAAAIgEgBg");
	this.shape_1143.setTransform(211.4,86);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#43708E").s().p("AgGgEIACgCIALALIgCACg");
	this.shape_1144.setTransform(107.3,48.3);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#43708E").s().p("AAGAGIgLgJIABgCIAKALg");
	this.shape_1145.setTransform(108.4,49.4);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#477696").s().p("AgCAAIACgFIADAKg");
	this.shape_1146.setTransform(115.2,80.3);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#4E83A4").s().p("AgFAFIAKgKIABABIgKAKg");
	this.shape_1147.setTransform(44.5,75.7);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#4A7D9D").s().p("AgCgDQAEgCAAAEIACAFIgCABg");
	this.shape_1148.setTransform(106.4,47.3);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#4A7D9D").s().p("AgCAEQgEgDACgGIAKALQgGgBgCgBg");
	this.shape_1149.setTransform(20.4,62);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#4E83A4").s().p("AgEAGIgBgJIADgDIAIAGIgJAHg");
	this.shape_1150.setTransform(78.6,39.1);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#5087A9").s().p("AgQgEIAVgBIAMALIghAAg");
	this.shape_1151.setTransform(75.3,70);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#477696").s().p("AgGAAIAAgLQAKACACAGQACAFgEAKg");
	this.shape_1152.setTransform(114.2,52.3);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#477696").s().p("AgDgCIAEgBQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAIgEAEg");
	this.shape_1153.setTransform(113.6,69.5);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#5087A9").s().p("AgDgBIAEgBIADADIgHACg");
	this.shape_1154.setTransform(75.9,61.4);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#4A7D9D").s().p("AgCAIQgDgCgBgCQgCgGAEgCIAJgDIAAgBIADAJQAAAGgGACIgBAAIgDgBg");
	this.shape_1155.setTransform(105.1,32.6);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#4E83A4").s().p("AAAADIgDgDIAGgCIABAEIgEABIAAAAg");
	this.shape_1156.setTransform(47.3,80.9);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#4E83A4").s().p("AgHAHIAEgJQACgEAFgBIACACIABACQAAAFgEACIgJAEg");
	this.shape_1157.setTransform(45.7,74.4);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#477696").s().p("AgFgEQAGgHANAEQgDAIgKADIgOAGQAFgLADgDg");
	this.shape_1158.setTransform(111.4,80);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#477696").s().p("AgFAJQgGgFgFgOIAiAPQgJAGgHAAQgDAAgEgCg");
	this.shape_1159.setTransform(119.9,50.6);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#4A7D9D").s().p("AAIAMQgSgFgEAEQAEgTASgDQAOAXgNAAIgBAAg");
	this.shape_1160.setTransform(23.7,61.5);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#4E83A4").s().p("AgDAHQgDgCAAgFQAAAAAAAAQAAgBAAAAQABgBAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAIAHAFQgCAHgCACIgDABIgDgBg");
	this.shape_1161.setTransform(86.2,54);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#5087A9").s().p("AgHAJQgFgJAMgNIAKAWQgGAFgEAAQgEAAgDgFg");
	this.shape_1162.setTransform(74.9,76.5);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#4E83A4").s().p("AgFADQgCgDACgDIAEgDIAEgBQABABADAGIgHAIQgDgBgCgEg");
	this.shape_1163.setTransform(39.3,52.9);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#4E83A4").s().p("AgIAHIgEgEQgBgBAAgBQAAAAgBgBQAAAAAAAAQAAAAAAAAQAFgHAJAAIAPAAQgEAPgLAAQgDAAgFgBg");
	this.shape_1164.setTransform(36.7,48.5);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#5087A9").s().p("AgEAGQgDgCAAgEIADgEIAEgCIAIAGIgCAEIgDADIgDAAIgEgBg");
	this.shape_1165.setTransform(83.3,60.3);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#4A7D9D").s().p("AgIAOQgDgDAAgFQADgPAUgFIgCAQQgCAJgIADIgEABIgEgBg");
	this.shape_1166.setTransform(13,70.9);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#4A7D9D").s().p("AgKgEQABgMAJABQALAAAAALIAAAUIgVABIAAgVg");
	this.shape_1167.setTransform(74.7,67.8);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#4E83A4").s().p("AgOgQIABAAIASADQAKAEAAAJQgBALgJADIgSADg");
	this.shape_1168.setTransform(39.6,46);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#4E83A4").s().p("AgKgEQgCgOAWgLIABABQgGAIADARQACAUgDANQgQgagBgIg");
	this.shape_1169.setTransform(42.8,79.2);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#4E83A4").s().p("AADARQgKgCgEgLIgGgVIAiANIgCAPQgCAHgHAAIgDgBg");
	this.shape_1170.setTransform(103.9,71.2);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#4A7D9D").s().p("AgFASQgDgDgGgPIALgUQADAGAMALQAIAJgJAJQgGAGgFAAQgDAAgCgDg");
	this.shape_1171.setTransform(101.3,28.1);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#4E83A4").s().p("AAJgXIALALQgFAQgFAIQgJALgUABg");
	this.shape_1172.setTransform(84.1,49.1);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#5087A9").s().p("AgMAUQgBgDABgGIADgMQAFgTARgDQgHAfgCAGQgCAGgEADIgDABQgEAAgDgEg");
	this.shape_1173.setTransform(71.1,74.2);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#4A7D9D").s().p("AgBgnQATAVgHAUQgDAKgUAbg");
	this.shape_1174.setTransform(15.5,65.5);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#4A7D9D").s().p("AgbAVQAFgbALgJQANgLAaAOIgLAMQgRACgFATg");
	this.shape_1175.setTransform(70.7,71.9);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#4E83A4").s().p("AgKADIAOgqIAHBPQgYgOADgXg");
	this.shape_1176.setTransform(14.2,57.4);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#4A7D9D").s().p("AgRgKQAPgVAkABIgiAkQgQATgRAGQAMgjAEgGg");
	this.shape_1177.setTransform(108.9,28.6);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#43708E").s().p("AgBAFQgIAAgcAEIgBgTIAXgLIA2AAIAAAWQgCANgIAJQgMgRgSgBg");
	this.shape_1178.setTransform(75.3,28.4);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#5087A9").s().p("AAAAWQgHgCgVgTIAMgXQATABAHACQAOAFAFAPQgLAWgNAAIgFgBg");
	this.shape_1179.setTransform(78.7,72.8);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#4E83A4").s().p("AgFAPQgYgEAFgPQADgJAJgCIAQAAQAKABAFADQAHAFAAAJQgEALgJACIgHAAIgLgBg");
	this.shape_1180.setTransform(20,49.4);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#43708E").s().p("AADATIghgMQACgQAWgKQAGAEAVABQAPAEgHAQQgGAOgOAAIgGgBg");
	this.shape_1181.setTransform(113.2,64.2);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#477696").s().p("AAHAeIgigNQgHgTARgJQAWgNACgFQAPAVAIAmg");
	this.shape_1182.setTransform(104.9,67.8);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#43708E").s().p("AgJAQQgRgVgIgJIgBgMQAYABAQAOQAMAKATAZQgJADgHAAQgRAAgMgLg");
	this.shape_1183.setTransform(5.4,52.7);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#477696").s().p("AgWAAQgBgRARgKQAQgKAIABQAMACgOAZQgOAagOAUQgKgbAAgKg");
	this.shape_1184.setTransform(42.9,63);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#43708E").s().p("AgeAAQADgSAbgBQAYgCAHASQgIAXgbAAIgDAAQgbAAAEgUg");
	this.shape_1185.setTransform(20.3,76.3);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#43708E").s().p("AgUAOQgLgMgBgOQAXABAVgWQgBAHAHAMIAMASQALAXgoAHQgPgMgGgIg");
	this.shape_1186.setTransform(86,23.9);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#4A7D9D").s().p("AgcAMQgCgSAQgHIAZgLQANgKAFAWQgGAagjANIgFABQgJAAgCgQg");
	this.shape_1187.setTransform(95.6,66.2);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#4E83A4").s().p("AgGgCQAOggAUgQIAAABQAMAigYAZQggAagPAPIAZg1g");
	this.shape_1188.setTransform(75.3,44.8);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#43708E").s().p("AgbAuIALhbQAeAEAOATIgLAVQgLABgHAaQgGAUgQAAIgEAAg");
	this.shape_1189.setTransform(98.1,28.3);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#477696").s().p("AADACQgTgCgcAQQAGgZAPgKQALgIATAAQAUgBAJAPQAIAMABAeQgVgYgVgDg");
	this.shape_1190.setTransform(54,59.9);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#43708E").s().p("AgfAXQgHgFADgKQAFgOAMgJQAMgJAOgBQARADAFADQAKAFgEAMQgEANgRAHQgGACgXAFIgGABQgGAAgFgDg");
	this.shape_1191.setTransform(83.7,66.3);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#43708E").s().p("AgYARQgMgJAAgRQABgJAIgFQAJgFAHAFQAJAFAVAJQARAJABAPQAAAKgMAAQgOAAgEABQgVgCgKgHg");
	this.shape_1192.setTransform(64.2,64.4);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#4E83A4").s().p("AgLArIgMABIgLgMQALgSAEgJQAHgOgTgNQgFgEgBgGQAAgGAGgDQAEgCAIAAQAHAAABADQAFAIAXAMQAVAKgBARQAAAJgJACIgRADQgSADgEAUg");
	this.shape_1193.setTransform(23.4,58.2);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#4E83A4").s().p("AghApQACgpALgQQAPgZAnABQgTAeAGAzg");
	this.shape_1194.setTransform(77,22.1);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#477696").s().p("AALAbQgLgKgWgGQgagGgIgFIAMgkQAXgCAcAXQAfAYATABQgKAbgPAAQgKAAgLgKg");
	this.shape_1195.setTransform(62.3,26.2);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#3D6680").s().p("AgpBLIAQhEQALglAOgdQAJgSAKgBQAEAAARAGIACAKIgNAlQgVAKgHAMQgJAOAHAXQAEAXgGAMQgGAKgNAAQgIAAgLgEg");
	this.shape_1196.setTransform(53.6,28.8);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#4E83A4").s().p("AgjADQgJgrA4gTQAXgHACAPQABAIgEAWQgWAKgCAPIABAjQACAUgZADQgHgmgQgVg");
	this.shape_1197.setTransform(109.1,64.5);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#477696").s().p("AgugXQARgFAngCIAAAAQAEAFAhADQAZADgJAeIh6AVQgQguAdgJg");
	this.shape_1198.setTransform(124,74.9);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#4E83A4").s().p("AgZAMQgTgbAOgdQAcgEAHAAQATABAMARIABBMIgDADQgogJgTgcg");
	this.shape_1199.setTransform(74.6,33.8);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#5087A9").s().p("AgFA4QgHgOgSgIQgWgIgKgFIABgVIAlgNQARABADgRQAEgVAJgFQgFAUAaAHQAbAHgFAVIALAhQgVABgGACQgOAEgFAQg");
	this.shape_1200.setTransform(122.1,90.1);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#233C4A").s().p("AhqAkIAJgyIAVgCIAmgCQAXgBAJgUIAsAFIAugFIAXARIhKAPQgrAHgeADQgQACgBAHIAFAQQgLALgPABIgCAAQgJAAgRgEg");
	this.shape_1201.setTransform(142.9,72.5);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#43708E").s().p("AhoAXQA6gtA2AAQA3AAAqAtg");
	this.shape_1202.setTransform(14.6,82.5);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#43708E").s().p("AgLAcQgYgRgRAAQADgVgSgFIgfgJQAWgFApgOQAjgGAaAcQAJAJAOgFQAIgCAQgIIASAJQAJAHgCAKQgBAIgKADQgFACgMAAQgUgBgKAHQgMAIAAATQgQAAgXgRg");
	this.shape_1203.setTransform(93.7,19.2);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#43708E").s().p("AgIAUQhUhKgbgTQgHgEgCgKQgCgFAAgMIAAAAIAuAXIALAMQAUATAYAEIAWAYQAIAWAaAQIAsAdQAUAaApAHIgBAZIgVACQgzgZhDg8g");
	this.shape_1204.setTransform(122.1,60.5);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#3D6680").s().p("AgSBBQgHgiAYgZQAIgHgIgcQgJgagRgTIgBAAIABguIAngBQALAWADAdIAAA1IADBaIgHAQQgCAKAGAIIABAKIggAEIgNg4g");
	this.shape_1205.setTransform(132.4,33.5);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#5087A9").s().p("AgHBiIABgeQABgTADgLQAGgbgJgQQgJgPgbgGIgLgLIARg9QAuAbATASQAfAdgKAdQgEANgHApQgNAkghADg");
	this.shape_1206.setTransform(90.3,50.5);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#4A7D9D").s().p("AgEA/QgdgVgFgcQgBgGgFgHIgHgLQApgHgLgXIgMgUQgIgLACgHIALgCQARAAAXARQAZARAPAAIgLBcIALAhIgBABIgJABQgXAAgXgSg");
	this.shape_1207.setTransform(91.3,28.4);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#081218").s().p("AilBRQgbgHAFgUQgIAFgFAWQgEAQgQgBQgBgsgBgFQgHgZghgEIgDgLIAdgQIB7gVIASACQATAEAJgBQAQgBAKgLIBBgHQAogEAagEQATgCAGgFQAMgIgIgUIgXgSIAggDIANAYQAYASAmgEIA/gJIgBAmQgZgBACAYQgTgCgKABQgOADgPAMQgeAXgxAdIhTAwQgTAPgdgGQgmgJgKACQAWgbgSgLQgZgJgFgJQgJAHgFAhQgEAagaABQAFgUgagIg");
	this.shape_1208.setTransform(141.7,79);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#5087A9").s().p("AhJCDQAZgWgIgQQgGgOgbgJQgKgEgMAPQgNAQgKAAIgsgdQgagRgIgWQAOgLgBgCQgEgLgMAAQgOACgGgCQgYgEgUgSQADgKgBgFQgCgHgLgBQASgfAcAPQAFAPAHAEQAJAHAOgKIAOABQAIAAAFACQAEACAZAWQAQANAJgLQAJgNAagaQAVgZgDgZIAAgKIAMgBQAXAJALgYQANgbALgCIAAABQgEAoASAcQATAcAXgNQAmgUATAPQANAKALAnIAOBCQAAAlgmAaQAlAEANgGQASgIgGgeQgFgaAKgIQAJgGAZAEQAUADAHgHQAHgIgJgSIgXg6QAQgeATAcIAAANQAAAiAiAAIALALIAAAuIgXALIAMAhIgNABQgSAOgLAFQgRAHgTgLQgIgFgRAWIgeAAQgSABgLALIhOAJIAFg3QABgWgYgOQgSgMgJAaIgLANQgNAOALAQQAOAYAAAEQgJAUgXABIgmADg");
	this.shape_1209.setTransform(142.7,55.3);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#528BAE").s().p("AgBgDIADADIgCAEg");
	this.shape_1210.setTransform(201.5,225.1);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#3D6680").s().p("AgDgFQAOAFgOAGg");
	this.shape_1211.setTransform(243,210.5);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#3D6680").s().p("AgEACIAHgGQACAEgBAFg");
	this.shape_1212.setTransform(241.2,208.1);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#46758F").s().p("AgBgHIACAJQABACgCAEg");
	this.shape_1213.setTransform(260,86);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#233C4A").s().p("AgEAEIAFgKIAEAIIgBAFg");
	this.shape_1214.setTransform(77.5,217.5);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#4A7D9D").s().p("AgKAAQAFgDAFACQAFAAAGAEg");
	this.shape_1215.setTransform(149.3,282.6);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#081218").s().p("AAIADIgPACQAGgQAJAOg");
	this.shape_1216.setTransform(15,255.1);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#5087A9").s().p("AgEgFQAKADgBAIg");
	this.shape_1217.setTransform(115.2,164.7);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#3D6680").s().p("AgEgEQALgBgCAKg");
	this.shape_1218.setTransform(235,159.2);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#43708E").s().p("AgDAEIAIgKIgBAFIgEAIg");
	this.shape_1219.setTransform(264,243);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#46758F").s().p("AACgNIgBAbQgGgOAHgNg");
	this.shape_1220.setTransform(238.4,116.6);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#46758F").s().p("AgDAEIAFgRIACAcg");
	this.shape_1221.setTransform(238.3,111.4);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#60A2CA").s().p("AgEAJQgIgMAPgGIAFASg");
	this.shape_1222.setTransform(77.4,195.2);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#081218").s().p("AAAgBIABABIgBACg");
	this.shape_1223.setTransform(46.8,261.4);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#46758F").s().p("AgBgMQAJAMgGANQgKgMAHgNg");
	this.shape_1224.setTransform(260.2,101.3);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#3D6680").s().p("AgBgKQAJAKgKALg");
	this.shape_1225.setTransform(247.9,139.1);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#13212B").s().p("AgIgFIARAAQgFALgEAAQgFAAgDgLg");
	this.shape_1226.setTransform(151.1,261.8);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#3D6680").s().p("AgBgNQAIAOgIANg");
	this.shape_1227.setTransform(238.7,130.9);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#233C4A").s().p("AgGgRIAMAAQADAXgKAMg");
	this.shape_1228.setTransform(77.5,197.9);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#528BAE").s().p("AgIgGIAIgJQAEgCAFAJIgLAXIgDgBIgDACg");
	this.shape_1229.setTransform(119.6,104.4);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#43708E").s().p("AgEABQAAgDAHgRIACAnQgLgIACgLg");
	this.shape_1230.setTransform(170,117.8);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#36596E").s().p("AgBAEIgFgCQAEgGACAAQAAgBAHADIgFAHIgBAAIgCgBg");
	this.shape_1231.setTransform(125.1,228.5);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#13212B").s().p("AADgLQAIAKgEAFQgEAFgLADg");
	this.shape_1232.setTransform(98.5,125.5);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#43708E").s().p("AAAgJQAOAJgMAKQgRgHAPgMg");
	this.shape_1233.setTransform(242.8,233.9);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#13212B").s().p("AgFgCQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBABAAIADgCIAFAJIgHAEQgDgHgBgCg");
	this.shape_1234.setTransform(112.1,199.3);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#36596E").s().p("AgKALIADgRQACgKAQAJIAAATgAgKALIAAAAIAAABgAgKALg");
	this.shape_1235.setTransform(21,199.6);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#4A7D9D").s().p("AgKAHQAEgNARgDQABATgMAAQgEAAgGgDg");
	this.shape_1236.setTransform(153.4,279.4);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#4E83A4").s().p("AgHAVQABgQACgHQADgNAIgHIABAbIgFASg");
	this.shape_1237.setTransform(237.6,109.5);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#13212B").s().p("AgLAFQgBgGAFgMQAVgRgCAdIgMAWQgKgGgBgKg");
	this.shape_1238.setTransform(124.4,158.8);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#081218").s().p("AgNACQAEgHAIgBIAOADQACACgBACIgEADQgIADgDAAIgCAAQgFAAgFgFg");
	this.shape_1239.setTransform(24.7,254.1);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#5087A9").s().p("AgDAHQgFgCABgGQABgCAEgDIAGgFQAHAJgFAOIgJgFg");
	this.shape_1240.setTransform(28.3,248.8);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#233C4A").s().p("AgJAEQgEgKAIgCQAFgCAKAAIABANQgIAIgEAAQgFAAgDgHg");
	this.shape_1241.setTransform(25.7,265.7);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#43708E").s().p("AgKgBIAVgHIgLARg");
	this.shape_1242.setTransform(254,193.4);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#13212B").s().p("AgFALIAKgVIABANQABAIgIAAIgEAAg");
	this.shape_1243.setTransform(115.3,101.5);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#233C4A").s().p("AgDAIIgCgCIAFgNIAGgBIAAAJQgBAGgFACIgBAAIgCgBg");
	this.shape_1244.setTransform(20.1,194.6);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#36596E").s().p("AgLgKIANAAIAKAHIgBAOQgTAAgDgVg");
	this.shape_1245.setTransform(87.3,104.8);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#4E83A4").s().p("AgDAHQgEgEABgEQABgDAEgDIAHgDIABAVIgKgEg");
	this.shape_1246.setTransform(76.2,213.4);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#081218").s().p("AgDAMQgGgBADgJIAFgNIAJAAIgBAPQgBAIgGAAIgDAAg");
	this.shape_1247.setTransform(53.3,235);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#13212B").s().p("AgJAAQAJgQAGAGQAGAGgCAFQgCAFgHAHg");
	this.shape_1248.setTransform(119.2,128.7);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#528BAE").s().p("AgFARIgDgXIAQgKIABAhg");
	this.shape_1249.setTransform(282.8,127.1);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#5087A9").s().p("AgJgQIATAAIAAAWIgQALg");
	this.shape_1250.setTransform(282.6,124.8);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#43708E").s().p("AgKAEIgCAAIgEgCQAFgKALAAIARACIgBAFQgCAEgFABIACAAQgFAFgGAAQgEAAgGgFg");
	this.shape_1251.setTransform(100.5,120.6);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#60A2CA").s().p("AgBAFQgEgEgBgCQgBgIAOgBIgBAVIgHgGg");
	this.shape_1252.setTransform(25.9,262.5);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#5590B4").s().p("AAAALQgHgBgCgIIgBgMIAVAHIgEAKQgBAEgFAAIgBAAg");
	this.shape_1253.setTransform(113.6,261.5);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#5087A9").s().p("AgGAEIgBgQIAIAAIAGAPQADAJgJABIgBAAQgFAAgBgJg");
	this.shape_1254.setTransform(205.8,260);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#13212B").s().p("AgFADIAAgOQABgIAFABQAGAAgBAJIgCANIgIAQIgBgRg");
	this.shape_1255.setTransform(30.9,217.6);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#13212B").s().p("AgFABQACgMgCgGIALgCIAAAnQgKgHgBgMg");
	this.shape_1256.setTransform(111.8,175.3);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#528BAE").s().p("AgJARIAAghIATAAIAAAhg");
	this.shape_1257.setTransform(282.6,121.4);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#3D6680").s().p("AgEASQgBgJgCgDIAEghQALAKAAARQAAAIgDAUQgHgCgCgIg");
	this.shape_1258.setTransform(238.5,189.9);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#081218").s().p("AAJgLIAIAAQgEAXgcAAQADgSAVgFg");
	this.shape_1259.setTransform(106.1,209.9);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#46758F").s().p("AgHAKIACgNQADgIAEABQAHACgBAHQgBAGgHAEIgDACg");
	this.shape_1260.setTransform(259.7,80);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#081218").s().p("AgKgNIAVgDQgBAOgEAGQgFAKgLADg");
	this.shape_1261.setTransform(2.9,256.2);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#13212B").s().p("AAAAJQgIgFgBgEQgCgEADgDQADgCAFABQAHADADAGQACAFgDACQgCABgDAAIgEAAg");
	this.shape_1262.setTransform(115.4,122.4);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#233C4A").s().p("AgCgiQARAigRAjQgGgfAGgmg");
	this.shape_1263.setTransform(77.6,205.3);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#5087A9").s().p("AgJgWQAVAJgDAMQgBAGgNARg");
	this.shape_1264.setTransform(168.1,272.7);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#233C4A").s().p("AgIACQgIgIAAgJIAZAAQABAFAHAMQADAKgQAFIgMgPg");
	this.shape_1265.setTransform(81,193.3);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#081218").s().p("AAAAEQgPgJgHgBQAcgLARARIgCAKIgEABQgIAAgJgHg");
	this.shape_1266.setTransform(8.5,260.2);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#4E83A4").s().p("AgLgRIAXACIAAAgQgWgFgBgdg");
	this.shape_1267.setTransform(292.9,257.3);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#60A2CA").s().p("AADAJIgZgJIABgJIAsAAQgGATgNAAIgBgBg");
	this.shape_1268.setTransform(13,261.2);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#3D6680").s().p("AgWgCQAFgCAGABIAigKIgBAWQgDgCgVAHIgGAAQgLAAgDgQg");
	this.shape_1269.setTransform(101,220.5);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#081218").s().p("AgQAPIAAgdIAhAAIAAAIIgMAVg");
	this.shape_1270.setTransform(70.8,264.2);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#081218").s().p("AgCAPIgJgLQAAgRALgDQASARgKAMQgEAEgDAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_1271.setTransform(28.9,255);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#5087A9").s().p("AgJgWQAnAWgnAXg");
	this.shape_1272.setTransform(79.4,128.8);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#60A2CA").s().p("AgVgMIAsAAQgNAZgKAAQgLAAgKgZg");
	this.shape_1273.setTransform(21.1,261.6);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#5087A9").s().p("AgEARIgJgIQADgBAAgSQABgPATAMIAEAhg");
	this.shape_1274.setTransform(88.9,102.8);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#46758F").s().p("AgBgwIAGAwQACAcgHAVQgJg8AIglg");
	this.shape_1275.setTransform(260.2,93.4);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#081218").s().p("AgXAAQAJgHAOgCQAHgCARACIgEATIgWABQgOAAgHgLg");
	this.shape_1276.setTransform(48.6,265.9);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#081218").s().p("AgLAXIAAggQACgJAHgCIANgDIABAOIgDAhg");
	this.shape_1277.setTransform(236.9,188.2);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#528BAE").s().p("AgtgBQAQAAAegEQAagBATAKIguACIgCAAQgZAAgSgHg");
	this.shape_1278.setTransform(152.4,242.6);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#081218").s().p("AgCARQgIgBgDgHIgEgMQABgDAJgCQAHgBAAgHIAAABIASANIgGAOQgFAFgHAAIgCAAg");
	this.shape_1279.setTransform(33.1,244);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#13212B").s().p("AgUADQgBgFACgRIAYAOQANAJAEANQgEACgFgBQgFgJgFACIgIAJQgNgFgCgMg");
	this.shape_1280.setTransform(119.2,101.7);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#081218").s().p("AABAKQgJgBgPgIQAQgLAKABQAKABALALQgLAHgKAAIgCAAg");
	this.shape_1281.setTransform(76.7,239.8);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#081218").s().p("AgSACQAQgYAVANQgDAXgMAAQgIAAgOgMg");
	this.shape_1282.setTransform(72.7,258.5);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#13212B").s().p("AgBARQgJgBABgQQAAgQAKAAQAGABACAGIABAKQgCAQgIAAIgBAAg");
	this.shape_1283.setTransform(124.9,134.9);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#081218").s().p("AgIAMQgEgEgFgSIAbgGQANACgHAZQgJAGgGAAQgFAAgEgFg");
	this.shape_1284.setTransform(93.7,213.4);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#233C4A").s().p("AgQAHQADgVAagIQAHALgGANIgKAVQgQgEgEgMg");
	this.shape_1285.setTransform(221.4,226.1);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#233C4A").s().p("AgPAAQgBgOAGgHQAPABAEABQAJAEgBANQgCAMgKAFQgFAEgQADQADgGgCgQg");
	this.shape_1286.setTransform(222.4,231.6);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#13212B").s().p("AgjAJIAMgUIA7ACIgFATIgfADg");
	this.shape_1287.setTransform(74.9,264.8);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#4A7D9D").s().p("AgDAPQgHgCgSgbIAMAAIAtASQgWALgIAAIgCAAg");
	this.shape_1288.setTransform(154.1,284.5);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#36596E").s().p("AADAVQgLAAgFgEQgJgHACgLQABgJAKgKIAdAJIACAgIgTAAg");
	this.shape_1289.setTransform(231,128.6);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#13212B").s().p("AAAAMQgZgJgIAAIAPgKQALgHAOgBIAbACIAAAcIgKABQgLAAgNgEg");
	this.shape_1290.setTransform(65.6,264.1);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#528BAE").s().p("AgRAYQAGgcgFgGIAMgXIAQAAIAGA4QgSALgIAAQgJAAAAgKg");
	this.shape_1291.setTransform(126.1,162);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#477696").s().p("AgLAEQAAgTgIgHQAIgGALgBIAUACQAAAhgMAVIgJADQgKgHAAgTg");
	this.shape_1292.setTransform(183.6,260.9);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#081218").s().p("AgKAnIgBgsIABgSQABgLAJgEIAMAKQgBAKgDAVQgBASAEAMIgLAGIgEAAg");
	this.shape_1293.setTransform(186.6,207.1);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#13212B").s().p("AgNgmQAJAAAGAJQAIALAEACQgHAFAEAZQADAVgUAEg");
	this.shape_1294.setTransform(128.6,160.3);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#13212B").s().p("AABAMQgWgDgMAAIAAgUQAMABAWgBQAVABAMAKQgMAMgTAAIgCAAg");
	this.shape_1295.setTransform(97.5,262.4);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#60A2CA").s().p("AgHACQAChAgBgKIAJgCIAFAmIAAAVQgGAmAGAfIgEAVQgNgcACgtg");
	this.shape_1296.setTransform(76.5,203.5);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#233C4A").s().p("AgXAcIAEgvQAJAJAIgIQAKgKADABIANALIgEABIgHAdIABAPg");
	this.shape_1297.setTransform(173.9,184.2);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#5590B4").s().p("AgbgQQALADAZgCQAUAEAAAaIgmACIAAAAQgWAAAEghg");
	this.shape_1298.setTransform(149.4,167);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#4E83A4").s().p("AgoAGQAFgPAOgFQAGgCAUAAIAkAZQABAFgFADg");
	this.shape_1299.setTransform(127.9,95.1);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#60A2CA").s().p("AgNAXIgFABIgDgYQgBgNALgIQAIgHAEAJQAFALAFgBQAFACAFgBIABAfIgVACg");
	this.shape_1300.setTransform(35.8,210.8);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#13212B").s().p("AgeADIAvgZIAOANQgPAZgKAFQgEACgDAAQgNAAgQgUg");
	this.shape_1301.setTransform(105.9,81.7);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#233C4A").s().p("AglAJIAJgRQAFgLgDgFIAKABQADAXATAAQAHAGAJgBIARgFQgBAVgQABIgaABIgQACQgWAAAFgQg");
	this.shape_1302.setTransform(87.8,106.1);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#13212B").s().p("AgDgHIgPgBQgJgBgBgBQgCgMAIgCIAPAAQAFAAAfAFIAAAsIgMAAg");
	this.shape_1303.setTransform(104.9,174.2);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#43708E").s().p("AgGAGQAGgTgQgIIAAgLQAggJABAUQABALgCAYQgDAQgQAGQgJgHAGgXg");
	this.shape_1304.setTransform(258.1,192.7);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#477696").s().p("AgQASIgDgSQgDgPAJgGQAGgEAOgCQAMgCABAJIAAAOQAAAQgDAHQgFALgNAAIgBAAQgLAAgDgKg");
	this.shape_1305.setTransform(234.9,233);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#3D6680").s().p("AgKgzIAQgBIAFBnIgOACg");
	this.shape_1306.setTransform(238.2,144.2);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#5590B4").s().p("AgFhdIAJgBIACChIAAAOQgCAIgJAGg");
	this.shape_1307.setTransform(72.1,136);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#081218").s().p("AgNADQgQgPgDgGQAHgJANAAIAUAAQAAAaAZAFQgBAOgKAGQgHAEgPABQAAgOgNgMg");
	this.shape_1308.setTransform(89.6,203.6);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#4A7D9D").s().p("AgEBgIAAjAIAJAAIAADBg");
	this.shape_1309.setTransform(32,158);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#4A7D9D").s().p("AgBAyQgJgKgGACIAKgRQADgKgBgJQAHgLABgTIADgfQALAUgCAjQgDAoAEAOQgEACgEAAQgFAAgFgGg");
	this.shape_1310.setTransform(156.4,248.6);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#3D6680").s().p("AgFhmIAIAAIAEDLIgNACg");
	this.shape_1311.setTransform(58.4,187.1);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#3D6680").s().p("AgGgxQALAhACAQQACAbgPAXg");
	this.shape_1312.setTransform(149,152.8);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#43708E").s().p("AhfAEIAAgHIC/AAIAAAHg");
	this.shape_1313.setTransform(111.7,236.8);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#36596E").s().p("AgbATQAFgZgDgDIAsgZQAUAUgVAMQgVANACAYIgKAAQgUAAAEgQg");
	this.shape_1314.setTransform(109.2,225.9);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#5590B4").s().p("AgPATQgggTAZgXIA4ARQgMAQgHAIQgHAGgIAAQgGAAgJgFg");
	this.shape_1315.setTransform(221,140.6);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#13212B").s().p("AgJAJQgTgKAKgUQAEgHAHgDQAGgCAFAEQAfAbgVAjQAAgKgXgOg");
	this.shape_1316.setTransform(118,118.8);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#13212B").s().p("AgSAaQgBgRgBgIQABgLAQgIQARgKADgIQAHATgFATQgEANgMAWIgEAAQgPAAgCgLg");
	this.shape_1317.setTransform(127.1,142.2);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#5590B4").s().p("AgWgBQADgMAMgOQAfAiABAHQABAHgaAGIgSABQgIgPAEgOg");
	this.shape_1318.setTransform(70.3,244.5);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#081218").s().p("AAOAbIgJgKIgogdQATgRAfAAQAQAaADAHQADAGgCAHQgBAIgIADQgDACgDAAQgDAAgDgDg");
	this.shape_1319.setTransform(39.1,245.3);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#13212B").s().p("AgFAeQgLgMgHgFIABgbIAEgPQAEgHAKAAQAcAGgGAcQgHAeANAIIgIABQgMAAgJgHg");
	this.shape_1320.setTransform(111.7,187.3);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#13212B").s().p("AgLAQQgOgIgBgHIAKgDQAGgDACgRQACgOALABQALABAFAMIAFAWQAIAhgkADQADgMgMgIg");
	this.shape_1321.setTransform(28.4,208.6);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#46758F").s().p("AgEhwIAJAAIAADgIgJABg");
	this.shape_1322.setTransform(72,115.3);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#4A7D9D").s().p("AgUALQgGgMgPAGQAIgZAVAMQAOAIAJgJIAOgTQgCAKARAbQAIAWgsgEIgLACQgFgBgIgRg");
	this.shape_1323.setTransform(112,170.6);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#5087A9").s().p("AgdATQADgRASgIIAJAEQARgFgMgTQgKgUARgFIARAjIgFAjQgDAQgUAEQgWAGgFAHQgGgXACgKg");
	this.shape_1324.setTransform(96.3,132.7);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#13212B").s().p("AgWAMQgJgQAKgMQAGgHASgKIADgCIADACIgDALIAOANQARAhgYAKQgEACgEAAQgOAAgNgYg");
	this.shape_1325.setTransform(118.4,109.4);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#233C4A").s().p("AgYAZQgRhEBCAFQAJAUgNAPQgHADgHATQgGARgLADg");
	this.shape_1326.setTransform(106.1,195);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#60A2CA").s().p("AAzAGQgGgHgJgBQgFgBgNAAIgigLIgbAAQgQABgDgSIAjgBQASAIAaAAIAugDIABgBIgDAfQgCATgHALg");
	this.shape_1327.setTransform(150.7,245.8);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#36596E").s().p("AgXAjIgDgjQgCgUAGgOQAWAHAMAVQAJANAGAcg");
	this.shape_1328.setTransform(126.5,116.1);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#46758F").s().p("AgDB/IAAj8IAIAAIAAD8g");
	this.shape_1329.setTransform(58.2,164.1);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#13212B").s().p("AgdASQgDgMAIgPQAKgRARgEIAJAAQAAAGAPAVQALAQgQAOQgRAEgLAAQgUAAgDgNg");
	this.shape_1330.setTransform(123.8,122.7);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#477696").s().p("AgVANIgNgfQAKgEASgMQAQgGANAUIAMA5g");
	this.shape_1331.setTransform(231.2,258.8);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#4A7D9D").s().p("AgVAdQADgQgLgHQAOgIAAgSQAAgbABgDIAEgBIAEAAIAHAMQADAIgCARQAAAOANAFIAPAPIgFAVIgrALQgFgGACgRg");
	this.shape_1332.setTransform(35.5,218.4);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#60A2CA").s().p("AgCCAIAAj/IAFAAIAAD/g");
	this.shape_1333.setTransform(65,147.1);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#081218").s().p("AgsgRQAKgSAiAOQAKAEAPADIAYAFIgfATQgpgQgZAiQgBgkAFgJg");
	this.shape_1334.setTransform(86.4,242);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#081218").s().p("AgRASQgCgUgCgIQgDgMAIgGQAHgGALABQAaAAgGAcQgDAGgCASQgEAPgMAAQgPAAgDgQg");
	this.shape_1335.setTransform(48.9,254.6);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#60A2CA").s().p("AgJABQgBhIAHg0IADABIADgDIAEBOQgHAlAHA7IAAARQgHAPAKAMIABAfIgRABIgDh8g");
	this.shape_1336.setTransform(259.3,93.4);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#5087A9").s().p("AgGAZIgVgUQAMgUAAgiIAhgBIgGAgQgBARAKANQAKANgFAKQgEAKgPAGQgDgNgKgNg");
	this.shape_1337.setTransform(187.1,263.1);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#4E83A4").s().p("AgaAIQgFgQAGgfQAZgBALAUQAHAMAMAZIgBAWIgUABQgcgJgHgXg");
	this.shape_1338.setTransform(112.9,88.3);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#46758F").s().p("AgYAWQAQgOgLgPQgPgWAAgFIA4gBIAKAMQAGANgHAPIgNAbIgeAEg");
	this.shape_1339.setTransform(128.5,123.2);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#528BAE").s().p("AgdAaQgEgOgGACQgDgcAXgJQAMgEAbgDQATgEABANQABAIgBAQIgfAFQgRAEgKAPQgEAFgCAAQgDAAgCgGg");
	this.shape_1340.setTransform(217,211.9);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#528BAE").s().p("AgogHQADgEAAgFQAWgMALABQAJABAkARIgLAYIgNAMIABAAIgHABQgeAAgVgjg");
	this.shape_1341.setTransform(51.3,199.3);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#081218").s().p("AgPg9QADAEAFAHQAFAHAHgBQAaA4gdAvIgSADg");
	this.shape_1342.setTransform(237.6,85.4);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#13212B").s().p("AgfAAQgHgHAYgUIAdgEQAXAJgFAUQgHAZAGAIQg4gWgHgJg");
	this.shape_1343.setTransform(128.7,129.6);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#081218").s().p("AAHAhQgMgSgJgFIgbgMIAegNQAMgJADgQIATAAIAEALIADAKQABAKAJAUQAGASgMAIQgGAEgFAAQgIAAgIgIg");
	this.shape_1344.setTransform(64.5,234.8);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#5590B4").s().p("AgmAhIABgrQAGgOAbAFQAZAEAFgTIAMAAIABAsIglASQgNAHgNAAQgHAAgHgCg");
	this.shape_1345.setTransform(181.6,210);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#36596E").s().p("AgQAaQgBgVgKgCQgBgOALgMQAEgFASgNIACAFQACADACABQARAJABATQAAAJgDAWQgJgDgHAIQgIAJgCABIgCAAQgMAAgCgQg");
	this.shape_1346.setTransform(236.2,211.7);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#13212B").s().p("AgZAXIgMgGQgFgVAAgGQACgOATABIAogBQAXAFABAdIgWALQgJgJgJAEIgQAJg");
	this.shape_1347.setTransform(214.3,255.7);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#5590B4").s().p("AgTAmQAFgegGgKQAWgDgCgWQgEgaAGgFIAQAAIADA8IgFAcQgEARAIALIgKABQgcAAgBgVg");
	this.shape_1348.setTransform(129.8,164.5);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#60A2CA").s().p("AgJBDIAAhtQAEgDgCgUQgBgPASACIAAA4IgDAEIADAIIAABag");
	this.shape_1349.setTransform(283.5,179);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#43708E").s().p("AAGAMQgZACgLgDQgMgLAEgOQACgHAKgQQAFgGAGABQAHABAGAKQACAEAZAHQAUAFgHAXIgDATQgCALgHAFQAAgbgUgEg");
	this.shape_1350.setTransform(149.7,164.2);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#233C4A").s().p("AgLAWQgMgggHgQIAOgZIAhADQgIATACANQACAQASAIIgBAsQgcgFgNgZg");
	this.shape_1351.setTransform(174.7,208.1);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#13212B").s().p("AgXAZQgLgggDgDIAGgjQAOgCARAbQAPAXAXgKQgKAigVATIgCAAQgWAAgGgVg");
	this.shape_1352.setTransform(102.5,135.6);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#233C4A").s().p("AgWAXQgSgHgDgTQgCgNALgGQALgHAMADQASAEAPALQAQALAGAQQADAKgMACIgWAAIgEAAQgUAAgLgFg");
	this.shape_1353.setTransform(181.3,243.7);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#5590B4").s().p("AghADQgDgRAVgIQAJgCASgJQAPgDAGAXQAKAqgzgCIgSAHIgHgfg");
	this.shape_1354.setTransform(50.5,245.2);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#13212B").s().p("AAFA8QgKgBgCgIQgBgGADgLQACgMgGgKIgNgRQgFgOAQgOQAQgPgCgLQAYApgDAyQgBAOgCAFQgDAJgLAAIgCAAg");
	this.shape_1355.setTransform(107.8,121.1);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#3D6680").s().p("AgDCcIAAk3IAHAGIAAExg");
	this.shape_1356.setTransform(38.5,181.8);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#5590B4").s().p("AgdAnQgFgLAOgcQAMgLgOgKIAJgXIALACIAEAIIAHgJQASACAEAUQgLANACAPQACAJAIATQgPABgHADQgQAGgKAAQgKAAgDgGg");
	this.shape_1357.setTransform(245.1,235);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#5590B4").s().p("AgHAfIgNgNQABgGgMgPQgKgNAHgOQACABAlABQAZABAGAUQAFARgOALQgMAKgUAAIgCAAg");
	this.shape_1358.setTransform(71.1,228.5);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#081218").s().p("AgDAiQgigIAEglQAAgFAFgHIAIgLIASgBIALASIAUASQAKAMgHAOQgFAJgOAAQgIAAgIgCg");
	this.shape_1359.setTransform(70.5,250.8);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#233C4A").s().p("AgqAgIAjg0QAdAAADgYQAZARgKAYQgPAkAAAEIgqAIg");
	this.shape_1360.setTransform(105.2,213.2);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#13212B").s().p("AgNAHQgUgaAGgUIAagKQAOgGAGASQALAggBANQAAAbgYARQABgQgTgdg");
	this.shape_1361.setTransform(236.6,201.3);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#43708E").s().p("AgMApQgPgNAAgWIAEglIADgIIADgIQADAPALACQAFACAPgFQAKAeABAJQACAWgRAQQgEAEgFAAQgHAAgJgHg");
	this.shape_1362.setTransform(189.4,227);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#43708E").s().p("AgYA5QACgFgCgDIAChBQAMgDAGgRQAGgTAHgEQARAkgCAaQgCAggaAZg");
	this.shape_1363.setTransform(107.3,200.6);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#233C4A").s().p("AAPgRQADgUgSgTQgZgWgDgJIAYgXQAQACAHALQAHAKAAARQAAAeACA8QABA1gFAmg");
	this.shape_1364.setTransform(281,62.1);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#081218").s().p("AgGAdQgCgSgIgGIgXgtIAOgLIARADQAJACAGACQAaALAEAGQAKANgYAUQgHAGgEAPIgHAZQgIgGgDgRg");
	this.shape_1365.setTransform(79.9,89.5);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#5590B4").s().p("AgcgYQAAgNAIgFQAFgDANgBQAGgBAIAFQAJAFgDAEQgLAPAMAUQAOAXgFALQgegCgXAOIgDhIg");
	this.shape_1366.setTransform(153.9,117.1);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#4E83A4").s().p("AgJAgIgUgWQgLgMAEgQQAEgVAUABQAaACAEgCQADAMARAEQgBAGgEAEQgGAHABANQACARgDAFQgFgMgKANQgGAIgFAAQgFAAgFgHg");
	this.shape_1367.setTransform(218,230.7);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#36596E").s().p("AgECJIAAkRIAJABIAAEQg");
	this.shape_1368.setTransform(32,181.2);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#36596E").s().p("AgQhpQAQAMADATQACAMgBAWIgCA5QAAAjAQAVQgBAFgCAEQgLgCgIAJIgMARg");
	this.shape_1369.setTransform(45.8,190.3);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#5590B4").s().p("AgpAGIACglIAqgIQACAOARgDQARgCADAKIgEAjIgtAZQghgEgBgeg");
	this.shape_1370.setTransform(107.4,220.9);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#3D6680").s().p("AgUA0QgQgWAFghQAEgiAUgQIAKAOQgEASAUAbQAUAbgJAVg");
	this.shape_1371.setTransform(119,133.9);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#5590B4").s().p("AASAzQAAgSgQgEQgWgHgCgCQgCgNgVgMIACgQIALgBQAPAGAJgCQALgCAIgMQAEgDgBgDIAJgQQAKgBABAKQALAHgDAQQgBASAEAFIgLAWQgFAVgFAIQgDADgCAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAgBg");
	this.shape_1372.setTransform(29.1,223.5);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#36596E").s().p("AgHiHQAPA8AABOQAAAtgCBXIgNABg");
	this.shape_1373.setTransform(149.4,193.5);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#46758F").s().p("AgFB1QgLhiAIh/IAQgLQAHCWgFBZg");
	this.shape_1374.setTransform(248.3,115.7);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#13212B").s().p("AAYAhQAAgRgIgHQgJgGgQgBIgfgCQgPgDgMgJIAJgUIBbgEIAjA7QgIAMgMACIgEAAQgIAAgMgEg");
	this.shape_1375.setTransform(23.4,217.9);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#233C4A").s().p("AgGBnQgChYABgPQACg5ANgtIAADNg");
	this.shape_1376.setTransform(44.7,119.8);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#233C4A").s().p("AgJAUQgQgagVgDQAKgEAEgSQAFgUAHgHQALAFAUAaQASAVASAEQgbACgBAUQgBAMADAcQgMgIgSggg");
	this.shape_1377.setTransform(32.4,267);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#477696").s().p("AgCgQQAgAcAFgoQAKAEAKAPQAMASAHAGIg9AIIghAAIgbgCQgPABgLAHQAAhNBHAgg");
	this.shape_1378.setTransform(71.1,260.4);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#3D6680").s().p("AgEBxQgFhBACgwQADg9ANg0IAADjg");
	this.shape_1379.setTransform(44.7,155.7);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#233C4A").s().p("AgPAWQgMgKgVgBQgXABgMgBQgJgOANgHQASgJABgDIAsgBQAPAOAkgBQAmgBAPAMQgMAUgZACQgegCgOADg");
	this.shape_1380.setTransform(102.5,260.2);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#233C4A").s().p("AgKAAIAChyIATAAIAADkIgQABQgFgxAAhCg");
	this.shape_1381.setTransform(19.8,130.1);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#5590B4").s().p("AgIiBQAMA4AEBEQACAzgCBKIgQALg");
	this.shape_1382.setTransform(248.3,91.7);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#477696").s().p("AAKBFQgEgCgHgMQgHgIgJAAIgLgIQgCgcABgMQADgWARgOQAQAJAGgRQAHgVAHgCQADAtAAAYQABAlgFAfg");
	this.shape_1383.setTransform(129,151.7);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#528BAE").s().p("AAuAuIgjgLQgEgPgNgFIgbgFQgCgJgbgMQgWgMAGgXIAlAKIAWACQAFgBAEACQAQAdAHACQAHACAagNIgugUQARgDAXAAIAoADIgLAsQgQAFgBAJQgBAIAGANg");
	this.shape_1384.setTransform(152.4,286.4);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#43708E").s().p("AgIAkIgbgnQAMgjAJgIQAQgQAfAWIAAARIADAsQACAbgOAFIgGABQgNAAgNgSg");
	this.shape_1385.setTransform(254.2,53.1);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#5590B4").s().p("AgzAmIgLgjQAagBAEgZQAFghAIgHQAGAJAYAJQARAMgWAaQgKAGgEAEQgHAIADAKQADAKAIABIAPgCQAcgDAVAXIhOAOg");
	this.shape_1386.setTransform(133.6,89.6);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#5087A9").s().p("AgGAeQgVgXgcADIgQACQgJgBgCgKQgDgJAHgIQAEgFALgGQAKgCAnAJQAdAGASgPQAqAIAJAjQggAKgNACQgTAEgRAAIgJAAg");
	this.shape_1387.setTransform(140.6,91.6);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#477696").s().p("AgnAtQgLgBgWgOIABgEQABgMgNgEIALgKQAdAKARgOQAMgKAKgeIBYANQACASgJAHQgIAGgSAAQghAEgXAaQgOAPgQAAIgEAAg");
	this.shape_1388.setTransform(271.6,239.7);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#5590B4").s().p("AhPA5QgOhTBVgGIAMgRQAIgJALACQAXAoAkgFIgCATQgDAJgIAGIgWgMQgSgNgXAMQgbAPgLgDIgIgMIgEADIAMAJQADAXAVALIgDALIgqAAIgIgTIgIAUIgDAAIgHgBg");
	this.shape_1389.setTransform(44.9,204.2);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#5087A9").s().p("AglAgIgFgwQgNgdAbgHQAOgEAVACQAQgBAHAXQAHAcAKAEQgHAFgQAcQgMAWgQAAQgaAAgHgXg");
	this.shape_1390.setTransform(168,248);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#477696").s().p("AAoBsQgEgIgcgSQgWgOAFgXQAVg+gqgpQgOgPgDgIQgFgQAWgKQAEAQAOAIQAJAGASAEQAIATAFA3QAFAwAPAaIAAAhIgIAAg");
	this.shape_1391.setTransform(230.8,179.6);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#43708E").s().p("Ag6gWQAXgOAfACQAJALAJADQALADAOgHQAbgOALAeQgHAfgOAIQgQAJgegTQgQgKgXAHQgZAMgNAFQgWggAfgZg");
	this.shape_1392.setTransform(157.2,124.2);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#528BAE").s().p("AgGAJQgCgLgCgEQgEgGgLACQgBgRATgsQAPglgKgaIAJgCIALACIAIALIAAAXQgJANAIAPIACDQIgRABg");
	this.shape_1393.setTransform(236.1,125.3);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#4E83A4").s().p("AgHDsQgJiEAHhhQANghgCg3QgChLAAgQIACglIABglQAIBDAABqQAACPACAdQABAegBAsIgCBKg");
	this.shape_1394.setTransform(271.1,115.5);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#5590B4").s().p("AgRAhQABgdgZgNQgggMgMgLIAfgUICBALQAUAZgPAEQgVABgHACQgTABgIABQgNADAIAVIAHATQADAKgLAFQgEACgEAAQgMAAgQgUg");
	this.shape_1395.setTransform(96.8,246.3);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#46758F").s().p("AhKAFIgKgWIAKgWQAVATAIACQAQAFANgZQAlAIASAIQAeANAQAYQgaALgkAGQgRADgtAFQgBgdgigGg");
	this.shape_1396.setTransform(83.3,76.9);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#36596E").s().p("AgCFtIAArZIAFAAIAALZg");
	this.shape_1397.setTransform(26.5,162.1);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#43708E").s().p("AAyBQQgFgIgDgDIgCgdQAFgFgCgHQgCgFgFgBQgHAAgBAGIgBAMIgdgWQAMgSgFgFQgFgEgogGQgYgMADgVQAJgYAEgNQAxAwA7gCIADB9IgCAAQgHAAgEgGg");
	this.shape_1398.setTransform(231.8,72.3);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#4E83A4").s().p("AgKhwQAKgLgJgLIAAhrIAPAEIADD4IACARIgBDTIgNADg");
	this.shape_1399.setTransform(248.7,151.5);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#3D6680").s().p("Ag/AvQgBgYAWgNQAVgMgUgUIAEgkQBIAmAdBMQgaADgYAAQgqAAgjgMg");
	this.shape_1400.setTransform(115.4,224.7);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#5590B4").s().p("AACBRIgNgBIgVgMIgEg+QgMguAIgyQAQgCAQAUQAQAVAOgBIABAQQgMAHAAASQgGALAGAFQADADAMAEIAJAPIgBAEIAKAKQAAAPgKANIgWAWg");
	this.shape_1401.setTransform(174,115.2);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#3D6680").s().p("AAGB3QgBgVggAJQAWgfADgtIgDhPQgDg9AKgsQAVA8ADBXQABAwABBkIgXAMQACgZgBgKg");
	this.shape_1402.setTransform(259.2,178.7);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#3D6680").s().p("AgHDYQgCitABg3QADh+AOhYIAAHEIgDABQgKAAgDgLg");
	this.shape_1403.setTransform(72.1,173.8);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#60A2CA").s().p("AgHjSQAMAlACAuQACAhgEA0IAAAmIgCAkQgCAPADBLQACA3gNAig");
	this.shape_1404.setTransform(270.8,95.1);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#4A7D9D").s().p("AgnAPQAOgngDgXQAKADAFgBQAGgCABgLIgBgUQAaAPAHAdQAEAQgCAmQABAHAPAIQANAIgEAMIgPAUIhaAEQgCgWAPgqg");
	this.shape_1405.setTransform(22.8,206.7);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#13212B").s().p("AACB/QAEgKgNgVQgNgTAMgOQAOgUgBgUQAAgUgOgQQgEgQgEgIQgHgOgTATIgOAAIgEgiQAMgIgBgSQAAgZADgKQAKAmAbAHQANADAngHQgQAgAAAxIACBSQgBANATAHQATAHgEAOIgSgBQgLAAgFAKIgXABg");
	this.shape_1406.setTransform(96.1,108.1);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#233C4A").s().p("AgNGJQAKiFgCjTQgCkXABhAIABhkIANABIABDpQAACJgCBeQgBAVAHCHQAEBfgLA9QgEAMgIAAIgHgCg");
	this.shape_1407.setTransform(7.9,159.9);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#43708E").s().p("AgmA0QgNgvAHgZQAJgjAqgQQAYAGAHAVQACAGADAjIgCAjIAGAgIgtAHIgHABQgVAAgMgUg");
	this.shape_1408.setTransform(292.2,242.4);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#36596E").s().p("AgIABIABkEIAQgCIgCIJIgGACQgIhwgBiVg");
	this.shape_1409.setTransform(20,167.7);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#4E83A4").s().p("AgMBpIABgGQAEgOgTgGQgTgIABgNIgChSQAAgxAQggQAeAGAHAQQAJAQgRAYQgMAQAIAGQAEADANAEIABgBQgRAhAEAPQAEAUArgBQABALgQAPQgQAOAEAOg");
	this.shape_1410.setTransform(103.4,110);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#081218").s().p("AAQBlIABAAQg/gzgIhSQgHgUASgTQAXgWACgJQAOgFAGANQAJASAEABQgMAPANASQAOAWgDAKQgnABAQAgQAagEAJgTIAQgJIACABIgHAfIgLAZIAAAIQgSAFALATQALAUgQAFg");
	this.shape_1411.setTransform(93.7,121.9);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#528BAE").s().p("AAjA2QgSgXgggGQgngBgUgDQgIgTgBgIQgCgQAKgNQAlgbAgABQAFAZAcABQARAbAdgHIAMAYIAAAXIgLALIgRAQQgEAEgFAAQgGAAgHgJg");
	this.shape_1412.setTransform(255.8,236.4);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#43708E").s().p("AAOAQIgzAAIgDgEIAKgMQAGgJgGgHQgFgIgIgCQgJgBgIAGQgPAOgRgIQgTgMgJgEIAEgVIBwgEQAIAAAZAJQAVAHAOgEIA5AEIgCAVQgGAJgQAGQgSAEgJAFQgeANAKAnQgKgjgagGg");
	this.shape_1413.setTransform(62.7,270.2);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#5087A9").s().p("AAfBhQgMgJADgIIABgBQAKgBgBATgAg2hgIAzACIAGAWQAHALAQgDQABAIAAARQAEAMATgCIAFAVQgRAMgDAXQgBANACAcQgLAHgCAEQgFABgHAFQg+hZgDhcgAAXBPIAAAAg");
	this.shape_1414.setTransform(122.5,148.8);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#5590B4").s().p("AgIEpIgCouIgBgUQACgKAKgFIAJCBIACHQg");
	this.shape_1415.setTransform(282.5,90);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#46758F").s().p("AgIABQgEiqAFhrIARgCIAAIsIgNABQAAg1gFjhg");
	this.shape_1416.setTransform(259.4,133.7);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#477696").s().p("AAFA3QgagMgVAPQgJAHgFgLQgDgIgBgOIgChZIAXgLQAKALAYAAQACALAKAHIATALQA7ApgjA3IgDABQgMAAgegOg");
	this.shape_1417.setTransform(175.8,138.1);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#5087A9").s().p("AgvA7QgIgngBgSQgDggAQgKQAEgDAZgaQARgTASgBIAEALQgGAVATAaQAVAdgBAPIgEALQgTAMgEAFQgLAMABAQQgZAQgMAEIgGABQgRAAgIgfg");
	this.shape_1418.setTransform(231.3,205.2);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#13212B").s().p("AgJBUQgCgNAIgTQgBgBANgbQAIgQgegDIAIgWQAEgOgbADQgYANAGAYQAKAkgBAEIgOAZQgWgeAAg9QAAg+AWgdIAnAAIgDALIgLAAQgNAFACAIQABACAKAKQAEAKAVAQQATANABAQIAXAgQgPAHACAPIAEAaQACgBAJgPQAHgKAMADQACAIABAQQABANAHAIQgFATgagEQgbgFgGAOQgRgJgCgQg");
	this.shape_1419.setTransform(176.8,198);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#5087A9").s().p("AgKjlIAOAAQgEBCAJCSQAJCIgHBKQgSgBABAPQACAUgEACQgIkpAGihg");
	this.shape_1420.setTransform(283.4,151.8);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#46758F").s().p("AhJA0IgBgiQAHgGADgKIADgRIgBgBIAMgMIALgYQAQABAHgLIAOgCIAeADQAsAVADATQACAUglAeIguAiIgMACQgXAAgggNg");
	this.shape_1421.setTransform(59.4,203.6);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#46758F").s().p("AACBiQgJgLAAgRQACgcgPgcQgHgNgagiQAcgZAGgMQAGgLgCgYIAIgIQAOgEAEAHQADAFgBAPQgBALAEADQAFAEAHgOIATgDQABAbAEA1QADAugEAgQgJAIgDANQgCAHgBAQIgKACQgRgHgHgKg");
	this.shape_1422.setTransform(233.2,100.2);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#5087A9").s().p("AhhBhQgJgegBgMQgCgVAwATQAaALANgYQAIgQABgdQABgXAKgIQAIgHAVABQgDgSAAgFQgBgOAFgKIAWgKQAEABAbgIQASgFAJATIAABUIgCABQgtgSgOAIQgPAJgQA5IgLAVIgBAMQgjgPACAlQgaAEgJAAQgTAAgOgLg");
	this.shape_1423.setTransform(213.6,266.7);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#233C4A").s().p("AgHl4QAKCrADDNQADCUgCDkIgOABg");
	this.shape_1424.setTransform(14.5,157);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#5590B4").s().p("Ag0BjQANgDAEgCQAIgFAAgJQAAgJgJgEIgQgCIgBjGIAsAEQADAJgLAZQgEAUAkgHIAFAIQgcAcAUAQIAUAMQANAHAEAGQAHAMgDATQgFAbABAEQgfgCgXAjQgbAogUAEgAgYgDQACANAJAFQAHADANgCQABAAACgEQABgBAAAAQAAgBAAgBQABAAAAgBQgBAAAAAAQgKgPgMAAQgGAAgHAEg");
	this.shape_1425.setTransform(7.1,273.1);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#5590B4").s().p("AhtA0QgSgOAMgoQANgFAZgMQAXgHARAKQAeASAPgIQAOgIAHggQAngCATgLQgBAUACAIQAFANARAFIAKAJIAAAMQgTAEgDAUIgXALIhBAGQglAEgaAEQgOADgLAAQgVAAgKgIg");
	this.shape_1426.setTransform(162,128);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#43708E").s().p("AAbB2QgbACgMgJQAAgSALgIIAKgCQAFgDgCgHQAAgBgNgDQgPABgRgUQgQgVgQADQgHg6AHhEQAggvA2AkIAMAXIgBAVIgLAEIgbgDQgQAAgGANQgGAPAMAJQAHAGAQAIIAUASQAAAfAjANQACAEgCADIAMAhIABgCIgCAfQgMgHgcADg");
	this.shape_1427.setTransform(176.5,102.9);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#3D6680").s().p("AgKBWQgGg3gHgUIgMghQAEghgPgYQAZgNAgABQAXgDAAgaQAAgeAJgJQgBA1AEBmQABBagPA9IgOACQgHADgCAIQgOgZgFgxg");
	this.shape_1428.setTransform(234.8,171.1);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#4A7D9D").s().p("Ag4BDQAIgNABgJQACgFAQgRQAMgMgMgLQgLgJgRgBQgSgBgQAKQAHgJgCgaQgCgWAMgKQAfgaAkAJQAiAJArAuIgWAPQgGAWAWALQAbAOADAJIgBAOIghgLQgTgNgNABQgPAAgLAWQgCAFAEARQAAAOgUgHQgLgDgPADIgYAGIAMgWg");
	this.shape_1429.setTransform(139.9,283.3);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#13212B").s().p("AgVBkQgTABgHgBQgLgQAYgFQAWgEgRgTQAHgagNgCIgcAHQgFgIgEgWQgEgTgKgJQAPAAAHgFQAKgGACgOIAKgKIAhAIQASADAPgGQATgFgCgKQgBgEgMgOIABAAIgBgPQADAFAFgCIARgPIAOAPIgBBBIgIAFIAIADIATAEIACAVQgWAEgDASIgjA1QgKAFgBAMIAAAVQgHgBgEACQgIgNgSgBg");
	this.shape_1430.setTransform(98.2,208.9);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#528BAE").s().p("AgOBbQgTAAgLgQQgKgOgNAKQgPAQgJAEIgKgnQgEgWAGgSQASAAAIgGQAJgHgCgRIAEgbQAEgPAKgJQADACAEANQADAJAJgBQAPgEAFgNQACgGACgVIBbAAQADABAJAAQAHABgBAKQgegFgKALQgMALAKAdQgrARgJAiQgHAaANAuQgDgBgbABg");
	this.shape_1431.setTransform(286.7,238.5);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#5590B4").s().p("AhMBcIglgCIABgMQAZgDgOgSQAQg5APgJQAOgIAtARIAJANIAFgGIgMgHIAAhUQAFgQAIABQAGAAANAKIAMAgIgFANQgDAIAGADQAHAFAHgHQAHgJAEgDIAiANQABAKAHAJIAOAOQg0AFgIAMQgIANAXAnIAAAMQgJAHgNACIgYAAIgLgVIgLgMIgHgNIgGAFIAMAJIABAiIgLABQgPgMgKAAQgNABgHATg");
	this.shape_1432.setTransform(225.4,265.9);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#43708E").s().p("AA8BBIgKghIgDgKQgDgGgGABQgIAAgCAIIgCANQgfgBglAcQgDgVgSgCIgMACIgLgCIgUgHQAUgVgGgmQgGguAGgPQAMAAAVAKQAWAMANAAQAQAAgFASQgGAWAPAIQAPAEAugUQApgHAJA5QgNANADAUQACALAHAWIgLABQgWAAgNgVg");
	this.shape_1433.setTransform(252.5,226.3);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#3D6680").s().p("AAmB+QgCgEAAgXQAAgQgLgFQgKgEgFAJIgHATQgJATgdgEQgegDgKAMQgYhEAlgcQAggZAMgiQAJgcgCgtQgBgGACgKIADgRIANgCQAKAdAAArIgBBHQAAAGgCATQACAOAXgFIALALIAYgmQAQAHgGAVQgGAWAJAHIgBAtQgZADgLAUg");
	this.shape_1434.setTransform(249.1,189.3);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#4E83A4").s().p("AAVBwQgDgIgOgPQgLgNgCgKQAVABANgLQAOgLgFgSQgGgUgZgBQglAAgCgBQgHAOAKANQAMAPgBAHIgXAEIgTAAIgDgFQgPgfgDgzQgEhKgCgLIAOgLQAWAUgBAkIAhANIABAIIARAeQAKAKATgbQAQADAHgOIAKgXIAJADQABBbAXBNQAGAVgPgCIghAFIgGAAQgPAAgGgOg");
	this.shape_1435.setTransform(71.3,224.9);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#5087A9").s().p("ABGBYQgHgDgCgHQgOgtgrgOIhRgNQgYgxAKgTQAKgTAzgCIA1gDIA2gDQAIAHAAAUQAAATAKAHIgBAIQgVAFgCAWQgMAQAGASQADAGARAYQANAQgOAJQgDACgEAAQgDAAgEgCg");
	this.shape_1436.setTransform(173.8,267.6);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#5087A9").s().p("AAmCCQgJgIgNgDIgYgDIgBgHQACgcAMgOQAZgbgKgNQgHgLgggBIgiAAQgIgGgCgJQgCgGABgMQAlgfgCgTQgDgUgsgVQAmAAAKgCQAagDARgPQADAMAOgCQAHALAHgEQAFgCAJgHQAAAJgCBCQgBAtANAbIAAAMIgJAEQgEADgBACQgBAGAFAEIAKAEIAHAWIgGAMIgKAXQgGAMgMAAIgFAAgAALgJIAEAHIADgEIgCgFg");
	this.shape_1437.setTransform(69.9,208.4);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#43708E").s().p("Ag+CbIgFk1QAIAGACASQADARAJAGQAKAOAYAZQARAYgEAaQACAFgEALIgIARQgHAVAmgHQADAOARAGQAVAHAEAFQgCAJgWAXQgSASAGAUQgWgPgaATQgcAUgPAAIgDAAg");
	this.shape_1438.setTransform(85,105.5);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#5590B4").s().p("AgnByQgYgUgTACIgBhmQAngXgogXIADg3QAOADAfgXQAbgTAWAPQAJBUA/AyQgSAIgDARQgCALAGAWIgDALQgxAMgBACQgXANALAoQgPgDgbgWgAglAlIgaAbIAlAFQARAAAJgQQACgGgCgHQgBgIgIgCQgEgCgFAAQgKAAgJAJgAgwhbQgOAOAIALQAFAFATAJQABAGAAANQAAALALAEQAAAAAAAAQAAAAABAAQAAAAABAAQABgBAAAAQAEgCAAgCQAEgMgHgHQgEgGgMgEQABgDATgKQALgHgJgPQgHgKgNgBIgEgBQgKAAgGAIg");
	this.shape_1439.setTransform(86.9,131.8);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#528BAE").s().p("AAyBfQgNgVgXgHQAFgagHgKQgJgNgZAHIgPgOQAHAAAPACQAMgBAEgKQAEgGgGgHIgMgNQgEgNgNgKIgZgOQgMgMgBASIgMAWQgKgVgBgdIACg0IAUgBQAKAFAWAHQASAIAHAPIAWAAIBOALIAEBxQAABBgLAxIgQAAQgHgcgIgOg");
	this.shape_1440.setTransform(122.8,105.9);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#5087A9").s().p("AgTBQIAAAAIATgDQALgDgDgLQgEgOgPADIgeADIAWAZIgjALIgBgBQgGgjgBgRQgBgeASgWQAKgNgDgTQgDgQgNgRQAVgTAKgjIAGgVQAFgKAPASQAOAQAIAYQAEANAGAdIAUBuQAKBAgDAxQhLgBgGhOg");
	this.shape_1441.setTransform(108.7,148.2);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#528BAE").s().p("AgxA9QgFgUgRgHQgJgEgagCIgYgCQgMgEAEgUQAQgDgDgLQgHgMgBgGQAzgGAdgHQArgKAfgUIAggSQATgGARAWQABACASgJQAUgKAMAEIgBAcIgHAZQhDgFARBEIgRAPIgBgJIgHAFIAAAQIgtgiIgOAaQgKATgBARIgLAKQgZgGAAgag");
	this.shape_1442.setTransform(95.4,194.7);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#46758F").s().p("AhxBeQAAgLAOg/QAKgtgOghQgHgRAPgMQARgMAeAHQAwALArAjQAVARAyAzIgLAPQgHAJgCgBQgegMgvARQgzARgUgDQgSgDgOAVQgKAOgKAAIgHgCg");
	this.shape_1443.setTransform(59.8,80.8);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#43708E").s().p("Ah9ArQACgOAVggQAUAZARgIQAKgFgCgJIgIgTQgHgWANgDQAIgBASgBQAHgCAWgBQANgEgSgZIBnAAQAZAlAFAaQAHAjgZAgQgIALgLAFQgLAEgJgGQgcgVgfAGQgTAFghAWIgtABQgmgMACgYg");
	this.shape_1444.setTransform(105.4,250);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#528BAE").s().p("AAXBbIACABIACgQQgIABgsgJQgfgHgUAVQgOAEgHgBQgKgCgEgPIgLhvIANgGQACALAIAEQAHADAMAAIAKARIAJgcQAOgGAmgCQAbgHgOgrQA+AEAgASQANAIgCAbQgBAaAOAIIgRA/QgIAkgTAIQgHADgIAAQgQAAgYgKg");
	this.shape_1445.setTransform(198.8,215.4);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#528BAE").s().p("AB3CcIgTgVQgMgLgOgDQgJg5gpAHQgtATgQgEQgPgHAGgWQAFgTgQAAQgNAAgWgLQgVgLgMABIgGhCQAPgGgPgGIgKgNQABgEgCgGIABg5QAJgMAfADQAdADAJgSIAjAYIAMAMIABAKQgDAgAXARQACALANAIQARAKADADQACAIATAVQAQAQgDATQgCAMANACQAHABAQAAIAMALQABAWAVAOQACASgEAWQgCAMgHAag");
	this.shape_1446.setTransform(255.8,216.1);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#528BAE").s().p("ACfBSQgMgMgXABQg2gkghAvQgGgZgVgBIgkAEQgdADgrAGIhJAJQgJgkgpgIIBTgvQAxgdAegYQAPgMAOgDQAKgBATACQAmAlAIBEIAQgOQAJgIAKgBQAGACADgEIACgIIAXguQANgbAVALQAdARAFgBIACAuQA/AbgpA0QgQgQgIABQgKABgBAag");
	this.shape_1447.setTransform(166.1,85.2);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#528BAE").s().p("AiuAAQgFgZgaglQAbgFAMACQAUADAMASQALgbAaAEIAsAGQBNgOBCASQAEASAQgBIAbAAQADARANAIQAJAGATADIAXgNIABAbQACAJgEAKIgJARQgoAYhBgEQhcgEgNABQgXADhBgDQg4gCghAJQAZgggGgkg");
	this.shape_1448.setTransform(135.3,248.4);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#4E83A4").s().p("ABMCPQgEgXgUABIggACQgVgdgcAAQgZABgYAXQgPAPgNADQgNADgRgHIgCgWIAKgFQAFgDgCgGQAAgCgFgDIgHgEIAChkIASgDQARAPAGgYQAIgCADgIIADgOQAFAAAEgCQADAAAfASQAVAMANgdQASAJADAAQAKABACgUIgDgNQAKgLAEgcQAEgcAJgMQAaAjAHANQAPAcgCAcQAAARAKALQAHAKARAHQALAZgQAmQgTArABASIgFAgg");
	this.shape_1449.setTransform(222.4,112.1);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#36596E").s().p("AhbA2IADlJIAAhrQASAdABAqQAAAYgEAxIgDCGQgBBQAAA1QAAAhADAKQAHAYAaAIQAPAFAGgQQASATAkAAQArAAAPAHIAAAAIAAAAIAAAAIAAALQADAXgOApQgPAqACAVIgJAUQglAZgVA4QgRgFgWANQgcAQgKABQgRiDACjGg");
	this.shape_1450.setTransform(10.7,188.9);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#528BAE").s().p("AifBZQgfAAgPgBIgWACIABi6QAJAFAPAOQAPALAQgIIADALQACAFAHABQACgBADgEIAFgHIA5gFIAEAVQAEAKANAAQAMAAAGgJQAEgHADgNIALABQACATACAFQAEANAQAHIAAgqQAwgUBMgLQAMAsAdgHQARgEAjgRQAvAfg3AQQgIACgLAAIgUABQgfAAgTARQgDgDgDABIgSgNIARgNIgFgFIgNAQQABAIgIABQgIACgCADQgVgBgFAMQgEAIAEATIgHAFQgEADAAACQgBAHAFACIAKAFIAAAhQgMADAAASIgMgBQgGgCgDgGIAEgDQABgDgCgCIgOgCQgIAAgEAJIgLADQgGgBgFADIg1AGQgKgPgGARIAAAAIgMACQgRgKgbgCgAA/g2IACAHIAEgDIgBgEg");
	this.shape_1451.setTransform(24.6,245.8);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#5087A9").s().p("AhfCYQgMgDACgJQAFgJACgFQAFgPgJgGQgEgEgRgCIABjjQAUgCAXAUQAcAWAQADQgNgoAYgNQACgCAwgMIAXAYQASARALAYQALAZgHALQgbAnATASQAEADAtAVIABAAIAAAZQgZADABATIACAhQghAfgNABQgLAAgqgZQglgXgFgBQgagFgGAuQgBAKgHAFQgEAEgGAAIgGgBgAALAiIAGAMIAFgKIgHgLIgEAJg");
	this.shape_1452.setTransform(90.9,154.3);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#5087A9").s().p("Ah9BzIALgHQAWADACgPIgCgZQABgQgIgIQgJgJgSAEIgLgHQgCgDgEgDIgQgMIALgVIAsgLQAIAIADgIQAHgNgNgJIgPgPQgEgLAPgLQAPgLgEgLIADgtIAqgBQAVAZAXgIQAGgDAggYQApAQAagFIAjAjQACALAEBKQACAzAPAfQg1gMgJAAQggADgKAsIgKABQgVgGgWARQgaAVgJACQgjARgRAEIgHABQgXAAgLgmg");
	this.shape_1453.setTransform(48.5,224.1);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#46758F").s().p("AivCxQgLg7gBhOIADiJQARADAEADQAJAGgFAPQgBAFgGAKQgCAIAMADQAKADAHgFQAGgGABgJQAGgvAaAFQAGABAlAXQAqAaAMgBQAMgBAggfIAGABIAFgCQAKAAgCgJIADgsIAAgZIAjgLQAFBNBLACIAKAMIgMAYIgOATQgJAJgPgIQgVgMgIAaQABAFgBAGQgggGgFAAIgPABQgIACACALQABACAJAAIAPABQgDATACAFQADALATgCIAMgBQAQALAHAVQAFAMAFAaQgKgBgDAIIgFAOQgMgDgUAKQgRAJgCgCQgQgXgUAHIgfASQggATgrALQgcAHg0AGgAiqANQgBAFgCATQgBASALADQAIACAUgEQAZAGAVgMQAVgMgEgWQgGgcgbAKQglANgKgFQgFgCgDAAQgHAAgDAJg");
	this.shape_1454.setTransform(96.9,173.9);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#5087A9").s().p("AiABJQAQgKgIgGQgfADgNgDQgLgDgrgSQgJgEgPgCIgagDIgOgPQgHgJgBgIIgMg6QAogQAqgGQArgHAiAFQAdAFA8gBQA2ADAeAcQAKAJALgCQAFgBASgKQBog0BmAiQABAdAWAGIgXBNImUA0QgTgIAPgJg");
	this.shape_1455.setTransform(263.7,263.1);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#5590B4").s().p("AjSCwIAOgrQA7gMAEgLQAFgMghg3QgIgOABgMQAFgmgfgLQgPgFgKANIgQAWIgfgBIgCguQAUgGABgOQAAgHgJgVQA9ARALACQAYAFARgLQAQgLAGgYQADgMgFgJQgFgKgLAFQgUAKgtgDQgpgCgVANIgBgiIBngFQAMAAAXADQAUAAANgNIAXADQAKAKgCAcQgDAcgMAOQgOARgOAdIgaA6QAsgkAlAYQAFACAYAVQASAPAMAEIABABQAIAUAUgCQARgCAFgKQAHgNABgRQACgSgGgLQgTgoADgqQADgkATgtQALAJAWAOQASAOADATQgSABgHADQgMAEAAAQQAAAEAGAEQAFAFAFAAQARABACgNQAAgRACgIIAygFIgOA2QgJAggTAPQgLAKgBAOIAEAcIgOAIIAGAFIAIgNQAIAAAMAJIAUAQQAYAPAQgoQAQgJARAAQARABAMAKQALALgLAMQgRARgBAFQgCAKgHANIgMAVIgXALQgYgLgnACQgxADgPgDQgPgDgHABQgMACgGALQgHANAIAMIARASgAg4BYQgYAEAHAMQAQAiAmAKQAIACAFgHQAGgHgEgFQgOgTgHgIQgNgQgRAAIgBAAg");
	this.shape_1456.setTransform(110.6,280);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#5087A9").s().p("AigByIAOgJIgGgGIgIAOQgNgEgSgPQgZgVgFgDQglgYgrAlIAag7QANgcAOgRQANgOACgcQADgcgKgKQANgEAeACQAagBALgVIAMACIABANQACAIAHABQAGABACgFIAEgLQAKgMASAAQAKAAATACIEGgDIALgDQACAIAIAEQAEACAKADQAIAXALgXQAegRAPAJQANAKgDAiQgCARgSAyQgPAoAEAcQgRADgEAOIg5ABQgrgugjgJQgkgKggAaQgMAKACAXQACAZgGAJQgQAogXgPIgUgQQgMgJgIAAIgDgcQAAgPAMgKQATgPAIggIAOg1IgyAFQgDgTgRgOQgWgOgMgJQgTAtgCAkQgDApASAoQAGAMgBASQgCARgHANQgFAKgRACIgDABQgRAAgIgTg");
	this.shape_1457.setTransform(127.4,272.8);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#081218").s().p("AAfDHQACgbgNgHQAPgRAAgWQAAgNgGgbIAAgPQAAgIAAgFQgBgFAJgcQAHgUgSgGQgSgIgLASQgSAagFADQgDACgBAGIgBAOQgIgHACgVQABgUgNgEQgQgGgIgBQgOgCgKAHQgMALAFARQAHAZAAADQgFABgIASQgGANgKgQQgLgTgFABQgFACgHARQgDAKgJAFQgHACgLAAIgHgTIgJASIgTAMIgGgUIgFgLQgKgDgEANIgLgCIgXghIgEhEIASgMQAMgIgFgOQANgEAbAKQAaAKAPgHIAjADQAbARAfgEQgCgHgOgYQgJgQAAgMQANAMANgKQASgNAEgBQACAMADADQAFAIAKgFQAMgEgMgOQgGg+AghKQAIAEAWADQARAFgLAbQgEABgCAEQgGAEgCAHIAAAOQgTAPAEAcQAHApgCAFQgCAJAGAHQAFAHAJAAQAWACACgaQAEgrgPgtQADgEgBgFQAEgEgBgFQAIgEAFAAQAFABADAJQgGAhAbgTQASgLADAJQACAGgBAQQgZAJACAYQADAmgCAEQgMAgAfAKQAVAGAMgGQAKgEAHgTQAIgFAYAAQATgEgGgaIAqAPQgEAWAWAPQAdASAEAIQgLAJgCARIgBAeQgSABgSATQgaAbgEACQgQAKAEAhQABASAIAnIgaANQgQAJgNgKQABgSgBgIQgCgNgSAFQgcACgMAFQgXAIADAeIgVALQgOgJABgagAg3goIAGAHIAEgDIgFgHg");
	this.shape_1458.setTransform(206.6,191.1);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#5590B4").s().p("AkoBxIAQgFQAHgEADgIQABgFgDgDQgCgDgFACQgIACgEAIQgDAEgCAMIg5gMIALgtQAQgIAlAKQAhAJALgNQAMgMgWgXQgXgYAIgTQAOgSABgGQADgNgWgIIgLgWIBSANQArANAOAuQACAHAHADQAHADAHgEQAOgIgNgRQgSgXgCgHQgHgRANgSQAUgIADgSIABgJIAKgDIAUAVQALAMAEANQAPgFAEgKQAEgLgJgMQgKgOABgSIAGgfQAVgEAtABQAsABAYgHQAHgCAIAEQAJAEACAJIABASQABAKAHgBQAIgCgCgJIgGgPQAHgKAPABQASAAAGgFIAMAHQAAAEgFAJQgDAIAIACQAIACACgIIACgQIAQgJQAKgEAIAJQgEAKAAAOQABAFADASQgVgBgJAHQgLAIAAAXQgBAegIAQQgNAYgagLQgwgTABAVQACAMAIAeQgDASgPABIgcgCQgBgNgDgGQgGgKgNACQgVACgJAHQgNAJgBATQg3AJgbAEQgwAGgjgHQgJgCgEAFQgCADgBAIQgEAKAEAGQADAHAKAAIA2gEIAAAOQAEAKgFAdQAAAWAYgEQASgCAXAGQAeAJAIAAQAcAdAYgOIAogmQA5ADgYgxIgBgPIAXgCQAIAGAGgHIAEACQARgGAUADQAPABAWAHQAFAkAnALQAzAPAIAHQgCAXAPAOQAJAJAYALIAAAJIj7ABIgCgQQgCgJgGACQgJABACAIIAFANIkzABQALgIADgGQAEgJgHgKQAPgTgLgEQgLgDgCAIIgDAQQgWABgGADQgOAFgDARIAAAJIgiAAgAivCHIAHADQAAgBABAAQAAgBAAgBQAAAAAAAAQAAgBAAAAIgFgCgAAHhEQgCAEABACQAAADADAEQADADADAAQAHABACgDQADgEgCgGQgBgDgDgDIgIgFIgGAHgAhNhZQgEACgBAGIABACIACACQAGgBACgEIAEgKIgKADgAAKinQgXALgPACQAOAbATACQAOACAYgMQARgJgLgMQgMgNgQAAIgLACg");
	this.shape_1459.setTransform(194.7,277.4);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#5087A9").s().p("AgKFzQgbgLgNAFIgwghIAEAAIgNgMQgEAAgKAKQgIAIgJgJQgFgNALgWQALgXgDgPQgDgegFgLQgHgSgegDQgTgCgCgUQgBgMAFgaQABgCAGgDQAGgCAAgCQAEg4AegTQAbgQA6AJQAZAEACgdQABgcgYgiQAjg3g7gqIgTgLQgLgHgCgLQgYAAgKgLQADgTAUgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAgBIgCgIIgKgKIgCgiIAOABQAAAOAKgEIAVgWQALgNAAgPIgKgKIAAgEIgIgPQgNgEgDgDQgFgGAGgLQANAJAbgCQAcgCAMAGIACgeIAVAHQASAmAKgTQAPgeADAAQASADAIANQAHAKAAAUIAFBcQgBA0gdAmQgSAZgCAsQgCAaACA0IgMAMIgOAMIAOALQAFAmAUACQAPACAdgTIAiAXQACAUAUgIQgDATgSAEIgKAHIAJAEQgEAlAVANQAQAKAkgDQgfBKAGA+IgUAAQgOgOgNAIQgOANgHAEIAAgBIgMgHQgIgDgHAEIgWgFQgNgBgFAPIgmgCQAFAMALAGQAGADAOAEIABATQgGADgIAAQgMAAgOgGgAg9EyQgEACADAFQAFAIANAEQAFABADgDQAEgDgDgFQgCgDgFgEIgHgFQgIAAgEADgAgwCzQgHAGgBAKQgBASAMAJQAKAHAXACQgIgHABgXQABgUgPgFIgFgBQgFAAgFAEgAA9BoIAEADIAEgCIgBgFgAgMjaQgOAJAEATIAIAeQABASAFAHQAHALAPgFQAPgFAAgNQAAgKgKgOIAAABIAMgXQAJgCAEgDQAFgEABgHQAAgFgDgDQgDgDgFACQgGADgCAIIgBANIgSgVQgGgHgGAAQgGAAgGAEg");
	this.shape_1460.setTransform(185.9,149.4);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#46758F").s().p("ACEFKQgMgZgIgJQgNgPgZAOQgjARABgpQABgRgCgFQgDgKgTAMIgUgOQgCgJgGgBQgEgBgIAEIgNgMQALgagQgGQgXgCgJgEQgkADgQgKQgVgNAEglIABgLQASgEADgTIAAgYIAMgBQAZASADgjQACgNgHgGQgIgGgOAGIgWgHIgCgjQAAgXgMgOQgLAPADASQABAKAHASQg6gBgggNQgCg0ACgaQACgsASgZQAdgmABg0IgFhcQADgBAWADQAPADAHgPIANAdQAFATAAAdIAAAwQABANAJANQAKAOAIgKQAHgHAZgSQAUgPAHgOQARAHANgEQAMgDAPgOQAYgYAZAAQAcgBAWAdQgJAQgrAaQgmAWgGAeQgBADgLADQgMADgGgCQgmgKgDASQgBAEAIAlQADAQAJADQAIACAJgOQAMgWAWgBQANgBAbAFQgZAXAgAVQASALANgNQAHgHAMgSQArgZAIgCQAegLAMAZQAJAQAFAbQAHAcAAAZQAAATgFAhIgHA0IAJAKIAEAWQghgBgZANQgSgOgEAAQgLgDAAAZQgBAKAEAPIAHAYQgWALAFAPQACAJAPAOQAqAqgWA+gAAhBfQgNAfAEAEQAXAQABASQACAPgNAWQgJAQALAIIAWARIAGhhQAPgLgBgVQgBgVgQgaIgBgNQgBgIgHgEIgWA2gAhVhqQgcAKADAcQAeAGAEggQAAgDgEgEQgEgFgBAAIAAAAg");
	this.shape_1461.setTransform(212.4,149.7);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#528BAE").s().p("AnUC3QgOgMAFggQACgMAAgTIAAgfQAVgEAbgnQAYgjAeACQAAgEAEgbQAEgTgIgMQgDgHgNgHIgVgMQgUgQAcgcIgFgHQglAHAEgUQALgagCgIIAAgGQAHABAPAKQANAJAKgDIAaAJQAOABAGgUIAjABQAVAyAYgyQAGABANgDQALgBAEANQgQABACAJQAAADAFADIAIAGQADAFgCAGQgLAAgFACQgIACAEALQAFAOAQgPQAFgBAEABQAWADAPAbQATAgAMAHQgDgbABgMQABgUAbgDIBbgIQAHAKAOAAIAWAAQAJAEATANQARAHAPgOQAIgGAJACQAIABAFAIQAGAIgGAIIgKANIgeAGQgQAGgDASQgBAGADAFQAEAEAGAAQASABAIgPQAIgTAGgIIA0AAQAaAGAKAjQgKgnAegNQAJgEASgGQAQgGAGgJQAHgCARABQANgDgDgTIAFgVIA2ABIABAiIgCAJQgKAEgEADQgGAFAEAJQADAHAGgBIAMgHIAHABQAIAVAAAHQAAAOgUAGQgWAFgbgLQgfgOgRgFQARAPAEAmQAFAlANAOQATAQAbgHIAtgPQAKgBgDgJQgHgMgBgFIARgVQAJgNAQAFQAfALgFAmQgCAMAJAOQAgA3gEAMQgFALg6AMQgcgzgWgEQgXgEgoApQgLALgOATIgXAfImoAAQAAgWgCgFQgFgOgSAAQgTAAgLAKQgMALAAAUIheAAQg4AAglADIgMAAQgYAAgJgJgAhGB8QgLADACANQABAMANAGIAaAIQALAAAGgCQAIgDAAgJQgBgPgLgGQgIgEgRgCIgNgCIgGABgAhEA/QAMApAqAKQAZAHABgZQACgggKAEQgMAGgXgKQgMgFgKAAQgIAAgHAEgACHBhQAKADAdgRQgRABgVgLQgYgNgPgBQAcAjAKADgAmRA7QADAIAHACQAFACADgDQADgDgBgFIgEgGIgFgFQgOAAADAKg");
	this.shape_1462.setTransform(49.4,278.7);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#040C11").s().p("AgFAGIACgNQAAgIAJgBIAAAhg");
	this.shape_1463.setTransform(298,191.1);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#233C4A").s().p("AgKgNIAVgDIAAAhIgPAAg");
	this.shape_1464.setTransform(297.4,247.1);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#60A2CA").s().p("AgIgQIATgBIAAAhIgVADg");
	this.shape_1465.setTransform(297.4,243.8);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#040C11").s().p("AACARQABgLgGgBQgJABgDgCQgBgRAJgFQAHgFARAGIAAAhQgEAFgEAAQgDAAgEgEg");
	this.shape_1466.setTransform(296.9,228.9);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#528BAE").s().p("AgQgWIAhAAIABAtQgjgEABgpg");
	this.shape_1467.setTransform(228.4,3.2);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#5590B4").s().p("AgOAmQAIgNgHgZQgIgaAGgMIAiAAIgMBNg");
	this.shape_1468.setTransform(92.3,4.8);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#5087A9").s().p("AgbAFQgFgMAHgJQAKgNAQACQAKABATAGIAAAVQgNgBgMAKQgMANgIAFQgJgPgDgIg");
	this.shape_1469.setTransform(295.5,279.4);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#477696").s().p("AgngbIBPAAQgHAZgaAMQgfALgPAHg");
	this.shape_1470.setTransform(12.4,3.7);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#5590B4").s().p("AgUAlIgCghIAWgwIALADIALALIAABDQgNAHgIABIgEAAQgJAAgIgIg");
	this.shape_1471.setTransform(296.3,195.9);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#4E83A4").s().p("AgXAlQgDgBAAgMQgBgLACgIQACgIAHgOIAKgXIAWAAIAJAxIACASQAAAKgIACQgIACgJAAQgLAAgOgEg");
	this.shape_1472.setTransform(180.5,5);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#5087A9").s().p("AAFARQgGgUgYgGQgKgeAMgLQAKgKAdAEQAIAKAHgLIAAByIgVABQgDgjgCgGg");
	this.shape_1473.setTransform(295.5,236.2);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#5087A9").s().p("AgQgyIAtAAQABAmAAASQgBAighALQgrgpAfg8g");
	this.shape_1474.setTransform(196.3,6);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#528BAE").s().p("AghA+IAXhNIAAgiIAsgMIAABxQgOAIgUABIgSABIgPAAg");
	this.shape_1475.setTransform(295.2,260.7);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#3D6680").s().p("AgKCNIAAgHIACkVIAIAHQAGACAFgHIAAEGQgJABgBAIIgBAOg");
	this.shape_1476.setTransform(297.4,177.3);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#5087A9").s().p("AgtAVIAMhNIBPAAQgOAdgFAOQgJAaAOAWQADAHgIAGQgGAGgJADQgOgZgrgLg");
	this.shape_1477.setTransform(97.6,6.6);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#4A7D9D").s().p("Ag+AnQAKgDAGgFQAIgHgEgHQgNgVAJgaQAFgPAOgdIBaAAQgDARgLALQgLALgQACQgdAFgEASQgCAKAJAcIgBAAQgPADgGARQgJAXgEAEg");
	this.shape_1478.setTransform(105,8.4);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#5087A9").s().p("Ag4AgQgSgQADgWQABgIAMgfIBmAAQgDAPANAUQAQAXACAJQgTAJgegUQgcgUgSAJIgMAjIAAALg");
	this.shape_1479.setTransform(141.1,5.5);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#528BAE").s().p("AgBAlQgZglgMgKQgEgfAbgnIA3ACIAACfQgVgLgUghg");
	this.shape_1480.setTransform(294.5,29.4);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#4E83A4").s().p("AgkAwQgggVASgfQARgdgBgZIA4AAQAAApAjAEIAAAAQAAARgMARQgHAKgSAQQgMAMgNAAQgOAAgRgLg");
	this.shape_1481.setTransform(224.4,6.8);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#5087A9").s().p("AghhbIBDAAIAAA5QACAhgZAiIgpA7g");
	this.shape_1482.setTransform(5,10.1);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#43708E").s().p("AAMBWQgNgBgagLQAAgMgJgNIgPgVQAAgjAfgVQAPgKAGgQQAGgMACgUQAJAKAMgCQAIgBAOgHIAACfQgQAOgTAAIgFgBg");
	this.shape_1483.setTransform(293.4,208.3);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#3D6680").s().p("AgWBCQgIgBAAgBQgBgFgVg7QgOgnAVgcIBmAAQgNAfgBAIQgDAXATAPIgCAyIgXgDIgrALgAgnglIAAAFIAHgDIgDgDIgEABg");
	this.shape_1484.setTransform(129.6,7.7);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#4A7D9D").s().p("ABLBqQgRgEgSgTQgbgdgKgEQgYgNgZAbQgHgSgZgXQgbgYgJgNIAAgLIBWAfIAFgIIhPg7QASgJAeAVQAdAUATgJQgCgJgQgYQgMgUACgPIByAAQgCARAGAkQACAggfAUQgQAKATATIAhAjQADAUAUADIABABIgBALQgQAJgOAAIgJgBg");
	this.shape_1485.setTransform(149,11.6);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#46758F").s().p("ABcBmQAHgkgbgZQglgZgOgNQgkgngWgQQgmgcgsALQgbAHgCgnQDfAAAsgBQATgBAGAGQAGAGgBASQgCAlAAAzIABBYg");
	this.shape_1486.setTransform(283.8,11.1);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#5087A9").s().p("AgIAoQg6hUg+guQgNgKACgOQAFgOgBgIIAiAAQACAnAbgHQAsgLAlAcQAWAQAlAoQAOANAlAYQAbAZgHAkQgcAnAEAfQhMgdgvhEg");
	this.shape_1487.setTransform(279.1,14.6);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#46758F").s().p("AA4DnQgHgFgKgTQg9h3gZiCQgDgOgYhPQgRg5ACgnIBmAAQgUAcANAnQAVA8ABAFQAAABAIABIANACIgBAYQgIAKAEAGQADAEAMACIgBBEIgCADIADgDQASASAJAbQAJAbgJAJQgZAZAIAiIANA4QgLARgJAAQgDAAgDgBg");
	this.shape_1488.setTransform(123.7,24.1);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#528BAE").s().p("AgWCHQACgRgMgHIgYgIIAAAAIgLgiIAzAIIgcgYQgMgGgLAWIgrAAIgOgMIgBAAQADgSgMgPQgDgEgWgUQAfAAA8gHQA2gEAkALIAYAMIACACIgCgDIgBgWQAFgXgRgFQgngPgUgFQgjgKgcAIQgJgOgDgHQgGgNAEgMQBagQAogFQBKgJA7ABIAABFQgUgGgKgBQgRgCgJANQgHAJAFANQADAIAJAPQAIgFANgNQAMgLANACIAAC2gABRASIgBAOQABASAJgBQAIgCgBgFIgFgJIACgOQABgIgHgBIAAAAQgFAAgCAIg");
	this.shape_1489.setTransform(282.6,284.1);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#081218").s().p("Aj3BTQgUgCgRAFIAAAAIgBAAIABAAIgEgCIhQABQglgKgjAKIg1AAQgZgIgZAIQgEgBgFADIg2AEQgKABgEgIQgDgGADgKQACgHACgEQADgEAKABQAjAIAwgHQAbgEA2gJQAQAFAUgFIAhgJIAcACQAOgCAEgSQAOAKAUABQAJgBAagEQAZABANgCQAUgEANgPIAUAIQAKAEAOgFIAWgHIAigBIAYgBQANgCAJgGIJRhHQAZAAAJgBQAUgCAOgHIAAAtQg7gBhKAKQgpAEhaAQIieASQgMgCgGABQgIADAAAOIgcAIQgRAFgJgCQgvgNhHAVQhVAbgcAAQgFAAgGAGIgMAKIgnAAQgYAAgOALQgWgGgPgCg");
	this.shape_1490.setTransform(236.3,275);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#5087A9").s().p("AhfB9QgGAAgLAGQgTgBgfgZQgdgXgXACIgBgKIgBAAQANgIgBgPQAKgHACgOQABgRADgIIAGgBQAHACApAUQAeAOAZgGQgLgOghgQQgegNgGgTIAAgJIAOgOQABgMATgaQAPgXgDgTIDjAAQgHANAIAaQAIAZgIAOQgLAEgBAGQgBAGALAGQAiARAvgDIAXAjIAAAFQgQAIgIACQgPAFgJgJQgZgcgkAGQgpAOgWAFIAfAJQASAFgDAWIgMACQgWAWgXgBIgNAAQgHgJgCgNIgBgYQgngBgPAZQgLARgCApIgWALQgIgIgJABg");
	this.shape_1491.setTransform(79.3,14.1);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#528BAE").s().p("ABpCzQgLgGgPgCIgbgBQAEgKgGgIIgNgPQgOgSgjgXQglgYgOgQIAOgVQAIgMAJAEIA1APQAgAJAKAaQAIAVAJgCQAFgCALgPQAGAEAMAMQAKAIAIgLQAKgMgKgHQgPgGgGgEIgPgHQgogVgRgZQgVgfAIguIgiAfQgQAOgRgFQgfgIgJAPQgGAKABAdIgsABIgMgKIgBAAQgCgSgVgFIghgiQgTgUAQgKQAfgVgBgfQgHgkACgSIDjAAIgKAXQgHAOgCAKQgCAIABALQAAALADABQAXAJAUgGQAIgDAAgKIgCgSIgJgyIB+AAQgfA9AqAqIg6gHQgjgEgVAVIgPAIQgGAGAEAJQAGAOAPAFQAJADAVACQAAATANAWQAGAKAQAXQAcAmgRATIguAcIgOgCQgBAHAFADIAKADIAAAMQgDASgBADQgDAEgFAAQgFAAgIgFg");
	this.shape_1492.setTransform(174.8,19.3);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#FFFFFF").s().p("AWmXYMgtIAABQgcAAgHgFQgMgHAAgdMAACgtgQgEgOgBgHQgCgPARgEIACXYIAABrIgDFLQgCDGARCDQABAMgJAfQgJAcAGARIgBH4IAAAfQAAATgCAMQgFAgAOAMQAMALAhgDQAlgCA4AAIdSAAIALABIC4gBIAFABIAFgBIA6AAIAFABIAGgBIKiACQgBACACALQABAIgIABIgUACIgUgBg");
	this.shape_1493.setTransform(149.4,150.6);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#5087A9").s().p("Ag+HZIgXgYQAIgbACgMQAEgWgCgSQAXgFABgcQAJgPgKgVIAKgQIgWgHIgdgLQgQgFgPACQgRgYglAEQgCgEgRgKQgNgHgDgLIAXgNQA2grg+gbIAAgsQARgHADgQIAXgMQAtgUAUgZQAYgdgCgxQgDhUAAh6IgBjPIATALIACGDIgBAfQAAATACANQACAMgCAcQAAAYARAGQAPAFANgSQAIgKANgWQAEgGAKgFIATgJIAUANIAEAPIgBAVQgBANAMADQALADAIgLIAMgSIAPgQIABABQANAJAAAhQAAAfAVAHIACAiQgCATgFANQgIAPgOAKQggAVABAkQgSAEgEASQgCAHADADQADACAHABIACAQQACAJAKABQALACAKgRIAAAAQAaALAOACQAWACARgPIAAByQgQgFgIAEQgKAFACATIhcAAIABgVQACgMgQgCQgegDgDAgQAAAHADAVQgKAIgEAPIgEAbgAACF9IACAEIAHgFIgCgEIgHAFgAgQEcQAAAFAEAQIALgQIAUAAIAKgMQgGgHgKgCIgRgCQgMAHAAALgAgGDVIAEAAIACgFIgEgDgAgUCTQgKABgGAHQgHAIABALQABAIAEAEQAFAEAIgCQAQgEABgWQgBgPgJAAIgDAAgAhpBxQgJADgFAKQgCAGgCAMQgBAHAEADQAEAEAGgCQAXgFAAgWQgDgQgLAAIgEAAg");
	this.shape_1494.setTransform(277.4,187.8);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#43708E").s().p("ABhDjQgYgagVgDQgEgCgOgZQgLgTgXAKQgGADgEgJQgCgFgDgNQgZiFh6gUQgHgBgFgGQgEgFgCgIQgGg/g1guIhmhIIAAAAIgBgtIFhAAQACAIgFAPQgCANAMAKQA/AuA6BVQAwBEBMAcQAMALAZAlQAVAhAVALIAABEIgWgNQgNgggfAYQgXAUAfAMIABAYIgOAUQgIAMgMACQgTgTgGgEIgVgbQgOgPgRAHQgOAGABAUQADAagCAFIgXAWQgQgGgagdgAB6ALQgEAEAAAGQABAWAWAHQANAEACgPQgEgTgUgJIgFgCQgDAAgCACg");
	this.shape_1495.setTransform(264.3,27.1);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#040C11").s().p("AgiLrQgMgDAAgNIABgWIgEgQIAAifQAHhKgJiJQgJiSAEhCIgDorQAFglgBg2QgDg8AAgfQAAgRgGgKQgHgKgSgCQACgFgCgaQgCgUAOgGQASgHANAPIAVAbQAGAEATATIALARQAIAIAJgGQAKgIgBgRQgDgTgBgJIgBgYQABgPALgFQAHgDARgBIAXANIAASjQgFAHgGgDIgKgGIgGn/QAEiBgJhQIgCkUIgQAAQgJBaACCNQACDDgBAlIALC1QgFA4ACBMQABAsAFBXIACEpQABAPgTAJQgUAKgCALIgPAPIgMATQgGAIgIAAIgEAAg");
	this.shape_1496.setTransform(289.5,117.7);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#46758F").s().p("AkLChQACgFAXgjQAXgigLgOQgJgLgkgDIg2gvIAAgrIAqg6QAZgjgCgiQAPgHAggLQAagNAHgZIIBAAQAEASgQAXQgSAagBANIgOAOIgBAJIgJgBIgNAYIAAAKIgHABQgMAHgDANQgBAHAAATIgLAWIAAABIAAAAIAAgBQgRgFgEAAQgKABgJARQgPAdgLAmIgQBEQgngnggAYQggAmgQAOQgXAUgMAGQgTAIgXgJQgQgGgVAFQgXAHgMACIgeAFQgRAAgNgJQgYgTgSAAQgXAAgRAdQgNgcALgag");
	this.shape_1497.setTransform(34.9,22.4);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#528BAE").s().p("Ag1EjQABgLgKgIIgRgOQAAgdAIgNQALgQAeABQATABAFgJQAGgKgKgRIATgUQANgMAFgKQAVgjAMgNQAWgXAfgKQAWgGAEgcQADgUgHgeQgDgNgLgEQgJgFgNAEQgzAOgCAsQAAAQgBAEQgDAMgLgGQghgQghATQgjAbgTAIQgMADgDAEQgEAGAJAKIgBAWIgvABQABgogFgPQgJgagsAMQgCgNAKgRQANgSACgIIhFAMQABgcgJgPQgKgRgcgLQhhgmAdh4QAjgMAAghQABgTgCgnIDZAAQACAZgRAdQgSAgAgAVQAhAVAYgWQARgQAIgKQALgRABgSIBkBIQA1AuAHA/QABAIAEAFQAFAGAIABQB5AVAZCEQADANACAFQAEAJAIgDQAXgKAKATQAOAZAEACQgIASACAiQACAngEAQQgTgHghgrQgbglghABQgfgWgRAQQgJAIgMAjQgsgjACAyQABAjgNAEQgLAEgZgUIgOgOQgJgHgJAGQgJAGACALIADAUIgBBgIgGAAQg3AAgwgugAhXhJQgEAMgEAgQgCAHADAHQAFAKAOgEQAVgEAPgNQARgNADgTQADgOgNgKQgMgJgQAAIgDAAQgUAAgHASgAixgiIgEASQANgFAEgFQAGgIgGgNQgKAEgDAJgAiuhtIABAEIAIgBIgBgEgAgbjFQgQAXAVAeIAdhXQgaAVgIANg");
	this.shape_1498.setTransform(232.3,34.6);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#528BAE").s().p("AqaHZIABnHQAJAJARAWQASAPAcgHQgUgagLgKQgSgOgXgBIABkHIA2AvQAkAEAJAKQALAOgXAjQgXAjgCAEQgLAbANAcQARgeAXABQASAAAYASQANAKARgBIAegEQAMgCAXgIQAVgFAQAGQAXAJATgIQANgFAXgVQAQgNAggnQAggYAnAoQAdAKAJgQQAHgNgFgWQgHgYAKgPQAHgMAVgKQAIAFAbAGQAWAGALAKQAeAaARgrQAKgGAGAAQAJgBAHAIIACAUQgPAdATAcQATAcAqAJIABAKQgUAQgPAhIgZA0QAPgNAhgbQAYgagMgiIAKgIIgIgGIgChNQAJgIABgNIAAgYQgGg0ATgeIABAYQACANAHAJIANAAQABAPAKAMQAGAIAQAMIAIAMQAEAHABAGQAFAcAdAVQAdAVAcgEIALAWIAXAMIADACIgDgDIgWgLIgMgXIgLghQAUACAGgXQAIgZALgDQAGAPADADQAHAHAKgKQAJgJgIgKQgMgLgEgGQgOgSgfgFQABgTAMgIQAKgHAUABQAMAAAFgCQAJgDACgJQACgKgJgHIgSgJIAAgFQADgEAJgXQAHgRAPgDIACACIgCgCQgJgcADgLQAEgSAdgFQAQgCALgLQAMgLACgRIAjAAQgDAoASA5QAYBPACAOQAZCCA/B4QAKATAGAEQANAIANgXIAhgFQACAZgUAYQgaAZgKAOQgIAMgRgOQgZgWgDgCQgFgCgJAAIgOgBIgjgQQgcgOgSAeIAAALIgtgXIgXgWIgBgGQgBgEgFACIAGAJIAXAVQABAMABAFQADAKAGAEQAbATBVBLQBEA8AzAZIgKAzIgSgBQAIgggZgCQghgDgDgGIABgCIgCACQgoADgQAFQgeAIARAvIgdASIgCAEIAFAHQAhAEAHAZQABAEABAtIgmANQgMgagHgMQgMgUgZABIgDggIgJgEIgOgNQgFgRgHgGQgKgHgSAEIg6AMQghAGgbgCQgQgYgegNQgSgJgmgIQgFgQgOgFQgHgDgUAAIgNgMIABgVQgBgLgLAAQgKAAAAAMIgBAVIAAALIAjAAIgWAtQgNANAGAKQAFAKAMgKQAiAGABAdQgYAIAEAaIgPALIgVgPQgMgJgNABQgxg1gVgRQgrgjgxgLQgegHgRANQgPALAHASQAOAhgKAtQgOA/AAAMQgMgKgCABQgfAUgqgDIhKgMQABAYgiABQgiABgCAXQAAAGgGACQgFACgGgEQgYgQgiAKQgvAOgJAAQgIgBgtAOQgLAEgKAAQgSAAgOgMgAqDFiIDTAAQgrgtg3AAQg3AAg6AtgAjmD4IgEAJIgLAMQgXAKACAPQABAJARAZQADgNgCgVQgDgRAGgIIALgLIAKgDQAEgDAAgGIgBgCIgCgBQgGAAgCAFgAjWE7IADADQABABAEgCIgBgFgAGnEtQgDADgEAMIAOgGQALgDACgJQgFgBgEAAQgHAAgEAEgAngD6QgcABgDARQgEAWAegBQAcAAAIgXQgGgQgUAAIgFAAgAALDRQgLAJgFAcIAWAAIgDAMQgCAHACADQAFAGAFgDQAEgDACgGQADgHAHgfIALgMQgPgIgLAAQgIAAgGAFgAGjBbQg5ATAJAsQgCAFgXANQgQAJAHAUIAFAVQAFAMAKACQAJACADgIIADgRIAWAAQAagDgCgUIgBgjIAiAMQATAEAHgQQAHgRgPgEQgVgCgHgDQAEgWgBgIQgBgKgLAAQgGAAgHACgAo1DdQgBAFAEADQADADAFgCQAIgEADgJIACgRQAVgcADgJQAHgVgUgVIgLBPQgWAGgCAPgAHADGIAEAHIAEgEQgBgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAgAEbCPIgbALQgPAHACATQACAVAOgFQAkgNAGgbQgEgQgHAAQgEAAgDADgACGCZQgMAJgFAPQgDAKAHAFQAHAFAKgDQAYgFAGgCQARgHAEgOQAEgMgKgFQgFgDgRgDQgPABgMAJgAhFB+QgIAFgBAJQAAASAMAJQAKAHAWACQAEgBAOAAQAMAAAAgKQgBgQgRgJQgWgJgJgFQgDgDgEAAQgEAAgFADgAkFBsQgRAKABASQAAAKAKAbQAPgUAOgbQAOgZgMgCIgBAAQgJAAgPAJgAiNBrQAWADAUAYQgBgfgIgMQgIgPgVABQgUAAgLAIQgOAKgGAaQAZgOASAAIAEAAgAm2CFQAPABgPgZIARgCQAJgDAAgJQABgSgVgKQgYgMgFgIQgBgDgHAAQgIAAgEACQgGADAAAGQABAGAFAEQATANgHAPQgEAJgMASQgCAHAEADQACABAIABIAMAAIAAAAQABgBAFAAQAGAAALACgABHB2IAAAFIAHgCIgDgEgADVAFQAKAQgHAcQgDALgBASIgBAfIgLALIgCADIACgCIAMgMQAigDANgkQAHgqAEgNQAKgcgfgdQgTgTgvgaIgRA8IgdAwQAUgBAKgLQAFgIAFgRQAbAHAJAOgAopBTQgDAXAaAOIgIhQIgPArgACQBoIgDAEQgBAFAEACQADACAEgBIADgDIADgFIgIgGIgFACgACsAqQAAAAgBABQAAABAAAAQgBABAAAAQAAABAAAAQAAAFADACQADACAFgCQACgBABgIIgIgFQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAAAABgAkkAcIgEADQgCAEABADQACAEAFABIAHgIQgDgHgCgBIgBAAIgDABgAnwgPQgJACgDAJQgFAPAYAEQANACAGgBQAJgCAEgLQAAgJgHgFQgFgDgKgBIgLAAIgGAAgAlLgJQgBABABAAQAAAAAAABQAAAAAAABQABABAAAAIAFAEQASAHAFgWIATgDQAKgDAAgLQAAgKgJgEIgTgDIgDgCIACACIAAAiIgPAAQgKAAgEAHgAFzivIAAAAIgJADQgFACADAHQABACADACQAAAAABABQABAAAAAAQABAAAAAAQABAAAAAAQAHgCgBgGIgDgJIAAgBQARgFARgUIAiglQglgBgPAVQgEAGgMAkIAAAAg");
	this.shape_1499.setTransform(68.4,49.4);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#040C11").s().p("ACbScQglgKgQAIIgngEQgXAAgSAEIgLAAQgEgDgFABQgFgEgEgBQgGgBgFAEIgmgJIAWgPIA4gBQAXALgBgcQgFgcAQgpQARgyACgRQADgigNgKQgOgJgfARIgSAAQgJgDgFgCQgHgEgDgIIgLADIkGADQgUgCgKAAQgRAAgLAMIgWgHIgLgCQgPgNgmABQglABgPgOQAhgWAUgEQAfgHAdAVQAIAHAMgFQAKgEAIgLQAhgKA4ADQBAADAXgDQAOgCBdAFQBAADAogXQAFgCAKAKQAIAJAKgGQgDgNACgqQACgjgLgUIgBABQgSgLgbABQgeAEgPAAIgjACQhCgThPAOIgrgGQgagDgLAbQgMgTgUgCQgMgCgbAEIhoABIiCgMIgYgEQgQgDgJgEQgkgOgJARQgFAKABAlQAZgjApARQANAKAgANQAZAOgBAdQgVAhgCANQgCAYAmANQgBADgRAJQgNAGAJAPIAAAVIhFAEQgFgCgGADIiJgDIAAgIIA9gIQgHgGgNgTQgJgPgKgEQgXgNgPAZQhIggABBOIgQALIhvAEQgSgBgIABQgOACgJAJIhbAIQgRgEgTgVQgVgagKgGQgIAIgFATQgDASgKAFQgFgBgFABIgBgOQACgGgDgFIABgWQgDgNgMABQgNADgFgBIh9gBQgSgSgcALIgBAGIgsgEIAAgTQANgDAFgJQADgIABgNQAQABAeABQAbABARAKIANgCIAAAAIBPgJIALgEQAGAFAGgBQAEAAAJgDQACAGAHACIALABIAJALQAEAFAHgHQAJgLgRgTIAAghQAFgPgHgIQgEgVADgIQAFgMAWABIADANQAEAHAHABQAKACAFgHIAHgPQADgBACADIApAfIAJAKQAFAFAHgEQAIgEABgHQACgHgDgHQgDgIgRgaIAUgBQAMAAAHgCQA3gPgvggQAJgCAbgVQAXgRAUAGIgFAOQgDAIAHABQAJACABgJIABgRQAKgsAhgDQAIAAA2AMIADAFQgDAQgNAJIgeAMIAbAOQAJAFANARQAOANANgIQAMgIgGgSQgJgVgBgKIgCgLIgFgKIAXgEIANAMQACAKAMANQAOAPADAIQAHARAUgDIAggFQAQACgHgVQgWhNgBhcIABgGIgFgJIgHgWIAAgXIABgMIAEgWQASgkgSgiIAAgVQALgMgDgYIgFgTQgOAFAFAMIgJACQgIAHgFACQgIAEgHgKIAAnEQgPBYgDB9QgBA4ACCtQgSAOgaAEQgKABgmABIgegDIgFnIIgJAAIgBHKQgHALgPgBQglgRgKgBQgKgBgWAMQgQgWAAgiIACg6QABgXgCgLQgDgUgRgLIAADTQhVAGANBUQgEABgFgLQgFgJgJAHQgKAIAAAOIAEAYQgBADAAAbQAAATgOAIQgBgKgKABIACgOQABgJgGAAQgGgBgBAIIAAAPIABARQABADgEADIgjg8IAOgUQAlgDgIgiIgFgWQgFgMgLgBQgMgBgBAOQgDARgFADIgLAEQABgngDgQQgHgdgbgPQgQgJgDAKQgBAFgCAOQgOgIgrABQgmAAgSgTQALg9gFhfQgGiHABgVQACheAAiJIgBjpIgPgBIAABkQgCBAADEYQACDSgLCFQgagHgGgYQgEgKAAgiQAAg2ABhPIAEiFQAEgxgBgZQgBgqgSgdIAAoaQAVARAggJQAtgOAIAAQAIABAwgOQAigLAYARQAFAEAGgCQAGgCAAgHQACgXAhAAQAjgBgBgZIBJAMQAqAEAfgUQACgBANAJQAOAGANgSQAOgVARADQAUADA0gRQAwgRAeAMQABABAIgJIALgPQANAAAMAIIAVAQIAXAuIAFE1IgCGwIgDCJQAABOALA7QAAAJAIAJIAOAPQgEATAMAFIAYACQAaACAJAEQARAGAFAUIgVAAQgNAAgHAJQADAHAQAPQAOANAAANQAKAJAEAUQAEAWAFAIQAGASADAFQAJAIAQgJQARASgXAEQgXAFALAQQAHACATgBQASABAJAMQACAWARgFQAWgHAEACQAAAfAhAEQAEADgGAaQgDAUAdgEQA2ASBKgKQgdhMhJgnQgCgKgSADQgRADgBgOQgBgFAPgkQALgZgZgQIgIAAIgCgVQAcgZACggQABgbgRgkQANgPgJgUIAHgZQAHAEALAMQANAKASgDQgOgIAHggQAGgbgdgGQgFgagFgMQgIgVgPgLIAAgsQABgGgBgFQAOgHAHANQAIARAFABQABAGgBANQAAAMAMAHIAAgoQArAEgHgWQgRgcACgKIAMgYQABgJgMgCIADAAQADgxgKhAIgUhvQgGgdgEgNQgIgYgOgQQgQgSgFAKIgHAVQgWALgQgYQgSgbgOACIgRgjIAAgIQAMgDAEgFQAEgGgIgLIAGggQAMAJALgJIgCAAQAFgBACgFIAhABIANASQAHAKgDAMQgDALACAGQABAIALABQANABADgKQACgFABgOQADgzgYgpQgqABgFgUQgEgPARgiIgCgCIABADQgNgEgFgDQgHgGAMgPQASgZgJgQQgIgPgegHQgoAHgNgDQgbgGgKgmQgDAJAAAaQABASgMAHQgVgLAAAOQgBAUgDABIgXgBQAEgagSgYQgXgagLgOIAHgZQAEgPAHgFQAYgWgJgMQgFgHgagKQgGgDgKgBIgQgDQgEgaAXgIQAvgFARgDQAjgGAbgLQAaABAigFIA5gNQATgEAJAHQAIAGAFARIgxAbQAWAZAPgHQALgFAOgaIAJADIAAAAIABAAIgBAAIAEAgQgGAgAFARQAIAXAcAJIgCA0QACAdAJAVQAOACgBgJQgCgOABgBQABgSAMAMQgCARABAGQADAMANAFIABAXQgUAJgGAIQgJALAJARQAQAfATgIQAZgKgRgiQAagHAKANQAGAKgFAaQgFAOACAVIADAjQgSAEgKARQgJAQADAMQAGAWAugNIAMANQgXAUAHAIQAGAJA6AXQgGgJAHgaQAFgUgXgIIANgbQAHgQgGgOIgKgLIACAAQAMgxgBhBIgEhyQAFgDgBgFIBPgOQAVABAagFQAMgCAggKIBIgJQArgGAdgDIAlgEQAVABAGAZQgHBEAIA7QgIAyALAuQgHASgBADQgBAMAMAIIACAWQgTALgnACQgMgegbAOQgNAHgLgDQgJgDgLgLQAFgLgNgXQgNgVALgPQAEgEgJgFQgJgFgGABQgNABgFADQgJAFABANIACBJQgdAaAUAgQgKApARAOQAPALAogGQAbgEAmgEIBAgGIADBaQAAANADAIQAFALAJgGQAVgQAcANQAhAPALgCQAYAigBAdQgBAcgagEQg6gJgbARQgeASgEA5QAAABgFADQgHADAAACQgGAYABAMQADAUASACQAeADAIASQAEALADAeQADAQgLAXQgLAVAFANIgEAwQgWAdAAA+QAAA/AWAeQAHAPAMAhQAOAaAcAEQATAGAWgKIAlgSIAGAAIAEAAIALBwIgDAIIgCAIIgFAmQAAAVAPANQAQANALgJQAQgQgBgWQgCgKgKgeQAUgVAfAHQAtAJAIgBIgCAQIAAAAQAjAPASgJQATgIAIgkIARhAIAVgLQAFgCAFAOQAEALAHgLQAKgOASgEIAfgFQANAKAQgIIAagOQAKAkAUgGQAMgDAagRQALACABAVQACASAPgCQACgBAIgJQAHgIAJADQADgWAAgKQgBgTgRgJQgCgBgCgDIgDgFIAEgKQAYgRAAgbQABgOgLghQgGgSgPAGIgZALIgEgLIABgfQACgRALgKIAIAAIAVABQACADABAJQABAIAJACQADgUAAgJQgBgRgLgKIgCgNQAQg9gChbQgDhlABg1QgKAIAAAfQAAAZgXAEIgDgXQACgLgMACIAHg1QAFggAAgVQAAgZgHgcQgFgagIgRQgNgYgdAKQgJADgrAZIg5gRQgbgFgNABQgWABgNAVQgJAPgIgDQgIgCgEgRQgIgkABgFQADgSAmAKQAIACALgDQAMgCAAgEQAHgdAlgXQArgZAJgQIAhgCQATgBAEAXQgKAKgBAKQgCALAJAIQAGADALABIATAAIgBghIAEggQALgCAEAGQADADABAMIARCBIAHBpIAPgCIgHiqQAIgNgIgPIgCjgQADgggCgvQgFg1gBgbQAcgvgZg5IgDh+IABhgIgDgTQgCgMAJgFQAJgGAKAGIANAOQAaAVAKgEQANgEgBgjQgBgzArAjIAbApQARAVAQgFQAPgEgDgbIgDguIAAgRQAhAAAcAkQAgAsATAHQAEgRgCgmQgCgjAIgSQAWADAXAaQAbAeAPAFQADAKAYAWQAUATgDAUQgLAEgBALIAAATIADJSIAGA5QgGChAIEpIABBuIgTAJQgKAFgFAGQgNAXgIAKQgOASgOgFQgRgGAAgYQABgdgBgMQgCgNAAgTIABgfIgDmCIADhKQAAgsgBgeQgCgdAAiQQABhqgJhDQADg1gBggQgDgugMglIAAGmQgHBhAJCEIABDPQABB5ADBUQACAxgZAeQgUAZgtAUQAAhjgBgyQgDhXgWg7QgKArACA9IAEBQQgDAtgWAfIAAAMIgOAUIgVAHQgXAFgCgOQACgSgBgHIAChIQAAgrgKgdIABjSIgCgRIgDj5QAFhZgHiYQAChJgCg0QgFhEgMg5IAAEFQgICAALBiIAGHiIgDARQgCAKAAAGQADAtgJAcQgMAjggAZQgmAdAZBEIgBA5IgIAGIAJAEIALANIAAALIAFBDQgGAPAGAuQAGAngUAVIAUAHIgJAXQgRANATAIQgPAdAGAKQAHAMAhgMQAHgCAPgCQATADAnACQAhAFASAXQAMAPAKgKIARgQQANAEAAAMIgJALIAEADIAEgJQAVANALACQASACAQgSQAZgZAggFQgGASAEAWIAKAnQAJgEAPgQQANgKALAOQAKAQATAAQAcAAADABQAOAYAbgFIAugHIAQgBIAAA5IgtAMIgYgBQhlgihpA1QgRAJgFABQgMADgKgJQgegcg2gEQg8ABgdgEQgigGgsAHQgpAHgoAQQgNgVgRAGQgSANgKAEQgMgKgGAAQgJgBgFAQQgJgTgTAFQgaAIgEgBQgCgfgXgEIgoAAQgUAAgBAOQAAAFAFAWQgGAFgSAAQgPgBgHAKIgJgBQgCgJgJgEQgIgEgHACQgYAHgsgBQgugBgVAEIgiAAIgUgBQgMAAgIAGIg2AEIg2ACQg0ADgJASQgLATAZAzIALAWIAEAtQgIATAXAZQAWAXgMAMQgGAIgPAAQgKAAgNgEgAwJPDIABgDIgCAAgAwFNgQgHAHACALQACAJACAUQAEARAPAAQAMAAAEgPQADgTACgHQAGgbgZgBIgDAAQgLAAgGAFgAs1MXQgEAOAJAQIgJALQgEAHgBAFQgEAmAiAIQAdAHAHgOQAHgOgJgMIgVgTIgMgSQAbgHgBgHQAAgHghgjQgMAPgDAMgACWMGQgcAHAOAdIAFAyQAHAWAZABQARAAANgWQAQgcAHgFQgKgGgIgbQgGgXgQABIgPgBQgMAAgJACgAvYL+QgTAJgJACQgUAIACASIAHAfIASgHQA0ACgKgrQgFgUgMAAIgEAAgAEVL5QgLAHACAMQADAVASAHQAMAFAYgBIAVAAQANgCgEgJQgFgQgQgNQgPgLgUgEIgGAAQgIAAgIAEgAr1LqQAOAIAKABQAMABAMgHQgMgMgJgBIgDAAQgLAAgNAKgAngLQIDBAAIAAgIIjBAAgANXKKQgPACgGAEQgKAGAEAPIACATQADALANgBQAOAAAFgLQADgHAAgRIgBgOQAAgHgJAAIgDAAgAKBJ8QgDAQAKANIAUAWQALAPALgQQAKgNAFAMQAQgDAHgDQAJgGACgNQACgNgKgDQgEgCgPAAQADgEABgGIALgVQAGgOgIgLQgaAIgDAWQgEACgbgCIgCAAQgSAAgEAUgAj6J0QgCAAgEAHIAFACQAAABABAAQABAAAAAAQABAAAAAAQABAAAAAAIAFgIIgIgCIAAAAgAIAJaIADgDIgEgEgAgPGiIAPAAQABhXAAgtQAAhQgQg7gAl/FQQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAADADAHIAIgEIgEgKIgFACgAzXFOIAGAAIAArZIgGAAgAxgFCIAIAAIAAkyIgIgGgA0gnRIgBBzQgBBCAFAxIgBEEQABCVAJBwIgFAOIACACIACABQAGgCABgGIACr4gAyiEpIALAAIAAnRIgLAAgA1UEmIAPAAQACjlgCiTQgDjOgMiqgAjeAfQAAAYAngEQgIgLAEgRIAFgbIgDg9QAFgfAAglQAAgZgEgtQgHACgHAVQgFAQgSgIIgFgVQAMgVADgOQAGgUgHgTQgEAIgRAKQgQAJgBAMQgQADgHgLIgHgWQAJgVgVgbQgVgcAGgSQAGgHADgEQACgHgGgFQgHgGgKAPQgTAQgEAiQgFAiAQAWQADBcA/BaQgFAMABAHQABAKALAGQAGAHgHAdQABATAigUQAFAKgEAdgAgegvQgKAQgCAHQgEAOAMALQgEAiAWAAIAlgCQAIgFACgLIADgSQAHgYgUgFQgZgHgDgEQgFgKgHgBIgCAAQgFAAgEAFgAwlheQgCAwAEBAIAPABIAAjjQgOA0gDA+gARCtYIgCAPQgIA0ABBJIADB8QgEBsADCqQAGDiAAA0IANAAIAApNQAGgNgJgNIAAgRQAIgVgCgcIgGgxIgBgSQADgDgBgCIgDgKIgCgsQAIgEABgHQABgHgHgBIgBAAQgFAAgCAGgAtVg0IAGAAIAAkAIgGAAgAgRhKQAQgWgDgbQgBgSgMgggAsSjEQAKgGACgIIAAgOIgCmDIgKAAgAkFkvQgBARAJAAQAKABACgRIgBgLQgDgGgFAAIgBAAQgKAAAAAQgAwlnFQgBAPABBXIAQAAIAAjNQgOAsgCA7gAljmzQgDADABAFQACAEAIAFQAHABADgCQADgCgCgFQgDgHgJgDIgDAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAgAlJnvQgGADgFAHQgKAUATALQAYAOABAKQAUgkgegbQgEgDgEAAIgFABg");
	this.shape_1500.setTransform(150.2,165.2);

	var maskedShapeInstanceList = [this.shape_795,this.shape_796,this.shape_797,this.shape_798,this.shape_799,this.shape_800,this.shape_801,this.shape_802,this.shape_803,this.shape_804,this.shape_805,this.shape_806,this.shape_807,this.shape_808,this.shape_809,this.shape_810,this.shape_811,this.shape_812,this.shape_813,this.shape_814,this.shape_815,this.shape_816,this.shape_817,this.shape_818,this.shape_819,this.shape_820,this.shape_821,this.shape_822,this.shape_823,this.shape_824,this.shape_825,this.shape_826,this.shape_827,this.shape_828,this.shape_829,this.shape_830,this.shape_831,this.shape_832,this.shape_833,this.shape_834,this.shape_835,this.shape_836,this.shape_837,this.shape_838,this.shape_839,this.shape_840,this.shape_841,this.shape_842,this.shape_843,this.shape_844,this.shape_845,this.shape_846,this.shape_847,this.shape_848,this.shape_849,this.shape_850,this.shape_851,this.shape_852,this.shape_853,this.shape_854,this.shape_855,this.shape_856,this.shape_857,this.shape_858,this.shape_859,this.shape_860,this.shape_861,this.shape_862,this.shape_863,this.shape_864,this.shape_865,this.shape_866,this.shape_867,this.shape_868,this.shape_869,this.shape_870,this.shape_871,this.shape_872,this.shape_873,this.shape_874,this.shape_875,this.shape_876,this.shape_877,this.shape_878,this.shape_879,this.shape_880,this.shape_881,this.shape_882,this.shape_883,this.shape_884,this.shape_885,this.shape_886,this.shape_887,this.shape_888,this.shape_889,this.shape_890,this.shape_891,this.shape_892,this.shape_893,this.shape_894,this.shape_895,this.shape_896,this.shape_897,this.shape_898,this.shape_899,this.shape_900,this.shape_901,this.shape_902,this.shape_903,this.shape_904,this.shape_905,this.shape_906,this.shape_907,this.shape_908,this.shape_909,this.shape_910,this.shape_911,this.shape_912,this.shape_913,this.shape_914,this.shape_915,this.shape_916,this.shape_917,this.shape_918,this.shape_919,this.shape_920,this.shape_921,this.shape_922,this.shape_923,this.shape_924,this.shape_925,this.shape_926,this.shape_927,this.shape_928,this.shape_929,this.shape_930,this.shape_931,this.shape_932,this.shape_933,this.shape_934,this.shape_935,this.shape_936,this.shape_937,this.shape_938,this.shape_939,this.shape_940,this.shape_941,this.shape_942,this.shape_943,this.shape_944,this.shape_945,this.shape_946,this.shape_947,this.shape_948,this.shape_949,this.shape_950,this.shape_951,this.shape_952,this.shape_953,this.shape_954,this.shape_955,this.shape_956,this.shape_957,this.shape_958,this.shape_959,this.shape_960,this.shape_961,this.shape_962,this.shape_963,this.shape_964,this.shape_965,this.shape_966,this.shape_967,this.shape_968,this.shape_969,this.shape_970,this.shape_971,this.shape_972,this.shape_973,this.shape_974,this.shape_975,this.shape_976,this.shape_977,this.shape_978,this.shape_979,this.shape_980,this.shape_981,this.shape_982,this.shape_983,this.shape_984,this.shape_985,this.shape_986,this.shape_987,this.shape_988,this.shape_989,this.shape_990,this.shape_991,this.shape_992,this.shape_993,this.shape_994,this.shape_995,this.shape_996,this.shape_997,this.shape_998,this.shape_999,this.shape_1000,this.shape_1001,this.shape_1002,this.shape_1003,this.shape_1004,this.shape_1005,this.shape_1006,this.shape_1007,this.shape_1008,this.shape_1009,this.shape_1010,this.shape_1011,this.shape_1012,this.shape_1013,this.shape_1014,this.shape_1015,this.shape_1016,this.shape_1017,this.shape_1018,this.shape_1019,this.shape_1020,this.shape_1021,this.shape_1022,this.shape_1023,this.shape_1024,this.shape_1025,this.shape_1026,this.shape_1027,this.shape_1028,this.shape_1029,this.shape_1030,this.shape_1031,this.shape_1032,this.shape_1033,this.shape_1034,this.shape_1035,this.shape_1036,this.shape_1037,this.shape_1038,this.shape_1039,this.shape_1040,this.shape_1041,this.shape_1042,this.shape_1043,this.shape_1044,this.shape_1045,this.shape_1046,this.shape_1047,this.shape_1048,this.shape_1049,this.shape_1050,this.shape_1051,this.shape_1052,this.shape_1053,this.shape_1054,this.shape_1055,this.shape_1056,this.shape_1057,this.shape_1058,this.shape_1059,this.shape_1060,this.shape_1061,this.shape_1062,this.shape_1063,this.shape_1064,this.shape_1065,this.shape_1066,this.shape_1067,this.shape_1068,this.shape_1069,this.shape_1070,this.shape_1071,this.shape_1072,this.shape_1073,this.shape_1074,this.shape_1075,this.shape_1076,this.shape_1077,this.shape_1078,this.shape_1079,this.shape_1080,this.shape_1081,this.shape_1082,this.shape_1083,this.shape_1084,this.shape_1085,this.shape_1086,this.shape_1087,this.shape_1088,this.shape_1089,this.shape_1090,this.shape_1091,this.shape_1092,this.shape_1093,this.shape_1094,this.shape_1095,this.shape_1096,this.shape_1097,this.shape_1098,this.shape_1099,this.shape_1100,this.shape_1101,this.shape_1102,this.shape_1103,this.shape_1104,this.shape_1105,this.shape_1106,this.shape_1107,this.shape_1108,this.shape_1109,this.shape_1110,this.shape_1111,this.shape_1112,this.shape_1113,this.shape_1114,this.shape_1115,this.shape_1116,this.shape_1117,this.shape_1118,this.shape_1119,this.shape_1120,this.shape_1121,this.shape_1122,this.shape_1123,this.shape_1124,this.shape_1125,this.shape_1126,this.shape_1127,this.shape_1128,this.shape_1129,this.shape_1130,this.shape_1131,this.shape_1132,this.shape_1133,this.shape_1134,this.shape_1135,this.shape_1136,this.shape_1137,this.shape_1138,this.shape_1139,this.shape_1140,this.shape_1141,this.shape_1142,this.shape_1143,this.shape_1144,this.shape_1145,this.shape_1146,this.shape_1147,this.shape_1148,this.shape_1149,this.shape_1150,this.shape_1151,this.shape_1152,this.shape_1153,this.shape_1154,this.shape_1155,this.shape_1156,this.shape_1157,this.shape_1158,this.shape_1159,this.shape_1160,this.shape_1161,this.shape_1162,this.shape_1163,this.shape_1164,this.shape_1165,this.shape_1166,this.shape_1167,this.shape_1168,this.shape_1169,this.shape_1170,this.shape_1171,this.shape_1172,this.shape_1173,this.shape_1174,this.shape_1175,this.shape_1176,this.shape_1177,this.shape_1178,this.shape_1179,this.shape_1180,this.shape_1181,this.shape_1182,this.shape_1183,this.shape_1184,this.shape_1185,this.shape_1186,this.shape_1187,this.shape_1188,this.shape_1189,this.shape_1190,this.shape_1191,this.shape_1192,this.shape_1193,this.shape_1194,this.shape_1195,this.shape_1196,this.shape_1197,this.shape_1198,this.shape_1199,this.shape_1200,this.shape_1201,this.shape_1202,this.shape_1203,this.shape_1204,this.shape_1205,this.shape_1206,this.shape_1207,this.shape_1208,this.shape_1209,this.shape_1210,this.shape_1211,this.shape_1212,this.shape_1213,this.shape_1214,this.shape_1215,this.shape_1216,this.shape_1217,this.shape_1218,this.shape_1219,this.shape_1220,this.shape_1221,this.shape_1222,this.shape_1223,this.shape_1224,this.shape_1225,this.shape_1226,this.shape_1227,this.shape_1228,this.shape_1229,this.shape_1230,this.shape_1231,this.shape_1232,this.shape_1233,this.shape_1234,this.shape_1235,this.shape_1236,this.shape_1237,this.shape_1238,this.shape_1239,this.shape_1240,this.shape_1241,this.shape_1242,this.shape_1243,this.shape_1244,this.shape_1245,this.shape_1246,this.shape_1247,this.shape_1248,this.shape_1249,this.shape_1250,this.shape_1251,this.shape_1252,this.shape_1253,this.shape_1254,this.shape_1255,this.shape_1256,this.shape_1257,this.shape_1258,this.shape_1259,this.shape_1260,this.shape_1261,this.shape_1262,this.shape_1263,this.shape_1264,this.shape_1265,this.shape_1266,this.shape_1267,this.shape_1268,this.shape_1269,this.shape_1270,this.shape_1271,this.shape_1272,this.shape_1273,this.shape_1274,this.shape_1275,this.shape_1276,this.shape_1277,this.shape_1278,this.shape_1279,this.shape_1280,this.shape_1281,this.shape_1282,this.shape_1283,this.shape_1284,this.shape_1285,this.shape_1286,this.shape_1287,this.shape_1288,this.shape_1289,this.shape_1290,this.shape_1291,this.shape_1292,this.shape_1293,this.shape_1294,this.shape_1295,this.shape_1296,this.shape_1297,this.shape_1298,this.shape_1299,this.shape_1300,this.shape_1301,this.shape_1302,this.shape_1303,this.shape_1304,this.shape_1305,this.shape_1306,this.shape_1307,this.shape_1308,this.shape_1309,this.shape_1310,this.shape_1311,this.shape_1312,this.shape_1313,this.shape_1314,this.shape_1315,this.shape_1316,this.shape_1317,this.shape_1318,this.shape_1319,this.shape_1320,this.shape_1321,this.shape_1322,this.shape_1323,this.shape_1324,this.shape_1325,this.shape_1326,this.shape_1327,this.shape_1328,this.shape_1329,this.shape_1330,this.shape_1331,this.shape_1332,this.shape_1333,this.shape_1334,this.shape_1335,this.shape_1336,this.shape_1337,this.shape_1338,this.shape_1339,this.shape_1340,this.shape_1341,this.shape_1342,this.shape_1343,this.shape_1344,this.shape_1345,this.shape_1346,this.shape_1347,this.shape_1348,this.shape_1349,this.shape_1350,this.shape_1351,this.shape_1352,this.shape_1353,this.shape_1354,this.shape_1355,this.shape_1356,this.shape_1357,this.shape_1358,this.shape_1359,this.shape_1360,this.shape_1361,this.shape_1362,this.shape_1363,this.shape_1364,this.shape_1365,this.shape_1366,this.shape_1367,this.shape_1368,this.shape_1369,this.shape_1370,this.shape_1371,this.shape_1372,this.shape_1373,this.shape_1374,this.shape_1375,this.shape_1376,this.shape_1377,this.shape_1378,this.shape_1379,this.shape_1380,this.shape_1381,this.shape_1382,this.shape_1383,this.shape_1384,this.shape_1385,this.shape_1386,this.shape_1387,this.shape_1388,this.shape_1389,this.shape_1390,this.shape_1391,this.shape_1392,this.shape_1393,this.shape_1394,this.shape_1395,this.shape_1396,this.shape_1397,this.shape_1398,this.shape_1399,this.shape_1400,this.shape_1401,this.shape_1402,this.shape_1403,this.shape_1404,this.shape_1405,this.shape_1406,this.shape_1407,this.shape_1408,this.shape_1409,this.shape_1410,this.shape_1411,this.shape_1412,this.shape_1413,this.shape_1414,this.shape_1415,this.shape_1416,this.shape_1417,this.shape_1418,this.shape_1419,this.shape_1420,this.shape_1421,this.shape_1422,this.shape_1423,this.shape_1424,this.shape_1425,this.shape_1426,this.shape_1427,this.shape_1428,this.shape_1429,this.shape_1430,this.shape_1431,this.shape_1432,this.shape_1433,this.shape_1434,this.shape_1435,this.shape_1436,this.shape_1437,this.shape_1438,this.shape_1439,this.shape_1440,this.shape_1441,this.shape_1442,this.shape_1443,this.shape_1444,this.shape_1445,this.shape_1446,this.shape_1447,this.shape_1448,this.shape_1449,this.shape_1450,this.shape_1451,this.shape_1452,this.shape_1453,this.shape_1454,this.shape_1455,this.shape_1456,this.shape_1457,this.shape_1458,this.shape_1459,this.shape_1460,this.shape_1461,this.shape_1462,this.shape_1463,this.shape_1464,this.shape_1465,this.shape_1466,this.shape_1467,this.shape_1468,this.shape_1469,this.shape_1470,this.shape_1471,this.shape_1472,this.shape_1473,this.shape_1474,this.shape_1475,this.shape_1476,this.shape_1477,this.shape_1478,this.shape_1479,this.shape_1480,this.shape_1481,this.shape_1482,this.shape_1483,this.shape_1484,this.shape_1485,this.shape_1486,this.shape_1487,this.shape_1488,this.shape_1489,this.shape_1490,this.shape_1491,this.shape_1492,this.shape_1493,this.shape_1494,this.shape_1495,this.shape_1496,this.shape_1497,this.shape_1498,this.shape_1499,this.shape_1500];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(12.3,12,275,275), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A1UVVMAAAgqpMAqpAAAMAAAAqpg");
	mask_2.setTransform(145.3,145.3);

	// Capa 3
	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#345B84").s().p("AgEACQAFgJAEAKg");
	this.shape_1501.setTransform(56.7,175.1);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#2C4D6C").s().p("AgHARQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgHgYAZgIQAQAVgZAOIgBAAIgEgBg");
	this.shape_1502.setTransform(164.2,141.8);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#2C4D6C").s().p("AAFACIgJABQAEgLAFAKg");
	this.shape_1503.setTransform(168.5,142.8);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#365E89").s().p("AgKgKIAKABIAKABIABATQgUAAgBgVg");
	this.shape_1504.setTransform(57.2,176.5);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#25415A").s().p("AADASQgDgLgGAKIgVAAQgNgBgIgLIA0gUIAKAAIAigEQACAQgMAJQgHAFgRAJg");
	this.shape_1505.setTransform(56.9,173.6);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#31567A").s().p("AgVgaIAJgBIAMAKQAAAXAWALIgLAKIgVABQgMgXABgfg");
	this.shape_1506.setTransform(173.5,139.2);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#3A6595").s().p("AAGgKQgBAPgKAGQABgQAKgFg");
	this.shape_1507.setTransform(126,124);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#2C4D6C").s().p("AgWAcIAAgWQADgBAQgUQALgOAPACIgOAdQgJASgMAIg");
	this.shape_1508.setTransform(163.5,148);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#25415A").s().p("Ag8ACQAIgtgMgWQAtARAWABQAjACAbgYIgTASQgCAgAMAWQgCATgLgBIgVgIQgGgLgEAMIgVAVQgQgBgLAOQgRAUgCACQgNgXAIgtgAglAQQAAABABAAQAAAAAAABQABAAABAAQAAABABAAQAEABABgBQAagOgQgUQgaAHAHAYg");
	this.shape_1509.setTransform(166.8,141.7);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#3A6595").s().p("AgJAGIAQgNIACAPg");
	this.shape_1510.setTransform(162.7,116.5);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#20374B").s().p("AgDAEIgFgEIAIgEIAJAEQgGAFgDAAIgDgBg");
	this.shape_1511.setTransform(164,108.8);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#2F5173").s().p("AgFADQAFgKAGAKg");
	this.shape_1512.setTransform(88,49.9);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#2F5173").s().p("AgCABIABgDIAEACIgBADg");
	this.shape_1513.setTransform(42.8,53);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#365E89").s().p("AAOARQgUgDgJACIgOgJQgGgGADgIQADgIAJgBIAQAAQASAAAHADQAOAEgBALQgDAPgQAAIgBAAg");
	this.shape_1514.setTransform(49.9,78.7);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#345B84").s().p("AgFAGQAAgBgBAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgFAFgCIAJgCIgCAJQgCAFgFABIgEgCg");
	this.shape_1515.setTransform(24,82.3);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#345B84").s().p("AgWAGQABgQALgFIAgAAIAAAfQgYgNgUADg");
	this.shape_1516.setTransform(27.1,80.9);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#31567A").s().p("AARAaQgNgXgVAEQgBgIgOgXQgMgUADgOQApAPAXAgQAYAggFAmQgJgEgQgdg");
	this.shape_1517.setTransform(37.9,80.7);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#31567A").s().p("AgLAHQAEgHADgDQAEgFAHACQACABABAFIACAIg");
	this.shape_1518.setTransform(67.3,128.8);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#345B84").s().p("AgFADIADgIIAIAEQgCAHgBAAIgBAAIgHgDg");
	this.shape_1519.setTransform(49.4,97.1);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#386190").s().p("AgBAGQgGgCAAgFQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQABAAAAgBQABAAAAAAQAAAAABAAQAFABACAFIACAJIgJgCg");
	this.shape_1520.setTransform(76.6,89.6);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#386190").s().p("AgLgbQAWAJABAPQAAALgMAUg");
	this.shape_1521.setTransform(44,120);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#37608D").s().p("AgmAbQAegvAJgGQAJgGAdAPQgYgLgPAfQgLAagSAAQgEAAgFgCg");
	this.shape_1522.setTransform(41.6,131.9);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#32577E").s().p("AgDAWQgegSgRgCQgFAAgDgHQgDgIADgHQADgIAHADIAMAEQARgBAaAUQAcAUAagCQgUALgTAAQgNAAgMgFg");
	this.shape_1523.setTransform(62.3,111.7);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#32577E").s().p("AAAA2QgMgCgFgPQgFgOAEgOIAMgaQAHgSgBgTQARATADAWQABAMgBAUQABAWgBADQgDALgLAAIgGgBg");
	this.shape_1524.setTransform(63.1,121.4);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#25415A").s().p("AgXApQgLgGACgHQAHgkAIgOQANgaAkAGQAHAXgXAVQgZAagCAOQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAgGgDg");
	this.shape_1525.setTransform(50.7,157.4);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#37608D").s().p("AgYAMIgEgcQgCgQANgDQAHgCARABQAcgBgHAXQgGAXgEAHQgJAQgRAFQgMgIgEgRg");
	this.shape_1526.setTransform(43.8,145.6);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#284662").s().p("AA2AsQgPgngkAGQgoAOgTgDIgLgXIA4gHQAegHANgdIAKABQgFAQATAbQATAagLATg");
	this.shape_1527.setTransform(51.8,167.6);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#31567A").s().p("AgrAvQgEgMgEgFQAagLgDgRQgBgDgPgdIgJgJQgEgGAHgGQAEgFAGABQAGAAADAFQAQAYAXgGQAOgEAbgMQgCAGAHAdQAFAUgPANQgHgCgJgSQgJgPgNAEQgMADgBAOQgBAXgBACIgGAQQgEAJgIABIgBAAQgJAAgGgKg");
	this.shape_1528.setTransform(58,134.4);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#345B84").s().p("AgQAAIAhgKQgBAOgKAEQgGADgQAAg");
	this.shape_1529.setTransform(33.2,55.8);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#345B84").s().p("AgFAGIALgLIgBALg");
	this.shape_1530.setTransform(26.6,63.1);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#2F5173").s().p("AgGAAIANgEIAAABIgLAHg");
	this.shape_1531.setTransform(14.1,54);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#2F5173").s().p("AgKgKQAVABAAAUQgUAAgBgVg");
	this.shape_1532.setTransform(19.3,54.7);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#2F5173").s().p("AgKgEIAJgIQAEgFACABQAGACAAAIIAAAMIgVALg");
	this.shape_1533.setTransform(21.5,56.3);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#345B84").s().p("AgUgJIAVgLIAAAAIAPAOQAJAIgFALQgBADgEADQgEACgDAAQgaAAgCgeg");
	this.shape_1534.setTransform(22.5,59);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#2C4D6C").s().p("AglAiIABgLIAAAAIAKgMQAPgWgCgVQAKgGAAgQIAKALIAAALQACAKgHAWQAAASAfgBQAHgBgEALIgHARQgOALgOAAQgSAAgUgVg");
	this.shape_1535.setTransform(30.8,60.2);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#3A6595").s().p("AgKgEQAPgBAGALQgPAAgGgKg");
	this.shape_1536.setTransform(151.2,152.5);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#345B84").s().p("AAAAIQgHgMgUAAIAAgXQAFgIAJgCQAEgBAOAAIAKAAQAKANADAUIAAAhIgWALQAAgUgGgLg");
	this.shape_1537.setTransform(160.7,154.7);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#03060C").s().p("AgCAFQgFgDgEgIQAQAAAHALQgFACgEAAQgDAAgCgCg");
	this.shape_1538.setTransform(211.5,270);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#365E89").s().p("AgGACIAEgHQACgBAGAFIgCADQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAIAAAAIgIgEg");
	this.shape_1539.setTransform(124.4,215.6);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#32577E").s().p("AgGAOIgQgOIAAgKIAMgKIAhAAQgBAHABAOQgBAMgKAFQgEADgEAAQgFAAgFgHg");
	this.shape_1540.setTransform(176.9,143);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#172734").s().p("AgGAOQACgZgNgCQAEgLALgEQACgCARgDIgBBCIgGABQgQAAAAgUg");
	this.shape_1541.setTransform(170.7,150.8);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#20374B").s().p("AgBBoQAAgBAHgTQAFgNgXAAQgIAAgKgHIgTgNIAAgiQgCgSgKgNQANgJAIgRIAPgfIAVgVIAKgBIAVAIQALABACgTIAWgBIgBAKQgIAFgCASQgBASgKAFQgRADgDABQgLAEgEAMQANABgCAaQAAAWAXgEQASAOgQAPQgSASAHAJQgCATgEAGQgFAHgKAAIgKgBg");
	this.shape_1542.setTransform(168.4,152.4);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#32577E").s().p("AgFADQAFgLAGALg");
	this.shape_1543.setTransform(35.5,208.6);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#32577E").s().p("AgBAIQgDAAgCgGIgEgJIAVAAIgDALQgBAEgGAAIgCAAg");
	this.shape_1544.setTransform(33.8,209.7);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#32577E").s().p("AgEADQAFgLAFALg");
	this.shape_1545.setTransform(157.3,169.6);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#386190").s().p("AgVgLIArgDIAAAWQgNAHgJAAQgSAAgDgag");
	this.shape_1546.setTransform(144.5,173.5);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#386190").s().p("AgRALQgBgFADgWQACgPAMADQARAFACgBQgMATgCAjQgTgEgCgPg");
	this.shape_1547.setTransform(154,172.4);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#2F5173").s().p("AABAnIgYgQQgNgKAEgRIADgEQASAFAIgKQADgGACgTQATACAIANQAGAJgBAUQgWAJAAAYg");
	this.shape_1548.setTransform(171.2,163.6);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#25415A").s().p("AggAnIgBgWQACgjAMgTQAFABAEgBIAsgBQABAOgSAUQgRASAAAPQgOgDgHANg");
	this.shape_1549.setTransform(157.8,173.7);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#03060C").s().p("AggASQgdgRgIgBQAVgaAlAAQATAAAqAJQAUACAAAOQAAAMgSAMIgtADIgJABQgOAAgQgJg");
	this.shape_1550.setTransform(141.5,169.6);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#31567A").s().p("AgEgCIAKAAQgDAFgDAAQgCAAgCgFg");
	this.shape_1551.setTransform(94.8,155.5);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#31567A").s().p("AgMAOQgFgOALgQQgBgPACgFQADgKARAIQgHAWAAAPQgBAVAIAWQgXgOgEgOg");
	this.shape_1552.setTransform(88.2,163.6);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#37608D").s().p("AAkgDQgQgEgUALQgZAOgKACQASg/A1Aog");
	this.shape_1553.setTransform(69.8,162.3);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#345B84").s().p("AgWARQgTgbAFgQQAUAHARgSQAXgWAIgCQAJAQgDAYIgGAnQgPAXADARIgiAEQALgTgTgag");
	this.shape_1554.setTransform(59.7,165.9);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#37608D").s().p("AgCgFQAKAFgKAGg");
	this.shape_1555.setTransform(181.6,184.9);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#2F5173").s().p("AAAgDIABADIgBAEg");
	this.shape_1556.setTransform(167.5,186.6);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#2F5173").s().p("AgfAWQgEgGACgIQAEgTAUgGIArgLQgLAOgQAXQgMARgQACIgBABQgGAAgDgHg");
	this.shape_1557.setTransform(172.6,189);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#2C4D6C").s().p("AAXARQgmgCgHABQgCgCgZgJQgQgFgCgRIBEABIAJAJIAVADQAHAGALABIASACQgOANgYAAIgGgBg");
	this.shape_1558.setTransform(168,206.2);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#345B84").s().p("AgCABQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAEABIgBAEg");
	this.shape_1559.setTransform(79.7,189.4);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#2F5173").s().p("AALAEIgVAAQAKgPALAPg");
	this.shape_1560.setTransform(67.4,189.5);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#31567A").s().p("AgDgEIAKgBIgKALQgGgKAGAAg");
	this.shape_1561.setTransform(54.3,203.9);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#2F5173").s().p("AgFgHQAFgDAQAAQAAAPgKAEQgFACgQAAQAAgNAKgFg");
	this.shape_1562.setTransform(22,178.7);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#31567A").s().p("AgQAHIAhgVQgHAXgBABQgDAFgGAAQgFAAgLgIg");
	this.shape_1563.setTransform(59,200.3);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#2F5173").s().p("AgBASQgKgEABgMIAAgUQAOAFAHAPIgDANQgCAEgEAAIgDgBg");
	this.shape_1564.setTransform(27.1,184);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#2F5173").s().p("AgOAKQgHgJABgRIAWALQAhAJgaAKQgGADgEAAQgIAAgFgHg");
	this.shape_1565.setTransform(68.3,178.2);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#31567A").s().p("AgLAGQgDgKAJgWQAMANAEANQAEAKgDARQgUgIgDgNg");
	this.shape_1566.setTransform(52,197.1);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f("#345B84").s().p("AgYAWQADgfAHgIQALgLAcAVQgQAPgGAFQgLAJgOAAIgCAAg");
	this.shape_1567.setTransform(85.4,189.8);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f("#345B87").s().p("AgCAVQgKgCgGgJQgEgHAAgKQAAgKAJgCIAPgBQANABADACQAHAEgDALQgDALgEAFQgFAHgJAAIgDAAg");
	this.shape_1568.setTransform(78,183.1);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f("#20374B").s().p("AgxAQQAJgVAYgKQAPgFAdgHIAXALIgYAsg");
	this.shape_1569.setTransform(80.3,195.1);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f("#2F5173").s().p("AgIBCQgXgDgHgGIgCgrQARgIAHgGQAMgIgBgQQgEgRAPgXIAggiIABAVIACAKQABAFgBABQgYARAIAaIAOApQgVAGAAAeQAAAfgSAJQAJgbgRgGg");
	this.shape_1570.setTransform(62.4,174.2);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f("#345B84").s().p("AAZAyQADgMgHgFQgUgkgfAIQgRAFgKgEQgKgFgGgOQgIgSALgKIAZgOQATADAogOQAkgGAQAnIg1AVQAIALANABIAVAAQABAVAUAAIABAXQgNAAgOAJIgXAPQgGgFAEgNg");
	this.shape_1571.setTransform(50.7,175.4);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f("#31567A").s().p("AhoAtIgNgqQgIgZAXgRQABgBgBgFIgBgKIALABQAvAIAGAJQAGAKgMAvQATgMA4gGQAwgFAWgaQAFgGAHAIQAGAHACAKQgLAYgcADQghAAgPAEIg6ANQgjAIgVAOg");
	this.shape_1572.setTransform(76.7,172);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f("#2F5173").s().p("AhPBoQACgVgWgSQgZgVgEgNQgIgZAJgEQADgBAXAEQAagBAOgPQALgMAHgbQAFgUANgOQANgQASgDQARgCANANQAJAJAKAUIALAYIgZAOQgLAKAHASQAHAPAKAEQAJAEARgFQAggJAVAmQgkgJgsARQgyAWgZAIIgbAMQgMAEgKAAIgIAAg");
	this.shape_1573.setTransform(39.5,173.8);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f("#25415A").s().p("AgEAHIgIgOQAQgCAJAMQgHAGgFAAQgCAAgDgCg");
	this.shape_1574.setTransform(192.7,152.7);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#345B84").s().p("AgGgHQAGgCAMgCQgBAVgUACQgGgPAJgEg");
	this.shape_1575.setTransform(201.4,140.8);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#25415A").s().p("AgFAGQADgNgJgIIAXgMIAAAhQgIASgOAEIAFgWg");
	this.shape_1576.setTransform(196.9,154.7);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#345B84").s().p("AgbAeIgBgeQAAgRAHgMQAIAAAPAKQAPAJAKgEQAGAfgSAJQgJAEgSAAIgPAAg");
	this.shape_1577.setTransform(205.4,136.6);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#2C4D6C").s().p("AgVAnIgigBIABgJQAUgCABgWQAgADALgGQARgIgFggQAWAHAEAaQAHAoABAEQgpgngkAng");
	this.shape_1578.setTransform(206,139.1);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#31567A").s().p("AgeBPQgMgCgBgMQAAgHAFgQQAIgWgIgmQgJgqAEgSQAEAAAeAIQATAGANgOIAWAAQAAARgBAGQgDANgLACQgjAGgGAaQgDAJAEAqQABATgCAGQgDALgLAAIgFAAg");
	this.shape_1579.setTransform(173.5,124.1);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#20374B").s().p("AAFgGIgCALIgHACQAAgKAJgDg");
	this.shape_1580.setTransform(172,102.3);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#3A6595").s().p("AAFgEIABAHIgLACg");
	this.shape_1581.setTransform(101.4,34.1);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#2C4D6C").s().p("AgDACIgBgKIAKgCIgCAVQgFgDgCgGgAgFgIIABAAIAAAAg");
	this.shape_1582.setTransform(101.4,35.5);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#32577E").s().p("AgGAGQgCgDgEgRQAMABAFAJQAFAGADANIgEAAQgKAAgFgJg");
	this.shape_1583.setTransform(99.7,38.4);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#2F5173").s().p("AgBgBIADgDIAAAJg");
	this.shape_1584.setTransform(90.6,44.1);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#2F5173").s().p("AAAgEIAEAJQgNgBAJgIg");
	this.shape_1585.setTransform(95.1,46.2);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#2F5173").s().p("AgDgBIAGgFQADAGgDACQgCADgFACg");
	this.shape_1586.setTransform(92.3,48.3);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#365E89").s().p("AgLgRQAVABACAKQACAIgMAQg");
	this.shape_1587.setTransform(83,70);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#32577E").s().p("AAGACIgLABQAFgKAGAJg");
	this.shape_1588.setTransform(110.4,29.8);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#25415A").s().p("AgBAAIABgDIADADIgDAEQAAgBgBAAQAAgBAAgBQAAAAgBgBQAAAAABAAg");
	this.shape_1589.setTransform(165.1,81.5);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#365E89").s().p("AAAAFIgKgJQAPgBAGAKg");
	this.shape_1590.setTransform(134.4,83.2);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#2F5173").s().p("AgUAEQgDgTAPgEQAIgCAVAAIAAAhQgRAIgHACIgDAAQgLAAgDgSg");
	this.shape_1591.setTransform(182.6,127.2);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f("#20374B").s().p("AA3CCQgXgLAAgYIgMgKIgJABIATgSQgbAYgigCQgXgBgtgRQAOgeAFg5QAFg/AKgaIgCgRQAggUAYAZQgEASAJAqQAHAngHAVQgFAQAAAHQABAMALACQAQACADgNQACgGgBgTQgEgpADgKQAGgaAkgGQALgCADgNQABgGAAgRIAWAAIABAWIgKAiIgRABQgKAAgCAJQgCAIAKABIAKABQACARAHAoQAEAigKAKQgUAVAKATIARAdg");
	this.shape_1592.setTransform(170.3,127.9);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#3A6595").s().p("AgKgQIAVAAIAAAWQgGALgOAAg");
	this.shape_1593.setTransform(135.5,85.4);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f("#37608D").s().p("AgLgWQAPABAFALQACAFABARQgEAGgGACIgMADg");
	this.shape_1594.setTransform(133.3,93.8);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#37608D").s().p("AgUADQADgRAYgDQAHgBAEAGQACAEABAIQACAOgMgCQgMgCABAHIgIABQgOAAACgPg");
	this.shape_1595.setTransform(130,90.4);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#37608D").s().p("AgIAXQgNgJgEgSIAhgWQANATADAHQAGAPgNAIQgGAEgGAAQgGAAgHgEg");
	this.shape_1596.setTransform(125.8,96.5);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#365E89").s().p("AgFgKQAKAFABAQQgLgFAAgQg");
	this.shape_1597.setTransform(78,141.9);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#365E89").s().p("AgDAAIADgCIAEACIgEADg");
	this.shape_1598.setTransform(68.5,89.9);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#37608D").s().p("AgKAGIAAgLQAPABAGAKg");
	this.shape_1599.setTransform(94.2,154.7);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#365E89").s().p("AgCAGQgCgDAAgCQAAgCACgDIACgHIAFANIgFAKIgCgGg");
	this.shape_1600.setTransform(72.4,116.1);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f("#37608D").s().p("AAFAPQgLgCgEgDQgGgFACgJQABgDAEgDQAEgEACABQAKACAEAIQAEAGABAMg");
	this.shape_1601.setTransform(92.6,150.4);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f("#31567A").s().p("AgTAgQgHgBgEgHQgDgHADgHQADgHAIABQAPAAANgOQAQgTAHgDQAEAVgOAPQgIAJgUAPQgFAFgFAAIgDgBg");
	this.shape_1602.setTransform(82,111.6);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f("#32577E").s().p("AAAADQgDgDgUABQgSACgFgQIApgNQAIALARAAQAIAAATgDIgKApQgDAEgEAAQgLAAgTgYg");
	this.shape_1603.setTransform(85.9,122.2);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f("#37608D").s().p("AgUAMQgGgJgHgaQAMADAbgKQAYgEAEAhIgBAKQgRgIgDAKQgCAFAAAPQgVgCgKgRg");
	this.shape_1604.setTransform(86.3,158.8);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f("#37608D").s().p("AgsCnIgKgBQAAgKAJgMQAKgPABgHQAEghgBgFQgEgTgfABQgDgRgDgIQgFgMgZABQgaABABgWQAAgMAMgdIAKgQQAGgJgGgJQgIgJgJAFQgLAIgFACQgQAFgIgDQgMgDgDgQIgKgLQgFgHALgHQAIgDAOgKQANgFAKAQQAIAMAWgDQAWgEAIAKQAEAEAEANQAGAKAKAAQAIgBAEgJIAGgQQABgDABgWQABgPANgEQANgDAIAPQAJASAHADQAPgOgFgUQgHgdACgGIA3AAQAAAFAGARQAFANgIAFQgZAQACAYQAAANAJAeIgCAEIACgEQAZARAcgGQASgEAegTIAAABQAAARALAFQALAJgCAKQgBAHgLAJQgbAZATAdQgSAwgRAIQgSAIgqgZQgNgGgDAEIgDAKQgLAVgUAJQgIADgWAVQgNANgOAAQgGAAgFgCg");
	this.shape_1605.setTransform(60.5,146.5);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f("#365E89").s().p("AgFALIAAgVIALAAIAAAVg");
	this.shape_1606.setTransform(137.2,84.8);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f("#2F5173").s().p("AgKgKQAVABAAAUIgDAAQgTAAABgVg");
	this.shape_1607.setTransform(136.6,99.3);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f("#345B84").s().p("AgFgLQAEgEAEACQAEABAEAGIAAAAQgKAGgBAPQgSgNANgNg");
	this.shape_1608.setTransform(125.5,123.5);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f("#32577E").s().p("AgKAQQAAgXAVgJIAAAhg");
	this.shape_1609.setTransform(138.9,81);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f("#386190").s().p("AgKANIAAgPQABgKAHAAQALgBABAKIABAQg");
	this.shape_1610.setTransform(141.1,101.4);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f("#365E89").s().p("AgLgKQAGgGAIADIAOAHIgBAKIgVALQgSgOAMgLg");
	this.shape_1611.setTransform(105.9,130.3);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f("#32577E").s().p("AgKAGQAAgNgBgGIAVgLIACABIgCAXQgCAPgLAKQgGgHgBgMg");
	this.shape_1612.setTransform(106.5,133.2);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f("#2F5173").s().p("AgbAAIANgBQAGgDAEgGIAfgLQABALgJALQgMARgBAEIgDAAQgSAAgMgWg");
	this.shape_1613.setTransform(135,96.1);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f("#32577E").s().p("AgXARIgBgBIAAgLQALgFABgQIAUAAQABADALAIQAIAGgEAFQgGALgQAAIgZAAg");
	this.shape_1614.setTransform(110.1,129.1);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f("#37608D").s().p("AgQAMIAAghIAWAAQAKAIABAKQABAJgHAKQgGAGgFAAQgHAAgJgKg");
	this.shape_1615.setTransform(141.7,81.5);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f("#25415A").s().p("AgMAVIAChBQAdATgHAZQgEAPgRAeg");
	this.shape_1616.setTransform(163.4,85.9);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f("#345B84").s().p("AgTAAQAKgEABgRQAZACADAdQAAADgDADQgEAEgDABIgKABQgRAAgCgWg");
	this.shape_1617.setTransform(127.5,125);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f("#37608D").s().p("AgJAcQgGgLgQAAQgIgRAVgHQAVgIgCgMIATABQAKACAFAIQgXAJAAAYIAAALg");
	this.shape_1618.setTransform(136.5,80.9);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f("#37608D").s().p("AgCAiQABgPgOgPQgRgSgDgIQAQAAAFgLIAMAAIAVAYQAnArgyAAIgKAAg");
	this.shape_1619.setTransform(138.1,89.3);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f("#31567A").s().p("AgRAWQgMgZABgUQABgkA1gGIADAkQgMASAAAVQABAQAJAXIgWARIgWgsg");
	this.shape_1620.setTransform(159.5,94.6);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f("#172734").s().p("AgqATQgIgSAHgPQAHgPAQgJQATgKAUAFQAdAFAAAWQAAAPgKgBQgLgFgGAAQgVACgDAPIgDAfQgCAFgGAAQgUgIgIgTg");
	this.shape_1621.setTransform(129.3,137.2);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f("#03060C").s().p("AgVA3QgxgKgyhPQAGAAACgFQBGgNAmgDQA7gDAvAOQAaAHgJASQgFAJgNATQgFAAgBABQg6AvgrAAQgIAAgHgCg");
	this.shape_1622.setTransform(139.9,145.3);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f("#365E89").s().p("AhDCpIAAg4QAdACAJgJQAMgLgLgdQgIgXAJgaQAEgOARgeQAQgegBgaQAAgcgRgbQgLgOAGgHQAHgFAMAHQATAJAIgGQAIgFAEgSQACgDACACIATADQgJAagFA/QgFA6gOAdQAMAWgJAuQgHAtANAXIAAAVQgPAAgEABQgKACgEAIIg3ALQgGgLgRAAgAhDBxIgBAAIABgBIAAABg");
	this.shape_1623.setTransform(156.8,135);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f("#03060C").s().p("ABvBGQgegIgEAAQgYgZggAUIgRAPQgBgBgBAAQAAgBgBAAQgBAAAAABQAAAAAAABQgagVgoAGQhAAJgEAAQgigDgIgZQgEgegFgMQgJgYARgBQAKgBAUADQAKgBBNgDQA0gCAggPIBAgMIAOgJIAIgCQAhACAUAXQAPARALAiQABASgUANQgXAOgDAMQgJAKgNAAIgLgCgAARgKIAFADIAEABQADAAAGgFIgJgFg");
	this.shape_1624.setTransform(161.4,110);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f("#345B87").s().p("AgDAFIgJgOIAUAAIAEARIgHACQgFAAgDgFg");
	this.shape_1625.setTransform(111.1,14.3);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f("#345B84").s().p("AgPAcIgBgLIALgVQABgRAKgGIALAXIAAAUIgMAMg");
	this.shape_1626.setTransform(111.5,10.5);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f("#345B87").s().p("AgcAMIAAgUIAQgFQABAAALgRQAHgKAMAKQALALgCANQgBANgMALIgUASg");
	this.shape_1627.setTransform(116,10.9);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f("#32577E").s().p("AgEgDQAAgGAJAGIgJAKIAAgKg");
	this.shape_1628.setTransform(111.5,27.2);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f("#32577E").s().p("AgOgKIAVABQAHAFABAEQAAAGgIADIgHACQgMAAgCgVg");
	this.shape_1629.setTransform(110.2,22.2);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f("#32577E").s().p("AAEBCIgbgMIgTgUQgJgMgEgMIALghQAVAFAMgUQAPgaAHgDIAUgCQAaAMgBAiQgTANAEAYQAGAigDAHIgBABIgKAKQgGAEgIAAQgHAAgIgEg");
	this.shape_1630.setTransform(97.6,27.9);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f("#3A6595").s().p("AAAgFIAKABIAAAHIgTACg");
	this.shape_1631.setTransform(99.8,20.6);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f("#3A6595").s().p("AgHAKQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQgBgJAGgEQAEgDAKgCQgBAMgCADQgDAHgIACIAAABIgDgDg");
	this.shape_1632.setTransform(255.2,131.9);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f("#3A6595").s().p("AABAmQgDgWgQAFQgXAHgCgBIgMgLQgCgMAGgPIAJgbQA/ALAjAWQgHAEgPAYQgKAQgQAAIgHgBgAA4gFIAAAAIAAAAIAAAAgAA4gFIAAAAg");
	this.shape_1633.setTransform(93,21.7);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f("#2F5173").s().p("AgEgBIAJgBQgCAFgDAAQgBAAgDgEg");
	this.shape_1634.setTransform(76.8,29.2);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f("#2F5173").s().p("AgLAFQAIgKAPAAQgGALgOAAIgDgBg");
	this.shape_1635.setTransform(78.5,28.4);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f("#284662").s().p("AAAAFIgKgJQAPAAAGAJg");
	this.shape_1636.setTransform(86.4,29.5);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f("#2F5173").s().p("AgIAEQAAgCAIgSQAJAGABAQIgBALQgSgCABgLg");
	this.shape_1637.setTransform(88.7,35.1);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f("#2F5173").s().p("AAAAdQgXgFAFgUQAHgfgBgCIAWALIAKAKQgCAHACATQgBAMgMAAIgHgBg");
	this.shape_1638.setTransform(84.3,30.9);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f("#284662").s().p("AgEAmQgMgHgFgBQgBgSgKgFQAAgEAKgKQAJgJgIgKQAFgKARgBQADAMAKAMIATATQgBACgOAFQgKAEAEAMQgFAJgHAAIgEAAg");
	this.shape_1639.setTransform(91.9,32.7);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f("#2F5173").s().p("AgQAgQgGgLgPAAIgBAAQACgaAfgSQADAAAWgHQAPgEAEAWIgLAgQgRABgFALg");
	this.shape_1640.setTransform(89.2,26.9);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f("#31567A").s().p("AgHAAIAPgFIgBAKg");
	this.shape_1641.setTransform(85.7,40.7);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f("#2C4D6C").s().p("AADgLQAFALAAAEQgCAHgMAAQgBgOAKgIg");
	this.shape_1642.setTransform(64.8,54.7);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f("#31567A").s().p("AgFAMIAAgVQANgJgDARQgBACACAJQgBADgEAAIgGgBg");
	this.shape_1643.setTransform(83.6,44.5);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f("#25415A").s().p("AgKAVIAAgqIAUgGIABAlQgEAOgCACQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgEAAgHgHg");
	this.shape_1644.setTransform(59.6,61.5);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f("#2C4D6C").s().p("AgSARQAOgYgDgUQAiAEgLAUQgPAbADAEg");
	this.shape_1645.setTransform(49.1,55.2);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f("#25415A").s().p("AgVAhQAJgNADgTIAAghIAfAKIAAALQgLAHABAPQgBAPgKAFQgFACgLAAIgGAAg");
	this.shape_1646.setTransform(62.9,54.7);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f("#2C4D6C").s().p("AgBATQgSgEgOgdQAiAGAhgKIAAAVQgTAQgOAAIgCAAg");
	this.shape_1647.setTransform(79.6,45.4);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f("#284662").s().p("AgIAeQgQgCADgVQAEgWgKgGQAKgMAHAFQADADADANQAHAZAZgNQAAARgNAIQgIAGgJAAIgGgBg");
	this.shape_1648.setTransform(65.7,64.7);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f("#365E89").s().p("AgNgSQgEgKAEgJQAFgIAKgDQAIgCADAHQACADACAKIAAAhQgDATgJANIAAAHIgVAHQAQgigNghg");
	this.shape_1649.setTransform(60.1,54.5);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f("#25415A").s().p("AgWgFQgHgYABgJIAYAAIAhA3IghAWQgLgWgHgWg");
	this.shape_1650.setTransform(53.3,61.9);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f("#2C4D6C").s().p("AgVAFQgCgpAXgYQAKgLAMgCQgMAYgDArQgEAzgDAPIgVAOQACgIgCg9g");
	this.shape_1651.setTransform(71.9,55.3);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f("#25415A").s().p("AgsAtIAdgqQARgYgBgWIAqAAQADAKgDAMIgHAVIgsAtg");
	this.shape_1652.setTransform(87.4,54.7);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f("#25415A").s().p("AgaAhQgFgQgKgFQgFgUANgSQAHgKATgTQADAPgDAfQACAZAeAGQARARABAFQACALgdAAIggAAQgEgFgGgRg");
	this.shape_1653.setTransform(79.3,59.2);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f("#32577E").s().p("AgZAAQADgqAMgYIAYAaQAPAQAEAPQgSASgIAKQgLASAEAUQgEAIgKABIgSABQAEgPADg0g");
	this.shape_1654.setTransform(75.2,54.7);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f("#284662").s().p("AgIA9QgFgLgGAKIAAABIAAAAIAAgBQgIgMAHghQAGgdgQgOIAAgLIALAAIAVgVQAGAIAUAPQAMAPgaASIgFACIAFAGIAAATQABALAJAGIgCAVg");
	this.shape_1655.setTransform(89.5,44.1);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f("#32577E").s().p("Ag5AQQgEgCAAgOIABgZQAOgOATAEQALADAUAJQAmALAUgCQgDADgIAcQgGAUgQAAIgBAAQgeAAg3gVg");
	this.shape_1656.setTransform(66.7,29.3);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f("#2C4D6C").s().p("AhMA/QgHgsAdghQAQgTArgcQATgMAKgLQANgNAIgVQAXAsAAAYQABAhghAYIgggKQgCgJgCgEQgDgGgIACQgKACgFAJQgFAIAEAJQAOAjgRAhIAAArIgWAAg");
	this.shape_1657.setTransform(60.5,51.7);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f("#365E89").s().p("AAEBkQgpgIgWgaIAHgRQAEgLgHABQgfABAAgSQAHgWgCgKQARAAAGgDQAKgEABgPIAggYQASgPgGgaQgEgNAMgBIAXACQgDAYAbAIQAfAJADANQADAUgOAZQgYAMgDAMQgFAPAYASQAPAMgBATIgGAiIhHgMgAAbgwIAFABIABgEIgEgBg");
	this.shape_1658.setTransform(39.7,58);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f("#345B84").s().p("AgsB9QgQgsgGglQAWgFANAYQAQAdAJAEQAFgmgYghQgXgggqgOQgRgDgIgLQgHgLAFgPQAEgNAOgEQAMgDANAFQAOAGAkAEQAgAFASAKQAWANACgMQACgIgIgTIAGgiQABgTgPgMQgYgSAFgPQADgMAYgNIAXALIAJAAQgCAJAIAYQAHAXALAWQgUATAWAXQAXAagHAOQgLAEgNgQQgLgOgLAJQgIAGABAPIABAZIgQAAQgJABgDAIQgDAJAGAGIAOAJIAAAMQgCAeAYAeQAKAOABAOQABAOgHASQgUgigQACQgOACgKAiQgDAMgLAIIgTAMQgXgygKgag");
	this.shape_1659.setTransform(42.8,77);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f("#37608D").s().p("AiKBwQgWgXgFgDIgKgFIAAgMQAIgCAVADQASABACgQQACgNgOgDQgHgDgTAAIgBgaQgBgOAIgHQALgIALAOQANAOALgDQAHgNgXgaQgWgXAUgUIAhgVIAXAAQALAKAFgFQACgCAEgOIAWgBQAKAHgEAXQgDAUAQADQAMADALgIQANgIAAgRQALgFABgPIAWgOIASgBQAKgBAFgIQAKAGAEAPQAHASADAFQAKAeAhAFIANAkQAEADAAADQgCAJgYAVQgRARADAUQgagHgNgBQgWgBgOAVQgIAMgLgCQgNgCgEgTIgBgLQgTg8gPgHQgPgIhJAPQArAMAJAJQAQAQglAbQgBABgBABQAAAAgBABQAAAAAAABQAAAAAAABQAbAegbAPIgXAMQgNAHAAAKQgRgBgPgSg");
	this.shape_1660.setTransform(66,73.5);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f("#32577E").s().p("AgYAGQgDgQAKgcQAHABAPgBQAMAAAFAKQAGALgFAHQgEAHgPAEQgMAFAKANQAMAOgJAGQgagLgDgWg");
	this.shape_1661.setTransform(13.2,76.4);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f("#31567A").s().p("AALAZQgQgsgBgRQgIAAgLAOQgKANgLgCIAAgWQAEgFAGgTQAEgPAJgGQApgbADAzQgBAMASAhQAPAbgLAZIgJAXQgGAOgHAJQAGgagPgmg");
	this.shape_1662.setTransform(16.1,185.5);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f("#386190").s().p("AAAgGIAEADIgHAKg");
	this.shape_1663.setTransform(21.9,123.2);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f("#37608D").s().p("AAAAOQgHgDgBgJIgBgPQAKACAEADQAGAEgBAJQgBADgEADIgFADIAAAAg");
	this.shape_1664.setTransform(4.6,141);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f("#31567A").s().p("AADgFIAAALQgLgGALgFg");
	this.shape_1665.setTransform(20.1,91);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f("#31567A").s().p("AgDAAIADgBQACAAACACIgEABg");
	this.shape_1666.setTransform(13.7,92.1);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f("#386190").s().p("AgEAAIAEgHIAFAHIgFAIIgEgIg");
	this.shape_1667.setTransform(7.6,111.1);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f("#31567A").s().p("AgDARIgLghIAVAAQALAHgDAJQgCAGgGALg");
	this.shape_1668.setTransform(21.9,93.2);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f("#386190").s().p("AgLAGQgDgGAAgQIALAAQASACAAALQAAACgIASQgOgBgEgKg");
	this.shape_1669.setTransform(23,96.6);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f("#31567A").s().p("AAAALQAAgHgEgEQgFgEgEADQgXAYgDgPQgBgWgEgEIAhgWIAsAWIAMAsIgeAOIgFABQgLAAABgeg");
	this.shape_1670.setTransform(14.9,85.6);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f("#37608D").s().p("AARA6QgDgQgNABQgfACgCAcIgWAAIAAgMQAAgPgLgGIgMgsIgNgqQgHgZAfgLQAJALAQAAQAJABARgCQAOAAADAGQAEAFgFAMQgKAGgBARIgKACQgFACgBAGQAAAAAAABQAAAAAAABQABAAAAABQABAAAAABIAEACQAGgBACgFIACgKQASgDAaANQAaABASAYQAOAUAAARQAAALgKABIgWgCQgfgFABAgQgKgFgDgUg");
	this.shape_1671.setTransform(25.9,84.2);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f("#31567A").s().p("AgFgFIALAAIAAALg");
	this.shape_1672.setTransform(19.8,197.2);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f("#03060C").s().p("AgEAAIAEgFIAGAFIgHAGQgFgDACgDg");
	this.shape_1673.setTransform(5.5,265);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f("#345B87").s().p("AgIgKQANACADADQAFAFgLALg");
	this.shape_1674.setTransform(9,234.6);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f("#345B87").s().p("AALgKQAAAUgVABQAAgUAVgBg");
	this.shape_1675.setTransform(8.1,238);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f("#32577E").s().p("AgKgLIAVABQAAAUgVACg");
	this.shape_1676.setTransform(24.9,208.9);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f("#345B87").s().p("AACgKQALALgFAFQgDADgNACQAAgPAKgGg");
	this.shape_1677.setTransform(11.3,204.4);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f("#345B87").s().p("AgMAEQgDgLALgBIARgBIAAALIgOAGIgFACQgFAAgBgGg");
	this.shape_1678.setTransform(6.8,230);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f("#345B87").s().p("AgHAIQgDgEABgFQABgCADgEQADgDACAAQABAAAEADIAFAGIgEAHQgDAEgCABIgCAAQgEAAgCgDg");
	this.shape_1679.setTransform(3.7,235.2);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f("#31567A").s().p("AACALIgLgDQgHgDAEgHQACgHAJgBIAQAAIgCAVg");
	this.shape_1680.setTransform(23.6,206.7);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f("#31567A").s().p("AAFAOQgFgCgGgJQgEgEgQgOIAXAAIARACQAKACACALQABADgCAEQgCAFgDABQgEADgEAAQgEAAgDgCg");
	this.shape_1681.setTransform(7.4,210.5);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f("#31567A").s().p("AABAIQgTgFgOADIAAgWQAfAAAIADQAUAHAGAWIgggIg");
	this.shape_1682.setTransform(29.3,205);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f("#345B87").s().p("AgZAHQgDgGADgGQADgHAHgCQAigNAIAmIgLAAQgDgBgSAHIgGABQgJAAgFgLg");
	this.shape_1683.setTransform(17.7,211.2);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f("#37608D").s().p("AAmAcQgFgMgGAMIgWAAIhCgLIgMAAIACgWIAKAAQAOgCAUAFIAfAHQAPABAQgNQATgSAHgCQgEAFAFAMIAKATQAIATgdAAIgNAAg");
	this.shape_1684.setTransform(32.2,206.1);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f("#345B87").s().p("AAMBSIghgYIgGg+QgEgkgNgYQALACAKgNQALgOAIAAQABARAQAtQAPAlgGAaQABAQAKAGIAMALQgDARgIADIgEABQgHAAgLgIg");
	this.shape_1685.setTransform(15.9,190.8);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f("#37608D").s().p("AhBBvQAGgegHgKQAWgCAAgVIAAgLQAMgMgGgFQgDgDgOgCIAAgsQARgtAkgRQAQgJAHgGQAKgKAEgQQAGgWAKAJIAQAPQAEAUgPAWQgUAdgCAIQgJABgGAEQgIAEADAFQATAlgdAtQgjA3AAAVQAAARgYALQgQgNAGgZg");
	this.shape_1686.setTransform(13.7,232);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f("#365E89").s().p("AgBgEIADAHIgDADIAAgKg");
	this.shape_1687.setTransform(21.7,135.7);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f("#365E89").s().p("AAAADIgGgGIAAAAIANADQgDAEgDAAIgBgBg");
	this.shape_1688.setTransform(13.3,115.4);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f("#365E89").s().p("AgLANQgDgDABgFQACgKAIgEQAFgDAMgBQgBAMgDAFQgEAIgKACIgCAAQgDAAgCgBg");
	this.shape_1689.setTransform(26.8,139.9);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f("#365E89").s().p("AgRAAQACgNAQgBQAJgBAEAEQAFAEgBAHQAAAOgSABQgUAAADgPg");
	this.shape_1690.setTransform(20.5,142.5);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f("#365E89").s().p("AgeAKQAJgFACgJIABgTIAxASQgLADgQAVQgFAFgHAAQgKAAgMgOg");
	this.shape_1691.setTransform(17.9,147.6);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f("#32577E").s().p("AAIAVQgHgGgFgDIgSgFQgKgDABgMQAAgHAGgFIAMgHQAMgGAIAFQAHAEAHANIALALIAAAAIgLAgIgNgLg");
	this.shape_1692.setTransform(17.2,99.5);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f("#31567A").s().p("AgYAcQgDgUATg5QAJgFACgSQAUAFACATQABAKgBAVQgLARgBAbIABAuQgigagEgTg");
	this.shape_1693.setTransform(11.2,166.9);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f("#37608D").s().p("AAWAnQgIgUgbgDQghgDgJgIQALghAfgHQARgEApABIALA2IgPAPQgHAIgKAAIgCAAg");
	this.shape_1694.setTransform(38.3,121.2);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f("#2C4D6C").s().p("AAnBKQgKgEAAgUQAAgSgNgDQgQAAgFADQgKAFAAAOIgXACQgCgzgqAbIgBgSQgCgLgJgEIAAguQABgbALgSQASAJAiASQAfALAbgOIAtBDQgXgDgDABQgJAEAIAYQADANAaAVQAWASgCAUIgiABQgHgQgPgFg");
	this.shape_1695.setTransform(22.1,174.7);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f("#3A6595").s().p("AgjEBQgFgEAAgGQAAgHAEgCQAbgRgIgSQgQgWgGgMQgUgpgmggIAAgLQAHgTAAgCQABgLgTgCQAGgLABgGQADgKgKgHQACgaAfgCQAOgBACAPQADATALAGQgCggAgAEIAVADQAJgBAAgLQAAgQgOgUQgQgZgbgBIABghIgiAAQAFgNgDgFQgEgFgOAAQgSABgJAAQgPgBgJgLQAqgxAZhKIALAAQAhAkAhgZQAWAaApAIIBHALQAJATgCAJQgDALgWgMQgSgLgggEQglgFgOgGQgMgFgMAEQgOADgEANQgEAPAHALQAHALAQADQgBAPALATQAOAXABAKQAFAlARArQAKAaAWAyQAPA5gDBNQgVALgIgJQgFgGAAgWQAAgOgCgGQgEgJgNACQgKABAAAJIABARQgEAbgHAPQgJAWgTALQgIAFgGAAQgGAAgGgFg");
	this.shape_1696.setTransform(33.6,89.8);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f("#365E89").s().p("AkYG/QACgQAMgDQAGgCASAAQAjACAUgUQAUgTACgmIACgMQABgIABABQAoAAgGgVQgOgaACgMQAFgqgNgNQgPgOgoAPQgQAFgIgHQgIgHAFgRQAHgYgYgLQgIgwABgFQACgbAhgPQAQgHgFgbQgFgdALgJQAIAHAhADQAcACAJAUQAKABAJgJIAOgOQAOgTAAgMQgBgPgYgJIASghQAKgUgcgOQAEhNgPg5IAUgMQALgIADgMQAKgiAOgCQAQgCAUAiQAHgSgBgOQgBgOgKgOQgYgeACgeIAKAFQAGAEAVAXQAPARARABQgBgKANgHIAXgLQAcgPgbgfQgBAAAAgBQAAAAABgBQAAAAAAgBQABgBABgBQAlgbgPgQQgJgJgsgMQBJgQAQAIQAPAIATA9IACALQAEASAMACQALACAIgMQAPgVAWABQAMABAbAHQgCARgPACIgZAFQgIAFgBAEQgCAFAEAIQAFALAEABQAEABAEgOQACADAeARQATAMgHAYIgiALIgCgLQgDgFgGgBQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAgBABQAAABgBAAQAAAAAAABQAAAAAAAAQABAGAFADIALACIgGAGQgEADgBADQgEAJgDAVQgEARgQgCQgNgCAAgQQACgUAAgJQgCgggogVQgogUgdAPQgCABgCAEIgEAGQAPALAWAlQATAeAGAAQAkgFAEAWQADANgDAaQADASgBAcIgDAvIAAAAQgVADgHADQgLAHAXAUQAEAEAAAPQAAASABAGQACAHgDAUQABAPAegGQAOgDABAWQABAMgDAZQAAARgGAiQgBAdAhANQAHADgDATQgDAVAIAIQgeASgSAEQgcAGgZgRIAAAAQgJgdAAgOQgCgYAZgPQAIgFgFgNQgGgSAAgEIgCgJQgBgFgBgBQgIgCgEAFQgDADgEAIIggAAQgbAMgOAEQgYAGgQgYQgDgFgGAAQgGgBgEAFQgGAGAEAGIAIAJQAPAdABAEQADARgZALQgIgKgWAEQgWADgIgMQgKgQgNAFQgOAKgIAEQgLAGAFAHIAKAMQADAPAMAEQAIACAQgFQAFgBALgJQAJgFAIAKQAGAIgGAKIgKAQQgMAdAAAMQgBAWAagBQAZgBAEANQADAHADASQgjgGgOAaQgHAOgHAlQgDAHAMAGQALAGABgFQABgOAbgaQAWgWgIgXQAfgCAEATQABAFgEAiQgBAGgKAPQgJANAAAKQgNAcgeAIIg4AGQgKgUgJgIQgNgOgRADQgTADgNAPQgNAOgFAVQgHAagLANQgOAQgaAAgAhtDAQgNADADARIADAdQAEAQAMAIQASgFAJgQQAEgHAHgYQAHgWgdABIgMgBIgNABgAhwBBQgKAGgeAwQAYAJAQghQAOggAZALQgVgLgLAAQgEAAgDACgABfgeIgMAbQgEANAEAOQAFAPAOACQAQADADgNQABgDgBgWQACgUgCgMQgDgWgSgTQACATgHASgAAjiDQgDAHADAIQADAIAFABQARACAeARQAfANAigSQgaABgcgUQgbgVgRABIgMgEIgDAAQgFAAgCAFgAgpj8QAIAEABgBQACAAACgIIgJgEgAD1lCIAAAAg");
	this.shape_1697.setTransform(52.9,122.7);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f("#32577E").s().p("AgDAOQgPgPgPgEIArgiIAYAMQgCAHABAbQAAAVgKAMQgHgEgTgWg");
	this.shape_1698.setTransform(114.4,20.6);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f("#25415A").s().p("AAAAJIgVgKQAJgMAMAGQARAHAFAAQgIAKgJAAIgFgBg");
	this.shape_1699.setTransform(127.8,10.1);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f("#345B87").s().p("AgyAXQABgRgBgIIASAAQAKgBABgHQAGgjAVAAQADAAAnAMQAIAXgLAPQgJANgWALIgZAJIgaAIQgLgIgCgPg");
	this.shape_1700.setTransform(121.6,26.9);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f("#20374B").s().p("AgWAqQgagPAFgbQALgggBgPQAXABATAWQAdAcAGAEIgBAKQgCABgbAWQgJAHgJAAQgIAAgKgGg");
	this.shape_1701.setTransform(36.1,34.8);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f("#345B87").s().p("AgDgEQAHgCAAAFIAAAHg");
	this.shape_1702.setTransform(7.7,47.3);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f("#2F5173").s().p("AgFgKQAJAFABAQQgJgGgBgPg");
	this.shape_1703.setTransform(14.3,48);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f("#345B87").s().p("AgFAMQgEgFAEgHIAFgLQAPAIgMANQgCACgCAAIgDAAIgBAAg");
	this.shape_1704.setTransform(8.2,49.2);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f("#2F5173").s().p("AgQALIAAAAQAAgQALgFIAKAAIAMAVg");
	this.shape_1705.setTransform(16.5,52.4);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f("#345B87").s().p("AgQACQAQgfARAfQgIAMgJAAQgHAAgJgMg");
	this.shape_1706.setTransform(6.4,63.3);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f("#345B84").s().p("AAXAjQgagHgHABIAAAAIAAgNQAAgIgGgCQgCgBgFAFIgJAIQgBgUgWgBIgLgXQAcgRAkAQQAxAXAKABIAKAKQAAAQgKAGQgJAHgNAAIgMgBg");
	this.shape_1707.setTransform(23.7,54);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f("#365E89").s().p("AgaAoQAKgUgEgeQgGgigBgRIArgBQAIAWABAjQABAvACAKIghALg");
	this.shape_1708.setTransform(32.1,49.5);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f("#345B87").s().p("AgjCiIAAgLQAKgHgMgOQgLgNANgEQAOgGAFgHQAFgHgGgLQgFgKgNAAQgPACgHgCQgBgVgEgHQgIgMgUAIIgPAHQgIAEgFgIQgFgIAGgIIALgLIARgOQAKgHgBgLQAIggACgPQACgagIgYQgHgVAQgSQAXgVAJgKQAAAQALAGQAMAGgBAQQgLAFAAARIgOAEIACAFIAMgJIAhAAQABAXAVAAIAAAWQADAfAaAAQADAAAEgCQAEgDABgCQAFgMgJgJIgOgOQAHgBAbAGQAUAFANgKQACAWgOAXIgLALIABAAIgMALQgZBJgqAxQgeALAHAaIAMAqg");
	this.shape_1709.setTransform(17.3,65.3);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f("#284662").s().p("AgEgBQACgJAIgGIgBASQgBAKgJAFQAAgOABgEg");
	this.shape_1710.setTransform(274.7,165.8);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f("#386190").s().p("AACAIQgFAAgCgGIgCgJIAJACQAFACABAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgDACIgBAAg");
	this.shape_1711.setTransform(267.1,95.7);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f("#386190").s().p("AgBAGQgFgCgBgFIACgEQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQAFABADAFIACAJIgKgCg");
	this.shape_1712.setTransform(265.5,101.9);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f("#345B84").s().p("AgbAGQATgXAiABIACAhg");
	this.shape_1713.setTransform(215.5,179.3);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f("#2F5173").s().p("AgggLIALgBIA2AAQgQAZgRAAQgPAAgRgYg");
	this.shape_1714.setTransform(266.3,178.8);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f("#25415A").s().p("AgcAtQAdgOADgaQABgPgKgiIAiABIgCBYg");
	this.shape_1715.setTransform(200.9,147.4);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f("#2C4D6C").s().p("AgaAhIgBghQADgDAJgYQAFgRAQAFQAJADAHASQAIASgDAIQgHATgLAJQgGAFgHAAQgKAAgMgIg");
	this.shape_1716.setTransform(220.9,177.7);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f("#284662").s().p("Ag6gUIAAgjIA3ABQgCAjAkAcQAGAFAOAGQALAGgEAMQgGAPggADQgfg4gvgUg");
	this.shape_1717.setTransform(204,157.4);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f("#2F5173").s().p("AhPAQQAEgHAigZIANgLIALgMQAPgEAHgSQAvAVAgA4QhKAnhHAHQgfgaANgUg");
	this.shape_1718.setTransform(197.6,161.4);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f("#345B84").s().p("AgCAAIACgCIADACIgDAEIgCgEg");
	this.shape_1719.setTransform(161.8,218.4);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f("#31567A").s().p("AgGgHIAJAAIAEAFIgMAKg");
	this.shape_1720.setTransform(172.1,168.3);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f("#25415A").s().p("AAAgGQAFAGgGAHg");
	this.shape_1721.setTransform(132.6,209.4);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f("#172734").s().p("AgEAAQgBgCABgEIAJAHIgDAGg");
	this.shape_1722.setTransform(91.1,194);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f("#32577E").s().p("AgKgGQARAAAEANQgOAAgHgNg");
	this.shape_1723.setTransform(79.4,200.8);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f("#3A6595").s().p("AgKAFQAEgLARAAIgIAKQgDADgDAAQgDAAgEgCg");
	this.shape_1724.setTransform(168,219.7);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f("#386190").s().p("AgLACQAHgMAPADIAAgBIgRARg");
	this.shape_1725.setTransform(156.8,177.4);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f("#172734").s().p("AgGADQAEgGACgBIACAAIAFACIgCAEIgDAEIAAAAIgIgDg");
	this.shape_1726.setTransform(184.9,241.5);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f("#345B87").s().p("AgGgCQgBgHANgCQAFAOgMAJQgFgKAAgEg");
	this.shape_1727.setTransform(182.7,194.5);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f("#20374B").s().p("AgMAJIAAgJIAWgJIACADIABAFQgFALgRAAIgDgBg");
	this.shape_1728.setTransform(30.7,241.4);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f("#3A6595").s().p("AgDAKQgGgBgDgHIgCgLIAdABQAAAJgFAFQgFAEgGAAIgCAAg");
	this.shape_1729.setTransform(165.5,221.2);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f("#3A6595").s().p("AgHgLIAIAFQAGADABADQACAJgPADg");
	this.shape_1730.setTransform(119.7,217.8);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f("#3A6595").s().p("AgJgHQAFgLAQADQABALgIAIQgEAFgMAHQgBgRADgGg");
	this.shape_1731.setTransform(170.3,217.5);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f("#3A6595").s().p("AALgXQADAZgZAWQABgeAVgRg");
	this.shape_1732.setTransform(128.9,217.9);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f("#31567A").s().p("AgLAOQAAgXAVgJIACACQgBANgDAHQgFAKgKAFg");
	this.shape_1733.setTransform(173.6,166.1);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f("#3A6595").s().p("AgPAAQADgKAKAAIASABIgQAUQgSgCADgJg");
	this.shape_1734.setTransform(125.4,222.3);

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f("#32577E").s().p("AgLgCIANgJIAMAOQgDAGgGACIgMABQgKgKAGgEg");
	this.shape_1735.setTransform(48.2,208.9);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f("#3A6595").s().p("AgLgHQADgMAUAEIgHASQgFALgJADQgDgRABgHg");
	this.shape_1736.setTransform(172.5,214.1);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f("#20374B").s().p("AgCgOQAQAFgDANQgCAJgHABIgMABg");
	this.shape_1737.setTransform(188.9,143.4);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f("#2F5173").s().p("AgUANIgEgLQAEgGAIgDQAFgCAJgCQANgDAGAEQAGAEgCANQgKgGgNAGQgMAGgHAAIgDAAg");
	this.shape_1738.setTransform(191.2,234.5);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f("#25415A").s().p("AgXACIAEgSIAbAJQAOAHACARIgGAAQgSAAgXgPg");
	this.shape_1739.setTransform(189,150.2);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f("#37608D").s().p("AgWAbQAKgWAHgKQAKgSASgEIgUA4g");
	this.shape_1740.setTransform(183.6,188.3);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f("#25415A").s().p("AAOAcQgGgCgIgTQgHgOgPABQACgWAUAAQAYASgBAmIgEABg");
	this.shape_1741.setTransform(184.6,163.7);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f("#32577E").s().p("AgJAMQgJgKAAgNQABgKAJAAIAQAAQAKAIABANQAAAGgEARQgPgCgJgJg");
	this.shape_1742.setTransform(183,141.8);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f("#365E89").s().p("AgQAQIAAgsQATABAIANQAGAKAAAUQgGAKgTADg");
	this.shape_1743.setTransform(159.6,157);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f("#31567A").s().p("AgQASQABgYAFgKQAHgQAUgFIgKAyIgHAZg");
	this.shape_1744.setTransform(62.3,197.1);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f("#3A6595").s().p("AgLASQgLgBgHgHQAMgoARAPIAOAQQAJAJAHAAQgCAGgDADIgTABIgRgCg");
	this.shape_1745.setTransform(174.1,204.7);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f("#20374B").s().p("AguAVIAEgLQAdgCANgFQAVgFAMgTIAOAAQgIAlgdAFIg4AAg");
	this.shape_1746.setTransform(194.9,136.2);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f("#2F5173").s().p("AgTAWQgOgfAWgFIAkgIQgFAWgIAKQgKANgSAAIgDgBg");
	this.shape_1747.setTransform(180.1,153.1);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f("#172734").s().p("AgFAcQgIgCgCgKIgBgQQAHgBACgHIACgMQAOgKADADQADACACAZIAAAJQgEALgDAEQgEAFgGAAIgFgBg");
	this.shape_1748.setTransform(27.7,241.5);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f("#31567A").s().p("AgfALIAKgUQAFAAATgIQAPgGALAGIACAHQgBAEACAEQgMACgBAMQgMAJgMAAQgNAAgNgKg");
	this.shape_1749.setTransform(87.5,194.4);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f("#32577E").s().p("AgbAAQgDgLAQgKQAngGADAkQgHAKgNACIgVACQgMgRgCgGg");
	this.shape_1750.setTransform(186.4,200.1);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f("#3A6595").s().p("AAOAVQgEgPgRAAQgYgOgHgTIBNAMIAAArg");
	this.shape_1751.setTransform(79.1,199.5);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f("#3A6595").s().p("AgTAZQgOgEgCgTQAHgVAWgBQAhgBAJgEIgcA0QgWAAgFgCg");
	this.shape_1752.setTransform(164.7,227.5);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f("#172734").s().p("AghAPQAJgoArgBQALACADAKQABAGAAALQgLACgFACQgIADgEAHQgMAJgIABIgBAAQgKAAgIgMg");
	this.shape_1753.setTransform(188.1,233);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f("#37608D").s().p("AgUANIgDgsQAgAQAPAuIgJABQgbAAgIgTg");
	this.shape_1754.setTransform(129.2,264.8);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f("#365E89").s().p("AAgARQgQgGgfAFIglgHQAYgNAIgEQASgJAQgCQAGALAQAAIALAJQAGAGgBAEQAAAJgHAAIAAAAQgEAAgJgDg");
	this.shape_1755.setTransform(148.7,153.9);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f("#3A6595").s().p("AgUALQAAgFAIgkQArABgNA8IgCAAQghAAgDgUg");
	this.shape_1756.setTransform(209.7,261.6);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f("#31567A").s().p("AAEAJQgIgHgVgFIgBgKIABgBQAKgGABgRQAjADAFAXQADALgHAmQgDgTgPgKg");
	this.shape_1757.setTransform(225.3,261.8);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f("#386190").s().p("AgQgIQgBgQADgGQAFgLAOAAIAWgBIAAAMQggALAMATIANAQQAHAJgBAGIg0AMg");
	this.shape_1758.setTransform(65.7,194.1);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f("#32577E").s().p("AgeAUQgBgsArACQAJABAHAJQAGAIgEAEQgRAXgYAAQgJAAgKgDg");
	this.shape_1759.setTransform(79.9,212.1);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.f("#345B84").s().p("AggAXQgFgHAIgMQAIgKgFgHIAQgDQAJgBAFgDQAbgMAEAeQACAOgHAGQgIAGgOgIQgIgGgMAJQgIAFgGAAQgDAAgDgBg");
	this.shape_1760.setTransform(208.6,217.1);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.f("#386190").s().p("AgUAbQgIgHAEgMQAFgRADgHQAHgPARgBQAVAGgDAVQgEASgEAHQgHAMgOAAQgKABgHgGg");
	this.shape_1761.setTransform(141.8,262.7);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.f("#37608D").s().p("AgSAZIgBgSQgDgcAZgSQACgBAFABQAFACABACQALAdgSAQQgDADgCAPQgBALgKACQgKgFgBgLg");
	this.shape_1762.setTransform(148.1,218.9);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.f("#365E89").s().p("AgTAJIgTgiQARACAWgFIAmgJIgLAnQgIAWgNAOQgOgLgMgSg");
	this.shape_1763.setTransform(118.2,211.6);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.f("#3A6595").s().p("AgrAbIBAg4IAXAMQAAAtgfACQgngHgRAEg");
	this.shape_1764.setTransform(175.8,174.9);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.f("#2F5173").s().p("AgOAeQABgGgHgJIgMgPQgNgUAhgLIAxACQAAALgSAPQgQALAGAOQgFAKgJAAQgEAAgFgCg");
	this.shape_1765.setTransform(69.8,194.2);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.f("#2F5173").s().p("AAJAPQgTgJgQAQQgIAJgRgfIAAgDQAUgDAGgKIAWgLIARANQALAHAHAAQAYAAgFAMQgIATABABIgDADIgBAAQgFAAgagNg");
	this.shape_1766.setTransform(163.9,160.3);

	this.shape_1767 = new cjs.Shape();
	this.shape_1767.graphics.f("#345B84").s().p("AgJAXQgegCACgTQACgOAPgFIAagFQAJgBAJAIIAOANQgHARgOAFQgHADgKAAIgJAAg");
	this.shape_1767.setTransform(80.7,241.2);

	this.shape_1768 = new cjs.Shape();
	this.shape_1768.graphics.f("#284662").s().p("AgiAJQgFgbAcgEQAggEADgOQAOAOgDAVQgBALgFAYIgWAKQgDgkgmAFg");
	this.shape_1768.setTransform(188.5,197);

	this.shape_1769 = new cjs.Shape();
	this.shape_1769.graphics.f("#2F5173").s().p("AgRAoQgOgBACgKIAIgSQADgEgIgbQgGgUAcABQAJAAAGAXQAFAXAOAEIgWAUQgLAJgLAAIgDAAg");
	this.shape_1769.setTransform(203.4,200.1);

	this.shape_1770 = new cjs.Shape();
	this.shape_1770.graphics.f("#386190").s().p("AgjAYQgPgIASgaQAPgWAUAFQAFABAjATQgGACgfAYQgLAKgNAAQgIAAgJgFg");
	this.shape_1770.setTransform(106,277.1);

	this.shape_1771 = new cjs.Shape();
	this.shape_1771.graphics.f("#32577E").s().p("AgQAiQgRgTANgVQAUgiAAgFQAbAVAAAWQABAQgPAYQgFAIgHAAQgHAAgKgMg");
	this.shape_1771.setTransform(55.7,242.3);

	this.shape_1772 = new cjs.Shape();
	this.shape_1772.graphics.f("#2F5173").s().p("AAKAYQgIgHgYgHQgVgHgKgKQAPAEAVgLQAXgLAKAAIATgCQALAAAGAJQAEAGgDAHQgCAGgHAEIgPARQgFAGgFAAQgEAAgFgEg");
	this.shape_1772.setTransform(213.6,224.9);

	this.shape_1773 = new cjs.Shape();
	this.shape_1773.graphics.f("#20374B").s().p("AAUAiQgYgOgMgIQgUgMgDgVQgBgGAHgEQAGgEAJAAQAFAFAcAPQAWALADATQACAJgIAHQgFAFgEAAQgDAAgCgCg");
	this.shape_1773.setTransform(200.6,230.7);

	this.shape_1774 = new cjs.Shape();
	this.shape_1774.graphics.f("#32577E").s().p("AgVAGQASgTgBgOQAIgKAKgCQALgBAIAJQAJAIgGAJQgDAFgJAJQgHAIANAKQgJAUgVABQgZgBgMABIgBABQgBgPASgTg");
	this.shape_1774.setTransform(161.7,172.6);

	this.shape_1775 = new cjs.Shape();
	this.shape_1775.graphics.f("#3A6595").s().p("AgCAbQgUgHgfgSQAggEAQAFQAJAEADgBQAHAAAAgIQABgEgGgGIgKgKIA3gLIAABCIgRABQgUAAgTgHg");
	this.shape_1775.setTransform(152.5,155.3);

	this.shape_1776 = new cjs.Shape();
	this.shape_1776.graphics.f("#37608D").s().p("AgOAYQgUgBgSgMQAGgBAegXQATgQAYAKQAQAHAFAHQAHAHgEANQgDAMgJgEQgOgGgDABQgSAGgNAAIgFAAg");
	this.shape_1776.setTransform(93.1,220.6);

	this.shape_1777 = new cjs.Shape();
	this.shape_1777.graphics.f("#386190").s().p("AgDACQgNgOgZAGQAOgRAHgHQANgOARAIQAiAOgDAVQgCAPgcAaQgHgcgHgKg");
	this.shape_1777.setTransform(137.5,246.4);

	this.shape_1778 = new cjs.Shape();
	this.shape_1778.graphics.f("#31567A").s().p("AAAATQgdAEgPAAQgGgLgQgBIAAgUIAKAAQAdANARgEQAVgEAMgdIAUAAQABARAEAGQAFAKAPABIgZAhQgRgPgaAAg");
	this.shape_1778.setTransform(99.8,153);

	this.shape_1779 = new cjs.Shape();
	this.shape_1779.graphics.f("#172734").s().p("Ag1AfIgCgDQAPAAANgJQAGgFAQgPIAagXQARgPAQgCQAGAXgMATQgEAGgZAbQgLgGgOAGQgUAIgFAAg");
	this.shape_1779.setTransform(88.5,189.2);

	this.shape_1780 = new cjs.Shape();
	this.shape_1780.graphics.f("#172734").s().p("AgZAlQgXgLAOgWQASgagHgJQAHABAQgHQAMgGAKAGQAOAIADAFQAGAIgSAGQgLAEgKAeQgGARgMAAQgGAAgHgEg");
	this.shape_1780.setTransform(191.5,239);

	this.shape_1781 = new cjs.Shape();
	this.shape_1781.graphics.f("#2C4D6C").s().p("AgTAcQgLgagHgLQgCgDAHgLIAOgVIAcAjQARATAJAOQAFAIgHAHQgFAFgLABIgFAAQgUAAgMgRg");
	this.shape_1781.setTransform(234.5,224.5);

	this.shape_1782 = new cjs.Shape();
	this.shape_1782.graphics.f("#31567A").s().p("AgsAWQABgUACgDQAEgMAQgCIAQgEQAIgCAGgEQAQgKAIALQAEAGAFAOQAHAKgJAJQgGAGgLADQgMAEgRABIgdABg");
	this.shape_1782.setTransform(56.1,207.1);

	this.shape_1783 = new cjs.Shape();
	this.shape_1783.graphics.f("#365E89").s().p("AgdgaQARgXA1gQQghARgPAjQgMAagHA1Qgbg9AYgfg");
	this.shape_1783.setTransform(81,225.1);

	this.shape_1784 = new cjs.Shape();
	this.shape_1784.graphics.f("#386190").s().p("AglABQAFgOA1goIASBBQgqABgKApQgdgmAFgPg");
	this.shape_1784.setTransform(186,229.1);

	this.shape_1785 = new cjs.Shape();
	this.shape_1785.graphics.f("#25415A").s().p("AhWAWIgFgQICBgbIA2gBIAAAWQgTAJgfABIgyABIgmAIQgQAEgMAAIgMgBg");
	this.shape_1785.setTransform(123,206.8);

	this.shape_1786 = new cjs.Shape();
	this.shape_1786.graphics.f("#386190").s().p("AAaAPQgOgBg6AAQgtABgcgJQAigNAxAAQAdAAA3ADIA3gLIAMAAIAFAHQgjAYgqAAIgRgBg");
	this.shape_1786.setTransform(144.2,179.2);

	this.shape_1787 = new cjs.Shape();
	this.shape_1787.graphics.f("#32577E").s().p("AgxAcQgHgNAKgTQAGgNAPgVIAhALQABASARAFQAYAIADACQgHAQgQAHIgRgBQgFAAgdAJQgGACgFAAQgMAAgFgLg");
	this.shape_1787.setTransform(160.4,207.2);

	this.shape_1788 = new cjs.Shape();
	this.shape_1788.graphics.f("#365E89").s().p("AAdAyQgGgCgBgFQgCgXgQgJQgIgGgbgFQgcgFAFgTQADgLAKgHQAJgGALgBQAQgCAeAfQAfAcAAANQAAANgEAGQgEAFgHAEQgEABgEAAIgEAAg");
	this.shape_1788.setTransform(80.9,278.9);

	this.shape_1789 = new cjs.Shape();
	this.shape_1789.graphics.f("#32577E").s().p("AgaA3QgKgEABgOQACgTgBgDQACgfADgPQAGgaATgCQARgCAFAXQADANgCAcIAOAYQAJAPgVAKQgPAIgMAAQgKAAgKgFg");
	this.shape_1789.setTransform(218.3,214.2);

	this.shape_1790 = new cjs.Shape();
	this.shape_1790.graphics.f("#345B84").s().p("AAnArQgPgBgNgOQgIgKgJAFQgdANgHgDQgHgEgNgiIAXgCQANgCAGgJIAVgKQAEABANgLQAJgJAIAOIAVAfQAKASgGAOQgFANgOAAIgCAAg");
	this.shape_1790.setTransform(191.3,202.9);

	this.shape_1791 = new cjs.Shape();
	this.shape_1791.graphics.f("#365E89").s().p("AAVBGQADgWgCgKQgEgZgIgHQgKgJgWAKIgXgLIAkhNIAJgNIAAAAQANgBAIAPQAJATAGACQARBYgNBDQgSgIgBgSg");
	this.shape_1791.setTransform(182.5,172.5);

	this.shape_1792 = new cjs.Shape();
	this.shape_1792.graphics.f("#32577E").s().p("AhYAhIAAgrIANgXQAaASAZgRQAMAvArgYIA6gcQglBLhaAAQgXAAgbgFg");
	this.shape_1792.setTransform(91.9,198.9);

	this.shape_1793 = new cjs.Shape();
	this.shape_1793.graphics.f("#345B84").s().p("Ag6BDQgIgTABgfQABgqgBgIQAQgHAHgQQAHgBAmACQAcACAQgOIATgBIgdA7QgVgEgDAMQgBAGADASIABABQgRgDgFALQgCAGAAARQgSAAgEANIABABg");
	this.shape_1793.setTransform(170,213.5);

	this.shape_1794 = new cjs.Shape();
	this.shape_1794.graphics.f("#345B84").s().p("AgLAuQgNgogggLIAdgCQASgBALgDQALgDAGgHQAJgIgHgMQgFgOgEgGQgIgKgPAKQgGADgJACIgQAEIAAgKIALgLQABgVAVgCQASANAHgKQABgBAHgXIAQATQAaAkgNAlQgDAHgBAOQgCAPgCAGIgiBlIgWhIg");
	this.shape_1794.setTransform(58.2,210.7);

	this.shape_1795 = new cjs.Shape();
	this.shape_1795.graphics.f("#345B84").s().p("AAZBoQgPgCgKgWQAAgogXgnQgMgTglguQAqgDAOgkQAOAUAKAzQARAmAvgGQAAARgKAGIgGgCIAEADIABAKQADAMgHAOIgLAYQgFAUgNAAIgDAAg");
	this.shape_1795.setTransform(216.6,258);

	this.shape_1796 = new cjs.Shape();
	this.shape_1796.graphics.f("#32577E").s().p("AgSBRQgIgTgHgFQABgngZgSQgJg6AegsQAbARAUgDIAIAPQAHAGALgJIARAAQAIAIgDAOIgEAWIgLALIgNALQghAZgEAHQgNAUAeAaIgMAjQgKgFgHgRg");
	this.shape_1796.setTransform(190.3,160.8);

	this.shape_1797 = new cjs.Shape();
	this.shape_1797.graphics.f("#172734").s().p("AAMBrQgHgMgQAAIALgtQAOg9grgBQgHgJgGgCQgHgCgCAMQgFAYgIgEQgGgDgGgOQgHgUAIgZQADgLAPgeQAHgNANADQAOAEADAUQAjAuAMAUQAXAmABAoQgYARALAKQAHAIAjAKg");
	this.shape_1797.setTransform(211.5,259.8);

	this.shape_1798 = new cjs.Shape();
	this.shape_1798.graphics.f("#386190").s().p("AgxA1IAFgZQAGgcgnAAIAJggQAFgTAHgJQAMgOAPACQAQACALAQQAGAKAFAbQAIASAdgLQACAGARAQQANANAAAPQgLAMgXgJQgVgIgEAJQgJATgVABQgZABgFAIQgJgGABgOg");
	this.shape_1798.setTransform(189.8,282.7);

	this.shape_1799 = new cjs.Shape();
	this.shape_1799.graphics.f("#345B87").s().p("AhWAXQATgHANgcQAPgfAPgIQAUgMADAAQAJgBAFAVIAOgBQAIAAAFgDQANgHALAHQAEACANAPQAKAJgHALIgMAQQAAACgMALQgIAHAIAKIiBAcQgRgVAAgUg");
	this.shape_1799.setTransform(120.8,201);

	this.shape_1800 = new cjs.Shape();
	this.shape_1800.graphics.f("#345B87").s().p("AgUAVQgMgsgWghQgKgPAKgMQAIgKATgGIAXgBQAOAAAHgKQACATAOAEQAFACAWAAQgKA/gLAiQgRA2gdAtQgGg6gHggg");
	this.shape_1800.setTransform(159.4,238.8);

	this.shape_1801 = new cjs.Shape();
	this.shape_1801.graphics.f("#345B87").s().p("AANBBQAbgTACgJQALgGgLgGQggACgOgBQgbgBgLgaQgDgFgGABQgGABgGAHQgHAKgFAAQgEAAgQgMIAmgqQARgDAoAGQAfgBgBguQAXgLAKAKQAIAHAEAZQACAKgDAWQABASASAHIADASQgBAKgIAGQgSAFgLARQgGALgKAWQgrgLAOgQg");
	this.shape_1801.setTransform(177.2,181.8);

	this.shape_1802 = new cjs.Shape();
	this.shape_1802.graphics.f("#37608D").s().p("AheAbQgXgSgHgfQgCgJADgEQACgCAIgCQAJgEApAOQAeAJAPgeQAIACAcARQAWAMATgEQAFApAngVQAOAFAFAMQAEAKAAAQQg4gDgdAAQgwAAgiAOQgjgKgSgOg");
	this.shape_1802.setTransform(136.4,174.7);

	this.shape_1803 = new cjs.Shape();
	this.shape_1803.graphics.f("#365E89").s().p("AAiBHQgVgJgNgCQgRgFgTACQgPACgKgOQgKgOAIgRQAMghAIgQQANgcAdgGQAFgBAKABIAQABIABgCQAEAKAEADQAGADAIgDQASAYgFAhQgEATgMAnQAAAEgHAFQgFAEgDAAIgBAAg");
	this.shape_1803.setTransform(207.2,276.4);

	this.shape_1804 = new cjs.Shape();
	this.shape_1804.graphics.f("#386190").s().p("AheBmQABgQgBgIQAZgLAAgRQgBgVAkg2QAdgtgTgmQgDgFAIgEQAHgEAIgBQgCAOAUASQATASgEARQgLANgDANQgDAPAKAJQAKALAKgKQALgOAGgEQASgLAGAPQAHATAFABIgCANQgCAGgHADQglADgWAJQgcANgOAbQgJASgUALQgLAHgZALQgKgHgCgOg");
	this.shape_1804.setTransform(17.6,239.1);

	this.shape_1805 = new cjs.Shape();
	this.shape_1805.graphics.f("#386190").s().p("AgTCNQgHgIgBgIQAAgigMgpQgGgUgTgzQAPgDgCgKQgBgDgFgDIgKgFIAAgMQAOgOAHgWIALgnIAygBQAfgBATgKIADAVIgBANQgDAdgUAaQgWAQgCAfIgHAKIgSgCQgKABgDAKQgDAJATACQABAJARADQAQACgEAOQgSA9gRAeQgCAEgDAAQgDAAgEgEgAgPg9IgEAJIAJADQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIACgFIgIgEIgBAAg");
	this.shape_1805.setTransform(125.7,221.2);

	this.shape_1806 = new cjs.Shape();
	this.shape_1806.graphics.f("#31567A").s().p("AgnDXQABgUgGgKQgHgNgUgCQgHgJASgSQAQgPgSgOIABhCQAKgFABgSQABgSAJgFIAQAPQAIAKALgGQAJgFACgMQgCgOACgHIgQgdQgLgTAUgVQAKgKgEgiQgHgpgBgRIgLgBQgJgBABgIQADgJAJAAIARgBIASgFIASgDQAzgCghArQgVgBgJACQgPAEACAVQADAUAPgDQAIgBARgJIADAEQgVA1AJA3IgRAAQgKABAAAJQAAAPAJAIQAIAKAQABQgCAmgQAeIgmAHQgVAFAOAhQgJAMgFAhQgEAggOANg");
	this.shape_1806.setTransform(178.6,142.7);

	this.shape_1807 = new cjs.Shape();
	this.shape_1807.graphics.f("#345B87").s().p("AiICKQgVgSACgOQACgIAUgdQAPgWgEgUQAbgMgNgUQgSgaAEgIQAYAAAKgWQAWgBAAgVIBCALIAEAKQADAGACAAQAIACADgGIACgMIAMAAQArAEgJgXIgKgUQgFgMADgFQASghAKgIQARgOAVAxQACAFARARQAPAOABAOIgOAJQgGAFAKAKQgGAbgTAOQgRAMgeACQg+ADgQAOQgPAOgRA/QgOA5hJAbQAFgRgTgSg");
	this.shape_1807.setTransform(32.7,216.2);

	this.shape_1808 = new cjs.Shape();
	this.shape_1808.graphics.f("#345B84").s().p("AARBDQgFgNgNgGIAAgXQARgMABgNQAAgNgUgCQgpgJgVAAQgkAAgWAaQgPAegegKQgpgNgJADIABgPQgBgKgQgHQgNgFADgCQAHgDAUgXQAQgSAUgBICWgOQBWgHA/ADQARAfAIgJQAQgRAUAKQAbANAFgBQgFASAOALIAZAQIABAPIhEA0QgNgKAHgIQAKgJADgFQAFgJgIgIQgJgIgKABQgKABgJAJIgiABQgFgKgGAKQgFABgEgBQgCABgSgEQgMgCgCANQgEAXABAFQADAQATADIABAXIg3AKQAAgQgEgJg");
	this.shape_1808.setTransform(146.9,169.4);

	this.shape_1809 = new cjs.Shape();
	this.shape_1809.graphics.f("#3A6595").s().p("Ah7A1QgFgJgwgIIgLgBIgBgVIggAiIAGgoQADgXgJgQQAUgKALgUIADgLQADgEANAHQAqAZASgIQARgIASgxQAWgEAMATIAVAeQAHAbAGAJQAJARAWADQgKAQAEANQAFAOAXAPQgIgXABgVQABgPAGgVIABgMQAdARgBgWQgCgcAHAAIAMAAQAFAKAGgKQAPAAAegEQAaAAARAPQAAAPASAjQAQAdgFAWQgOgHgmANQgiAMgRgXIgHAFQgEADAAADQgHAZgVAIQgNAEgdAAQgCgKgGgHQgGgIgFAGQgVAagwAGQg6AGgTAMQAMgwgGgKg");
	this.shape_1809.setTransform(85,162.9);

	this.shape_1810 = new cjs.Shape();
	this.shape_1810.graphics.f("#345B84").s().p("ABPBxIgOgQQgSgQgMAqIgVgDIgKgKIhDAAIgigLQgJgpgrgvQgLgMgCgMQgCgOAPgIIBJgrQAsgaAggKQAQALAEAAQAFABAHgLQAGgIAGgBQAGgBADAGQALAaAbACQAPAAAggBIgBALQgBAKgbASQgPARAsALIAZABIgGAVQgOABABAHQABAFAFAKIg4BlQgGAAgJgKgAAog9QgTAGgFATQgBAIADAHQAEAHAHgBQAQgDANgRQAPgXAMgOIgtALgAgBhAIABgEIgBgEg");
	this.shape_1810.setTransform(167.6,193.4);

	this.shape_1811 = new cjs.Shape();
	this.shape_1811.graphics.f("#386190").s().p("AAnCoQAMgKAAgDIAMgRQAHgKgKgJQgNgPgEgCQgLgHgNAHQgFADgIAAIgNAAQgFgUgKABQgDAAgUAMQgPAIgPAfQgNAdgTAHIgdieQgQhcAJhDQADgYANgIQAJgGAVgCQAEA5AsAtQAMANBLA6QADACAQAHQAMAEACAFQAGAPAsAPQAjAMgLAcQgHATgSAiIgbA2Ig2ABQgIgJAIgIgAhhi4IAAgBIABABg");
	this.shape_1811.setTransform(122.9,186.1);

	this.shape_1812 = new cjs.Shape();
	this.shape_1812.graphics.f("#365E89").s().p("AiBDYIgMgPQgBgOgPgOQgRgSgCgFQgVgwgRANQgKAIgSAiQgHACgTASQgPAOgPgBQgGgYgVgHQgIgCggAAQADggAXgOQAVgOgJgRIgTgXQgPgSgEAKIgHAWQgFAHgTABQgSABgHAJIgLAAQgKgGgBgQQAGgIAGgPIAKgWQALgYgQgcQgSgiABgMIAWgBQARAAAGgCQAKgFAAgQQANADAAATQAAAUAKADIAAAWQgBAMAKAEQAHADADgGIADgNIAigBQANACAQgGIAcgMQAagHAxgXQAtgRAjAJQAHAFgDAMQgEANAGAFIAXgPQAOgKANABQAIAHAXADQARAFgIAbQARgJAAgfQgBgeAVgGQgBASAHAJQAHALARgGQAagLghgKQAVgOAjgIIA7gNQAPgEAhAAQAcgDALgZQAdAAANgEQAUgIAHgZQABgDAEgDIAGgFQASAYAhgMQAngOANAHQgQAzgmAxQgWAcg3A5QgQABgRAPIgbAWQgdgUgLALQgHAHgDAgIACADQgeAHgPAFQgYAKgKAWIAAgBIgtgBQgGgOAQgNQASgOAAgMIgygCIAAgLQgMgQgKAQQgQABgEAKQgDAHAAAQQgUAFgHAQQgEAKgCAZIABAAIgiAWQgVABgBAWIgLAAQgHAAAGALIAAAKQgPACgFAMQgCAFgBATgAh1BkQAEANAVAIQACgRgEgLQgEgNgMgNQgKAWADALgACoASIAEACIACgFIgFgBQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAABgACMhBQgJACAAALQAAAKAEAIQAGAIAKACQAMACAGgJQAEgFADgMQADgLgHgEQgDgCgNgBIgQABg");
	this.shape_1812.setTransform(62.6,187.7);

	this.shape_1813 = new cjs.Shape();
	this.shape_1813.graphics.f("#345B87").s().p("AgEgKQAOAAAHAKQgGAIgKACIgRABg");
	this.shape_1813.setTransform(244.5,61.4);

	this.shape_1814 = new cjs.Shape();
	this.shape_1814.graphics.f("#386190").s().p("AgBgCIADACIAAACIgDABg");
	this.shape_1814.setTransform(279.8,56.3);

	this.shape_1815 = new cjs.Shape();
	this.shape_1815.graphics.f("#345B84").s().p("AgBAFIgFgCIAEgIQACgBAGAEIgEAIIAAAAIgDgBg");
	this.shape_1815.setTransform(226.1,72.5);

	this.shape_1816 = new cjs.Shape();
	this.shape_1816.graphics.f("#31567A").s().p("AgEAQQgMgHgCgLQgEgSAGgFQAHgFAPANQgCAHALAOQAKAMgJALIgUgLg");
	this.shape_1816.setTransform(209.9,125.7);

	this.shape_1817 = new cjs.Shape();
	this.shape_1817.graphics.f("#345B84").s().p("AgXAGQAagGABgbIAhALQgSATgLAJQgRAOgUACQgRgQAXgGg");
	this.shape_1817.setTransform(223.4,148);

	this.shape_1818 = new cjs.Shape();
	this.shape_1818.graphics.f("#365E89").s().p("AgYAQQAFgWAFgKQAIgPATAIQASAIgIAPIgPAbg");
	this.shape_1818.setTransform(226.3,143.6);

	this.shape_1819 = new cjs.Shape();
	this.shape_1819.graphics.f("#386190").s().p("AgWAVQgLgCAAgLQABgMAOgIQAIgEASgEQALgCAHAGQAIAFAAALQgCAOgMAEQgFADgSABIgTgBg");
	this.shape_1819.setTransform(232.3,134.1);

	this.shape_1820 = new cjs.Shape();
	this.shape_1820.graphics.f("#345B84").s().p("AgkBsQgigdgNADIABg4QAlglApAlQgCgEgGgoQgEgZgWgIQABgNAMgMIAVgUQAKAHAYASQATAHAJguQAZAmgOAmQgIAVgbAmQACACAcAAQASABACAVIhMALQgNACgBACQgBAvgSAAQgFAAgGgDg");
	this.shape_1820.setTransform(212.1,140.3);

	this.shape_1821 = new cjs.Shape();
	this.shape_1821.graphics.f("#31567A").s().p("Ag0CPQgJgNgRACQgCgSgOgHIgcgJIAIgkIAOgBQAGgCACgIQADgOgRgFIAQgjIA4AAQAegFAGgmQATgPAEgbIAAgwQAHACARgIQAPgDACAUQADAYARAHQAJADAbAAIABALIgVAUQgMAMgBANQgLAEgPgJQgQgKgIAAQgHAMABASIAAAdQgOABgFACQgKAEAHAQIgBAJQALAjgBAQQgDAZgcAOIAAAAIgYAMg");
	this.shape_1821.setTransform(199.3,138.7);

	this.shape_1822 = new cjs.Shape();
	this.shape_1822.graphics.f("#2F5173").s().p("AACgBIgBACIgCABg");
	this.shape_1822.setTransform(113.4,91.3);

	this.shape_1823 = new cjs.Shape();
	this.shape_1823.graphics.f("#2F5173").s().p("AgEAEIAAgIIAJAJg");
	this.shape_1823.setTransform(185.2,115.7);

	this.shape_1824 = new cjs.Shape();
	this.shape_1824.graphics.f("#345B84").s().p("AgEAAIAJgCQgCAFgDAAQgBAAgDgDg");
	this.shape_1824.setTransform(132.8,121);

	this.shape_1825 = new cjs.Shape();
	this.shape_1825.graphics.f("#172734").s().p("AABgCIACACIgFADg");
	this.shape_1825.setTransform(178.9,77.2);

	this.shape_1826 = new cjs.Shape();
	this.shape_1826.graphics.f("#345B87").s().p("AgCAJQgHgDACgIIADgEIAEgDIAJATIgLgBg");
	this.shape_1826.setTransform(154.8,49.1);

	this.shape_1827 = new cjs.Shape();
	this.shape_1827.graphics.f("#386190").s().p("AgDAJQgJAAABgKQAAgHAJgBIANABIABARIgMABIgDgBg");
	this.shape_1827.setTransform(91.4,115);

	this.shape_1828 = new cjs.Shape();
	this.shape_1828.graphics.f("#345B84").s().p("AAAALIgRgPQAJgKAIACIARAKQgFAPgHAAQgDAAgCgCg");
	this.shape_1828.setTransform(115.9,75.2);

	this.shape_1829 = new cjs.Shape();
	this.shape_1829.graphics.f("#365E89").s().p("AgQAEQgBgLANgCQAGgCAPABIAAAVIgUABIgCAAQgLAAAAgIg");
	this.shape_1829.setTransform(84.6,77);

	this.shape_1830 = new cjs.Shape();
	this.shape_1830.graphics.f("#172734").s().p("AgEgCQASgVACgJIACA0QgFAIgLADIgSACQgFgSARgRg");
	this.shape_1830.setTransform(109.1,35.9);

	this.shape_1831 = new cjs.Shape();
	this.shape_1831.graphics.f("#172734").s().p("AgDATQgEgCgSgRIgCgBQAGgXAPAFQAIADARAJQAHABACAHQABAIgGAFQgJAHgIAAQgGAAgDgCg");
	this.shape_1831.setTransform(181.8,77.1);

	this.shape_1832 = new cjs.Shape();
	this.shape_1832.graphics.f("#345B84").s().p("AgOgHQACgQANgRQABgCAGABQAGABABABQAEAPgJAWQgMAcgBAQQgOgcADgVg");
	this.shape_1832.setTransform(103.8,88.4);

	this.shape_1833 = new cjs.Shape();
	this.shape_1833.graphics.f("#37608D").s().p("AABAOQgUgKgTACQAdgkAJACQAJACAdAwQgDADAAAEIgigPg");
	this.shape_1833.setTransform(196.9,112.7);

	this.shape_1834 = new cjs.Shape();
	this.shape_1834.graphics.f("#284662").s().p("AgIAcQgPgKABgQIAHgcQAegBAGAQQAFAMgLAbg");
	this.shape_1834.setTransform(95.9,123.2);

	this.shape_1835 = new cjs.Shape();
	this.shape_1835.graphics.f("#2C4D6C").s().p("AgXgpIAdALQAQAHADASIgZAYQgKADAAALIgNAJg");
	this.shape_1835.setTransform(172.6,99.7);

	this.shape_1836 = new cjs.Shape();
	this.shape_1836.graphics.f("#345B84").s().p("AgWgsIAVAJQAjARgRAXIgQAUQgJAMABAIg");
	this.shape_1836.setTransform(118.8,122.8);

	this.shape_1837 = new cjs.Shape();
	this.shape_1837.graphics.f("#3A6595").s().p("AAVAfQgDgNgFgGQgGgKgLgBIgTACQgEgKgLgCQgEgBgPgBQgEgLAKgFQAOgEABgCIAcAMQAPAHANgHIACAKQABAGAGADIAeARIgFASIgGgBIgFACg");
	this.shape_1837.setTransform(98.9,36.8);

	this.shape_1838 = new cjs.Shape();
	this.shape_1838.graphics.f("#3A6595").s().p("AgMAeQgOgLAAgIQgBgPAUgMQAWgPAHgHQgHALAKAfQAJAcgbAHIgCAAQgGAAgLgJg");
	this.shape_1838.setTransform(144.8,49.4);

	this.shape_1839 = new cjs.Shape();
	this.shape_1839.graphics.f("#2C4D6C").s().p("AAAASIAEgFIgEAEIgsAAQADgLAXgOQATgNgBgRIAhAAIABAZQAAAOAKAHIAAAIIAAAMIgLALIghABg");
	this.shape_1839.setTransform(180.3,114.5);

	this.shape_1840 = new cjs.Shape();
	this.shape_1840.graphics.f("#31567A").s().p("AgcAfQAAgXgEgIIAsgsIAVAAIghBZIgJAAQgRAAgCgOg");
	this.shape_1840.setTransform(89.8,59.2);

	this.shape_1841 = new cjs.Shape();
	this.shape_1841.graphics.f("#25415A").s().p("AgUBgQABgQAPhLQAKg3gGglIAAAAQAAgEAEgDIARgBQABAOgHAlQgFAfAFATIAAAwQgDAbgTAPg");
	this.shape_1841.setTransform(200.3,124.4);

	this.shape_1842 = new cjs.Shape();
	this.shape_1842.graphics.f("#345B84").s().p("AgOAwQgcgJAFgcQABgHgBgKIgBgTIAKgPIAJgJQAGADAJASQAHAPAOgBIAMABQAHAAABADQAEAGgGACQgHACgCAAQgJAIADARQgDAPgJAGQgGAEgGAAIgKgCg");
	this.shape_1842.setTransform(112.6,81.8);

	this.shape_1843 = new cjs.Shape();
	this.shape_1843.graphics.f("#37608D").s().p("AgqAmQgPgEACgOQAGgRAAgGQgBgQAOABIAZABQALAHAHgBQAKgCAHgMQAGgLAHgDQAKgEAHAKQAFAJgHAIIgQANQgDADgQAFQgNAFgDAJQgGAWgVAAQgHAAgJgDg");
	this.shape_1843.setTransform(105.3,57.6);

	this.shape_1844 = new cjs.Shape();
	this.shape_1844.graphics.f("#31567A").s().p("AAYA5QgMgjgOgRQgUgWghgCIACgMIAZgZQAvApAGAIQAbAdAEAjg");
	this.shape_1844.setTransform(177.9,104.8);

	this.shape_1845 = new cjs.Shape();
	this.shape_1845.graphics.f("#32577E").s().p("AAAA3QgFgIgKgCIgSgBQAUgPgLghQgLgkAMgOIAiADQAEASAPAhQAKAfgSAYg");
	this.shape_1845.setTransform(140.1,73.7);

	this.shape_1846 = new cjs.Shape();
	this.shape_1846.graphics.f("#284662").s().p("AgnBDQAVgZAIgsIAOhLQAdAsAAAvIgOgBQgIAAgBAHQgBALAJABIAQgBIAGAMQgZANgCAUQgRACgJAAQgQAAgKgLg");
	this.shape_1846.setTransform(89.2,112.8);

	this.shape_1847 = new cjs.Shape();
	this.shape_1847.graphics.f("#345B84").s().p("AgmAyIAGgRIgegTIACgUIgBgIIABgCIAegDQAOgFgKgaQgCgGAHAAQAJgBAcAIIANgBQAGABAPgBQAMAAABAGQAAAOgNADQgRAAgHADQgCAJgTAVQgQASAFASIgOANQgDACgDAAQgFAAgHgHg");
	this.shape_1847.setTransform(108.1,35.1);

	this.shape_1848 = new cjs.Shape();
	this.shape_1848.graphics.f("#20374B").s().p("AghAxQAHgSgJgLIgEgJIABgrQAAgbAMgQIATgCQAEASACAEQAFAKAOgCIAWAEQgCAggfAgQgmApgHAPQgDgHAIgVg");
	this.shape_1848.setTransform(99.2,44.7);

	this.shape_1849 = new cjs.Shape();
	this.shape_1849.graphics.f("#32577E").s().p("AgUBfIAHgWQAEgMgEgKIACgNQAFgCACgDQAEgDgEgGIgHAFQgJgGgCgKIAAgSIAAgKQAZgSgKgOQgUgPgGgJIAAgXQAFABAMAHQAKAEAGgMQAOAAAFABQAKADAFAKQgMAQgBAbIgBAqQgKAJAPABQAJALgHASQgIAUACAIIgVAXg");
	this.shape_1849.setTransform(93.1,45.2);

	this.shape_1850 = new cjs.Shape();
	this.shape_1850.graphics.f("#20374B").s().p("AAABCQgBgDgDgDQALgQgCgIQgCgLgUgBQgigFgJgdIAhAAQAcAAgBgLQgBgFgQgRQACgSAJgFIAiAAQAFAIgBAYQADASAagFIgeBYg");
	this.shape_1850.setTransform(83.7,65.8);

	this.shape_1851 = new cjs.Shape();
	this.shape_1851.graphics.f("#172734").s().p("AAAAqQg/hHAUhYIAYAAQAKANgBAUIgEAjQABAQAJAHQAEAEANAHQACASATAuQARAqgDAbIgVAAQABgtgcgfg");
	this.shape_1851.setTransform(99.4,137.8);

	this.shape_1852 = new cjs.Shape();
	this.shape_1852.graphics.f("#345B87").s().p("Ag7AAQAHgWgFgRQAUAAAlANQAlANAWgBQAIgBAEAHQAFAGgDAGQgEAIgIAMQgJAMgBgBQgYgNgkAHQg7ALgFAAIAOgog");
	this.shape_1852.setTransform(161.5,54.2);

	this.shape_1853 = new cjs.Shape();
	this.shape_1853.graphics.f("#20374B").s().p("AgiAMQgJgXgBgQQAAgWAMgRQAHAGAJARQAKAOAQgFIAjAGIAABTIg/ANQgOgUgCgkg");
	this.shape_1853.setTransform(165.7,98.4);

	this.shape_1854 = new cjs.Shape();
	this.shape_1854.graphics.f("#2C4D6C").s().p("AAGAJQAHgDARgBQAOgCgBgNQAAgGgMAAQgQABgGgBQgHgKgEALQgdgIgJAAQgIABADAGQAKAZgOAFIgfADQADgHgGghQgEgZATgMQAZANATgCIALALIAWAAIALgLIAsAAQABAJAAAQQABAPAMAIIAGAnIgqACQgCAMgLAEIgUAGg");
	this.shape_1854.setTransform(110.1,31.7);

	this.shape_1855 = new cjs.Shape();
	this.shape_1855.graphics.f("#284662").s().p("AgbBQQgJgRgHgHIAAgMQASgeAEgOQAHgZgegTQAAgTABgJQACgPAUgCQAggBAQAWQAKAOAHAkQADAOgGAGQgZAjgFAKQgGALgFAfIgIABQgLAAgIgKgAgSgsQAAAAAAAAQAAABAAAAQABABAAAAQAAABABABIADgEIgCgEg");
	this.shape_1855.setTransform(166.8,86);

	this.shape_1856 = new cjs.Shape();
	this.shape_1856.graphics.f("#365E89").s().p("AhNASQAAg2ALgKQALgJA2AKQAIACATAHQARADAKgPQAYAKABAPQABAPgSANQgSANgNAXIgVAAIAIgTQADgNgNgJQgFAbgdAIQgpALgHAFIgCghg");
	this.shape_1856.setTransform(107.9,123.2);

	this.shape_1857 = new cjs.Shape();
	this.shape_1857.graphics.f("#32577E").s().p("AhKAjQgLgTgXAKQgDgRAJgHQACgCAIAAQAGgCgFgHQgBgCgHgBIgMAAQATgVAYAGQAPADAbAPQAZAKAKgCQAPgDAJgcQAMgpAZAOIAVAPQANAJAIABQACALgXAIQgUAHAHARIALALIAAALIgcAAQgQAAgMABQgKACgRgHQgSgIgLgCQATAegSAHQgaADgHAHQgCgBgRgcg");
	this.shape_1857.setTransform(125.5,81.7);

	this.shape_1858 = new cjs.Shape();
	this.shape_1858.graphics.f("#2C4D6C").s().p("AAbBgQgWAAgFgYQAGgXgSgMQgegSgCgCQgEAOgEgCQgEgBgFgLQgEgHACgFQABgEAIgEIAZgFQAPgDACgQQgEgUARgRQAXgWACgJIAhABIgFAhQgQAAgHABQgMADAAAMQABAIAMAAIAVgBQAQA4gGBOQgCgBgiABg");
	this.shape_1858.setTransform(80.9,82.1);

	this.shape_1859 = new cjs.Shape();
	this.shape_1859.graphics.f("#2F5173").s().p("Ag7BLQgTgDgNgJQgPgLgDgNQgCgMAKgIQAYgWgFgUQgEgRgdgUQAZAOAcgLQAQgGAdgOIAAAAIAAAAIAAAAIADAQQAIgDAlAAQAdgBAQgNQAfAAAJAYIghAWQhGgBgRASQgSARgGBNIgfgEg");
	this.shape_1859.setTransform(115,99.3);

	this.shape_1860 = new cjs.Shape();
	this.shape_1860.graphics.f("#365E89").s().p("AgOA+QgbgPgPgEQgYgGgTAVQgOABgHgPQgJgSgHgDQARgTATgCIAQAQQAKAKAJgYQASgOAzgRQAvgQAVgXQAFgFAVADIAkAGQgMAOALAkQAKAhgTAPQgIAAgNgKIgVgPQgZgNgMApQgJAbgPAEIgFAAQgMAAgSgIg");
	this.shape_1860.setTransform(124.3,74.5);

	this.shape_1861 = new cjs.Shape();
	this.shape_1861.graphics.f("#32577E").s().p("AgRBMQAAgJAcgbIgcgOQgQgHgOAGIgEgDIAAghQAhgqgzACIgSADIgSAEIAKghIAhgBIALgLIAAgLIAKABQAagIALgBQAUgBARAMQANAKAWgLQAYgMAMAFQAGAlgLA4QgPBKgBAQQgMATgWAGQgNAEgdACQgZgYABgJg");
	this.shape_1861.setTransform(189.9,126.2);

	this.shape_1862 = new cjs.Shape();
	this.shape_1862.graphics.f("#365E89").s().p("AiTB8IgDgPQAHhNASgSQASgRBFABQAEASANAJQAOAJALgJQANgIgGgQQgDgGgMgTQgKgYgfAAQgDgbgXgGQAGgHAagEQATgHgTgdQAKABAUAIQAPAHALgBQALgCARAAIAbABIABAWQADAIARATQAOAPAAAPIgBALIghAMQAAgRgEgGQgHgKgXABIgDgEIAFACQAMADgDgPQgBgJgCgEQgEgGgHABQgZADgDASQgCATAhgIQAIAIACAMQACAIAAAPQAMAWAVgCQgBAXAXgBQAGAQARAHIAWAAQABAfgdAEQglAEgGAHQgbgMglAFQgqAJgVADIguACQgbACgSAJIgDABQgEAAgCgFg");
	this.shape_1862.setTransform(127.1,96.3);

	this.shape_1863 = new cjs.Shape();
	this.shape_1863.graphics.f("#386190").s().p("ABUFtQgEghgYAEQgcAKgMgDIgUgfQgMgSgWAEQgTgdAbgZQALgKABgHQACgJgLgKQgBgQgKgGIAAAAQgIgIADgVQADgTgHgDQghgNABgdQAGgiAAgRQADgZgBgNQgBgVgOADQgeAGgBgPQADgUgCgHQgBgGAAgSQAAgPgEgEQgXgUALgHQAHgDAVgDIAEADIgEgDIADgvQABgcgDgSQADgagDgNQgEgWgkAFQgGAAgTgeQgWglgPgLIAEgGQACgEACgBQAdgPAoAUQAoAVACAgQAAAJgCAUQAAAQANACQAQACAEgRQADgVAEgJQABgDAEgDIAGgGIAigLQAFAXAWAAQAigBACABIAYCFIgPBLQgJAtgUAaIgoANQAEAQASgCQAUgCADAEQAdAiAJgOIAKgpQACgUAYgMIALAiIgGAcQgBAQAPAKQgVBYBABIQAcAfgBAtQgLAdgWAEQgSAEgcgOQgBgMgDgHQgFgIgLgCQgCgBgEAEQgEADAAADQgDAKAHAFQAEADALACIAAAhQgHABACAbQABANgKAAQgHAAgMgHgAhbhBQgCAEAAACQAAADACADIADAGIAFgLIgFgNgAgYheQgDAHAEAHQADAHAIABQAHABAFgFQAUgQAIgJQAPgPgEgVQgHADgRASQgNAPgPAAIgBAAQgHAAgDAHgAiElCIAEADIAEgCIgDgDIgFACg");
	this.shape_1863.setTransform(81.3,122.1);

	this.shape_1864 = new cjs.Shape();
	this.shape_1864.graphics.f("#3A6595").s().p("Ai9HtQgJgjgTgnQgNgbgagrQgPgBgFgLQgDgGgBgRQAEgbgRgpQgUgvgBgTQAIgOgLgZQgKgaAJgNQAGgGApgLQAfgHAFgdQAMALgDAMIgHAUQgCAQgKAGIgOgHQgJgDgGAGQgMAMASAOQABAGgBAOQABAMAHAHQALgKACgPIADgYIAaAAQAPAAAHgLQADgGgIgGQgLgJgBgCQAOgXARgOQATgOgBgOQgCgPgXgKQAHgMAJABQAIAAAJAKIAPBaQgBgIAKgMIAQgUQARgYgkgRQArgaAZADQAaAEApAlQAHAHAEgKIAfhEQAOgigbgeQAGgIAlgEQAdgDgBggIgBgRQgBgKgMABQgHAAgBAKIAAAQQgRgGgGgRQAAgUgWgCQACgEAMgQQAJgMgBgLIABgMQBAAFgqgxIgXgXIAAgiIAXABQAPASAMgOQAIgKgCgKQgBgKgKgIQATgYgKgfQgQgjgDgSQCGgFBjBaQgTACgCAPQgCAJABATIgCBCQg3AFgBAkQgBAUANAaIAXAsIAVgQQACAkAPATQghAPg1ACQhMADgKABQgVgDgJABQgRABAJAYQAFANAEAeQAIAZAhADQAEAABAgJQApgGAZAVQgDARgIAFQgIAGgTgJQgOgHgGAFQgGAHAKAOQATAbAAAcQAAAagQAeQgRAfgFAOQgIAaAIAXQAKAdgLALQgKAJgcgCIAAgBIgBAAQAOgTAFgKQAJgRgagIQgvgOg8AEQgmAChFANIADgfQAEgQAVgCQAGAAAKAFQAKABAAgPQAAgWgcgFQgVgFgTAKQgQAJgHAPQgHAQAIASQAIATAUAIQAxBQAxALQAxAKBEg4QABgBAEAAIAAABIABAAIAAA4QgQADgSAJQgIADgYAPQgdAPgzADQg+AEgVAGQgdAIgPAMQgQANgEAUQgIAigSAKQgJAFgNAAQgLAAgPgEgAhIAqQgNAOASANQADAbAbgHQAEAAADgEQAEgEgBgCQgCgfgbgBQgDgGgEgCIgDgBQgEAAgCAEgAi+HtIABAAIAAABg");
	this.shape_1864.setTransform(132.2,118.2);

	this.shape_1865 = new cjs.Shape();
	this.shape_1865.graphics.f("#32577E").s().p("AgNAXQgJgEAIgRQgCgdANAFQAGADAQALIAAAJQgLAGgBARg");
	this.shape_1865.setTransform(110.2,7.5);

	this.shape_1866 = new cjs.Shape();
	this.shape_1866.graphics.f("#2C4D6C").s().p("AghA3IAAgWIAVgSQAMgMABgMQABgOgKgKQgMgKgHAKQgLARgCAAIgQAFIgKgXIAAgKQAhgpAsAoQASAlAmgDIAAASIgXAOQgQADgOAPQgOAUgJAHg");
	this.shape_1866.setTransform(118.8,11.2);

	this.shape_1867 = new cjs.Shape();
	this.shape_1867.graphics.f("#345B87").s().p("AgLAWIgTgBQgKgCgCgLQgEgRAXgMIAsAAQgHARAJAEIAUAAIgLAXg");
	this.shape_1867.setTransform(106.6,10);

	this.shape_1868 = new cjs.Shape();
	this.shape_1868.graphics.f("#284662").s().p("AgcAtQgSgtASgrIALAAIABALIAIAPQAGAHAJgFIgDgRIALgMIAXAYIAAAUIgrAiIAAALg");
	this.shape_1868.setTransform(111.6,16.6);

	this.shape_1869 = new cjs.Shape();
	this.shape_1869.graphics.f("#345B84").s().p("AAAA4IgKgLQgTACgZgOQABghgagNIABgIQAPgBAFgKQAEgIgBgPIATAiQAMASAYgIQACAaAVgGQAIgEgBgFQgBgFgGgFIAAgMQAPAFAPAQQAUAVAHADIgBAWIgtAAQgLgGAAAHIAAAKg");
	this.shape_1869.setTransform(108.7,22.3);

	this.shape_1870 = new cjs.Shape();
	this.shape_1870.graphics.f("#37608D").s().p("AgGAAIANgDIgKAHg");
	this.shape_1870.setTransform(287.9,11.5);

	this.shape_1871 = new cjs.Shape();
	this.shape_1871.graphics.f("#284662").s().p("AgEgBQACgKAIgFIAAAhIgLAAQAAgPABgDg");
	this.shape_1871.setTransform(276.9,161.4);

	this.shape_1872 = new cjs.Shape();
	this.shape_1872.graphics.f("#345B84").s().p("AgqALQAJgFACgJIAAgSIALgLIALAAIAOAHQACABAWAEQAPACgBAOQgCAQgPAGQgMAFgRgDQgJgCgEAEQgDADgDAIQgTAAgBgWg");
	this.shape_1872.setTransform(278.4,166.4);

	this.shape_1873 = new cjs.Shape();
	this.shape_1873.graphics.f("#345B84").s().p("AgCAmQgWAAgPgVQAPgSAAgZQAUgOAWAEQAAAUAWABIgCArQgaAKgNAAIgBAAg");
	this.shape_1873.setTransform(283.5,158);

	this.shape_1874 = new cjs.Shape();
	this.shape_1874.graphics.f("#345B84").s().p("AgBgBIADgEIAAALg");
	this.shape_1874.setTransform(97.3,2.7);

	this.shape_1875 = new cjs.Shape();
	this.shape_1875.graphics.f("#37608D").s().p("AgDgBIAHABIgGACg");
	this.shape_1875.setTransform(94.2,8.4);

	this.shape_1876 = new cjs.Shape();
	this.shape_1876.graphics.f("#32577E").s().p("AgQAQIAAggIAhAAQAAAPgDAHQgFAKgOABIgLgBg");
	this.shape_1876.setTransform(101.4,18.4);

	this.shape_1877 = new cjs.Shape();
	this.shape_1877.graphics.f("#345B84").s().p("Ag1AMIgCgTQADgkAfgBQgDArAcACQARABAjgCIAAAhIgLAMQgigWhAgLg");
	this.shape_1877.setTransform(94.1,16.7);

	this.shape_1878 = new cjs.Shape();
	this.shape_1878.graphics.f("#2F5173").s().p("AgxgLQANgBAaADQAYAAAOgMQARABAFAKIABAgQgFABgRgHQgOgGgIALIgBABIgGAAQggAAgRghg");
	this.shape_1878.setTransform(124.9,7.7);

	this.shape_1879 = new cjs.Shape();
	this.shape_1879.graphics.f("#20374B").s().p("AgJgeQAJgHAMAAQAPABACAJQAEAUgOARIgdAcQglgnAmgdg");
	this.shape_1879.setTransform(143.1,7.9);

	this.shape_1880 = new cjs.Shape();
	this.shape_1880.graphics.f("#25415A").s().p("AgKAUQgPgLgQAAIAAggIARAAQAJgCAFgGQAKgNAMADQAGABAQAIQANAIgHAIQgKAKgDAEQgBACAKAZQAGAQgcACIgYgXg");
	this.shape_1880.setTransform(134.1,9);

	this.shape_1881 = new cjs.Shape();
	this.shape_1881.graphics.f("#2F5173").s().p("AgmARIAAgVIBNgMQABAQgDAGQgFAKgPABg");
	this.shape_1881.setTransform(273.5,175.9);

	this.shape_1882 = new cjs.Shape();
	this.shape_1882.graphics.f("#345B84").s().p("AgFAEIALgHQACAHgFAAIgIAAg");
	this.shape_1882.setTransform(269.1,77.7);

	this.shape_1883 = new cjs.Shape();
	this.shape_1883.graphics.f("#386190").s().p("AhADVQALgegQgPQgIgHghgLQgYgJgDgVQgEgVATgOQAKgIAEAAQAIgBABANQABAGgDAMQABAJAPgCQAIAAAEgJIAEgRQAGgKgEgIQgDgFgNgFQgJgDgNgHIgXgKIAggqQAUgZAEgWQARAAAGgBQANgDADgKQAahJA/gcIgGgIQAHgIALgTQALgPAPgDQAHAKAOABIAYAAQgFApggAUQgWAPgxAJQADAHAMAEIAVAJQAWAKgXAcQgDADAFAFQAFAEAHABQAGAAAOgGQAMgDABARQABANgNABQgQAAgGACQgQAGgBAMQgBAHAFAQQAHAVAAAMQABATgNAKQgZASACAUQACAPAVAVQgKABgFAEQgGADABAKQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQAAABABAAQAAAAABABQAAAAAAAAQABAAAAAAQAJgCADgHQACgDABgNIATABQALACgCAMQgCANgLAIQgKAIgQABQgkgBgQABQgeADgSATg");
	this.shape_1883.setTransform(250.1,115.6);

	this.shape_1884 = new cjs.Shape();
	this.shape_1884.graphics.f("#31567A").s().p("AgaARIgBAAIgBgsIAtAAIALALQgeARgCAbg");
	this.shape_1884.setTransform(85.8,26.2);

	this.shape_1885 = new cjs.Shape();
	this.shape_1885.graphics.f("#37608D").s().p("AgmAQIBMgrIABArIghAAQgPAAgHALIgLABg");
	this.shape_1885.setTransform(79.1,26.2);

	this.shape_1886 = new cjs.Shape();
	this.shape_1886.graphics.f("#284662").s().p("AgIA5QALgSgCgPQgBgQgQgOQgPgMgEgJQgGgOALgPIBBAnIADATIgKAbQgGAQADAMg");
	this.shape_1886.setTransform(85,17.7);

	this.shape_1887 = new cjs.Shape();
	this.shape_1887.graphics.f("#31567A").s().p("AAYAlQgsAKgagTQgagUgDgtQAAgDgEgGIgGgJIALgMIAXAYQAGALAFgMQARABAGgMIAgAAIABABQABACgIAgQgFAUAYAEQAUAFABgOQgDgVADgGIAhAAQAIAKgIAIQgLALAAADQgIASAAADQAAAKATACIAAANIgWAVQgFglgfAHg");
	this.shape_1887.setTransform(81.5,33.4);

	this.shape_1888 = new cjs.Shape();
	this.shape_1888.graphics.f("#2F5173").s().p("AgFgCIAKABQgCAEgDAAQgCAAgDgFg");
	this.shape_1888.setTransform(64.6,11.3);

	this.shape_1889 = new cjs.Shape();
	this.shape_1889.graphics.f("#284662").s().p("AgCACIACgDIACAAIABADg");
	this.shape_1889.setTransform(48.9,26.6);

	this.shape_1890 = new cjs.Shape();
	this.shape_1890.graphics.f("#284662").s().p("AgLAJQgCgBABgHIABgKQAJgGAEAIQAHAKAFgCQgIALgIAAQgEAAgFgDg");
	this.shape_1890.setTransform(45,34.4);

	this.shape_1891 = new cjs.Shape();
	this.shape_1891.graphics.f("#365E89").s().p("AgRAIQgKgSAMgZQAQAHAIAHQALAKADAPIgBARQgCAKgIAFQgWgQgHgMg");
	this.shape_1891.setTransform(50.6,15.2);

	this.shape_1892 = new cjs.Shape();
	this.shape_1892.graphics.f("#284662").s().p("AgzAcQAZgrAqgMIAkAaQgoABgSAcQgIgMgOAGQgQAGgGAAIgBAAg");
	this.shape_1892.setTransform(52.3,31.7);

	this.shape_1893 = new cjs.Shape();
	this.shape_1893.graphics.f("#345B84").s().p("AAZAcQgGgBgPgQQgFgFgTgBQgRAAgHgJQAdggAWANQAIAFAeAjQgNALgGAAIgBAAg");
	this.shape_1893.setTransform(59.5,8.2);

	this.shape_1894 = new cjs.Shape();
	this.shape_1894.graphics.f("#345B84").s().p("AgSAfQgZgZgMgGIABgKIAWgWIALAAIgCALQAAAHACABQANAKALgSQAEABAEgBQAFABASgHQAOgGAIAMIgWAIQgNAFgCAGQgNAjgPAAQgEAAgFgCg");
	this.shape_1894.setTransform(46,36.7);

	this.shape_1895 = new cjs.Shape();
	this.shape_1895.graphics.f("#2F5173").s().p("AggAqQgKgMAHgKQAFgHAPgKQAIgDACgKIABgSQAJAGAHgQQAHgPALAHQAOAJgKARQgLASAFAHQgPATgGAGQgMAOgFADQgEACgEAAQgHAAgHgHg");
	this.shape_1895.setTransform(53.4,18.4);

	this.shape_1896 = new cjs.Shape();
	this.shape_1896.graphics.f("#284662").s().p("AAPAbQgUgJgLgCQgTgFgOAOQgYABgJgWQARgCgCgLIgEgUIAIgEQAFgDACABQBBAmBKAWIgKAMIgFAAQgUAAghgKg");
	this.shape_1896.setTransform(65.6,24.1);

	this.shape_1897 = new cjs.Shape();
	this.shape_1897.graphics.f("#284662").s().p("AgGARQgUgVgXgBQAIgSAFgIQAIgOAPgEQA9AYACA1IgWAWQgGgEgcgdg");
	this.shape_1897.setTransform(37.7,30.6);

	this.shape_1898 = new cjs.Shape();
	this.shape_1898.graphics.f("#2F5173").s().p("AAuC7QgEgOgDgDQgGgEgLALIgVABIgBgnIAAgHQAPABAIgDQAKgFABgPQAOAAABgHQABgEgGgMIAAgLQAhgYAAghQgBgYgWgsQgJAVgMAOQgKAKgTALQgsAdgQATQgcAhAHAsIgYAAIgJABQgEgFAPgbQAMgUgjgEQgDgNgfgJQgbgIADgZIgXgBQgNAAAEANQAHAbgTAPIggAXQgCgKgBgvQgBgkgIgUIABgqQATAMARgOIAdgWQANAHAZAYQAWAMAQgtQACgGANgFIAWgIQATgdAogCIgkgaQgBgYADgJQAFgQAbAFQAJAXAXgBIAAAZQAAAPADACQA4AWAfgBQAQAAAGgUQAIgdADgDIAGAJQADAGABADQADAuAaAUQAaATAtgKQAfgHAEAmIgKAAIgPAFIAOAGQARAOgHAdQgHAhAJAMQABAXgSAZIgdApQgJAGgCARQgfgFgCgaQADgggDgOQgFgQgOgPIgZgaQgNABgKALQgXAYABAqQACA9gCAIQgBAQgLAEQgIAFgHAAQgNAAgEgRgAC7AZQAPACAWgSQALAFAAgHQgBgHAAgDQADgSgNAJQgiAKgigGQAOAdARAEg");
	this.shape_1898.setTransform(60.6,44.8);

	this.shape_1899 = new cjs.Shape();
	this.shape_1899.graphics.f("#37608D").s().p("AgGgKIAJAAQALAOgTAHg");
	this.shape_1899.setTransform(2.3,60.3);

	this.shape_1900 = new cjs.Shape();
	this.shape_1900.graphics.f("#31567A").s().p("AgPAQIAAggQAVAOAKASg");
	this.shape_1900.setTransform(3.2,207.3);

	this.shape_1901 = new cjs.Shape();
	this.shape_1901.graphics.f("#37608D").s().p("AgJAcIAAghIATgWIAAA3g");
	this.shape_1901.setTransform(2.6,136.8);

	this.shape_1902 = new cjs.Shape();
	this.shape_1902.graphics.f("#345B87").s().p("AgTAyIAAhjQAgAUAGAOQAJAUgjAYQgEACABATg");
	this.shape_1902.setTransform(3.6,54.1);

	this.shape_1903 = new cjs.Shape();
	this.shape_1903.graphics.f("#2C4D6C").s().p("AgGAQQgjgPgHgBIgBgWIBjAWQgCARgLAFIgKABQgQAAgRgHg");
	this.shape_1903.setTransform(6.6,159.7);

	this.shape_1904 = new cjs.Shape();
	this.shape_1904.graphics.f("#37608D").s().p("AgKACQgHgjANgOQAFAQAPAeQALAagFAXIgtAAQASgNgFghg");
	this.shape_1904.setTransform(107.8,286.6);

	this.shape_1905 = new cjs.Shape();
	this.shape_1905.graphics.f("#25415A").s().p("AAAA8QgLgHgHgDIgBhtQAIAQAVAbQAQAZgJAdQgHAWgJAAIgBAAg");
	this.shape_1905.setTransform(3.5,278.6);

	this.shape_1906 = new cjs.Shape();
	this.shape_1906.graphics.f("#172734").s().p("Ag/A6QAAgXATgQIAkgWQAPgIAHgFQALgJABgOQACgZASAJQAZANgLARIgOAVQgJALgLABQgTAEgKAPQgDAEgMAbg");
	this.shape_1906.setTransform(59.2,285.6);

	this.shape_1907 = new cjs.Shape();
	this.shape_1907.graphics.f("#345B84").s().p("Ag2AmIABgFQAFgGANgmQAIgcAYACQAVACAQAaIAWAvg");
	this.shape_1907.setTransform(74.1,287.7);

	this.shape_1908 = new cjs.Shape();
	this.shape_1908.graphics.f("#172734").s().p("AgvB6QAGgUABgLQADgSgHgPQgGgNABgQQABgQAIgNQAUgeABgOQACgXgegSQgLgGAEgIQAEgHANgFQAhgMAZACIAUABQALADADAJQADAKgIAHQgEAFgLAHQgoAiADAvQACAggJAfQgIAagTAfg");
	this.shape_1908.setTransform(39.7,279.2);

	this.shape_1909 = new cjs.Shape();
	this.shape_1909.graphics.f("#37608D").s().p("AgMBIIgvAHIABitIAdgGQASAXAQgXIAKABQABALgKAIIgQAOIgLALQgFAIAFAIQAEAIAIgEIAOgHQAUgIAIAMQAEAHABAVQgKAbADARQADAWAaAMIAAALIghAWQgNgbgagCg");
	this.shape_1909.setTransform(7.7,73.6);

	this.shape_1910 = new cjs.Shape();
	this.shape_1910.graphics.f("#345B87").s().p("AAPBsQgJgFAAgRQgBgWgTgIQgVgKgZAKIAAinQAIACAjAOQAYALATgFQgTA7AEATQADASAjAaQAJAFACALIABASQgJAGgFAPQgFATgEAFQgSgBgFgDg");
	this.shape_1910.setTransform(7.7,170.9);

	this.shape_1911 = new cjs.Shape();
	this.shape_1911.graphics.f("#37608D").s().p("AgcCkQgKgTgVgOIAAkiQAZgJAUAJQAUAIAAAWQABARAIAGQAGADARAAIAAAXQANAYAEAkIAFA9QgHALgPgEQgSgGgJAFQAhATgGArQgLAFAAARIggAhg");
	this.shape_1911.setTransform(7.7,192.5);

	this.shape_1912 = new cjs.Shape();
	this.shape_1912.graphics.f("#3A6595").s().p("AhICZQgTgFgNghQgFgNgWgCIAAg4IAVAAIAAAPQABAJAIADQACABAEgDQAEgEAAgCQACgKgGgFQgFgDgKgBIAAg3QAXgGAZgiQAZgjATgHQANgEANgPIAYgYQAegcAkASQAGADAPABQAMACABANQAAAMgFAJQgGALgLADQgSAFgJgDQgNgDgDgTIAJgLIgEgDIgFAOQgUADAAAOQAAALAKAIQATAPAAAWIgIAnIAAAKIgHANQgegngfAQQgTAKgpAjQAdACAIAFQAMAIgIAYQgGASANAAQAIAAAQgCIgBASQgCAKgJAFIgNABQgIAAgEADQgWARgRAAIgIgBg");
	this.shape_1912.setTransform(14.8,135.2);

	this.shape_1913 = new cjs.Shape();
	this.shape_1913.graphics.f("#365E89").s().p("Ahui0IAwgHQAbACANAbQAEAEAAAYQAEAPAWgaQADgDAFAFQAFAEAAAHQgBAkARgHIAegOQAKAGAAAQQgMAGAMAFIALAiQAAAQADAGQAFALAPABIAAALIgiAAIgLgLQgHgNgHgEQgJgGgMAHIgMAHQgGAFAAAHQgBALAKAEIASAEQAGAEAHAFIANAMIgMA/QgHAdgYgHQghgLADASQABAJAGAWIAAAAQgOAeglgBQgwgBgLAFgAg3BzIAFAIIAFgIIgGgIIgEAIgAAGhKIAEACIAEgBQgCgDgCAAIgEACg");
	this.shape_1913.setTransform(12.7,99.6);

	this.shape_1914 = new cjs.Shape();
	this.shape_1914.graphics.f("#345B84").s().p("AiHHnQgJgKADg8QAIADAMAHQAJABAHgXQAJgdgQgaQgWgbgHgQIAAp8IAgAAQAPAOAEAFQAHAIAFADQAIADAIgEQACgCACgEQADgFgBgDQgCgMgKgCIgTgBIAigiQAOgCADgDQAFgFgLgMQAFgrgggTQAIgEATAFQAPAFAHgLIAiAYQAOALAIgEQAHgDADgRIAAgLQAHgKASgBQATgBAFgGIAHgWQAEgLAPASIATAXQAJARgVAOQgXAOgDAgIAAAWIgKAAIgQAAQgJABgDAHQgDAIAGADIANADIAAAXQgKAWgYAAQgIgmgjAMQgGADgDAGQgDAHADAHQAGAOANgFQATgHADABIALAAQgEAIASAaQANAVgbAMIgQgPQgKgJgGAWQgEAQgKAKQgGAGgRAJQgkARgRAtIgSABQgLABADALQACAIAJgDIAPgHIAAAiIALAWIAAALQgWABAAAWQAHAKgGAdQgGAZAQANQABAIgBAQQABAOALAHIgmCCIgFAFQgCAEAFADIAIgGQAkgBAnANQAZAIArAUIgCAOIgaAGQgPAEgIAFQgMAGgDAKQgCALAQAEQAmALgEAcQgCAJgSAgQgKAVgBAWQgBAPADAaIhCACIgFAAQg3AAgJgKgAh4hNQgCAAgEADQgDADAAADQgBAGACADQADAFAHgCQACAAACgEIAFgIIgGgGQgDgDgCAAIAAAAg");
	this.shape_1914.setTransform(15.8,241.9);

	this.shape_1915 = new cjs.Shape();
	this.shape_1915.graphics.f("#386190").s().p("AgpFTQgigSgSgIQAAgVgBgKQgBgTgUgFIhkgWIAAh6QAWACAFANQANAhATAFQATAGAcgWQAEgDAIAAIAOgBQATAXAQgOQAQgVALgDIgygSQgRACgIAAQgNAAAGgSQAIgYgMgIQgIgFgdgCQApgjATgKQAggQAeAnIAHgNIAEgDIgEgIIAIgmQAAgWgTgPQgKgIAAgLQAAgOAUgDQADATANADQAIADASgFQALgDAGgLQAFgJAAgMQgBgNgMgCQgPgBgGgDQgjgSgeAcIgYAYQgOAPgNAEQgTAHgZAjQgZAigXAFIgVAWIAAiyQALgGAwACQAlABAOgeIAGAHQADADAFgGIgOgEQgGgWgBgJQgDgSAiAKQAYAHAHgcIAMhAIALggIAhgBQAmAhAUAoQAGANAQAVQAIATgbAQQgEADAAAGQAAAGAFAFQALAJAPgJQAUgMAJgVQAHgQAEgbIgBgQQAAgKAKgBQANgBAEAJQACAFAAAOQAAAWAFAHQAIAJAVgMQAbAOgKAUIgRAhQgpAAgSAEQgfAHgLAiQgLAKAGAdQAFAbgQAHQghAPgDAbQAAAFAHAvQgMABgGADQgIAEgCALQgBAFADADQACACAFgBQALgCAEgIQADgGABgMQAYALgHAYQgFARAIAHQAIAHAQgFQApgPAOAOQANANgFAqQgBAMAOAaQAGAVgoAAQgBgBgCAIIgCAMQgCAmgTATQgUAUgjgCQgTAAgFACQgMADgCAQQgPAJgQAAQgNAAgOgGgAgYBHQgSACgCAOQgCAPATAAQATgBABgOQABgQgQAAIgCAAg");
	this.shape_1915.setTransform(23.2,133.8);

	this.shape_1916 = new cjs.Shape();
	this.shape_1916.graphics.f("#172734").s().p("AgVAhQgOgMAZgcQABgCgDgGIgFgMIAWgOQAPAMABAbQABAgAFAJIgJADQgggEgHgFg");
	this.shape_1916.setTransform(125,16.1);

	this.shape_1917 = new cjs.Shape();
	this.shape_1917.graphics.f("#2C4D6C").s().p("AgeAaQgEgNAJgPQAMgVABgFQADgLAJgGQAKgHAMAHQAMAHgCALQAAAFgIAQQgXACADAVQADAbgIAGg");
	this.shape_1917.setTransform(172.2,19.6);

	this.shape_1918 = new cjs.Shape();
	this.shape_1918.graphics.f("#37608D").s().p("AgOAjQgPgCgGgKIgBgXQAAgOACgKQAEgRAHAHQAKAKACAAIAVgJQANgEANAIQgPAUgFAKQgKASACASIgWgCg");
	this.shape_1918.setTransform(165.9,28.1);

	this.shape_1919 = new cjs.Shape();
	this.shape_1919.graphics.f("#25415A").s().p("AgyBDIABgVQAKgLAAgWQgBgaACgIQAJgHAPgTQAOgQAPgDIAGAMQADAHgCABQgXAeAMALQAHAFAhADIgBAFIgDAcQgmgMgEAAQgUAAgGAiQgCAHgKACIgRAAg");
	this.shape_1919.setTransform(121.7,20);

	this.shape_1920 = new cjs.Shape();
	this.shape_1920.graphics.f("#2F5173").s().p("AgiAyQgFgJgCghQAAgagQgMIAAgTIACgBIAVALQAMADAKgNQAPAAAPALIAZAWQgCANAFAOIAMAZIguALQgSAEgPAAIgNgBg");
	this.shape_1920.setTransform(131.3,15);

	this.shape_1921 = new cjs.Shape();
	this.shape_1921.graphics.f("#172734").s().p("AhIAiIAagIIAagJQAVgLAJgMQALgQgIgXIACgbQA0AIAFAJQAFAKgYAsQgCADAAAIIgBAOQgSAYgiALIg/AOg");
	this.shape_1921.setTransform(125.1,28.1);

	this.shape_1922 = new cjs.Shape();
	this.shape_1922.graphics.f("#31567A").s().p("AgQAKQAAgLAIgFQAEgCANgDQAEgBADAEQADAEgDADQgJAJgFACQgDACgFAAQgFAAgFgCg");
	this.shape_1922.setTransform(285.4,277.6);

	this.shape_1923 = new cjs.Shape();
	this.shape_1923.graphics.f("#32577E").s().p("AgLAJQgLgUgNADQAtgZAWAXQAHAHgIAJQgGAHgKAGQgFADgFAAQgJAAgHgNg");
	this.shape_1923.setTransform(282.5,257.9);

	this.shape_1924 = new cjs.Shape();
	this.shape_1924.graphics.f("#20374B").s().p("AgDAFIAAgKIAIALIgIgBg");
	this.shape_1924.setTransform(2.1,37.3);

	this.shape_1925 = new cjs.Shape();
	this.shape_1925.graphics.f("#20374B").s().p("AgLgDQgBgKASgDQAMAQgLAQIgKABQgIgQAAgEg");
	this.shape_1925.setTransform(35.4,18.4);

	this.shape_1926 = new cjs.Shape();
	this.shape_1926.graphics.f("#20374B").s().p("AgDAMQgPgWgEgEIgBgWQAigCAGAaQAEANADAkQgQgGgLgTg");
	this.shape_1926.setTransform(4,34.9);

	this.shape_1927 = new cjs.Shape();
	this.shape_1927.graphics.f("#284662").s().p("AggATQgJgFAEgJQAGgJABgFIAXgLIAJgBQAEAIASADQAQACgBAJQgBALgMAAQgQgBgHABIgRAIQgFACgEAAQgFAAgEgDg");
	this.shape_1927.setTransform(35.8,22.2);

	this.shape_1928 = new cjs.Shape();
	this.shape_1928.graphics.f("#25415A").s().p("AgzBJQgLgEAGgMQAGgQgCgFQgCgQAIgKQAHgHAQgHQARgHAGgFQANgIABgQQAMgXAWgLQABAPgLAgQgFAbAaAPIgBAqIgrABQgGgSgGABQgEABgHAQQgGANgPADIgJABQgHAAgGgCg");
	this.shape_1928.setTransform(27.9,37.5);

	this.shape_1929 = new cjs.Shape();
	this.shape_1929.graphics.f("#20374B").s().p("AghA9QAFgUgTgfQgTgeAGgOQAHgQAZgLQAegOAZAVQgBAFgGAKQgEAJAJAFQAIAFAKgFIASgIIACAXQgPAEgIANQgFAIgIASQgXALgKAXg");
	this.shape_1929.setTransform(30,26.7);

	this.shape_1930 = new cjs.Shape();
	this.shape_1930.graphics.f("#2C4D6C").s().p("AiNBoQAUgHgLgPQgBgUADgCQAkgYgJgVQgFgNgigUIAAhwIAJAAQAEATAKARQALASAIgCQAUgHAzAKQArAHAYgQIAOgIIAPgFQACAFgGAQQgGAMALAEQAKADAMgCQAPgDAGgNQAHgRAFgBQAGgBAGATQAAARAHAiQAEAegLAUQgJAAgygXQglgQgcAQIgLAAQABgOgLgGQgBgSgKgFQgJAKgXAVQgQASAHAVQAIAXgCAaQgCAQgIAgIgKgBQgSghgRAhIgeAFgAhVgpIAIAMIgFAMQgEAHAEAFQAAABAAAAQABAAAAAAQABAAAAAAQABAAABgBQADAAACgBQAMgOgQgJIAAgJQAAgDgEAAIgEAAg");
	this.shape_1930.setTransform(15.9,51);

	this.shape_1931 = new cjs.Shape();
	this.shape_1931.graphics.f("#284662").s().p("AgWgTIAdgDIAQACQAAAXgOATIgVABg");
	this.shape_1931.setTransform(278.7,157.4);

	this.shape_1932 = new cjs.Shape();
	this.shape_1932.graphics.f("#345B84").s().p("AgxARIAAgLQARgTAfgCQAQgBAjABQABAKgJAHIgOAPg");
	this.shape_1932.setTransform(250.1,136.8);

	this.shape_1933 = new cjs.Shape();
	this.shape_1933.graphics.f("#25415A").s().p("AgzA8IAYg+QAPgmATgVIAbASQAQAKACARQgyADgIANQgJANAWAmQgVgEgVAPg");
	this.shape_1933.setTransform(284.6,149.1);

	this.shape_1934 = new cjs.Shape();
	this.shape_1934.graphics.f("#365E89").s().p("AgMArQgTgCgEgQQgDgOAHgTIAEgSQACgLAIgFQAOADAOARQATAUAHAEQADAZgSAKQgLAGgPAAIgIAAg");
	this.shape_1934.setTransform(254.7,145);

	this.shape_1935 = new cjs.Shape();
	this.shape_1935.graphics.f("#37608D").s().p("ABZB8QgBgtgcgwIg2hQQg4gegcAWQggAagPgLQgMgJgHgkIAIAAQAGgBACgCQBJhFBdBIQALAJAPgDIAZgGQAAAJgFAvQgEAhAHAXQAQAyAqAcIAAAVg");
	this.shape_1935.setTransform(255.1,165.1);

	this.shape_1936 = new cjs.Shape();
	this.shape_1936.graphics.f("#365E89").s().p("AhBBBQgHgXAEgiQAFguAAgJQAWgCAOgWIAXgkQAGgGAIgTQAKgOARAHQAhAMgDAsQAAAJgHASIAKArIAAAAQgIAFgCAJQgBAEAAAPIgLAKQgJAGgCAJQgBAFABAOQABAWATAAIABAAIALAZIABATIhNANQgqgcgQgyg");
	this.shape_1936.setTransform(270.4,161.1);

	this.shape_1937 = new cjs.Shape();
	this.shape_1937.graphics.f("#3A6595").s().p("AiAEEQgPgQgPgEIAAgWIAPgPQAJgIgCgKQARgBAKgIQALgIACgOQABgLgKgCIgTgBQgVgVgDgPQgBgUAZgTQANgKgBgSQAAgNgIgVQgEgPABgHQABgNAQgFQAGgCAQAAQANgCgBgNQgBgQgMADQgPAGgFgBQgHgBgFgDQgFgFACgDQAYgcgXgKIgUgJQgMgFgDgGQAxgJAWgPQAfgUAGgpIAXAAIABALQADAFAGABQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQABgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQgBgGgFgDIgKgCQgYg5BDgKQANAcgJAmIgSBBQgBALgKACIgSABIgCgKQgDgFgGgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABgBAAIgCAEQABAGAFACIALACIAEAaQADAQgEAMQgHAVAHAIQAJAHAUgPQAEgDAIgBQAHgCABABQAPAeAwAHQA0AIAPARQgcAMgMAQQgOAQgOAoQgJACgIgKQgJgMgEgBQgUgLgOASQgFAIACAJQADAIAHADQAlANABAZQgBAQgTAfQgiA1hDgOQgBAAgQgLQgKgIgKAKQgCACAAAHQABAHACAEQAQAbAZgCIA1gLQgOAbglAGQg3AKgFACQgHgEgTgVg");
	this.shape_1937.setTransform(268.8,116.7);

	this.shape_1938 = new cjs.Shape();
	this.shape_1938.graphics.f("#172734").s().p("AgEgFQAJACgBADQAAACgGAEg");
	this.shape_1938.setTransform(213.1,196.2);

	this.shape_1939 = new cjs.Shape();
	this.shape_1939.graphics.f("#31567A").s().p("AgDAAIADgCIAEACIgEADg");
	this.shape_1939.setTransform(260.7,201.6);

	this.shape_1940 = new cjs.Shape();
	this.shape_1940.graphics.f("#31567A").s().p("AgDAEQgBAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAEgBIAJgBIgCAEIgFACIgCABIgBAAg");
	this.shape_1940.setTransform(242.1,194.8);

	this.shape_1941 = new cjs.Shape();
	this.shape_1941.graphics.f("#284662").s().p("AgOgGIAQAAQAJABAEAHIgBADQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAIgEAAQgNAAgKgNg");
	this.shape_1941.setTransform(230.9,198.4);

	this.shape_1942 = new cjs.Shape();
	this.shape_1942.graphics.f("#31567A").s().p("AgFADIgDgLIALADQAGADgBAHQAAABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgBABQgGAAgDgGg");
	this.shape_1942.setTransform(244.8,195.2);

	this.shape_1943 = new cjs.Shape();
	this.shape_1943.graphics.f("#31567A").s().p("AgaANQAMgRALgFQAMgGASAHQgKANgNAFQgIADgRAAIgFAAg");
	this.shape_1943.setTransform(271.3,190.3);

	this.shape_1944 = new cjs.Shape();
	this.shape_1944.graphics.f("#32577E").s().p("AgRAEQgDgFACgFQACgFAGgBQAbgIADAbQgQAHgEAAIgBABQgKAAgGgLg");
	this.shape_1944.setTransform(284.4,204.9);

	this.shape_1945 = new cjs.Shape();
	this.shape_1945.graphics.f("#31567A").s().p("AAJAUQgQgFgFgGQgJgJAIgTIAUARQAIAHADAKIgFAEIgEABIAAAAg");
	this.shape_1945.setTransform(260.6,206.4);

	this.shape_1946 = new cjs.Shape();
	this.shape_1946.graphics.f("#284662").s().p("AAIAOQgRgHgJAAIgQgDQAQgcAUAPQAaASAHgCQgJAIgKAAIgIgBg");
	this.shape_1946.setTransform(222.7,194.8);

	this.shape_1947 = new cjs.Shape();
	this.shape_1947.graphics.f("#32577E").s().p("AgbgIQgDgEAEgFQAEgGAGAAQARABALAQIARAdIgKABQgfAAgPggg");
	this.shape_1947.setTransform(277.2,209.3);

	this.shape_1948 = new cjs.Shape();
	this.shape_1948.graphics.f("#31567A").s().p("AAUAeQgMgCgHgHQgHgIgPgBQgQAAgIgBIgBgGIAtgeQALgHAKADQAJACAMALQANALgOAKQgPAMAFAKQACAEgGAAIgGgBg");
	this.shape_1948.setTransform(251.4,230);

	this.shape_1949 = new cjs.Shape();
	this.shape_1949.graphics.f("#172734").s().p("AgTApQgMgOgJgsQgCgTARgGQAagJABgBIAQACQgZAdAMAZQAEAJAhAhQgTAHgOAAQgRAAgLgMg");
	this.shape_1949.setTransform(219,200.6);

	this.shape_1950 = new cjs.Shape();
	this.shape_1950.graphics.f("#32577E").s().p("Ag2AxQgOgKACgPQABgPANgMQALgNAFgJQAGgNgCgOIALgBQAygEAnAxQgegDgNACQgXAEgEAfQgDAQgQAJQgIADgHAAQgJAAgJgFg");
	this.shape_1950.setTransform(283,197.5);

	this.shape_1951 = new cjs.Shape();
	this.shape_1951.graphics.f("#31567A").s().p("AAZB1QgIgDgJgGIgbgWQgRgNgNgHQgagPgQgBQgYgBgQAZIgLAAIgCgTQgCgKgGABQgiAIgPgFQgVgHgGgiQgCgHgHACQgEABgKAFQgTAJgEgKIgCgWQAEgDAlgNQAZgJALgRQAHgJAFAAQAGAAACAOQACAJAFADQAKAHAVgTQAUgRAVATQANAMAQgYQARgYgBggQATA0AkgLQAKgDAUgJQARgHALACQAiA0Ahg0IAAAAIA4AAQAGATALAJQAMALAVADQAgAHAGAEQAVAOggAfQgIAHgGAMQgIAPAAANIgLAAQgZgDgLgUQgFgJgHgfQgBgPgEgGQgFgKgWAAQgqgHgLADQgQAEASAxQAFAQgYAhQggArgGAPQgCAEgFAAIgFgBg");
	this.shape_1951.setTransform(257.1,187);

	this.shape_1952 = new cjs.Shape();
	this.shape_1952.graphics.f("#365E89").s().p("AguC6Qg1gBgTgHQgQgFgFgIQgEgGAAgOIA3ALQAVAPAPgMQALgIAHgTQAEgKgJgRQgHgSgJgDQgRgGgFARQgIAZgEADQgkgBgSAXQguA7hFgYQhLhAgjg6IAMgkQBIgGBKgnQAggCAGgQQAEgMgLgGQgOgFgFgFQglgdACgjIAAgiQANgDAiAdQAcAQACg8QAAgCAPgCIBLgLIAiAAQAAAagcAIQgXAFARARQAEATAHAGQAIAHAWgJIAwgXQAfgLAZALQAGAMAXAPQAWAOAFAOQAHAkAMAJQAQALAfgaQAcgWA5AeIA3BQQAbAwACAtIgLABQgMgDgRAHQgUAKgKADQglALgSg0QAAAfgRAZQgQAXgMgLQgWgUgUASQgVASgKgGQgFgEgCgJQgCgOgGAAQgFAAgHAKQgLAQgZAJQglAOgEACQgYgPgtAAg");
	this.shape_1952.setTransform(227.1,165.3);

	this.shape_1953 = new cjs.Shape();
	this.shape_1953.graphics.f("#03060C").s().p("AlMMvQAFgXgMgbQgOgegGgQQgNAOAHAkQAFAhgSANIkBAAIgWgwQgQgZgWgCQgYgCgIAbQgNAogFAFIgBAFIhxAAQAMgbADgEQALgPASgEQAMgBAIgMIAPgVQALgRgZgNQgSgJgCAZQgBAOgLAJQgHAFgRAIIgkAXQgSAQAAAXIinAAQASgfAIgaQAKgfgDggQgDgwApgiQALgHAEgFQAJgHgDgKQgDgJgMgDIgUgBQgagCghAMQgNAFgDAHQgFAIALAGQAfASgDAXQgBAOgUAeQgIAOgBAQQgBAQAHANQAGAPgDASQgBALgGAUIi/AAQgEgaABgPQABgWALgVQASggABgJQAFgcgogLQgQgEADgLQADgKAMgGQAJgFAPgEIAagGIACgOQgrgUgagIQgngNglABIgFgHIAmiBQAYgLAMgHQATgLAKgSQAOgbAdgNQAWgJAkgDIABAQQACAJAJACQAJADAGgHQAEgEADgLQAVABAGgMIgBgFIgCgDIgYAJQgBgYgDgDQgEgCgPAJQgFgBgHgUQgGgPgRALQgHAEgKAOQgKALgLgMQgKgJAEgPQACgNALgNQBIgbAPg5QARg/AOgOQASgPA+gDQAegCARgMQASgOAHgbIANgBQAFgBAEgGIAUAAIAJAIQAgAMAOAoIAWBIIAihlQACgGACgQQABgNADgHQAOglgbgkIAIgYIA1gMQAQAGAIgOIAtABQAGAUAZAPQAIAOAOABIAZAHQCEAZAuhgIg6AcQgsAZgMgwQABgNALgDIAHAHIADgGIgKgIIgCgHQAZgbADgGQANgUgGgXQA3g5AVgbQAngyAQgyQAFgWgQgfQgRgjgBgPIAZggQAZAqANAbQATAnAJAkQAgAIARgJQARgKAIgjQAEgTARgNQAPgMAdgJQAUgGA/gEQAzgDAcgPIAlAHQAfASAUAHQAdAKAcgEIAIANIAAAEQg/gDhYAHIiVAOQgTABgRASQgTAXgIADQgCACANAFQAQAHAAAKIAAAQQgIADgCACQgDAEABAJQAIAfAXASQASAOAjAKQAcAJAtAAQA6gBAOACQA0AGApgfIASgRQANgCAZACQAVgCAJgUIBEg1IANgLQALgFAFgKQAEgHABgOQANgNAFgfQAFgiAIgMQAWABALgNQAIgKAFgXQAQgeACgmQAFgQAAgHQgBgNgKgJQgJg2AVg2QAPgGAQAHIAdAOQgdAbgBAJQAAAJAZAYIgDAMIgQAkIgTBVQgeAsAJA8QgVAAgCAVIAAABIgJAMIgjBNIhBA5IgmArQgiAKgsAaIhIArQgPAIACAOQABAMAMANQArAvAJApQgPAUgGANQgKAUAHAMQAHAQAVgGQAfgKAEABIARAAQABAIgBArQgBAfAIAUIACAMQACAHAGABQAJAAAFgEQAGgFgBgKIgBgBQAJAEAFgFIAIgLIAAABQANgIAEgFQAIgIgBgMIgBgBQALgDAFgKIAGgUIAeg5QADgDABgGIA3hlQANgIgFgQIAahOQAIgGABgKIgDgSQANhCgShZIAFAAIAEgBQAHAFAIATQAHASALAFQAjA6BLBAIAMAPQAIAJAHACQApANAVAUQAYAYABAoIACALQgDANAGAEQAGAEALAAQAKAsAMAOQATAXAqgRQApANAagEQAhgFAWggQAMgRA4ADQA3ADAMARQAKAQgHALQgEAJgTALQgtAYgTApQgVAqANApQAGATAdAUQAeAWAGASIACAGIAwBPQAYAwgKAuQAXgXAMglIAQhAIAYhAQAPgngKgfQgGgSAegQQARgJAKgVIARghQBLAiAfBHQAXA2AEBbIgBA1QgBAfgDAVIgFAhQgHARgXACIgZAEQgOAGAWAXQAGAGgSAQQgSARAIATQACADACAfQABAVASAJQAHAEgEAJQgCAGgFAFQghAggMBAQgRBagEANgAGkL0IgFAZQgBANAJAHQAGgJAYgBQAWgBAKgSQAEgJAUAIQAXAJALgNQABgPgOgNQgRgQgCgGQgdAMgIgUQgFgbgHgJQgLgRgQgBQgPgCgMAOQgHAJgFATIgIAgIACAAQAkAAgGAdgAqFKAQgLABgJAGQgKAHgDALQgGATAdAGQAbAFAJAGQAQAJACAXQAAAFAHACQAGABAGgCQAHgEADgFQAFgGAAgNQAAgNgfgdQgegdgPAAIgCAAgAKALUQAMADAVAIQADABAGgEQAHgFAAgEQAMgnAEgUQAFghgSgZIBGAAQgjgKgHgIQgMgLAYgRQALAXAPACQAPACAGgWIALgYQAHgPgDgLQAVAGAJAGQAPAKADATQAIgmgDgMQgGgXgkgCQgvAGgRgnQgLgzgOgVQgOAkgqAEQgDgUgOgEQgMgEgIAOQgOAegEALQgHAYAHAUQAGAPAFADQAJAEAFgYQACgNAHADQAGACAGAJQgIAlAAAFQADAVAkgBIgNAwIgQgCQgKgBgGACQgdAFgNAcQgHAQgMAjQgJAQALAPQAKAOAPgCIALgBQANAAANADgAmVKVQgRAbAOAIQAVALAWgRQAegZAGgCQgigSgGgCIgHgBQgRAAgMATgAihIyQAIAVAlgDQgPgvgigQIAEAtgAgfH+QgEAHgEASQgFAMAJAHQAHAGAKAAQAPAAAGgNQAEgHAEgTQADgVgUgFQgSABgHAOgAg9FvQAHAKAIAcQAcgbACgQQADgVgigOQgSgHgNANQgIAHgNASQAHgCAGAAQAPAAAKALgADPCaQgXABgGAXQgIAJgOAAIgYACQgSAFgJAKQgJAMAKAQQAWAhALAsQAIAgAGA6QAegsARg3QAKgjALg/IAcg1QgJAEghABgAuBE9QgNAWARATQAUAWALgSQAPgYgBgRQAAgWgbgVQgBAFgVAigAprEiIgbAFQgPAFgCAPQgCATAeACQARABAKgEQAOgFAHgSIgNgNQgIgHgJAAIgCAAgAHLECQAGAKgSAbQgOAWAXALQAYALAIgZQAKgfALgDQASgGgFgJQgEgEgOgJQACgNgGgFQgGgDgNADQABgNgCgFQgCgKgLgDIgThBQg2AngFAPQgEAPAdAmQAIAOALgBQAIgBANgJgAGfE2QgCABgEAIIAJACIACgDIADgFIgFgCIgDgBIAAAAgAlLmfQgNAJgDAXQgJBDARBeIAcCdQAAAUARAVIAGAPIASAiQAMATAPAKIAAAMIADAYQATA1AGATQAMApAAAiQABAJAHAHQAHAIAFgHQASgfASg8QAEgOgQgDQgSgDgBgIIAXgfQAagWgCgaQAUgaADgcQAHgGgGgHIgDgVIAAgVIAbg3QASghAHgUQALgcgjgMQgsgPgGgPQgCgFgMgFQgQgGgDgDQhMg6gMgNQgrgtgFg5QgVACgJAGgAIbCwQgIAEACAGQACAVAVANQAMAIAZAOQAGAEAHgHQAJgHgCgJQgDgUgWgLQgegPgEgFIgCAAQgIAAgFAEgAqNB9QgXAgAbA9QAHg2AMgaQAQgjAggRQg2AQgRAXgANvB6QgHALACADQAGAMAMAaQANAUAZgDQAKgBAGgFQAGgHgEgIQgKgOgQgUIgdgjIgOAVgAKoCfQAZAIAIAGQAKAIAJgKIAPgRQAHgDACgHQADgIgEgGQgGgIgLAAIgTABQgKAAgYAMQgVAKgPgEQAKAMAVAGgAoGBdQgeAYgGABQASAMAUABQARABAUgHQAEgBANAGQAJAEAEgMQADgNgHgIQgFgHgQgHQgJgEgJAAQgNAAgNAKgAAzAxQgaATAEAcIAAATQACALAJAEQALgBACgMQACgOACgDQASgSgLgcQgBgCgFgCIgFgBIgCAAgALpgQQgTACgFAZQgEAPgCAgQABADgCATQAAAOAJAEQAWAKAagNQAVgKgJgPIgOgYQACgdgDgNQgEgUgQAAIgDAAgAKSAyQgHADgJACIgPACQAEAHgIAMQgIALAFAHQAJAFAMgJQAMgIAIAFQAPAIAHgGQAHgFgCgPQgDgWgOAAQgGAAgHADgAC2BVIACADIAEgDIgDgEIgDAEgAqYAqQAmALAXgfQAEgFgHgIQgGgJgJAAIgFAAQgnAAABAqgAHrgpQANAOAPABQAQAAAFgNQAGgOgLgTIgUgfQgIgOgJAJQgOALgDgBQAFgYABgMQADgWgOgNQgDANghAFQgcADAEAcQgQAKAEANQABAFALARQAOAjAGAEQAIADAdgNIAGgCQAHAAAFAHgAI+h2QAIAcgDAEIgIARQgCAKAOACQANABANgKIAWgVQgOgEgFgYQgGgWgKgBIgBAAQgbAAAGAUg");
	this.shape_1953.setTransform(143.3,209.9);

	this.shape_1954 = new cjs.Shape();
	this.shape_1954.graphics.f("#386190").s().p("AgFACQAFgIAFAIg");
	this.shape_1954.setTransform(216.6,83.5);

	this.shape_1955 = new cjs.Shape();
	this.shape_1955.graphics.f("#31567A").s().p("AAAADIgCgEIADgBIACAEIgDABIAAAAg");
	this.shape_1955.setTransform(227.7,90.4);

	this.shape_1956 = new cjs.Shape();
	this.shape_1956.graphics.f("#365E89").s().p("AgDgEIADgCIAEANIAAAAg");
	this.shape_1956.setTransform(275.9,39.4);

	this.shape_1957 = new cjs.Shape();
	this.shape_1957.graphics.f("#386190").s().p("AgGgCQAHgFAGALIgKAAg");
	this.shape_1957.setTransform(263.3,57.6);

	this.shape_1958 = new cjs.Shape();
	this.shape_1958.graphics.f("#345B84").s().p("AgKAEQAKgQALAQg");
	this.shape_1958.setTransform(256.2,71);

	this.shape_1959 = new cjs.Shape();
	this.shape_1959.graphics.f("#37608D").s().p("AAAgDQAAABABABQAAAAAAABQAAAAABAAQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAg");
	this.shape_1959.setTransform(268.1,17.8);

	this.shape_1960 = new cjs.Shape();
	this.shape_1960.graphics.f("#345B84").s().p("AgFAAIABgCIACgCIAIACIgGAHg");
	this.shape_1960.setTransform(246,79.1);

	this.shape_1961 = new cjs.Shape();
	this.shape_1961.graphics.f("#32577E").s().p("AgKACQAKgHACgBQAAgBAJAEIgKAKg");
	this.shape_1961.setTransform(235.8,99.8);

	this.shape_1962 = new cjs.Shape();
	this.shape_1962.graphics.f("#386190").s().p("AgGADQACgSAGACQAIAEgDAJQgEALABADg");
	this.shape_1962.setTransform(217.8,80.1);

	this.shape_1963 = new cjs.Shape();
	this.shape_1963.graphics.f("#32577E").s().p("AgVAGQAHgKANgBIAYABIgMAKg");
	this.shape_1963.setTransform(266.3,75.3);

	this.shape_1964 = new cjs.Shape();
	this.shape_1964.graphics.f("#32577E").s().p("AgEACQgBgGACgNQAIAHAAALIAAARIAAAAQgIgGgBgKg");
	this.shape_1964.setTransform(245.7,95.3);

	this.shape_1965 = new cjs.Shape();
	this.shape_1965.graphics.f("#31567A").s().p("AgQgKIAhAAIgMAVQgUAAgBgVg");
	this.shape_1965.setTransform(242.3,61.4);

	this.shape_1966 = new cjs.Shape();
	this.shape_1966.graphics.f("#32577E").s().p("AgJAFQgCgDADgDQADgEAKgCQABAAAFAJIgHAEIgGACQgFAAgCgDg");
	this.shape_1966.setTransform(244.7,90.6);

	this.shape_1967 = new cjs.Shape();
	this.shape_1967.graphics.f("#32577E").s().p("AgEAKQgEgDAAgKQACgKAKAEIADAFIACAFQAAAGgEADIgEABIgFgBg");
	this.shape_1967.setTransform(241.7,98.8);

	this.shape_1968 = new cjs.Shape();
	this.shape_1968.graphics.f("#32577E").s().p("AgSANQgHgBgBgJIgBgQIA3AAQgPAbgYAAIgHgBg");
	this.shape_1968.setTransform(265.7,59.5);

	this.shape_1969 = new cjs.Shape();
	this.shape_1969.graphics.f("#31567A").s().p("AgPAQQgLgFgBgQIASgBQAJgCAGgIIAWAAIAAAVQgVAMgQAAIgGgBg");
	this.shape_1969.setTransform(245.6,63.1);

	this.shape_1970 = new cjs.Shape();
	this.shape_1970.graphics.f("#37608D").s().p("AAAAUQgOgEgBgNQABgQgBgHQAQAAAGADQAKAGgBAPQgBAIgEAFQgDAEgFAAIgDgBg");
	this.shape_1970.setTransform(264.6,24.4);

	this.shape_1971 = new cjs.Shape();
	this.shape_1971.graphics.f("#345B84").s().p("AgFAWQAAgVgWgBQAAgPALgGIAgAAQACAQAJAFIABAAQgBAPgLAFQgFACgMAAIgEAAg");
	this.shape_1971.setTransform(265.8,78.1);

	this.shape_1972 = new cjs.Shape();
	this.shape_1972.graphics.f("#32577E").s().p("AgZAcQgHgNAHgPIALgbIAWAAQAWABAAAVQgMABgPARQgMAPgNAAIgDAAg");
	this.shape_1972.setTransform(262.2,80.9);

	this.shape_1973 = new cjs.Shape();
	this.shape_1973.graphics.f("#284662").s().p("AAAAVIgLgOQgHgHgJgBQgCgTAWgEQAZgJAHAMQAFAIgDAYQgEASgJAAQgHAAgHgIg");
	this.shape_1973.setTransform(277.1,23.4);

	this.shape_1974 = new cjs.Shape();
	this.shape_1974.graphics.f("#32577E").s().p("AgRgMQAGgGApgaQAAAbgTAWIgkAoQgNgjAVgWg");
	this.shape_1974.setTransform(271.1,70.3);

	this.shape_1975 = new cjs.Shape();
	this.shape_1975.graphics.f("#32577E").s().p("AgQAZQgNgFgGgOQAKgZATgGQAPgFAbAJQAAAKgPAOQgPANADAMIgHAAQgLAAgHgDg");
	this.shape_1975.setTransform(260.9,66.4);

	this.shape_1976 = new cjs.Shape();
	this.shape_1976.graphics.f("#2C4D6C").s().p("AgIAkQgNgBgCgJQgBgFAFgNQADgTACgJQAFgQARABQAKAAAEAJQAEAJgFALQgEAHgCAUQgEAPgQAAIgDAAg");
	this.shape_1976.setTransform(239,72.2);

	this.shape_1977 = new cjs.Shape();
	this.shape_1977.graphics.f("#386190").s().p("AgDAbQgLgQgLAQIgLAAQgNgWAEgNQAEgPAbgEIALALQAFAOANAFQAJAEARgBQABADAEAIQACAHgHAEg");
	this.shape_1977.setTransform(257.7,68.7);

	this.shape_1978 = new cjs.Shape();
	this.shape_1978.graphics.f("#386190").s().p("Ag3AQQATgXAggHIA8gCQABAcgTAEQgaAAgMABg");
	this.shape_1978.setTransform(270.8,56.4);

	this.shape_1979 = new cjs.Shape();
	this.shape_1979.graphics.f("#386190").s().p("AAIAfQgGgMgPAAIgiAAQAEghAJgFQAIgGAbAOQAIAEAFgDIAIgJQAHgIADgBQAGgEAKAEQAAAJgLATQgLASAEANg");
	this.shape_1979.setTransform(245.4,58.3);

	this.shape_1980 = new cjs.Shape();
	this.shape_1980.graphics.f("#31567A").s().p("AgyAqQgIgLAKgHQAGgFAOgHIAUgNQgCgLgJgDQgLgCgEgCQgMgFACgMQABgNAOAAQAXAAAtAHQARABgCAQQgCAQgOAHQgfASgUAVQgJAKgKACIgFABQgIAAgFgIg");
	this.shape_1980.setTransform(234.2,83.2);

	this.shape_1981 = new cjs.Shape();
	this.shape_1981.graphics.f("#345B84").s().p("AgBAiQgGgdgOgBQgMgCgSAUQgJgMAAgPQABgRgBgJQATADAZgOQAEAgAXgWQAighAQAuQgbAEgEAPQgEAMANAXQgLAMgNAAIgBAAQgNAAgCgNg");
	this.shape_1981.setTransform(250.1,67.9);

	this.shape_1982 = new cjs.Shape();
	this.shape_1982.graphics.f("#365E89").s().p("AhAA+IALgtIABgLIAlgeQAUgTALgTQAMgUAKATQALAWAJgIIAHAIQhAAcgZBJQgEAJgMADQgGABgRAAg");
	this.shape_1982.setTransform(249.3,103.2);

	this.shape_1983 = new cjs.Shape();
	this.shape_1983.graphics.f("#32577E").s().p("AgfAzQgGgHgCABQglASgDgRIAEgoQAMgBAaAAQATgEgBgcQAEgDAZgIQATgHAGgOQAOgEAMAIQAHAFAMANIhjBjIgMgLgAAMgHIAEgBIAAgDIgEgCg");
	this.shape_1983.setTransform(278.4,57.4);

	this.shape_1984 = new cjs.Shape();
	this.shape_1984.graphics.f("#345B84").s().p("AgEA+QgOgFgagXQgBgTgFgHIgOgTQgFgMAIgLQAHgKANADQAHACANAHQAxAVAFg2IAhAAQAEAJgUAXQgQATAVAPIgLAbQgHAQAHANIAAAAQgPAJgOAAQgKAAgJgEg");
	this.shape_1984.setTransform(255.2,78);

	this.shape_1985 = new cjs.Shape();
	this.shape_1985.graphics.f("#32577E").s().p("AhOBMQAUgTgEgMIAAAAQAagJADgGIgCgeQgDgqACgOQACghARgWQAZAXAOAFQAYAKAZgPIABAPQAAAIADADQASASgDAUQgDAOgQAVQgQADgLAPQgLATgHAIQgJAIgLgWQgJgTgMAUQgLASgVAUIglAfQgNgRATgTg");
	this.shape_1985.setTransform(252.5,92.7);

	this.shape_1986 = new cjs.Shape();
	this.shape_1986.graphics.f("#345B87").s().p("AgCAAIACgDIADADIgCAEg");
	this.shape_1986.setTransform(188.6,23.3);

	this.shape_1987 = new cjs.Shape();
	this.shape_1987.graphics.f("#345B87").s().p("AgCAAIAEgCIABADIgEACIgBgDg");
	this.shape_1987.setTransform(241.7,25);

	this.shape_1988 = new cjs.Shape();
	this.shape_1988.graphics.f("#32577E").s().p("AgFAEIALgKQgCACABAIQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgCAAgFgDg");
	this.shape_1988.setTransform(234.4,104.5);

	this.shape_1989 = new cjs.Shape();
	this.shape_1989.graphics.f("#37608D").s().p("AAAAJQgEgBgEgGIAAgKIAMADQAHADgEAHQgCAEgDAAIgCAAg");
	this.shape_1989.setTransform(252.6,23.2);

	this.shape_1990 = new cjs.Shape();
	this.shape_1990.graphics.f("#345B87").s().p("AgDAHQgFAAgBgFQgBgDADgDQACgBAMgCIADAJIgHAEIgFACIgBgBg");
	this.shape_1990.setTransform(204.1,34.5);

	this.shape_1991 = new cjs.Shape();
	this.shape_1991.graphics.f("#345B87").s().p("AgHAAQABgNALgHQAGANgFAKQgDAGgLAMIABgVg");
	this.shape_1991.setTransform(220.2,24.6);

	this.shape_1992 = new cjs.Shape();
	this.shape_1992.graphics.f("#345B87").s().p("AgRgQIAVAAQgBADANANQAJAKgUAHQgWgKAAgXg");
	this.shape_1992.setTransform(222.3,68.7);

	this.shape_1993 = new cjs.Shape();
	this.shape_1993.graphics.f("#345B87").s().p("AgFARQgHgEgCgNQgBgZAeANIAAAVQgJAJgGAAIgFgBg");
	this.shape_1993.setTransform(212.3,88.4);

	this.shape_1994 = new cjs.Shape();
	this.shape_1994.graphics.f("#2F5173").s().p("AgFAQQgPgCgBgSIAqgMIABABIAAAfIgRABIgKgBg");
	this.shape_1994.setTransform(236.2,12.7);

	this.shape_1995 = new cjs.Shape();
	this.shape_1995.graphics.f("#345B84").s().p("AgIAAQgGgYAMgUQAMAcABAQQACAVgOAYQABgKgIgjg");
	this.shape_1995.setTransform(206.2,105.9);

	this.shape_1996 = new cjs.Shape();
	this.shape_1996.graphics.f("#345B87").s().p("AgWAAQgDgRAegDIASAnQgKACgHAAQgXAAgFgVg");
	this.shape_1996.setTransform(218.8,28.8);

	this.shape_1997 = new cjs.Shape();
	this.shape_1997.graphics.f("#345B87").s().p("AgbAKQgBgBgBgGQAAgGABgBQAMgLAQAFIAeAIQgPAPgWAAQgJAAgLgDg");
	this.shape_1997.setTransform(201.2,39);

	this.shape_1998 = new cjs.Shape();
	this.shape_1998.graphics.f("#345B84").s().p("AgHATQgFgBgLAEIAAgWQAUgFgIgKQgNgPABgDIAhAAQANAbABAJQABAUgZAKQAAgNgHgBg");
	this.shape_1998.setTransform(216.1,87.1);

	this.shape_1999 = new cjs.Shape();
	this.shape_1999.graphics.f("#345B87").s().p("AgYANQgLgGABgMQACgQAMAFIAOAGQAogRABAYQABANgPAEQgDACgVACIgFAAQgJAAgHgFg");
	this.shape_1999.setTransform(213,33.4);

	this.shape_2000 = new cjs.Shape();
	this.shape_2000.graphics.f("#2C4D6C").s().p("AgVAaQgOgSAMgQQARgRADgKQADADALARQAIAMAKADIgBAVQgEgBgTANQgFADgEAAQgJAAgIgKg");
	this.shape_2000.setTransform(175.1,27.9);

	this.shape_2001 = new cjs.Shape();
	this.shape_2001.graphics.f("#32577E").s().p("AAAAhQgTgFALgeQADgIgOgDIgZgDIAAgWQAVgGAZAUQAbAVAQgBIgLAsIgigHg");
	this.shape_2001.setTransform(239.4,105.5);

	this.shape_2002 = new cjs.Shape();
	this.shape_2002.graphics.f("#25415A").s().p("AgdAaQgLgEgCgIQgBgIAJgIQAVAGAUgPQAdgWAHgCQgJA3gNALQgFAFgKAAQgMAAgXgKg");
	this.shape_2002.setTransform(248.6,49.3);

	this.shape_2003 = new cjs.Shape();
	this.shape_2003.graphics.f("#2C4D6C").s().p("AgoAqQAOgVAAgLQAYgEAEgbQAFgiAKgIQADgCAGgHQAFgFAHABQAHACADAHIACANQADAWgoAzQgmA0gYAGQgEgPANgUg");
	this.shape_2003.setTransform(257.9,38);

	this.shape_2004 = new cjs.Shape();
	this.shape_2004.graphics.f("#2F5173").s().p("AgnA8QgNgFALggQADgHAAgMIABgSQAUgHgJgKQgMgPABgCQAOACAUgFIAggJQACAMABAYQACAVAIAPQANAcgTAHIgoAFQgUAJgKAAIgFgBgAgGAAIgEAJIAFADQAAAAABAAQABABAAAAQABAAAAAAQABAAAAAAIADgJQgEgEgDAAIgBAAg");
	this.shape_2004.setTransform(226.5,71.9);

	this.shape_2005 = new cjs.Shape();
	this.shape_2005.graphics.f("#345B87").s().p("AhTA4QAsgTACgPQABgOgkhDQAQgOAWgEQAWgDALAJQALAKAbgCQAdgCASAOQgtAAgTAhQgOApgJARQgVAkgKADIgDAAQgOAAgggXg");
	this.shape_2005.setTransform(202.7,17.8);

	this.shape_2006 = new cjs.Shape();
	this.shape_2006.graphics.f("#32577E").s().p("AAEBCQgngWgQgVQgDgRALgSQAFgKAPgUQgNgIgNADIgXAJQgCgXAOgHQAJgEAYABIAcAXQAKgFgEgbQgDgWAYgDIAAA2QgDALgRARQgLARAOARQAMAQAOgJQATgNAFABQARATgHAfQgKArABAGQgPgOgrgZg");
	this.shape_2006.setTransform(171.9,29.5);

	this.shape_2007 = new cjs.Shape();
	this.shape_2007.graphics.f("#345B84").s().p("AAIBXQgQgHgDgYQgCgVgPADQgRAJgHgCQgFgUAFgfQAHglgBgNIAJghQA5ADAKAJQAJAKgEA3QgBAMAIAIIAOAPQgHALgPAAQgQgNgHAFQgGAFAEASQACALAMAIIAVALIAAALQgbAAgJgDg");
	this.shape_2007.setTransform(207.1,120.6);

	this.shape_2008 = new cjs.Shape();
	this.shape_2008.graphics.f("#345B84").s().p("AA0BYQgGgHAEgqIggAMQgBgDAEgMQADgJgIgEQgHgCgCATQgQgCgEgPQAAgSgEgHQgEgJgKgMIgSgZQgHAwgwgEQgChHAMgLQALgLBFAEIA2AAQAAAXAXALIgBATQAAAMgDAHQgLAfANAFQAJAEAagMQASArgSAuQgmgBgGgHg");
	this.shape_2008.setTransform(216.4,76.4);

	this.shape_2009 = new cjs.Shape();
	this.shape_2009.graphics.f("#345B87").s().p("AgkBSQgvgNgWgsQATADAFgOIAHgVIApgnQAZgWAYgGQALAFAAgGQgBgIACgDIAYADQAOADgDAIQgLAfAUAFIAiAHIAAALQgEAVgUAZIggAqQgbARgcAAQgPAAgQgFg");
	this.shape_2009.setTransform(232.2,112.5);

	this.shape_2010 = new cjs.Shape();
	this.shape_2010.graphics.f("#37608D").s().p("Ag9DJQgHgGgEgTQAUgCASgOQALgJASgUIAOgbQAIgQgRgIQgUgIgIAPQgFAKgFAXIgiAAQgBgVgTgBQgbAAgDgCQAcgnAIgVQAOglgZgmQgKAtgTgGQgXgSgMgHIAAgWQAIgLgJgMQgLgPABgHQAQAAAGgLQAYgEAKgOQALgPgIgVQgJgMgCgGQgEgJANgKQAhgXAWAkQAWArAuAOQAvANAogZIAXALQANAGAJADQANAFADAGQAEAHgGALIgEAQQgEAJgIABQgPABgBgJQADgMgBgGQgBgNgIABQgEAAgKAIQgTAOAEAVQADAWAYAIQAhALAIAIQAQANgLAeIAOAFIAAALQgNAagXAGQgTAFgdgKQgqgPgLAaQgGAOAMAHQAHAEARAEQAVAJgGASQgJAcABACQgagLgeALIgxAXQgMAFgIAAQgGAAgDgDgAA1gLQgSADgIAFQgOAGgBAOQgBALALABIAUABQASgBAGgCQAMgFABgOQABgKgIgGQgGgEgHAAIgGABg");
	this.shape_2010.setTransform(227.7,133.2);

	this.shape_2011 = new cjs.Shape();
	this.shape_2011.graphics.f("#03060C").s().p("AnKIPQgJgHgBgQIAEgiQABgVgKgNQALgagFgNQgGgQgfAAIgQguIgBgRQAAgwgdgsIgZiFQAGhOgPg5IAAgWIAFgiIA/iyIAWgXQAHgPAngqQAfghACgfIAFgCIAGAAQAKAMAIgHIANgNIAUgDQALgCAFgJIAUgFQALgFACgMIAqgCIA/gPQAjgLATgXQAZAGAsgPQAugOAZAEQAjAGA2AEIBbAHQAGALAPABIAXACQAQAVAoAWQArAZAPAOQBYA7AUARQA4AvAaA5QAzBygMB1QgJBdABAaQAABEAXA0QAFAMABAUIACAhIgJAgIgRACQgegygJgCQgKgCgcAmQASgCAVAKIAfANQgMgCgVALQgWAKgNgKQgRgMgVACQgLAAgaAIIgKgJQgKgIAAgPIgCgZQgDgjgbgeQgHgIgvgpQgDgSgQgHIgegLIgjgGQAGgfAGgLQAFgKAZgjQAGgHgDgOQgHgjgKgOQgQgWghABQhkhaiFAFIgjgDIgkgGQgVgDgFAGQgVAXgvAPQg0ASgSAOIgRgJQgKgDgIAKQgTACgRAUIgJAIIgJAQIABASQAAALgBAGQgFAdAdAJQANAEAJgHQAKgGACgPQAXgKALATQARAcACABQAXAGAEAcQgQANgdAAQgmABgIACIgDgPQgdAOgQAGQgcAKgZgNQAdAUAEARQAFATgYAXQgKAJACALQADANAPALQANAJATADIAfAEIADAPQADAIAGgDQARgKAcgBIAugCQAVgDAqgJQAlgFAbAMQAcAegPAiIgfBFIgLADQgqgmgZgEQgagDgrAbIgUgJQgKgLgHAAQgJgBgIANQgKAOgRgDQgTgHgJgBQg2gKgLAJQgLAJAAA4IACAhQgIANAKAaQAKAZgIAOQgNgHgFgEgAmYATQgOARgCAQQgDAWAOAcQABgQANgdQAJgWgEgPQgBgBgGgBIgEAAIgDABgAFughQANAIAOgNQAGgFgBgIQgCgIgHgBQgRgJgJgDQgPgFgGAXIgEAGIAGgEQASARAEACgAm8j7QAAAHgGARQgCAOAPAEQAjALAJgeQADgJANgFQAQgGADgDIAQgNQAHgIgFgJQgHgKgKAEQgHADgGALQgHAMgKACQgIABgLgHIgZgBIgBAAQgNAAABAPgABrkaIgOApQAGAAA7gLQAlgHAYANQABABAIgMQAJgMADgIQADgHgEgGQgFgHgIABQgVABgmgNQgmgMgTgBQAEARgHAWgAgGlaQgUAMAAAQQABAIANALQANAMAHgCQAbgHgJgdQgLgfAIgMQgHAIgWAOgABflSIgDADQgCAJAHADIALACIgJgVIgEAEg");
	this.shape_2011.setTransform(144.8,82.4);

	this.shape_2012 = new cjs.Shape();
	this.shape_2012.graphics.f("#31567A").s().p("AgIAEQgCgGAHgCIAMgDIAAAKIgJAEIgDABQgDAAgCgEg");
	this.shape_2012.setTransform(291.1,273.4);

	this.shape_2013 = new cjs.Shape();
	this.shape_2013.graphics.f("#386190").s().p("AgWgKIAsAAQgCAUgSABIgCAAQgUAAgCgVg");
	this.shape_2013.setTransform(169.1,2.1);

	this.shape_2014 = new cjs.Shape();
	this.shape_2014.graphics.f("#32577E").s().p("AgRAVQgHgKAMgLQANgOgBgJIAVALIAAAhIgWACIgFABQgJAAgCgDg");
	this.shape_2014.setTransform(289.9,199);

	this.shape_2015 = new cjs.Shape();
	this.shape_2015.graphics.f("#284662").s().p("AguAGQAzgXApACIAAALQgHAAgmAPQgKAFgKAAQgOAAgNgKg");
	this.shape_2015.setTransform(287.4,238.5);

	this.shape_2016 = new cjs.Shape();
	this.shape_2016.graphics.f("#172734").s().p("AgWgBQAWgpABgNIAiAAIgdA6QgQAjgVASQgIgZARggg");
	this.shape_2016.setTransform(41.5,6.6);

	this.shape_2017 = new cjs.Shape();
	this.shape_2017.graphics.f("#2C4D6C").s().p("AAGAcQgagDgNACIgLg3IAsAAQgEAXASAHQAdAMACACQgOANgXAAIgCgBg");
	this.shape_2017.setTransform(123.2,3.9);

	this.shape_2018 = new cjs.Shape();
	this.shape_2018.graphics.f("#31567A").s().p("AgsgWIBYAAQANAAgBAJIgBANQgXAAggAIQglALgSAEg");
	this.shape_2018.setTransform(286.5,3.3);

	this.shape_2019 = new cjs.Shape();
	this.shape_2019.graphics.f("#284662").s().p("AgkAUIgCguIBNAAQgJAggQAMQgKAJgNAAQgMAAgPgHg");
	this.shape_2019.setTransform(152.9,3.7);

	this.shape_2020 = new cjs.Shape();
	this.shape_2020.graphics.f("#20374B").s().p("AgGAzQgKgUgHgJIACgsIAsgsIAACFIgBAAQgSAAgKgQg");
	this.shape_2020.setTransform(289.7,158.6);

	this.shape_2021 = new cjs.Shape();
	this.shape_2021.graphics.f("#31567A").s().p("AgYAYQgXglAJgOQAIgNAxgEIAXAAIAAAsIgtAtQgVgBAAgUg");
	this.shape_2021.setTransform(287.8,151.9);

	this.shape_2022 = new cjs.Shape();
	this.shape_2022.graphics.f("#172734").s().p("AAJAhQglgMgNgkQgBgDgJAAIgQgBIgLgZQAlgCAsAVIBMAkIAAAiQgwgFgWgHg");
	this.shape_2022.setTransform(284.1,174.2);

	this.shape_2023 = new cjs.Shape();
	this.shape_2023.graphics.f("#365E89").s().p("AALA9QgCgQgOgLIgcgRQAAgoAMgRQAPgYAnAEIAAB5g");
	this.shape_2023.setTransform(288.7,141.3);

	this.shape_2024 = new cjs.Shape();
	this.shape_2024.graphics.f("#20374B").s().p("AgPA5QgogUgCgaQgBgYAlgTQAHgEAPgDQAMgFABgOIAtAAQgCANgWApQgSAgAJAZIAAABIgWAEIgJABQgGAAgEgCg");
	this.shape_2024.setTransform(35.8,6.9);

	this.shape_2025 = new cjs.Shape();
	this.shape_2025.graphics.f("#284662").s().p("AA4AyIAAgLQgegkgIgEQgWgNgdAfIgsAUQAIgVACgXIABgqIBjAAIAfAuQAQAbgCAag");
	this.shape_2025.setTransform(58.4,6);

	this.shape_2026 = new cjs.Shape();
	this.shape_2026.graphics.f("#345B84").s().p("AhCAiQAEgOgPgUQgOgTADgOICnAAIALA3QgtgmghAnQgPgMgHgCQgMgGABAfg");
	this.shape_2026.setTransform(110.9,4.4);

	this.shape_2027 = new cjs.Shape();
	this.shape_2027.graphics.f("#37608D").s().p("AgrAkQAAgQgHgmQgIgjADgUIBDAAQgBAFgUAiQgQAXAZAVQAGAAAJgQQAJgPAOAHQAOAHAEAPQABAKgBAUQgfAAgDAkg");
	this.shape_2027.setTransform(86.3,8.4);

	this.shape_2028 = new cjs.Shape();
	this.shape_2028.graphics.f("#32577E").s().p("AASBZIgSgiQgtgdADg3QACgZgPgYIAAgXIAtAAQgEAOAOAUQAPAUgEANQgWANADARQADALAJACIATABIAhAAQgSAtASAsQgHADgHAAQgPAAgJgNg");
	this.shape_2028.setTransform(103.1,11.2);

	this.shape_2029 = new cjs.Shape();
	this.shape_2029.graphics.f("#284662").s().p("AAWBeQgIgCgFgLIgGgSQgXg3AZg1IgKABQgMgNgHgFQgMgJgOAEQApgiA7ALIAACbQgFACgGAQQgEALgJAAIgEAAg");
	this.shape_2029.setTransform(287,58.2);

	this.shape_2030 = new cjs.Shape();
	this.shape_2030.graphics.f("#32577E").s().p("AgsAxQgHgMgaAJQgDgXAQgSQAIgJAYgRQAggXALgeQAkgVgCArIgPAFIADAEIAMgJIAhAAIAAAtQgEABgcATQgUAOgVgTQgHgHgFAOQgFAOADAKQAGAWgLAKQgHAIgVADQADgZgFgIg");
	this.shape_2030.setTransform(284.2,16.3);

	this.shape_2031 = new cjs.Shape();
	this.shape_2031.graphics.f("#31567A").s().p("AAEApQgtgVgkACIgBAAQADgIACgDQAFgEAIACQASADANgFQAPgGABgQQACgOgPgDQgXgDgCgCIgOgGIAAgiIAVAAQAOAUAWABQANAAAbgKQAHAJAKAUQALARATgBIAABjIhLglg");
	this.shape_2031.setTransform(284.1,167.5);

	this.shape_2032 = new cjs.Shape();
	this.shape_2032.graphics.f("#3A6595").s().p("AAGBOQgcgDADgqQABgUgCgKQgDgPgPgHQgOgHgIAPQgJAQgHAAQgZgVAQgXQAVgiAAgFIBkAAIgBAKIgDAEIAEAIQAPAYgCAaQgDA3AuAcIgiAAIglACIgPgBgAAAgDIAHgCIgHgCg");
	this.shape_2032.setTransform(93.9,8.9);

	this.shape_2033 = new cjs.Shape();
	this.shape_2033.graphics.f("#345B84").s().p("Ah5AhQgIgJAUgdQgBgMgVANQgSAKAFgcIAMgWIEWAAIgLAtQgRASgXgJQgZgNgNgDQgigGghASQgkAbgTAMQgxgEgHgIg");
	this.shape_2033.setTransform(267.3,5.5);

	this.shape_2034 = new cjs.Shape();
	this.shape_2034.graphics.f("#172734").s().p("AAJBVIgLgZQgFgPACgNQAbgBgGgRQgKgYABgCQADgFAKgJQAHgJgNgHQgPgJgGgBQgNgCgKAMQgFAHgJABIgRAAQgFgKgRgBQgCgCgdgMQgTgIAFgXIEAAAIACAvIgQAyQgOAagcAHQgFABgFAGQgFAFAAADQAIAjgTABQgagHgLABgAA7g0QgmAeAlAmIAegbQAOgRgEgUQgCgJgOgBIgCAAQgMAAgJAGg");
	this.shape_2034.setTransform(136.1,10.1);

	this.shape_2035 = new cjs.Shape();
	this.shape_2035.graphics.f("#2C4D6C").s().p("AA9B0QgmgxgzAFQAAgNAIgPQAHgMAHgHQAggfgWgOQgFgEgggHQgVgDgMgLQgLgJgGgTQAQgBAEgKQADgHgBgQIAAgTIAPAAQAJABABACQANAmAlAMQAWAGAwAFIAAC9g");
	this.shape_2035.setTransform(283.6,185);

	this.shape_2036 = new cjs.Shape();
	this.shape_2036.graphics.f("#37608D").s().p("AifAZIALgZQAFgOgBgNQATgMAkgaQAigUAiAHQANACAYAPQAXAJARgTQATgEAkgLQAhgJAYABIAABOIgiAAQADgrgkAVQgsgCgHACQgaAFgRAcQgWAlhMgdQgXgIgEABQgKACALAcQAFALgDAWIgHAkQhAgIAbg+g");
	this.shape_2036.setTransform(275.2,12.7);

	this.shape_2037 = new cjs.Shape();
	this.shape_2037.graphics.f("#365E89").s().p("AgnBwIAAgBQANgBAEgGQAFgHgIgLQgjg1gcghIgUgTQgLgLAFgNQAEgMAMAJQAOAJAGgHQADgEAFgDIAKgFQAJAAAHAIIALAOQAVAWAIgfQAUgEAHgHQALgLgGgVQgDgLAFgNQAFgPAIAHQAVATAUgOQAcgUAEAAIAADeQglACgmAbQgVAQgUAAIAAAAQgWAAgRgWg");
	this.shape_2037.setTransform(280.4,29);

	this.shape_2038 = new cjs.Shape();
	this.shape_2038.graphics.f("#365E89").s().p("AiMDPQgOgBgHgLQAQgVADgPQADgUgSgSQgDgDAAgIIgBgPIAAAAQAPACAOgRQAPgSAMgBQAQABAGgDQALgFABgPIAIAAQAFAAgCgIIgMAIQgKgGgBgQIAMgLIAlgnQASgXABgbIAKAAIALgLIAAgLIBkhkIALgBQgaA2AYA3IAGATQAEAKAJACQAMADAFgNQAGgQAFgCIAAB6QgJgFgRANQgQALgJgLQgMgPABgVQABgOAKgcQgnAYgtA/QgxBIgbAWQhEALAXA5IgWAAIgOAAIgKAAg");
	this.shape_2038.setTransform(275.8,74.2);

	this.shape_2039 = new cjs.Shape();
	this.shape_2039.graphics.f("#2F5173").s().p("AAhB6QhJgWhCgnQgCgBgFADIgIAEIgXgWQAJgCAWgMQAUgKAOgBQATgCAKgPQAIgOgBgVQACgagQgcIgfgvIC9AAQgDAVAHAiQAIAnAAAQQgMAPAHANQAEAJAOAMQARAPACAQQABAPgLARIgMABIhOAsg");
	this.shape_2039.setTransform(70.6,14.4);

	this.shape_2040 = new cjs.Shape();
	this.shape_2040.graphics.f("#31567A").s().p("AguCoQgFABgHgKQgFgJgJAHIgLgBQgCg2g+gYIgBgXQAGgBAQACQANAAABgMQAAgKgQgBQgSgDgDgIQALgRgMgQQABgEAPgPQAKgMgCgMIAAgBQAVgSARgjIAcg7IBCAAIgBAqQgCAYgHAVIAsgUQAGAKASAAQATABAFAGQAQAPAGABQAGABANgLIAAALQAFALAGgLIALAAQACAVgJAPQgJAPgUACQgOABgTAKQgWALgJACQgFgIALgRQAKgQgOgKQgLgHgHAPQgHAQgKgFQgDgQgLgKQgHgIgRgGQgMAZAKASQAHAMAWAPQgOAKgFAHQgHAKAKAMQAJALAMgGQAFgDANgOQAGgGAPgTIAXAWIADAUQADAMgSACQgagFgGAQQgDAJABAYQgqAMgYAtIgEAAIgEAAgAgYBaIAGAAIgBgDIgDgBg");
	this.shape_2040.setTransform(51.1,17.8);

	this.shape_2041 = new cjs.Shape();
	this.shape_2041.graphics.f("#FFFFFF").s().p("AWjWyMgs4AABQgZAAgDgNIABgbMAAAggeIAAryIgDgYQgBgPAPgGMAACAsJQgEA8AJAKQAKAKA8AAMAsMAAAQACALgHABIgMgBg");
	this.shape_2041.setTransform(146,146.9);

	this.shape_2042 = new cjs.Shape();
	this.shape_2042.graphics.f("#345B87").s().p("AjpCTIABgOQAAgIACgFQAYgsgFgJQgFgJg0gJIACgFIAJgDQAUADAbgGIAugLQALgBAaAHQATgBgIgiQAAgDAFgFQAFgGAFgBQAcgHAOgaIAQgzQAgANATgPQAPgMAJghIBlAAQACAXAXgBQARgBADgVIAWAAQAHAdAKA5QANAxAdAeQAQARgJAgQgFASgQAkQgKgDgIgNQgLgQgEgEIgBg2QAIgPAAgFQACgKgMgHQgMgHgLAGQgJAGgDAKQgBAFgMAWQgJAQAEANQgZgBgIAEQgPAGADAYQgBABgLgLQgHgGgDARQgCAJAAAOIAAAYIhagHQg2gEgkgGQgYgEguAOQggALgWAAQgJAAgHgCg");
	this.shape_2042.setTransform(153.5,15.9);

	this.shape_2043 = new cjs.Shape();
	this.shape_2043.graphics.f("#365E89").s().p("Ah0ELQAFgNARhbQALg/AhghQAGgFACgGQADgJgHgDQgSgJgBgWQgCgdgBgDQgJgTATgRQARgQgGgGQgWgXAOgHIAZgDQAXgCAHgSIAEggQADgWABgfIABg0IAPALQAVASAbgNQAmgQAHAAIAAFZIgNADQgGACACAHQABAFAGgCIAKgEIAACzgAA8B0QgOADgEACQgIAFAAAMQAKAGAJgFQAFgDAJgJQADgDgDgEQgDgEgDAAIgBAAgAAKg6QAKATARgKQAKgGAGgHQAIgKgHgHQgWgWgtAZIADgBQALAAAJATg");
	this.shape_2043.setTransform(280.3,264.8);

	this.shape_2044 = new cjs.Shape();
	this.shape_2044.graphics.f("#172734").s().p("AhGDTQgzgKgTAGQgIADgLgSQgLgRgDgTIgJgLIAAghQAEAEAQAXQAMASAPAHQgCgkgEgPQgHgagjACIgBktIFkAAQAAAPgNAEQgQAEgGADQglAUAAAYQACAaApAVQAGADANgCIAXgEQACAMgLALQgOAQgCAEQgSACAAALQAAAEAJARIgXALQgZgUgfANQgZAMgHAPQgGAOATAeQATAggFAUIAbAGQgBAPgNAJQgHAEgSAHQgQAIgGAHQgJALADAPIgPAGIgNAIQgRALgaAAQgMAAgOgCg");
	this.shape_2044.setTransform(19.9,22.3);

	this.shape_2045 = new cjs.Shape();
	this.shape_2045.graphics.f("#386190").s().p("AgaGtQhdhIhKBFQgCACgFABIgJAAQgFgOgWgOQgXgPgGgMQAAgCAJgcQAFgSgVgJQgQgEgHgEQgNgHAGgOQALgaArAPQAdAKATgFQAWgGAOgaIBOAAIAAAXQgIAFgCALIgDASQgIAUADAOQAEAQATACQAWACANgIQASgKgCgZQAFgDA2gJQAlgHAPgaIg3AKQgYADgPgbQgCgEgBgHQgBgHACgDQAKgJAKAHQAQAMABAAQBEANAig0QATggAAgQQAAgYglgNQgHgDgDgIQgDgJAGgJQANgSAVALQAEACAJAMQAHAJAKgBQAOgpANgQQANgQAcgNQgPgRg1gHQgvgGgPgeQgBgBgIABQgHACgEADQgWAPgIgIQgHgHAHgVQAEgMgDgQIgFgaIATgBQALgDABgKIAShBQAJgngNgcQAbgWAyhIQAthAAngYQgKAcgBAOQgBAWAMAPQAJALAQgLQARgNAJAFIAAJEQgogDgPAXQgMASAAAoQgUAVgPAmIgYA/IgeADQAHgSABgJQADgsghgMQgSgHgJAOQgJATgGAGIgYAkQgNAWgWACIgZAGIgHAAQgKAAgJgGg");
	this.shape_2045.setTransform(261.6,113.4);

	this.shape_2046 = new cjs.Shape();
	this.shape_2046.graphics.f("#345B84").s().p("AAzD5IgwhPQAHABAQAAQAPABAIAIQAHAHAMACQANACgDgFQgFgKAPgNQAOgKgNgLQgMgLgJgDQgKgCgMAHIgtAeQgFgRgegWQgdgUgGgUQgNgpAVgpQATgoAsgZQATgLAEgJQAHgLgKgQQgMgRg2gEQg4gCgMARQgWAgghAFQgaAEgpgOQggghgFgJQgNgaAbgdQAJABASAHQAPAEAMgMQgIADgagUQgUgOgQAdQgCACgaAIQgRAGABAUQgLAAgGgEQgGgEADgNQAHgEAAgCQAAgEgJgCQgBgogYgYQgVgTgpgNQgHgDgIgIIgMgPQBFAYAug7QAAAOAEAGQAFAIAQAFQATAGA1ABQAtABAZAPIACAXQAEALATgKQAKgFAEgBQAIgCABAIQAGAhAWAHQAPAFAhgHQAKgCgBAdIgJABQgEABAAACQgBABABAAQAAABAAAAQAAABABAAQABABAAAAQACABAJgHQAFgCAIAAIACAMQADAFAIAAQABAAAAAAQAAAAABgBQAAAAABgBQAAgBAAgBQABgIgGgDIgLgCQAQgZAWABQAQABAbAPQAMAHARANIAcAWQAKAHAHACQAKADACgGQAGgPAggrQAZghgGgPQgSgzAQgDQAMgEApAHQAWABAFAJQAEAGABAPQAHAgAFAJQALAUAZAEQACAOgFANQgFAIgMANQgMAOgCAOQgBAQAOAKQAQAKARgJQAQgIADgRQAFgfAXgFQANgCAdADQADAJgPAOQgMAMAIAKQADADANAAIAXgDIAAFlQgqgCgzAZIgPgMQgEhcgXg2QgfhGhLghIgRAfQgKAWgRAJQgeAQAGASQAKAegPAnIgYBBIgQBAQgMAlgXAXQAKgugYgwgAEYhCQgFAFADAFQARAkApgFIgRgeQgMgQgRAAQgHAAgDAFgAB/hDQAFAGARAFQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBIAFgDQgDgKgIgJIgVgRQgIAVAJAJgAFvhpQgGACgCAFQgCAEADAGQAHAMALgCQAEAAAQgHQgCgWgSAAIgLACgACJh9IADADIAFgCIgEgDgAiQiWQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIABgCQgFgIgJgBIgQAAQALAPAQgCgAiuilIACABIgDgEQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAgADyj3QgKAFgMASQAUAAAKgDQAOgGAKgNQgKgEgIAAQgIAAgGADg");
	this.shape_2046.setTransform(246.6,214.2);

	this.shape_2047 = new cjs.Shape();
	this.shape_2047.graphics.f("#345B87").s().p("AhZHpQgagTgVAGQgnAGgEgJQgFgKAOhAQgKAOglAVQggATgJAXIgcAHQgQAEAGgfQABgHgFgBQgFgBgGAEQgSAMgDgHQgCgEAGgQQADgJgJgcQgHgWAQgNQAagLgBgUQgBgKgNgaQgGgJgFAJIgXAAQgCgagdAEQggAEgKgRQgIgNADgeQAwADAHgwIASAZQAKANAEAJQAEAHAAATQAEAOARACIALALIAggLQgEApAGAHQAGAHAmABQASgtgSgsIApgEQATgIgNgbQgIgQgCgWQgBgXgCgNQAfgXABgoQAAgHgJg8QgBgFgQgSQgOgRABgQQAAgPAIgJQAHgJAHABQAQACAugHQAngHAYAMQAVAKADAMQAEAMgMARQgJAJACAIQACAIALAFQAlAQANgLQANgLAIg4IABAAQAXgGAog0QAng0gCgWIgDgNQgDgHgHgCQgGgBgGAFQgFAHgEACQgJAIgGAiQgEAcgYAEQgIAAgVAQQgRAMgNgMQgPgPgDgTQgDgVAQgTQAKgLgOgTQgYggANgRQAJgNAjgHQAEAGAFACQAFACACgHQAEgIgHgDIgNgDQABgDAXgMQAQgIgPgSQgNgPgPADQgPADgIAQQgOAfgkAAIg7ABQgNAEgEgMQgEgKADgOQACgGAKgPQAJgNgBgLIABggIAEgFIgFAEIgsAMQgSACgWAPQgXATgMAIQgOAKgHAEQgMAGgOgGQgMgFgJAEQgKADgEAOQgIAcgHAGQgMAMgZgSQgHgEgHAFQgIAFAFAMQAJAYgVADQgaAFgCAHQgMgFgBgOQABgQgCgGQgNglAOgMQALgKAkAAQAhAAAIgMQASgfApgWIBGghQAqgZARgHQAjgRAfgBQAKgCAAACQAXAiAkgQIAbgOQARgIAMADQgFAcASgLQAVgMABALQgUAfAIAIQAHAJAxADQABANgFAOIgLAaQgbA+BAAIQACAIgCAQQABAOAOAEQAIACAFgFQAEgFAAgIQACgRgKgFQgHgEgRAAIAHgkQADgWgFgLQgLgdAKgCQAEgBAXAJQBMAdAXgmQARgcAagFQAHgCAsACQgMAeggAXQgYARgJAKQgPASACAXQgWAEACATIgKAGQgGADgDADQgGAIgNgKQgNgIgEALQgEAOALALIAUASQAbAiAkA2QAHALgEAHQgFAGgNABIgEgOIgEACIAIAMQASAXAXgBQATAAAWgQQAlgbAmgBIAABvQg9gKgoAiQgGAOgTAHQgbAHgEADIg8ADQghAGgTAZIgLAAQgGgMgIAFIADAHIABARQABAKAHABQAeAEARggIAXAAIgFAoQAEARAkgSQACgBAHAHIALALIAAALIgLALIgLAAQgqAagGAGQgVAXANAjIgYgBQgNABgIALQgLAGAAAQIgWAAQgVgQAQgTQATgXgDgJQAHgEgCgHQgEgHgBgEQgDgNAPgNQAPgOAAgLQgbgJgQAFQgTAHgKAZIgLgLQgQgtgiAgQgYAWgDgfIAAgWQgEgNAJgSQAMgUgBgJQgJgEgGAEQgDABgGAIIgIAJQgGADgIgEQgbgOgJAGQgIAFgEAiQABAWAVABQABAQAKAGQABAIgBARQABAQAJANQASgUAMABQAMACAHAdQADANAOAAQANgBALgLIAsAAQgEA2gzgVQgNgHgHgCQgMgDgIAKQgHALAFAMIAOAUQAEAHABATQgQAXgDAgQgBAOADAqIABAfQgDAHgZAIIABgRQgBgMgIgHQgDANABAHQACAKAIAGQAEAMgUAUQgSASAMARIAAALIgCAAQgPAAgagUgAh+HCQgCABgKAJIAMAFIAJgLIgJgEIAAAAgAhNG8QAAALAEADQAGADAEgDQAEgDAAgGIgCgGIgDgFIgFgCQgGAAgCAIgAgvFrQgDAEACADQACADAFAAIAHgCIAGgEQgEgKgBAAQgMADgCADgAjTFqIACAFIAEgBIgCgFgAitDyQgOAAgBANQgCAMAMAFQAEACALACQAJADACALIgUAOQgOAHgGAFQgKAHAIALQAGAKAMgDQAKgCAJgKQAVgVAfgTQAOgHACgQQACgQgRgBQgrgHgXAAIgDAAgAgeD3IgBACIAFAHIAHgIIgJgDIgCACgAhuChQgDAJgCATQgFANABAGQABAIAOABQATACAFgQQABgVAEgIQAGgKgEgJQgEgKgKAAIgBAAQgSAAgEAQgADBlmQAAAAABgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_2047.setTransform(248.6,54);

	this.shape_2048 = new cjs.Shape();
	this.shape_2048.graphics.f("#386190").s().p("AgdJSQgJgJABgMQAEg3gJgKQgKgJg5gDIgCghQgCgUgFgMQgXgzAAhEQAAgbAIheQAMh1gzhxQgZg4g5gwQgUgQhYg7QgBgHALgrQAHgegSgUIABgWQAPgkAFgSQAKgggRgRQgcgfgNgwQgLg5gGgdIMjAAIgLAWQgMgDgRAIIgcAOQgkAQgXgiQAAgCgKACQgfABgjARQgRAHgrAZIhGAhQgpAWgRAfQgHAMgiAAQgkAAgKAKQgOAMANAlQACAGgBAQQAAAOANAFQACgHAZgFQAVgDgIgYQgFgMAIgFQAHgFAHAEQAYASAMgMQAHgGAHgcQAFgOAJgDQAKgEALAFQAOAGAMgGQAIgEAOgKQAMgIAXgTQAWgPASgCQACATAPACQAIACATgCQABALgJANQgLAPgBAGQgEAOAFAKQAEAMANgEIA6gBQAlAAAPgfQAHgQAPgDQAQgDAMAPQAQASgQAIQgXAMgBADIAAALQgkAHgJANQgNARAYAgQAPATgKALQgRATADAVQADATAQAPQAMAMARgMQAWgQAIAAQAAALgPAVQgMAUADAPIAAAAQgGACgdAWQgWAQgVgIQAMgRgEgMQgEgMgUgKQgYgMgnAHQguAHgQgCQgHgBgHAJQgIAJgBAPQAAAQAOARQAPASABAFQAKA9AAAHQgBAngfAXIgiAKQgTAEgPgCIhNAAQhEgEgLALQgMAMACBHQgDAeAHANQALARAggEQAdgEACAaQgBACAMAPQAIAKgTAGQgfgNABAaQACANAHAEQAKAFALgMQAKgFAFABQAHACAAANQgQANAHAWQAIAcgCAJQgGAQACAEQACAHATgMQAFgEAGABQAEABgBAHQgFAfAQgEIAbgHQAKgXAggTQAlgVAJgOQgNBAAEAKQAFAJAngGIAAAWIAAAAIgLALQgZAHgaAVIgoAoIgHAVQgFAOgUgCQgVgkghAXQgNAKAEAJQACAGAIAMQAIAVgKAPQgKAOgXAEIgNgPgAhaG4QAJAigBAKQAOgYgBgWQgBgQgNgbQgMATAFAagAigjqQgBACAAAGQABAHABAAQAlAJAVgWIgdgIIgLgBQgLAAgIAHgAgvkiQgBANALAGQAJAGAMgBQAUgCAEgCQAPgEgBgOQgBgZgoASIgPgHIgEgBQgHAAgCANgAhtkWQgEADACAEQAAAEAFABQADAAAEgCIAIgDIgEgKQgNABgBACgAAylfQgfADADARQAGAdAogJIgSgoQALgMADgGQAGgLgHgNQgMAHAAANIgBAWIAAAAgAiXoGQgWAEgQAOQAlBEgCAOQgBAPgtATQAkAaANgDQALgDAUgkQAKgRAOgqQATghAuAAQgTgOgdACQgbACgMgKQgIgHgOAAIgLABgAEPlxIABAEIAFgCIgBgEgAkDmCIAEAEIACgDIgDgEg");
	this.shape_2048.setTransform(214.4,61.9);

	var maskedShapeInstanceList = [this.shape_1501,this.shape_1502,this.shape_1503,this.shape_1504,this.shape_1505,this.shape_1506,this.shape_1507,this.shape_1508,this.shape_1509,this.shape_1510,this.shape_1511,this.shape_1512,this.shape_1513,this.shape_1514,this.shape_1515,this.shape_1516,this.shape_1517,this.shape_1518,this.shape_1519,this.shape_1520,this.shape_1521,this.shape_1522,this.shape_1523,this.shape_1524,this.shape_1525,this.shape_1526,this.shape_1527,this.shape_1528,this.shape_1529,this.shape_1530,this.shape_1531,this.shape_1532,this.shape_1533,this.shape_1534,this.shape_1535,this.shape_1536,this.shape_1537,this.shape_1538,this.shape_1539,this.shape_1540,this.shape_1541,this.shape_1542,this.shape_1543,this.shape_1544,this.shape_1545,this.shape_1546,this.shape_1547,this.shape_1548,this.shape_1549,this.shape_1550,this.shape_1551,this.shape_1552,this.shape_1553,this.shape_1554,this.shape_1555,this.shape_1556,this.shape_1557,this.shape_1558,this.shape_1559,this.shape_1560,this.shape_1561,this.shape_1562,this.shape_1563,this.shape_1564,this.shape_1565,this.shape_1566,this.shape_1567,this.shape_1568,this.shape_1569,this.shape_1570,this.shape_1571,this.shape_1572,this.shape_1573,this.shape_1574,this.shape_1575,this.shape_1576,this.shape_1577,this.shape_1578,this.shape_1579,this.shape_1580,this.shape_1581,this.shape_1582,this.shape_1583,this.shape_1584,this.shape_1585,this.shape_1586,this.shape_1587,this.shape_1588,this.shape_1589,this.shape_1590,this.shape_1591,this.shape_1592,this.shape_1593,this.shape_1594,this.shape_1595,this.shape_1596,this.shape_1597,this.shape_1598,this.shape_1599,this.shape_1600,this.shape_1601,this.shape_1602,this.shape_1603,this.shape_1604,this.shape_1605,this.shape_1606,this.shape_1607,this.shape_1608,this.shape_1609,this.shape_1610,this.shape_1611,this.shape_1612,this.shape_1613,this.shape_1614,this.shape_1615,this.shape_1616,this.shape_1617,this.shape_1618,this.shape_1619,this.shape_1620,this.shape_1621,this.shape_1622,this.shape_1623,this.shape_1624,this.shape_1625,this.shape_1626,this.shape_1627,this.shape_1628,this.shape_1629,this.shape_1630,this.shape_1631,this.shape_1632,this.shape_1633,this.shape_1634,this.shape_1635,this.shape_1636,this.shape_1637,this.shape_1638,this.shape_1639,this.shape_1640,this.shape_1641,this.shape_1642,this.shape_1643,this.shape_1644,this.shape_1645,this.shape_1646,this.shape_1647,this.shape_1648,this.shape_1649,this.shape_1650,this.shape_1651,this.shape_1652,this.shape_1653,this.shape_1654,this.shape_1655,this.shape_1656,this.shape_1657,this.shape_1658,this.shape_1659,this.shape_1660,this.shape_1661,this.shape_1662,this.shape_1663,this.shape_1664,this.shape_1665,this.shape_1666,this.shape_1667,this.shape_1668,this.shape_1669,this.shape_1670,this.shape_1671,this.shape_1672,this.shape_1673,this.shape_1674,this.shape_1675,this.shape_1676,this.shape_1677,this.shape_1678,this.shape_1679,this.shape_1680,this.shape_1681,this.shape_1682,this.shape_1683,this.shape_1684,this.shape_1685,this.shape_1686,this.shape_1687,this.shape_1688,this.shape_1689,this.shape_1690,this.shape_1691,this.shape_1692,this.shape_1693,this.shape_1694,this.shape_1695,this.shape_1696,this.shape_1697,this.shape_1698,this.shape_1699,this.shape_1700,this.shape_1701,this.shape_1702,this.shape_1703,this.shape_1704,this.shape_1705,this.shape_1706,this.shape_1707,this.shape_1708,this.shape_1709,this.shape_1710,this.shape_1711,this.shape_1712,this.shape_1713,this.shape_1714,this.shape_1715,this.shape_1716,this.shape_1717,this.shape_1718,this.shape_1719,this.shape_1720,this.shape_1721,this.shape_1722,this.shape_1723,this.shape_1724,this.shape_1725,this.shape_1726,this.shape_1727,this.shape_1728,this.shape_1729,this.shape_1730,this.shape_1731,this.shape_1732,this.shape_1733,this.shape_1734,this.shape_1735,this.shape_1736,this.shape_1737,this.shape_1738,this.shape_1739,this.shape_1740,this.shape_1741,this.shape_1742,this.shape_1743,this.shape_1744,this.shape_1745,this.shape_1746,this.shape_1747,this.shape_1748,this.shape_1749,this.shape_1750,this.shape_1751,this.shape_1752,this.shape_1753,this.shape_1754,this.shape_1755,this.shape_1756,this.shape_1757,this.shape_1758,this.shape_1759,this.shape_1760,this.shape_1761,this.shape_1762,this.shape_1763,this.shape_1764,this.shape_1765,this.shape_1766,this.shape_1767,this.shape_1768,this.shape_1769,this.shape_1770,this.shape_1771,this.shape_1772,this.shape_1773,this.shape_1774,this.shape_1775,this.shape_1776,this.shape_1777,this.shape_1778,this.shape_1779,this.shape_1780,this.shape_1781,this.shape_1782,this.shape_1783,this.shape_1784,this.shape_1785,this.shape_1786,this.shape_1787,this.shape_1788,this.shape_1789,this.shape_1790,this.shape_1791,this.shape_1792,this.shape_1793,this.shape_1794,this.shape_1795,this.shape_1796,this.shape_1797,this.shape_1798,this.shape_1799,this.shape_1800,this.shape_1801,this.shape_1802,this.shape_1803,this.shape_1804,this.shape_1805,this.shape_1806,this.shape_1807,this.shape_1808,this.shape_1809,this.shape_1810,this.shape_1811,this.shape_1812,this.shape_1813,this.shape_1814,this.shape_1815,this.shape_1816,this.shape_1817,this.shape_1818,this.shape_1819,this.shape_1820,this.shape_1821,this.shape_1822,this.shape_1823,this.shape_1824,this.shape_1825,this.shape_1826,this.shape_1827,this.shape_1828,this.shape_1829,this.shape_1830,this.shape_1831,this.shape_1832,this.shape_1833,this.shape_1834,this.shape_1835,this.shape_1836,this.shape_1837,this.shape_1838,this.shape_1839,this.shape_1840,this.shape_1841,this.shape_1842,this.shape_1843,this.shape_1844,this.shape_1845,this.shape_1846,this.shape_1847,this.shape_1848,this.shape_1849,this.shape_1850,this.shape_1851,this.shape_1852,this.shape_1853,this.shape_1854,this.shape_1855,this.shape_1856,this.shape_1857,this.shape_1858,this.shape_1859,this.shape_1860,this.shape_1861,this.shape_1862,this.shape_1863,this.shape_1864,this.shape_1865,this.shape_1866,this.shape_1867,this.shape_1868,this.shape_1869,this.shape_1870,this.shape_1871,this.shape_1872,this.shape_1873,this.shape_1874,this.shape_1875,this.shape_1876,this.shape_1877,this.shape_1878,this.shape_1879,this.shape_1880,this.shape_1881,this.shape_1882,this.shape_1883,this.shape_1884,this.shape_1885,this.shape_1886,this.shape_1887,this.shape_1888,this.shape_1889,this.shape_1890,this.shape_1891,this.shape_1892,this.shape_1893,this.shape_1894,this.shape_1895,this.shape_1896,this.shape_1897,this.shape_1898,this.shape_1899,this.shape_1900,this.shape_1901,this.shape_1902,this.shape_1903,this.shape_1904,this.shape_1905,this.shape_1906,this.shape_1907,this.shape_1908,this.shape_1909,this.shape_1910,this.shape_1911,this.shape_1912,this.shape_1913,this.shape_1914,this.shape_1915,this.shape_1916,this.shape_1917,this.shape_1918,this.shape_1919,this.shape_1920,this.shape_1921,this.shape_1922,this.shape_1923,this.shape_1924,this.shape_1925,this.shape_1926,this.shape_1927,this.shape_1928,this.shape_1929,this.shape_1930,this.shape_1931,this.shape_1932,this.shape_1933,this.shape_1934,this.shape_1935,this.shape_1936,this.shape_1937,this.shape_1938,this.shape_1939,this.shape_1940,this.shape_1941,this.shape_1942,this.shape_1943,this.shape_1944,this.shape_1945,this.shape_1946,this.shape_1947,this.shape_1948,this.shape_1949,this.shape_1950,this.shape_1951,this.shape_1952,this.shape_1953,this.shape_1954,this.shape_1955,this.shape_1956,this.shape_1957,this.shape_1958,this.shape_1959,this.shape_1960,this.shape_1961,this.shape_1962,this.shape_1963,this.shape_1964,this.shape_1965,this.shape_1966,this.shape_1967,this.shape_1968,this.shape_1969,this.shape_1970,this.shape_1971,this.shape_1972,this.shape_1973,this.shape_1974,this.shape_1975,this.shape_1976,this.shape_1977,this.shape_1978,this.shape_1979,this.shape_1980,this.shape_1981,this.shape_1982,this.shape_1983,this.shape_1984,this.shape_1985,this.shape_1986,this.shape_1987,this.shape_1988,this.shape_1989,this.shape_1990,this.shape_1991,this.shape_1992,this.shape_1993,this.shape_1994,this.shape_1995,this.shape_1996,this.shape_1997,this.shape_1998,this.shape_1999,this.shape_2000,this.shape_2001,this.shape_2002,this.shape_2003,this.shape_2004,this.shape_2005,this.shape_2006,this.shape_2007,this.shape_2008,this.shape_2009,this.shape_2010,this.shape_2011,this.shape_2012,this.shape_2013,this.shape_2014,this.shape_2015,this.shape_2016,this.shape_2017,this.shape_2018,this.shape_2019,this.shape_2020,this.shape_2021,this.shape_2022,this.shape_2023,this.shape_2024,this.shape_2025,this.shape_2026,this.shape_2027,this.shape_2028,this.shape_2029,this.shape_2030,this.shape_2031,this.shape_2032,this.shape_2033,this.shape_2034,this.shape_2035,this.shape_2036,this.shape_2037,this.shape_2038,this.shape_2039,this.shape_2040,this.shape_2041,this.shape_2042,this.shape_2043,this.shape_2044,this.shape_2045,this.shape_2046,this.shape_2047,this.shape_2048];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2048},{t:this.shape_2047},{t:this.shape_2046},{t:this.shape_2045},{t:this.shape_2044},{t:this.shape_2043},{t:this.shape_2042},{t:this.shape_2041},{t:this.shape_2040},{t:this.shape_2039},{t:this.shape_2038},{t:this.shape_2037},{t:this.shape_2036},{t:this.shape_2035},{t:this.shape_2034},{t:this.shape_2033},{t:this.shape_2032},{t:this.shape_2031},{t:this.shape_2030},{t:this.shape_2029},{t:this.shape_2028},{t:this.shape_2027},{t:this.shape_2026},{t:this.shape_2025},{t:this.shape_2024},{t:this.shape_2023},{t:this.shape_2022},{t:this.shape_2021},{t:this.shape_2020},{t:this.shape_2019},{t:this.shape_2018},{t:this.shape_2017},{t:this.shape_2016},{t:this.shape_2015},{t:this.shape_2014},{t:this.shape_2013},{t:this.shape_2012},{t:this.shape_2011},{t:this.shape_2010},{t:this.shape_2009},{t:this.shape_2008},{t:this.shape_2007},{t:this.shape_2006},{t:this.shape_2005},{t:this.shape_2004},{t:this.shape_2003},{t:this.shape_2002},{t:this.shape_2001},{t:this.shape_2000},{t:this.shape_1999},{t:this.shape_1998},{t:this.shape_1997},{t:this.shape_1996},{t:this.shape_1995},{t:this.shape_1994},{t:this.shape_1993},{t:this.shape_1992},{t:this.shape_1991},{t:this.shape_1990},{t:this.shape_1989},{t:this.shape_1988},{t:this.shape_1987},{t:this.shape_1986},{t:this.shape_1985},{t:this.shape_1984},{t:this.shape_1983},{t:this.shape_1982},{t:this.shape_1981},{t:this.shape_1980},{t:this.shape_1979},{t:this.shape_1978},{t:this.shape_1977},{t:this.shape_1976},{t:this.shape_1975},{t:this.shape_1974},{t:this.shape_1973},{t:this.shape_1972},{t:this.shape_1971},{t:this.shape_1970},{t:this.shape_1969},{t:this.shape_1968},{t:this.shape_1967},{t:this.shape_1966},{t:this.shape_1965},{t:this.shape_1964},{t:this.shape_1963},{t:this.shape_1962},{t:this.shape_1961},{t:this.shape_1960},{t:this.shape_1959},{t:this.shape_1958},{t:this.shape_1957},{t:this.shape_1956},{t:this.shape_1955},{t:this.shape_1954},{t:this.shape_1953},{t:this.shape_1952},{t:this.shape_1951},{t:this.shape_1950},{t:this.shape_1949},{t:this.shape_1948},{t:this.shape_1947},{t:this.shape_1946},{t:this.shape_1945},{t:this.shape_1944},{t:this.shape_1943},{t:this.shape_1942},{t:this.shape_1941},{t:this.shape_1940},{t:this.shape_1939},{t:this.shape_1938},{t:this.shape_1937},{t:this.shape_1936},{t:this.shape_1935},{t:this.shape_1934},{t:this.shape_1933},{t:this.shape_1932},{t:this.shape_1931},{t:this.shape_1930},{t:this.shape_1929},{t:this.shape_1928},{t:this.shape_1927},{t:this.shape_1926},{t:this.shape_1925},{t:this.shape_1924},{t:this.shape_1923},{t:this.shape_1922},{t:this.shape_1921},{t:this.shape_1920},{t:this.shape_1919},{t:this.shape_1918},{t:this.shape_1917},{t:this.shape_1916},{t:this.shape_1915},{t:this.shape_1914},{t:this.shape_1913},{t:this.shape_1912},{t:this.shape_1911},{t:this.shape_1910},{t:this.shape_1909},{t:this.shape_1908},{t:this.shape_1907},{t:this.shape_1906},{t:this.shape_1905},{t:this.shape_1904},{t:this.shape_1903},{t:this.shape_1902},{t:this.shape_1901},{t:this.shape_1900},{t:this.shape_1899},{t:this.shape_1898},{t:this.shape_1897},{t:this.shape_1896},{t:this.shape_1895},{t:this.shape_1894},{t:this.shape_1893},{t:this.shape_1892},{t:this.shape_1891},{t:this.shape_1890},{t:this.shape_1889},{t:this.shape_1888},{t:this.shape_1887},{t:this.shape_1886},{t:this.shape_1885},{t:this.shape_1884},{t:this.shape_1883},{t:this.shape_1882},{t:this.shape_1881},{t:this.shape_1880},{t:this.shape_1879},{t:this.shape_1878},{t:this.shape_1877},{t:this.shape_1876},{t:this.shape_1875},{t:this.shape_1874},{t:this.shape_1873},{t:this.shape_1872},{t:this.shape_1871},{t:this.shape_1870},{t:this.shape_1869},{t:this.shape_1868},{t:this.shape_1867},{t:this.shape_1866},{t:this.shape_1865},{t:this.shape_1864},{t:this.shape_1863},{t:this.shape_1862},{t:this.shape_1861},{t:this.shape_1860},{t:this.shape_1859},{t:this.shape_1858},{t:this.shape_1857},{t:this.shape_1856},{t:this.shape_1855},{t:this.shape_1854},{t:this.shape_1853},{t:this.shape_1852},{t:this.shape_1851},{t:this.shape_1850},{t:this.shape_1849},{t:this.shape_1848},{t:this.shape_1847},{t:this.shape_1846},{t:this.shape_1845},{t:this.shape_1844},{t:this.shape_1843},{t:this.shape_1842},{t:this.shape_1841},{t:this.shape_1840},{t:this.shape_1839},{t:this.shape_1838},{t:this.shape_1837},{t:this.shape_1836},{t:this.shape_1835},{t:this.shape_1834},{t:this.shape_1833},{t:this.shape_1832},{t:this.shape_1831},{t:this.shape_1830},{t:this.shape_1829},{t:this.shape_1828},{t:this.shape_1827},{t:this.shape_1826},{t:this.shape_1825},{t:this.shape_1824},{t:this.shape_1823},{t:this.shape_1822},{t:this.shape_1821},{t:this.shape_1820},{t:this.shape_1819},{t:this.shape_1818},{t:this.shape_1817},{t:this.shape_1816},{t:this.shape_1815},{t:this.shape_1814},{t:this.shape_1813},{t:this.shape_1812},{t:this.shape_1811},{t:this.shape_1810},{t:this.shape_1809},{t:this.shape_1808},{t:this.shape_1807},{t:this.shape_1806},{t:this.shape_1805},{t:this.shape_1804},{t:this.shape_1803},{t:this.shape_1802},{t:this.shape_1801},{t:this.shape_1800},{t:this.shape_1799},{t:this.shape_1798},{t:this.shape_1797},{t:this.shape_1796},{t:this.shape_1795},{t:this.shape_1794},{t:this.shape_1793},{t:this.shape_1792},{t:this.shape_1791},{t:this.shape_1790},{t:this.shape_1789},{t:this.shape_1788},{t:this.shape_1787},{t:this.shape_1786},{t:this.shape_1785},{t:this.shape_1784},{t:this.shape_1783},{t:this.shape_1782},{t:this.shape_1781},{t:this.shape_1780},{t:this.shape_1779},{t:this.shape_1778},{t:this.shape_1777},{t:this.shape_1776},{t:this.shape_1775},{t:this.shape_1774},{t:this.shape_1773},{t:this.shape_1772},{t:this.shape_1771},{t:this.shape_1770},{t:this.shape_1769},{t:this.shape_1768},{t:this.shape_1767},{t:this.shape_1766},{t:this.shape_1765},{t:this.shape_1764},{t:this.shape_1763},{t:this.shape_1762},{t:this.shape_1761},{t:this.shape_1760},{t:this.shape_1759},{t:this.shape_1758},{t:this.shape_1757},{t:this.shape_1756},{t:this.shape_1755},{t:this.shape_1754},{t:this.shape_1753},{t:this.shape_1752},{t:this.shape_1751},{t:this.shape_1750},{t:this.shape_1749},{t:this.shape_1748},{t:this.shape_1747},{t:this.shape_1746},{t:this.shape_1745},{t:this.shape_1744},{t:this.shape_1743},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1740},{t:this.shape_1739},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733},{t:this.shape_1732},{t:this.shape_1731},{t:this.shape_1730},{t:this.shape_1729},{t:this.shape_1728},{t:this.shape_1727},{t:this.shape_1726},{t:this.shape_1725},{t:this.shape_1724},{t:this.shape_1723},{t:this.shape_1722},{t:this.shape_1721},{t:this.shape_1720},{t:this.shape_1719},{t:this.shape_1718},{t:this.shape_1717},{t:this.shape_1716},{t:this.shape_1715},{t:this.shape_1714},{t:this.shape_1713},{t:this.shape_1712},{t:this.shape_1711},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1708},{t:this.shape_1707},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.shape_1702},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1698},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1675},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1670},{t:this.shape_1669},{t:this.shape_1668},{t:this.shape_1667},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664},{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657},{t:this.shape_1656},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(8.9,8.8,273,273), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("A1UVVMAAAgqpMAqpAAAMAAAAqpg");
	mask_3.setTransform(144.5,144.7);

	// Capa 3
	this.shape_2049 = new cjs.Shape();
	this.shape_2049.graphics.f("#220819").s().p("AgXggQAJgMAjANQAEADAFgBQAHAdgcALQgiAPgFANQgBg8AIgLg");
	this.shape_2049.setTransform(165.4,101.3);

	this.shape_2050 = new cjs.Shape();
	this.shape_2050.graphics.f("#912071").s().p("AgHAEIgDgMIAVAAIgDAKQgDAGgDABIgCAAQgFAAgCgFg");
	this.shape_2050.setTransform(245.7,151.5);

	this.shape_2051 = new cjs.Shape();
	this.shape_2051.graphics.f("#912071").s().p("AgKgLQAKgKATAEQACAAADAFQADAGgBACQgGAOgPAFIgfAFQAGgWAKgJg");
	this.shape_2051.setTransform(247.4,143.6);

	this.shape_2052 = new cjs.Shape();
	this.shape_2052.graphics.f("#932276").s().p("AgLASIABgiQAWAJAAAZg");
	this.shape_2052.setTransform(265.5,133.8);

	this.shape_2053 = new cjs.Shape();
	this.shape_2053.graphics.f("#932276").s().p("AgIAUQgJgIAFgMQAHgRgCgFQAgAFgOAgQgDAGgGABIgDABQgEAAgDgDg");
	this.shape_2053.setTransform(267.4,137.8);

	this.shape_2054 = new cjs.Shape();
	this.shape_2054.graphics.f("#932276").s().p("AgdgBQgBgHAGgEQAGgEAJABQAHAAAOgBQAMABAGALQgCASgVADIgJAAQgWAAgFgSg");
	this.shape_2054.setTransform(267.9,144.2);

	this.shape_2055 = new cjs.Shape();
	this.shape_2055.graphics.f("#932276").s().p("AAOAfQgVgZgpALQgEgUAOggQAPgigBgRQAWgBAMAYQAQAeAHAFQANAgADAYQAEAggIAcQgZgygGgHg");
	this.shape_2055.setTransform(257.5,143.1);

	this.shape_2056 = new cjs.Shape();
	this.shape_2056.graphics.f("#912071").s().p("AgBADIgBgEIADgBIACAEIgDABIgBAAg");
	this.shape_2056.setTransform(219.4,99.4);

	this.shape_2057 = new cjs.Shape();
	this.shape_2057.graphics.f("#8F1E6E").s().p("AAAAGIgGgDIAFgJIAIAEIgCAFQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIAAAAIgCgBg");
	this.shape_2057.setTransform(256.1,113.3);

	this.shape_2058 = new cjs.Shape();
	this.shape_2058.graphics.f("#912071").s().p("AgKAAIAFgFQADgDACgBQACAAAJAGIgLANg");
	this.shape_2058.setTransform(225.1,100.5);

	this.shape_2059 = new cjs.Shape();
	this.shape_2059.graphics.f("#942278").s().p("AgWAXQAOgZgDgUIASAAQALACAGAJQgCAUgNAJQgJAFgPAAIgHAAg");
	this.shape_2059.setTransform(235.2,116.8);

	this.shape_2060 = new cjs.Shape();
	this.shape_2060.graphics.f("#942278").s().p("AgRAXQgMgXARgIIAcgOQAPASgPAJQgVAPgBADg");
	this.shape_2060.setTransform(234.7,112.2);

	this.shape_2061 = new cjs.Shape();
	this.shape_2061.graphics.f("#942278").s().p("AgMATQgIgTgGgJIAMgXQAIADAUgDQAQACgEAZQgBAHABAQQgBAMgMACIgFABQgNAAgHgOg");
	this.shape_2061.setTransform(223.8,118.9);

	this.shape_2062 = new cjs.Shape();
	this.shape_2062.graphics.f("#8F1E6E").s().p("AgUAfQgRgRAOgOIALgIIAMgIQABgDALgUIAOAEQgFAKAIAbQAGAYgSAKQgIAEgIAAQgKAAgLgJg");
	this.shape_2062.setTransform(248.8,110.7);

	this.shape_2063 = new cjs.Shape();
	this.shape_2063.graphics.f("#8F1E6E").s().p("AgcA0IgTAAQABgEAVgOQAQgKgPgTQAIhEA+ABQAFAHgUAUQgPAPAgAJQgQAkgEAIQgPAXgZAHQgGgJgKgCg");
	this.shape_2063.setTransform(238.8,109.3);

	this.shape_2064 = new cjs.Shape();
	this.shape_2064.graphics.f("#912071").s().p("AAhBPQgMgYgWABQADgcgWABQgcACgEgKQABgMAOgHQAVgHAEgEQASgVgNgPQgKgLgFAIQgDAMgEACQgIAHgGgFQgEgFABgIQAFgTgIgEQgEgBgUACQgVADADgLQAJgPgBgFQAQACATgEIAhgLQAPgGAIABQALABAJAPIALAVQACAKgPALQgOAJAFANQADAHANANQAMAcAHAIQAOAQAagHIAAAjQgTADgHAOQgFAIgEAWQgIgFgQgeg");
	this.shape_2064.setTransform(255.2,128.8);

	this.shape_2065 = new cjs.Shape();
	this.shape_2065.graphics.f("#932276").s().p("AgBgDIAIAAIgMAHQgCgHAGAAg");
	this.shape_2065.setTransform(208.8,86.9);

	this.shape_2066 = new cjs.Shape();
	this.shape_2066.graphics.f("#8F1E6E").s().p("AAMgFQgHALgQAAQAGgKARgBg");
	this.shape_2066.setTransform(237.5,68.4);

	this.shape_2067 = new cjs.Shape();
	this.shape_2067.graphics.f("#8F1E6E").s().p("AgBAGIgFgDIACgEQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAABAAQABgBAHAEIgCAFQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBABIAAAAIgDgBg");
	this.shape_2067.setTransform(222.4,65.4);

	this.shape_2068 = new cjs.Shape();
	this.shape_2068.graphics.f("#8C1D69").s().p("AgBAGIgFgDIACgEQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAABAAQABgBAHAEIgCAFQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBABIAAAAIgDgBg");
	this.shape_2068.setTransform(196.7,94.6);

	this.shape_2069 = new cjs.Shape();
	this.shape_2069.graphics.f("#8C1D69").s().p("AgRALQAKgWAZAAQgBAPgLAFQgGADgMAAIgFgBg");
	this.shape_2069.setTransform(235.8,63.2);

	this.shape_2070 = new cjs.Shape();
	this.shape_2070.graphics.f("#8F1E6E").s().p("AgaAUIAYgtIAUABQAMADgFALQgHAVgIAIQgIAHgIAAQgJAAgLgGg");
	this.shape_2070.setTransform(216.8,83.3);

	this.shape_2071 = new cjs.Shape();
	this.shape_2071.graphics.f("#932276").s().p("AgXATQgEgFAAgLQABgOANgFQAHgDAPgEQAIgEAGAEQAFAFgBAIQgBANgKAKQgHAGgMAHQgOAAgGgHg");
	this.shape_2071.setTransform(229.9,81.3);

	this.shape_2072 = new cjs.Shape();
	this.shape_2072.graphics.f("#8F1E6E").s().p("AgTAZQgFgJAAgLQACgRABgFQAEgNAKgBQAIgBAKAHQAKAIAEAMIgOAVQgIANgHADIgFAAQgGAAgEgHg");
	this.shape_2072.setTransform(225.2,72.1);

	this.shape_2073 = new cjs.Shape();
	this.shape_2073.graphics.f("#8F1E6E").s().p("AgQATQgMAGgGACQABgNAQgPQAFgEAFgPQAGgKAOAGQAXALgCATQgBAOgLAEQgDACgTABQgGgMgKAEg");
	this.shape_2073.setTransform(215.3,73.3);

	this.shape_2074 = new cjs.Shape();
	this.shape_2074.graphics.f("#932276").s().p("AgNAOQgEgOgFgFIgGgJQgCgHAEgMQAMAHAXALQASALACARQADATgSABIgBABQgQAAgKgUg");
	this.shape_2074.setTransform(214.4,90.9);

	this.shape_2075 = new cjs.Shape();
	this.shape_2075.graphics.f("#8F1E6E").s().p("AgOABQATgRgFgSQASABAJAKQAKAJgEAPQgFAWgWAGQgEACgkAEQgBgOAVgUg");
	this.shape_2075.setTransform(228.1,92.3);

	this.shape_2076 = new cjs.Shape();
	this.shape_2076.graphics.f("#932276").s().p("AgcASQgEgGgBgMQgBgSAOgFQAGgDAVgBQAMAAAIAGQAKAHgFAKQgFAIgNAKIgSAOQgSAAgGgKg");
	this.shape_2076.setTransform(194,68.4);

	this.shape_2077 = new cjs.Shape();
	this.shape_2077.graphics.f("#8F1E6E").s().p("AgYAvQAHgRgFgYQgIgeABgJQAHgJAJgHQALgHAAAHQgBAQATAWQARATgEAQQgaAAgIAXQgGAHgIAAQgIgBADgGg");
	this.shape_2077.setTransform(234.6,59.6);

	this.shape_2078 = new cjs.Shape();
	this.shape_2078.graphics.f("#932276").s().p("AgYAEQAPgigBgRQAGgCAKgGQALgEAHAMQgCAVAOAZIgYAuIgtAMQgFgVAOggg");
	this.shape_2078.setTransform(212.9,80.8);

	this.shape_2079 = new cjs.Shape();
	this.shape_2079.graphics.f("#8C1D69").s().p("AhFhLQA0ADAqAuQArAtACA5QhPhDg8hUg");
	this.shape_2079.setTransform(188.4,95.3);

	this.shape_2080 = new cjs.Shape();
	this.shape_2080.graphics.f("#8F1E6E").s().p("AgmAYQgjgfAMgnQBMgEAzAyIgtAcQgZAQgXADg");
	this.shape_2080.setTransform(221.6,56.1);

	this.shape_2081 = new cjs.Shape();
	this.shape_2081.graphics.f("#932276").s().p("AgGBUQghgfgFguQgDgTAGhAQARAAAGgMQATgJAHgBQAPgCAJAPQALASgLAIIgaAKQgHAEAHAwQAJAxALAKQAFAFAMAJQAIAIgNAKQgGAFgIAAQgOAAgQgPg");
	this.shape_2081.setTransform(240.5,76.7);

	this.shape_2082 = new cjs.Shape();
	this.shape_2082.graphics.f("#942278").s().p("AgwBjQgggKgNgBQAXgVAKgmIAQg9QAVgvAbgPQAggRAvASIALAXIggAMQg6AKgTAoQgUAnAaA0IADASQgHACgJAAQgLAAgPgEg");
	this.shape_2082.setTransform(209.4,67.9);

	this.shape_2083 = new cjs.Shape();
	this.shape_2083.graphics.f("#8C1D69").s().p("AgLgFIAXgXIgBA5QgWgJAAgZg");
	this.shape_2083.setTransform(266.7,64.9);

	this.shape_2084 = new cjs.Shape();
	this.shape_2084.graphics.f("#932174").s().p("AgFASIgLgjIAVAAIANAjg");
	this.shape_2084.setTransform(236.9,48.6);

	this.shape_2085 = new cjs.Shape();
	this.shape_2085.graphics.f("#8F1E6E").s().p("AgCARQACgIgMgMQgLgLAIgKQACgCAVAIIAMAiQgGAJgGAAQgGAAgEgIg");
	this.shape_2085.setTransform(234.3,48.7);

	this.shape_2086 = new cjs.Shape();
	this.shape_2086.graphics.f("#8C1D69").s().p("ABGBQQg4gPgIABQAFgRgRgUQgTgWAAgOQAAgIgKAIQgKAGgGAIIgjAAQgzgyhNAEIAAgXQAMgRAcAIQAeAJALgLQAagTAdASQAoAYAKAAQAMASALgSIAXAAQAFAqAoAFIAhACQAUABALAHQAMAHATAGIAiAJQAfAJgKAYQgFAOgMACQgLABgKgJQgKgKgKAAQgJgBgMAHQgRARgZAAQgKAAgMgDg");
	this.shape_2086.setTransform(236.9,55.4);

	this.shape_2087 = new cjs.Shape();
	this.shape_2087.graphics.f("#95237B").s().p("AgCAGIgCgEIgCgEIAFgCIAEgBQAAAAAAAAQABAAAAABQAAAAAAABQABABAAABIACAEQgGADgCAAIgBAAg");
	this.shape_2087.setTransform(147.7,80.7);

	this.shape_2088 = new cjs.Shape();
	this.shape_2088.graphics.f("#8C1D69").s().p("AgKARQgBgZAXgJIgBAkg");
	this.shape_2088.setTransform(151.1,100);

	this.shape_2089 = new cjs.Shape();
	this.shape_2089.graphics.f("#8C1D69").s().p("AgSAcQACgDAKgcQAGgUAQgGQgCAMAFAcQgBATgXAAIgNgCg");
	this.shape_2089.setTransform(154.2,95.3);

	this.shape_2090 = new cjs.Shape();
	this.shape_2090.graphics.f("#76154A").s().p("AAaArQgLgBgWgRQgDgMgWgTQgUgSAAgSIAWABQAKASAeAMQAhANAKAOQgJAbgRAAIgBAAg");
	this.shape_2090.setTransform(155.3,106);

	this.shape_2091 = new cjs.Shape();
	this.shape_2091.graphics.f("#942278").s().p("AhNAqQABgOAJgLIAPgRQAhgtAagBQAagBAkAtQANAPgHAPQgHAOgOgCQgTgEgtAIQgSADgPAAQgUAAgOgFg");
	this.shape_2091.setTransform(121.6,84.3);

	this.shape_2092 = new cjs.Shape();
	this.shape_2092.graphics.f("#8C1D69").s().p("AgOAHQgVgGgDgQQAIgDAZAFQAUAFAKgOQAIABADAFQACAEABAIQgCAbgXAAQgFgIgXgIg");
	this.shape_2092.setTransform(154.4,90);

	this.shape_2093 = new cjs.Shape();
	this.shape_2093.graphics.f("#7E1957").s().p("AAAAUQgJgUgMgCQgFABgEgDIgJgmIAWAEQAxAGAHAOQAGAOgXAvQgNgDgJgUg");
	this.shape_2093.setTransform(170.6,98.6);

	this.shape_2094 = new cjs.Shape();
	this.shape_2094.graphics.f("#912071").s().p("AANBhIgpgWIhDghQADgWAWgjQAXgkAEgVQBhhGAmBuQAKAfgPAhQgIASgaAkQgKAOgQAAQgGAAgIgDg");
	this.shape_2094.setTransform(183.7,109.1);

	this.shape_2095 = new cjs.Shape();
	this.shape_2095.graphics.f("#8F1E6E").s().p("AgDAIQgDgDgBgDQgBgCACgDIAEgJQAKAMABABQAAACgDAEIgEAGIgFgFg");
	this.shape_2095.setTransform(142.8,174.6);

	this.shape_2096 = new cjs.Shape();
	this.shape_2096.graphics.f("#912071").s().p("AgHgLIAJAEQAGADABADQABAGgGADIgMAEg");
	this.shape_2096.setTransform(45.9,37.5);

	this.shape_2097 = new cjs.Shape();
	this.shape_2097.graphics.f("#912071").s().p("AgfAMQAAgXASgPQANAEALgKIAVgWIAAA+QgYAAgJAXIgYAYQgGgdAAgOg");
	this.shape_2097.setTransform(45.3,33.2);

	this.shape_2098 = new cjs.Shape();
	this.shape_2098.graphics.f("#7E1957").s().p("AgMgJQAYgFABAYQgUAAgFgTg");
	this.shape_2098.setTransform(180.2,120.5);

	this.shape_2099 = new cjs.Shape();
	this.shape_2099.graphics.f("#912071").s().p("AAuBlQgLgLgUgEQgegFgDgCQgKgOghgNQgfgNgKgRIABgkQAlAFABgWQgFgdACgMIAAgBQAXAAACgbQAJAKAjAIQAeAHAIAWIAJAmQgkgNgJAMQgHALABA8QAEgNAjgPQAcgLgHgdQAMADAJATQAKAUANADIgZAgQgNATgEASg");
	this.shape_2099.setTransform(162.5,99.7);

	this.shape_2100 = new cjs.Shape();
	this.shape_2100.graphics.f("#76154A").s().p("AA7CgQghgVgfAEQgRACgQgLQgRgMgJABQgBgagYAGQgSABgSgHQgOgHgSgOIATgkIBEAhIAqAXQAZAJANgVQAbgjAIgTQAOgggKgfQglhuhiBGIABiOIAVABQA8BVBPBDIAAABQARAeAHATQALAbABAaQgIATAOATIAZAcQAWAlgJAcQgIAXgkAWQgSglgigUg");
	this.shape_2100.setTransform(187.9,109.2);

	this.shape_2101 = new cjs.Shape();
	this.shape_2101.graphics.f("#932174").s().p("AAEgGIgBANQgOgIAPgFg");
	this.shape_2101.setTransform(189.2,198.1);

	this.shape_2102 = new cjs.Shape();
	this.shape_2102.graphics.f("#8F1E6E").s().p("AgqACQgKgMALgMQAOAOAbAAIAwAAQgRAPgXAHIgmAJQAAgEgMgRg");
	this.shape_2102.setTransform(196.2,188);

	this.shape_2103 = new cjs.Shape();
	this.shape_2103.graphics.f("#0F0109").s().p("AglAmIhAgnQAAglAdgDQAIgBASABQAPgBAJgFQAWARAKABQARACAKgdQADACAfAFQAUAEAMALQgaAWgPARQgTAZgIAaIgHABQgfAAgigTg");
	this.shape_2103.setTransform(156.9,113.3);

	this.shape_2104 = new cjs.Shape();
	this.shape_2104.graphics.f("#8F1E6E").s().p("AgFAEIgDgMIAMADQAFADAAAHQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgBAAQgHAAgCgFg");
	this.shape_2104.setTransform(159,141);

	this.shape_2105 = new cjs.Shape();
	this.shape_2105.graphics.f("#932276").s().p("AgCgBIAFABIgDACg");
	this.shape_2105.setTransform(230.8,160.3);

	this.shape_2106 = new cjs.Shape();
	this.shape_2106.graphics.f("#220819").s().p("AAMA7QgugUgEg4QgBgRAMgNQAKgLAPgDQAOgCAHAOQADAFAFAWIADAfQABASAIAMQgBAQgEAFQgDADgFAAQgGAAgIgEg");
	this.shape_2106.setTransform(251,221.1);

	this.shape_2107 = new cjs.Shape();
	this.shape_2107.graphics.f("#0F0109").s().p("AADAKQgNgGgCgHQgDgHANABIAKACQAFADABAHIgGAFIgFACIAAAAg");
	this.shape_2107.setTransform(255.7,264.9);

	this.shape_2108 = new cjs.Shape();
	this.shape_2108.graphics.f("#220819").s().p("AANAgQgFgIgVgJQgRgGABgOQABgOAJgHQAKgJAOACIAZAtQgDAJgFAIQgEAFgCAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_2108.setTransform(254.3,259.2);

	this.shape_2109 = new cjs.Shape();
	this.shape_2109.graphics.f("#942278").s().p("AADgFIAAALQgLgGALgFg");
	this.shape_2109.setTransform(93.7,97.6);

	this.shape_2110 = new cjs.Shape();
	this.shape_2110.graphics.f("#932174").s().p("AgDAIQgDgBgCgFIgEgGIAFgCQADgCACABIAFAEIAKAGIgKAEIgEABIgCAAg");
	this.shape_2110.setTransform(103.2,88.7);

	this.shape_2111 = new cjs.Shape();
	this.shape_2111.graphics.f("#932174").s().p("AABAtQgjgJgEgpQgBgNgYAAQgUAAAJgTQAHgOATAHQAaAJAGgCQADgBAJABQAHAAADgCQAagWASAMQAHAFAVAeIgNBFQgsgFgUgFg");
	this.shape_2111.setTransform(103.6,98.5);

	this.shape_2112 = new cjs.Shape();
	this.shape_2112.graphics.f("#7E1957").s().p("AAPAbQgogJghAMQgRAHgHgMQgCgFgEgUIACgvQAJgBAQAMQARALAQgCQAggDAhAUQAiATARAlIgCACQgvgQgYgFg");
	this.shape_2112.setTransform(190.2,126.3);

	this.shape_2113 = new cjs.Shape();
	this.shape_2113.graphics.f("#7E1957").s().p("AgvBlQgdgSAFgiIADgCQAkgWAJgXQAIgbgWglIgZgcQgOgTAIgTIATADQALABADADQA1BPApBGQAaArgaAYIg6AiIgwgcg");
	this.shape_2113.setTransform(205.9,126.2);

	this.shape_2114 = new cjs.Shape();
	this.shape_2114.graphics.f("#942278").s().p("AgCACQAAgBACgDIADABIgCAEg");
	this.shape_2114.setTransform(257.9,235.8);

	this.shape_2115 = new cjs.Shape();
	this.shape_2115.graphics.f("#942278").s().p("AgBAIQgGgDAAgCQgCgHAGgDIAMgEIAAAXIgKgEg");
	this.shape_2115.setTransform(266.9,249.8);

	this.shape_2116 = new cjs.Shape();
	this.shape_2116.graphics.f("#942278").s().p("AgGgLIAYABQgJAWgZAAQgFgXAPAAg");
	this.shape_2116.setTransform(268.3,268.5);

	this.shape_2117 = new cjs.Shape();
	this.shape_2117.graphics.f("#942278").s().p("AhKALIACgBIAngGQARgIgQgjQgIgPAOgCQAMgBAPAGQAIADAQAUQAOARAQgBQADAJAMARQAJARgIANQgKAOgOgGQgRgJgIgBQgOAAgVAFIgkAKg");
	this.shape_2117.setTransform(262.3,254.7);

	this.shape_2118 = new cjs.Shape();
	this.shape_2118.graphics.f("#95237B").s().p("AgKAEQAKgQALAQg");
	this.shape_2118.setTransform(251.5,206.2);

	this.shape_2119 = new cjs.Shape();
	this.shape_2119.graphics.f("#942278").s().p("AAMgLQgBAWgWABQABgWAWgBg");
	this.shape_2119.setTransform(262,172.8);

	this.shape_2120 = new cjs.Shape();
	this.shape_2120.graphics.f("#942278").s().p("AgNADQgGgNAGgRQABgCAGgCQAFgBABABQAQAKABARQAAAKgEAbQgUgPgGgPg");
	this.shape_2120.setTransform(267.3,174.3);

	this.shape_2121 = new cjs.Shape();
	this.shape_2121.graphics.f("#912071").s().p("AAUCUQgPgIAEgbQAAgCgMgzQgHgfAagTQABgBgBgJQgbgBgWgqQgVgqgagDQAEgRAXgOQAZgQAFgLQAogMAWAaQAGAHAZAxIgPAWQgJANABAMQAFAwAGAcQAIAqAQAgQgXABgBAXQgPAGgKAAQgIAAgFgDg");
	this.shape_2121.setTransform(255,159.5);

	this.shape_2122 = new cjs.Shape();
	this.shape_2122.graphics.f("#8F1E6E").s().p("AgCgIIACAAIAEASQgKgIAEgKg");
	this.shape_2122.setTransform(202.1,184.7);

	this.shape_2123 = new cjs.Shape();
	this.shape_2123.graphics.f("#8F1E6E").s().p("AgLgFQARABAGAKQgQAAgHgLg");
	this.shape_2123.setTransform(228.1,130.2);

	this.shape_2124 = new cjs.Shape();
	this.shape_2124.graphics.f("#8F1E6E").s().p("AAQACQgHgFgTADQgXAEgLAAIgCgLIA5gMIAjABQgFADAGAbQABAIgFAAQgIAAgTgSg");
	this.shape_2124.setTransform(209.6,171.3);

	this.shape_2125 = new cjs.Shape();
	this.shape_2125.graphics.f("#8F1E6E").s().p("AgLAbQgEgFgDgQQgBgDgKgOQAEggAVASIAVASQALAKACANQABADgIAFQgHAFgHACIgJACQgHAAgEgGg");
	this.shape_2125.setTransform(217.2,170.6);

	this.shape_2126 = new cjs.Shape();
	this.shape_2126.graphics.f("#220819").s().p("AgnANQAPgGAHgFQALgHAGgLQAFgJAMAAQAMAAAGAKQAIANgGAIQgEAKgOADIgeAHIgCAAQgPAAgLgNg");
	this.shape_2126.setTransform(206.4,181.3);

	this.shape_2127 = new cjs.Shape();
	this.shape_2127.graphics.f("#8F1E6E").s().p("AghAAQAGgTgDgIIABAAQAJACATgCQAQAAAJAJQARASgIALQgFAIgIgBQgGgBgGgGQgOgRgJANQgNAVgCAAQgIgLAFgRg");
	this.shape_2127.setTransform(198.5,153.4);

	this.shape_2128 = new cjs.Shape();
	this.shape_2128.graphics.f("#95237B").s().p("AgRAGQgegWgLgPIALgSQAHgIAJgCQAGgBACAGIACAMQAEAZAUAOQAMAGAgAJIAMAkIg7AMQAGgegXgYg");
	this.shape_2128.setTransform(204.8,164.5);

	this.shape_2129 = new cjs.Shape();
	this.shape_2129.graphics.f("#220819").s().p("AgiASQgVgNgEgZQAUgCAngKQAigGAaALQABAVgUAPQgeAWgCAEQgfgKgMgHg");
	this.shape_2129.setTransform(208.6,162.3);

	this.shape_2130 = new cjs.Shape();
	this.shape_2130.graphics.f("#8F1E6E").s().p("AgBA8QgTgRgUAQIgqgiQgZgVgDgZQARgYAbABIAxALQAGAIAIAUQAIAPARgCQAMgCABgMQgBgQABgHQAEgZgQgCQgVACgHgCQAQgXAPgCQASgEASAYQAKANAKgFQADgBAOgOIAMAAQACAVgOAaIgXAAIgMALIAAAXIgWAhQgMATgBASQgGgBgYgWg");
	this.shape_2130.setTransform(222.9,121.4);

	this.shape_2131 = new cjs.Shape();
	this.shape_2131.graphics.f("#8C1D69").s().p("AAEDKQgLgEABgQQABgTgFgFIA6giQAZgYgZgrQgqhGg1hPQgDgEgLgBIgTgCQgBgagLgcQgHgTgRgfQAYgCAVAaQAXAeAPADQANADANgHQAHgFAOgMQADAHgEAhQgEAXAbAFQgBALgQAXQgHAUAjAFQAEAZAYAUIAqAjIgMAvQgJALgJAmQgIAggUANIgZASQgJAFgJAAQgGAAgGgCg");
	this.shape_2131.setTransform(207.1,123.3);

	this.shape_2132 = new cjs.Shape();
	this.shape_2132.graphics.f("#0F0109").s().p("AA4B4QgKgLgQAEQgVAGgEgBQgZgGgFgCQgRgIABgVQAFgCgEgbQgDgVAfANQACABAGgGQAEgGABgFQABgEgEgGQgEgGgEgBQgHgCgkgFQgWgEgIgIQgJgLAKgVQAQgigUgeQATgCAmgMQAggGAXAUQALAPAeAYQAYAXgGAeIADAMQgFANgFAqQgEAjgNASIAAgBIgEANg");
	this.shape_2132.setTransform(196.3,171.8);

	this.shape_2133 = new cjs.Shape();
	this.shape_2133.graphics.f("#942278").s().p("ABcDBQgEgEAAgFIgCgQQgCgKAIgGIAQgEQALgDAFgLQgegCgNgIQgTgMgBgeQgDAHgQAGIgbAJQgZANAsAiQALAIgGAFQgHAEggAEIgLgXQAAgPgMgIIgXgMQAAgEAOgLQAKgIgLgHQgVgOAFgGQACgDAUgGQASgFAHgNQAGgNgHgNQgKgQgLAJQgMAPgGADQgKAGgIgBQgIgBABgLQABgPgOgEQgRgFgCgFQAJgMAegQQAbgOAKgQIAIgPQADgJgJgGQgGgFgHACQgGACgFAHQgPAWgbgBQgfgFgOgBQgUAAgFgCQgOgEgCgRQgBgOAJgHQAFgEAQgDQAIgBAEgGQAEgHgDgHQgDgIgIAAQgGAAgHAGQgQAOgbgBQgLgLABgJQABgJAPgFQAkgMAYgDQAigFAdAHIADANQADAHAIgCQACgBADgGIAEgLIAAAAQAbADAUAqQAVAqAdACQABAJgCABQgbATAIAfQANAygBACQgDAbAPAIQANAHAZgKIgDA4QA2gOAtAlQAVASAAALQgBALgZAMQgKAFgigBQgbgBgOAPIgDABIgEgBg");
	this.shape_2133.setTransform(251.5,169.6);

	this.shape_2134 = new cjs.Shape();
	this.shape_2134.graphics.f("#942278").s().p("AApCtQACgxgyASQgSAJgIACQgOACgIgRQgIgTAOgDIAYgEQARgKgCgLQgBgIgPgOQgSgSgZgcIgpgvQgGgLgSgBIgLAAQABgRAMgUIAWghIATAHQAMAEAGAEQAnAZAOgFQAOgFALgrQAHgaAVgRQAVgQAGAKQACAEACAXQAAAGgIAPQgEALAVgDQAVgDAEACQAHADgEAUQgCAIAEAEQAGAFAJgGQADgDAEgMQAEgIAKALQAOAQgTAUQgEAEgUAJQgPAGgBANQAEAKAcgCQAXgCgDAbQABARgPAjQgOAgAEAVQgGALgZAQQgWAOgFARgAA7BbQgKAJgGAWIAggEQAPgFAGgQQABgCgDgFQgDgFgCgBIgKgBQgNAAgHAIg");
	this.shape_2134.setTransform(240.4,133.3);

	this.shape_2135 = new cjs.Shape();
	this.shape_2135.graphics.f("#912071").s().p("AgBgBIACgDQACAEgCAFIgCgGg");
	this.shape_2135.setTransform(281.5,67.2);

	this.shape_2136 = new cjs.Shape();
	this.shape_2136.graphics.f("#912071").s().p("AAAAGQgIAAgCgHIAVgEIAAALIgLAAg");
	this.shape_2136.setTransform(280.5,87.1);

	this.shape_2137 = new cjs.Shape();
	this.shape_2137.graphics.f("#932276").s().p("AACAaQgOgMgOAFQgLhFBCAMIAAAWIgWAEQACAIAIAAIAMABIAAAsQgIAAgTgPg");
	this.shape_2137.setTransform(278.7,88.1);

	this.shape_2138 = new cjs.Shape();
	this.shape_2138.graphics.f("#8C1D69").s().p("AgIASQgNgTgMghIAMgXQAOgFAOAMQATAPAIAAIAABeQgZgPgRgag");
	this.shape_2138.setTransform(278.3,95.8);

	this.shape_2139 = new cjs.Shape();
	this.shape_2139.graphics.f("#8F1E6E").s().p("AA7D3IglglQgIgHAFgNQAEgLAJgKQAEgDADgJQAFgHAIADQAWAJADgLQADgJgHgNQgWglANgyQAHgdgRgNQgKgIgNAEIgVAIQgOAGACAKQABAFAKAPQAHALgHAFQgFAEgKgBQgJgBgOgDIgVgGQgZgEgNgYQgMgdgJgMQAbgCAMgGQARgJADgZQAEgbAegFQApgIAGgDQAdgUAEgkQAGgyADgHQACgCgLgOQgKgMALgKQALgJANALQAOAOAHgCIAAH1QgIACgHAAQgUAAgQgOg");
	this.shape_2139.setTransform(270.7,213.5);

	this.shape_2140 = new cjs.Shape();
	this.shape_2140.graphics.f("#95237B").s().p("AhfC9IAPgWQAIgbgEggQgDgYgNgiQAEgWAFgIQAIgOASgCIAXAAQACAFgHAQQgFANAJAIQAFAEAGgBQAGgCADgGQAOggghgFQAAgZgXgJQgaAGgOgQQgHgIgLgdQAHgJAZADQAUADACgMQAHgeACgQQAEgbgMgTQgGgJgBgFQgBgHAGgFQAHgFAHAEQAGADADAHQADAIAXAWQARARgDATQgBAIAGAIQAGAHAEgDQAagTAbATQAkAaAKABQgJAdAGA0QAHA5gEAXQg+AfglAXQgyAhgjAnQgHAIgJAEQgGACgMABQgBgMAJgNgAguBNQgHAEACAIQAFAXAfgFQAUgCACgUQgFgLgMgBQgPACgHgBIgCAAQgHAAgFADg");
	this.shape_2140.setTransform(270.1,135.1);

	this.shape_2141 = new cjs.Shape();
	this.shape_2141.graphics.f("#932276").s().p("AB0C+QgFgNAOgJQAPgLgCgKIgLgVQgJgPgLgBQgIgBgQAGIghALQgTAEgQgCQgBgYgDgEQgGgKgTARQgVARgHAaQgNArgOAFQgOAEgmgYQgHgFgLgEIgUgGIABgYIALgLIAXAAQAVABAMgHQANgIABgVQAagHAPgXQAEgIAQgmQgggJAPgOQAUgUgFgGQg/gCgIBFIgdAOQgRAJAMAXQgOAOgDABQgLAFgJgNQgSgYgSAEQgPACgSAXIgLAXIgxgLQgbgBgSAYQgjgFAHgTQARgYAAgKQAHgYASgNQASgOAggDQgOgKgbAEQgXADgHgMQgTgfADgiQADglAZAMQAbAPAlgNQAygRAKgBQAlgEAEgBQAVgHAGgWQAEgPgKgKQgJgJgSgBQAFgUAVgKQATgJAJAHQAdAWAqANIBKARQANADgEAMQgDAJgJAHQgVAPAEAKQADAIAWAJQAmAOA4gHIBegLQALgBAVgbQAUgcAWABQAMAhANAVQARAaAaAOIgBD0QgJAAgkgaQgbgUgaAUQgEADgGgIQgGgIABgHQACgUgRgRQgXgWgDgHQgDgIgGgDQgHgDgHAFQgHAFACAHQABAEAFAJQANATgEAcQgDAQgHAeQgBAMgVgDQgYgDgIAJQgNgNgDgHgAAiAaIgLAJIgMAIQgNAPARAQQASAQAUgLQARgKgGgXQgIgdAFgJIgOgEQgKAUgDACgABlBIIAGADIAEABQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBAAgBIACgFIgJgEgAjKhDQgCAAgDAEIgFAFIALAKIALgNQgIgGgDAAIgBAAgAkFhHIACAFIAEgBIgCgFIAAAAIgEABg");
	this.shape_2141.setTransform(245.3,106.4);

	this.shape_2142 = new cjs.Shape();
	this.shape_2142.graphics.f("#912071").s().p("Ai4FSQAEghgDgHQgOAMgIAFQgNAHgOgDQgOgDgYgeQgVgagXACIAAAAQgCg5grguQgrgvg0gCIgVgCQgEgjgXgnIgshAQAZgJAugiQArgYAoATQAEgPgJgFIgPgFQgVgIgDgKQgEgLARgRIAWgUQAKgNgLgNQgJgLgNAPQgPARgNgFQAKgNANghQAQgVAnAbQAAgegegaQghgcgFgQQACgCATgMQAPgIgBgPQCEgiBWBZQAMALAZAEQAbADAKAIIAAAXQgMAnAjAgQgvgTgfARQgdAPgUAwIgRA9QgKAmgXAVQANAAAhAKQAZAIAQgGIgDgRQgagzAVgoQAUgoA5gLIAhgLQAXgDAagQIArgcIAjAAQgBAKAIAeQAFAZgHAQQgDAHAIAAQAIAAAGgGQAQAAAHgDQALgFABgPQAIgBA4APQAnALAZgZQAEAMACAdQAGAWAeABQAJAAAAAQQgBARALADQAKgBAQggQANgaAZARQATAMgGAWQgDANgLAbQAVgHAKgaQAQgkAEgFIAAg6QAWABACAWQABAJAUASQARAQgCAWQgCAOAegGQAOgDAkgMIAACMQhDgMALBGIgMAXQgWgBgUAbQgUAcgMAAIhdAMQg4AHgmgPQgXgIgDgIQgDgKAUgPQAKgIADgJQADgLgMgDIhMgSQgqgNgcgVQgJgHgTAJQgVAJgGAUQAFASgTASQgVAUABAOQgKAAgyARQglANgbgOQgYgNgDAlQgDAiATAhQAHAMAWgDQAbgFAOAKQgfAEgTANQgRANgIAYQgagFAEgXgAkwCtQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAABIgCAFIAFADQAAAAABAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAABgBIACgGQgGgDgDAAIgBAAgAiZB/IAGAJQAEAGAFAOQAJAUASgBQASgBgCgTQgCgSgTgLQgYgLgMgHQgEAMADAHgAi6BqIANgIIAugMQAXAMAOgOQAIgIAHgVQAFgMgMgCIgVgCQgOgZACgUQASgBAEgCQAKgEACgOQACgUgXgLQgPgGgGAKQgFAPgFAEQgRAQAAANQABAQgPAjQgOAgAFAVIgJAAQgGAAACAIgACQhjQgHABgUAKQgRABgGALQgGBAADATQAFAuAhAeQAbAYASgNQANgKgIgJQgMgJgFgFQgLgKgJgxQgIgwAIgEIAagKQALgIgLgSQgIgNgMAAIgEAAgAAnAWQgRAEgHADQgNAFAAAPQgBALAFAFQAFAHAOAAQAOgHAGgGQALgKABgOQABgIgGgFQgDgCgDAAIgHACgAgYhOQgKACgEAMQgBAGgCARQAAALAFAJQAGALAJgEQAIgDAIgNIANgWQgEgMgJgHQgJgHgIAAIgCAAgAlChuQgWABgFACQgOAGABASQAAANAEAGQAHAJASAAIATgNQANgKAEgKQAFgJgJgHQgIgGgLAAIgCAAgAgvh2QgBAAAAAAQAAABgBAAQAAABAAAAQgBABAAABIgCAFIAFADQABAAABAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBIACgGQgGgDgCAAIgBAAg");
	this.shape_2142.setTransform(226.9,76.7);

	this.shape_2143 = new cjs.Shape();
	this.shape_2143.graphics.f("#942278").s().p("AAGgLQgBARgKAGQABgRAKgGg");
	this.shape_2143.setTransform(42.1,16.5);

	this.shape_2144 = new cjs.Shape();
	this.shape_2144.graphics.f("#912071").s().p("AgLAMQAEgTADgDQADgDANACIgBAXg");
	this.shape_2144.setTransform(40.3,39.8);

	this.shape_2145 = new cjs.Shape();
	this.shape_2145.graphics.f("#76154A").s().p("AgPAAQgOgXAAgLIAXAAQAGAHARAJQAPAKgDARQgCAQgKAGQgIAEgPAAQAEgQgNgTg");
	this.shape_2145.setTransform(35.2,29.4);

	this.shape_2146 = new cjs.Shape();
	this.shape_2146.graphics.f("#8C1D69").s().p("AgPBUQgPgHAFgRQAIgbgBgsQgBg3ACgSQAMgEALAPQALAQALgDIAAAJQgCA/gUA2IgGAQQgCAEgFAAQgDAAgFgCg");
	this.shape_2146.setTransform(31.7,53);

	this.shape_2147 = new cjs.Shape();
	this.shape_2147.graphics.f("#76154A").s().p("AgFA1QgZgEgSgKIALgjQAAgUADgLQAFgRAOgKQAbACAJAGQAPAJgNAYQgGAMAZAYQATAUggAKQgGACgIAAIgUgCg");
	this.shape_2147.setTransform(24.3,61.6);

	this.shape_2148 = new cjs.Shape();
	this.shape_2148.graphics.f("#8F1E6E").s().p("AhSCpIAAgIIgIgSQgDgLAGgIQAQgXAAgcQgBgWgKgfQAQAAAIgEQAKgFACgPQADgSgPgKQgSgJgGgHIAeguQASgbAWgKQALgGABgRIgBAAQAVgRAZACQAVABAaAOIAAAMIgPAHQgJADgIgEIgNgJQgIgEgGAMQgGALAHAEIAPAHQAGAFABAJQAAAJgGAAQgzgBAEAiIAHAeQAEARgDAJQgRAOAAAZQAAAOAGAcIgMAAQgOgCgDADQgCADgEAUQgDAPAAAhQgFAUgbAAIgMgBg");
	this.shape_2148.setTransform(42.8,30.8);

	this.shape_2149 = new cjs.Shape();
	this.shape_2149.graphics.f("#8F1E6E").s().p("AgEALQgKgBABgMQABgHAKgBIAQgBIAAAXIgSgBg");
	this.shape_2149.setTransform(257.1,46.8);

	this.shape_2150 = new cjs.Shape();
	this.shape_2150.graphics.f("#8F1E6E").s().p("AgEAoIgKgoQgEgWACgSQAQAAAGADQALAEABAQIAAAiIAAAAIgWAYg");
	this.shape_2150.setTransform(266,60.3);

	this.shape_2151 = new cjs.Shape();
	this.shape_2151.graphics.f("#932174").s().p("AgdgGQgEgPAXAAQAQgBAIADQAMAEAFAPQgBATgVADIgFAAQgXAAgKgcg");
	this.shape_2151.setTransform(242.2,36.3);

	this.shape_2152 = new cjs.Shape();
	this.shape_2152.graphics.f("#8C1D69").s().p("AgSALQgMgUATgfIAWABQgCASAFAWIAJAoQgfgOgKgQg");
	this.shape_2152.setTransform(263.2,60.2);

	this.shape_2153 = new cjs.Shape();
	this.shape_2153.graphics.f("#8F1E6E").s().p("AAEAVIgXgOQgNgJAHgQQAJgTAQADIAcALIAAA6QgUgLgEgDg");
	this.shape_2153.setTransform(278.8,44.5);

	this.shape_2154 = new cjs.Shape();
	this.shape_2154.graphics.f("#8C1D69").s().p("AgXAbQgCgWgWgBIAAgiIAXAAQALAQAWAFIAnAHQgOAbgJAEQgEACgIAAQgNAAgXgEg");
	this.shape_2154.setTransform(272.6,61.6);

	this.shape_2155 = new cjs.Shape();
	this.shape_2155.graphics.f("#8F1E6E").s().p("AgUBWQACgWgRgQQgUgSgBgJQAoAFAJgDQAIgEAPgcIgngHQgXgFgKgPQAUgYAggPQAVgKAogKIAACMIgDADIADAHIAAAYQgjAMgPADIgOACQgOAAABgKg");
	this.shape_2155.setTransform(275.9,62.2);

	this.shape_2156 = new cjs.Shape();
	this.shape_2156.graphics.f("#912071").s().p("AhFBhQgEgFgCgRIgTgkQgLgVATgRQAEgCASABQAPAAADgLQACgOgOgGQgSgEgHgFQgfgUAGgcQACgJAIgEQAFgCAEACQADACAEAHQA9BeCCgCIAAA6QgWAFgXgSQgggYgIgDQghgNgLANQgGAHgCAfQgBAVgBAGQgEANgOAFQgFACgEAAQgIAAgEgGg");
	this.shape_2156.setTransform(270.7,24.7);

	this.shape_2157 = new cjs.Shape();
	this.shape_2157.graphics.f("#8F1E6E").s().p("ABzBnQAGgXgTgMQgZgQgNAZQgQAhgKABQgLgDABgSQAAgQgJAAQgdAAgGgXQgCgcgEgNQAMgGAIAAQAKAAAKAKQAKAJAKgBQAMgBAGgOQAJgXgegKIgigIQgTgGgMgIQgKgHgUgBIgigDQgngFgGgqIgMgjIABAAIAJgBQAGAAACACQAVAVAtAIQA2AKAOAJQAmAVAMgJQAMgJgEgoQAUAKAFAbQAHAnADAGQgUAeANAUQAJAQAhAOIAAABQAAAZAXAJQgEAFgQAlQgKAagVAHQALgbADgNg");
	this.shape_2157.setTransform(252.6,61);

	this.shape_2158 = new cjs.Shape();
	this.shape_2158.graphics.f("#8F1E6E").s().p("AAAAJIgFgEQgDgDgBgCQgCgEADgCQADgDAFABQAHACADAGQADAJgLAAIgCAAg");
	this.shape_2158.setTransform(30.6,105);

	this.shape_2159 = new cjs.Shape();
	this.shape_2159.graphics.f("#8C1D69").s().p("AgNAOQACgPADgHQAFgLARAEQABAMgJAHQgFAFgLAIg");
	this.shape_2159.setTransform(24,121.1);

	this.shape_2160 = new cjs.Shape();
	this.shape_2160.graphics.f("#76154A").s().p("AgZgBQgBgVAYgIIAPgFQAJAAADALQAGAVgTAOIgeAZQgHgaAAgLg");
	this.shape_2160.setTransform(16.6,108);

	this.shape_2161 = new cjs.Shape();
	this.shape_2161.graphics.f("#8F1E6E").s().p("AhCAaQgRgXARgiQAJgSAHgBQAHgCAhAJQABAHgTALQgQAKANANQAKALANgIIATgQQALgKASgEIAkgEQgIAMgqAYQgeAUAAAdQgtgEgRgWg");
	this.shape_2161.setTransform(34.9,125.7);

	this.shape_2162 = new cjs.Shape();
	this.shape_2162.graphics.f("#95237B").s().p("AgNgEIAWgBQAJAIgLACIgEABQgKAAgGgKg");
	this.shape_2162.setTransform(182.9,34.5);

	this.shape_2163 = new cjs.Shape();
	this.shape_2163.graphics.f("#932276").s().p("AgGACQgCgDABgDQABgCALgGIACAFQAAABABABQAAABAAAAQAAABAAAAQAAABAAAAQgBACgJANIgEgLg");
	this.shape_2163.setTransform(221.3,23.4);

	this.shape_2164 = new cjs.Shape();
	this.shape_2164.graphics.f("#932276").s().p("AgLAOIABgQQABgKAIgBQALgBABAKQABAFAAANg");
	this.shape_2164.setTransform(220,39.6);

	this.shape_2165 = new cjs.Shape();
	this.shape_2165.graphics.f("#932276").s().p("AgJALQgEgDABgEQAEgMAIgDQAGgDAEAEQAFADgCAHQgBACgFAFIgGAGIgBAAQgGAAgDgCg");
	this.shape_2165.setTransform(233.4,17.1);

	this.shape_2166 = new cjs.Shape();
	this.shape_2166.graphics.f("#932276").s().p("AgSACQAAgPASgBQAWgBgDAPQgBADgHAFIgLAGIgDABQgPAAAAgNg");
	this.shape_2166.setTransform(225.6,35.6);

	this.shape_2167 = new cjs.Shape();
	this.shape_2167.graphics.f("#912071").s().p("AARAxQgEgLgDgDQgMgLgQAMQgSAOgJgDQAAgPAOgQQASgTADgHQAHgEAJgSQAJgRAOgDQACALgDAYQAAAUANAMQAIAHgFAMQgEAJgJAHQgFADgDAAQgEAAgCgEg");
	this.shape_2167.setTransform(253.7,19.9);

	this.shape_2168 = new cjs.Shape();
	this.shape_2168.graphics.f("#932276").s().p("AgCAuQgdgSgaATQAAgMgOgWQgNgUAEgPQAbABAdgQQARgJAfgXQADATAdAfQAbAdgBAZIgXAAQgXgJgCADQgHAKALALQAMAMgDAIQgKAAgngYg");
	this.shape_2168.setTransform(229.3,43.3);

	this.shape_2169 = new cjs.Shape();
	this.shape_2169.graphics.f("#912071").s().p("AAwBIQgggQgUARQgHgGgBgCQgDgJASgTQAQgQgUgJQgTgKgWAMQgUAMgNAXIgXABQgEgvAwgBQgBgHARgEIAdgHQAfgKg1giQgCgBAAgGQgBgFACgDQAGgMASACQALACAaARQAXAPASgDQgIAGABAZQAAAVgRAHQgRAHAGAMQAGANAKgDQAjgLAIAUQAEALABAfQgEABgFAAQgPAAgbgOg");
	this.shape_2169.setTransform(191.4,29);

	this.shape_2170 = new cjs.Shape();
	this.shape_2170.graphics.f("#8F1E6E").s().p("ABcA5QgagDgLgMQhWhXiEAhQgFgBgRAHQgPAGgJgMIAAgLIAwgOQAcgJASgNQAUgRAgARQAkASAQgGQAJAEASADQARAEAIANQAZAkAhAAQAbAAAlgZIAXAAQgEAPANAUQAPAXAAALQgMALgegJQgbgIgMASQgKgJgbgDg");
	this.shape_2170.setTransform(202.5,42.3);

	this.shape_2171 = new cjs.Shape();
	this.shape_2171.graphics.f("#932174").s().p("ABJBLQgPgJg2gJQgsgIgVgWQgCgCgGABIgJABQABgZgbgdQgegfgDgTQASAAAGgMIAGACQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAMAyAjAFQAUAEAygPQAIgCAVABQAOgDgJgeQgEgMAWAAIAoAAQAPgBAJAHQALAIgEAQQgFAQAAAVIgBAkIgSABQgKABgBAHQgBANALABIATABQAEAogMAIQgEADgGAAQgOAAgagPg");
	this.shape_2171.setTransform(245.4,44.1);

	this.shape_2172 = new cjs.Shape();
	this.shape_2172.graphics.f("#932174").s().p("AgIACIAAgLIANADQAGADgDAIQgCAFgEAAQgDAAgHgIg");
	this.shape_2172.setTransform(97.2,106.2);

	this.shape_2173 = new cjs.Shape();
	this.shape_2173.graphics.f("#932276").s().p("AgCAGIgCgDIgCgFQAIgEABABQACABACAHQgGADgCAAIgBAAg");
	this.shape_2173.setTransform(99.9,15.3);

	this.shape_2174 = new cjs.Shape();
	this.shape_2174.graphics.f("#932174").s().p("AgaAbQgIgTgGgGQALgTAbgFQAlgHAGgDQAAATgQAOQgUAPgHAIQgJAJgGAAQgFAAgEgGg");
	this.shape_2174.setTransform(96.9,87.4);

	this.shape_2175 = new cjs.Shape();
	this.shape_2175.graphics.f("#932174").s().p("AgUAAQgLgQgCgGQgDgNANgIIA5A5QgLAGALAGIABAMQgagCgoAJQAfgQgUgdg");
	this.shape_2175.setTransform(90.5,95.6);

	this.shape_2176 = new cjs.Shape();
	this.shape_2176.graphics.f("#912071").s().p("AgBAOQgFgBgFgEQgFgEgBgFQgDgNAUgBQAUAAgCAOQgBAIgGAEQgEADgFAAIgDgBg");
	this.shape_2176.setTransform(57.8,176.8);

	this.shape_2177 = new cjs.Shape();
	this.shape_2177.graphics.f("#7E1957").s().p("AgRgEQADgRAQgBQAGgBAIAJQAJAKgBAEQgCAPgSABQgVACgGAGg");
	this.shape_2177.setTransform(28,171);

	this.shape_2178 = new cjs.Shape();
	this.shape_2178.graphics.f("#8C1D69").s().p("Ag0gRQASAEAjAFQAgAGAVALQgoAJgTAAQghAAgOgjg");
	this.shape_2178.setTransform(49.2,152.5);

	this.shape_2179 = new cjs.Shape();
	this.shape_2179.graphics.f("#8F1E6E").s().p("AgUAiQgLgCgCgMQgCgIAGgHQAJgGADgFQAGgIATgFQATgFAGgKQAHAVgPARIgaAfIgGAAIgNgBg");
	this.shape_2179.setTransform(17.2,175.2);

	this.shape_2180 = new cjs.Shape();
	this.shape_2180.graphics.f("#95237B").s().p("Ag8gMQAqgLAKgBQAdgDAXAPQARAMAAAHQAAALgKADQgIADgIgDQgJgEgSADIgcAFIgEAAQgeAAgGglg");
	this.shape_2180.setTransform(23.1,184.7);

	this.shape_2181 = new cjs.Shape();
	this.shape_2181.graphics.f("#8C1D69").s().p("AgUANQgXgJggAUQABgRgVgHQgXgIgEgMQAugJA8ARQAQALAVABIAoAAQAqAAAUAXIhIABQgrAAgcgLg");
	this.shape_2181.setTransform(31.5,148.4);

	this.shape_2182 = new cjs.Shape();
	this.shape_2182.graphics.f("#8F1E6E").s().p("AAZA3QgMADgGAAQguAAgMgMQgMgNAGgrQAGgIAGAAQAGgBAEAJQAKAVAGgDQADgCAIgUQAJghAjgWQgJA1AAAHQABAgAbAWQAIAIgHAIQgHAIgNABQgBgPgKAAg");
	this.shape_2182.setTransform(16.9,164.7);

	this.shape_2183 = new cjs.Shape();
	this.shape_2183.graphics.f("#942278").s().p("AgKAHQgEgDACgGQAAgCAFgCQAEgCADAAQABAAANAIIgIAGQgEADgCAAIgDAAQgEAAgDgCg");
	this.shape_2183.setTransform(114.6,55);

	this.shape_2184 = new cjs.Shape();
	this.shape_2184.graphics.f("#942278").s().p("AgQgRQAhADAAAgQgggCgBghg");
	this.shape_2184.setTransform(107.4,87.1);

	this.shape_2185 = new cjs.Shape();
	this.shape_2185.graphics.f("#932174").s().p("AgNARQgGgOgBgGQgBgLARgCQAQgCAGALQAEAHAAARg");
	this.shape_2185.setTransform(91.8,44);

	this.shape_2186 = new cjs.Shape();
	this.shape_2186.graphics.f("#912071").s().p("AgcAMQgFgWAPgBIAYABQASABAGAKIAAALg");
	this.shape_2186.setTransform(178.5,39.8);

	this.shape_2187 = new cjs.Shape();
	this.shape_2187.graphics.f("#912071").s().p("AAcAOIgiAAQgWAAgJgQQALgQAXAHQAZAHAJgFIAFAGQACADAAACQgBAEgEAEQgDAEgCAAIAAAAg");
	this.shape_2187.setTransform(122.3,66.9);

	this.shape_2188 = new cjs.Shape();
	this.shape_2188.graphics.f("#8F1E6E").s().p("AgoAYQgEgGgCgLIBQgjIANABQgHAWgYAMQgdANgNAHQgDACgDAAQgEAAgEgFg");
	this.shape_2188.setTransform(176.8,19.3);

	this.shape_2189 = new cjs.Shape();
	this.shape_2189.graphics.f("#912071").s().p("AgYAdQAHgMgbgQQgWgOAYgRQAZgSAYACQAaABAWAXQgGAQgeARQgbASgGASQgMgPACgDg");
	this.shape_2189.setTransform(117.6,24.6);

	this.shape_2190 = new cjs.Shape();
	this.shape_2190.graphics.f("#912071").s().p("AAJAiQgSgIgTAEQAGgSgPgXQgQgaACgOQAwgFASAiQAGALAKAEQAIADAOAAQgDAFABAYQACATgMAJQgSgOgOgFg");
	this.shape_2190.setTransform(110.9,31);

	this.shape_2191 = new cjs.Shape();
	this.shape_2191.graphics.f("#932174").s().p("AhWBMIgBgXQAMgNAKgpQAIglAVgQQAQgMAKgEQAMgGAPABQATgDATAHQAOAGASANQAEAngmATQgLgQgFgBQgIgCgQAQQgYAjgPAPQgWAYgdAAIgJgBg");
	this.shape_2191.setTransform(106.2,41.6);

	this.shape_2192 = new cjs.Shape();
	this.shape_2192.graphics.f("#942278").s().p("AAQCQQgKgGgPADQgSACgKgEQARgWAHgFQAOgKAUAGQANAEAKgIQAJgHADgLQAFgQgMgDQgQAAgGgDQgdgOgWAAQgdABgbAWIARgsQAIgXgEgJQgGgPgVAIQgZAKgKgHQACgLARgVQAPgTAAgPQAjAEAagbQAPgPAYgjQAQgRAHACQAGABAKARIgjAjQAFAOALAdQAFAYgcARQghATANAPQAYAgAWgFQAkgIAVAWQALALASAnIgLAFQgHADgBACQgIAqgYAHQgFACgGAAQgTAAgZgSg");
	this.shape_2192.setTransform(106.3,56.6);

	this.shape_2193 = new cjs.Shape();
	this.shape_2193.graphics.f("#942278").s().p("AhlBiIAcgGQAQgDALgEQAIgDAFgHQAGgHgBgKQgBgIgIgCIgOgBQgQAAgDgKQgBgOgCgJQgMgpAIgeQAKggAjgZQALgIgGgPQgHgUAAgFIA6AAQAIAMAPgGQASgIAFACQAAAPgOAIQgTAMgCACQAFAQAhAcQAdAaAAAeQgmgbgQAVQgNAggKANQANAFAPgRQAMgOAKALQALAMgKANIgWAUQgRARAEALQADAKAUAIIAQAFQAJAFgFAPQgogTgqAYQgtAigaAJg");
	this.shape_2193.setTransform(179.2,57.3);

	this.shape_2194 = new cjs.Shape();
	this.shape_2194.graphics.f("#932276").s().p("AhiDQQgSgEgMgTQAYAAAXgUIAlgjQAKgHgGgVQgGgUgMgGQgMgFgdgaQgXgWgVgDQgcgEgBgRQAAgZAegFIAYgGQAOgCAJANQAFAJAIAYQAKASAQgLQANgJgNgQQgTgTgEgKQgRgeABgIQABgQAlgHIAxgQQAdgLAYAGQgEgYgTgNQgXgLgLgHQAKgbAVgDQAMgCAgAHQAdANAdAsQAgAxAUANQgKAOgVgFQgZgGgIAEQADAQAVAHQAYAIAFAHIAAABQgQAGgHAUQgKAbgCAEQgYAKABAZQAAASATASQAXAVADALQgIAFgPABQgSgBgIABQgeADAAAlQgMAPgSAEQgRAEgPgEQgUgHgSADQgQACgSANQgPAJgOAAIgFAAgABPifIgFACIACAFIACAEQACABAIgEIgCgFQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgBAAIgEABg");
	this.shape_2194.setTransform(139.6,96.2);

	this.shape_2195 = new cjs.Shape();
	this.shape_2195.graphics.f("#220819").s().p("AhnDJQgjgNgLggIgUhCIANhGQAZgjgXgiQgBgjASgxQAIgXAMgLQAPgMAXAAQAaAAAdgNQAhgPATAAQAbABATAeQADAFANACIAWAEQALAGAYALQATANAEAYQgYgGgfALIgwARQglAGgBARQgBAIAQAeQAFAJATATQANAQgNAJQgRALgJgSQgIgXgGgJQgIgOgOACIgXAGQgeAGAAAXQAAATAdAEQATADAYAVQAcAaANAGQAMAFAGAUQAGAVgKAIIglAjQgXAUgXgBQgNgIgGgCQgKgDgFARQgRAIgRAAQgQAAgQgHgAgviZQgbABghAuIgPARQgJALgBAOQAZAIAqgGQAugIATAEQANACAHgOQAHgPgNgQQgigsgaAAIgBAAg");
	this.shape_2195.setTransform(127.1,95);

	this.shape_2196 = new cjs.Shape();
	this.shape_2196.graphics.f("#0F0109").s().p("ACbEqIgGgiIgFgiQAEgSANgTIAZggQAXgwgGgOQgHgNgygHIgWgEQgIgWgegHQgkgIgJgKQgBgJgCgDQgDgGgIAAQgUgMgfgxQgcgsgegNQgHgTgBgJQgCgQAJgLQAXgggOgTQgIgMgjgQQgngRgcAAIhCAAQAJgXATgLQAOgIAagDQAggFAtABIBOAEQAQAAABACQAKAeAmANQAwARALAKQAJAJAPAKIAaARIAhBCIAtBBQAXAmADAjIAACOQgEAVgXAkQgWAkgDAWIgTAkQgLAHgDABIgCAAQgHAAgCgLg");
	this.shape_2196.setTransform(154.2,86.8);

	this.shape_2197 = new cjs.Shape();
	this.shape_2197.graphics.f("#912071").s().p("AgXAKQAEgXARAFQAYAIABgBQgHAKgOABIgZAAg");
	this.shape_2197.setTransform(63.7,181.2);

	this.shape_2198 = new cjs.Shape();
	this.shape_2198.graphics.f("#8C1D69").s().p("AgLgIQATgLADALQABAHAAAPQgVAAgCgWg");
	this.shape_2198.setTransform(89.3,247.3);

	this.shape_2199 = new cjs.Shape();
	this.shape_2199.graphics.f("#8C1D69").s().p("AgHANQgKgHgGgVIAuAXQgMAIgJAAQgFAAgEgDg");
	this.shape_2199.setTransform(92.8,250.2);

	this.shape_2200 = new cjs.Shape();
	this.shape_2200.graphics.f("#942278").s().p("AgKALQgFgEACgGQABgDAFgFQAEgFAEgBQAGgBAEAEQADAEAAAGQgBAOgNAAIgBAAQgFAAgEgDg");
	this.shape_2200.setTransform(31.7,198);

	this.shape_2201 = new cjs.Shape();
	this.shape_2201.graphics.f("#942278").s().p("AggATQAcgPARgfQAYAEgFAQQgIAXABACQgTAJgGABIgFAAQgOAAgNgJg");
	this.shape_2201.setTransform(82.1,241);

	this.shape_2202 = new cjs.Shape();
	this.shape_2202.graphics.f("#932276").s().p("AgRAqQgSgHALgQQARgXAAgDIABgjIAiAAIABASQAAAKgDAGQgLAdgFAIQgJAOgKAAIgIgBg");
	this.shape_2202.setTransform(21.1,200.5);

	this.shape_2203 = new cjs.Shape();
	this.shape_2203.graphics.f("#912071").s().p("AgggKQgCgOAMgEIAWgDQAQABAHADQAKAFAAAOQgBAPgKAMQgKALgNABIgCABQgXAAgGgqg");
	this.shape_2203.setTransform(27.5,271.7);

	this.shape_2204 = new cjs.Shape();
	this.shape_2204.graphics.f("#932174").s().p("AgVBMQABgQgCgHQgDgLgUALQgVAHgDgRQgFgYgFgCQgBgCAIgXQAFgQgYgEIgGgjQgEgVALgOQAlgBAOALQASAOgOAlQgGAQAMACQAfAJAFgPQAMglAcACQAQABAlANQgBANgOAZQgIAWASAPQgGAYgWASQgNAKgdASg");
	this.shape_2204.setTransform(92.6,241.1);

	this.shape_2205 = new cjs.Shape();
	this.shape_2205.graphics.f("#ABABAB").s().p("Az7VhQgsAAgYgSQgbgTgGgrIBDAAQAHAhAiABMAm3AAAQBKAAATgSQASgTAAhJMAAAgmPQADghgCgPQgEgagegHIgBhFQAuAIATAfQAQAaAAAxMgABAhtIAAF2QgBAygcAdQgdAdgyAAg");
	this.shape_2205.setTransform(152.4,153);

	this.shape_2206 = new cjs.Shape();
	this.shape_2206.graphics.f("#220819").s().p("AAFgDIgJAIQgBgLAKADg");
	this.shape_2206.setTransform(178.6,194.5);

	this.shape_2207 = new cjs.Shape();
	this.shape_2207.graphics.f("#7E1957").s().p("AgGgDIANgDIgFANg");
	this.shape_2207.setTransform(147,181.6);

	this.shape_2208 = new cjs.Shape();
	this.shape_2208.graphics.f("#932276").s().p("AgDAAIAHgDIgCAIQgEgBgBgEg");
	this.shape_2208.setTransform(90.9,115.7);

	this.shape_2209 = new cjs.Shape();
	this.shape_2209.graphics.f("#95237B").s().p("AgFgFQAFgBAGADIgLAJg");
	this.shape_2209.setTransform(255.6,243.4);

	this.shape_2210 = new cjs.Shape();
	this.shape_2210.graphics.f("#95237B").s().p("AgFAGIABgLQAJgGAAAHIABAKQgEADgEAAg");
	this.shape_2210.setTransform(52.6,15.9);

	this.shape_2211 = new cjs.Shape();
	this.shape_2211.graphics.f("#95237B").s().p("AgFACIACgIQABgFAGgBIACAZg");
	this.shape_2211.setTransform(247.3,204.4);

	this.shape_2212 = new cjs.Shape();
	this.shape_2212.graphics.f("#220819").s().p("AgLALQADgVAUAAQgEALgDAEQgFAGgIAAIgDAAg");
	this.shape_2212.setTransform(147.6,138.9);

	this.shape_2213 = new cjs.Shape();
	this.shape_2213.graphics.f("#912071").s().p("AgFAAIgDgIIARARQgLgCgDgHg");
	this.shape_2213.setTransform(208.3,195.1);

	this.shape_2214 = new cjs.Shape();
	this.shape_2214.graphics.f("#912071").s().p("AgLgLIAWAAQAEARgPAGQgLgGAAgRg");
	this.shape_2214.setTransform(47.4,44.5);

	this.shape_2215 = new cjs.Shape();
	this.shape_2215.graphics.f("#942278").s().p("AgLgUQASABAEAOQACAFgDAVQgXgUACgVg");
	this.shape_2215.setTransform(252.5,269.5);

	this.shape_2216 = new cjs.Shape();
	this.shape_2216.graphics.f("#912071").s().p("AgFgJQAHgHAPAPQgFAGgLADIgRAEQAGgRAFgEg");
	this.shape_2216.setTransform(209,190.7);

	this.shape_2217 = new cjs.Shape();
	this.shape_2217.graphics.f("#95237B").s().p("AgTgBQACgKAJgDQAGgBAKAAIAKALIACAUIgGAAQgVAAgMgRg");
	this.shape_2217.setTransform(145.5,182.8);

	this.shape_2218 = new cjs.Shape();
	this.shape_2218.graphics.f("#95237B").s().p("AAAgWIAIAAQAYApgvAEQAOgQABgdg");
	this.shape_2218.setTransform(247.2,195);

	this.shape_2219 = new cjs.Shape();
	this.shape_2219.graphics.f("#8F1E6E").s().p("AgRADQgDgFAGgCQAYgMAJAQIgbAKQgHgDgCgEg");
	this.shape_2219.setTransform(133.8,168.3);

	this.shape_2220 = new cjs.Shape();
	this.shape_2220.graphics.f("#8F1E6E").s().p("AgEAMQgMgEgBgPQAfgQAEAkIgKAAQgIAAgEgBg");
	this.shape_2220.setTransform(139,170.3);

	this.shape_2221 = new cjs.Shape();
	this.shape_2221.graphics.f("#220819").s().p("AgJADQgDgKACgRIAMACQAHADACAHIABASQAAAMgGAHQgLgJgEgNg");
	this.shape_2221.setTransform(181.5,178.8);

	this.shape_2222 = new cjs.Shape();
	this.shape_2222.graphics.f("#942278").s().p("AgQAJQACgagCgMQAHAJAPARQANAPgDASIgBAAQgcAAgDgVg");
	this.shape_2222.setTransform(50.2,132.5);

	this.shape_2223 = new cjs.Shape();
	this.shape_2223.graphics.f("#8C1D69").s().p("AgWALIAEglIABAAQANAUAagCQACAggMADIgDAAQgKAAgVgQg");
	this.shape_2223.setTransform(145.2,185.4);

	this.shape_2224 = new cjs.Shape();
	this.shape_2224.graphics.f("#95237B").s().p("AghAEQACgEARACQASADAIgHQAIgHgBgSIANgBQAIAggWAMQgdAIgOAFQgJgVABgEg");
	this.shape_2224.setTransform(247.1,209.6);

	this.shape_2225 = new cjs.Shape();
	this.shape_2225.graphics.f("#8C1D69").s().p("AAAANIgagNQgBgCAMgIQAIgGgMgJIAEgJQA8ASgaAzQgFgNgOgJg");
	this.shape_2225.setTransform(167.9,133.2);

	this.shape_2226 = new cjs.Shape();
	this.shape_2226.graphics.f("#7E1957").s().p("AACAbQgLgBgGgMIgGgVQgCgHAGgGQAFgFAIgBQALgBAGAMQAHAOADABQgCAbgRAAIgCAAg");
	this.shape_2226.setTransform(67.2,85);

	this.shape_2227 = new cjs.Shape();
	this.shape_2227.graphics.f("#220819").s().p("AgPAUIgMgiIA3gFIAAAVIgOADQgMAAgEACQgJADgCAKg");
	this.shape_2227.setTransform(144.9,180.7);

	this.shape_2228 = new cjs.Shape();
	this.shape_2228.graphics.f("#932276").s().p("AgogMQAXACAXgOIAXAMQAMAJAAANIggAAQgRABgKAOQgVgHgBgeg");
	this.shape_2228.setTransform(246.2,183.5);

	this.shape_2229 = new cjs.Shape();
	this.shape_2229.graphics.f("#8F1E6E").s().p("AgOANQADgkgIgGQAPgaAMAbIAMAhIgDAmQghAAACgeg");
	this.shape_2229.setTransform(141.3,182.1);

	this.shape_2230 = new cjs.Shape();
	this.shape_2230.graphics.f("#912071").s().p("AgkAeQALgiAKgMQAQgTAiAIQADAEgDAEIgfAfQgQASgUAAIgEAAg");
	this.shape_2230.setTransform(69.6,178);

	this.shape_2231 = new cjs.Shape();
	this.shape_2231.graphics.f("#942278").s().p("AAAANQgegNgcgbQAjAGAfASIAzAfQgigFgZgKg");
	this.shape_2231.setTransform(212.5,239.5);

	this.shape_2232 = new cjs.Shape();
	this.shape_2232.graphics.f("#932174").s().p("AgfgLQAGgRAGgDQAIgFALASQAEAFAEANQAGALAOgDIAEAVQgNAEgLAAQgiAAgFgsg");
	this.shape_2232.setTransform(186.8,198.6);

	this.shape_2233 = new cjs.Shape();
	this.shape_2233.graphics.f("#932174").s().p("AgVAJQgCgXgDgLIAmgCIAOACQgBALACAWQgDATgVABIgBAAQgRAAgGgTg");
	this.shape_2233.setTransform(126.7,258.4);

	this.shape_2234 = new cjs.Shape();
	this.shape_2234.graphics.f("#942278").s().p("AgDANQghgVgWgHQAjgMAdAPIA1AdQgOAEgNAAQgTAAgQgIg");
	this.shape_2234.setTransform(111.5,203.4);

	this.shape_2235 = new cjs.Shape();
	this.shape_2235.graphics.f("#95237B").s().p("AgKAvQgOgZACgVIANgDQAGgDgBgIQgBgCgGgDIgKgEIAAgBQAKgXAXAAIABACQgCAKAKAjQAHAdgQARg");
	this.shape_2235.setTransform(47.3,38.6);

	this.shape_2236 = new cjs.Shape();
	this.shape_2236.graphics.f("#8F1E6E").s().p("AgaAYQgVgPAbgkIA4AiQgGABgbAOQgKAGgIAAQgGAAgFgEg");
	this.shape_2236.setTransform(158.4,201.3);

	this.shape_2237 = new cjs.Shape();
	this.shape_2237.graphics.f("#942278").s().p("AgBAPQgGgHgOAHQgOAHgIgKQAMgfAagDQAggEAMAWIAEAIQABAFgGAEQgPAJgEABIgEABQgJAAgHgJg");
	this.shape_2237.setTransform(198.7,203.1);

	this.shape_2238 = new cjs.Shape();
	this.shape_2238.graphics.f("#912071").s().p("AgHApQgLgIgEgZQgEgYgJgJQAJgOATgBIAfAAIAMAYQgmASADAng");
	this.shape_2238.setTransform(247.9,188.6);

	this.shape_2239 = new cjs.Shape();
	this.shape_2239.graphics.f("#932174").s().p("AglAhIAEgpQADgZAegBQAAAQAOALIAYASQgYANgMAFQgNAGgNAAQgGAAgHgCg");
	this.shape_2239.setTransform(181.3,188);

	this.shape_2240 = new cjs.Shape();
	this.shape_2240.graphics.f("#8F1E6E").s().p("AgtAUQATg4AzAIIAVAuQgYgJgXAGQgKACggANQgCgFAAgFg");
	this.shape_2240.setTransform(103.2,124.4);

	this.shape_2241 = new cjs.Shape();
	this.shape_2241.graphics.f("#8F1E6E").s().p("AgaAAQAKgggBgOQAFAOANAMQAaAUADACQgKADgHAVQgHATgNACQgegPALggg");
	this.shape_2241.setTransform(35.5,72.7);

	this.shape_2242 = new cjs.Shape();
	this.shape_2242.graphics.f("#95237B").s().p("AgoArQAEgcAbgVQAggVAOgPQAKAdgTAVQgcAggBADg");
	this.shape_2242.setTransform(187.9,278.2);

	this.shape_2243 = new cjs.Shape();
	this.shape_2243.graphics.f("#912071").s().p("AAcAXIhbAAQAEgUARgCQAKgBAUACQAWABAOgEQASgFAMgQQAcAtgyAAIgEAAg");
	this.shape_2243.setTransform(219.4,187.9);

	this.shape_2244 = new cjs.Shape();
	this.shape_2244.graphics.f("#95237B").s().p("AgJARQgfgSgIgmQAjAFAZAZQANAMAYAlQgogNgSgKg");
	this.shape_2244.setTransform(182.9,259.7);

	this.shape_2245 = new cjs.Shape();
	this.shape_2245.graphics.f("#942278").s().p("Ag0AAQABgNAOgHQASgIADgGIAKAAQAAATAfAMQAfAKgDAbg");
	this.shape_2245.setTransform(173.9,142.5);

	this.shape_2246 = new cjs.Shape();
	this.shape_2246.graphics.f("#95237B").s().p("AgeAIQgGgggGgOQAXgFAXAMQAKAFAdAWQgZAAgIAHQgKALAPAaQgjgFgKgbg");
	this.shape_2246.setTransform(250,243.2);

	this.shape_2247 = new cjs.Shape();
	this.shape_2247.graphics.f("#95237B").s().p("AABAaQgYgPgMgGQgFgDgBgFQgBgGAEgGQAGgJAOABIAeADQASAAAMgIIAAAnQgOASgQAAQgFAAgGgDg");
	this.shape_2247.setTransform(241.4,200.1);

	this.shape_2248 = new cjs.Shape();
	this.shape_2248.graphics.f("#932174").s().p("AgKAmQgHgDgJgRQgIgPgKgCQgCgMASgHQATgIAAgLQAjAFAHACQAEABAEAGQAFAGgBAEQgBAEgFAGQgGAFgCgBQgfgLADAUQAEAbgFABg");
	this.shape_2248.setTransform(191.9,176);

	this.shape_2249 = new cjs.Shape();
	this.shape_2249.graphics.f("#220819").s().p("AANAXQgFgPgDgFQgMgQgIAEQgFADgGAQQgOgBgFgJQgDgGABgPQASgQAdALQAjAOANgEQADgBgIAJQgJAMgBAGQgQAFAPAJQgBAEABADIgGAAQgJAAgEgIg");
	this.shape_2249.setTransform(186.3,196.3);

	this.shape_2250 = new cjs.Shape();
	this.shape_2250.graphics.f("#95237B").s().p("AglAsQgRgJAAgMQAvANAOgkIAKghQAGgVAJgJQAWAOABAQQACAPgVASQgNALgSATIgdAiQACgMgPgIg");
	this.shape_2250.setTransform(81.5,20.6);

	this.shape_2251 = new cjs.Shape();
	this.shape_2251.graphics.f("#8F1E6E").s().p("Ag4AaQAFgZACgLQAQgQAggIQAvgLAEgCQANAJgJAGQgLAIAAADQgGAOghAQQgcAPgCAYQgegCAAgUg");
	this.shape_2251.setTransform(160.8,135.4);

	this.shape_2252 = new cjs.Shape();
	this.shape_2252.graphics.f("#912071").s().p("Ag+AAQgBgPAEgWQAwAQAtgFQAOgBAIAGQAJAIgCANQgCANgJABIgUgEQgagHgSAFQgXAHgRAXQgJgUgBgSg");
	this.shape_2252.setTransform(161,267.8);

	this.shape_2253 = new cjs.Shape();
	this.shape_2253.graphics.f("#95237B").s().p("AgpANQgLgSADgkQAUAUAYgBQAXAAAhgSQgNAWACAWIAEAkIgmABQgigFgNgXg");
	this.shape_2253.setTransform(123.4,251.7);

	this.shape_2254 = new cjs.Shape();
	this.shape_2254.graphics.f("#932174").s().p("AgHAlIACgJIgIAEQgagGgGgWQgEgKACgfIAiAAIALACQAzARgBAdQAAATgVACQgfAEgDACg");
	this.shape_2254.setTransform(91.9,112.5);

	this.shape_2255 = new cjs.Shape();
	this.shape_2255.graphics.f("#220819").s().p("AgUAiIgYgSQgOgMAAgOQACgJALACQAGAAAPAFQAZAFgLgkIAsgDIgDAbQABAOAQAFQgLAMAKANQAMARAAAEIgRABQghAAgdgNg");
	this.shape_2255.setTransform(187.2,185.7);

	this.shape_2256 = new cjs.Shape();
	this.shape_2256.graphics.f("#220819").s().p("AgKAvQgSACgIgBQgcgBAKgqQAGgPASgMIAegUQAGADAXgJQASgHALAPQgWAGgJAEQgPAHAZAZQAPAQgPANIgaAUQgHgFgOABg");
	this.shape_2256.setTransform(161.8,157.3);

	this.shape_2257 = new cjs.Shape();
	this.shape_2257.graphics.f("#95237B").s().p("AAfBjQAUg6gRgWQgRgThOgRIAagUQAPgNgPgPQgZgaAQgIQAJgEAVgFIAhAJQAHAdgMAUQgNAVAYATQAXARAKAiQAKAjgNAXQgFAKgHAAQgGABgGgLg");
	this.shape_2257.setTransform(169,164.2);

	this.shape_2258 = new cjs.Shape();
	this.shape_2258.graphics.f("#932174").s().p("AgJA2Qg4gkgIg9IAcgLIAPANQACAQAMADQAGACAQgBQAsgMAGABQAVADgOAvQgBAFAEAKIAIAQIg4AGQgNgbgOAagAATAFQgCAEABACQABACADADIAGAFIAEgFQADgEAAgCQgBgCgLgLIgEAIg");
	this.shape_2258.setTransform(140.2,173.7);

	this.shape_2259 = new cjs.Shape();
	this.shape_2259.graphics.f("#95237B").s().p("AAsAiQgLgDg1gIQgogGgXgMQgNgFgEgGQgHgIAEgKQAFgOAKAEIAQAIQAIAAA3AMQAlAJAagNQAQgIAOAGQAQAHAFAVQgLAOgTAIQgNAFgKAAIgIgBg");
	this.shape_2259.setTransform(209.4,251.9);

	this.shape_2260 = new cjs.Shape();
	this.shape_2260.graphics.f("#912071").s().p("AgEAeQg1gDgaABQAHgiAjgPQAjgPAsANQAJADAcACQATAHgUAeQgdALgrAAIgGAAg");
	this.shape_2260.setTransform(232.4,279.6);

	this.shape_2261 = new cjs.Shape();
	this.shape_2261.graphics.f("#95237B").s().p("AAIBYIAAg+IgUAWQgLAJgOgEQAEgJgEgRIgIgdQgEgiAzABQAGAAgBgJQAAgJgHgFIgNgHQgIgEAGgLQAGgMAIAEIAMAJQAIAEAJgDIAPgHIADADIgUCFIgCAWQgDALgLAGg");
	this.shape_2261.setTransform(47.6,25.1);

	this.shape_2262 = new cjs.Shape();
	this.shape_2262.graphics.f("#220819").s().p("AAOBCQghgRgIgCQgOgDgEgOQgEgQAMgOQAXgXgHgPQgGgOgegIQAIgOATgBIAeAAIgHAUQAjAPALArQARBDADAEIgMACQgPAAgSgKg");
	this.shape_2262.setTransform(146.4,147.7);

	this.shape_2263 = new cjs.Shape();
	this.shape_2263.graphics.f("#8F1E6E").s().p("AgmBHIgNgDQAUhPgNhEIBAgBQAUAegRAiQgJAUAJAKQAHAJAXAFQgBAMgSAHQgSAHACANIgvAOQgCgHgHgDg");
	this.shape_2263.setTransform(185.6,169.4);

	this.shape_2264 = new cjs.Shape();
	this.shape_2264.graphics.f("#8C1D69").s().p("AgYBfQgHgYANgWQANgWgRgDQgZgEgDgFQAmgKAFgfIAAg9IAAgYIALAAIAYgYIgBAZQgCAVAOAYQAAASAMAHQgDAGgQBUQgLA4gZAeQgRgdgDgMg");
	this.shape_2264.setTransform(42.3,49.9);

	this.shape_2265 = new cjs.Shape();
	this.shape_2265.graphics.f("#942278").s().p("Ag1AGQgJgXgggHQAKgbAVgFQAQgEAcAJQAIACANAKQANAGALgNQAGABAKAXQAJATAWgNQAHgEAGAMIAHAVQAFAKgKABIgQACQgIAFgCAJIgBARIhtABQAAgmgFgOg");
	this.shape_2265.setTransform(264.1,276.7);

	this.shape_2266 = new cjs.Shape();
	this.shape_2266.graphics.f("#8F1E6E").s().p("Ag7A7QgQgBANgfQADgIgQgIQgSgJACgOQAfABARgIQAYgLAHgcQALACAXAGQAUAEAOgMQAaAOAHAaQAFASgCAiIg8AQQgiALgagFQgRADgJAAIgFAAg");
	this.shape_2266.setTransform(119.8,123.9);

	this.shape_2267 = new cjs.Shape();
	this.shape_2267.graphics.f("#8C1D69").s().p("AhSBXQgNgGgGgMQATgeACgGQAEgVgcgNQAHgbATgYQAPgSAagXIAPABIAEAiIAGAhQADANAIgBQADgBAKgIQASAOAOAGQASAHASgBQAFAUAUAAIgBAvIgwgRQgdgKgRgKQgmgWgOAPQgLALABAoQABADgGANQgRgDgIgEg");
	this.shape_2267.setTransform(170.9,119.1);

	this.shape_2268 = new cjs.Shape();
	this.shape_2268.graphics.f("#95237B").s().p("AiBA3QADghASgQQASAFAWgJQAMgEAYgNQAjAPAsgDIAngJQAWgHARgRIgxAAQgbAAgOgNQgQgHgBgNIAEgbIABgMIANAAQgBAWARAIQAFACAaAFQAEACAVgGQAQgEAKALQgFALAMAIIgBAwQgjAIgiAoQguA1gKAIIgEgVQgBgDABgEIABgNQABgHAJgMQAIgKgDABQgNAEgjgNQgegLgRAPIgYAAQgLgDABAMQAEAcgFANQgHAUgdAEQAFgLAFgqg");
	this.shape_2268.setTransform(188.5,190.7);

	this.shape_2269 = new cjs.Shape();
	this.shape_2269.graphics.f("#932174").s().p("AgdA6QgcgcgOhTQAOgpA0ALQAZAGAlABQAMANACAQQACAQgIANQgQAXAFAdQACASALAiQhFgBgbgbg");
	this.shape_2269.setTransform(90.6,208.6);

	this.shape_2270 = new cjs.Shape();
	this.shape_2270.graphics.f("#912071").s().p("AhqBAQAAgKgCgGQgMgdAHgTQAGgVAdgOQARgHAAgaICMgNQACAMgCAbQADAVAeAAIAEAVQgJAGgmgEQgfgCgMAYQgBADgIAFQgFAFAHAHQAEADAMAGQAIAGgJAMQgNATgWgNQgQgFgHgCQgNgGAGgTQAEgKgEgHQgDgIgJgCQgLgDgEAKIgGAPQgGAIgKASQgLAPgQABIABgSg");
	this.shape_2270.setTransform(40.6,137.8);

	this.shape_2271 = new cjs.Shape();
	this.shape_2271.graphics.f("#942278").s().p("AgkA4IgPgCIgEgjQgCgWANgWQghASgYAAQgYABgUgUIgNgIQgIgFAAgEQgCgLAKgBIAQgCQAcgNAqAKIBEAPQAUACArgDQAqgDAWACIAgABQASACgHANQgEAHgDAuQgBAfgagBQgQgBhFAMQgSADgRAAQgbAAgVgKg");
	this.shape_2271.setTransform(133,250.2);

	this.shape_2272 = new cjs.Shape();
	this.shape_2272.graphics.f("#912071").s().p("AiMBHQACgjgEgSQgIgZgZgOQgCgVgUgJQAGgRAKADQAGACAMAIQAMAUASADQAQADASgMQATgMAQgDQARgDAVAHQAPAFAQgEQATgFALgOIBBAoQAmAUAjgCQAdANgFAVQgBAGgUAeQgTgYgdgBQgQAAglAKQgaAHgPgBQgVgBgRgOQgYgUgbAaQgiAfgrAAIgIAAg");
	this.shape_2272.setTransform(143.1,120.2);

	this.shape_2273 = new cjs.Shape();
	this.shape_2273.graphics.f("#912071").s().p("Ag0B3QgMgFgBgSQgDgEgRhDQgLgrgkgPIAHgUIABgBQALABAGgHQADgEAEgMQAMgBAWgSQAUgRAQABQgBAMgGAZQAAAUAeACIADAMQADAGAIgBQAAAAABAAQABAAAAgBQABAAAAgBQAAAAAAgBQABgIgGgDIgMgDQACgYAcgPQAigRAFgOIAbANQAPAJAFANIAYAXQgDAGgSAIQgPAHAAANQADAXgTAPQgYAPgKAKQgPAKgFAGQgKAKAKAQIgcAVQgTAMgFAPQgUgBgHgDg");
	this.shape_2273.setTransform(158.9,145.5);

	this.shape_2274 = new cjs.Shape();
	this.shape_2274.graphics.f("#912071").s().p("AAcCQQgGgJgPgIIgYgNQgcgSAHgjQACgIgKgDIgTgBQgQABgMgNIgUgYQgNgeAFgVQAFgZAegOIACAFIADgDIgFgCIALgvQAbABAQgOQAHgGAGAAQAIAAADAIQADAHgEAHQgEAGgIABQgQADgFAEQgJAHABAOQACARAOAEQAFACAUAAQANABAfAFQAbABAPgWQAFgHAGgCQAHgCAGAFQAJAGgDAJIgIAPQgKAQgbAOQgeAQgJALQACAFARAFQAOAFgBAPQgBALAIABQAIABAKgGQAGgDAMgPQALgKAKARQAIANgHANQgHANgSAFQgUAGgCADQgFAGAVAOQALAHgKAIQgOALAAAEQgVAMgVAAIgGAAg");
	this.shape_2274.setTransform(239.2,167.8);

	this.shape_2275 = new cjs.Shape();
	this.shape_2275.graphics.f("#932174").s().p("AArC7QgcgFgHgwQgIg4gcgnQgdgng0gbQg/gggHgnQgIgmArgyQAfAIAGAOQAGAPgWAYQgNAOAFAQQAEAOAOADQAIACAiARQAZANATgFQACASAMAFQAGADAUABQgLAqAdABQAIAAARgBQAQgBAGAFQBPAQARAVQARAVgUA6QgagbgXACQgYACgRAiQgIAPgKALQgLAMgIAAIgBAAg");
	this.shape_2275.setTransform(155,160.3);

	this.shape_2276 = new cjs.Shape();
	this.shape_2276.graphics.f("#912071").s().p("AhCC7QgOgCgHgMQgIgNAGgPIAOgYIAnhBQAVgnABggQABgSgDgHQgEgNgPgFQgPgEgGAOQgHATgGADIghhDQAggNAKgCQAYgFAYAJIgVgvIALgjIAWABQAJADgIATQAUAEAbgLQAjgPALgBQgHAcgXALQgSAIgfgBQgBAPARAJQARAIgEAIQgMAfAQABQAJABAVgEQgCANAJAfQACAagoABQgGAAAFATQAFAUAKAKQAQAOAKAYIAPAqQAEAMgFAJQgCADgLALQgKAKgIgGIgNgNIgQgSQgKgJgKAAQgNgFgGgBQgMgBAIAYQAJAegvAKQgMACgIAAIgGAAg");
	this.shape_2276.setTransform(109.1,136.7);

	this.shape_2277 = new cjs.Shape();
	this.shape_2277.graphics.f("#942278").s().p("AiQATQADgDAUgEQAPgDABgLQABgLgLgHQgPgHgGgFQgfgWASgRIASgOQAKgHACgHQAOgGAegIQAWgMgIghIAYAAQAaAbArAUQAJAMAMAeQANAZAYADQAQAqAGALQAQAbAdAJQgNAbgbgDQgqgFgDABQgrANgTARQgXAWgCAngAg5hLQgPADgKALQgMANABARQAEA4AvAUQAQAHAGgGQAEgFABgQQgIgMgBgRIgDggQgFgWgDgFQgGgMgMAAIgEAAg");
	this.shape_2277.setTransform(256.5,222.5);

	this.shape_2278 = new cjs.Shape();
	this.shape_2278.graphics.f("#932276").s().p("AguCjIgBgOQADgVgCgGQgEgOgTgBQgmAFgSgYQgMgSgDglQgEg6AAiOQAAgHAHABIALAAQAHAOAGAhQAKAbAjAEQgPgaAKgKQAIgJAaABQADgCAEADIAAAMQgQAWAJAlQALArgEAPIgCABQgPgCgKAIQgJAHgBAOQgBAOARAHQAWAIAFAIQADAGAGgJQAFgHADgKIAjgJQAWgGAOABQAIAAARAKQAOAGAKgPQAIgNgJgPQgMgSgDgKIAAgvQAQgIALABQAOAAABAQQABAeAHA8QABA0gcAjIgZgBQgPABAFAYIAAAXQgLAMgNgFQgOgKgHgDQgcgJgQAFQgVAFgKAaQgHgDgCgIgAgmBOQACAIAOAGQABAAAEgDIAGgEQgBgJgFgDIgLgCIgCAAQgKAAACAHg");
	this.shape_2278.setTransform(258.3,256.7);

	this.shape_2279 = new cjs.Shape();
	this.shape_2279.graphics.f("#932276").s().p("Ah2CqQgggegGgUQADgCAggEQAUgDABgSQAAgegzgSIgMgBQAFgXAUgBIAiABQAMAPAFgMQADgJgGgDIgOgDQgCgDAIghQAGgWgjABIAAgYIg7g6QACgVANgIQALgHAVABQAGAGAHATQAJAMAQgPQAIgIAUgPQAQgPAAgTQADgYARAFQAZAIACgBIAAAXQABAiAgACQADAGAIADQAFACAKAAQAWAigZAkQgUgegIgFQgSgMgZAWQgCACgJAAQgJgBgCABQgHACgagJQgTgGgHAOQgJASAUAAQAZAAAAAOQAEApAkAJQAUAGAsAEIATBCQALAgAjANQAjANAfgPQATAKADAUQgPAMgUgDQgXgHgMgCQgLACgjAOQgbAMgUgFQAIgSgKgEIgWgBIgKAjQg0gIgUA5QgFgXgfgcgAgsiiIgEACIADAHQADAFADABQACABAEgCIALgEIgKgHIgGgEIgCAAIgEABg");
	this.shape_2279.setTransform(106.8,104.3);

	this.shape_2280 = new cjs.Shape();
	this.shape_2280.graphics.f("#8F1E6E").s().p("Ag9CIQgggcgTgJQgNgngIgQQgPgcgZgQQgOgKgHgEQgMgIgMAGQgNAGAEAOQAHAUgCAFIgKAAIgYgXQAagzg9gTIgMgLQAGgNAAgDQgCgoAMgLQAOgPAmAWQARAKAdAKIAwARQADAUADAFQAGAMARgGQAhgNApAJQAZAGAtAQQgFAhAdARIAxAdQAFAFgBATQgBAQAMAEQAPAFAPgIIAZgSQAUgNAIggQAJglAJgLQAQgDAVAOQAbARASAEQgiAKgXA3QgVAygnADQgCAYgBAEQgGAKgVgQQgGgFgOgHQgOgGgEgFQgqgngeASQgPAJgfAwIAAAAQgKAEgLAAQgUAAgUgNg");
	this.shape_2280.setTransform(195.5,136.1);

	this.shape_2281 = new cjs.Shape();
	this.shape_2281.graphics.f("#932276").s().p("ACjDMQgSgPAIgXQAOgZABgNQglgNgQgBQgcgCgMAlQgFAPgggJQgMgCAGgQQAOglgSgOQgOgLgkABQgLgbgWAAQgTAAgKASQgRAjgQgKQgRgUgJgIQgIgIgLgOIgSgZQAGgLAVgBQAXAAAJgJQhCgkgbhHQgHgSADgHQAFgHAUAGIARAEIAmAIQAXAFANgBQAngDAIg5QABgFAMgHQAOgGAFgEQAOBUAbAcQAbAbBGABQgLAPAJAuQAIAuAQADQAlAIAQAnQAZA7AEAFQgNABgMAZQgKAUgQAAIgFAAg");
	this.shape_2281.setTransform(85.8,223.6);

	this.shape_2282 = new cjs.Shape();
	this.shape_2282.graphics.f("#912071").s().p("ABPFcQgLgCgRAAIgdgBIABgQQACgJAIgFIAQgCQAKgBgFgLIgHgVQgGgMgHAEQgWAMgJgSQgJgXgGgBIAAgXQAYAAAKgXQAbgjgBg1QgGg9gCgeQAAgQgPAAQgLAAgPAIIgNADQgGADACAIQABADAGACIAKAEIAAAYQgQABgNgRQgRgUgIgDQgQgGgLABQgOACAHAPQAQAjgQAJIgoAGQAEgPgKgrQgJgjAPgWIALgLQARgNgOgMQgQgPABgGQACgnAYgVQATgSArgNQADgBApAFQAbAEANgcQgdgJgPgbQgGgKgQgrIAWAGQANADAJABQALABAFgEQAHgFgIgLQgKgPgBgFQgCgKAPgGIAVgJQAMgEAKAIQASAOgHAdQgNAyAVAlQAIANgDAJQgEALgVgJQgIgDgFAHQgEAJgDADQgKAKgEALQgEANAIAHIAlAlQAXATAcgHIAAC4QAABtACBMQABAmgLANQgKAMgXAAIgRgBgAhmh1IAEACIABgFIgEgCQgCAEABABg");
	this.shape_2282.setTransform(268,247.8);

	this.shape_2283 = new cjs.Shape();
	this.shape_2283.graphics.f("#932276").s().p("AhtEpQgMgRgKARIgPABIgKgKIgCgaQgHABgBAFIgCAKQgJgGgBgKIgCgTIABgnQAwgEgYgqQgEgnAngUQAggDAHgFQAGgFgKgHQgugjAbgMIAagJQAQgGAEgIQAAAeATAMQAOAIAdACQgFALgKADIgRAFQgIAFACAKIADAQQgBAGAEADQAFADACgDQAOgPAbABQAhABAKgFQAZgMABgLQABgKgWgSQgtgmg1AOIADg3QAXgBABgXQgQgggIgpQgGgdgFgxQAMgBAGgCQAJgEAIgIQAhgnAzggQAlgYA+geIAAHSQgHACgOgOQgMgMgMAKQgLAJAKANQALAOgCACQgCAGgHAzQgDAkgdAUQgGADgrAHQgeAFgDAcQgDAYgRAKQgMAGgbABQgrgUgbgbgAAeg4QgFABgCACQgGASAGAOQAGAOAVAOQAEgaAAgKQgBgSgPgJIgDgBIgFABg");
	this.shape_2283.setTransform(263.6,176.9);

	this.shape_2284 = new cjs.Shape();
	this.shape_2284.graphics.f("#932276").s().p("AhYFOQgPgHABgYIAAgwIgFgTIAEgNIABABIgBAAIABAAIAAAAQAMgTAEgiQAFgqAFgOQALAAAXgFQAUgDAHAGQAfAdgBgTQgGgcAFgDQAKAPABADQADAQAEAFQAGAIAPgEQAHgCAHgFQAIgFgBgDQgCgNgLgLIgWgSQgVgSgEAgIgigBIgMgjQACgEAegWQATgQgBgUQgZgLgjAGQgnAKgUABIgCgKQgCgHgGACQgJABgHAJIgLAQQgXgTghAGQgmALgTACIhBABQgEggAOgtIAWhLQASAJAgAbQAfAVAfgLQACAHgFAUQgFARAHAMQADgBANgUQAIgOAQASQAFAGAHABQAHAAAFgHQAJgNgSgRQgJgKgRAAQgTACgJgBQAfgwAPgJQAegSAqAnQAEAEAOAHQAOAHAGAEQAUAQAGgKQACgEACgXQAmgDAVgyQAXg4AjgLQgTgDgbgSQgVgOgPADIALgvQAVgQASARQAaAWAGABIALAAQAGALARAAIAqAwQAYAcASASQAPAPACAIQACAKgSALIgYAEQgNADAIATQAHARAOgDQAIgBASgJQA0gSgDAxQgdgIghAFQgYADglAMQgPAFgBAKQgBAJAMALIgMAuQgdAOgGAYQgFAVAOAfQgTAEACANIAGAYQgCAOAHAhQABAbgiAKQgIADAFAOQACAIAJAPQgLAQgSAFQgOAFgXgBQgVgDgJACQgRACgFAUIgVAEQgQgPgIAHQgFADgGATIgBASIgNABQgNAAgHgDgAg+DCQgHALgLAIQgHAFgPAGQALAOARgBIAegHQAOgDAFgKQAFgJgIgNQgGgKgMAAQgLAAgFAJg");
	this.shape_2284.setTransform(212.8,160.2);

	this.shape_2285 = new cjs.Shape();
	this.shape_2285.graphics.f("#807F7F").s().p("Az/UoQgigBgHghIfpgDQAbgBA0ADQAwABAfgMQAmANA7gBIBhgCIBugCIAdABQARAAALACQAkAFAOgQQALgNgBgmQgChMAAhtIAAi5IgBvIQAEgYgHg5QgGg0AJgeIABpIQABgFgBgGIAAmkIAEgaQAeAIAEAaQACAPgDAhMAAAAmOQAABKgSASQgTAThKAAg");
	this.shape_2285.setTransform(153.5,154.1);

	this.shape_2286 = new cjs.Shape();
	this.shape_2286.graphics.f("#932174").s().p("AgWBvQgUgrACgfIgEguQgDgcASgSQAIgIgFgHQgIgIgDgFQgcg+AvgjQABAcAhATIgLAiQAAAHADAUQADARgCAMQgSBUAuA+QAQAUgGAiIgrAYQgDgSgXg0g");
	this.shape_2286.setTransform(18.9,75.4);

	this.shape_2287 = new cjs.Shape();
	this.shape_2287.graphics.f("#942278").s().p("AgRCwQAUgQgXgSQgYgSAOgPQAQgQAAgQQABgRgQgTQgPgSAIgbQALggACgQQAEgVAAgKQABgSgJgLQgTgWgEgeQgDgSACgnQAUAIALAVQAFAKAIAdQAHAbALgHQAGgEAMgNIAOBSQAJAyAAAgQABA3gTAXQgRATAEATQADALAQAWQgPAKgFARQgDALAAAVQghgTgBgbg");
	this.shape_2287.setTransform(18.7,39.8);

	this.shape_2288 = new cjs.Shape();
	this.shape_2288.graphics.f("#942278").s().p("AAAgFIADAHIgDAEQgDgGADgFg");
	this.shape_2288.setTransform(9.1,180.4);

	this.shape_2289 = new cjs.Shape();
	this.shape_2289.graphics.f("#95237B").s().p("AgCgBQAAgEAGgDIgGAQIAAgJg");
	this.shape_2289.setTransform(9.3,93.8);

	this.shape_2290 = new cjs.Shape();
	this.shape_2290.graphics.f("#932276").s().p("AgugUIBdAAQgPApgTAAQgUAAgngpg");
	this.shape_2290.setTransform(231.7,11.7);

	this.shape_2291 = new cjs.Shape();
	this.shape_2291.graphics.f("#912071").s().p("AglgIQAlgVAEgIIAuABIAKAiQADASgMAPIgNAAQgfgVgLABQgMABgqAaQgHggAcgOg");
	this.shape_2291.setTransform(176.4,13.4);

	this.shape_2292 = new cjs.Shape();
	this.shape_2292.graphics.f("#8C1D69").s().p("AgDBWQgHgBgZgLQgTgJgPACIAAgWQAOgCAHgKQAIgIAAgMQACgfANgLQAOgNAeAIQANADAGgLQAFgKgCgNQgCgPAKgDQAFgCANAAIACACQABAlgGAMQgKAWgkABQgPAAgLALQgMAMgCASQgDAPAIAJQAGAKAQgBQAJAAADAEQACADgEAGQgDAFgGADQgFACgDAAIgBAAg");
	this.shape_2292.setTransform(16,131.1);

	this.shape_2293 = new cjs.Shape();
	this.shape_2293.graphics.f("#8F1E6E").s().p("AAEA/QgHgdgFgKQgLgVgUgHQgFgSAXgVQAVgWgFgSQAWAPAXgPQABAMgJA/QgIAtARAdQgNANgGAEIgEABQgIAAgGgVg");
	this.shape_2293.setTransform(17.6,18.1);

	this.shape_2294 = new cjs.Shape();
	this.shape_2294.graphics.f("#95237B").s().p("Ag4BjIAAgXIAEgEIgFgIIABiiIAVAAQgGAsAMANQAMANAtgBQAGAAANgDQAJAAABAPQgFALgTAEQgUAEgGAJQgDAEgIAHQgHAHADAJQACALAJACQAHACAMgBIAAAvg");
	this.shape_2294.setTransform(14.7,173.4);

	this.shape_2295 = new cjs.Shape();
	this.shape_2295.graphics.f("#8F1E6E").s().p("ABHA0QgWgdgugFQhDgIgHgCQgVgIgKgJQgKgJgGgSIAAAAIBYAMIAqgYQAWAqAWgPQAXgcAMgIIAHA1QAGAeAPATQgXANgMAAQgJAAgEgGg");
	this.shape_2295.setTransform(22.4,96);

	this.shape_2296 = new cjs.Shape();
	this.shape_2296.graphics.f("#8C1D69").s().p("AgsBRQgPgVABggQAEgkgBgTQAUADgDAQQgDASAGAFQATgSgIgdQgKgpABgHIBcAAIAAA4IAAAAQgLAGgBASQgWAIgSAcIgdAtg");
	this.shape_2296.setTransform(36.7,17.8);

	this.shape_2297 = new cjs.Shape();
	this.shape_2297.graphics.f("#912071").s().p("AgTAtQghgPgOACQgSACgGgUQgFgYgDgLIgBgLIAAgMICXAAQgDAbAVgCQAagDAEAIIgWAvQgNgZgQgIQgSgKgIAWQgMAhgWAAIgIAAg");
	this.shape_2297.setTransform(198.5,14.2);

	this.shape_2298 = new cjs.Shape();
	this.shape_2298.graphics.f("#912071").s().p("AgdBDQgOgCgOgdQgHgDgBgcQAAgUgZADQAAgDAOgWQAKgQgPgOICLAAQACACgFAPQgEAKAPABIANgHQAIgGAEANQACAHgGAEQgEADgLADQgqAMgcAxQgPAdgOAAIgCgBg");
	this.shape_2298.setTransform(130.2,16.4);

	this.shape_2299 = new cjs.Shape();
	this.shape_2299.graphics.f("#942278").s().p("AghAOIgBgLQAAgFgLAEQgbgNgUgBQgZgBgWAPIABg3IDSAAQAKAfANAWQAQAcAdAag");
	this.shape_2299.setTransform(56.6,15.1);

	this.shape_2300 = new cjs.Shape();
	this.shape_2300.graphics.f("#932276").s().p("AAOBmQgLgEgFgLQgSgigxAEQgHgBgRAIQgOAHgJgGQgDg6AvggQAcgUBDgfQgXgJgSAFIgeALQgMAHgHACQgLAEgGgIQgIgKAJgLQANgQABgCICjAAQAOAOgJAPQgPAXAAADQAagEAAAWQAAAbAHADQgBARgLAGQgWgXgagBQgZgBgZARQgXARAVAOQAbARgHALQgCADAMAQIAAALIgDAAQgLAAgHgCg");
	this.shape_2300.setTransform(112.6,20.1);

	this.shape_2301 = new cjs.Shape();
	this.shape_2301.graphics.f("#7E1957").s().p("AhEGIQAGgigQgUQgwg+AThVQADgMgDgRQgEgUABgHQARAKAaAEQAXAEALgEQAggKgTgTQgZgZAGgMQANgZgPgJQgJgFgbgCQgQgWgDgLQgEgSARgUQATgXgBg2QAAgigJgxIgOhTQgQgdAHguQAKg/gBgMIB0AAQgBAIAKAoQAIAegTASQgGgEADgTQADgQgUgDQABATgEAkQgBAhAPAVQAAALAOAWQANAVgFAPQALAfAAAWQABAcgRAXQgGAIAEALIAIASQgLACgLgPQgMgPgLAEQgCASABA3QABAsgIAaQgFARAPAHQAKAFAFgHIAGgPQAUg2AChAQAlAFAGgYQABghACgPIAXAAIABA9QgGAhglAKQADAEAZAEQAQADgMAVQgNAXAGAXQAEANARAcQgDAGgHAsQgEAegTAPQgDgDgagUQgOgMgFgOQACANgLAhQgLAgAeAPQgCAqgFAZQgIAjgRAbQgLAIgYAcQgFAEgGAAQgQAAgQgfg");
	this.shape_2301.setTransform(30.5,51.9);

	this.shape_2302 = new cjs.Shape();
	this.shape_2302.graphics.f("#932276").s().p("ACVD1QAAgQgLgFQgHgDgRABIgXAAQgDgGgHgnQgFgbgUgKIAAgYIABglQABgVAEgPQAFgRgLgIQgJgHgQACIgmgBQgXAAAEANQAKAdgPAEQgUgBgJACQgyAOgVgDQgjgGgLgxQgBgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgHgBQgMgUgUgIQgRgGgaAAQgggBAFgUQADgMAKAGQAMAGABgBQAtgTAOgmQAFgMAJgHQALgIALAHQANAJgIAIQgNAGgDAFQgIAPAAARQABAQAIAaQAPgyAwgIQAOgDAbgCQAZgDAOgHQAJADASgOQAPgNAMALQAEADADALQAFAJAKgIQAJgHAEgJQAEgLgIgIQgNgMABgVQADgYgCgLQgOADgJARQgKASgGAEIgjgDQgVgDgPANQgNALgPgIQgPgJgBgVQgLgZgDgNQgGgWAdgMIFxgBIAQAAQAJADAEAIIABBzIgEAaQiEACg8hfQgEgHgEgCQgDgCgGACQgHAEgCAJQgGAbAeAVQAHAFASAEQAPAFgDAPQgCAMgPgBQgTgBgDACQgUARAMAWIATAkQACARAEAEQAGAIAPgFQANgEAEgNQACgFABgVQACggAGgGQAKgNAjANQAHADAhAYQAXASAVgFIABBzIgdgLQgRgDgIATQgIAQANAKIAZANQADADAVAMIAAAuQgpALgWAJQggAPgUAYgAh1AAQgXAAAEAQQALAfAcgDQAVgCABgUQgFgPgMgEQgGgDgLAAIgIAAg");
	this.shape_2302.setTransform(252.9,34);

	this.shape_2303 = new cjs.Shape();
	this.shape_2303.graphics.f("#932276").s().p("AibFaQgDgIgHAAQgFABgGAHIgVAAIAAkBQAPgCASAJQAZALAIABQADABAHgDQAFgDAEgFQADgGgCgDQgDgEgIAAQgRABgHgKQgHgJADgPQACgSALgMQAMgMAPAAQAkgBAKgVQAGgMAAglQAMgHAFgFQAJgJgBgMQgSgDgFALQgDAGgBARQgNAAgFACQgKADACAPQACANgGAKQgGALgNgDQgfgIgOANQgMAKgCAgQgBAMgHAIQgIAKgNACIAAmZIAGgRQACgHAGABQAHASAKAJQAJAKAWAIQAGACBFAIQAuAFAVAdQAKAOAmgVQACAcACAJQAGAUAOAMQAqAlAeBDQARAmAeBOIiNANQgBgcAfgTQAqgaAIgMIgkAFQgSADgLAKIgUASQgMAHgLgLQgNgOAQgJQATgLgBgIQghgIgHABQgHACgHASQgRAjAQAWQAQAWAuADQAAAagSAIQgcANgHAWQgFATAKAdQACAGAAALIgBASIAAALQg7gSguAKQAEALAXAJQAVAHgBARIgiBFQgjAXgLAgQgHAVgEACIgBABQgGAAgJgUgAhsj0IgQAFQgYAIAAAVQABAMAHAaIAfgZQATgPgGgVQgDgLgIAAIgBAAgAAJj1QgDACABAFQABACAEADIAFAEQAOABgDgKQgDgHgJgCIgCAAQgDAAgCACg");
	this.shape_2303.setTransform(28.8,128.9);

	this.shape_2304 = new cjs.Shape();
	this.shape_2304.graphics.f("#942278").s().p("AABCEQgHgNgRgEQgTgDgJgDQgBgfgFgLQgIgUgjALQgKADgFgNQgGgMAQgHQARgIAAgVQAAgYAIgGQgSADgXgPQgbgRgLgCQgSgCgHAMQgBADAAAFQAAAGACABQA2AigfAJIgeAHQgQAEAAAIQgwABAFAvQAHANAOgDQALgCgJgJQAMgXAVgMQAVgMAUAKQAUAJgPAQQgUATAEAJQABACAGAGQgRANgcAIIgwAOQgGgLgSgBQgKgagKgOQgOgUgWgLQgegPgQAAQgWAAgTAZQgEAHgLACQgOACgPgIIB1h/QACALAEAGQAGAIAIgFQANgHAegNQAYgNAHgWQAMgPgDgTIgKgiIBHgBIgBAMIABAMQAEAKAFAaQAGAUARgDQAPgCAhAPQAdAHAOgoQAHgWATAKQAQAJAMAYIAWgvQgEgIgaACQgVACADgbIDpAAQAmAqAVAAQAUAAAOgqIA6AAQgeALAGAXQAEANAKAZQACAVAPAJQAPAIANgLQAPgNAVADIAiADQgDAHgSAUQgOAQAAAPQgOAIgYADQgcACgNACQgxAIgOAyQgJgaAAgQQgBgQAJgPQACgFANgHQAJgHgOgJQgLgIgLAJQgJAGgEAMQgOAmguATQgBABgMgHQgJgFgDAMQgFAUAgAAQAaAAAQAHQAVAIAMAUQgGAMgSAAQgfAXgRAJQgdAQgcgBQABgNgBgGQgBgLgNABQgHABgCAKIAAARQglAbgbAAQghAAgZgmgAC+BLQgSABAAAQQAAANATgBIAKgHQAHgEABgFQAEgNgUAAIgDAAgACMgkQgBACACAEIAEALQAKgNABgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAIgCgGQgMAHgBACgAENhrQgJAEgEAMQgBAFAEACQAEADAHgBIAGgGQAFgEABgEQACgGgFgEQgCgCgDAAIgFABg");
	this.shape_2304.setTransform(206.5,26.6);

	this.shape_2305 = new cjs.Shape();
	this.shape_2305.graphics.f("#942278").s().p("AhFHvQgHgPgphBQgegwgJgkQgPAEgFAUQgGAVgRAHQgKjvADh2QAEjJAziSIAegiQASgTAOgMQAUgSgBgPQgCgQgWgOIgOgsIDfgBQgBACgNARQgJALAIAJQAGAIALgEQAHgCAMgGIAegMQATgFAXAJQhEAggcATQgvAhADA6QAJAGAOgHQARgHAHABQgCAOARAaQAOAYgGASQgPgBgNAFQgKAFgQALQgVAQgIAlQgKAqgMANIghgMQAAgRgEgIQgGgLgRACQgRADABAKQABAHAGAOQgQAkAYgDQAfgFACADQABAPgJAIQgEADgRAHQgYAJgFAEQgOAKABAQQAEAeAmAUQAoAWATA0QATAzgSArQAQgBAggIQAbgEAPAMQAJAHgHARQgDAJgKATQgBABgZgIQgRgFgEAYQgFADgnAHQgaAFgKAUQgVgBgLAHQgOAIgBAVQgNAJADANQACAFALARQAVAeggAPQApgJAaACQAigBgGAXQgIAhACADIAAAMIghgBQgUACgFAWgAAym4IACAFIACAEQADABAHgEQgCgJgCgBIAAAAIgKAEg");
	this.shape_2305.setTransform(94.1,59.2);

	this.shape_2306 = new cjs.Shape();
	this.shape_2306.graphics.f("#942278").s().p("AjNEkQgbgIgSgTQgRgSgFgbQgEgWgNgHQgKgFgVABIAAgXIBQAAIAAgvIAbgeQAPgTgHgVQANgBAHgIQAHgIgIgHQgbgXgBggQAAgHAJg1IAjhFQAfgTAYAJQAdAKArAAIBGgBQAPAkAhAAQATAAAogIQgUgNgggGQglgFgSgEQgTgXgpAAIgpAAQgWgCgQgKIAAgLQAQgCALgOQALgTAGgIIAGgPQAEgJAKACQAJACAEAIQADAIgDAKQgGASAMAGQAHADAQAEQAXANANgTQAIgMgHgGQgMgFgFgEQgHgHAFgFQAIgFACgDQAMgZAfADQAlAEAKgGQAZAAAFAjQAGAhATAeQAPAXAdAcQAPAPAFAcIAIAvQAKAnAMAVQAQAdAcAQQAIAEAEAIQAFAIgCAKQghgJgRAUQgKALgLAkIAAAAQgCABgYgIQgRgGgEAYQADAOgOAuQgMAlATAXQgJAOgGABQgQADgGgZIgXhmQgKALgWAPQgNAOASAZQAIAMgOAMIgYASQgJALgIgJIgLgSQgOgVgLgDQgOgEgQAUQgIAJgIgEQgDgBgMgMQgSgTgSAAQgUAAgKAbQgIAVgQAHQgMAGgXABIgMALgAi8CZQgKABgqAKQAHApAhgDIAdgFQASgDAJAEQAIAEAIgDQAKgEAAgKQAAgJgRgLQgTgNgYAAIgKABgACVBjQABAEAFAEQAFAFAFABQAHACAGgFQAGgEABgIQACgPgUAAQgVABADAPgAh/ASQgSABgDARIgFAdQAFgGAXgCQARgBACgPQABgFgIgKQgIgIgGAAIAAAAg");
	this.shape_2306.setTransform(41.1,166.9);

	this.shape_2307 = new cjs.Shape();
	this.shape_2307.graphics.f("#E0E0E0").s().p("Az4WKIg7gLQhPgQgHheIAkAAQAGAqAbATQAYASAtAAMAnuAAAQAyAAAdgdQAdgdAAgyIAAl2MAABghtQAAgxgQgaQgTgfgugIIAAguQA/ANAcApQAeApAGBXIAAAjMgABAlhQABA6gFAcQgIAvgZAhQgfArg5AMQgdAGhKAAQmzAB3zAAIm7ABIgEAAQgZAAgfgGg");
	this.shape_2307.setTransform(152.9,153);

	this.shape_2308 = new cjs.Shape();
	this.shape_2308.graphics.f("#95237B").s().p("AjrGQQgIgDgDgHQgBghgigCIAAgXQAKgTADgKQAHgRgJgHQgPgMgbAEQggAIgQABQASgqgTg0QgTg0gpgWQgmgUgEgeQgBgRAOgKQAFgEAYgJQARgHAEgDQAKgIgBgNQgCgEggAFQgYAEAQglIAkAAIAiAMIABAXQAAAOgQAUQgRAUgCALQAKAIAZgLQAVgIAGAQQAEAKgIAWIgQAtQAbgXAdAAQAVAAAeANQAGADAQABQAMACgEAQQgDAMgJAHQgKAHgOgEQgUgGgOALQgHAFgRAVQAJAFASgDQARgCAJAGQAhAWAWgGQAYgIAJgpQAAgDAHgDIAMgFQAJARAWAAIAjAAQACABADgFQAEgEABgEQAAgCgCgEIgFgGQgJAFgagHQgXgHgLAQQgSgngLgLQgVgVgkAHQgXAFgZgfQgMgQAigUQAbgQgEgZQgMgbgEgPIAjgjQAmgTgEgnQAMgJgBgTQgCgYADgGIAAgMQAGgSAcgSQAegSAGgQQALgGABgRQAPAdANACQAQACAQgeQAdgyApgMQAKgDAEgDQAHgEgDgHQgEgNgIAGIgMAHQgPgBADgKQAFgPgBgCIGYAAQgEAIgmAVQgcAPAHAfQAqgZAMgBQAMgBAfAUIhRAkIh1CAQAPAIAOgCQALgCAEgHQATgZAWAAQAQAAAeAPQAWALAOAUQAKAOAKAaIgZAAQgPAAAFAYQAAAFAHAUQAGAPgLAIQgiAZgKAfQgJAeAMAqQACAJABAOQADAKAQAAIAOABQAIACABAIQACAKgGAHQgGAHgIADQgLAEgQADIgcAGIgagRQgQgLgJgIQgKgKgxgRQgngOgKgdQgBgDgPAAIhOgDQgtgCghAFQgZAEgNAIQgUAKgJAXIBCAAQAbAAAoASQAiAPAJAMQANAUgXAfQgIAMACAPQABAKAGATQgfgHgMABQgXAEgJAbIgWgEQgNgCgDgFQgSgegbgBQgTAAgiAPQgdANgaAAQgXAAgPAMQgMALgIAXQgSAxABAjQgJgBgFgBgAjIAsQgEADgBACQgBAGAEAEQAEADAGgBQADAAADgDIAIgGQgMgKgCAAQgDAAgFACg");
	this.shape_2308.setTransform(133.8,49.8);

	this.shape_2309 = new cjs.Shape();
	this.shape_2309.graphics.f("#95237B").s().p("AnwIJQgCgFAAgUIACukQAVgCAKAGQANAHAEAWQAFAaARATQASATAbAIIgCAjQAAADgQAYQgLAQASAHQAQAGAMgTQAFgIALgeQACgGAAgKIAAgSIAMgMQAXgBAMgFQAQgIAIgVQAKgbAUAAQASAAASATQAMAMADACQAIADAIgJQARgUAOAEQALADAOAVIALASQAIAJAJgLIAYgSQAOgMgIgMQgSgYANgOQAWgPAKgMIAXBnQAGAZAPgEQAGgBAJgNQgTgYAMglQAOgtgDgOIAZAAQAPgBAHgLQAWACATgUIAfggQAQAKAUAaQAWAcANAKQAQAMAMgEQAKgDAWgVQgSAtAPAqQAJAZAdAyQADgNALhlQAHhBAWgnQAWAVAIBcQAIBcgQAqQgkgBgbgGQgzgLgOApQgGAEgOAGQgLAHgBAFQgJA5gmADQgNABgXgFIgmgIIgRgEQgVgGgEAHQgDAHAGASQAbBHBDAkQgJAKgXAAQgVABgGALIASAZQAKAOAIAHQAJAIARAUQAQAKASgjQAJgRAUAAQAVAAALAaQgLAOAEAVIAHAjQgSAggdAPQARAMAQgDQAHgBATgJQAEACAFAYQAEARAVgHQACAXAWAAIAAAAQAFAWAKAGQAMAIAUgNQAdgSAMgKQAWgSAHgYQATADALgXQAMgZAOgBQASAhgWAnQgfA2gCALIgFAbQgCAPAHAMQANAYgGAXQgGAVgUAMQghAUgJAiQgFASAAAvIAAAoItfAEQgRgBgEgMgAlOGKQgLAEACAOQAGAsAZgCQANgBAKgLQALgMAAgQQABgOgLgFQgGgDgRgBIgXADgAkMlGQgFABgEAFQgFAEgBAFQgCAGAFAEQAEADAHAAQANAAABgOQAAgHgDgEQgDgEgEAAIgDABg");
	this.shape_2309.setTransform(58.7,229.4);

	this.shape_2310 = new cjs.Shape();
	this.shape_2310.graphics.f("#0F0109").s().p("AOxVJQAUgfgTgHQgcgCgJgCQgtgOgjAQQgjAOgHAjIlrAAQABgCAdghQATgVgKgdQgOAPghAVQgbAVgEAcIteAAIAAgoQgBgvAFgSQAKgiAggUQAUgMAGgVQAHgXgOgYQgGgMACgPIAFgbQABgLAfg2QAXgngTghQgEgFgZg7QgQgnglgIQgQgDgIgvQgJguALgPQgLgigCgSQgFgdAQgYQAIgNgCgQQgCgQgMgNQAQgqgIhcQgIhcgXgVQgVAngHBBQgMBlgCANQgdgygJgZQgPgqASgtQgWAVgKADQgMAEgQgMQgNgKgWgcQgVgagQgKQADgEgDgEQABgJgFgJQgEgHgHgEQgdgRgQgdQgLgVgKgnIgIgwQgGgcgOgOQgdgcgPgXQgUgdgFghQgGgkgZAAIgEgWQADgRgNgQQgQgRgHgKIABAAQgehOgRgnQgehDgqgkQgOgMgGgUQgCgKgCgbQgQgUgFgeIgHg2QARgaAIgkQAFgYACgqQAOgCAHgTQAHgVAKgDQATgOAEgfQAHgrADgGQAagfALg3QAQhVADgHQAPgGgFgSQARgRgIgcQgJgkACgKQALgGADgMIACgWIAUiFQAGAAADgEICvAoQgdgagRgcQgNgXgJgfIDCAAIAOAtQgJAJgGAUIgJAiQgPAlgwgNQABALAQAKQAPAIgCAMQgzCSgEDKQgDB1AKDwQARgHAGgVQAFgUAPgEQAJAkAeAwQApBBAHAPQgDAeAEAMQAGAVAbAHQAAAFAGAAIgBABQAHAUAgAeQAeAcAGAXQAAAFACAFIAhBCQAGgDAIgSQAFgPAPAFQAPAEAFANQACAIAAARQgBAhgWAnIgnBAIgOAZQgGAOAIANQAIAMAOADQAJABAQgDQAwgLgJgdQgIgYAMABQAHAAAMAFQALAAAKAKIAPARIANAOQAJAFAKgKQAKgKACgEQAFgJgDgLIgPgqQgLgXgPgPQgLgJgEgVQgFgTAGgBQAngBgBgZQgKggADgMQAaAFAjgLIA8gRQAvADAlgiQAbgZAZAUQARAOAUABQAQAAAagHQAkgKAQABQAeAAATAZQAGAMANAFQAIAEARADIAMAMIgFAJQgEACgwALQggAHgQARQgQgBgUARQgWASgNABQgVABgCAVIgBABIgeAAQgSABgJAOQgrAxAIAmQAHAnA/AgQAzAbAdAoQAcAnAJA4QAHAwAcAFQAIABAMgNQAKgLAIgPQARgiAYgCQAXgCAaAbQAGALAGAAQAHAAAFgLQANgXgKgjQgKgigXgSQgYgTANgVQAMgUgHgdIgigJQgKgQgTAIQgXAJgHgEQgKgQAJgKQAGgGAPgKQAKgKAYgPQATgPgDgXIBpAjQAEgcgfgLQgggMAAgSQABgEgGgUQgFgPAOgHQALgGANAIQAHAFAOALQAZAPAPAdQAIAQANAnIgWBKQgNAtAEAhQANBEgVBRQgBAQADALQAEAOAMAJQAGgHAAgMIgBgTIAvgOQALADAIAPQAJAQAGAEIgBALIgtADQAMAkgagFQgPgFgGAAQgLgCgCAJQgfABgDAYIgEAqQgSAQgDAhQgFAqgFAMQAdgFAHgUQAFgMgEgdIAKgJIAYABQgBAPADAGQAFAKAOABQAGA6A5gRQALgIAug1QAhgnAjgKQAAAYAOAHQAKAEAXgCIACgSIASgEQALgDAFgHIAXgEIBcAAQA3ABgdgvQgJgPgDgIQgFgOAJgDQAigKgBgbQgIghACgOIgFgYQgCgNASgEIAUAYQAMANAQAAIATABQAKACgCAJQgHAiAcASIAZAOQAPAIAGAIQABAfAWAHQAJAJAEAZQADAZAMAIQgBAegOAQQgNAIgSAAIgfgDQgOgCgGAKQgDAGABAGQABAGAEACQANAGAZAQQAWAIASgXIACASQABAKAJAGIAWAVQABASgIAHQgIAIgSgDQgRgCgCAEQgCAEAJAVQgBAHgLAIIgRANQgTARAfAXQAGAEAPAHQAMAIgBALQgCAMgPADQgUAEgDACICCCMQgCAGARAPQANAMgQANQgFgDgGACQgEgEgDACQgegWgKgFQgXgMgYAFIgLAAQgHAAAAAHQAACNAEA8QADAlAMARQASAYAmgFQgCAXAYATIABAPQACAHAHAEQAgAGAJAZQAFAOAAAmIhhACIgMAAQgyAAgigMgABdS/QABATAJAUQARgXAYgHQATgFAaAHIATAEQAJgBADgNQACgOgJgIQgIgGgOABQgvAFgvgQQgEAWAAAPgAFuSAQATAKAoANQgYglgNgNQgagZgjgFQAIAmAfATgAkJPWIgQACQgKABACALQAAAEAIAFIANAIQgDAjALAUQANAXAjAFQACALADAYQAFATAUAAQAVgBACgTQgBgXABgLQAhAPAzgIQBFgMAPABQAaABABgfQADgvAEgHQAHgNgSgCIgggBQgVgCgqADQgrADgVgCIhEgPQgSgFgQAAQgUAAgQAIgAIZQIQgEAKAHAIQAEAGANAGQAXAMAoAGQA2AIALADQAMAEATgIQATgIALgOQgFgWgQgHQgOgGgQAIQgaANgmgJQg3gMgIAAIgQgIIgEgBQgHAAgEALgAKgOyQAZALAiAEIgzggQgggRgjgHQAcAcAfANgAmNIsQAWAHAhAWQAfAPAhgLIg1geQgRgJgSAAQgPAAgQAGgAIUJIQAKALALgDQAEgBAPgJQAGgEgBgFIgEgJQgMgWghAEQgaADgMAgQAIAKAOgHQAHgEAFAAQAFAAADAEgABnJAQALAIATgKQAbgPAGgBIg5giQgaAkAUAQgAJwHpQADAIALACIgRgTIADAJgAiCDYQgGACADAGQACAEAHADQAIA/A4AjQAJAGgEAmQgCAdAiABQAXATALgDQAMgDgCghIgCgWIAFgOIgBgWIgIgRQgEgJABgGQAOgvgVgEQgFgBgsANQgEglghAQIgPgMQgFgKgLAAQgIAAgKAFgAsRp+QgIABgFAFQgGAGACAHIAGAWQAGAMAMABQATABACgdQgDgBgHgOQgFgLgLAAIgCAAg");
	this.shape_2310.setTransform(145.3,146.2);

	this.shape_2311 = new cjs.Shape();
	this.shape_2311.graphics.f("#95237B").s().p("AghGaQgUgGAAgRQAEgUAAgIQgCjsgBnWQgMhVBTANIAMAEQAGASgWAVQgWAWAFARQgCAnACASQAEAfASAWQAKALgBARQAAAKgEAWQgCAQgMAgQgHAcAOARQARAUgBARQgBAPgQARQgOANAZATQAXARgUAQQguAjAbA+QADAFAIAIQAFAHgIAIQgSASADAcIAEAvQgCAfAUArQAYA0ADASg");
	this.shape_2311.setTransform(13.9,51.3);

	this.shape_2312 = new cjs.Shape();
	this.shape_2312.graphics.f("#FCFCFC").s().p("AzuW8QhsAAgxgwQgzgxAAhtMAAAgniQAAgsACgJQAGgdAZgOQABHXACDsQAAAIgEAUQAAARAUAGIAAAAQgHgBgCAHQgGACgBAFIABAKIAANTQgDAGADAGIgCPTQAAAVACAEQAEAMARABQAHBeBOAQIA8ALQAhAGAbAAIG7gBQXzAAGzgBQBKAAAdgGQA4gMAggrQAZghAIgvQAEgcAAg6MAABglhIAAgjQgHhXgdgpQgcgpg/gNQgEgJgJgCIgQAAMgoOAABQgXAQgXgPIgMgEQANgaAcgGQAIgBAqAAMAnoAAAQBsAAAxAyQAwAxABBsQAFVCgFSaQgBBxguAuQguAuhyABQpWACqYAAQpbAAqSgCg");
	this.shape_2312.setTransform(152.4,153);

	this.shape_2313 = new cjs.Shape();
	this.shape_2313.graphics.f("#FEFEFE").s().p("A3vXsQgKgLABgkQAC8bgDxhQAAglANgLQAMgJAkAAQFHABR2AAQSdAAEngCQAiAAAKAMQAJAKgBAiQgCceADRiQAAAngNAKQgLAJglAAQ4DgC14ADQgmAAgLgOgA2o1UQgZAPgGAdQgCAIAAAtMAAAAniQAABsAzAxQAxAwBsABQVlAER2gFQByAAAugvQAugtABhyQAFyagF1CQgBhsgwgwQgxgzhsAAMgnoAAAQgqAAgIABQgcAGgNAaIgUgCQg/AAALBKg");
	this.shape_2313.setTransform(153.5,153);

	var maskedShapeInstanceList = [this.shape_2049,this.shape_2050,this.shape_2051,this.shape_2052,this.shape_2053,this.shape_2054,this.shape_2055,this.shape_2056,this.shape_2057,this.shape_2058,this.shape_2059,this.shape_2060,this.shape_2061,this.shape_2062,this.shape_2063,this.shape_2064,this.shape_2065,this.shape_2066,this.shape_2067,this.shape_2068,this.shape_2069,this.shape_2070,this.shape_2071,this.shape_2072,this.shape_2073,this.shape_2074,this.shape_2075,this.shape_2076,this.shape_2077,this.shape_2078,this.shape_2079,this.shape_2080,this.shape_2081,this.shape_2082,this.shape_2083,this.shape_2084,this.shape_2085,this.shape_2086,this.shape_2087,this.shape_2088,this.shape_2089,this.shape_2090,this.shape_2091,this.shape_2092,this.shape_2093,this.shape_2094,this.shape_2095,this.shape_2096,this.shape_2097,this.shape_2098,this.shape_2099,this.shape_2100,this.shape_2101,this.shape_2102,this.shape_2103,this.shape_2104,this.shape_2105,this.shape_2106,this.shape_2107,this.shape_2108,this.shape_2109,this.shape_2110,this.shape_2111,this.shape_2112,this.shape_2113,this.shape_2114,this.shape_2115,this.shape_2116,this.shape_2117,this.shape_2118,this.shape_2119,this.shape_2120,this.shape_2121,this.shape_2122,this.shape_2123,this.shape_2124,this.shape_2125,this.shape_2126,this.shape_2127,this.shape_2128,this.shape_2129,this.shape_2130,this.shape_2131,this.shape_2132,this.shape_2133,this.shape_2134,this.shape_2135,this.shape_2136,this.shape_2137,this.shape_2138,this.shape_2139,this.shape_2140,this.shape_2141,this.shape_2142,this.shape_2143,this.shape_2144,this.shape_2145,this.shape_2146,this.shape_2147,this.shape_2148,this.shape_2149,this.shape_2150,this.shape_2151,this.shape_2152,this.shape_2153,this.shape_2154,this.shape_2155,this.shape_2156,this.shape_2157,this.shape_2158,this.shape_2159,this.shape_2160,this.shape_2161,this.shape_2162,this.shape_2163,this.shape_2164,this.shape_2165,this.shape_2166,this.shape_2167,this.shape_2168,this.shape_2169,this.shape_2170,this.shape_2171,this.shape_2172,this.shape_2173,this.shape_2174,this.shape_2175,this.shape_2176,this.shape_2177,this.shape_2178,this.shape_2179,this.shape_2180,this.shape_2181,this.shape_2182,this.shape_2183,this.shape_2184,this.shape_2185,this.shape_2186,this.shape_2187,this.shape_2188,this.shape_2189,this.shape_2190,this.shape_2191,this.shape_2192,this.shape_2193,this.shape_2194,this.shape_2195,this.shape_2196,this.shape_2197,this.shape_2198,this.shape_2199,this.shape_2200,this.shape_2201,this.shape_2202,this.shape_2203,this.shape_2204,this.shape_2205,this.shape_2206,this.shape_2207,this.shape_2208,this.shape_2209,this.shape_2210,this.shape_2211,this.shape_2212,this.shape_2213,this.shape_2214,this.shape_2215,this.shape_2216,this.shape_2217,this.shape_2218,this.shape_2219,this.shape_2220,this.shape_2221,this.shape_2222,this.shape_2223,this.shape_2224,this.shape_2225,this.shape_2226,this.shape_2227,this.shape_2228,this.shape_2229,this.shape_2230,this.shape_2231,this.shape_2232,this.shape_2233,this.shape_2234,this.shape_2235,this.shape_2236,this.shape_2237,this.shape_2238,this.shape_2239,this.shape_2240,this.shape_2241,this.shape_2242,this.shape_2243,this.shape_2244,this.shape_2245,this.shape_2246,this.shape_2247,this.shape_2248,this.shape_2249,this.shape_2250,this.shape_2251,this.shape_2252,this.shape_2253,this.shape_2254,this.shape_2255,this.shape_2256,this.shape_2257,this.shape_2258,this.shape_2259,this.shape_2260,this.shape_2261,this.shape_2262,this.shape_2263,this.shape_2264,this.shape_2265,this.shape_2266,this.shape_2267,this.shape_2268,this.shape_2269,this.shape_2270,this.shape_2271,this.shape_2272,this.shape_2273,this.shape_2274,this.shape_2275,this.shape_2276,this.shape_2277,this.shape_2278,this.shape_2279,this.shape_2280,this.shape_2281,this.shape_2282,this.shape_2283,this.shape_2284,this.shape_2285,this.shape_2286,this.shape_2287,this.shape_2288,this.shape_2289,this.shape_2290,this.shape_2291,this.shape_2292,this.shape_2293,this.shape_2294,this.shape_2295,this.shape_2296,this.shape_2297,this.shape_2298,this.shape_2299,this.shape_2300,this.shape_2301,this.shape_2302,this.shape_2303,this.shape_2304,this.shape_2305,this.shape_2306,this.shape_2307,this.shape_2308,this.shape_2309,this.shape_2310,this.shape_2311,this.shape_2312,this.shape_2313];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2313},{t:this.shape_2312},{t:this.shape_2311},{t:this.shape_2310},{t:this.shape_2309},{t:this.shape_2308},{t:this.shape_2307},{t:this.shape_2306},{t:this.shape_2305},{t:this.shape_2304},{t:this.shape_2303},{t:this.shape_2302},{t:this.shape_2301},{t:this.shape_2300},{t:this.shape_2299},{t:this.shape_2298},{t:this.shape_2297},{t:this.shape_2296},{t:this.shape_2295},{t:this.shape_2294},{t:this.shape_2293},{t:this.shape_2292},{t:this.shape_2291},{t:this.shape_2290},{t:this.shape_2289},{t:this.shape_2288},{t:this.shape_2287},{t:this.shape_2286},{t:this.shape_2285},{t:this.shape_2284},{t:this.shape_2283},{t:this.shape_2282},{t:this.shape_2281},{t:this.shape_2280},{t:this.shape_2279},{t:this.shape_2278},{t:this.shape_2277},{t:this.shape_2276},{t:this.shape_2275},{t:this.shape_2274},{t:this.shape_2273},{t:this.shape_2272},{t:this.shape_2271},{t:this.shape_2270},{t:this.shape_2269},{t:this.shape_2268},{t:this.shape_2267},{t:this.shape_2266},{t:this.shape_2265},{t:this.shape_2264},{t:this.shape_2263},{t:this.shape_2262},{t:this.shape_2261},{t:this.shape_2260},{t:this.shape_2259},{t:this.shape_2258},{t:this.shape_2257},{t:this.shape_2256},{t:this.shape_2255},{t:this.shape_2254},{t:this.shape_2253},{t:this.shape_2252},{t:this.shape_2251},{t:this.shape_2250},{t:this.shape_2249},{t:this.shape_2248},{t:this.shape_2247},{t:this.shape_2246},{t:this.shape_2245},{t:this.shape_2244},{t:this.shape_2243},{t:this.shape_2242},{t:this.shape_2241},{t:this.shape_2240},{t:this.shape_2239},{t:this.shape_2238},{t:this.shape_2237},{t:this.shape_2236},{t:this.shape_2235},{t:this.shape_2234},{t:this.shape_2233},{t:this.shape_2232},{t:this.shape_2231},{t:this.shape_2230},{t:this.shape_2229},{t:this.shape_2228},{t:this.shape_2227},{t:this.shape_2226},{t:this.shape_2225},{t:this.shape_2224},{t:this.shape_2223},{t:this.shape_2222},{t:this.shape_2221},{t:this.shape_2220},{t:this.shape_2219},{t:this.shape_2218},{t:this.shape_2217},{t:this.shape_2216},{t:this.shape_2215},{t:this.shape_2214},{t:this.shape_2213},{t:this.shape_2212},{t:this.shape_2211},{t:this.shape_2210},{t:this.shape_2209},{t:this.shape_2208},{t:this.shape_2207},{t:this.shape_2206},{t:this.shape_2205},{t:this.shape_2204},{t:this.shape_2203},{t:this.shape_2202},{t:this.shape_2201},{t:this.shape_2200},{t:this.shape_2199},{t:this.shape_2198},{t:this.shape_2197},{t:this.shape_2196},{t:this.shape_2195},{t:this.shape_2194},{t:this.shape_2193},{t:this.shape_2192},{t:this.shape_2191},{t:this.shape_2190},{t:this.shape_2189},{t:this.shape_2188},{t:this.shape_2187},{t:this.shape_2186},{t:this.shape_2185},{t:this.shape_2184},{t:this.shape_2183},{t:this.shape_2182},{t:this.shape_2181},{t:this.shape_2180},{t:this.shape_2179},{t:this.shape_2178},{t:this.shape_2177},{t:this.shape_2176},{t:this.shape_2175},{t:this.shape_2174},{t:this.shape_2173},{t:this.shape_2172},{t:this.shape_2171},{t:this.shape_2170},{t:this.shape_2169},{t:this.shape_2168},{t:this.shape_2167},{t:this.shape_2166},{t:this.shape_2165},{t:this.shape_2164},{t:this.shape_2163},{t:this.shape_2162},{t:this.shape_2161},{t:this.shape_2160},{t:this.shape_2159},{t:this.shape_2158},{t:this.shape_2157},{t:this.shape_2156},{t:this.shape_2155},{t:this.shape_2154},{t:this.shape_2153},{t:this.shape_2152},{t:this.shape_2151},{t:this.shape_2150},{t:this.shape_2149},{t:this.shape_2148},{t:this.shape_2147},{t:this.shape_2146},{t:this.shape_2145},{t:this.shape_2144},{t:this.shape_2143},{t:this.shape_2142},{t:this.shape_2141},{t:this.shape_2140},{t:this.shape_2139},{t:this.shape_2138},{t:this.shape_2137},{t:this.shape_2136},{t:this.shape_2135},{t:this.shape_2134},{t:this.shape_2133},{t:this.shape_2132},{t:this.shape_2131},{t:this.shape_2130},{t:this.shape_2129},{t:this.shape_2128},{t:this.shape_2127},{t:this.shape_2126},{t:this.shape_2125},{t:this.shape_2124},{t:this.shape_2123},{t:this.shape_2122},{t:this.shape_2121},{t:this.shape_2120},{t:this.shape_2119},{t:this.shape_2118},{t:this.shape_2117},{t:this.shape_2116},{t:this.shape_2115},{t:this.shape_2114},{t:this.shape_2113},{t:this.shape_2112},{t:this.shape_2111},{t:this.shape_2110},{t:this.shape_2109},{t:this.shape_2108},{t:this.shape_2107},{t:this.shape_2106},{t:this.shape_2105},{t:this.shape_2104},{t:this.shape_2103},{t:this.shape_2102},{t:this.shape_2101},{t:this.shape_2100},{t:this.shape_2099},{t:this.shape_2098},{t:this.shape_2097},{t:this.shape_2096},{t:this.shape_2095},{t:this.shape_2094},{t:this.shape_2093},{t:this.shape_2092},{t:this.shape_2091},{t:this.shape_2090},{t:this.shape_2089},{t:this.shape_2088},{t:this.shape_2087},{t:this.shape_2086},{t:this.shape_2085},{t:this.shape_2084},{t:this.shape_2083},{t:this.shape_2082},{t:this.shape_2081},{t:this.shape_2080},{t:this.shape_2079},{t:this.shape_2078},{t:this.shape_2077},{t:this.shape_2076},{t:this.shape_2075},{t:this.shape_2074},{t:this.shape_2073},{t:this.shape_2072},{t:this.shape_2071},{t:this.shape_2070},{t:this.shape_2069},{t:this.shape_2068},{t:this.shape_2067},{t:this.shape_2066},{t:this.shape_2065},{t:this.shape_2064},{t:this.shape_2063},{t:this.shape_2062},{t:this.shape_2061},{t:this.shape_2060},{t:this.shape_2059},{t:this.shape_2058},{t:this.shape_2057},{t:this.shape_2056},{t:this.shape_2055},{t:this.shape_2054},{t:this.shape_2053},{t:this.shape_2052},{t:this.shape_2051},{t:this.shape_2050},{t:this.shape_2049}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(8,8.2,273,273), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006EA5").s().p("AA9B4IgZgSQgQgKgHgJQgKgBABgFQgOgGgRgNIgdgVQgqgbg/gtQgGgEgNgBQgMABgHgHIgBglQgBgOAOgHQAEgBABABIACgBIAJgFQAFgDAHABIABACQACgDAFgBIAJgBIAAAAQACgEAOgHQAPgEAVALIAoATQAYAMAPAIQACAEgCACQAEgBAFAAQAUAGAkAUIAQAJIARAHIAvAXQALAEAMAKQAEABAEAGQAEAFAFABQAMgCAGAJQAJABAAADQABADgFAFQgCACgLAHQgIAGgCAFIgFAFQgDACgEABIgCgBIgEADIgHAHIgCACIgIAGIABACQABAGgHAFIgLAIIgdATQgJAHgIAAQgIAAgIgIg");
	this.shape.setTransform(225.6,71.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006EA5").s().p("AkhCrIgmAAQgXgBgPgGIAFhwIAEgBIABgTQgDgaAHgmIAAgzIAEgBIABgjQAFgHAUgJIABgBQATgQAHAAQAHAAAVAQIARAMQAKAIAFAGIAIAGQAUAVAcgOQAvgVAugOQANgKAKAHQATAEAWAJIARAEQAJAEAIgDIBngyQAGgDAPAAIDlADQgTAIgfAEIgOADIgOADIgPADQgXACAHAPQAGASgXAHIiNA1IgBAAQgjARggAJQgrAUgbAHIgyATQgLAHgLABIgyAWIhLAaQgUAFgHAMQgGAKACAQQABAGAAAMIAAARQABAKgGAEQgEACgIAAIgGAAg");
	this.shape_1.setTransform(279.1,122.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006EA5").s().p("AjKCNQgEgBgIgOQgLgJgNgRIgVgcQgFgFAEgEQAOgOABgWQgBgYACgMIAAgmQAMgNAtgeIBAgvQAJgHAOAHIBfAwQALAGgBAKIgFAlQAAAMAPgBIAOAAQApgEAlAZQAHABABAEIgBAIIgDAUQAIAEAMAAIAgAAQAHAAAEACIA9ABQAQACAIALQAFAIgBACQgBADgNAAIhxgBQgZAAgUAKQgOAHgyAWQgYAUgbgMQgogTgvAXIgWAHIgEABIgrAQQgPAFgFAAIgCAAg");
	this.shape_2.setTransform(278.7,96.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006EA5").s().p("AFVCIIilgWIgGAAQgXgCgJgEIgNgBQgWgBgSgDIgFgBQgcAAgrgKIgLAAQgHgBgEgDIgRAAIg4gHQgjgDgVgFIgLAAQgHgBgFgDIgLAAQgGAAgEgCQgWABgKgGQgSABgdgEQgjgGgLgBIglgEQgPgCgCgFQgCgFAJgJIALgKQgCgJAGgJIAMgRQAJgNACgHQAEgLgEgJQgKgbAIgWQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAOgIAjgFQAIgEAOgCIAXgCIAogFIARAAIAEADIABgBQAWABAKAFQAKAEAHAOIABATQAEABAGgCIAKgCQARgGAHAJIALAKQAGAHACAFQAFAMAUgBIA1AAQBHgIAtAoQAGAAADADIAaAAQAHgEAIACQADAAAKAFQAMAEAJALQAGAFAIAMIAaAMIAFABQASgGAagBIAAAAQAIgDAMAAIAVAAIAEAAIABBHQAEAJAAAMIgBAXQAAAIgJABIgPgCg");
	this.shape_3.setTransform(165.4,39.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006EA5").s().p("Ag7CmIAAgJIgDgBQgFgDAEgDIAAgeQAAgRgEgMIgBg6QgCgOgSgPIgdgYQgKgKgHgEQgagRAagPIAHgJQAFgGAEgCIAMgJQAHgGAHgBQAEgBAEgGQAFgGAHAAIAAABQAFgGAHgDIAAAAQgBgEAHgDIAEAAIAPgNQAFgHAMgGIAOgLQAIgEALAJQADAEAIACIANAEQAagGAHAVQAGABAKAGQAKAGAHABIAbALQAQAHAAADQAAACgQAJQg4AthBAqIgIAGQgDAFAAAEIgBBNQADAOgGANQgFAKgNANQgGANgIAGQgCAGgHABIgOgBg");
	this.shape_4.setTransform(250.3,90.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006EA5").s().p("ABdCIIgPgBQgWgGgIgFQgFgEgKgEQgLgFgEgDIgLgHQgFgFACgFIgHAAQABgDgEgCIgGgFIAAABQgmgHgIgXIABAAQgFAAgDgDIgDAAQgegJgggZIAAgCQgIACgJgEIgOgHQgggNgYAMQgRALgVAAIgCgBQgDAHgQAHQgGgCADgEQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQgIgDgCgGIgBgLIAAhBQAAgmgDgbQgBgKAJgBIARABQAJgBAFAHIAEABIAAAEIABABQAEgBAEACIAQAIQAJAFADAGQAUAFABALQAJgDAHAHQAJAHAGAAIAbgCIAAACIA1gCQATAJgCAPIAEAMQAEAGALAAQAKgFACAAQAbgDAjACIAeAIQADABACADQACADAAAFIABAIQgBAHAHAIQADAFAAAJIAAAJIgBAAIACABIADAHIAGAWQAEANANAGIABgBQAFgGAOgEQAEgBAFACIAAAAIAAgLIgCgCQgDgFADgFIACgDIAAglQgFgEAFgFQgFgEACgEIAEgIIAHgHQAGgLAMgCQAFgDAFADIABAAIAUABIAHgCIAIAAQAFAAAEABIANAAIAIABQALgCAJAHQAcAFALAZQALAWgNAXQgIAPgbAWQgiAdgxAbQgGAHgQAAQgNALgPABIgFABQgNAAgKgHg");
	this.shape_5.setTransform(234.4,57.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006EA5").s().p("AgPB8IgkgUQgUgMgNgKQgGAAgGgEIgKgGIgKgDQgFgCgCgEIAAgCIgFgCIAAgDQgJAAgFgGQgPgKgXgCIgpgBQgDACgCgCIgIgBQADggAAgrIABhMQAAgOAPADIAfADQASABALAEICSAOQAJABAAAFQAJgDALABIATACIBEAHQAoAEAbAFIA1AEQAJACgBAHQgCAOABAkQABAfgDASIAAADQgEAGgJADIgQAFQggAKggAPIgFAAIgBAAIgRAAIAAADIgbANQgFAHgIgBIgJAEQgLAIgWAHIgiAOIgEABQgEAAgHgEg");
	this.shape_6.setTransform(144.5,59);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006EA5").s().p("AhvCaIgIgFIgKgEIgWgNQgVgPgjgVIg6giQgPgJABgFQAAgFAPgHIA/gbQAGgGAIAAIAGgDQADgDAEABQATgDAJgMQAQgMAZgIIAHgCIAIgDIAJgDIAEgCIAFgEQAGgGAKAAIAAAAIADgDQAIgFABgLQAAgNAEgEIABgsQgBgGAEgBIACgTQAOgDAUAEIAjAFQBOAJCdAUQAHABACACQADA7gDBIQgHAGgQAGIgZALIgeAOQgSAIgOAEIgBADQgGAAgHAEIgNAGIgWAKQgMAGgLADIhYAnQgEAEgIADIgPAGIgDACQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgCADgFABIgJACQgPAGgDAEQgOAHgMAAQgPAAgMgLg");
	this.shape_7.setTransform(174.4,68.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006EA5").s().p("AERDfIhVgqIghgOQgCgBgHgCQgHgBgCgDQgFgCAAgIIAAgCIgEAAIgBgJQgJgFABgGIgBgFQgGgCgBgEIgCgIIgQABQgDACgJAAQgIABgEADQgMAGgKABIgOAFQgIgBgMAEQgNAFgFAAQgJAEgOgEIgtgQQgbgJgQgIQgNAAgCgGIgCAAIgBgBQgNABgCgHQgWgDgVgLQgKgFgagRIgegWQgRgNgPgHQgNgIAAgEQAAgDANgJQAmgVAZgYQABgCAIgFQAEABAFgDIAHgFIAAgMQgGgBgBgFQAAgFgCgCQgCgEACgCIgBAAQgBgLgGgGQABgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgEgDADgEIAAgGQgGgHAHgGIALgFQAGgDABgEQANAAAMgIIATgMQADgCAGgBQAHgBADgDQAJgBALgEIASgIIAAAAQAIgHAHABQAQgKAIgDQAOgGAPAAQAIADAKAJQASARA1AiQAIAFAAADQAHACAKAKQAJAJAKACQALADAJAHIAQAOIAJANQALAAAJAHIAMALQATAOAmAZIA5AlIAGAGQAIAHgCAMIgDAUQAAAHgCAYQgFAPAAAVIACAkIACAGIgBANQAKAWgLARIgDALQgBAJgIAAQgEAAgHgDg");
	this.shape_8.setTransform(210.6,93);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006EA5").s().p("AhxDFIAAAAIgFgCQgQAAgBgIQACgKgBgFIgBgBIgCgFIABAAQgFgIgLgGIgVgMIgTgMIgEAAQgIgBgFgDQhJgngzgeQgHgEgBgEIgBgCIhFglQgGgEAAgCQgBgCAHgDIApgYIAEgBQAAAAABAAQABgBAAAAQABAAAAAAQAAgBABAAQADgEAHgCIANgEIAEgDIAxgZIgBgBQABgEAHgHQAHgGABgFQACgIAAgMIAAgVQABgJADgDQAJgQAhgIIAkgRIAagIQAPgBAegDQAagCASAFIBNAsIhAAEIgOABQgHACAAAHQAAAGAHAAIAMAAIAHABQADAAACACIAAATQAFAIgBAMIAAAUQAAAHADADQAEAEAKAAIBnACQAKAAADgFQACgCABgHQABgHAEgDQAEgDAKAAICnAEQAMAAAEAGQAoAVApAeIAQAIQADADAPAIQALAGAAAHQgBAGgKAHIgRANQgSAQgOAJIgBABQgBACgEABIgKADIgKABIggADIgSABQg7ABgdgCIgCAAIgMAAQgIAAgCAGIgCACIADADQABARgNANQgNANgYAGIgQgBQgLAAgGgCIhOABQgMABgRAAIgfAAIgCAAIgDADQgoASgEAZIABADIgBAEIgBABIAAAAQAAAJgHAAIgIgBg");
	this.shape_9.setTransform(294.8,70.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006EA5").s().p("AlKFfQAAgDAFgBIAJgBIAGgCQAKgPAAgWQgCgYAAgNIgbAAQgPgDgDgNQgPgTgGgNQgTgYgCgPQgDgWAYgRIAAgaQgOgRAagDQAPgDAEgGIAAgGIgKgQIgagSQgcgPgVAVQgPAOgQgMIgxgBQgKgDABgIIAAgOIAAgMQABgGAEgFIABgGQgCgCABgEIAEgGQAFgFAbgQIABgDQADgDAHgCIADAAQAFgGAJgDIgBgBQAFgLAPgEIAEgBQAIgHAVgKIAAgDQALgPAbgJIAGgCQAYgTAQgIIACgCQADgEAEAAIAAgCIBCgpIACgEQAbgYAlgRIAEAAIAGgDIAAgCQAPgPAJgGQAPgKASgEQAIgIAYgBIBIAAQADgEAGAAIALAAQAZACAYgQIBNgzQASgLAOAIIBuBBQBBAoApAcQADAFAKADQAeAPA4AiQAHAFACAGIABACQAIAEgIADIAAAAQgFAIgLAFIgVAJIgTAKQgPAHgFABIgHAAQgdARgSAGIgEADQgCADgEABQgKADgEAFQgFAGgLABIgFAAQgLAHgTAHIgBACQgeAYg0ASIgHAAIgOAHIgQAHQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgGACIgBAAQgNALgJgLQgKgBgQgNQgUgPgIgJQgFgFgGAFQgFAFgGACIgEABQgHAJgVAOIgBAEQgfAigbATIgEABQgBAEgHAEIgBADQgEAJgOAGIgHADQgCAEgFACIgBACQgCACgFACQgBAGgLAGIgBAEIgrApQgZAXgXAPIgFACQgGAHgFADIAAACQgHAMgOAGIgEABQgVAOARARIAFABQARALABAHQABAHgNAMIgHADIgGAIQgbAAgFgBIgDABIgFACQgKAEgEAKIgGAQIgBABQADADgFADIgjAAQgPAAAAgGg");
	this.shape_10.setTransform(110.5,101.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006EA5").s().p("AIPDdQgtgCgUgIIAAgDIgFAAIgTABQgaAAgqgIQgHgEgLAAIgTAAIgOgBQgIgBgFgEQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAAAIgMAAQgGAAgEgDIgMAAQgGAAgEgDIgLAAIgLgBIgHABIgWAAQgMAAgJgFIgBgCQgOAAgVgGIgNAAQgIgBgFgDQg0gDghgGIgPABQgUAAgIgEQgEgEgIABIgQAAIgNAAQgHgBgFgDQgEgEgIABIgNABIgQgDIhBgKIgJABQgIABgIgEIgEgDIgZgCIgYABQgtgDhagOIgngDQgXgCgOgFIgHgEQgLAAgFgCIgQgBIgIgDIgagBIgBgCIgLAAQgHgBgEgCIgWgBQgFADgEgDIgGgCIgFAAIgGgCIgFgCIgSgBQgGABgFgBIgFABQgNABgVgGQgIgBgFgDQgJgCgCgFQgCgEAAgNIgCgFQgCgEAAgEIAAgMIAAgeIgBAAIgEgEQgFgMAAgQIADgdQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQgBgLALABIARAAQAMgFAbACIACgDIAfAAQAUgHAUAHQAJAAAPAGIACgBQAKgDAMAGQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIgBgDQABgMAAghQgBgcACgQQABgDAEgBIADgHQACgFADgCIABgEIgBgCIABgCIACgJQACgFAEgDIBMAAIAAAJQAAAEgEADQgDAOATAAQAigBALADQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAGAAAEAFIAGAHIAAADIAIABQAGACAFAFIAHAJIABADQAHACAPABQAQAAAHADIAaAAQgWgfAvgVIALgGQAMgNASAAQAQABAHAEQAIAFgDALQgCAGACAHQABAEgCAIQgBAHAKABQAbACAGgQQABgDAGgFQABgGAFgIIAIgPQAAgEAEgCIA1AAIABgBQAGgBAOABQAMAAAHgCIAJAAQAJAGAAAKIgBARIgBATQgCARAbAAIAaACQAGABANgBQALgBAGAHIAtATIAeAEQALAHAMgBIBQABIgBgPQgBgJAGgGQAMgEARABIAdABQAJABAAAIQAFACgBAEQAAACgDAEIAIAHIAAAKIADABQAGgDAGABQAMABAmAAQAgAAATADIAfAAQATAAAMADIAXgBQAOAAAIAEIAEABIAAAYQAAAPACAJQACAFAHABIAUAAQAKAAAIAEIgBABIAFgBQAGAGADAGIACACIAQANQAKAHAIAEIAAACQAFAFgFAHQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgEAFIACACQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgFACgLAAIgYAAIgXAHIgEADQgEADgGACIgDADQgVAcgHAPIgEAMIgBABIAIATQAKAIgKAMIgBAFIABAAQAEAFgDAEIgHAGIgFACQgLAWgUASIABAFQgFANgPAAIgEAAg");
	this.shape_11.setTransform(70.6,22.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006EA5").s().p("AiCF+IgGgBQgEAAgDgBIgBgCQgIABgDgFQgDgGgDgDIAAABQgLgLADgNIABgCIgFgHIgCgGQgFgKABgQIAAgaIAAgQQgFgZAFgNIgCgCQgCgFAAgHIgBgMIgBgHIgLgEIgNgIIgHgEQgDgDgHgCIgLgFIgIgDIgIgFQgDABgDgDQgEgBgEgEIgHgHQgHAAgFgGQgJgBgFgGIgegNIgLgEQgGgCgBgEQgGgBgDgCIgVgJQgNgEgLAGQgFACgFAEIgHAHQgZgCgXgVIgBgEIgOgFIAAgDIg1gdQgVgJgPgOIAAAAQgHgDgBgBQgCgDAJgDIAKgGIAOgFIAEgBQAFgEADABQAFgDAOgHQANgHAFgFIANgFIAAgBIAEgEIAJgEQAEgGANgGIAUgJIAHgCIADgBIADgDQADgDAGgBQAKgCAMgLQAFgEAFAAIBvgBQB0gDAxADIAPAAQAEgBADgEIgBgIQgFgFgDgIIgGgOIAAgBQgDgFgMgFQgNgFgDgEQgUgEgLgIIgEACIhPgBIgOgBQgHgBgEgFIABgBIiOgBIgFABQgOACgHgDIgSAAIgCACQgTgCgPgLQgIgFgRgQIAAgBQgFgCgGgEIgKgIQgLgEACgMQgDgEAAgGIAAgJIAAiCQAPgDATADIAhAGIAIAAQAJAAAJADIAaABIABACQASAAA/AKIAYgBQAUAAAJADQAHAEAQAAIAQAAQAIAAAGAEQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgCACIABAAIAMAAQAHABAEACQA6ADAYAHIAFAAIAGACIABABIAIABIADgDQANgDAMAEQAFADAIABIAOAAIAGACIAEACIAMAAQAHAAAFADIAMAAQAGAAAFADIAMAAQAIAAAFADIAMABQAHAAAEADQASgBANADIANAAQArAAAZAHIAIAEQAHgBAFADIATABIAGACIACABQAVAAAHADIAGAAIAVgBQAuACAhAJQABgBABAAQABAAAAAAQAAAAAAAAQAAABAAAAIgEAEIABgBIAGAAIAOgBQAiAAAjAKIABACQAGgBAIACIADAAIALABQAJABADACIAOAAQAIAAAFADIAJAAQAFABADADIABAGIACAeQACARgCAMIACBgQABABAAABQABAAAAABQAAABgBAAQAAABgBAAIABABQADADABAIQABADAEACIAHADQAGADAMADIAAgCIAWABIABACIAGACQAAAEgJADIABABQgBAGgJACIgEABQgKAJgHADIgEAEQgUAVgaAFIgBAAQgFADgJAAIgOgBIg0ACQgiAAgSACQggACgPAGIgCADIgmAhQgYARgYAJIgBgBQAAAEgFADIgBADQgFAIgTAJIgGACQgNAMgOAGIAAAEQgGACgLAIQgKAIgIACQgCAEgNAIQgIAKgJACIgBABIgGAEQgIALgRAIIgEAEQhEA4gqAXIgFABIgHAGQgaANgIATIAAAHIgBAFIgCAFIAAAPQgCADABANQABAJgIAFIgCACQgDADgFAAQgEAAgFgCg");
	this.shape_12.setTransform(66.6,70.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006EA5").s().p("AgFgCQAIABAEAEIgJABQgFgCACgEg");
	this.shape_13.setTransform(43.9,87.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006EA5").s().p("Al9EVIgJgEQgGgDgBgDIgSgQQgIgKABgOQACgRgBgIIAAgNQABgHgDgFQgDgHAKgEIABgBIgJgIQgGgRAGgJIAAggQABgTAEgEQAFgDAaAAIBhAAIABgDIAAhMQgBgKAJAAQASgKASgDQARgNATAAQACgEAGgCIAKgEIAsgQIAKgEQAGgDAGABQAFgIANABQAEgGAOgBQAIgHAXgFIAEAAQAMgKAUgDIDMhOQAIgGAKAAIAEAAQARgNATAAIAEAAIgEgTQAAgHABgDQADgFAJgCIAcgJQARgFANgCQAtgQAWgDQAAAGAFAKQACAKgHAGIgEABIhMAmQAAADgHAFQgQAPABAIQAAAJAQAOIALAKQAcAFAMAPQALAAAHAIQAKAKADABQANAAAAAHIAkAKQAIAQgEAEQgFAFgZABIgBAWIAbAAQAGAIgBAKIgFARQAEANgWADIgIAHQgFAEgFABQgWAGgZgEQgQgCgIABQgNACgFAKQgIAEgMAAIgUgBQgJAAAAgFQABgHgBgDIgkgBQgUgBgCAPIAAAGQAFAFAJABIARAAQAcAAASAOQASAOgFASQgEAGgHgBIgMgDIgZABQgPABgJgEQgKgBgIAIQgJAJgIAAQgKAHgJgHIgQgKQgIgGgDgHQgPgHgGgMQgHgLgCgFQgEgKAMgGQAQABAKgKIAOgRQgHgHgTAAQgPgBAGgHIgFgEIgHAAQgFAAgBADIAHAHQADADgGAFQgCgFgLgCQgLgCgCgGIgKgMQgDABAAAEIgBAFQgFASgRAGIgEAHQAQAMgMAHQgHAEgJgDIgQgHQgCgBgDgEIgGgFQgEAGgLAFIgUAHQgFACgDgCIgFgFIgYghQgIgFgPAAQgRAAgIAAIgBALQABAGAHAEQALAEAHAHIAKAQQAIAEAEAJIAFAQIAFAdQACAIAMAIQAOAKADAFQAKAJgKAIQgGASgYAFIgBAAIgNAGQgOAPgNgPIgFgKIAAgjQgVgKgGATIgEAMQgDAIgGADQgTAQgVgQQgBgGgJAAIhbAAQgIAAgDAGIgEAGQgDADgFAAQgBADgFADIgIAEIgJABQgQAQARAKQAJAGABAJQAAAFgEAJIgQAcQgHAJgIAAQgGAAgHgFgAGbgFIACACIAAgCg");
	this.shape_14.setTransform(283.7,133.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006EA5").s().p("AgaDhIgdgOQgOgCgRgJIgbgOQgDgCgJgLQgHgIgMABIAJgFQgKgBgDgDQgRABgNgBIgGgCIgFgCIgwAAIgMAAQgHAAgEgDQgRAGgBgOIgBgCQgDgEAAgFIAAgKIAAgKIgEgNQgFgCgNgBQgSgCgSAAQg7AAgQgBIgCAAIgFgBQgSgGgYgVQgYgWgDgLQACgOADgGQAIgNASgDIAIgDQAMgGAQAAQAXgCAgACIAzABQAPgCAIAKIACABIA9ghQAPgHAAgLQABgMAFgDIAAgBQABgGAGAAIAKABQASACAjgBQAFABAZgEQASgDAOAFQAJADAPgHQAMgFAJgKQACgDADAAIABgBQAHgGALgOQAKgMAMgEIABgBQAFgLALgCIBYAAIAKgHQAGAAADgFQAEgHAEgBQALgWAQgKQAFgDAIAAIAOAAQAKgCgBgJQgBgKAFgCIBJAAQAUAAADADQADACgFAPIAAAmQAGAJAAAMIgBAVQAAAHgJACQgIACgKgEQgUAEgKAAQgRABgLgIIgFgUQgOgBgIAIIAAANQAHAPgUABQgLABgCAIQgCALgDACIAAARQADAIATgCQACgDAHAAIAtAAQASgGAPAGQAQAFAWAUIAJABQAEACABAEIBqAAQAHgDAMgBIATgBQANgCgCANQAEAJACANIADAVQACAIgQAEQgMACgQABIgdAAQgEAPgBAUIABAkIAAAPQgCAIgMACIgVADQgiAMgggYQgKgIgJAAQgHAAgMAFQgIACgNALQgMAKgLACQgIALgBAPIAAAbIAAALQgCAFgHACQgNAHgNgGIgBAAIgLgBQgGgBgCgFIgkgEQgWgDgMgJQgWgBgtAEIgSAAQgIAEgFAKQgFAMgDADQgCAHgHAAQgDAAgIgDg");
	this.shape_15.setTransform(336.4,88);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006EA5").s().p("ABMBjIgkgBIhrACQgNABgFgEQgEgDAAgJIgBiTIAAgHQAAgEgCgDQADgKAJgCIAEADQACADAEgCIAAAAIAGgBQAXAMAYgKIACgBIADgGIAMgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAEgBgBAHQAAAHAJgGIACgFQABgCAEAAIADAHIASAGIAGgMQADAEACAJQADAGAJgBIABAAIACgBIAAgXIARgBIgGAMQgDAHABAFIABABQAIgGAIAAIAACzQgDADgFAAQgEAAgFgCg");
	this.shape_16.setTransform(378,70.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006EA5").s().p("Ah+DvQgHgGAAgUQgDgEgCgIIgEgLQgFgQgEgHQgGgDgCgGIgCgLQgCgLgHgBQgGgCgMAGIgeAPQgSAJgNAEQgPAGgMgGIABgLQABgHgCgEQgKgJAKgIQAFgGAJAAIAfgNQAGgGALgBQAHgGALAAQAOgLgJgMQgIgIAIgFQAAgEgFgCIgGgHQgDgFAFgEQgOgOAAgRQABgHAIAAIADgBQAJgDAQABIAaAAIANgKIAWAAIAmAAIALAAIAAgCQASgGAPAHQAOAHgBANQgBAPgQAaIgGAJIAAAZIAEAEQAGAEACADIABADQAFADAAAEIARAOQAJAJAIADIAbAAQAIgCAIgIQAKgLAEgCIAAgBQgBgGADgEQAGgMgHgIIgIgGQgGgDgBgEQgCgDAAgEQgHgKARgDIACgCQABgDAHgCQAHgCACgDIAXgOQANgIAMgEQAGgBACgBQADgBABgCQACgFAGgDIAMgEIAFgCIAEAAQAEgDAEAAIAAgBIAEgIQAJgKAKgCQACgEgBgHQAAgIABgEIACgEIACgTQAAgLgFgHQgegIAJgYQACgFABgQQAAgNAGgHIACgGQADgLALgHQASgMAJgTIACgBQADgGAHgDQAGgDAIABQAGABABAEIAAAHIAAAEQACAMgCALIgBAEIgEAHIAAA+IgDAAIAAAoQAAALgBAGQgEAGgBANIAAA4QgCARALAIIACADIAQAdQAOAOgRALQgHAEgDAHIgGANQgCALgGAFQgBADACAIQgBAGgJADIAAAQQAAAKgIAFQgEAEgBAIQgCAIgDADIgNAlQgBAIgEADIknABIgEAAQgXAAgIgGgABBCxQgCgDgFgCIgHgDIgDAEIAIACIAJACIAAAAgABKCfIADgDIgPgDQADAEAJACg");
	this.shape_17.setTransform(214.5,156.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006EA5").s().p("ACDFCIgHAAQgXgUgEgbQgEgcASgVQANgQgCgFQgDgGgZgHQgHgBgUABQgRACgKgFQgSgMgTgZQgOgTgSgCQgQgCgcALQghANgTATQgYAWgkgRIgngSQgYgNAYgNQAZgOAngHQgFgJgMgNIgVgUQgGgHAAgDQgBgFAKgDIAbgRQAGgGAVgMQASgLAHgIQgcAAAMgSQAJgNgKgSIgLgUQgHgMAAgJQgDgIgJgGIgTgJIgWAAIgDACIgPAGQgJACgGgEQgFgEAHgFQAJgFABgDQgGgQgGgCQgHgCgWAIIgVALQgNAFgDgKIABAAQgQgFgQgOQgNgEgQgKIgbgQQgHgEAFgDIAKgFQAkgZA/gdIAGAAQADgBABgCQADgGAKgEIALgGIAFgBQAFAAADgEQAfgWBDggQAKgFAJAEIAsAQQAbAKAPAKQAFAFANACQAEACABADIABABIANAFIAGAAQAJAAAKAHIAEAEIAUAIQALAEALgDQAegKAUgDQADgDAHAAIACgCQACgDAHAAQAGABAIgGQANgDAGAFQAEADADAKIgBAEIgCACQANADgFAIQAFABAHAEIAGAEQACADAFABIAIABQAxATBsAwQANAGAAAQIAAAfQgBATACAMIAAARQgCAJgNAEIgJAEIg1AoIgCACIgDAEIgCABQgCADgKAKIgSAcQgHAWgBALQgDATAFAPIACABQAEABABAEIAAAEQAQAMAEAFIADABQAEACABAEIgBAFQAFALgEAIIABAEQACAIgGAGQgFAFgJAEIgPAGIgbAIIgaAIQgeAKgOAOQgGAFgFALQgGAMgEAEQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABIgBAKIAEAAIAPAQQAGAJgJAKQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgCAFgHABQgHAEgHAAQgIAAgHgHg");
	this.shape_18.setTransform(202,134.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006EA5").s().p("AhJFkQgGABgDgHQgFgGADgEIgHgEQgDgBgFgFQgEgFgFgBQgNgFgFgMIgJgGQgHAAgEgCIgDgBIgIAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAIgMAFQgUAFgGAIQgCAEgGADIgKAGIgJAJQgUAMgNgMIgGgIQgEgFgFgDQgRgNgWgDIgJgDIgKAAIgGgDIgFgCIgBgBIgGAAIgGgGIgMgUQgEgDgBgFIAAgJIgEgCIgIgEQgEgDgFAAQgBgHgHAAQgIgCAGgHIAAgQQgFgGACgKQACgMgCgFQgFgEgJgBQgLABgFgBIgNAAQgGAAgCgGIgBgBQgPgHAOgGIACgBIAAgBIACgLQgFgFACgBQABgBAFABQgBgFgFgFIgJgKQgDgEABgGIADgEIAJgHQAEgEACgEIAlgiIAkgiQAGgGAKgDQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAgBIADgDIACgEQAEgHAMgKIASgQQANgOAbgYQAegZALgNQAIgHALgEIADAAQACgJAJgCIAEgDQAJgDAIAGIAFAEIALAFIACACIAFAAQASAOATgCQAQgBAUgNIAWgKIAOgGQAJgDAFgEQA0gaBtgyQADgCAMgBIACAAIAFgCQADgBABgCIAMgEIABgBQABgEAHgEIAKgGQAGgFAGgBIADgBQACgDAKAAIADgCIAYgNIAogPIADgCIAGgDQA+gfBMgiQASgIAHADQAIACAEAQIAAAEQADACAAAHIABABIADAEIAAACQAEACABACQABACgHACIAAABIgKANIgTAOIgcAUQgRAMgRADIgBAAIgRAMQgLAHgEAGQAHACADAFIACADQAJAEASANQARALALAEQADABAGAGQAAAGAJAAQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAIABAEAGIACACIACAAQAAABAHAGQAFADgJADIgBAAQgBADgHAEIgDABQgDAEgGACIgLAEIgCAFQgEAGgPABIgFABQgCACgOAHIgEABQgDAFgIAGIgFADQgMADgMAJIg2AcIg2AcIgJAFQgGAHgQAKQgPAKgGAGIgkAjIgJAPIAPAQQAKAJACAIQAGAAACAEQAMATgUAKIgKANIAAAaQAJACAAAIQAZAHAKAVIgXABIgGACIAAAAQgEACgNACQgLACgEAFQgEgBgFAEQgFAEgEgBIgBAGQgDACgCAEIgDAHIgBAGQgDAFgBAGIgBALQgDAHABAKQAAABAAAAQAAABAAAAQgBAAgBABQAAAAgBAAIg0AeQgPAOgUAEQgIABgNAGQgNAHgJAAQgGAHgHAAQgHAAgIgHg");
	this.shape_19.setTransform(139.8,116.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006EA5").s().p("AAAAAIABAAIgBAAg");
	this.shape_20.setTransform(230.4,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,387.4,180.8), null);


(lib.Interpolación18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006EA5").s().p("AhiBmQgqgrAAg7QAAg7AqgqQApgqA5AAQA6AAAqAqQApAqAAA7QAAA7gpArQgqAqg6AAQg5AAgpgqgAhChCQgcAbAAAnQAAAoAcAbQAcAcAmAAQAoAAAbgcQAcgcAAgnQAAgngcgbQgbgcgoAAQgmAAgcAcg");
	this.shape.setTransform(5.9,-10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006EA5").s().p("AgYFaQgDgCgDgEIgBgBIgjg0Qg6hXguhbQgWgrgKgXIAigIQAUAqAiBAQAsBPA2BPIASgcQA3hZAthXQAagyALgZQATgqAIgjIADgOIABgFIAAAAIABgUIgCgoQgPhdhAguQglgagugIIgYgCIgUABIgCAAIgbAFQgVAGgPAIQgwAYgZAnIgBABIgegSQARgcAcgXQAegXAmgOQAmgOAmAAQAhAAAnAOQA3AVAkAoQAqAxANBDQANBCgTA+QgNAngXAwQgOAegdA3Qg2Blg+BeIgBACIgFAFQgEACgFAAQgFAAgEgCg");
	this.shape_1.setTransform(7.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006EA5").s().p("AgxCQQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIAAgqQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAIBBAAQAOAAAKgLQAKgLAAgOQAAgOgKgLQgKgKgOAAIgxAAQgEAAAAgEIAAgqIAAgCIACgBIAXAAQAMAAAKgKQAKgKAAgOQAAgOgKgLQgKgKgNAAIgdAAQgGAAgEAEQgEAEAAAGIAACpIgpAAIABifIgBAAIAAhHQAAAAAAgBQABgBAAAAQABAAAAgBQABAAABAAIBQAAQAVAAATAMQATALALATQALAVAAAWQAAAXgNAVQAUAMALATQAMATAAAYQAAAXgLATQgLATgTAMQgTALgWAAg");
	this.shape_2.setTransform(-18.8,-10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-34.8,57.1,69.6);


(lib.Interpolación16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006EA5").s().p("AhjBmQgogqAAg8QAAg7AogqQApgqA6AAQA6AAApAqQApAqABA7QgBA8gpAqQgpAqg6AAQg6AAgpgqgAhChDQgcAdAAAmQAAAnAcAcQAcAdAmAAQAoAAAcgdQAcgcAAgnQAAgmgcgdQgcgcgoAAQgmAAgcAcg");
	this.shape.setTransform(5.9,-10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006EA5").s().p("AgYFZIgFgEIglg1Qg2hSgyhhQgWgrgKgWIAjgJQAUAuAiA7QAtBSA0BNIASgcQA4haAshXQAagxALgaQATgoAJglIADgSIAAgBIACgUIgDgnQgPhehAgtQglgZgugJIgYgDIgUABIgdAGQgSAFgSAIQgvAYgaAnIgBACIgegRQASgfAbgUQAegZAmgNQAmgOAmAAQAhAAAnAPQA3AUAkApQArAvAMBEQANBCgTA+QgNAngXAwQgOAfgdA2QgzBhhBBiIgBACIgFAEQgFADgEAAQgEAAgFgDg");
	this.shape_1.setTransform(7.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006EA5").s().p("AgxCQQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAIAAgqQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIBAAAQAQAAAJgLQAKgKAAgPQgBgPgJgKQgKgKgPAAIgwAAQgFAAAAgFIAAgpIABgCIACgBIAXAAQAMAAAKgKQAKgKAAgPQAAgOgLgKQgJgLgNAAIgdAAQgFAAgEAFQgFAEAAAFIAACqIgpAAIABjmQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIBQAAQAVAAATALQASALAMAUQAKATABAXQAAAZgNAUQATAMAMATQAMAUAAAXQAAAVgLAVQgLATgTALQgTAMgXAAg");
	this.shape_2.setTransform(-18.7,-10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-34.8,57.1,69.6);


(lib.Interpolación14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006EA5").s().p("AhjBmQgpgqAAg8QAAg6ApgrQAqgqA5AAQA6AAAqAqQApArAAA6QAAA8gpAqQgqAqg6AAQg5AAgqgqgAhChCQgcAcAAAmQAAAoAcAbQAbAcAnAAQAnAAAcgcQAcgbAAgoQAAgmgcgcQgbgcgoAAQgnAAgbAcg");
	this.shape.setTransform(5.9,-10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006EA5").s().p("AgYFaIgFgFIgkg1Qg6hZgvhaQgUgngMgaIAjgJQARAmAlBDQArBOA3BRIARgcQA1hTAwheQAbg1AJgWQATgpAJgkIADgSIAAgBQACgJAAgKIgDgoQgOhehBgtQglgagugIIgXgDIgUACIgDAAIgDAAIgXAFQgVAGgQAIQguAWgaApIgCABIgegRQATgeAagVQAegZAmgNQAmgOAmAAQAhAAAnAPQA3AUAkApQArAwANBDQAMBCgTA+QgNAngXAwQgOAegdA3Qg0BkhABfIgBACIgFAFQgEACgFAAIgBAAQgDAAgFgCg");
	this.shape_1.setTransform(7.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006EA5").s().p("AgxCQQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIAAgrQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIBBAAQAOAAAKgLQAKgLAAgPQAAgOgKgKQgLgLgNAAIgyAAQgDAAAAgEIAAgpIABgCIACgBIAWAAQAMAAAKgKQAKgLAAgOQAAgOgKgKQgKgLgNAAIgdAAQgFAAgFAEQgDAEAAAGIAAALIgBAAIAACfIgpAAIAAjmQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAIBQAAQAVAAATALQATALALAUQAKATAAAXQAAAZgMAUQAUALALATQAMAVAAAWQAAAYgLATQgLATgTALQgTAMgWAAg");
	this.shape_2.setTransform(-18.7,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-34.7,57.2,69.6);


(lib.Interpolación12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006EA5").s().p("AhiBmQgqgqAAg8QAAg6AqgrQApgqA5AAQA6AAApAqQAqArAAA6QAAA8gqAqQgpAqg6AAQg5AAgpgqgAhChCQgdAcAAAmQAAAoAdAbQAcAcAmAAQAnAAAdgcQAcgbAAgoQAAgmgcgcQgdgcgnAAQgmAAgcAcg");
	this.shape.setTransform(5.9,-10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006EA5").s().p("AgYFaIgFgFIglg1Qg6hbguhYQgUgngMgaIAjgJQAUAuAiA7QAuBUA0BLIARgcQA2hVAuhcQAbgzAKgYQATgpAJgkIADgSIAAgBIACgTIgDgoQgOhehBgtQglgagugIIgHgBIgQgCIgVACIgCAAIgDAAIgXAFQgVAGgQAIQguAWgbApIgBABIgegRQAUgfAZgUQAegZAmgNQAmgOAmAAQAhAAAnAPQA3AUAkApQArAwANBDQAMBCgTA+QgNAngXAwQgOAegdA3QgyBfhCBkIgGAHQgEACgFAAIgBAAQgEAAgEgCg");
	this.shape_1.setTransform(7.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006EA5").s().p("AgxCQQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgrQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIBBAAQAPAAAJgLQAKgKAAgQQgBgPgJgJQgKgLgOAAIgyAAQgDAAAAgEIAAgpIAAgCIACgBIAXAAQAMAAAKgKQAKgLAAgOQAAgOgKgKQgKgLgNAAIgdAAQgGAAgEAEQgEAFAAAFIAACqIgpAAIAAjmQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAIBQAAQAVAAATALQATALAKAUQAMATAAAXQAAAZgNAUQATALANATQALAVAAAWQAAAYgLATQgLATgTALQgTAMgWAAg");
	this.shape_2.setTransform(-18.7,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-34.7,57.2,69.6);


(lib.Interpolación10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006EA5").s().p("AgNfwMAAAg/eIAbAAMAAAA/eg");
	this.shape.setTransform(90.9,-10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006EA5").s().p("AgNToMAAAgnPIAbAAMAAAAnPg");
	this.shape_1.setTransform(-133.7,-20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006EA5").s().p("AgNOEIAA8IIAbAAIAAcIg");
	this.shape_2.setTransform(59.7,118.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006EA5").s().p("AgNbTMAAAg2kIAbAAMAAAA2kg");
	this.shape_3.setTransform(133.7,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.1,-213.4,270.2,426.9);


(lib.Interpolación8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006EA5").s().p("AjhDnQhehfAAiIQAAiHBehfQBdhgCEAAQCEAABfBgQBdBfAACHQAACIhdBfQhfBgiEAAQiDAAhehggAiYiZQhABAAABZQAABaBAA/QA/BABZAAQBaAABAhAQA/g/AAhaQAAhZg/hAQhAg/haAAQhZAAg/A/g");
	this.shape.setTransform(13.4,-24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006EA5").s().p("Ag4MSQgHgEgFgHIgCgDIhQh2QiDjHhrjPQgwhegYg3IBOgUQAqBeBRCSQBlC4B6CyIAohBQB7jCBrjPQA7h0AYg2QArhgAThSIAJgpIAAgDQADgdAAgPIgFhOIgBgMQgPhjgqhOQgvhVhMg2QhTg6hqgTIgegFIgYgCQgUAAgaAEIgcAEQgUAEgSAFQgtALgmATQhqA0g7BbIgDAEIhEgoQAqhEA8gxQBFg2BVgfQBYggBWAAQBMABBZAgQB9AuBSBdQBgBuAeCZQAdCWgtCNQgdBbgzBtQghBGhBB6Qh2DeiUDfIgDAEQgEAGgHAEQgJAGgLAAQgLAAgKgGg");
	this.shape_1.setTransform(18,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006EA5").s().p("AhxFHQgGAAgBgGIAAhhQABgGAGAAICVAAQAgAAAXgYQAWgZAAghQAAgigWgXQgYgXgfAAIhxAAQgKAAABgJIAAhgIABgFQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAIAzAAQAeAAAXgXQAWgXAAghQAAghgXgXQgWgXgfAAIhBAAQgNAAgKAJQgKALAAAMIAAGDIhdAAIABoNQAAgGAIAAIC2AAQAzAAApAaQAqAZAaAsQAZAsAAA0QAAA2gdAwQAtAbAaAsQAbAuAAA0QAAA0gZAsQgZArgrAbQgrAZgzAAg");
	this.shape_2.setTransform(-42.7,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-79.1,130,158.4);


(lib.Interpolación4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcCQIgIhGIgpAAIgIBGIhDAAIArkfIBqAAIAsEfgAgPAZIAdAAIgOiHg");
	this.shape.setTransform(78,136.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghCQIAAkfIBDAAIAAEfg");
	this.shape_1.setTransform(62.1,136.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATCQIAAhJQgBgPgFgFQgGgGgOAAIgLAAIAABjIhDAAIAAkfIBGAAQA9AAAUAPQAUAQAAArIAAAhQAAAagLALQgLANgZAEQAXAEALAMQAMALgBAYIAABLgAgSgDIARAAQAMAAAEgFQAEgDAAgMIAAgxQAAgMgEgEQgEgEgMAAIgRAAg");
	this.shape_2.setTransform(46,136.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxCQQgOgEgHgJQgJgKgDgNQgEgPAAgaIAAiEQAAgbAEgPQADgNAJgJQAIgKAPgEQAMgEAkAAQAiAAANAEQAPAFAJAJQAJAJACANQAEAMAAAeIAACEQAAAegEAMQgCAMgJAKQgIAJgOAEQgMADglABQgmgBgMgDgAgNhbQgEAEABAMIAACXQgBANAEAEQAEADAKAAQAKAAADgDQAEgEAAgNIAAiXQAAgMgEgEQgDgEgKAAQgKAAgEAEg");
	this.shape_3.setTransform(24.9,136.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghCQIAAjsIgtAAIAAgzICdAAIAAAzIgtAAIAADsg");
	this.shape_4.setTransform(6.3,136.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgICUQgrAAgPgPQgQgOAAgoIAAgfIA+AAIAAAcQAAALAEAFQAFAEAKAAQALAAAFgEQADgFAAgMIAAgVQABgIgCgFIgDgIQgHgIgXgFIgRgFQgcgHgLgNQgKgOAAgfIAAgbQAAgnAPgPQAPgQAlAAIATAAQAWAAAQAEQAPAEAIAJQAIAIACAKQADAKAAAXIAAAWIg8AAIAAgSQAAgNgDgFQgDgFgMAAQgKAAgDAFQgEAEAAAMIAAASQAAAVAjAJIAQAFQAbAIALANQALAOAAAeIAAAmQAAAlgSAPQgQAQgoABg");
	this.shape_5.setTransform(-11.7,136.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghCQIAAkfIBDAAIAAEfg");
	this.shape_6.setTransform(-27.3,136.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASCQIAAh+IgiAAIAAB+IhEAAIAAkfIBEAAIAABvIAiAAIAAhvIBDAAIAAEfg");
	this.shape_7.setTransform(-43.5,136.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdCQIgIhGIgqAAIgIBGIhDAAIArkfIBqAAIAsEfgAgPAZIAdAAIgOiHg");
	this.shape_8.setTransform(-74.3,136.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAHCQIg0jpIAFDpIg9AAIAAkfIBfAAIAzDjIgEjjIA9AAIAAEfg");
	this.shape_9.setTransform(-96.9,136.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtCNQgOgEgJgMQgIgLgDgPQgEgOAAgkIAAjCIBDAAIAADbQAAALAEAFQADAEAKAAQALAAAEgEQADgFAAgLIAAjbIBBAAIAADCQAAAfgEATQgEAQgIAKQgIAMgPAEQgPAFgeAAQgeAAgPgFg");
	this.shape_10.setTransform(-119.6,136.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhBCQIAAkfIB+AAIAAAzIg8AAIAABAIA4AAIAAAxIg4AAIAABIIBBAAIAAAzg");
	this.shape_11.setTransform(47.6,88.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASCQIAAhJQABgPgGgFQgFgGgPAAIgLAAIAABjIhDAAIAAkfIBGAAQA+AAATAPQAUAQAAArIAAAhQAAAagKALQgMANgYAEQAYAFAJALQALAMABAWIAABMgAgSgDIARAAQAMAAAEgFQAFgEgBgLIAAgxQABgMgFgEQgEgEgMAAIgRAAg");
	this.shape_12.setTransform(28.4,88.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhWCQIAAkfIBYAAQAyAAAQANQARANAAAiIAAAaQAAAYgLAMQgKAMgZAEQAYAAAMAOQAMAPAAAbIAAAhQAAAjgQAMQgQANgxAAgAgUBeIAUAAQALAAAFgFQAEgDAAgNIAAghQAAgNgEgEQgFgFgLAAIgUAAgAgUgZIATAAQALAAAEgEQAEgEAAgNIAAgaQAAgLgEgFQgEgEgLAAIgTAAg");
	this.shape_13.setTransform(7.3,88.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtCNQgOgEgJgMQgIgLgDgPQgEgOAAgkIAAjCIBEAAIAADbQAAAMADAEQADAEAKAAQALAAAEgEQADgEAAgMIAAjbIBBAAIAADCQAAAfgEATQgDAPgIALQgJAMgPAEQgPAFgeAAQgeAAgPgFg");
	this.shape_14.setTransform(-13.9,88.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgsCQQgNgEgIgJQgJgKgDgNQgEgPAAgaIAAiFQAAgaAEgPQAEgOAIgIQAJgKAOgEQANgEAjAAQAdABANADQANAEAHAKQAIAJADAMQADAOAAAcIAAAUIg9AAIAAgdQAAgLgEgFQgDgEgKAAQgJAAgDAEQgDAEAAAMIAACXQAAANADAEQADADAJAAQAKAAADgDQAEgFAAgMIAAgnIA9AAIAAAeQAAAdgDAMQgDANgHAKQgIAKgMADQgLADggABQglgBgNgDg");
	this.shape_15.setTransform(-33.7,88.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHCUQgrAAgQgPQgQgOAAgoIAAgfIA+AAIAAAcQAAALAEAFQAFAEALAAQAKAAAEgEQAFgFgBgMIAAgiIgFgIQgHgJgWgEIgRgFQgcgHgKgNQgLgOAAgfIAAgbQAAgnAPgPQAPgQAlAAIATAAQAZAAAOAEQANAEAKAJQAGAHADALQADALAAAWIAAAWIg8AAIAAgSQAAgOgDgEQgEgFgLAAQgJAAgEAFQgEAEAAAMIAAASQAAAVAjAJIARAFQAaAIAMANQAKAOAAAeIAAAmQAAAlgSAPQgPAQgpABg");
	this.shape_16.setTransform(-54.2,88.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhBCQIAAkfIB9AAIAAAzIg7AAIAABAIA4AAIAAAxIg4AAIAABIIBBAAIAAAzg");
	this.shape_17.setTransform(-71.9,88.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhVCQIAAkfIBVAAQAyAAASASQASASAAA1IAABsQAAA2gSASQgSASgyAAgAgSBdIASAAQAJAAAEgEQADgEAAgLIAAiSQAAgMgDgDQgDgFgKAAIgSAAg");
	this.shape_18.setTransform(-90.9,88.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggCQIAAhdIg8jCIBFAAIAaCDIAaiDIBAAAIg7DCIAABdg");
	this.shape_19.setTransform(-120.8,88.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXCQIgyiDIAACDIhBAAIAAkfIBBAAIAAB8IArh8IBEAAIg2CHIA/CYg");
	this.shape_20.setTransform(10.3,41.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgsCQQgOgEgIgJQgIgKgDgNQgEgMAAgdIAAiFQAAgcAEgNQADgNAIgJQAKgKAOgEQAMgEAkAAQAdABANADQANAEAHAKQAIAJACAMQADAOAAAcIAAAUIg8AAIAAgdQAAgLgEgFQgDgEgKAAQgKAAgDAEQgDAEAAAMIAACXQAAANADAEQADADAKAAQAKAAADgDQAEgFAAgMIAAgnIA8AAIAAAeQAAAdgDAMQgDAOgHAJQgHAKgMADQgLADggABQgmgBgMgDg");
	this.shape_21.setTransform(-10.6,41.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AghCQIAAkfIBDAAIAAEfg");
	this.shape_22.setTransform(-26.2,41.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhACQIAAkfIBCAAIAADsIA/AAIAAAzg");
	this.shape_23.setTransform(-38.4,41.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrCQQgOgEgIgJQgJgKgDgNQgEgPAAgaIAAiFQAAgaAEgPQADgNAJgJQAJgKAOgEQANgEAjAAQAdABANADQANAEAHAKQAIAJADAMQADAOAAAcIAAAUIg9AAIAAgdQAAgLgEgFQgDgEgKAAQgJAAgDAEQgDAEAAAMIAACXQAAANADAEQADADAJAAQAKAAADgDQAEgFAAgMIAAgnIA9AAIAAAeQAAAdgDAMQgDANgHAKQgIAKgMADQgLADggABQglgBgMgDg");
	this.shape_24.setTransform(-56.6,41.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhBCQIAAkfIB9AAIAAAzIg7AAIAABAIA4AAIAAAxIg4AAIAABIIBBAAIAAAzg");
	this.shape_25.setTransform(-84.1,41.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhACQIAAkfIBCAAIAADsIA/AAIAAAzg");
	this.shape_26.setTransform(-99.5,41.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAdCQIgIhGIgqAAIgIBGIhDAAIArkfIBqAAIAsEfgAgPAZIAdAAIgOiHg");
	this.shape_27.setTransform(-118.4,41.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhVCQIAAkfIBVAAQAyAAASASQASASAAA1IAABsQAAA2gSASQgSASgyAAgAgSBdIASAAQAJAAAFgEQADgFAAgKIAAiSQAAgLgDgEQgFgFgJAAIgSAAg");
	this.shape_28.setTransform(-139.1,41.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABfHiIgajtIiOAAIgaDtIjhAAICQvDIFmAAICTPDgAg1BVIBlAAIgwnHg");
	this.shape_29.setTransform(118.3,-102.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AkbHiIAAvDIDiAAQDOAABEA1QBDA1AACNIAADEQAACJhCA3QhCA2itAAIglAAIAAESgAg6AgIAyAAQAnAAANgPQAOgPAAgnIAAjNQAAgogOgPQgNgOgnAAIgyAAg");
	this.shape_30.setTransform(52.1,-102.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABfHiIgbjtIiMAAIgbDtIjhAAICQvDIFmAAICTPDgAg0BVIBkAAIgwnHg");
	this.shape_31.setTransform(-17.9,-102.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AD8HiIAOsuIiWMuIj3AAIiRsuIAQMuIjCAAIAAvDIFFAAICBL4ICHr4IFAAAIAAPDg");
	this.shape_32.setTransform(-105.2,-102.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.7,-151.1,301.5,302.4);


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAIIAhglIAeAoIgrATg");
	this.shape.setTransform(-72.1,272.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkATIAUg5IA1ATIgUA6g");
	this.shape_1.setTransform(-19.4,323.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAACRQgMAAgdgKQgigMgKgHQgLgHgFgMQgFgKABgOQABgMAJgbIAqh4QAJgbAIgKQAHgLAKgFQAMgHANACQAOAAAfALQAaAJALAIQALAHAEAMQAEAJgBAOQgCANgJAaIgGASIg4gTIAJgbQAEgLgCgEQgBgFgKgDQgIgDgFACQgEADgEALIgvCJQgEAMACAEQACAFAJADQAJADAEgDQAFgCADgLIAMgkIA4ATIgKAbQgKAdgGAJQgHALgJAFQgJAGgKAAIgCAAg");
	this.shape_2.setTransform(-29,308.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkAUIAVg5IA0ATIgUA4g");
	this.shape_3.setTransform(-46.1,313.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkCMIhOgbIBbkFIBNAbQAuAPALAXQAKAWgRAxIgiBiQgRAxgWAKQgJAEgMAAQgSAAgcgJgAglBYIARAFQAJAEAFgDQAEgCADgLIAuiEQAEgKgCgFQgCgFgKgDIgQgGg");
	this.shape_4.setTransform(-57.4,298);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAACFIAQhDIgmgNIgeA+Ig9gVICBj4IBiAiIgzETgAgCALIAbAJIAeh/g");
	this.shape_5.setTransform(-86.7,289.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhgCAIBLjWIgpgPIAQgvICPAyIgRAvIgpgPIhJDXg");
	this.shape_6.setTransform(-98.5,282.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAACSQgMAAghgMQghgLgMgIQgLgIgEgLQgFgKABgOQABgPAJgYIAqh4QAKgcAGgJQAIgMAKgEQAMgHANACQANAAAgALQAgAMAKAHQANAJAEALQAFAKgBAOQgBAPgJAYIgqB4QgJAbgHAKQgIAMgKAEQgIAFgMAAIgEAAgAAQhXQgFACgDALIgvCJQgEALACAFQACAFAKADQAKAEAEgDQAEgCAFgLIAuiKQAFgKgDgFQgCgFgJgEIgKgBIgFABg");
	this.shape_7.setTransform(-117.4,277.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAACSQgMgBgggLQgjgMgKgHQgLgIgEgLQgFgLABgNQACgQAIgXIAqh4QAKgcAGgJQAIgMAKgEQALgGAOABQAOABAfALQAdAJAMAJQAMAIAFAMQAFAKgCANQAAAMgKAbIgEAOIg7gVIAIgWQAEgKgDgGQgCgFgLgDQgLgEgFACQgFADgEALIgvCJQgEALADAFQACAFALAEQAMAEAEgDQAFgCAEgLIALgiIgRgGIAQguIBMAZIgZBIQgJAbgIAKQgGALgLAGQgLAFgLAAIgCAAg");
	this.shape_8.setTransform(-136.4,271.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAACTQgMgBghgMQgggKgNgJQgLgIgEgLQgFgMABgMQABgMAJgbIAqh4QAJgaAHgLQAIgLAKgFQALgGAOABQAPABAeALQAgALALAHQAMAJAFALQAEAKgBAOQAAAMgKAbIgqB4QgJAbgHALQgGAJgLAGQgLAGgMAAIgCAAgAAQhXQgFADgDAKIgvCKQgEALACAFQACAEAKAEQAKADAEgCQAFgEAEgKIAviJQADgLgCgFQgBgFgKgDQgGgCgEAAIgFABg");
	this.shape_9.setTransform(-155.3,264.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfCMIhVgdIBbkFIBRAcQAtAQAKARQAMARgMAfIgIAXQgHAVgNAHQgOAIgYgEQAWAIAHASQAGAQgJAaIgKAeQgLAfgTAGQgFACgIAAQgSAAgfgLgAgoBWIATAGQALAEAFgCQAFgDADgLIALgeQAEgLgDgGQgDgFgLgEIgRgGgAgCgWIAQAGQAMAEAEgDQAGgDADgKIAJgYQAEgLgDgFQgCgFgMgEIgRgGg");
	this.shape_10.setTransform(-175.7,257.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3AGIAQgsIBfAhIgQAsg");
	this.shape_11.setTransform(-201.2,252.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AABCFIAOhDIglgNIgeA+Ig9gVICBj4IBiAiIgzETgAgCALIAbAKIAeiAg");
	this.shape_12.setTransform(-226.4,241.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhLB4IBakFIA9AVIhaEGg");
	this.shape_13.setTransform(-239,235.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTCJIAWhCQAEgOgDgGQgDgHgNgFIgKgEIgfBaIg9gVIBbkFIA+AWQA6AUAMAUQANAVgNAnIgLAeQgHAVgPAJQgNAJgYgEQATAJAGAPQAHAPgHAUIgYBFgAgGgJIANAGQAMADAGgCQAFgDAEgKIAPgsQAEgLgDgFQgCgFgNgEIgOgGg");
	this.shape_14.setTransform(-254.4,230.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAACFIAPhDIglgNIgeA+Ig9gVICBj4IBiAiIgzETgAgCALIAbAJIAeh/g");
	this.shape_15.setTransform(-274.7,224.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhLBuIBakFIA9AVIhKDXIA5AUIgQAvg");
	this.shape_16.setTransform(-292.3,218.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhmBuIBbkFIByAoIgQAvIg2gTIgUA6IAzASIgQAsIgygSIgXBBIA7AVIgRAvg");
	this.shape_17.setTransform(-304.6,212.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkCMIhOgbIBbkFIBNAaQAvARAKAWQAKAWgQAwIgjBjQgRAwgWALQgIAEgNAAQgSAAgcgJgAgkBXIAQAGQAKADAEgCQAEgCADgLIAuiEQAEgKgCgGQgCgEgKgEIgQgFg");
	this.shape_18.setTransform(-322.6,206);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmCGIAajlIhGDVIg3gTIBbkFIBVAdIgZDfIBFjPIA3ATIhbEFg");
	this.shape_19.setTransform(-342.6,199.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAACFIAPhDIglgNIgeA+Ig9gVICBj4IBiAiIgzETgAgCALIAbAKIAeiAg");
	this.shape_20.setTransform(-365.2,193.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpCHQghgLgLgIQgLgIgFgLQgFgJABgPQABgMAJgbIAqh4QAJgaAIgLQAGgKALgGQALgGAOABQAPABAeALQAbAJAKAHQALAIAEALQAEAJgBAPQgCANgJAaIgGASIg4gUIAJgaQAEgMgCgEQgBgFgKgDQgJgDgEADQgEACgEALIgvCKQgEAMACAEQACAEAJADQAJADAEgCQAEgCAEgMIAMgkIA4AUIgKAbQgIAYgIANQgGALgKAGQgKAGgLAAQgMAAgdgLg");
	this.shape_21.setTransform(-382.2,185.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAACGIAPhEIglgNIgeA+Ig9gVICBj4IBiAiIgzETgAgCALIAbAKIAdh/g");
	this.shape_22.setTransform(-411.7,177);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhLBvIBakGIA9AVIhLDXIA6AUIgQAvg");
	this.shape_23.setTransform(-429.3,170.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9D4895").s().p("AgBAvIhBAIIAYgUIgWgIIAWgJIgOgFIAMgNIgMgOIAIgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAOIgHgbIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZAQIAZAAIgJANIAJAUIgPgKIAAAoIgzAKg");
	this.shape_24.setTransform(149.4,168.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_25.setTransform(150.2,178.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#903D8F").s().p("AjhCVIAAhFIHDkKIAADCIk4Czg");
	this.shape_26.setTransform(-75.5,105.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#201025").s().p("AlgBWIHNj8ID0BCInCELg");
	this.shape_27.setTransform(-88.2,96.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#611F5B").s().p("AmKgVIgCieIMZD0Ii9B0g");
	this.shape_28.setTransform(-68.2,90);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#201025").s().p("AgXBSIAKgGIAAgFIAHgFIAAh6IgHAEIAAgHIgLAHIAAgOIAwgdIAAANIgJAFIAAAIIgHADIAAB7IAHgEIAAAGIAKgGIAAANIgwAdg");
	this.shape_29.setTransform(-118.2,86);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#903D8F").s().p("Aj+B2QAMAEHvkqIACCeIk9DDg");
	this.shape_30.setTransform(-133.2,89.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#903D8F").s().p("AjzA1IHnkpIAAC5InnEwg");
	this.shape_31.setTransform(-52.9,120.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#822082").s().p("Ag0BtIgCj+IBtAlIAAD+g");
	this.shape_32.setTransform(-136.3,63.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#94388D").s().p("AgxBCIAAijIBjAaIgDCpg");
	this.shape_33.setTransform(-146,64.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#201025").s().p("AgFANIAAgdIALADIAAAeg");
	this.shape_34.setTransform(-107.7,71.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#201025").s().p("AgFANIAAgdIALAEIAAAdg");
	this.shape_35.setTransform(-106,72.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#201025").s().p("AgEANIAAgdIAJADIAAAeg");
	this.shape_36.setTransform(-109.6,71.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#201025").s().p("AgFANIAAgdIAKADIAAAeg");
	this.shape_37.setTransform(-111.8,70.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#201025").s().p("AgFANIAAgdIAKAEIAAAdg");
	this.shape_38.setTransform(-113.9,70);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#201025").s().p("AgFANIAAgdIALAEIAAAdg");
	this.shape_39.setTransform(-116.2,69.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#201025").s().p("AgFANIAAgdIAKAEIAAAdg");
	this.shape_40.setTransform(-118.4,68.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#201025").s().p("AgFANIAAgdIAKAEIAAAdg");
	this.shape_41.setTransform(-120.6,68);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#201025").s().p("AgFANIAAgdIALAEIAAAdg");
	this.shape_42.setTransform(-122.8,67.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#201025").s().p("AgEANIAAgcIAJACIAAAeg");
	this.shape_43.setTransform(-124.9,66.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#201025").s().p("AgFANIAAgdIALAEIAAAdg");
	this.shape_44.setTransform(-127.1,66);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#201025").s().p("AgFANIAAgcIALACIAAAeg");
	this.shape_45.setTransform(-129,65.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#611F5B").s().p("AiEBAIAAidIEJBNIAAAiIgdgJIiSBVg");
	this.shape_46.setTransform(-118.2,71.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#611F5B").s().p("AjdgEIADiLIG4B8IAACjg");
	this.shape_47.setTransform(-172.9,56.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#201025").s().p("AkZCQIDLh6ICjhXIDFhjIAAAZIozEwg");
	this.shape_48.setTransform(-227.4,61.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#201025").s().p("Ai9gZIBJgvIEyBqIhMAng");
	this.shape_49.setTransform(-218.2,41.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#903D8F").s().p("AglgoIBLgoIAAB0IhLAsg");
	this.shape_50.setTransform(-203,52.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#611F5B").s().p("AiXAIIAAh1IEvBjIAAB4g");
	this.shape_51.setTransform(-221.9,49.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#884393").s().p("EgyTgQaIAOgnMBkZAhbIgOAog");
	this.shape_52.setTransform(-148.5,70.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9D4895").s().p("AAHAMQgCgVADgUIgfAOIgHgRIAwgUIAGAMQgEAMAAAOQgBAOADASQADAPAGAOIgOAGQgIgUgCgVg");
	this.shape_53.setTransform(325.6,-23.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9D4895").s().p("AgGAiQgLgFgIgSQgHgQAEgNQADgLAKgEQAMgFAJAGQAMAHAIASIABACIgjAPQAEAHAEADQAFADAFgCQAHgDgCgKIAPgDQACAKgEAIQgEAHgJAEQgGADgGAAQgEAAgFgDgAgIgUQgFABgBAGQgBAFADAIIAUgJQgEgIgEgDIgEgBIgEABg");
	this.shape_54.setTransform(321.5,-19.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#9D4895").s().p("AgagpIAPgHIAlBaIgOAHg");
	this.shape_55.setTransform(316.7,-19.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9D4895").s().p("AgZgqIAOgGIAlBbIgOAGg");
	this.shape_56.setTransform(313.7,-17.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#9D4895").s().p("AgLAlQgHgDgEgJQgDgFABgGQAAgFACgEQADgEAIgEQAJgHACgEIgDgGIgEgCIgHABQgEACgBADQgBACAAAGIgOACQgCgLAEgGQADgHALgEQAKgEAEAAQAFABAEADQAEAEAFAMIAPAfQACAFAEADIgOAGIgFgGQgCAFgDAFQgDADgFADQgDACgEAAQgEAAgDgCgAgCADIgHAIQgBADABADQACAEADABQADADADgCQADgCACgDQACgDAAgEIgDgLIgCgCg");
	this.shape_57.setTransform(310.3,-14.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9D4895").s().p("AgHAuQgRgJgIgWQgLgWAGgSQAEgPAPgGQAMgGAMAFQAJAEAIALIgOAKQgEgGgFgDQgFgCgHADQgIADgCAKQgDAJAIAQQAGARAJAFQAHAFAIgDQAHgDACgGQACgHgCgLIARAAQADARgFAKQgFALgMAEQgHADgGAAQgHAAgHgEg");
	this.shape_58.setTransform(302.8,-13.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9D4895").s().p("AAIAOQgIgTgBgUIgcAWIgLgOIApghIAIALQAAALAEAOQAEAOAIAQQAHAOAJAMIgMAJQgMgQgJgVg");
	this.shape_59.setTransform(137,217.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9D4895").s().p("AADAiQgNgDgLgOQgLgOgBgMQAAgMAJgHQAKgIALADQAMADAOAQIABACIgdAXQAFAHAFABQAGABAEgDQAGgFgFgJIAOgHQAFAKgCAIQgCAIgHAGQgIAHgIAAIgFgBgAgOgSQgEAEAAAFQAAAFAGAGIARgOQgFgGgFgBIgDgBQgDAAgDACg");
	this.shape_60.setTransform(134.1,223);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9D4895").s().p("AgkghIAMgJIA9BLIgMAKg");
	this.shape_61.setTransform(129.5,224.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9D4895").s().p("AgkghIAMgJIA9BLIgMAKg");
	this.shape_62.setTransform(127.1,226.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9D4895").s().p("AgBAmQgHgCgHgHQgEgGgBgEQgBgEABgFIAHgLQAGgGADgHIgFgGIgFAAIgFADQgDACgBAEQgBADACAFIgNAFQgFgJACgHQABgIAJgHQAIgGAGgBQAFgCAFADQAEACAIAKIAXAbIAIAFIgMAKIgGgFQAAAFgCAGQgDAGgDACQgGAFgGAAIgCAAgAgBACQgEAGgBAEQAAADACADQADADACABQAEAAADgCQACgCABgEQACgDgBgEIgJgMg");
	this.shape_63.setTransform(124.7,231);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D4895").s().p("AAFAvQgRgEgPgTQgQgUAAgRQgBgPANgLQALgJANACQAIABALAIIgKAOQgFgFgGgBQgHAAgEAEQgHAFAAAKQAAAJAMAOQAMAOAIADQAKACAGgFQAFgEABgHQAAgGgFgKIAQgFQAIAOgCALQgCAMgKAIQgJAHgLAAIgHAAg");
	this.shape_64.setTransform(117.9,234.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D3BFD2").s().p("AglAjQAEgJAHgHQAIgIAQgJIAQgKQAFgFACgGQACgGgCgEQgCgEgEgBQgKgEgFAPIgOgHQAGgOAIgEQAJgFALAEQANAEADAKQADAJgDALQgCAHgDADIgIAJQgGAFgKAFIgLAIIgFAEIAcAJIgFARg");
	this.shape_65.setTransform(116.8,-82);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D3BFD2").s().p("AACAkIAAgJQgDAEgGABQgFAAgFgBQgIgCgDgIQgEgHADgJQACgFAEgEQACgDAGgCQAEgBAKABQAKABAEgBQADgFgBgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgGgDQgEgBgDABQgBABgDAFIgNgIQAFgJAIgDQAHgDAKAEQAJADAEAEQAEAEABAFQABAGgEAMIgHAUQgEAKAAADIAAAKgAgJADQgEABAAAEQgCAEACADQABADAEACQADABAEgCQACAAADgDQACgCACgJIACgDIgKAAIgDAAQgEAAgCABg");
	this.shape_66.setTransform(110.7,-82.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D3BFD2").s().p("AgcAgIAWhEIANAFIgDAKQAFgFAEgCQAEgCADABQAFACAEAFIgJAOQgEgEgDgBQgDgBgDACQgDABgDAGIgOAqg");
	this.shape_67.setTransform(106.1,-84.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D3BFD2").s().p("AgPAwQgPgEgFgPQgHgRAIgWQAHgYAQgKQAMgJAQAFQANAFAGALQAEAIgBAOIgRgBQABgHgDgGQgDgFgGgDQgIgDgIAGQgIAHgFAQQgGARADAJQACAJAJADQAHACAFgDQAGgEAFgJIANAKQgJAQgKAEQgGACgFAAQgFAAgGgCg");
	this.shape_68.setTransform(100.3,-87.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D3BFD2").s().p("AgOAwQgKgDgFgJQgEgKADgMIAPACQgCAHACAFQACAEAEABQAFACAEgDQADgDADgIQACgGgBgGQgDgEgEgCQAAgBgGAAIAGgNQAFACAFgCQAEgDACgFQACgFgCgDQgBgEgEgBQgEgCgEADQgDACgCAGIgNgHQAGgMAJgEQAGgEAKADQAKADAEAKQAEAKgDAJQgCAGgEAEQgFAEgGABQAFADADAIQACAHgDAJQgEANgLAGQgGADgGAAIgIgBg");
	this.shape_69.setTransform(214.6,-5.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D3BFD2").s().p("AACAjIABgIQgFAEgFAAQgFABgFgBQgJgDgCgHQgEgHADgJQACgGAEgDQACgDAGgCQAEgBAKABQAKABAEgBIACgIIgCgEQgCgCgEgBQgDgBgEABQgCACgCADIgNgHQAFgJAIgDQAHgDAKAEQAKADADAEQAEAEABAFQAAAFgDAMIgHAVIgEANIAAAKgAgJACQgDACgBADQgCAFACADQABADAEABQADACAEgCIAFgDQACgDACgIIACgDIgKgBQgHAAgCABg");
	this.shape_70.setTransform(208.2,-5.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D3BFD2").s().p("AgcAgIAWhDIANAEIgDAJIAJgGQADgCAEACQAEAAAFAGIgKAOQgCgDgEgCQgDgBgDABQgDACgDAGIgHAVIgHAUg");
	this.shape_71.setTransform(203.6,-7.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D3BFD2").s().p("AgPAxQgPgGgFgOQgHgQAIgXQAHgYAQgKQAMgJAQAGQAMADAHAMQAEAJgBANIgRAAQABgIgDgGQgDgGgGgBQgIgDgIAFQgIAHgFAQQgGARADAJQADAJAIADQAHACAFgDQAFgDAGgKIANALQgJAPgKAEQgGACgFAAQgFAAgGgBg");
	this.shape_72.setTransform(197.8,-10.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D3BFD2").s().p("AgRAxQgKgDgFgJQgFgJADgNIAPADQgBAFACAGQACAFAEAAQAFACAEgEQAEgDADgJQADgKgCgFQgBgEgFgCQgHgBgHAEIgLgFIAYgvIAmANIgGARIgcgJIgGAPQAFgCAFACQAJADAEAJQAFAMgFAOQgDAMgLAJQgFAGgIAAIgJgCg");
	this.shape_73.setTransform(373.7,125.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D3BFD2").s().p("AACAjIAAgIIgJAFQgFAAgFgBQgIgDgDgHQgEgHADgJQABgFAEgEQAEgDAFgCQAEgBAJABQALABAEgBIACgIQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgGgDQgEgBgDABQgCABgDAFIgMgIQAFgJAIgDQAHgDAJAEQAKADAEAEQAEAEABAFQABAGgFAMIgKAhQgBAFABAFgAgKADQgDACAAADQgCAEACADQABADAEACQADABAEgCQACAAADgDQACgDACgIIABgDIgJAAIgCAAIgIABg");
	this.shape_74.setTransform(366.9,125.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D3BFD2").s().p("AgcAgIAWhDIANAEIgDAKQAGgGADgBQADgCAEABQAFACAEAFIgKAOQgCgEgEgBQgEgBgCABQgDADgDAFIgHAUIgHAVg");
	this.shape_75.setTransform(362.4,123.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D3BFD2").s().p("AgOAwQgPgEgGgPQgGgRAHgWQAIgYAPgKQAMgJAQAGQANAEAGAMQAEAIgBANIgRAAQACgIgEgGQgDgGgGgBQgJgDgGAGQgHAFgHARQgFARACAJQADAJAJADQAFACAGgDQAHgEAEgJIAOAKQgJAOgLAGQgFACgFAAQgGAAgFgCg");
	this.shape_76.setTransform(356.5,120.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D3BFD2").s().p("AgRAxQgKgEgFgIQgFgJADgNIAPADQgBAHACAEQACAEAEACQAEABAFgDQAEgEADgJQADgJgCgFQgCgGgEAAQgFgCgJAEIgLgFIAXgvIAnANIgGARIgcgJIgGAPQAFgBAFABQAJADAEAKQAFAKgFAQQgFANgJAHQgFAGgIAAIgJgCg");
	this.shape_77.setTransform(-267.4,-63.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D3BFD2").s().p("AACAjIABgIQgFAEgFAAQgFABgFgBQgIgDgDgHQgEgIADgIQADgHADgCQADgDAFgCQAEgBAKABIAPAAIABgIQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgCgEgBQgEgBgDABQgDACgCADIgNgHQAGgJAHgDQAHgDAKAEQAKADADAEQAFAEAAAFQABAFgEAMIgHAVIgEANIAAAKgAgJACQgCABgCAEQgBAFABADQACAEADAAQADACAEgCQAEgBABgCIAFgLIABgDIgKgBQgHAAgCABg");
	this.shape_78.setTransform(-274.3,-64.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D3BFD2").s().p("AgcAgIAWhEIANAFIgEAKIAKgHQAEgCADACQAEABAFAFIgKAOQgDgDgDgCQgDgBgDACQgDABgDAGQgCAFgGAQIgGAUg");
	this.shape_79.setTransform(-278.8,-66.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D3BFD2").s().p("AgOAxQgPgFgGgPQgGgRAHgWQAIgYAPgKQAMgJAQAGQANAEAGALQAEAJgBANIgRAAQABgJgDgFQgDgGgGgBQgIgDgHAFQgJAGgFARQgGARADAJQADAJAJADQAFACAGgDQAGgEAFgJIANALQgIAOgLAFQgGACgFAAQgFAAgFgBg");
	this.shape_80.setTransform(-284.7,-69.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D3BFD2").s().p("AgRAxQgKgDgFgJQgFgKADgMIAPADQgBAHACAEQADAFADAAQAFACAEgEQAEgCADgKQADgJgCgGQgCgFgEAAQgGgCgHAEIgMgFIAYgvIAmANIgGARIgcgJIgGAPQAEgCAGACQAKADADAJQAGALgGAPQgDAMgLAJQgGAGgHAAIgJgCg");
	this.shape_81.setTransform(116.9,55.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D3BFD2").s().p("AACAkIABgJQgEAEgGABQgEAAgGgBQgIgCgDgIQgEgHADgJQACgFAEgEQACgDAGgCQAEgBAKABQAKABAEgBQACgFAAgDIgCgEIgGgDQgEgBgDABQgBABgDAFIgNgIQAFgJAIgDQAHgDAKAEQAJADAEAEQAEAEABAFQABAGgEAMIgLAhIAAAKgAgJADQgEABAAAEQgCAEACADQABADAEACQADABAEgCQACAAADgDQACgCACgJIACgDIgKAAIgCAAIgHABg");
	this.shape_82.setTransform(110.1,54.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D3BFD2").s().p("AgcAgIAWhEIANAFIgDAKQAFgFAEgCQADgCAEABQAFACAEAFIgKAOQgDgEgDgBQgCgBgEACQgEABgCAGIgOAqg");
	this.shape_83.setTransform(105.6,52.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D3BFD2").s().p("AgPAxQgPgFgFgPQgHgQAIgWQAHgYAQgLQAMgJAQAGQANAEAGAMQAEAIgBANIgRAAQABgIgDgGQgDgFgGgCQgIgDgIAGQgHAFgGASQgGAQADAKQACAJAJADQAHABAFgDQAFgDAGgKIANALQgJAPgKAEQgFACgFAAQgGAAgGgBg");
	this.shape_84.setTransform(99.7,49.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D3BFD2").s().p("AADAvQgKgEgGgLIANgJQADAHAEABQAEACAEgCQAEgCACgGQABgFgEgHQgDgHgFgCQgFgCgEACIgFAFIgFgOQAFgCACgFQABgFgCgFQgCgFgEgBQgEgBgDABQgEADgBADQAAAFACAGIgOAEQgFgNADgJQADgIAJgFQAKgFAJAEQAIAEAFAJQADAGAAAFQAAAGgEAHQAHgCAHAEQAGADAFAIQAGAMgDALQgDAMgKAFQgGADgGAAIgIgBg");
	this.shape_85.setTransform(-471.4,-35.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D3BFD2").s().p("AgNgPQgDAMgIAJIgIgOQAFgFADgKQADgJgCgJIALgGIAtBYIgOAHg");
	this.shape_86.setTransform(-476.9,-33.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D3BFD2").s().p("AgEAiQgMgFgIgQQgIgQACgNQACgMAKgEQAMgGAJAFQAMAGAKASIABACIgiARQAEAIAFACQAFADAFgDQAHgDgDgLIAPgEQADALgEAIQgDAHgJAFQgGADgHAAQgEAAgEgCgAgKgUQgEACgCAGQgBAFAEAHIAUgKQgEgHgEgDIgFgBIgEABg");
	this.shape_87.setTransform(-481.9,-28.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D3BFD2").s().p("AgcgoIANgHIAsBXIgNAIg");
	this.shape_88.setTransform(-486.8,-28);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D3BFD2").s().p("AgdgoIAOgHIAtBXIgOAIg");
	this.shape_89.setTransform(-489.6,-26.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D3BFD2").s().p("AgJAmQgIgDgDgJQgDgFAAgFQAAgGACgDQADgFAGgFQAIgGAEgFIgFgGQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGACQgEACgBADQgCADACAFIgOAEQgDgLADgHQADgHAKgFQAHgEAIAAQAFAAAEADQAFAFAFAJIAKAUQADAHAEAEQACAEAFADIgOAIIgGgHQAAAGgEAFQgCAEgFACQgFACgEAAIgGAAgAgCADQgFAFgBADQgBAEACADQABADAEACQADABADgCQADgBABgEQACgDAAgEIgGgNg");
	this.shape_90.setTransform(-492.8,-23.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D3BFD2").s().p("AgEAvQgRgIgKgVQgMgVAEgTQADgPAPgIQALgGAMAEQAJADAJAKIgMAMQgFgGgGgDQgGgBgFADQgIADgCAKQgBAKAIAPQAJARAIAEQAHAFAJgEQAFgDACgHQACgIgDgJIARgCQAEAQgEALQgEALgLAGQgIAEgIAAQgGAAgGgDg");
	this.shape_91.setTransform(-500.2,-21.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D3BFD2").s().p("AgoAUQgJgHgBgLQAAgLAHgHQAHgHANgDIADAPQgHABgEAEQgDAEAAADQAAAEAFADQAEADAIAAQAIAAAEgEQADgDAAgEQAAgDgCgEIAPABQABAGADADQAEADAFAAQAFAAADgDQADgDAAgDQAAgEgEgCQgDgDgHAAIACgPQAOACAGAGQAHAGAAAKQABAKgIAHQgHAHgKAAQgGABgFgDQgFgCgFgGQgBAHgFAEQgGAEgKABIgBABQgMAAgKgIg");
	this.shape_92.setTransform(-569,67.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D3BFD2").s().p("AgxAEIBHgEQgLgHgFgLIASgBQADAIAGAFQAIAGAJACIAAAMIhiAGg");
	this.shape_93.setTransform(-569.2,60.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D3BFD2").s().p("AgDAcIgCgmQgJABgEADQgEAEAAAFQAAAHALACIgDAQQgLgCgFgHQgGgGAAgKQgBgMAIgHQAKgJASgBQASgBAKAIQAKAHABALQAAAMgJAHQgLAJgTABgAAGgKIABAWQAJgBADgDQAEgEAAgEQgBgFgEgDQgEgDgGAAIgCABg");
	this.shape_94.setTransform(-570.9,54.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D3BFD2").s().p("AgxgEIBigGIABAPIhiAGg");
	this.shape_95.setTransform(-569.8,49.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D3BFD2").s().p("AgxgEIBigGIABAPIhiAGg");
	this.shape_96.setTransform(-570,46.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D3BFD2").s().p("AgiANIAIgDQgFgDgDgFQgDgEAAgEQAAgJAFgGQAFgFAKgBQAHAAAEACQAFABABAEQAEAGACAHIAFAOIAIgBIADgDIABgGQAAgEgCgCQgDgDgFgBIADgOQALACAFAFQAFAGABALQAAAKgCAEQgEAGgEACQgEADgNAAIgjADIgJADgAgVgJQgCACAAAFQAAACACADQACACAEACQAFABAGAAIAEAAIgDgIQgCgHgDgDQgCgCgEAAQgFABgCACg");
	this.shape_97.setTransform(-571.6,42.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D3BFD2").s().p("AgpAZQgJgJAAgMQgBgPAMgKQANgMAYgCQAZAAAOAKQAOAJAAAQQABANgJAKQgGAHgNAEIgGgQQAIgCAEgFQAEgEAAgHQAAgIgJgFQgHgGgSABQgSABgIAGQgHAGAAAIQAAAGAFAFQAGAEALACIgFAQQgRgDgIgIg");
	this.shape_98.setTransform(-570.6,34.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D3BFD2").s().p("AgRAvQgKgEgEgJQgEgKAEgMIAOADQgBAIABADQACAEAEADQAEABAGgDQADgDADgHQACgHgBgEQgCgFgEgCIgGgBIAGgNQAGACAEgCQAEgBADgGQACgFgCgEQAAgDgEgCQgDgBgFACQgDACgCAGIgNgIQAHgMAHgDQAIgEAKAEQAKAEAEAKQACAKgDAIQgCAGgFAEQgEAEgIAAQAHAFABAHQABAHgDAJQgFANgLAFQgEADgGAAQgFAAgFgCg");
	this.shape_99.setTransform(-497.1,-238);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D3BFD2").s().p("AgZArIAZhCQgKAGgMAAIAGgQQAHAAAJgDQAIgEAGgIIAMAFIgkBcg");
	this.shape_100.setTransform(-502.3,-240.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D3BFD2").s().p("AgMAjQgMgEgDgLQgFgMAHgRQAHgQAMgIQAJgGAKAFQAMAEADAMQAEANgIASIAAACIgkgOQgDAIACAFQACAGAFACQAGADAGgJIANAJQgGAIgJADIgFABQgFAAgGgCgAAAgTQgFADgCAHIAUAIQADgHgBgGQgCgFgEgBIgDgBQgDAAgDACg");
	this.shape_101.setTransform(-509.3,-241.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D3BFD2").s().p("AgYArIAjhbIAOAFIgjBcg");
	this.shape_102.setTransform(-513.1,-244.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D3BFD2").s().p("AgYArIAjhbIAOAGIgjBbg");
	this.shape_103.setTransform(-516.1,-245.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D3BFD2").s().p("AAAAjIABgIQgEACgGABQgFABgFgCQgIgDgDgHQgDgIAEgJQACgFAEgDQADgDAFgBQADgBALABIAPABIACgIIgCgEIgFgDQgFgBgCAAQgCABgDAFIgMgIQAFgJAIgDQAGgCALAEQAJAEAEAEQAEAFAAAFQAAAEgEANIgNAgIgBAKgAgKABQgDACgBADQgCAFACACQABAEAEABQACACAEgBQAEgCACgCIAFgKIABgDIgJgBIgFAAIgFAAg");
	this.shape_104.setTransform(-521.1,-245.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D3BFD2").s().p("AgRAwQgPgGgFgPQgFgQAIgXQAKgXAPgKQAOgIAPAHQAMAEAGANQADAIgBANIgRgBQABgIgDgGQgCgFgGgDQgIgDgIAFQgJAGgFAQQgHARACAJQACAJAJAEQAFACAGgDQAGgDAGgJIANALQgKAOgLAEQgEACgGAAQgGAAgFgCg");
	this.shape_105.setTransform(-527.1,-249.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D3BFD2").s().p("AgfAmIAkg9QgMAFgMgDIAJgOQAHABAIgDQAKgCAGgGIALAGIgyBVg");
	this.shape_106.setTransform(-437.2,-424.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D3BFD2").s().p("AgGAhIADgHQgIACgDgBQgGAAgEgDQgHgDgCgJQgCgIAFgHQADgFAFgDQAEgDAFAAIANADQAIADAHABQADgFAAgDIgBgEQgCgCgDgCQgEgCgDAAQgDAAgDAEIgKgKQAHgIAHgBQAIAAAJAFQAJAFADAFQACAEAAAGQAAAFgHAKIgLATQgFAIgCAFIgDAJgAgKAAQgEAAgBADQgDADABAEQABAEADABQADADAEgBQADAAADgCQACgCAEgIIACgDIgIgCIgHgBIgDABg");
	this.shape_107.setTransform(-443.9,-426.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D3BFD2").s().p("AghAbIAkg9IAMAHIgFAJQAGgEAEgBQAEAAADACQAFADACAFIgMAMQgDgFgCgBQgCgCgEABQgDAAgFAFIgLATIgMATg");
	this.shape_108.setTransform(-448.1,-429.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D3BFD2").s().p("AgZAsQgOgIgCgQQgDgTANgSQANgWARgGQAOgGAOAJQAMAHADAMQACAJgEANIgQgEQACgHgBgHQgCgGgFgDQgJgFgIAEQgJAFgIAOQgKAPABAKQABAKAHAEQAGADAGgBQAGgCAHgJIALAOQgLAMgLACIgGABQgJAAgHgFg");
	this.shape_109.setTransform(-453,-433.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D3BFD2").s().p("AgVAsIAVhDQgKAHgMABIAFgRQAFAAAKgEQAIgFAGgHIALAEIgdBdg");
	this.shape_110.setTransform(270.6,-107.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D3BFD2").s().p("AACAjIAAgIIgJAFQgFAAgFgBQgIgDgDgHQgEgHADgJQABgFAEgEQAEgDAFgCQAEgBAJABQALABAEgBQADgFgBgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgGgDQgEgBgDABQgCABgDAFIgMgIQAFgJAIgDQAHgDAJAEQAKADAEAEQAEAEABAFQABAGgFAMIgKAhQgBAFABAFgAgKADQgDACAAADQgCAEACADQABADAEACQADABAEgCQACAAADgDQACgEACgHIABgDIgJAAIgCAAIgIABg");
	this.shape_111.setTransform(263.6,-108.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D3BFD2").s().p("AgcAgIAWhEIANAFIgDAKQAFgHAEAAQADgBAEAAQAGADADAEIgKAPQgCgFgEgBQgDgBgDABQgEADgCAFQgDAGgEAOIgHAWg");
	this.shape_112.setTransform(259.1,-110.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D3BFD2").s().p("AgOAxQgPgFgGgPQgGgRAHgWQAIgYAPgKQAMgJAQAGQAOAEAFAMQAEAIgBANIgRAAQACgIgEgGQgDgGgGgBQgJgDgGAGQgHAFgHARQgFARACAKQADAJAJACQAFACAGgDQAHgEAEgJIAOALQgJAOgLAFQgFACgFAAQgGAAgFgBg");
	this.shape_113.setTransform(253.2,-113.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D3BFD2").s().p("AgVAsIAWhDQgMAHgMABIAGgRQAGAAAKgEQAHgFAFgHIAMAEIgdBdg");
	this.shape_114.setTransform(-301.9,-280.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D3BFD2").s().p("AACAjIAAgIQgDADgGABQgEACgGgCQgIgDgDgHQgEgHADgJQABgFAEgEQAEgDAFgCQAEgBAJABQALABAEgBIACgIQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgGgDQgEgBgDABQgCACgDAEIgMgIQAFgJAIgDQAHgDAJAEQAKADAEAEQAEAEABAFQABAGgFAMIgKAhIAAAKgAgKADQgDACAAADQgCAEACADQABAEAEAAQADACAEgCQACAAADgDQACgDACgIIABgDIgJgBQgHAAgDACg");
	this.shape_115.setTransform(-308.9,-281);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D3BFD2").s().p("AgcAgIAWhEIANAFIgDAKQAGgGADgBIAIAAQAEABAEAFIgKAOQgCgDgEgCQgEgBgCACQgDABgDAGQgCAFgFAQIgHAUg");
	this.shape_116.setTransform(-313.5,-283.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D3BFD2").s().p("AgOAxQgPgFgGgPQgGgRAHgWQAIgYAPgKQAMgJAQAGQANAEAGAMQAEAIgBANIgRAAQABgJgDgFQgDgGgGgBQgJgDgGAGQgIAFgGARQgFARACAJQADAKAJACQAFACAGgDQAGgEAFgJIAOALQgJAOgLAFQgFACgFAAQgGAAgFgBg");
	this.shape_117.setTransform(-319.4,-286.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D3BFD2").s().p("AgPAwQgLgDgDgOQgEgNAJgZQAJgbAKgIQAJgJALAEQAMAEADAMQAEANgJAaQgIAagLAJQgGAGgHAAIgIgBgAACgdQgEAGgHAVQgHAVABAGQABAHAEABQAFABAEgFQADgEAHgWQAIgUgBgHQgBgHgEgBIgCAAQgEAAgDADg");
	this.shape_118.setTransform(12.7,280.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D3BFD2").s().p("AgVAsIAVhDQgKAHgNABIAGgRQAIgBAIgEQAHgDAFgIIAMADIgdBeg");
	this.shape_119.setTransform(7.2,278.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D3BFD2").s().p("AACAjIABgIQgFAEgFAAQgFABgFgBQgIgDgDgHQgEgIADgIQADgGADgDQADgDAFgCQAEgBAKABQAKABAFgBIABgIQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgBgCgEgBQgEgBgDABQgDACgCADIgNgHQAGgJAHgDQAHgDAKAEQAKADADAEQAFAEAAAFQABAFgEAMIgHAVIgEANIAAAKgAgJACQgCABgCAEQgBAFABADQACAEADAAQADACAEgCQAEgBABgCIAFgLIABgDIgKgBQgHAAgCABg");
	this.shape_120.setTransform(0.2,278);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D3BFD2").s().p("AgcAgIAWhDIANAEIgDAJIAJgHQAFgBACABQAFACAEAFIgKAPQgDgFgDgBQgEgBgCABQgDACgDAGQgCAFgFAPIgHAWg");
	this.shape_121.setTransform(-4.3,275.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D3BFD2").s().p("AgOAxQgPgFgGgPQgGgRAHgWQAIgYAPgKQAMgJAQAGQANAEAGALQAEAJgBANIgRAAQABgJgDgFQgDgGgGgBQgIgDgHAFQgJAGgFARQgGARADAJQADAJAJADQAFACAGgDQAGgEAFgJIANALQgIAOgLAFQgGACgFAAQgFAAgFgBg");
	this.shape_122.setTransform(-10.2,272.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D3BFD2").s().p("AgiAuQAHgVAMgRQANgRAPgNIghgLIAFgQIAyAQIgEANQgHAFgNAMQgKALgIAPQgIANgFAOg");
	this.shape_123.setTransform(307.1,208);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D3BFD2").s().p("AACAkIAAgIQgEADgFABQgFAAgFgBQgIgCgDgIQgEgHADgJQABgFAEgEQAEgDAFgCQAGgBAHABIAPAAIACgIQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgGgDQgEgBgDABQgCABgDAFIgMgIQAGgJAHgDQAFgCALADQAKADAEAEQAEAEABAGQABAFgFAMIgKAhQgBAFABAFgAgKADQgDACAAADQgCAEACADQABADAEACQADABAEgBQADgCACgCQACgCACgJIABgDIgJAAIgCgBIgIACg");
	this.shape_124.setTransform(300,208);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D3BFD2").s().p("AgcAgIAWhEIANAFIgDAKQAEgFAFgCQAEgCAEABQAFADADAEIgKAOQgDgEgDgBQgDgBgDACQgDABgDAGQgDAHgEANIgHAWg");
	this.shape_125.setTransform(295.5,205.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D3BFD2").s().p("AgOAwQgPgEgGgPQgHgSAIgVQAIgYAPgKQANgJAPAFQAOAFAFALQAEAIgBAOIgRgBQABgIgDgFQgDgFgGgDQgJgDgGAGQgIAGgGARQgFARACAJQADAJAJADQAGACAFgDQAGgDAFgKIAOAKQgJAPgLAFQgGACgFAAQgFAAgFgCg");
	this.shape_126.setTransform(289.6,202.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D3BFD2").s().p("AgFAlQgLgCgGgHQgGgHAAgLIAQAAQgBALALADQAFABACgCQADgBABgEIAAgEIgFgDQgRgIgEgFQgFgHACgKQACgKAHgFQAHgEAMACQALADAFAFQAFAGAAAKIgPAAQAAgJgJgBQgFgCgCACQgBAAgBAAQAAABgBAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABIAMAHQALAGAEAFQAEAGgCAJQgCAKgIAFQgHAEgIAAIgFgBg");
	this.shape_127.setTransform(335.1,343.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D3BFD2").s().p("AgHAlQgNgDgGgLQgHgMAEgRQADgLAFgHQAGgIAIgCQAHgDAHABQAPADAFANQAGANgDANQgCALgGAIQgHAIgHADQgFABgDAAIgHAAgAgGgRQgFAFgCAKQgCAKADAGQADAHAGABQAEABAGgFQAFgEACgLQACgLgDgFQgDgGgGgCIgBAAQgEAAgFAEg");
	this.shape_128.setTransform(328.8,342.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D3BFD2").s().p("AgZAiIAPhGIANADIgCAKQAEgGAFgCQACgCAFABQAEABAFAFIgIAPQgDgEgEgBQgEAAgCACQgCABgDAGIgFAWIgEAWg");
	this.shape_129.setTransform(323.7,341.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D3BFD2").s().p("AgFAlQgNgDgFgKQgGgMADgRQADgRALgJQAJgHAKACQAMACAGALQAGAMgFATIAAACIglgHQgCAIADAGQADAEAFACQAGABAEgJIAPAGQgFAKgIAEQgFACgFAAIgFAAgAgDgTQgEAEgCAHIAWAFQACgIgDgFQgCgFgFgBIgCAAQgDAAgDADg");
	this.shape_130.setTransform(317.9,340.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D3BFD2").s().p("AAGAmIAJgyQgBgEgBgCQgCgCgDgBQgFgBgCACQgDABgCAFQgCADgDAMIgGAgIgQgDIAPhGIAOAEIgCAKQAEgFAFgDQAFgBAGABQAHABAEAFQAEAEAAAGQABAGgCAKIgJAqg");
	this.shape_131.setTransform(311.3,339);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D3BFD2").s().p("AADAmIACgLQgFAGgEABQgGADgGgCQgFAAgEgEQgEgEgBgGQgBgGACgKIAJgsIAPADIgJAxQAAAEACACQACADADABQAEAAADgBQAEgDABgEQACgEADgNIAGgdIAPACIgOBGg");
	this.shape_132.setTransform(304.9,337.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D3BFD2").s().p("AAWApIAIgpQADgJgCgEQgBgEgEgBQgFAAgEADQgFAFgCANIgHAiIgPgDIAIgmQADgLgBgEQgBgFgFgBQgDAAgEABQgDACgCAEQgCAFgCAJIgHAiIgQgEIAPhFIAOADIgCAKQAEgEAGgDQAGgCAEABQAFABADAEQAEADABAHQAFgFAFgCQAGgCAEABQAGABAEAEQADADACAGQAAAFgBAMIgKAsg");
	this.shape_133.setTransform(296.1,335.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D3BFD2").s().p("AgGAlQgNgCgHgMQgGgMAEgRQABgIAGgKQAGgIAIgDQAHgCAIABQANADAGANQAGALgDAPQgDALgFAHQgGAIgIADQgFACgEAAIgFAAgAgGgRQgFAEgCALQgCAKADAGQADAGAGACQAEABAGgFQAFgEACgLQACgJgDgHQgDgGgGgCIgCAAQgEAAgEAEg");
	this.shape_134.setTransform(288,334.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D3BFD2").s().p("AgJAyQgQgEgGgNQgJgPAFgYQAFgYAOgMQAMgKAQADQAOADAGALQAGAIAAANIgRABQAAgHgEgGQgDgFgGgCQgJgBgGAGQgHAHgEARQgEASAEAJQADAJAJABQAGACAFgEQAHgFADgKIAPAJQgHAPgKAHQgHAEgHAAIgIgBg");
	this.shape_135.setTransform(281,331.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#D3BFD2").s().p("AgFAlQgLgDgHgGQgEgIgBgKIAQAAQAAALAKACQADABAFgBQACgCABgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQgBgCgDgBQgRgKgEgEQgFgGACgKQACgKAIgFQAHgEALACQAKACAGAGQAFAFAAALIgOAAQgBgIgIgDQgGgBgCABQgDACgBACQAAABABABQAAAAAAABQAAAAAAABQABAAAAAAQACADAKAFQANAHACAEQADAGgBAJQgCAKgIAFQgFAEgIAAIgHgBg");
	this.shape_136.setTransform(270.2,330.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D3BFD2").s().p("AgGAlQgNgCgHgMQgGgMAEgRQACgLAGgHQAFgIAIgDQAHgDAIACQANADAGAMQAGAMgDAPQgCAKgGAIQgGAIgIADQgFACgEAAIgFAAgAgGgRQgFAFgCAKQgCAKADAGQADAGAGACQAFABAFgFQAFgEACgLQACgJgDgHQgDgGgGgCIgCAAQgDAAgFAEg");
	this.shape_137.setTransform(263.9,329.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D3BFD2").s().p("AgRAvIAUhgIAOADIgSBgg");
	this.shape_138.setTransform(259.3,327);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D3BFD2").s().p("AAHAkIgBgIQgFAEgEABQgEACgGgBQgIgCgEgHQgEgGABgKQACgGADgDQADgDAEgDQAGgCAIAAIAPgBQABgGgBgCIgCgEIgGgCQgEgBgCABQgCABgDAFIgNgFQAEgKAHgEQAHgDAKACQAIABAGAEQAEADACAGQABAGgDAMIgGAiIABAKgAABADQgGAAgDACQgDACgBADQAAAFABADQACADAEABQADAAADgBQADgCACgDIAEgLIAAgDg");
	this.shape_139.setTransform(251.1,326.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D3BFD2").s().p("AABAvIACgKQgDAFgGACQgGACgEgBQgJgCgGgLQgFgKADgTQAEgRAJgHQAIgIALABQAEACAEADQAEADACAGIAHgjIAPADIgTBggAgKgJQgFAFgCAKQgBAKAAAEQAAAEADAEQACADAFABQAFAAADgEQAFgEACgMQADgMgDgFQgCgGgFgBIgDAAQgEAAgDADg");
	this.shape_140.setTransform(245.2,324.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D3BFD2").s().p("AgQAvIAOhFIAOADIgNBFgAAAggIADgRIAPADIgEARg");
	this.shape_141.setTransform(240.1,323.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#D3BFD2").s().p("AAFAmIAKgyQAAgEgCgDQgDgCgCgBQgEAAgEACQgCACgCAEIgFAPIgHAgIgPgDIAPhGIAOADIgCAKQAEgFAFgBQAEgDAHACQAGABAFAEQAEAFAAAFQABAHgCAJIgJAsg");
	this.shape_142.setTransform(234.7,323.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D3BFD2").s().p("AgFAlQgNgCgFgLQgGgLADgRQADgRALgKQAJgHAKACQANADAFAKQAGAMgFAUIAAACIglgIQgCAIADAGQADAFAFABQAFACAGgKIAOAGQgFAKgIAEQgEADgGAAIgFgBgAgDgTQgEAEgCAIIAWAEQACgIgDgFQgCgEgFgCIgBAAQgEAAgDADg");
	this.shape_143.setTransform(228.3,322.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D3BFD2").s().p("AgUAkIgJhKIAQADIAEAyIAXgsIAQADIgkBBg");
	this.shape_144.setTransform(222.9,320.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D3BFD2").s().p("AAWAyIgCgXIgegHIgMAVIgRgEIAyhaIARAEIAMBngAgCAFIAVAEIgEglg");
	this.shape_145.setTransform(214.8,318.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D3BFD2").s().p("AgOAwQgLgEgEgKQgFgJAEgOQADgJAFgDQAFgFAIgCQgFgEgBgGQgBgHACgGQAEgLAIgEQAIgFAKAEQAMAEADAIQAEAKgEAJQgCAIgEADQgEAEgHABQAGAEABAIQACAHgDAIQgCAIgGAGQgGAGgGACIgGABIgIgCgAgIAFQgFADgCAGQgCAHABAGQACAFAFABQAEACAFgDQACgCAEgJQACgHgCgEQgCgFgEgCIgCAAQgDAAgDACgAAEggQgEACAAAFQgCAFABAEQABAEAEACQAFABADgCQADgCACgGQACgFgCgEQgBgEgEgBIgEAAIgEABg");
	this.shape_146.setTransform(193.9,231.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D3BFD2").s().p("AACAkIAAgIQgFADgEABQgGABgEgCQgJgDgCgHQgEgHADgJQACgFAEgEQAEgEAEAAQAFgCAJABQAJABAFgBQACgGAAgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgCgFgCQgEgBgDABQgCABgDAFIgMgIQAGgJAHgDQAGgCALADQAJADAEAEQAEAFABAFQAAAFgDAMIgLAhIAAAKgAgJADQgDABgBAEQgCAEACADQABADAEACQADABAEgBQADgCACgCQACgCACgIIABgEIgJAAQgIAAgBABg");
	this.shape_147.setTransform(187.5,231.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D3BFD2").s().p("AgcAgIAWhEIANAFIgDAKQAFgGAEgBQAEgCADACQAGABADAFIgKAOQgDgFgDAAQgDgBgDACQgDABgDAGIgHAVIgHAUg");
	this.shape_148.setTransform(182.9,229.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#D3BFD2").s().p("AgPAxQgPgGgFgOQgHgQAHgXQAJgYAPgKQAMgJAQAFQANAFAGALQAEAJgBANIgRAAQABgIgDgGQgDgFgGgDQgIgCgIAFQgHAGgGARQgGASADAIQACAJAJADQAGACAGgDQAFgDAGgKIANALQgJAOgKAFQgGADgGAAIgKgCg");
	this.shape_149.setTransform(177.1,226.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D3BFD2").s().p("AgOAwQgLgEgEgNQgEgMAJgaQAIgaALgKQAJgIAMAEQALAEADAMQAEAMgJAbQgJAbgKAJQgGAFgHAAIgHgBgAACgcQgDADgIAXQgGAVAAAGQABAHAEABQAFABAEgFQAEgEAHgWQAHgUgBgHQgBgHgEgBIgCAAQgEAAgDAEg");
	this.shape_150.setTransform(-389.4,141);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D3BFD2").s().p("AgUAtIAUhDQgKAGgNABIAGgQQAIgBAIgEQAIgFAEgHIANAEIgeBdg");
	this.shape_151.setTransform(-394.9,139.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D3BFD2").s().p("AACAkIAAgIQgFADgEABQgGABgEgCQgJgDgCgHQgEgHADgJQACgFAEgDQADgEAFgBQAFgCAJABQAJABAFgBQACgGAAgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgCgCgEgBQgDgCgEABQgBABgEAFIgMgIQAFgIAIgEQAGgCALADQAJADAEAEQAEAFABAFQAAAFgDAMIgLAhIAAAKgAgJADQgDABgBAEQgCAEACADQABAEAEABQACABAFgBQADgCACgCQACgCACgIIACgEIgKAAQgIAAgBABg");
	this.shape_152.setTransform(-401.9,138.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D3BFD2").s().p("AgcAfIAWhCIANAEIgDAJQAFgEAEgCQAEgCADACQAFABAEAFIgKAOQgDgEgDgBQgEgBgCABQgDACgDAFIgHAWIgHAVg");
	this.shape_153.setTransform(-406.4,136.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D3BFD2").s().p("AgPAxQgPgGgFgOQgHgQAHgXQAJgYAPgKQALgIARAEQAMAFAHALQAEAJgBANIgRAAQABgIgDgGQgDgFgGgDQgIgCgIAFQgHAGgGARQgGASADAIQACAJAJADQAGACAGgDQAFgDAGgKIANALQgJAOgKAFQgGACgGAAQgFAAgFgBg");
	this.shape_154.setTransform(-412.3,133.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D3BFD2").s().p("AgOAwQgLgDgEgNQgEgNAJgaQAIgbALgIQAKgJALAEQALAEADAMQAEAOgJAZQgJAcgKAHQgHAGgHAAIgGgBgAACgdQgEAHgGAUQgIAUABAHQABAHAEABQAEACAFgFQAEgGAHgVQAGgUAAgHQAAgHgFgBIgCgBQgEAAgDAEg");
	this.shape_155.setTransform(-224.8,199.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D3BFD2").s().p("AgVAsIAVhDQgKAHgMABIAEgRQAFAAALgEQAIgFAGgHIALAEIgdBdg");
	this.shape_156.setTransform(-230.2,197.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D3BFD2").s().p("AACAjIABgIQgDADgHACQgFAAgFgBQgIgDgDgHQgEgHADgJQACgFAEgEQACgDAGgCQAEgBAKABQAKABAEgBQACgFAAgDIgCgEIgGgDQgDgBgEABIgEAGIgNgIQAFgJAIgDQAHgDAKAEQAIADAFAEQAEAEABAFQABAGgEAMIgLAhIAAAKgAgJADQgEABAAAEQgCAEACADQABADAEACQADABAEgCQACAAADgDQACgDACgIIACgDIgKAAIgDAAQgEAAgCABg");
	this.shape_157.setTransform(-237.3,196.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#D3BFD2").s().p("AgcAgIAXhEIAMAFIgDAKQAGgGADgBQAEgBAEABQADABAFAFIgJAOQgDgDgEgCQgDgBgDACQgEACgCAFIgHAVIgHAUg");
	this.shape_158.setTransform(-241.8,194.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D3BFD2").s().p("AgPAxQgPgFgFgPQgHgQAIgXQAHgYAQgKQAMgJAQAGQANADAGANQAEAIgBANIgRAAQABgIgDgGQgDgGgGgBQgIgDgIAGQgHAFgGARQgGARADAJQACAKAJACQAGADAGgEQAFgDAGgKIANALQgIAOgLAFQgFACgFAAQgGAAgGgBg");
	this.shape_159.setTransform(-247.7,191.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#D3BFD2").s().p("AgQAwQgJgDgEgIQgEgHACgNIAPADQgCALAHACQAFACAFgEQAFgGAFgOQgDACgFACIgHgBQgKgDgDgKQgEgLAEgNQAFgOAKgHQAJgGAKADQAMAEAEANQAEAOgIAYQgIAagMAJQgHAGgIAAIgIgBgAACgfQgDAFgDAIQgDAJABAFQACAEAEACQAEABAEgDQAFgCACgIQADgKgCgFQgCgGgEgBIgDgBQgCAAgDACg");
	this.shape_160.setTransform(-408.3,80.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#D3BFD2").s().p("AACAkIABgJQgEAEgGABQgEAAgGgBQgHgCgEgIQgEgIADgIQADgGADgDQADgDAFgCQAEgBAKABIAPAAIABgIIgCgEIgGgDQgEgBgCABQgCABgDAFIgNgIQAGgKAHgCQAFgCAMADQAIACAFAFQAFAFAAAEQABAGgEAMIgLAhIAAAKgAgJADQgDABgBAEQgBACABAFQABADAEACIAHAAIAFgEQACgCADgJIABgDIgKAAIgCgBIgHACg");
	this.shape_161.setTransform(-414.7,80);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D3BFD2").s().p("AgcAgIAWhEIANAFIgDAKQAFgGAEgBQADgCAEABQAGADADAEIgKAOQgDgEgDgBQgCgBgEACQgDABgDAGIgHAUIgHAWg");
	this.shape_162.setTransform(-419.2,77.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D3BFD2").s().p("AgPAwQgOgEgGgPQgHgRAIgWQAHgXAQgLQANgJAPAFQAOAFAFALQAEAIgBAOIgRgBQABgIgDgFQgEgGgFgCQgJgDgGAGQgJAGgFARQgGARADAJQADAJAIADQAHACAFgDQAHgEAEgJIANAKQgIAPgLAFQgGACgFAAQgFAAgGgCg");
	this.shape_163.setTransform(-425.1,74.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#92559A").s().p("AgyBCQAKgcASgaQATgZAWgTIgwgQIAHgYIBJAXIgGATQgMAJgQARQgRAQgLAVQgLAUgIAUg");
	this.shape_164.setTransform(126.8,152.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#92559A").s().p("AADA0IABgMQgHAFgHABQgHABgIgCQgMgEgEgKQgFgKAEgOQADgHAFgGQAFgFAHgCQAFgCAPABQAOACAIgBQACgKAAgCQAAgCgDgDIgIgFQgHgBgDABQgEACgEAGIgSgLQAJgNAKgEQAKgEAOAFQAPAEAFAGQAGAHABAHQABAGgGATIgKAdIgFAUIgBAOgAgOAEQgEACgCAFQgBAHACAEQACAEAFADQAFABAFgCQAFgBADgEQACgDAEgMIACgFIgOgBQgKAAgEACg");
	this.shape_165.setTransform(116.6,152.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#92559A").s().p("AgpAuIAghiIATAGIgEAPQAIgJAFgCQAFgBAFABQAJADAEAGIgOAWQgEgGgFgCQgFgCgEADQgEACgFAIQgDAJgHAWIgKAeg");
	this.shape_166.setTransform(110,149.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#92559A").s().p("AgWBHQgVgIgJgVQgJgYALggQALgkAWgOQASgNAYAIQASAGAJARQAGAMgCATIgYAAQABgMgEgIQgFgJgIgCQgNgEgKAIQgMAJgHAYQgJAYAEAPQAFANAMAEQAJADAHgFQAJgFAIgOIATAQQgMAVgQAHQgIADgIAAQgIAAgIgCg");
	this.shape_167.setTransform(101.5,145.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#92559A").s().p("AgyBCQALgdARgZQATgZAVgTIgvgQIAHgYIBJAYIgGATQgOAJgOAQQgRARgKAUQgNAWgGASg");
	this.shape_168.setTransform(-363,-12.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#92559A").s().p("AADAzIABgLQgHAEgHACQgJABgGgCQgMgEgEgLQgFgJAEgOQADgIAFgFQAFgFAHgCQAIgCAMABQARABAFgBQACgJAAgCQAAgDgDgCQgCgDgGgCQgGgCgEACQgEABgEAHIgSgLQAIgNALgFQAJgDAPAEQAOAFAGAGQAGAHABAHQABAHgGASIgKAdIgFAUIgBAOgAgOAEQgEACgCAFQgBAGACAFQACAFAFABQAEACAGgCQAEgCAEgDQACgDAEgMIACgGIgOAAIgFAAQgGAAgDACg");
	this.shape_169.setTransform(-373.3,-12.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#92559A").s().p("AgpAuIAghiIATAGIgEAPQAIgIAFgCQAGgDAEADQAJACAEAHIgOAVQgEgHgFgBQgDgBgGABQgEADgFAIQgDAJgHAWIgKAeg");
	this.shape_170.setTransform(-379.9,-15.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#92559A").s().p("AgVBGQgWgGgIgWQgKgaALgfQAMgiAWgPQASgNAXAIQATAGAIARQAGAMgBATIgZgBQACgMgFgHQgEgIgJgDQgNgEgKAIQgLAJgIAYQgJAZAFANQADANANAFQAIACAJgEQAJgGAHgNIATAPQgMAVgPAHQgJAEgIAAQgIAAgHgDg");
	this.shape_171.setTransform(-388.4,-19.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#92559A").s().p("AgyBDQAJgdATgaQASgZAWgTIgvgQIAHgYIBJAXIgGATQgNAJgPARQgQAPgMAWQgNAVgFATg");
	this.shape_172.setTransform(-279.3,16.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#92559A").s().p("AADA0IABgMQgHAFgHABQgHABgIgCQgMgEgFgKQgFgLAFgNQADgIAFgFQAEgFAHgCQAGgCAPABQANACAIgBQADgHAAgFQgBgDgCgCQgCgCgGgDQgHgBgDABQgEACgEAGIgSgLQAJgOAKgDQAKgEAOAFQAOAEAGAGQAGAHABAHQABAIgGARIgKAdIgFAUQgCAGABAIgAgOAEQgEACgCAFQgCAFACAGQACAEAGADQAEABAGgCQAEgBADgEQAEgFADgKIACgFIgOgBQgKAAgEACg");
	this.shape_173.setTransform(-289.6,16);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#92559A").s().p("AgpAuIAghiIATAHIgFANQAJgIAFgCQAFgBAFABQAHACAGAHIgOAVQgEgGgFgBQgGgBgDACQgEACgFAIQgDAIgIAXIgJAeg");
	this.shape_174.setTransform(-296.2,13);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#92559A").s().p("AgVBHQgWgIgIgVQgKgYALggQALgjAWgPQATgNAXAIQASAGAJARQAGAMgBATIgZAAQACgMgFgIQgEgIgJgDQgMgEgLAIQgLAJgIAYQgJAaAFANQAEANAMAEQAJADAIgFQAIgFAIgOIATAQQgMAVgQAGQgIAEgIAAQgIAAgHgCg");
	this.shape_175.setTransform(-304.7,8.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#92559A").s().p("AgyBCQAKgcATgbQAQgXAXgUIgvgQIAIgYIBIAXIgGATQgMAIgRARQgPARgMAVQgNAVgFATg");
	this.shape_176.setTransform(50.9,127.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#92559A").s().p("AADA0IABgMQgHAEgHACQgHABgIgCQgMgEgEgKQgFgKAEgOQADgIAFgFQAFgFAHgCQAFgCAPABQANACAJgBQACgKAAgCQAAgCgDgDQgCgDgGgCQgHgBgDABQgDABgFAHIgSgLQAJgOAKgDQAJgFAPAGQAOAEAGAGQAGAHABAHQABAHgGASIgKAdIgFAUIgBAOgAgOAEQgEACgCAFQgBAGACAFQACAFAFABQAEACAGgCQADgBAFgEQACgDAEgMIACgFIgOgBIgFAAQgGAAgDACg");
	this.shape_177.setTransform(40.7,127);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#92559A").s().p("AgpAuIAghiIATAHIgEANQAIgIAFgBQAFgCAFABQAIADAFAGIgOAVQgEgGgFgCQgEgBgFACQgEADgFAIIgKAeIgKAfg");
	this.shape_178.setTransform(34.1,124);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#92559A").s().p("AgVBGQgWgGgIgWQgKgZALgfQAMgjAWgPQASgMAXAHQATAGAIARQAGAMgBAUIgZgBQACgLgFgJQgEgIgJgDQgMgDgLAIQgLAIgIAZQgIAXAEAOQAEAOAMAEQAJADAIgFQAJgFAHgOIATAPQgLAVgQAHQgJAEgIAAQgIAAgHgDg");
	this.shape_179.setTransform(25.6,119.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D3BFD2").s().p("AACAuQgKgDgGgNQgEgJABgGQAAgIAEgFQgHgBgEgCQgEgDgEgHQgFgLADgIQADgJAKgGQALgEAIADQAIAEAFAKQADAFAAAHQgBAHgDAEQAIAAAFAEQAGAEAEAHQAEAIAAAIQAAAIgEAGQgEAGgGADQgHADgFAAQgFAAgEgCgAACADQgEACgBAFQgBAFADAHQACAHAFACQAFACAFgBQAEgCABgGQABgEgDgIQgDgGgFgDIgFgBIgEABgAgOgfQgEACgBAEQgCAEADAFQADAFADACQAEABAEgCQAEgBAAgEQABgFgCgFQgCgFgEgBIgDgBIgEABg");
	this.shape_180.setTransform(-449.7,-353.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D3BFD2").s().p("AgMgQQgDANgJAIIgHgOQAEgEAEgLQADgIgBgKIALgFIAqBYIgOAHg");
	this.shape_181.setTransform(-455.3,-351.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D3BFD2").s().p("AgFAjQgMgGgHgQQgIgPADgOQACgMAKgEQALgGAKAFQAMAGAJATIABACIgiAQQAEAIAEACQAFADAFgCQAHgDgCgLIAPgEQACALgDAIQgEAHgJAFQgGADgGAAQgEAAgFgCgAgKgUQgEACgBAGQgBAGADAGIAUgKQgDgHgFgCIgFgCIgEABg");
	this.shape_182.setTransform(-460.4,-347.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D3BFD2").s().p("AgcgoIAPgHIAqBZIgOAGg");
	this.shape_183.setTransform(-465.3,-346.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#D3BFD2").s().p("AgcgoIAPgHIApBYIgNAHg");
	this.shape_184.setTransform(-468.1,-344.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D3BFD2").s().p("AgJAlQgHgDgFgIQgCgGAAgFQAAgGACgDQADgFAHgEIALgLIgEgGQAAgBgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAIgGACQgFACAAADQgCACABAGIgOADQgDgKAEgIQAEgHAJgEQAJgFAGAAQAFABAEADQAEADAFAMIARAfIAGAHIgNAHIgGgGQgBAGgDAEQgDAEgFACQgFADgDAAIgGgCgAgBADQgFAEgCAEQgBADABADQADAFADABQADABADgCQADgCABgDQACgCAAgEQgBgFgDgGIgBgDg");
	this.shape_185.setTransform(-471.4,-341.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D3BFD2").s().p("AgFAvQgQgIgLgWQgLgWAEgRQADgPAQgIQAMgGALAEQAJADAJALIgNALQgFgHgFgBQgFgCgHADQgIADgBAKQgCAJAIAQQAIARAIAEQAIAFAIgEQAGgDACgGQABgIgCgKIARgBQAEARgFAKQgEALgMAFQgHAEgHAAQgHAAgGgDg");
	this.shape_186.setTransform(-478.8,-339.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D3BFD2").s().p("AgMAxQgMgDgEgOQgFgMAHgaQAHgbALgIQALgKAMAEQAJACAEAHQAEAIgBAMIgPgCQABgLgHgCQgFAAgFAEQgEAFgFAPQAFgEADAAQAEgCAEACQAJACAEALQAFAKgEANQgEAQgKAGQgHAFgGAAIgGgBgAgHABQgEADgCAIQgCAJABAGQACAFAFACQAEABADgDQAEgEACgJQADgKgCgEQgCgFgEAAIgCgBQgDAAgDACg");
	this.shape_187.setTransform(3,57.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#D3BFD2").s().p("AgIAlQgMgEgFgKQgFgNAEgQQAGgRAKgIQAJgHAKADQAMADAFALQAFAMgFATIgBACIgkgKQgCAJACAFQACAFAFACQAGACAGgJIAOAHQgGAJgIAEQgFABgEAAIgHAAgAgCgTQgEADgCAIIAVAGQADgIgDgFQgCgFgEgBIgDgBQgDAAgDADg");
	this.shape_188.setTransform(-3.6,57.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D3BFD2").s().p("AgUAuIAahfIAPAEIgZBfg");
	this.shape_189.setTransform(-7.7,54.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D3BFD2").s().p("AgUAtIAaheIAPAEIgZBfg");
	this.shape_190.setTransform(-10.7,54);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D3BFD2").s().p("AAEAkIAAgIQgEAEgFAAQgDABgHgBQgIgCgEgHQgEgHADgJQABgGAEgDQADgEAFgBQADgCALAAQAIABAGgBIACgIIgDgEIgFgDIgHAAQgDACgCAEIgNgGQAFgKAIgDQAGgDAKADQAJACAFAEQAFAFAAAEQABAFgDANIgJAiIAAAKgAgJAEQgCABgCAEQgBAEACADQACAEADAAQAEABADgBQADgBACgDQACgCACgJIABgDIgKAAQgGAAgDACg");
	this.shape_191.setTransform(-15.9,54.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#D3BFD2").s().p("AgMAyQgQgFgGgOQgHgQAGgXQAHgYAPgLQAMgJAQAEQANAEAGALQAFAIAAANIgRABQABgIgEgGQgDgFgHgCQgIgCgHAGQgHAFgFASQgFARADAKQADAIAJADQAFACAGgEQAGgDAFgLIAOALQgIAPgLAFQgGADgGAAIgJgBg");
	this.shape_192.setTransform(-22.2,50.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D3BFD2").s().p("AgFAiQgLgGgIgOQgJgQACgLQADgNALgGQAIgFAJACQAHABAJAJIgMALQgGgJgIAEQgFADgBAGQAAAFAFAKQAHALAEADQAGACAFgCQAEgCABgEQABgEgDgHIAPgEQAIAYgTALQgGAEgHAAQgFAAgFgDg");
	this.shape_193.setTransform(-182,-154.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D3BFD2").s().p("AgJAhQAAgNAEgQIADgTQAAgHgDgGQgDgFgEgCQgEgBgFACQgIAFAGAOIgOAGQgHgPADgIQACgJALgHQAMgGAJAEQAIAEAGAJQADAFABAHIABAMIgCASIgDAOIgBAGIAbgPIAJAPIgvAbQgEgKAAgJg");
	this.shape_194.setTransform(-187.8,-152);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#D3BFD2").s().p("AgOgOQgDANgHAIIgJgOQAFgGACgJQADgJgCgJIALgGIAwBVIgOAIg");
	this.shape_195.setTransform(-193.6,-149.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D3BFD2").s().p("AgCAiQgMgEgJgRQgJgNACgPQACgMAKgFQALgGAJAFQANAFAKASIABACIghASQAEAHAFADQAGACAEgDQAHgDgDgKIAPgFQACALgDAIQgDAHgIAFQgHAEgHAAQgEAAgDgCgAgKgUQgEADgBAFQgBAFAEAHIATgLQgEgGgEgDIgFgBIgEABg");
	this.shape_196.setTransform(-198.6,-145.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D3BFD2").s().p("AgegnIAOgHIAvBVIgNAIg");
	this.shape_197.setTransform(-203.4,-144);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D3BFD2").s().p("AgegnIANgHIAwBVIgOAIg");
	this.shape_198.setTransform(-206.1,-142.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D3BFD2").s().p("AgHAmQgIgDgFgIQgDgFAAgFQAAgFACgFQADgFAGgEQAJgIACgEIgFgGIgEgBQgDAAgDACQgEACgBADQgBADABAFIgOAEQgDgLADgHQADgHAKgFQAJgFAFAAQAGAAADADQAFADAGALIAKATIAIALIAHAHIgNAIIgGgGQgBAFgDAFQgCAEgFADQgFACgDAAIgGAAgAgCADQgFAGgBACQgBADACAEQACADAEACQADABACgCQADgCACgDQACgEgBgDIgEgKIgCgDg");
	this.shape_199.setTransform(-209.2,-138.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D3BFD2").s().p("AgCAvQgRgHgMgVQgMgWADgRQADgQAOgIQANgHALAEQAJADAJAJIgMAMQgFgGgGgBQgGgCgFADQgJAFAAAJQgCAJAJAQQAKAQAHAEQAJAEAIgEQAFgDACgHQACgHgEgKIARgDQAFARgEALQgEALgLAGQgHAEgIAAQgHAAgFgCg");
	this.shape_200.setTransform(-216.5,-136.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D3BFD2").s().p("AgsgmIAOgHIASAeIADgKQACgEAEgDQAIgGALAFQALAEAKAQQAJAPgBAMQgCAMgIAFQgFADgGAAQgGgBgFgDIAFAJIgMAIgAAAgRQgEACAAAHQgBAFAFAJQAEAIAFAEQAEADAEAAQADABAEgCQAEgDABgGQAAgHgGgIQgGgLgGgCIgGgCQgDAAgCACg");
	this.shape_201.setTransform(-358.9,7.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D3BFD2").s().p("AgIAhQgBgKAEgTIADgTQAAgHgEgFQgCgGgFgBQgEgCgEADQgJAFAHAOIgOAGQgHgNADgKQACgLAKgFQALgHAKAEQAIAEAGAJIAFALQABAGAAAHIgCASIgDAOIAAAGIAbgQIAJAQIguAbQgEgIgBgLg");
	this.shape_202.setTransform(-363.8,10.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#D3BFD2").s().p("AgOgOQgDAOgHAHIgJgNQADgFAEgKQACgJgCgKIALgGIAxBVIgNAIg");
	this.shape_203.setTransform(-369.5,13);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#D3BFD2").s().p("AgCAiQgMgEgJgQQgJgOABgOQACgMAKgFQAKgHAKAFQAMAEAMATIABABIghATQAEAHAFADQAFACAFgDQAGgEgDgKIAPgFQADALgDAIQgDAIgIAEQgHAFgHAAIgHgCgAgLgTQgFACAAAGQgBAFAEAGIATgLQgEgHgEgCIgEAAIgFABg");
	this.shape_204.setTransform(-374.4,17.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#D3BFD2").s().p("AgfgmIAOgHIAxBTIgOAIg");
	this.shape_205.setTransform(-379.2,18.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#D3BFD2").s().p("AgfgmIANgHIAyBTIgNAIg");
	this.shape_206.setTransform(-381.9,20.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#D3BFD2").s().p("AgHAmQgHgCgFgJQgDgEgBgGQAAgGACgEQADgFAGgEQAIgHACgFIgEgGIgEgBQgDAAgEACQgEADAAACQgBACABAGIgOAEQgDgLADgGQACgHAKgGQAKgFAEAAQAGgBADADQAFADAGALIALATQAEAHAEAEIAHAHIgNAIIgGgGQAAAGgDAEQgDAFgFACQgFADgEAAIgFAAgAgCADQgFAFgBADQAAADABAEQADADADABQACACAEgCQADgDABgDQACgEgBgDQAAgDgEgGIgCgDg");
	this.shape_207.setTransform(-384.8,24.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#D3BFD2").s().p("AgBAvQgSgHgLgUQgNgVACgSQADgQAOgIQAMgHAMADQAJADAJAJIgMAMQgFgGgFgBQgGgBgGACQgIAFgBAKQgBAKAKAOQAIAQAJAEQAIAFAIgFQAGgDABgHQACgHgEgKIARgDQAFARgDAKQgEAMgLAFQgIAFgJAAQgFAAgFgCg");
	this.shape_208.setTransform(-392.1,26.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D3BFD2").s().p("AgsgmIAOgIIASAfIADgKIAHgHQAIgFAKAEQAMAFAJAPQAJAQgBALQgCANgIAFQgFACgFAAQgHAAgFgEIAFAJIgMAIgAAAgRQgEACAAAHQAAAGAEAJQAFAIAEADQADADAFABQAEAAADgCQAFgCAAgHQAAgFgGgKQgGgLgGgDIgFgBQgDAAgDACg");
	this.shape_209.setTransform(-154,-103.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#D3BFD2").s().p("AgIAhQgBgKAEgTIADgTQAAgHgDgFQgEgGgEgBQgEgCgEADQgJAFAHAOIgOAGQgGgOACgKQACgJAKgGQAMgGAJADQAJAEAFAJIAFALQABAGAAAHIgCARIgDAPIAAAGIAbgQIAJAPIguAcQgFgKAAgJg");
	this.shape_210.setTransform(-158.9,-100.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D3BFD2").s().p("AgPgOQgCANgIAJIgIgOQAEgGACgJQADgJgCgJIALgHIAxBVIgNAIg");
	this.shape_211.setTransform(-164.5,-97.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#D3BFD2").s().p("AgBAjQgMgEgKgRQgJgOABgOQACgLAKgGQALgGAKAEQANAFAKASIABACIghATQAFAHAEACQAGACAEgCQAHgFgDgJIAPgGQACAMgDAHQgDAJgIAEQgHAEgHAAIgGgBgAgLgTQgEADgBAFQAAAGADAFIAUgKQgEgHgFgDIgEAAIgFABg");
	this.shape_212.setTransform(-169.5,-93.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#D3BFD2").s().p("AgfgmIAOgIIAxBVIgNAIg");
	this.shape_213.setTransform(-174.2,-91.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#D3BFD2").s().p("AgfgmIAOgIIAxBVIgOAIg");
	this.shape_214.setTransform(-177,-90.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#D3BFD2").s().p("AgGAmQgJgDgEgHQgDgHAAgEQgBgFACgEQADgFAGgFIALgMQgDgFgCgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAIgGACQgEACgBADQgBAEABAEIgOAFQgDgKADgIQADgHAJgGQAIgEAGgBQAGAAAEADQAEADAGALIATAdIAIAHIgOAIIgFgGIgEALQgDAEgEADQgFACgEAAIgFAAgAgCADQgFAFgBAEQAAADACADQABADAEACQADABADgCQADgCABgDQACgDAAgEQgBgDgEgHIgCgDQgCADgEADg");
	this.shape_215.setTransform(-179.9,-86.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D3BFD2").s().p("AgBAvQgRgGgNgVQgNgVADgSQADgQAOgIQALgHANADQAJADAIAJIgLAMQgFgGgGgBQgFgCgGAEQgIAEgBAKQgBAJAJAPQALARAHADQAIAEAIgEQAGgDABgHQACgHgEgLIARgCQAFAQgEALQgEAMgKAFQgIAFgIAAQgGAAgFgCg");
	this.shape_216.setTransform(-187.2,-84.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#D3BFD2").s().p("AAEAhQgMgDgKgLQgNgNgCgLQgBgMAIgIQAHgHAIgBQAIAAAKAGIgHANQgJgHgGAGQgEAEABAGQABAFAIAIQAJAJAGABQAFACAFgEQACgDAAgEQAAgEgFgGIANgIQAPAVgPAPQgHAHgIAAIgHgBg");
	this.shape_217.setTransform(453.1,-40.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D3BFD2").s().p("AAOAqQgOgDgSgTQgTgUgDgMQgDgPAJgIQAGgGAIAAQAJABAKAHIgJALQgJgHgFAFQgDAEACAGQABAHAMALQgCgEABgEQACgFACgCQAHgGAKABQALACAKAKQAMALAAAKQACAMgIAHQgGAGgJAAIgGAAgAAAAAQgDADAAAFQACAGAEAFQAHAHAGAAQAGACADgDQADgDgBgFQgCgFgGgHQgHgFgFgCIgCAAQgEAAgBACg");
	this.shape_218.setTransform(448,-36.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#D3BFD2").s().p("AAHAhQgNgCgMgNQgNgNgCgMQgBgLAHgHQAIgJAMACQANADAOAOIACABIgaAZQAGAHAFAAQAGABAEgDQAFgGgGgJIANgHQAFAJAAAIQgBAIgGAHQgIAHgJAAIgDAAgAgQgQQgDAEABAFQABAFAFAFIAPgOQgFgGgFgBIgCAAQgEAAgDACg");
	this.shape_219.setTransform(444.6,-31.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#D3BFD2").s().p("AgngdIAKgKIBFBFIgKAKg");
	this.shape_220.setTransform(440.4,-29.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#D3BFD2").s().p("AgngdIAKgKIBFBFIgKAKg");
	this.shape_221.setTransform(438.3,-27.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#D3BFD2").s().p("AgKAdQgFgEgBgFQgCgFABgEQAAgEAFgHIAHgOQgDgDgDgCIgFAAIgFAEQgCACgBADQAAAEADAEIgMAGQgGgJABgHQABgHAHgHQAGgHAGgBQAFgCAFACQAFACAIAJIAaAYIAIAFIgKAKIgHgEIAAALQgCAFgDADQgGAFgIAAQgHgBgGgGgAgBACQgDAHAAACQAAADADADQACADADAAQAEABACgDQADgCAAgEQABgDgCgEQAAgDgHgEIgCgDg");
	this.shape_222.setTransform(436.5,-23.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#D3BFD2").s().p("AAKAtQgQgCgRgRQgSgSgDgRQgCgPALgMQAKgJAMABQAKAAAKAHIgHAOQgGgEgHAAQgGAAgEAEQgGAGACAJQABAJANANQANANAJACQAJABAGgFQAEgFAAgGQAAgGgHgJIAPgHQAJAOAAALQAAAKgJAKQgJAIgLAAIgGAAg");
	this.shape_223.setTransform(430.4,-19.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#D3BFD2").s().p("AgGAyQgMgFgJgPQgJgQAAgMQABgKAJgFQAEgDAEAAQAEAAAHADIgTgeIANgIIAyBTIgLAIIgGgJQAAAHgCAFQgCAEgEADQgFACgEAAQgEAAgFgCgAgPgDQgEACgBAGQAAAGAFAKQAGAJADACQADADAEABQAEABADgCQAEgDAAgGQABgHgHgJQgGgKgFgDIgGgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_224.setTransform(283.2,76.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#D3BFD2").s().p("AADArQgLgFgOgXQgOgWAAgPQAAgOALgHQAHgEAJACQAHACAIAKIgKAJQgHgJgGAEQgEACAAAHQAAAFAIAPIACgHQACgEADgCQAHgFAKAEQALAEAHAMQAJAOgCALQgBALgJAFQgFADgFAAQgGAAgHgDgAAAAAQgEABAAAFQgBAFAFAIQAEAIAFACQAGADADgDQAEgBAAgGQAAgEgFgJQgFgIgFgBIgEgBIgDABg");
	this.shape_225.setTransform(277,80.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#D3BFD2").s().p("AAAAiQgNgFgJgPQgJgOABgOQABgMAJgFQAKgGAKAEQAMAFALASIABACIgeASQAEAIAFACQAEACAFgDQAGgEgDgKIAOgEQADAKgCAIQgDAIgHAEQgHAEgGAAIgHgBgAgMgTQgEADAAAFQAAAGAEAFIASgKQgFgIgEgBIgEgBIgFABg");
	this.shape_226.setTransform(272.5,84.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#D3BFD2").s().p("AgfgmIAMgHIAzBUIgMAHg");
	this.shape_227.setTransform(267.9,85.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#D3BFD2").s().p("AgfgmIAMgHIAzBUIgNAHg");
	this.shape_228.setTransform(265.4,87.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#D3BFD2").s().p("AgFAlQgHgCgFgIQgEgGAAgEQAAgFABgFIAIgJQAHgGADgFIgFgHIgEgBIgGACQgDADgBACQgBADACAFIgNAEQgEgKACgHQACgHAJgFQAIgFAGgBQAGAAAEADQAEAEAGAKIALATIAIAKIAHAHIgMAIIgGgGQAAAGgDAFIgGAGQgFADgEAAIgFgBgAgCADIgFAIIABAHQACADAEABQACABADgBQADgCABgEQACgDgBgDQAAgDgFgHIgCgDg");
	this.shape_229.setTransform(262.7,90.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#D3BFD2").s().p("AAAAuQgPgGgNgVQgNgVABgRQADgQANgIQALgHAMAEQAIACAJAKIgLAMQgFgGgFgCQgGgBgFADQgHAEgBAKQAAAKAJAOQAKAQAHAEQAIAEAIgEQAGgEAAgGQACgGgEgLIAQgDQAFARgDAKQgDALgKAGQgHAEgJAAQgFAAgGgCg");
	this.shape_230.setTransform(255.7,93.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#D3BFD2").s().p("AgvgfIALgKIAXAbIABgLIAFgHQAHgHALACQALAEAMANQAMANACALQABANgHAFQgDADgGACQgGAAgGgCIAHAIIgKAJgAgBgTQgDAEAAAGQACAHAGAGQAFAGAFAEQAGADADgBQAEAAACgCQAEgEgBgGQgBgEgIgKQgIgJgGgCIgEAAQgEAAgCACg");
	this.shape_231.setTransform(410.1,209.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#D3BFD2").s().p("AALAqQgMgDgSgUQgSgTgCgPQgCgOAJgIQAGgGAJABQAIABAJAIIgJALQgIgIgFAFQgEADABAGQACAHAKAMQAAgEABgEQAAgDAEgEQAGgGALADQALACAJALQALAKAAAMQABALgIAHQgGAFgIAAIgIgBgAAAAAQgEACABAFQAAAGAFAGQAHAHAFABQAGACADgDQADgCAAgGQgBgEgGgIQgHgGgFgBIgDgBQgDAAgBACg");
	this.shape_232.setTransform(406,212.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#D3BFD2").s().p("AAFAiQgLgCgNgOQgMgNgBgNQgBgMAIgHQAIgHAMACQANADANAPIABACIgaAXQAEAHAGABQAFABAFgDQAFgFgFgJIANgHQAFAJgBAIQgCAIgGAGQgHAHgKAAIgDAAgAgPgQQgDADAAAFQABAGAFAFIAQgOQgGgHgEAAIgDgBQgDAAgDADg");
	this.shape_233.setTransform(402.3,217.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#D3BFD2").s().p("AglgfIALgKIBABJIgLAKg");
	this.shape_234.setTransform(398,219.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#D3BFD2").s().p("AglgfIALgKIBABJIgLAKg");
	this.shape_235.setTransform(395.8,221.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#D3BFD2").s().p("AABAkQgHgBgGgHQgEgEgCgFQgBgEABgFQABgFAFgGQAGgIABgFQgDgEgDgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAIgFADQgDADAAADQgBADACAFIgMAFQgFgJABgHQABgGAIgIQAHgGAFgCQAFAAAGABQAEADAIAJIAYAaIAJAFIgLAKIgHgFQAAAGgBAFQgCAEgEAEQgFAFgGAAIgCgBgAgBACQgEAHAAACQAAADACADQADADADABQADAAADgCQADgDAAgDIAAgHIgHgIIgDgDg");
	this.shape_236.setTransform(393.8,225.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#D3BFD2").s().p("AAIAuQgRgEgQgSQgRgSgBgSQgBgPAMgLQAJgIANABQAJABAKAHIgJAOQgEgEgHgBQgHAAgEAEQgGAFABAKQABAJAMANQANAOAIACQAJADAGgGQAFgEAAgHQAAgGgGgJIAPgGQAJAOgBALQgBAMgJAHQgJAIgLAAIgGAAg");
	this.shape_237.setTransform(387.4,229);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#D3BFD2").s().p("AAIAvQgIgCgHgLIALgJQAHAJAGgEQAFgDAAgGQAAgFgIgQQAAAEgCAEQgDAFgDABQgHAFgLgEQgKgEgIgMQgIgNACgMQACgLAKgGQAKgGANAGQAMAGANAXQAOAVgBAQQgBAPgLAGQgGADgGAAIgFAAgAgRgdQgEADAAAEQAAAFAEAIQAGAJAEABQAGACACgCQAEgCAAgFQABgFgEgHQgEgIgGgDIgEgBIgFABg");
	this.shape_238.setTransform(144.7,-2.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#D3BFD2").s().p("AgBAjQgMgEgKgRQgJgOABgOQACgLAKgGQALgGAKAEQAMAFALASIABACIghATQAFAHAEACQAFACAFgCQAHgEgDgKIAPgFQACALgDAHQgDAIgIAFQgHAEgHAAIgGgBgAgLgTQgEADgBAFQAAAFADAHIAUgLQgFgIgEgBIgEgCQgDAAgCACg");
	this.shape_239.setTransform(140.2,2.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#D3BFD2").s().p("AgfgmIANgIIAyBVIgOAIg");
	this.shape_240.setTransform(135.4,3.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D3BFD2").s().p("AgfgmIAOgIIAxBVIgOAIg");
	this.shape_241.setTransform(132.7,4.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#D3BFD2").s().p("AgGAmQgIgDgFgIQgDgGAAgEQgBgFACgFQADgEAGgFIALgMQgEgGgBAAIgEgBQgDAAgDACQgEACgBADQgBADABAFIgOAEQgDgLADgGQADgHAJgGQAJgFAFAAQAGgBAEADQAEADAGALIAMATIAHALQAEAEAEADIgOAIIgFgGQgCAHgCADQgDAFgEACQgGADgEAAIgEAAgAgCADQgFAFgBADQAAADACAEQABADAEABQACABAEgBQADgDABgDQACgCAAgFIgFgJIgCgDQgCADgEADg");
	this.shape_242.setTransform(129.7,8.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#D3BFD2").s().p("AgBAvQgRgGgMgWQgNgUADgSQACgQAOgIQANgHALADQAJADAJAJIgMAMQgFgGgFgBQgHgBgFADQgHAEgBAKQgCAJAKAPQAJARAIADQAIAEAJgEQAFgDACgIQABgFgEgLIARgDQAFAQgDALQgEAMgLAFQgIAFgJAAQgFAAgFgCg");
	this.shape_243.setTransform(122.4,10.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#D3BFD2").s().p("AgPgOQgCANgIAJIgIgOQAEgHACgIQADgJgCgKIALgGIAxBVIgNAIg");
	this.shape_244.setTransform(-11.8,-55.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#D3BFD2").s().p("AgPgOQgCANgIAJIgIgOQAEgHACgIQADgJgCgJIALgHIAxBVIgNAIg");
	this.shape_245.setTransform(-16.7,-52.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D3BFD2").s().p("AgBAjQgMgEgKgRQgJgOABgOQADgMAJgFQALgGAKAEQAMAFALASIABACIghATQAEAHAFACQAFACAFgCQAHgEgDgKIAPgFQACALgDAHQgDAIgIAFQgHAEgHAAIgGgBgAgLgTQgEADgBAFQgBAGAFAGIATgLQgFgIgEgBIgEgCQgDAAgCACg");
	this.shape_246.setTransform(-21.6,-47.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#D3BFD2").s().p("AgfgmIANgIIAyBVIgNAIg");
	this.shape_247.setTransform(-26.4,-46.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#D3BFD2").s().p("AgfgmIAOgIIAxBVIgOAHg");
	this.shape_248.setTransform(-29.1,-44.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#D3BFD2").s().p("AgGAmQgIgDgFgIQgDgGAAgEQgBgFACgFQADgEAGgFIALgMIgFgGIgEgBQgDAAgDACQgEACgBADQgBADABAFIgOAEQgDgKADgHQADgHAJgGQAJgFAFAAQAGgBAEADQAEADAGALIAMATIAHALQAEAEAEADIgOAIIgFgGQgCAHgCADQgDAFgEACQgGADgEAAIgEAAgAgCADQgFAFgBADQAAADACAEQABADAEABQACABAEgBQADgDABgDQACgCAAgFIgFgJIgCgDg");
	this.shape_249.setTransform(-32.1,-41.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#D3BFD2").s().p("AgBAvQgRgGgMgVQgNgWADgRQACgQAOgIQANgHALADQAIACAKAKIgMAMQgFgGgFgCQgHgBgFAEQgHAEgBAKQgCAIAKAQQAJAQAIAEQAIAFAJgFQAFgDACgHQABgGgEgLIARgDQAFAQgDALQgDALgMAGQgIAFgJAAQgFAAgFgCg");
	this.shape_250.setTransform(-39.4,-38.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#9D4895").s().p("AAIANQgGgVACgUIgeASIgJgPIAsgbIAHAMQgBAKABAQQADARAFAOQAEARAIALIgNAIQgLgTgEgVg");
	this.shape_251.setTransform(241.1,29.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#9D4895").s().p("AgBAjQgMgEgKgRQgJgOABgOQACgLAKgGQAKgGALAEQAMAFALASIABACIghATQAEAHAFACQAFACAFgCQAHgEgDgKIAPgFQACALgDAHQgDAIgIAFQgHAEgHAAIgGgBgAgLgTQgEADgBAFQAAAFADAHIAUgLQgFgIgEgBIgEgBQgDAAgCABg");
	this.shape_252.setTransform(237.5,34);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#9D4895").s().p("AgfgmIANgIIAyBVIgOAIg");
	this.shape_253.setTransform(232.7,35.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#9D4895").s().p("AgfgmIAOgIIAxBVIgOAIg");
	this.shape_254.setTransform(230,36.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#9D4895").s().p("AgGAmQgIgDgFgIQgDgGAAgEQgBgFACgFQADgEAGgFIALgMIgFgGIgEgBQgDAAgDACQgEACgBADQgBADABAFIgOAEQgDgKADgHQADgHAJgGQAJgFAFAAQAGgBAEADQAEADAGALIAMATIAHALQAEAEAEADIgOAIIgFgGQgCAHgCADQgDAFgEACQgGADgEAAIgEAAgAgCADQgFAFgBADQAAADACADQABAEAEABQACABAEgBQADgDABgDQACgCAAgFIgFgJIgCgDQgCADgEADg");
	this.shape_255.setTransform(227,40.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#9D4895").s().p("AgBAvQgQgGgNgVQgNgVADgSQACgQAOgIQANgHALADQAJADAJAJIgMAMQgFgGgFgBQgHgBgFADQgHAEgBAKQgCAJAKAPQAKARAHADQAIAFAJgFQAFgDACgHQABgGgEgLIARgDQAFAQgDALQgDALgMAGQgIAFgIAAQgGAAgFgCg");
	this.shape_256.setTransform(219.7,42.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIANgNIgNgOIAIgLIgdgRIAnAHIgKgSIAtAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_257.setTransform(144.5,175.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_258.setTransform(145.4,185.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIANgNIgNgOIAJgLIgegRIAnAHIgJgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_259.setTransform(133.5,185.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_260.setTransform(134.4,195.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#9D4895").s().p("AAAAwIhCAGIAYgTIgVgIIAVgJIgOgEIAMgOIgMgNIAIgMIgegQIAoAGIgKgTIAsAXIgNgXIAXAQIgGgcIAGAMIATAAIgCgMIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgJAMIAJAUIgPgKIAAApIgyAJg");
	this.shape_261.setTransform(138.4,181.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_262.setTransform(139.3,191.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgEIAOgOIgOgOIAJgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAWIAXAAIgZAQIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_263.setTransform(102.1,199.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIAOgNIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAVAPIgFgcIAFANIAUAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgOgKIAAAoIg0AKg");
	this.shape_264.setTransform(95.4,196.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIAOgNIgOgOIAJgLIgegRIAnAHIgJgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_265.setTransform(92.5,195.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#9D4895").s().p("AgBAvIhCAIIAZgUIgVgIIAVgIIgPgGIAOgNIgOgOIAJgLIgegRIAnAHIgJgSIAsAVIgNgVIAXAOIgHgbIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZAQIAZAAIgKANIAKAUIgPgKIAAAoIgzAKg");
	this.shape_266.setTransform(87.5,194.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#9D4895").s().p("AAAAwIhCAHIAYgUIgVgHIAVgJIgOgGIAMgNIgMgOIAIgLIgegQIAoAGIgKgSIAsAVIgNgVIAXAOIgGgbIAGANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgJAMIAJAVIgPgLIAAAoIgzAKg");
	this.shape_267.setTransform(86.3,192.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgUIgVgHIAVgJIgPgEIAOgOIgOgNIAJgNIgegQIAoAHIgKgTIAsAWIgMgWIAWAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgYARIAYAAIgKALIAKAVIgPgLIAAAqIgzAJg");
	this.shape_268.setTransform(80.8,191.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgEIAOgOIgOgNIAJgMIgegQIAoAGIgKgSIAsAWIgMgWIAWAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAWIAXAAIgYAQIAYAAIgKAMIAKAUIgPgKIAAApIgzAJg");
	this.shape_269.setTransform(80.8,190.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgEIANgOIgNgOIAIgLIgdgRIAnAHIgKgSIAtAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAWIAXAAIgZAQIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_270.setTransform(79.6,189.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgWgIIAWgJIgPgEIAOgOIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAVAPIgGgcIAGANIATAAIgBgNIAUAAIAFAXIAfAAIgXAWIAXAAIgYAQIAYAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_271.setTransform(74.5,189.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#9D4895").s().p("AAAAwIhDAHIAZgUIgVgIIAVgJIgOgEIAMgOIgMgOIAHgLIgdgRIAoAHIgLgSIAtAVIgNgVIAXAPIgGgcIAGANIATAAIgCgNIAUAAIAFAXIAfAAIgXAWIAXAAIgYAQIAYAAIgJAMIAJAUIgPgKIAAAoIgzAKg");
	this.shape_272.setTransform(71.7,189.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgVgIIAVgJIgPgEIANgOIgNgNIAIgMIgdgQIAnAGIgKgTIAtAWIgNgWIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZARIAZAAIgKALIAKAVIgPgLIAAAqIgzAJg");
	this.shape_273.setTransform(66.2,187.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgVgHIAVgJIgPgGIAOgNIgOgNIAJgMIgegQIAoAGIgKgSIAsAWIgMgWIAWAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAVIgPgLIAAApIgzAJg");
	this.shape_274.setTransform(63.7,186.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#9D4895").s().p("AgBAwIhBAGIAYgTIgVgIIAVgJIgOgEIAMgOIgMgNIAIgMIgegRIAoAHIgKgTIAsAXIgNgXIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgJANIAJAUIgPgKIAAApIgyAJg");
	this.shape_275.setTransform(56.7,185.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgUIgWgHIAWgJIgPgEIAOgOIgOgOIAJgMIgegQIAnAHIgJgTIAsAWIgMgWIAVAQIgGgcIAGAMIATAAIgBgMIAUAAIAFAWIAfAAIgXAWIAXAAIgYARIAYAAIgKAMIAKAUIgPgLIAAAqIgzAJg");
	this.shape_276.setTransform(48.8,182.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgVgHIAVgJIgPgGIANgNIgNgOIAJgLIgegQIAnAGIgJgSIAsAVIgNgVIAXAOIgHgbIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAVIgOgLIAAAoIgzAKg");
	this.shape_277.setTransform(125.6,192.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAeAoIAVgjIAACMg");
	this.shape_278.setTransform(126.5,202.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgVgIIAVgJIgOgFIAMgNIgMgOIAIgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_279.setTransform(35.1,166.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_280.setTransform(35.9,176.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIAOgNIgOgOIAJgLIgegRIAnAHIgJgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_281.setTransform(32.8,166.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_282.setTransform(33.7,176.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#9D4895").s().p("AgBAvIhCAIIAZgUIgVgIIAVgJIgPgFIAOgNIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAVAOIgFgbIAFANIATAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYAQIAYAAIgKANIAKAUIgOgKIAAAoIg0AKg");
	this.shape_283.setTransform(30.1,165.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_284.setTransform(30.9,175.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIAOgNIgOgOIAJgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_285.setTransform(28.4,164.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_286.setTransform(29.3,174.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgVIgVgHIAVgJIgPgFIANgNIgNgOIAIgLIgdgRIAnAHIgKgTIAtAWIgNgWIAXAPIgHgbIAHAMIATAAIgCgMIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKALIAKAVIgPgLIAAAqIgzAJg");
	this.shape_287.setTransform(24.9,163.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_288.setTransform(25.8,173.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgVgHIAVgJIgOgGIAMgNIgMgNIAIgMIgegQIAoAGIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAVIgPgLIAAAoIgyAKg");
	this.shape_289.setTransform(19.3,162.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_290.setTransform(20.2,172.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#9D4895").s().p("AAAAwIhCAHIAYgUIgVgIIAVgJIgOgFIAMgNIgMgOIAIgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgGgcIAGANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgJAMIAJAUIgPgKIAAAoIgzAKg");
	this.shape_291.setTransform(13.7,158.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_292.setTransform(14.6,168.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgIIgPgGIAOgNIgOgNIAIgMIgdgQIAnAGIgKgTIAtAWIgMgWIAVAPIgGgbIAGAMIAUAAIgCgMIAUAAIAEAXIAgAAIgXAVIAXAAIgYARIAYAAIgKALIAKAVIgPgLIAAAqIgzAJg");
	this.shape_293.setTransform(-3.6,153.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_294.setTransform(-2.7,163.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#120B18").s().p("AgdgUIA7gsIAABXIg7Aqg");
	this.shape_295.setTransform(121.5,182.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#611F5B").s().p("AgDAXIAAgbIgRgDIABgEIAQADIAAgPIAGAAIAAAQIASADIgBAEIgRgDIAAAag");
	this.shape_296.setTransform(146.7,36.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#611F5B").s().p("AgCAYIgBgcIgRgDIABgEIAQADIAAgPIAGAAIAAAQIASADIAAAEIgSgDIAAAbg");
	this.shape_297.setTransform(157.3,47.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#B28CB5").s().p("AgUA2IAAhnIAUgRIAVAbIAABqg");
	this.shape_298.setTransform(135.6,58.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#B28CB5").s().p("AgUA2IAAhmIAUgSIAVAcIAABpg");
	this.shape_299.setTransform(156.6,65.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#B28CB5").s().p("AgkBeIAAi0IAkgeIAlAwIAAC5g");
	this.shape_300.setTransform(145.9,57.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#611F5B").s().p("AiXBNIAAiNIASAFIAAguIAdgZIAeAnIAAAyIATAFIAAhZIA3gvIA4BKIAABfIAWAFIAAgtIAegYIAdAmIAAAxIAQAEIAACVg");
	this.shape_301.setTransform(146.7,56);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#201025").s().p("AhbAFIBMgnIBrAdIhIAog");
	this.shape_302.setTransform(156.6,35.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#B28CB5").s().p("Ag3AHIAAguIBvAeIAAAxg");
	this.shape_303.setTransform(153,39.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#903D8F").s().p("AgjgEIBHgoIAAAsIhHAtg");
	this.shape_304.setTransform(162.2,39.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#201025").s().p("AiDAGIBug6ICZAsIhoA+g");
	this.shape_305.setTransform(156.6,40.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#B28CB5").s().p("AhPAMIAAhJICfAvIAABMg");
	this.shape_306.setTransform(151.4,47.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#903D8F").s().p("AgzgGIBng/IAABFIhnBGg");
	this.shape_307.setTransform(164.6,46.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#201025").s().p("Aj6ANIDRhyIEkBUIjFB3g");
	this.shape_308.setTransform(156.6,48.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#903D8F").s().p("AhigNIDFh4IAACFIjFCHg");
	this.shape_309.setTransform(171.8,59.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#201025").s().p("AixAjIDZhiICKArIjqBUg");
	this.shape_310.setTransform(-550.2,-316.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#903D8F").s().p("Ah0hkIDqhWIAADmIjgCAIgKAPg");
	this.shape_311.setTransform(-544.1,-299.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#611F5B").s().p("Ag8AzIAAiJIB5AdIAACQg");
	this.shape_312.setTransform(-561.9,-303.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#D3BFD2").s().p("AhhAuICnhpIAcASIhiBEIAAAXIgdAKg");
	this.shape_313.setTransform(-25.5,126);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#D3BFD2").s().p("Ah0AAIB8hOIBoAWIAFCHg");
	this.shape_314.setTransform(-52.7,149);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AhDgCIAigdIBlAiIgiAdg");
	this.shape_315.setTransform(35.1,144.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#D3BFD2").s().p("AhlgDIA0gsICXAzIgzAsg");
	this.shape_316.setTransform(35.1,144.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#D3BFD2").s().p("AANAiIAkgSIh+gvIALgHICQAvIg0Aeg");
	this.shape_317.setTransform(50.5,143.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#D3BFD2").s().p("AgYgIIgeAXIgVgFIAqgfIBtAjIgKAIg");
	this.shape_318.setTransform(31.1,136.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#D3BFD2").s().p("AhZgNIAYgMIBfAdIArgdIARAGIg+Atg");
	this.shape_319.setTransform(39.8,153.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#D3BFD2").s().p("Ag3AFIAugqIAPAJIgdAcIBPAcIgUAKg");
	this.shape_320.setTransform(19.3,144.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#D3BFD2").s().p("AhVASIApgOIAbgnIBnAbIgOAMIhSgSIgTAgIg4ASg");
	this.shape_321.setTransform(-12.2,129.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#D3BFD2").s().p("AhGAMIAAg0ICNA0Ig3Adg");
	this.shape_322.setTransform(12.2,131.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#D3BFD2").s().p("AjEBsIgXi7IDVhKIDiBRIgxAiIjXDAg");
	this.shape_323.setTransform(-13.3,149.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#D3BFD2").s().p("AgoANIA3gnIAaAAIgPAVIgsAZQgPADgHAEg");
	this.shape_324.setTransform(-20.7,128.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#D3BFD2").s().p("AgKgTIAVgIIAAAxQgEAAgRAGg");
	this.shape_325.setTransform(-23.7,133.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#D3BFD2").s().p("AgKgTIAVgIIAAAwIgVAHg");
	this.shape_326.setTransform(-26.5,134.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#D3BFD2").s().p("AApBgIgPiiIhZgTIAZgSIBPASIAWC9g");
	this.shape_327.setTransform(-42.3,148.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#D3BFD2").s().p("AgWAEIAXgNIAVAFIAAALIgWADg");
	this.shape_328.setTransform(-35.3,134.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgtAHIAugbIAtAKIAAAYIguAHg");
	this.shape_329.setTransform(-36,134.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#D3BFD2").s().p("AhRAOIBSgyIBRASIAAArIhSAMg");
	this.shape_330.setTransform(-36.7,135.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#D3BFD2").s().p("AglANIA1gfIAWAHIgxAeg");
	this.shape_331.setTransform(-23.7,121.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#D3BFD2").s().p("AgmAOIA1ggIAYAHIgyAeg");
	this.shape_332.setTransform(-31.4,125.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#D3BFD2").s().p("AglANIA1gfIAWAHIgyAeg");
	this.shape_333.setTransform(-38.2,129.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#D3BFD2").s().p("AgmAOIA1ggIAYAHIgzAeg");
	this.shape_334.setTransform(-44.8,133.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#D3BFD2").s().p("AgmAOIA1ggIAYAHIgzAeg");
	this.shape_335.setTransform(-51.5,137.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#D3BFD2").s().p("AglAOIA1ggIAWAHIgxAeg");
	this.shape_336.setTransform(-57.9,142);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#D3BFD2").s().p("AglANIA1gfIAWAHIgyAeg");
	this.shape_337.setTransform(-64.3,145.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#201025").s().p("AjDgWIBBhCIFGBYIgeBZg");
	this.shape_338.setTransform(100.5,165.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#903D8F").s().p("AgMgsIA3AZIhVA/g");
	this.shape_339.setTransform(121.3,170.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#120B18").s().p("Ai0g0IAAgGIFpBvIAAAFg");
	this.shape_340.setTransform(99,169.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#120B18").s().p("AgqAdIBVg/IAAAGIhVA/g");
	this.shape_341.setTransform(121.3,171.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#8A2F89").s().p("Ai0geIAAg0IFpBvIAAA2g");
	this.shape_342.setTransform(99,172.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#903D8F").s().p("AgmgbIBNg0IAABhIhNA9g");
	this.shape_343.setTransform(113.2,188.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#201025").s().p("AmChMIBWg5IKvDXIhNA0g");
	this.shape_344.setTransform(78.4,172.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#903D8F").s().p("AgqgrIBVhAIAACZIhVA+g");
	this.shape_345.setTransform(121.3,179.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#201025").s().p("AmChMIBWg5IKvDXIhNA0g");
	this.shape_346.setTransform(94.5,160.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#903D8F").s().p("AglgbIBLg0IAABhIhLA+g");
	this.shape_347.setTransform(129.4,176.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#611F5B").s().p("Alcg5IAAhlIK5DSIAABrg");
	this.shape_348.setTransform(90.7,168.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#611F5B").s().p("Albg5IAAhlIK3DSIAABrg");
	this.shape_349.setTransform(74.5,180.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#090606").s().p("AnHh+IA5gsINWEWIgWA/g");
	this.shape_350.setTransform(232.1,195.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#903D8F").s().p("AgggaIAWg/IArAMIAABlIhBBCg");
	this.shape_351.setTransform(278.9,215.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#611F5B").s().p("Am8hXIAAh4IN5EpIAAB2g");
	this.shape_352.setTransform(231,203.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#611F5B").s().p("AgCAYIgBgcIgRgDIABgEIAQADIAAgPIAGAAIAAAQIASADIgBAEIgRgDIAAAbg");
	this.shape_353.setTransform(136.1,41.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#090606").s().p("AgCAYIgBgcIgRgDIABgEIAQADIAAgPIAGAAIABAQIARADIAAAEIgRgDIAAAbg");
	this.shape_354.setTransform(192.2,176.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#B28CB5").s().p("AgGAzIAAg9IgmgHIACgIIAjAGIAAgeIANAAIABAhIAmAGIgCAJIgkgHIAAA7g");
	this.shape_355.setTransform(-173.3,27.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#090606").s().p("AgCAYIAAgcIgSgDIABgEIARADIgBgPIAGAAIAAAQIASADIgBAEIgRgDIAAAbg");
	this.shape_356.setTransform(-559.9,-317.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#090606").s().p("AgCAYIgBgcIgRgDIABgEIAQADIAAgOIAGgBIAAAQIASADIgBAEIgRgDIAAAbg");
	this.shape_357.setTransform(-127,-132);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#D3BFD2").s().p("Ah0AiQAAgEACgIQAFgOALgLQAjglBXAAIBNAFIAQAEIAAAdIg0gVIi1BAg");
	this.shape_358.setTransform(-133.6,-128.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#090606").s().p("AgLAQIAAgnIAXAGIAAApg");
	this.shape_359.setTransform(-105.4,-129.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#090606").s().p("AgLAQIAAgnIAXAGIAAApg");
	this.shape_360.setTransform(-110.1,-130.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#090606").s().p("AgUAdIAAhEIApAKIAABEg");
	this.shape_361.setTransform(-117.1,-131.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#090606").s().p("AgZgIIAzgYIAAAnIgzAag");
	this.shape_362.setTransform(-88.2,-135.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#090606").s().p("AgZgIIAzgYIAAAnIgzAag");
	this.shape_363.setTransform(-95,-132.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#090606").s().p("AgZgIIAzgYIAAAmIgzAbg");
	this.shape_364.setTransform(-119.1,-119.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#090606").s().p("AgZgIIAzgYIAAAnIgzAag");
	this.shape_365.setTransform(-125.6,-116.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#090606").s().p("AgZgIIAzgYIAAAnIgzAag");
	this.shape_366.setTransform(-132,-113.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#201025").s().p("AiWgDIC9hBIBwApIjRBgg");
	this.shape_367.setTransform(-130.9,-123);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#611F5B").s().p("AhbgGIBbgeIBcBIg");
	this.shape_368.setTransform(-146,-119.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#611F5B").s().p("AhbAdIAAhwIC3ArIAAB8g");
	this.shape_369.setTransform(-146,-112.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#903D8F").s().p("AhogNIDRhhIAABrIjRByg");
	this.shape_370.setTransform(-126.3,-114.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#D3BFD2").s().p("AiUgNIAPgHQABABAmgOIAmgQIDNA8IhfAng");
	this.shape_371.setTransform(-119.1,-123);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#903D8F").s().p("AhSAeQADgdARgTQAogtBpAKIgBAHQhlgKgmAqQgQASgCAaQgBAOACAKIgGABQgDgLABgOg");
	this.shape_372.setTransform(-139.5,-137);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#903D8F").s().p("AgCAtIAAhZIAFAAIAABZg");
	this.shape_373.setTransform(-131.6,-137.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#903D8F").s().p("AgCAtIAAhZIAFAAIAABZg");
	this.shape_374.setTransform(-134.3,-138);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#903D8F").s().p("AgCAtIAAhZIAFAAIAABZg");
	this.shape_375.setTransform(-137.8,-137.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#903D8F").s().p("AgCAtIAAhZIAFAAIAABZg");
	this.shape_376.setTransform(-140.7,-137);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#903D8F").s().p("AgCAtIAAhZIAFAAIAABZg");
	this.shape_377.setTransform(-142.9,-136.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#903D8F").s().p("AgCAtIAAhZIAFAAIAABZg");
	this.shape_378.setTransform(-145,-134.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#903D8F").s().p("AgCAtIAAhZIAFAAIAABZg");
	this.shape_379.setTransform(-146.4,-133);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#903D8F").s().p("AgCAtIAAhZIAFAAIAABZg");
	this.shape_380.setTransform(-147.4,-127.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#201025").s().p("Ai7ASQCchdAJgEQAGgDBlAmIBnAnIibBVg");
	this.shape_381.setTransform(-102.7,-142.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#903D8F").s().p("AhMgNICZhWIAAB0IiZBTg");
	this.shape_382.setTransform(-91.6,-133);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#611F5B").s().p("AhuAYIAAhvIDdA+IAABxg");
	this.shape_383.setTransform(-110.4,-131.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#903D8F").s().p("Ah6CgIDYh7IAAiFIhLhWIAhAAIBHBSIAACJIgdAdIjAB1g");
	this.shape_384.setTransform(-207.1,-251.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#903D8F").s().p("AhsCOIDAhuIAAh1IhEhMIAeAAIA/BIIAAB5IgZAaIirBog");
	this.shape_385.setTransform(-218,-255);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#903D8F").s().p("AhsCOIDAhuIAAh1IhDhMIAdAAIA/BIIAAB5IgZAaIirBog");
	this.shape_386.setTransform(-228.9,-255);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#903D8F").s().p("AhVB7ICXhfIAAhmIg1hCIAXAAIAyA/IAABpIgUAXIiGBag");
	this.shape_387.setTransform(-235.9,-257.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#903D8F").s().p("AhVB7ICXhfIAAhmIg1hCIAXAAIAyA/IAABpIgUAXIiGBag");
	this.shape_388.setTransform(-244.5,-257.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#903D8F").s().p("AhVB7ICXhfIAAhmIg1hCIAXAAIAyA/IAABpIgUAXIiGBag");
	this.shape_389.setTransform(-253.1,-257.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#401841").s().p("AgeADIA9gpIAAAmIg9Ang");
	this.shape_390.setTransform(-254.2,-253.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#401841").s().p("AgYAKIAAg+IAxA+IAAArg");
	this.shape_391.setTransform(-269.7,-258.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#201025").s().p("Ag3A/Igxg/IAxg4IBOgwIAzAwIAfAvIAABIIg+Aqg");
	this.shape_392.setTransform(-261.6,-264.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#903D8F").s().p("AgwADIAAgpIBiApIAAAkg");
	this.shape_393.setTransform(-262.3,-253.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#201025").s().p("AmFAlIFCitIHJB4IlvCZg");
	this.shape_394.setTransform(-92.9,-45.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#D3BFD2").s().p("AivAeICohtIC3A3IjNBog");
	this.shape_395.setTransform(-73,-65.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#903D8F").s().p("AgmgtIBNgiIAAB2IhNApg");
	this.shape_396.setTransform(-50.3,-77.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#611F5B").s().p("AhmAfIAAh9IDNA/IAAB+g");
	this.shape_397.setTransform(-64.6,-79.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#903D8F").s().p("AhNgZICbhYIAAB9IibBmg");
	this.shape_398.setTransform(-82.7,-77.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#201025").s().p("Aj1AzIDPh6IEcBTIhPAiIjNg+IidBYg");
	this.shape_399.setTransform(-71,-87);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#611F5B").s().p("AgYBCIAAiSIAxAVIAACLg");
	this.shape_400.setTransform(-93.1,-73.9);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#201025").s().p("AksBDIF3jHIDiAvImBDag");
	this.shape_401.setTransform(-137.5,-62.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#611F5B").s().p("AjNgMIAAhUIGbBjIAABeg");
	this.shape_402.setTransform(-111.2,-32.5);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#201025").s().p("AjugTICOg/IFOBOIiMBXg");
	this.shape_403.setTransform(-122.1,-25.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#611F5B").s().p("AgmAkIAAhbIBNARIAABeg");
	this.shape_404.setTransform(-94.4,-20.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#903D8F").s().p("AjADBIAAjcIGBjbIAAHug");
	this.shape_405.setTransform(-126.7,-46.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#611F5B").s().p("AhqB5IgBkzIDXBCIAAEzg");
	this.shape_406.setTransform(-156.8,-37.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#611F5B").s().p("AiqgIIAFhWIFQBlIAABZg");
	this.shape_407.setTransform(-129.4,-17.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#903D8F").s().p("AhFAAICLhXIAABbIiLBUg");
	this.shape_408.setTransform(-105.3,-17.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#903D8F").s().p("Ai2gRIFtiSIAACfIltCog");
	this.shape_409.setTransform(-72.2,-31.2);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#611F5B").s().p("Ag1APQgWgHABgIQgBgHAWgHQAXgGAeAAQAfAAAWAGQAXAHgBAHQABAIgXAHQgWAGgfAAQgeAAgXgGg");
	this.shape_410.setTransform(-146.5,8.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#201025").s().p("AhvAfQgugNAAgSQAAgSAugMQAvgNBAAAQBCAAAuANQAuAMAAASQAAASguANQguANhCAAQhAAAgvgNg");
	this.shape_411.setTransform(-147.2,8.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#903D8F").s().p("AidAhIAAhWQBqA7BzgXQA6gMAkgYIgFBNIgVAJQgdAOg4AEIhQgZIg3Acg");
	this.shape_412.setTransform(-147.2,14.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#201025").s().p("AAuAXIh1gkIBIgXIBAAPIAHA5g");
	this.shape_413.setTransform(-167.6,8.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#611F5B").s().p("Ag6ANIAAg+IB1AlIAAA+g");
	this.shape_414.setTransform(-168.9,12.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#611F5B").s().p("AhSADICmgdIg2AdIhyAYg");
	this.shape_415.setTransform(-123.4,12.4);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#611F5B").s().p("AgoAMQgRgFAAgHQAAgGARgEQARgFAXAAQAYAAARAFQARAEAAAGQAAAHgRAFQgRAEgYAAQgXAAgRgEg");
	this.shape_416.setTransform(-126.3,2.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#201025").s().p("Ag9ARQgZgHAAgKQAAgJAZgHQAagHAjAAQAkAAAaAHQAZAHAAAJQAAAKgZAHQgaAHgkAAQgjAAgagHg");
	this.shape_417.setTransform(-126.3,2.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#903D8F").s().p("AgmAjIg2gLIAAg8ICtAAIAAAvQAhgPg4AcQgZANgmAAQgPAAgSgCg");
	this.shape_418.setTransform(-125.7,6.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#201025").s().p("AjRAGICphaID6BSIikBXg");
	this.shape_419.setTransform(-239.9,54.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#903D8F").s().p("AhRgUICjhYIAACAIijBYg");
	this.shape_420.setTransform(-227.1,65.5);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#201025").s().p("Annh/IBGgtIOJEnIhAAxg");
	this.shape_421.setTransform(-213.8,96.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#611F5B").s().p("AnIhgIAAhlIOPErIACBgg");
	this.shape_422.setTransform(-216.9,103.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#201025").s().p("Ai9gZIBJgvIEyBqIhMAng");
	this.shape_423.setTransform(-267,68.3);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#903D8F").s().p("AglgpIBLgmIAAB0IhLAsg");
	this.shape_424.setTransform(-251.8,79.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#611F5B").s().p("AiXAHIAAh1IEvBjIAAB6g");
	this.shape_425.setTransform(-270.8,76.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#611F5B").s().p("Ah/ANIAAhzID/BOIAAB/g");
	this.shape_426.setTransform(-248.1,65.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#903D8F").s().p("AgfgWIA/gxIAABrIg8Alg");
	this.shape_427.setTransform(-168.2,115.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#1C1B1B").s().p("AgigbIBFgtIAABmIhFArg");
	this.shape_428.setTransform(-259.1,86.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#822082").s().p("AgPABIAPgLIAQAVg");
	this.shape_429.setTransform(-134,46.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#822082").s().p("AgLAIIAAgYIAXAIIAAAYg");
	this.shape_430.setTransform(-134,47.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#822082").s().p("AgQAFIAAgVIAiAMIAAAVg");
	this.shape_431.setTransform(-139.2,48.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#822082").s().p("AgPABIAOgLIARAVg");
	this.shape_432.setTransform(-139.1,44.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#822082").s().p("AgLAIIAAgXIAXAHIAAAYg");
	this.shape_433.setTransform(-139.1,46.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#611F5B").s().p("AgTADQgFgDABgCIAXgLIAZAYIgHACg");
	this.shape_434.setTransform(-154.7,35.2);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#611F5B").s().p("AgTAEQgFgEABgCIAXgKIAZAWIgGAEg");
	this.shape_435.setTransform(-191,24.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#611F5B").s().p("AgSAEIAAgSIAlAKIAAATg");
	this.shape_436.setTransform(-154.7,36.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#611F5B").s().p("AgTAEIAAgSIAnAKIAAATg");
	this.shape_437.setTransform(-191.1,26.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#611F5B").s().p("AgeAQIAAguIA9ARIAAAsg");
	this.shape_438.setTransform(-154.7,40.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#B28CB5").s().p("AglgFIgCgFIBPATIgFACg");
	this.shape_439.setTransform(-154.6,42.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#611F5B").s().p("AgeAQIAAguIA9ARIAAAsg");
	this.shape_440.setTransform(-191.1,30);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#B28CB5").s().p("AglgFIgCgGIBPAUIgGACg");
	this.shape_441.setTransform(-191,32.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#611F5B").s().p("AA2AeIhygcIA7giIA+BAg");
	this.shape_442.setTransform(-173.1,33.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#B28CB5").s().p("AhBgIIgHgPICRAkIgMALg");
	this.shape_443.setTransform(-173,36);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#611F5B").s().p("AgkAfIAAhRIBJARIAABUg");
	this.shape_444.setTransform(-154.6,47.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#611F5B").s().p("AgjAfIAAhSIBHARIAABWg");
	this.shape_445.setTransform(-191.2,37.1);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#611F5B").s().p("Ag+AdIAAhcIB9AhIAABeg");
	this.shape_446.setTransform(-173.3,41.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#611F5B").s().p("Ajbg1IAAgPIG4B4IAAARg");
	this.shape_447.setTransform(-173,51.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#B28CB5").s().p("AjdgxIgLgYIHQCAIgNATg");
	this.shape_448.setTransform(-172.8,47.2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#201025").s().p("AneA2IgKgYIHGjmIILCdImaCpIgZAAIAABLg");
	this.shape_449.setTransform(-147.2,36.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#822082").s().p("AgRAGIAAgXIAiANIAAAVg");
	this.shape_450.setTransform(-134.1,50.2);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#201025").s().p("AimBdIgfgRIhVgeIGZipICcAsInBDLg");
	this.shape_451.setTransform(-111,44.9);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#903D8F").s().p("AjgBVIHBjKIAAAVIm/DWg");
	this.shape_452.setTransform(-105.2,48.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#903D8F").s().p("AgQgwIAfASIACA/IghAPg");
	this.shape_453.setTransform(-129.1,57.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#201025").s().p("Ag6AJIA3gfIA+ATIg0Aag");
	this.shape_454.setTransform(-105.6,61);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#903D8F").s().p("AgZgRIAzgcIAABAIgzAag");
	this.shape_455.setTransform(-102.2,65.2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#611F5B").s().p("AggATIAAg5IBBAOIAAA/g");
	this.shape_456.setTransform(-108.2,65.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#201025").s().p("Al4BUIH6jyID3AwIntENg");
	this.shape_457.setTransform(-93.1,53.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#903D8F").s().p("AgEgLIAIgFIABAdIgJAEg");
	this.shape_458.setTransform(-108.2,73.9);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#903D8F").s().p("Aj2CJIAAgiIHtkNIAABiImCDsg");
	this.shape_459.setTransform(-80.2,59.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#201025").s().p("AgXBSIAKgGIAAgGIAHgEIAAh6IgHAEIAAgHIgLAHIAAgOIAwgdIAAANIgJAGIAAAGIgHAEIAAB7IAHgEIAAAGIAKgGIAAANIgwAeg");
	this.shape_460.setTransform(-124.2,89.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#201025").s().p("AgXBTIAKgGIAAgGIAHgEIAAh8IgHAEIAAgHIgLAHIAAgOIAwgdIAAANIgJAGIAAAGIgHAFIAAB8IAHgFIAAAHIAKgHIAAAOIgwAeg");
	this.shape_461.setTransform(-130.3,93.3);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#201025").s().p("AgXBTIAKgGIAAgFIAHgFIAAh8IgHAFIAAgIIgLAIIAAgPIAwgdIAAAOIgJAFIAAAHIgHADIAAB9IAHgEIAAAGIAKgGIAAANIgwAeg");
	this.shape_462.setTransform(-136.3,96.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_463.setTransform(-80.2,127.3);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_464.setTransform(-80.2,125.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_465.setTransform(-80.2,129.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#090606").s().p("AgEAAIAAgCIAJACIAAADg");
	this.shape_466.setTransform(-80.2,128.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_467.setTransform(-78.6,127.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_468.setTransform(-78.6,126.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_469.setTransform(-78.6,129.6);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#090606").s().p("AgEAAIAAgCIAJACIAAADg");
	this.shape_470.setTransform(-78.6,129.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_471.setTransform(-81.7,126.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_472.setTransform(-81.8,125.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_473.setTransform(-81.8,128.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#090606").s().p("AgDAAIAAgCIAHACIAAADg");
	this.shape_474.setTransform(-81.7,128.3);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_475.setTransform(-84.8,125.8);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_476.setTransform(-84.8,124.2);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_477.setTransform(-84.8,127.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_478.setTransform(-84.8,127.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#090606").s().p("AgCANIAAgbIAFABIAAAcg");
	this.shape_479.setTransform(-83.3,126.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_480.setTransform(-83.3,124.6);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_481.setTransform(-83.3,128.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#090606").s().p("AgEAAIAAgCIAJACIAAADg");
	this.shape_482.setTransform(-83.3,127.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_483.setTransform(-86.4,125.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_484.setTransform(-86.4,123.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_485.setTransform(-86.4,127.2);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_486.setTransform(-86.4,126.9);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_487.setTransform(-87.9,124.9);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_488.setTransform(-87.9,123.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_489.setTransform(-87.9,126.7);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_490.setTransform(-87.9,126.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_491.setTransform(-89.5,124.4);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_492.setTransform(-89.5,122.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_493.setTransform(-89.5,126.3);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_494.setTransform(-89.5,125.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_495.setTransform(-91.1,123.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_496.setTransform(-91.1,122.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_497.setTransform(-91.1,125.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_498.setTransform(-91.1,125.4);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_499.setTransform(-92.6,123.4);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_500.setTransform(-92.6,121.8);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_501.setTransform(-92.6,125.3);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_502.setTransform(-92.6,124.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_503.setTransform(-95.8,122.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_504.setTransform(-95.8,120.9);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_505.setTransform(-95.8,124.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_506.setTransform(-95.8,124);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_507.setTransform(-94.2,122.9);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_508.setTransform(-94.3,121.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_509.setTransform(-94.3,124.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_510.setTransform(-94.2,124.5);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_511.setTransform(-97.4,122);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_512.setTransform(-97.4,120.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_513.setTransform(-97.4,123.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_514.setTransform(-97.4,123.5);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_515.setTransform(-98.9,121.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_516.setTransform(-98.9,119.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_517.setTransform(-98.9,123.4);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_518.setTransform(-98.9,123.1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_519.setTransform(-100.5,121.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_520.setTransform(-100.5,119.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_521.setTransform(-100.5,122.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_522.setTransform(-100.5,122.6);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_523.setTransform(-102.1,120.6);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_524.setTransform(-102.1,119);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_525.setTransform(-102.1,122.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_526.setTransform(-102.1,122.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_527.setTransform(-103.6,120.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_528.setTransform(-103.6,118.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_529.setTransform(-103.6,122);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_530.setTransform(-103.6,121.6);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_531.setTransform(-106.7,119.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_532.setTransform(-106.8,117.6);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_533.setTransform(-106.8,121.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_534.setTransform(-106.7,120.7);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_535.setTransform(-105.2,119.6);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_536.setTransform(-105.2,118);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_537.setTransform(-105.2,121.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_538.setTransform(-105.2,121.1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_539.setTransform(-108.3,118.7);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_540.setTransform(-108.3,117.1);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_541.setTransform(-108.3,120.6);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_542.setTransform(-108.3,120.2);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_543.setTransform(-109.8,118.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_544.setTransform(-109.9,116.6);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_545.setTransform(-109.9,120.1);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#090606").s().p("AgDABIAAgDIAIADIAAACg");
	this.shape_546.setTransform(-109.8,119.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_547.setTransform(-111.4,117.8);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_548.setTransform(-111.4,116.2);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_549.setTransform(-111.4,119.6);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#090606").s().p("AgEAAIAAgCIAJACIAAADg");
	this.shape_550.setTransform(-111.4,119.3);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_551.setTransform(-113,117.3);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_552.setTransform(-113,115.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_553.setTransform(-113,119.2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_554.setTransform(-113,118.8);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#090606").s().p("AgCANIAAgbIAFABIAAAcg");
	this.shape_555.setTransform(-114.5,116.8);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_556.setTransform(-114.5,115.2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_557.setTransform(-114.5,118.7);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_558.setTransform(-114.5,118.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_559.setTransform(-117.6,115.9);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_560.setTransform(-117.6,114.3);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_561.setTransform(-117.6,117.8);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_562.setTransform(-117.6,117.4);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_563.setTransform(-116.1,116.3);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_564.setTransform(-116.1,114.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_565.setTransform(-116.1,118.2);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_566.setTransform(-116.1,117.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_567.setTransform(-119.2,115.4);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_568.setTransform(-119.2,113.8);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_569.setTransform(-119.2,117.3);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#090606").s().p("AgEAAIAAgCIAJACIAAADg");
	this.shape_570.setTransform(-119.2,116.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_571.setTransform(-120.7,114.9);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_572.setTransform(-120.8,113.3);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_573.setTransform(-120.8,116.8);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_574.setTransform(-120.7,116.5);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_575.setTransform(-122.3,114.4);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_576.setTransform(-122.3,112.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_577.setTransform(-122.3,116.3);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#090606").s().p("AgEAAIAAgCIAJACIAAADg");
	this.shape_578.setTransform(-122.3,116);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_579.setTransform(-123.9,114);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_580.setTransform(-123.9,112.4);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_581.setTransform(-123.9,115.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_582.setTransform(-123.9,115.5);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_583.setTransform(-125.4,113.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_584.setTransform(-125.4,111.9);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_585.setTransform(-125.4,115.4);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_586.setTransform(-125.4,115);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_587.setTransform(-128.5,112.6);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_588.setTransform(-128.5,111);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_589.setTransform(-128.5,114.5);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_590.setTransform(-128.5,114.1);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_591.setTransform(-126.9,113);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_592.setTransform(-127,111.4);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_593.setTransform(-127,114.9);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_594.setTransform(-126.9,114.5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#090606").s().p("AgCANIAAgbIAFABIAAAcg");
	this.shape_595.setTransform(-130.1,112.1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_596.setTransform(-130.1,110.5);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_597.setTransform(-130.1,114);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_598.setTransform(-130.1,113.6);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_599.setTransform(-131.6,111.6);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_600.setTransform(-131.6,110);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_601.setTransform(-131.6,113.5);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_602.setTransform(-131.6,113.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_603.setTransform(-133.2,111.1);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_604.setTransform(-133.2,109.5);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_605.setTransform(-133.2,113);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_606.setTransform(-133.2,112.7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#090606").s().p("AgCANIAAgbIAFABIAAAcg");
	this.shape_607.setTransform(-134.8,110.7);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_608.setTransform(-134.8,109);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_609.setTransform(-134.8,112.5);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#090606").s().p("AgEAAIAAgCIAJACIAAADg");
	this.shape_610.setTransform(-134.8,112.2);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_611.setTransform(-136.3,110.2);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_612.setTransform(-136.3,108.6);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_613.setTransform(-136.3,112.1);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_614.setTransform(-136.3,111.7);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_615.setTransform(-139.4,109.2);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_616.setTransform(-139.4,107.6);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_617.setTransform(-139.4,111.1);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_618.setTransform(-139.4,110.8);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_619.setTransform(-137.9,109.7);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_620.setTransform(-137.9,108.1);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_621.setTransform(-137.9,111.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#090606").s().p("AgEAAIAAgCIAJACIAAADg");
	this.shape_622.setTransform(-137.9,111.2);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#090606").s().p("AgCANIAAgbIAFABIAAAcg");
	this.shape_623.setTransform(-141,108.8);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_624.setTransform(-141,107.2);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_625.setTransform(-141,110.6);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_626.setTransform(-141,110.3);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_627.setTransform(-142.5,108.3);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_628.setTransform(-142.5,106.7);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_629.setTransform(-142.5,110.2);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_630.setTransform(-142.5,109.8);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_631.setTransform(-144.1,107.8);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_632.setTransform(-144.1,106.2);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_633.setTransform(-144.1,109.7);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_634.setTransform(-144.1,109.3);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_635.setTransform(-145.7,107.3);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_636.setTransform(-145.7,105.7);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_637.setTransform(-145.7,109.2);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_638.setTransform(-145.7,108.8);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_639.setTransform(-147.2,106.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_640.setTransform(-147.2,105.2);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_641.setTransform(-147.2,108.7);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#090606").s().p("AgEAAIAAgCIAJACIAAADg");
	this.shape_642.setTransform(-147.2,108.4);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#090606").s().p("AgCANIAAgbIAFABIAAAcg");
	this.shape_643.setTransform(-150.3,105.9);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_644.setTransform(-150.4,104.3);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_645.setTransform(-150.4,107.8);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_646.setTransform(-150.3,107.4);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_647.setTransform(-148.8,106.3);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_648.setTransform(-148.8,104.7);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_649.setTransform(-148.8,108.2);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_650.setTransform(-148.8,107.9);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_651.setTransform(-151.9,105.4);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_652.setTransform(-151.9,103.8);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_653.setTransform(-151.9,107.3);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_654.setTransform(-151.9,107);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_655.setTransform(-153.4,104.9);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_656.setTransform(-153.5,103.3);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_657.setTransform(-153.5,106.8);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_658.setTransform(-153.4,106.5);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#090606").s().p("AgCANIAAgbIAFABIAAAcg");
	this.shape_659.setTransform(-155,104.5);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_660.setTransform(-155,102.8);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_661.setTransform(-155,106.3);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#090606").s().p("AgDAAIAAgCIAIACIAAADg");
	this.shape_662.setTransform(-155,106);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_663.setTransform(-156.6,104);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_664.setTransform(-156.6,102.4);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_665.setTransform(-156.6,105.9);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_666.setTransform(-156.6,105.5);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#090606").s().p("AgCANIAAgbIAFACIAAAbg");
	this.shape_667.setTransform(-158.1,103.5);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_668.setTransform(-158.1,101.9);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#090606").s().p("AgFAAIAAgDIALADIAAAEg");
	this.shape_669.setTransform(-158.1,105.4);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#090606").s().p("AgEAAIAAgCIAIACIAAADg");
	this.shape_670.setTransform(-158.1,105);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#090606").s().p("AhFgXICLhaIAACLIiLBYg");
	this.shape_671.setTransform(-51.8,122.4);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#090606").s().p("AgYAYIAAhAIAyAQIAABBg");
	this.shape_672.setTransform(-99.1,134.9);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#090606").s().p("AgYAZIAAhCIAxARIAABCg");
	this.shape_673.setTransform(-109.1,131.5);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#090606").s().p("AgZAYIAAhBIAyARIAABCg");
	this.shape_674.setTransform(-118,128.5);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#090606").s().p("AgYAYIAAhAIAxAQIAABBg");
	this.shape_675.setTransform(-150.9,117.6);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#611F5B").s().p("AmWgyIAAipIMtD3IAAC/g");
	this.shape_676.setTransform(-118,123.5);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#8A2F89").s().p("Ah+BQIAAjzID+BRIAAD2g");
	this.shape_677.setTransform(-110.8,121.9);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#D3BFD2").s().p("AAdGZIBSg1QBVg0AQADQAbAECgBFIBHhyIiEgfIEqi7Ih6hOIk2DZI+wpgIB7AiIAYhIIAlhFIAzA2IAChdIAqAIIAAgwIBIgEIA2ASIAAgVIATAaQAWAZALgEQAMgFAMADQAHACADADIAYAOIgGgYIA9AhIAxADIBIArIgGglIA+AiIAAg5IArARIAjAfIAPgVIAdAWIAlALIAAhiIMgDBIAABfIAsgFIAiAOIAaAVIAmgPIAdAcIAVgjIA8AQIgEg3IALgmIAUAeIAXgKIAvA5IAdAAIAbAjIARhCIAbASIAIAjIAkAAIAJANIAaAKIARgKIAAhSIASAAIASAvIARgWIAJANIAaAAIAsAoIAAg/IARgbIAbAIIAaAcIAZgiIASAGIABBDIBxAwIAAhEIAaAFIASgmIARAFIAjAXIAABSIAsAAIAjBIIAaAAIAJAaIAaAAIAKA5IAbAAIAWAgIAngNIAcA4IAhgXIBGAGIgRhzIAjAWIAsgwIAAg6IAkgqIAahDIFLAsIAAB7Ig4BJIkzDWIAGByIqCFug");
	this.shape_678.setTransform(-11.8,-154.1);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgWgIIAWgJIgOgFIAMgNIgMgOIAIgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIASAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_679.setTransform(86.8,-194.4);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_680.setTransform(87.7,-184.4);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgWgIIAWgJIgPgFIANgNIgNgOIAJgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_681.setTransform(-140.9,-228.9);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_682.setTransform(-140,-218.9);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIANgNIgNgOIAIgLIgdgRIAnAHIgKgSIAtAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_683.setTransform(90.3,-202.5);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_684.setTransform(91.2,-192.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgVgIIAVgJIgPgEIAOgOIgOgNIAJgMIgegQIAnAGIgJgTIAsAXIgNgXIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAApIgzAJg");
	this.shape_685.setTransform(117.6,-187.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_686.setTransform(118.5,-177.1);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgIIgPgGIANgNIgNgOIAIgLIgdgQIAnAGIgKgSIAtAVIgNgVIAXAOIgHgbIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZAQIAZAAIgKANIAKAUIgPgKIAAAoIgzAKg");
	this.shape_687.setTransform(109.7,-193.9);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_688.setTransform(110.6,-183.9);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIANgNIgNgOIAIgLIgdgRIAnAHIgKgSIAtAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_689.setTransform(108.1,-195.3);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_690.setTransform(109,-185.3);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgIIgPgGIANgNIgNgOIAIgLIgdgRIAnAHIgKgSIAtAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_691.setTransform(105.3,-199.1);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_692.setTransform(106.2,-189.1);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#9D4895").s().p("AgBAvIhCAHIAZgTIgVgIIAVgJIgPgEIANgOIgNgNIAIgMIgdgRIAnAHIgKgTIAtAWIgNgWIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgKANIAKAUIgPgKIAAApIgzAJg");
	this.shape_693.setTransform(101.4,-208.8);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_694.setTransform(102.3,-198.8);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgUIgVgHIAVgJIgPgFIANgNIgNgOIAJgMIgegQIAnAHIgJgTIAsAWIgNgWIAXAPIgHgbIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZARIAZAAIgKALIAKAVIgPgLIAAApIgzAKg");
	this.shape_695.setTransform(111.4,-178);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_696.setTransform(112.3,-168);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#9D4895").s().p("AAAAwIhDAHIAZgUIgVgIIAVgJIgPgEIAOgOIgOgNIAIgMIgdgQIAnAGIgKgSIAtAWIgMgWIAWAPIgGgcIAGANIATAAIgCgNIAUAAIAFAXIAfAAIgXAWIAXAAIgYAQIAYAAIgKAMIAKAUIgOgKIAAApIg0AJg");
	this.shape_697.setTransform(107.9,-179.4);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_698.setTransform(108.8,-169.4);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#9D4895").s().p("AgBAvIhCAHIAZgTIgWgIIAWgJIgPgEIAOgOIgOgOIAIgLIgdgRIAnAHIgKgTIAtAWIgMgWIAVAQIgGgcIAGAMIATAAIgBgMIAUAAIAFAWIAfAAIgXAWIAXAAIgYAQIAYAAIgKANIAKAUIgOgKIAAAoIg0AKg");
	this.shape_699.setTransform(97.9,-184.1);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_700.setTransform(98.8,-174.1);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgWgIIAWgJIgPgEIAOgOIgOgNIAIgMIgdgQIAnAGIgKgTIAtAXIgMgXIAWAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgOgKIAAApIg0AJg");
	this.shape_701.setTransform(93,-187.5);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_702.setTransform(93.8,-177.5);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgWgHIAWgJIgPgGIANgNIgNgOIAJgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIASAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAVIgOgLIAAAoIg0AKg");
	this.shape_703.setTransform(101.8,-178.5);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_704.setTransform(102.6,-168.5);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#9D4895").s().p("AgBAvIhCAHIAZgTIgVgIIAVgJIgPgFIANgNIgNgOIAIgMIgdgQIAnAHIgKgTIAtAWIgNgWIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgKANIAKAUIgPgKIAAAoIgzAKg");
	this.shape_705.setTransform(71,-203.5);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_706.setTransform(71.9,-193.5);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIAOgNIgOgOIAJgLIgegRIAoAHIgKgSIAsAVIgMgVIAWAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_707.setTransform(78.9,-204.9);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_708.setTransform(79.8,-194.9);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgWgIIAWgJIgPgFIAOgNIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAVAPIgGgcIAGANIATAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYAQIAYAAIgKANIAKAUIgOgKIAAAoIg0AKg");
	this.shape_709.setTransform(61.4,-207.2);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_710.setTransform(62.2,-197.2);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIANgNIgNgOIAIgLIgdgRIAnAHIgKgSIAtAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_711.setTransform(64.9,-199.5);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_712.setTransform(65.8,-189.5);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgWgIIAWgJIgOgEIAMgOIgMgNIAIgMIgegQIAoAGIgKgSIAsAWIgNgWIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAWIAXAAIgZAQIAZAAIgKAMIAKAUIgPgKIAAApIgzAJg");
	this.shape_713.setTransform(67.5,-197.8);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_714.setTransform(68.3,-187.8);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgHIAVgJIgPgGIANgNIgNgOIAJgLIgegQIAnAGIgJgSIAsAWIgNgWIAXAOIgHgbIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAVIgPgMIAAAqIgzAJg");
	this.shape_715.setTransform(19.4,-201.6);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_716.setTransform(20.3,-191.6);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#9D4895").s().p("AgBAvIhCAIIAZgUIgWgIIAWgIIgPgGIAOgNIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAWAOIgHgbIAHANIASAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYAQIAYAAIgKANIAKAUIgOgKIAAAoIg0AKg");
	this.shape_717.setTransform(31.7,-199.6);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_718.setTransform(32.5,-189.7);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgHIAVgJIgPgGIANgNIgNgOIAIgLIgdgQIAnAGIgKgSIAtAWIgNgWIAXAOIgHgbIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAVIgPgMIAAAqIgzAJg");
	this.shape_719.setTransform(45.7,-201.6);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_720.setTransform(46.6,-191.6);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgUIgVgHIAVgJIgPgEIAOgOIgOgOIAJgMIgegQIAoAHIgKgTIAsAWIgNgWIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgYARIAYAAIgKALIAKAVIgPgLIAAApIgzAKg");
	this.shape_721.setTransform(53.6,-206.8);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_722.setTransform(54.5,-196.8);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#9D4895").s().p("AgBAvIhCAIIAZgUIgVgIIAVgJIgPgFIAOgNIgOgOIAJgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAOIgHgbIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKALIAKAVIgPgKIAAAoIgzAKg");
	this.shape_723.setTransform(53.6,-210.1);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_724.setTransform(54.5,-200.1);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgHIAVgJIgPgGIAOgNIgOgNIAJgMIgegQIAoAGIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAVIgPgLIAAAoIgzAKg");
	this.shape_725.setTransform(38.7,-211.5);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_726.setTransform(39.6,-201.5);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#9D4895").s().p("AAAAwIhDAHIAZgUIgVgIIAVgJIgPgFIAOgNIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAWAPIgGgcIAGANIASAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgOgKIAAAoIg0AKg");
	this.shape_727.setTransform(42.2,-208.9);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_728.setTransform(43.1,-198.9);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#9D4895").s().p("AgBAvIhCAHIAZgTIgVgIIAVgJIgPgEIANgOIgNgOIAIgLIgdgRIAnAHIgKgTIAtAWIgNgWIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgKANIAKAUIgPgKIAAAoIgzAKg");
	this.shape_729.setTransform(30.8,-212.5);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAeAoIAVgjIAACMg");
	this.shape_730.setTransform(31.7,-202.5);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#9D4895").s().p("AgBAvIhBAHIAYgTIgVgIIAVgJIgPgEIAOgOIgOgOIAJgLIgegRIAoAHIgKgTIAsAWIgMgWIAWAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgYAQIAYAAIgKANIAKAUIgPgKIAAAoIgzAKg");
	this.shape_731.setTransform(27.3,-212.5);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_732.setTransform(28.2,-202.5);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#9D4895").s().p("AgBAvIhCAHIAZgTIgVgIIAVgJIgPgEIANgOIgNgOIAJgLIgegRIAnAHIgJgTIAsAWIgNgWIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgKANIAKAUIgPgKIAAAoIgzAKg");
	this.shape_733.setTransform(23.8,-212.5);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_734.setTransform(24.7,-202.5);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#9D4895").s().p("AgBAwIhBAGIAYgUIgVgHIAVgJIgPgEIAOgOIgOgOIAJgMIgegQIAoAHIgKgTIAsAWIgMgWIAWAPIgHgbIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgYARIAYAAIgKALIAKAVIgPgLIAAApIgzAKg");
	this.shape_735.setTransform(12.9,-206.3);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_736.setTransform(13.8,-196.4);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgVgIIAVgJIgPgEIANgOIgNgNIAIgMIgdgQIAnAGIgKgTIAtAWIgNgWIAXAPIgHgbIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZARIAZAAIgKAMIAKAUIgPgLIAAAqIgzAJg");
	this.shape_737.setTransform(-3.4,-200.5);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_738.setTransform(-2.5,-190.5);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgOgFIAMgNIgMgOIAHgLIgdgRIAoAHIgLgSIAtAVIgNgVIAXAPIgGgcIAGANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_739.setTransform(-9.8,-201.1);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_740.setTransform(-8.9,-191.1);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#9D4895").s().p("AgBAvIhCAHIAZgTIgVgIIAVgJIgPgEIANgOIgNgOIAIgLIgdgRIAnAHIgKgTIAtAWIgNgWIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgKANIAKAUIgPgKIAAAoIgzAKg");
	this.shape_741.setTransform(9.4,-212.5);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_742.setTransform(10.3,-202.5);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgVgIIAVgJIgPgEIAOgOIgOgNIAJgMIgegRIAoAHIgKgTIAsAXIgMgXIAWAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgYAQIAYAAIgKANIAKAUIgPgKIAAApIgzAJg");
	this.shape_743.setTransform(0.7,-202.5);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_744.setTransform(1.6,-192.5);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgVgIIAVgJIgPgEIAOgOIgOgNIAJgMIgegRIAnAHIgJgTIAsAXIgNgXIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgKANIAKAUIgPgKIAAApIgzAJg");
	this.shape_745.setTransform(-13.3,-202.5);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_746.setTransform(-12.4,-192.5);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIANgNIgNgOIAIgLIgdgRIAnAHIgKgSIAtAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_747.setTransform(-137.4,-228.9);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_748.setTransform(-136.5,-218.9);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#9D4895").s().p("AgBAvIhBAHIAYgTIgVgIIAVgJIgOgFIAMgNIgMgOIAIgMIgegQIAoAHIgKgTIAsAWIgNgWIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgJANIAJAUIgPgLIAAApIgyAKg");
	this.shape_749.setTransform(-103.1,-224.1);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAeAoIAVgjIAACMg");
	this.shape_750.setTransform(-102.2,-214.1);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#9D4895").s().p("AAAAwIhDAGIAZgTIgVgIIAVgJIgOgEIANgOIgNgNIAHgMIgdgQIAoAGIgLgTIAtAWIgNgWIAXAQIgGgcIAGAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZARIAZAAIgJAMIAJAUIgPgLIAAAqIgzAJg");
	this.shape_751.setTransform(-109.2,-225.3);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_752.setTransform(-108.4,-215.3);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIANgNIgNgOIAJgLIgegRIAnAHIgJgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_753.setTransform(-110.1,-228.1);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_754.setTransform(-109.2,-218.1);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#9D4895").s().p("AAAAvIhCAHIAYgTIgVgIIAVgJIgOgFIAMgNIgMgOIAIgMIgegQIAoAHIgKgSIAsAVIgNgVIAXAPIgGgcIAGANIATAAIgCgNIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgJANIAJAUIgPgKIAAAoIgzAKg");
	this.shape_755.setTransform(-113.6,-227.9);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_756.setTransform(-112.8,-217.9);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgVgIIAVgJIgPgEIAOgOIgOgNIAIgMIgdgQIAnAGIgKgTIAtAWIgMgWIAWAQIgGgcIAGAMIASAAIgBgMIAUAAIAFAWIAfAAIgXAWIAXAAIgYARIAYAAIgKAMIAKAUIgOgLIAAAqIg0AJg");
	this.shape_757.setTransform(-119.8,-225.3);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_758.setTransform(-118.9,-215.3);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgEIANgOIgNgOIAJgLIgegRIAnAHIgJgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAWIAXAAIgZAQIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_759.setTransform(-125.1,-225.5);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_760.setTransform(-124.2,-215.5);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#9D4895").s().p("AAAAwIhDAHIAZgUIgVgHIAVgJIgOgGIAMgNIgMgOIAHgLIgdgRIAoAHIgLgSIAtAVIgNgVIAXAOIgGgbIAGANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYAQIAYAAIgJANIAJAVIgPgLIAAAoIgzAKg");
	this.shape_761.setTransform(8.7,159.5);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_762.setTransform(9.5,169.5);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#9D4895").s().p("AAAAwIhCAHIAYgUIgWgIIAWgIIgOgGIAMgNIgMgNIAIgMIgegQIAoAGIgKgTIAsAWIgNgWIAXAPIgGgbIAGAMIATAAIgCgMIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgJAMIAJAUIgPgLIAAAqIgzAJg");
	this.shape_763.setTransform(1.2,156);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_764.setTransform(2.1,166);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgVgIIAVgJIgPgFIAOgNIgOgOIAJgLIgegRIAoAHIgKgSIAsAVIgMgVIAWAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_765.setTransform(-169.9,-224.4);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_766.setTransform(-169,-214.4);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgHIAVgJIgPgGIAOgNIgOgNIAJgMIgegQIAnAGIgJgTIAsAXIgNgXIAXAPIgHgbIAHAMIATAAIgCgMIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAVIgPgLIAAApIgzAJg");
	this.shape_767.setTransform(-153.2,-232.8);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAWgjIAACMg");
	this.shape_768.setTransform(-152.3,-222.8);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgWgIIAWgJIgPgFIAOgNIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAWAPIgHgcIAHANIASAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgOgKIAAAoIg0AKg");
	this.shape_769.setTransform(-149.7,-234.4);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_770.setTransform(-148.8,-224.4);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgHIAVgJIgPgGIANgNIgNgOIAIgLIgdgRIAnAHIgKgSIAtAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAVIgPgLIAAAoIgzAKg");
	this.shape_771.setTransform(-165.7,-230.2);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_772.setTransform(-164.8,-220.2);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgHIAVgJIgPgGIANgNIgNgNIAIgMIgdgQIAnAGIgKgTIAtAXIgNgXIAXAPIgHgbIAHAMIATAAIgCgMIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAVIgPgLIAAApIgzAJg");
	this.shape_773.setTransform(-161.1,-232.8);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_774.setTransform(-160.2,-222.8);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgVgIIAVgJIgOgFIAMgNIgMgOIAIgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgJAMIAJAUIgPgKIAAAoIgyAKg");
	this.shape_775.setTransform(-182.4,-216.9);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAeAoIAVgjIAACMg");
	this.shape_776.setTransform(-181.5,-206.9);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#9D4895").s().p("AgBAwIhBAGIAYgTIgVgIIAVgJIgPgEIAOgOIgOgNIAJgMIgegQIAoAGIgKgTIAsAXIgMgXIAWAPIgHgbIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgYARIAYAAIgKAMIAKAUIgPgLIAAAqIgzAJg");
	this.shape_777.setTransform(-199.2,-216.2);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_778.setTransform(-198.3,-206.2);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgWgIIAWgJIgPgFIAOgNIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAVAPIgGgcIAGANIATAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgOgKIAAAoIg0AKg");
	this.shape_779.setTransform(-199.2,-216.9);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_780.setTransform(-198.3,-206.9);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgWgIIAWgJIgOgFIAMgNIgMgOIAIgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_781.setTransform(-191.3,-218.1);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_782.setTransform(-190.4,-208.1);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgHIAVgJIgPgGIANgNIgNgNIAIgMIgdgQIAnAGIgKgSIAtAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAVIgPgLIAAAoIgzAKg");
	this.shape_783.setTransform(-188.3,-222.8);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_784.setTransform(-187.4,-212.8);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIANgNIgNgOIAIgLIgdgRIAnAHIgKgSIAtAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_785.setTransform(-179.5,-226.8);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_786.setTransform(-178.6,-216.8);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgVgIIAVgJIgOgFIAMgNIgMgOIAIgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgGgcIAGANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_787.setTransform(-168.1,-237.5);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_788.setTransform(-167.2,-227.5);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#9D4895").s().p("AgBAvIhCAHIAZgTIgVgIIAVgJIgPgEIANgOIgNgOIAJgMIgegQIAnAHIgJgTIAsAWIgNgWIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgKANIAKAUIgPgKIAAAoIgzAKg");
	this.shape_789.setTransform(-174.5,-236.3);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAeAoIAXgjIAACMg");
	this.shape_790.setTransform(-173.6,-226.4);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgVgHIAVgJIgOgGIAMgNIgMgOIAIgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgJAMIAJAVIgPgLIAAAoIgyAKg");
	this.shape_791.setTransform(-188.6,-235.3);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_792.setTransform(-187.7,-225.3);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgVgIIAVgJIgPgEIAOgOIgOgNIAIgMIgdgRIAnAHIgKgTIAtAXIgMgXIAWAQIgGgcIAGAMIASAAIgBgMIAUAAIAFAWIAfAAIgXAWIAXAAIgYAQIAYAAIgKANIAKAUIgOgLIAAAqIg0AJg");
	this.shape_793.setTransform(-184.1,-238.9);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_794.setTransform(-183.3,-228.9);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#9D4895").s().p("AgBAwIhBAGIAYgTIgVgIIAVgJIgOgEIAMgOIgMgOIAIgLIgegRIAnAHIgJgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZAQIAZAAIgKANIAKAUIgOgKIAAAoIgzAKg");
	this.shape_795.setTransform(-195.7,-228.2);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAeAoIAVgjIAACMg");
	this.shape_796.setTransform(-194.8,-218.2);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgVgIIAVgJIgPgEIAOgOIgOgNIAJgMIgegQIAnAGIgJgTIAsAWIgNgWIAXAPIgHgbIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZARIAZAAIgKAMIAKAUIgPgLIAAAqIgzAJg");
	this.shape_797.setTransform(-196.6,-227.5);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_798.setTransform(-195.7,-217.5);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgVgHIAVgJIgPgGIAOgNIgOgOIAJgLIgegRIAoAHIgKgSIAsAVIgMgVIAWAOIgHgbIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYAQIAYAAIgKANIAKAVIgPgLIAAAoIgzAKg");
	this.shape_799.setTransform(-201,-224.9);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_800.setTransform(-200.1,-214.9);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgHIAVgJIgPgGIAOgNIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAWAOIgHgbIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYAQIAYAAIgKANIAKAVIgOgLIAAAoIg0AKg");
	this.shape_801.setTransform(-204.6,-224.9);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_802.setTransform(-203.7,-214.9);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#9D4895").s().p("AgBAvIhCAHIAZgTIgVgIIAVgJIgPgEIANgOIgNgOIAJgLIgegRIAnAHIgJgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgKANIAKAUIgPgKIAAAoIgzAKg");
	this.shape_803.setTransform(-208.9,-224.2);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_804.setTransform(-208,-214.2);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgVgIIAVgJIgPgEIAOgOIgOgNIAIgMIgdgQIAnAGIgKgTIAtAXIgMgXIAVAPIgFgbIAFAMIAUAAIgCgMIAUAAIAEAXIAgAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgPgKIAAApIgzAJg");
	this.shape_805.setTransform(-211.5,-221.6);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_806.setTransform(-210.6,-211.6);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#9D4895").s().p("AgBAvIhCAHIAZgUIgWgHIAWgJIgPgEIAOgOIgOgNIAIgNIgdgQIAnAHIgKgTIAtAWIgMgWIAVAQIgGgcIAGAMIATAAIgBgMIAUAAIAFAWIAfAAIgXAWIAXAAIgYAQIAYAAIgKANIAKAUIgOgLIAAAqIg0AJg");
	this.shape_807.setTransform(-213,-220.9);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_808.setTransform(-212.2,-211);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#9D4895").s().p("AgBAvIhCAHIAZgUIgVgHIAVgJIgPgEIAOgOIgOgNIAJgNIgegQIAnAHIgJgTIAsAWIgNgWIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgKANIAKAUIgPgLIAAAqIgzAJg");
	this.shape_809.setTransform(-216,-220.9);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_810.setTransform(-215.1,-211);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgVgIIAVgJIgPgEIAOgOIgOgNIAJgMIgegQIAnAGIgJgTIAsAXIgNgXIAXAPIgHgbIAHAMIATAAIgCgMIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAApIgzAJg");
	this.shape_811.setTransform(-221,-221.6);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_812.setTransform(-220.1,-211.6);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#9D4895").s().p("AgBAvIhCAHIAZgTIgVgIIAVgJIgPgEIANgOIgNgNIAIgNIgdgQIAnAHIgKgTIAtAWIgNgWIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAWIAfAAIgXAWIAXAAIgZAQIAZAAIgKANIAKAUIgPgLIAAAqIgzAJg");
	this.shape_813.setTransform(-227.3,-226.3);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_814.setTransform(-226.4,-216.4);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIAOgNIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAVAPIgFgcIAFANIATAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgOgKIAAAoIg0AKg");
	this.shape_815.setTransform(-231.8,-231.1);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_816.setTransform(-231,-221.1);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#9D4895").s().p("AgBAvIhCAIIAZgUIgVgIIAVgIIgPgGIAOgNIgOgOIAJgLIgegRIAoAHIgKgSIAsAVIgMgVIAWAOIgHgbIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYAQIAYAAIgKANIAKAUIgPgKIAAAoIgzAKg");
	this.shape_817.setTransform(-225.9,-232.9);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_818.setTransform(-225,-223);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgWgIIAWgJIgPgFIAOgNIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAWAPIgHgcIAHANIASAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgOgKIAAAoIg0AKg");
	this.shape_819.setTransform(-218,-234.4);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_820.setTransform(-217.1,-224.4);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgVgIIAVgJIgPgEIAOgOIgOgNIAJgMIgegRIAnAHIgJgTIAsAXIgNgXIAXAQIgHgcIAHAMIATAAIgCgMIAUAAIAFAXIAfAAIgXAVIAXAAIgZAQIAZAAIgKANIAKAUIgPgKIAAApIgzAJg");
	this.shape_821.setTransform(-207.1,-235.8);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#401841").s().p("AAAAwIgaAAIAAh4IAfAoIAVgjIAACMg");
	this.shape_822.setTransform(-206.2,-225.8);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgVgIIAVgJIgPgFIAOgNIgOgOIAJgLIgegRIAoAHIgKgSIAsAVIgMgVIAWAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_823.setTransform(-194.8,-241.8);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_824.setTransform(-193.9,-231.8);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#9D4895").s().p("AgBAwIhBAHIAYgUIgVgHIAVgJIgOgGIAMgNIgMgOIAIgLIgegRIAoAHIgKgSIAsAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgJAMIAJAVIgPgLIAAAoIgyAKg");
	this.shape_825.setTransform(-182.4,-247.8);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAeAoIAVgjIAACMg");
	this.shape_826.setTransform(-181.5,-237.8);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgWgIIAWgIIgPgGIAOgNIgOgOIAIgLIgdgQIAnAGIgKgSIAtAVIgMgVIAVAOIgGgbIAGANIATAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgPgLIAAAqIgzAJg");
	this.shape_827.setTransform(-175.3,-252.5);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_828.setTransform(-174.5,-242.5);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#9D4895").s().p("AgBAwIhCAGIAZgTIgWgIIAWgJIgPgEIAOgOIgOgOIAIgLIgdgRIAnAHIgKgSIAtAVIgMgVIAVAPIgGgcIAGANIATAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYAQIAYAAIgKANIAKAUIgPgKIAAAoIgzAKg");
	this.shape_829.setTransform(-189.2,-255.2);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_830.setTransform(-188.3,-245.2);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgJIgPgFIANgNIgNgOIAIgLIgdgRIAnAHIgKgSIAtAVIgNgVIAXAPIgHgcIAHANIATAAIgCgNIAUAAIAFAXIAfAAIgXAVIAXAAIgZARIAZAAIgKAMIAKAUIgPgKIAAAoIgzAKg");
	this.shape_831.setTransform(-179.5,-257.2);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAXgjIAACMg");
	this.shape_832.setTransform(-178.6,-247.2);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#9D4895").s().p("AgBAwIhCAHIAZgUIgVgIIAVgIIgPgGIAOgNIgOgNIAIgMIgdgQIAnAGIgKgSIAtAVIgMgVIAWAOIgGgbIAGANIASAAIgBgNIAUAAIAFAXIAfAAIgXAVIAXAAIgYARIAYAAIgKAMIAKAUIgOgLIAAApIg0AKg");
	this.shape_833.setTransform(-184.1,-266.4);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#401841").s().p("AAAAwIgZAAIAAh4IAdAoIAWgjIAACMg");
	this.shape_834.setTransform(-183.3,-256.4);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#D4B8D8").s().p("A8MdOICfhjIUtwkIhcp9IEekuIg1lMILxmdIB5i7IMllaICrlhIAAAAIAag1IBsAgIgnBEIgBAAIi7GDIssFdIh2C3IrHGGIAxE1IkeEvIBdKGI1gROIAAgBIhWA5g");
	this.shape_835.setTransform(211.3,106.9);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#69246D").s().p("EhFXgUUIALoeMBdLAhOIQTFRIdGL+IgYHIg");
	this.shape_836.setTransform(-138.5,270);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#54345B").s().p("AhMBRICUjhIAFEHIghAag");
	this.shape_837.setTransform(-422,-404.6);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#54345B").s().p("AhIgHICOh3IADDWIg7Ang");
	this.shape_838.setTransform(-399.2,-364.6);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#69246D").s().p("Aidh3IgDkmIFBItIgJEOg");
	this.shape_839.setTransform(-587.2,-264.6);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#69246D").s().p("AgIAkIrdjSIAJkOILvD3ILTGKIgnD4g");
	this.shape_840.setTransform(-497.8,-205.8);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#69246D").s().p("AhfBcIgKkTIDTDnIgzCIg");
	this.shape_841.setTransform(-419.9,-122.9);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#69246D").s().p("AgVkIIAXkjIAUI4IgLIfg");
	this.shape_842.setTransform(-583.6,84.3);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#54345B").s().p("AgJABIAdiaIgHC9IggB2g");
	this.shape_843.setTransform(206.3,-164.8);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#54345B").s().p("AhfgLIC/hkIgKCYIiuBGg");
	this.shape_844.setTransform(195.7,-153.5);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#54345B").s().p("Am7GRIN3uBIgcHTInsIOg");
	this.shape_845.setTransform(523.5,125.8);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#54345B").s().p("AghCjIjYhFIHgmmIATG+IkYDTg");
	this.shape_846.setTransform(526,218.3);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#54345B").s().p("AwyKCMAh6gbMIADGKMgiVAcKg");
	this.shape_847.setTransform(413,344.5);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#B28CB5").s().p("AnniZIAMgLIPDE/IgMAKg");
	this.shape_848.setTransform(112.6,302.6);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#B28CB5").s().p("Ai1CXIFTk0IAYAHIlUE1g");
	this.shape_849.setTransform(265.9,234.7);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#B28CB5").s().p("EArZArgIHMl0I+uqQIteKyIgWgIIFvkmIzYmmIlTEFIgWgIIFSkFIuHkzIkuDBIgWgJIEtjAItRkhIl9DpIgVgJIF7joIuhk7ImaDkIgVgKIGYjiIqEjbImyD8IgUgJIGvj7IsJkIIm5DrIgUgJIG2jqIsykXIAMgJIM3EXIJKk4ItFkXIrbFzIgUgKILXlxIlOhvIANgLIFTBxIJVkwIkShcIANgLIEXBeIHhj1IlaiEIAOgKIFTCBIATAAIHvj8IqZi7IALgLIKgC9IH5kBIsPjtIjWBSIgSgLIDOhQIgigKImygFIBDmhIAaACIhBGSIGcAFIAxAPIJcjpIsAjkIAGgGIiuBZIgUgKIWFrTIATAKIzOJ3IMIDkIEQhpII9lrIAVAJIpAFtIkJBmIK2DNIFPiqIFVlQIAYAIIlPFIIPnB2IEnieMggfgKMIAMgLMAglAKOIACgCIAOAHIJCC1IFEi+IAVAKIlBC8IBqAhIgNALIhugjIkJCcIMmDvILYmVIgahrIFQjgIAWAJIlLDcIAaBmIKaDPIgMALIqXjOIrRGQILhDaIHMkZIgRgGIAMgLIAVAHICRhYIAVAJIiPBXIMyEDIK1kPIARAMIqtELIMRD5IgNALIsZj8Ii3BIIklC6IKIC/IgMAMIqMjBInZErIL2DgIgLAMIr6jiInjEyIMpD1IgNALIssj2Im+EbINIEBIF7kGIAdFnIgBABIgSATIPQEWIFuk8IkYhUImCD7IgVgJIF/j6IsfjvIALgMIMjDxIAcgRIAWAJIgZAQIEWBTIGoluIupjzIAKgMIOrD0IDYjoIulkjIAMgLIOkEiIEJkdIgHgBIqijaIANgLIKfDaIAHABIHyoaIj8hHInsFXIgWgIIHqlWIjSg8Im+FOIgXgIIG9lNIiRgpIALgMICUArIDEiSIAVAIIjBCRIHjCJIABgBICti1IAYAHIiuC2IFlBlIgCjbIAaABIADDgIFpAgIgDgJIAPjRIAbABIgQDSIAEAKICvAPIgCANIingPICLFUIgaABIiMlXIlvgiIAFFuIgBABIjIDRIGfBZIgHAMImjhZIgDAEIomDYImahDIgJgDIjXDnIUkE8IE/mbIAYAGIqwN5IDNA+IgMALIjKg9IgGAGIlQEqIDoBBIgMALIjohBIlxFGIgYgIIFxlGI2GmTIlZEoIgXgIIFXkmIvMkWIkCEQIBdKCIneF/IeuKPIHwmSI9IplIAMgLIdJJmIHFlvMgldgLwIAMgMMAulAOpIgLAMIozixInEFvILIDqIgNAKIrIjqInwGSIMfEKIgMALIsgkKInMF0gAnVauIgDACITWGmIHimCMggvgK6IolFbIOFEzIADgDgAtAQQMAgtAK6IHbl7IheqBIACgCIECkTIlZhoImkEjIF9B3IgMALIl/h3InOE+IgWgJIHLk9ItdkOIoaFWINiEiIPXEvIgMALIvXkvItlkjgEgjcARNINREgIIklbItJkYgEAt4ALSIWGGUIFRkpIAEgHI1rmggEgyTAMJIOgE8IIrlSIuDktgA6gLxINJEXIIDlGIs7kVgEAz0AGMIVpGeIFonRI0mk9gEg8vAImIKFDbIJHlCIqcjfgEgo6AG9IODEsIIRlDItgkhgAx/GkIM7EUIIalWIs/kFgAD9FfINdEOIGjkjItJkBgEhJOAEXIMIEHIIwlGIruj5gEgzvADWIKdDfII1k4IqvjlgAYkFHIFWBnIAPgRIgZk7gA/1B7INfEhIIWlGItSkJgApZBTIM+EFIG3kWIs6j8gEg/zgArILtD5IIik+IrMjvgEgq8gByIKwDmIIikvIrSjigA3Bi8INQEIIG7kNIs6j9gAiOjEIM6D8IG/kaIsxj4gEhNOgFJINEEWIJDk0IszkSgEg2fgFpILMDvIH/kqIq/jcgEA+LgDhIAIACIGJBAIIXjSIqdiPgEgisgGmILTDiIHQkBIrojkgAvfnHIM5D8IHHkXIsdjygAFKnkIMwD4IHjkyIsrjwgEg73gN/InxD9IMyESIILkYIsZj4gEBChgIMIKfCQIDGjTIgElsIlxhpgEguCgKKIK/DcIG6kCIqrjRgA7hqzILpDkIHlkMIr8jngAnqrdIMcDxIHnkpIsEjkgANCsYIMrDvIHYksIsdjrgEguagKRIHNj3Iswj4IneDzIAbAAgEgmigOKIKqDQIHRkQIqRjGgAz+vMIL8DoIIAkdIsUjpgAAnwCIMDDjIHmkpIrjjagAU4xKIMdDsIEpi9IAKAFIgJgGICxhFIstkBgEgzqgSKIMvD4IHrkGIshjzgA+myaIKPDHIHpkeIp5i6gAsFzzIMUDpIIFkfIskjugEgrfgWUIMhDzIH/kRIsYjqgA2V20IJ3C6IH2kkIpaiygEg4EgaIIMNDsIIHkIIq4jOgEgjFgamIMXDqIIRkbIvhh1gAtw7aIJYCyIEKicIo7izg");
	this.shape_850.setTransform(8.7,43.9);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#B28CB5").s().p("AlzE5ILAhgIAMioInOlvIAVgHIHUFzIgOC2IrQBig");
	this.shape_851.setTransform(-518.7,-371);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#B28CB5").s().p("An7g5IkGg3IAIgMIEEA3IT3C2IgEAMg");
	this.shape_852.setTransform(-470.9,-268.4);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#B28CB5").s().p("Ao1HfIA1jjIACgBIFIi7IpohPIAEgOIJ0BSIAAACIOxoYIAUAJI0GLaIg0Dgg");
	this.shape_853.setTransform(-506.1,-308.2);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#B28CB5").s().p("AjuBqIHJjdIATAKInIDdg");
	this.shape_854.setTransform(-360.3,-271.1);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#B28CB5").s().p("AjkEPIGuioIhwl/IAagBIByGGIm5Ctg");
	this.shape_855.setTransform(-388.7,-225.4);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#B28CB5").s().p("AieBaIEoi8IAVAJIkoC8g");
	this.shape_856.setTransform(-432.7,-234.7);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#B28CB5").s().p("AiThsIlWCkIgTgKIFJieIz0h5IACgNIUSB8IY7FlIgIAMg");
	this.shape_857.setTransform(214.4,335.7);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#201025").s().p("EATIA3lIvVk3Mhekgh2IgUoyIFfmUIP3nwIDzjRICElmIjUjnIABgCIBEm+IrTmLIrwj3IlDouIAJjnIETh5IAnhCIAWg/IgnhBIgEiwIBGjfIM7mXIBfgfIAFgwIB7gzIHQFgIiVDiIF3DAIiQB3IC8EkISmJaIMVABIFtHAIVNFFIHkh/IIBBGIJXCSIKXBeIgeCcIjABkIAHB7ICDA8IfHHnIFOhzIalD3IhoIzIkxHZIDjAnIlZF0IDZA0It5ODIKZDIIniGnIDYBFMghyAbFgEhJhhCcIgEAxIhoAiIs0GTIhEDaIAECvIAoBBIgXBCIgpBGIkRB4IgIDhIE+IlILrD1ILdGRIhFHDIDUDoIgBACIiGFqIj2DUIv3HwIlZGPIATIoMBeYAhxIPVE3IccLqMAhWgavIjWhFIHhmmIqYjIIN4uCIjZgzIFYlyIjggnIE5nmIBmokI6CjzIlQB1I/bntIiNhBIgIiGIDAhlIAciLIqChcIpYiSInzhEInmB/I1llKIlqm8IsNgBIy1phIjAktICLhzIl1i/ICXjkIm2lMg");
	this.shape_858.setTransform(-0.4,-23.2);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FCF8FB").s().p("EATXA3aIvWk3MheXghxIgUooIFamPIP2nwID4jUICGlqIABgCIjVjpIBFnCIrdmRIrrj1Ik+olIAIjhIEQh4IAqhGIAXhCIgnhBIgFivIBEjaIM0mUIBpghIADgxIBfgnIG1FNIiVDkIF0C+IiLB0IDAErIABACIS1JhIMNABIFqG8IVjFKIHmh/IH1BEIJWCSIKDBcIgbCLIjCBlIAJCGICNBBIfbHsIFQh0IaCDyIhmIlIk5HmIDhAmIlZFzIDYAzIt2OCIKXDIInhGmIDXBFMghWAavg");
	this.shape_859.setTransform(0,-25.1);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#54345B").s().p("Ag0CdIBnozIAIDPIh2Jeg");
	this.shape_860.setTransform(597.4,-33.7);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#54345B").s().p("AiXDfIEwnYIgHD5IiWD6g");
	this.shape_861.setTransform(576.8,7);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#1F1122").s().p("AAIB6Ii0g6IFZlzIgQG3IieCvg");
	this.shape_862.setTransform(567.1,63.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-603.3,-454.3,1206.7,908.6);


(lib.cer_rafael = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#611F5B").s().p("ABKBnQgJgBgHgGIg6hAIg6BAQgHAGgJABQgIAAgHgGQgHgGAAgJQgBgJAHgHIA8hCIg8hBQgHgGABgKQAAgJAHgGQAHgGAIAAQAJABAHAGIA6BAIA6hAQAHgGAJgBQAKAAAGAGQAHAGAAAJQABAKgHAGIg9BBIA9BCQAHAHgBAJQAAAJgHAGQgGAGgJAAIgBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#611F5B").ss(1,1,1).p("AinitIFPAAIAAFbIlPAAg");
	this.shape_1.setTransform(0,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#611F5B").s().p("AimCuIAAlbIFNAAIAAFbg");
	this.shape_2.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,y:0}}]}).to({state:[{t:this.shape,p:{scaleX:1.51,scaleY:1.51,y:0.1}}]},1).to({state:[{t:this.shape,p:{scaleX:1.51,scaleY:1.51,y:0.1}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.51,scaleY:1.51,y:0.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-10.2,19.4,20.6);


(lib.cer_palacio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#611F5B").s().p("ABKBnQgJgBgGgGIg7hAIg6BAQgHAGgIABQgJAAgHgGQgGgGgBgJQAAgJAGgHIA9hCIg9hBQgGgHAAgJQABgJAGgGQAHgGAJAAQAIABAHAGIA6BAIA7hAQAGgGAJgBQAKAAAGAGQAHAGAAAJQABAKgHAGIg9BBIA9BCQAHAHgBAJQAAAJgHAGQgGAGgJAAIgBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#611F5B").ss(1,1,1).p("AibiYIE3AAIAAExIk3AAg");
	this.shape_1.setTransform(0.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#611F5B").s().p("AibCYIAAkwIE3AAIAAEwg");
	this.shape_2.setTransform(0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,y:0}}]}).to({state:[{t:this.shape,p:{scaleX:1.413,scaleY:1.413,y:0.1}}]},1).to({state:[{t:this.shape,p:{scaleX:1.413,scaleY:1.413,y:0.1}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.413,scaleY:1.413,y:0.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-10.2,19.4,20.6);


(lib.cer_gonzalo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#611F5B").s().p("ABKBnQgJAAgGgHIg7hAIg6BAQgHAHgIAAQgJAAgHgGQgGgGgBgJQAAgJAGgHIA9hCIg9hBQgGgHAAgJQABgJAGgGQAHgGAJAAQAIAAAHAHIA6A/IA7g/QAGgHAJAAQAJAAAHAGQAHAGAAAJQAAAJgGAHIg9BBIA9BCQAGAHAAAJQAAAJgHAGQgGAGgJAAIgBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#611F5B").ss(1,1,1).p("AiyivIFlAAIAAFfIllAAg");
	this.shape_1.setTransform(1.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#611F5B").s().p("AiyCwIAAlfIFlAAIAAFfg");
	this.shape_2.setTransform(1.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,y:0}}]}).to({state:[{t:this.shape,p:{scaleX:1.437,scaleY:1.437,y:0.1}}]},1).to({state:[{t:this.shape,p:{scaleX:1.437,scaleY:1.437,y:0.1}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.437,scaleY:1.437,y:0.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-10.2,19.4,20.6);


(lib.cer_gaitan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#611F5B").s().p("ABKBnQgJAAgHgHIg6hAIg6BAQgHAHgIAAQgKAAgGgGQgHgGAAgJQAAgJAGgHIA9hCIg9hBQgGgHAAgJQAAgJAHgGQAGgGAKAAQAIAAAHAHIA6A/IA6g/QAHgHAJAAQAJAAAHAGQAHAGAAAJQAAAJgGAHIg9BBIA9BCQAGAHAAAJQAAAJgHAGQgGAGgJAAIgBAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#611F5B").ss(1,1,1).p("AiuisIFdAAIAAFZIldAAg");
	this.shape_1.setTransform(-0.2,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#611F5B").s().p("AiuCtIAAlYIFdAAIAAFYg");
	this.shape_2.setTransform(-0.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,y:0}}]}).to({state:[{t:this.shape,p:{scaleX:1.583,scaleY:1.583,y:0.1}}]},1).to({state:[{t:this.shape,p:{scaleX:1.583,scaleY:1.583,y:0.1}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{scaleX:1.583,scaleY:1.583,y:0.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-10.2,19.4,20.6);


(lib.Interpolación6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69246D").s().p("AA9DpIgBgNIAAAAQgWgKABgVIgCgBQgQgJgNgTIgFgMQgBgLAAgsIAAgCQgKgFgFgIQgFgKAAgNQgBgMAFgLIABAAQgJgCAAgKQAAgLgDgCIgCgQIgIgDIgbgBQgPgBgLgEIgSgFIghAAQgYAMgVgNIgFgBIgFABQgHgFgQABQgTABgGgCIgLAAIggAAQgSgBgNgFQgPgKACgTQAKgVABgLQADgSgKgOQgCgIAFgJIADgCIgMgXQAEgFgEgHIgFgLIgGghQAFgPAOAAQAJgBASAHIAWADQAKACAOAKQAgAGAKAIIASAGIA+AAIALgDQAMgLAUABIAjADIAMgBQAFgGALAAQAOAAADgCQA4gHAggBQAygBAoAKIAtgBQATgLAaADIAsAJIgBABIAAAAQAPgBAFAIQAEAEADALIAGABIAAApIgKAAIgBADIAIAGQAEAFACAHQACATgBAEQgDAMgOAHIgTAUQgbAUgMAGQgYAMgbgCIgxgEQgcgBgVAKQgTAMgQgDIgBAAIgCAMIABBBIACAPQAGAKABAGQABAJgHAHQgDAEAHALQAFALgHAFQAHAJADANIADAWQAAAGgEAFQgFAEgIACIAAAAQAJAPgCAKQgBAMgRAKQgKgDgBgHgAk1i8IADgCIgEAAg");
	this.shape.setTransform(43.3,-58.2);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1,1,0,0,0,193.7,90.4);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.6,-90.4,387.4,180.8);


(lib.bo_rafael = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación14("synched",0);
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#611F5B").ss(1,1,1).p("AmYnxIMxAAIAAPjIsxAAg");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#611F5B").s().p("AmYHyIAAvjIMxAAIAAPjg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance,p:{scaleX:1.431,scaleY:1.431}}]},1).to({state:[{t:this.instance,p:{scaleX:1.431,scaleY:1.431}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:1.431,scaleY:1.431}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-34.7,57.2,69.6);


(lib.bo_palacio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación18("synched",0);
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#611F5B").ss(1,1,1).p("AmYnxIMxAAIAAPjIsxAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#611F5B").s().p("AmYHyIAAvjIMxAAIAAPjg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance,p:{scaleX:1.431,scaleY:1.431}}]},1).to({state:[{t:this.instance,p:{scaleX:1.431,scaleY:1.431}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:1.431,scaleY:1.431}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-34.8,57.1,69.6);


(lib.bo_gonzalo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación16("synched",0);
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#611F5B").ss(1,1,1).p("Amfn+IM/AAIAAP9Is/AAg");
	this.shape.setTransform(-3.2,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#611F5B").s().p("AmfH/IAAv9IM/AAIAAP9g");
	this.shape_1.setTransform(-3.2,-4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance,p:{scaleX:1.345,scaleY:1.345}}]},1).to({state:[{t:this.instance,p:{scaleX:1.345,scaleY:1.345}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:1.345,scaleY:1.345}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-34.8,57.1,69.6);


(lib.bo_gaitan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación12("synched",0);
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#611F5B").ss(1,1,1).p("AnBojIODAAIAARHIuDAAg");
	this.shape.setTransform(0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#611F5B").s().p("AnBIkIAAxHIODAAIAARHg");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance,p:{scaleX:1.575,scaleY:1.575}}]},1).to({state:[{t:this.instance,p:{scaleX:1.575,scaleY:1.575}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:1.575,scaleY:1.575}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-34.7,57.2,69.6);


// stage content:
(lib.mapa_interactibo_web = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.bo_gaitan.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(9);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.bo_rafael.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(16);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.bo_gonzalo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(23);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.bo_palacio.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(30);
		}
	}
	this.frame_1 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.cer_gaitan.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop(0);
		}
		
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.ver_gaitan.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://tatanrodriguez.github.io/Interactibo/jorgeeliecergaitan.html", "_blank");
		}
	}
	this.frame_16 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.cer_rafael.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop(0);
		}
		
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.ver_rafael.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://tatanrodriguez.github.io/Interactibo/rafaeluribeuribe.html", "_blank");
		}
	}
	this.frame_23 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.cer_gonzalo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop(0);
		}
		
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.ver_gonzalo.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://tatanrodriguez.github.io/Interactibo/gonzalobravoperez.html", "_blank");
		}
	}
	this.frame_30 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.cer_palacio.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			this.gotoAndStop(0);
		}
		
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.ver_palacio.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("https://tatanrodriguez.github.io/Interactibo/palaciodejusticia.html", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(7).call(this.frame_16).wait(7).call(this.frame_23).wait(7).call(this.frame_30).wait(3));

	// inf palacio
	this.ver_palacio = new lib.ver_palacio();
	this.ver_palacio.parent = this;
	this.ver_palacio.setTransform(767.6,496.2);
	new cjs.ButtonHelper(this.ver_palacio, 0, 1, 2, false, new lib.ver_palacio(), 3);

	this.cer_palacio = new lib.cer_palacio();
	this.cer_palacio.parent = this;
	this.cer_palacio.setTransform(982.7,341.2);
	new cjs.ButtonHelper(this.cer_palacio, 0, 1, 2, false, new lib.cer_palacio(), 3);

	this.text = new cjs.Text("Calle 11 con Carrera 6 \nPalacio de Justicia", "bold 24px 'Microsoft New Tai Lue'", "#1D1D1B");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(767.6,414);

	this.text_1 = new cjs.Text("1985", "24px 'Microsoft New Tai Lue'", "#1D1D1B");
	this.text_1.lineHeight = 36;
	this.text_1.parent = this;
	this.text_1.setTransform(737.7,388);

	this.text_2 = new cjs.Text("TOMA DEL PALACIO DE JUSTICIA", "bold 28px 'Microsoft New Tai Lue'", "#1D1B39");
	this.text_2.lineHeight = 42;
	this.text_2.parent = this;
	this.text_2.setTransform(558.2,353.3);

	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(400.9,405.6,1,1,0,0,0,149.3,150.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6BC0DD").s().p("Eg6SAR+MAAAgj7MB0lAAAMAAAAj7g");
	this.shape.setTransform(639.5,424.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.cer_palacio},{t:this.ver_palacio}]},30).to({state:[]},1).wait(2));

	// inf gonzalo
	this.ver_gonzalo = new lib.ver_gonzalo();
	this.ver_gonzalo.parent = this;
	this.ver_gonzalo.setTransform(708.3,237.2);
	new cjs.ButtonHelper(this.ver_gonzalo, 0, 1, 2, false, new lib.ver_gonzalo(), 3);

	this.cer_gonzalo = new lib.cer_gonzalo();
	this.cer_gonzalo.parent = this;
	this.cer_gonzalo.setTransform(923.4,82.2);
	new cjs.ButtonHelper(this.cer_gonzalo, 0, 1, 2, false, new lib.cer_gonzalo(), 3);

	this.text_3 = new cjs.Text("Calle 11 con Carrera 6 \nPalacio de Justicia", "bold 24px 'Microsoft New Tai Lue'", "#1D1D1B");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 28;
	this.text_3.parent = this;
	this.text_3.setTransform(706.1,154.9);

	this.text_4 = new cjs.Text("1907-1929 ", "24px 'Microsoft New Tai Lue'", "#1D1D1B");
	this.text_4.lineHeight = 36;
	this.text_4.parent = this;
	this.text_4.setTransform(653.2,128.9);

	this.text_5 = new cjs.Text("GONZALO BRAVO PÉREZ ", "bold 28px 'Microsoft New Tai Lue'", "#1D1B39");
	this.text_5.lineHeight = 42;
	this.text_5.parent = this;
	this.text_5.setTransform(530.9,94.2);

	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(341.5,150.8,1,1,0,0,0,146.1,146.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6BC0DD").s().p("Eg6SAR+MAAAgj7MB0lAAAMAAAAj7g");
	this.shape_1.setTransform(576.9,170.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.cer_gonzalo},{t:this.ver_gonzalo}]},23).to({state:[]},1).wait(9));

	// inf rafael
	this.ver_rafael = new lib.ver_rafael();
	this.ver_rafael.parent = this;
	this.ver_rafael.setTransform(750.4,316.8);
	new cjs.ButtonHelper(this.ver_rafael, 0, 1, 2, false, new lib.ver_rafael(), 3);

	this.cer_rafael = new lib.cer_rafael();
	this.cer_rafael.parent = this;
	this.cer_rafael.setTransform(965.5,161.8);
	new cjs.ButtonHelper(this.cer_rafael, 0, 1, 2, false, new lib.cer_rafael(), 3);

	this.text_6 = new cjs.Text("Cra. 7 #11-10 \nPlaza de Bolivar", "bold 24px 'Microsoft New Tai Lue'", "#1D1D1B");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 26;
	this.text_6.parent = this;
	this.text_6.setTransform(750.2,234.5);

	this.text_7 = new cjs.Text("1859-1914", "24px 'Microsoft New Tai Lue'", "#1D1D1B");
	this.text_7.lineHeight = 36;
	this.text_7.parent = this;
	this.text_7.setTransform(695.2,208.5);

	this.text_8 = new cjs.Text("RAFAEL URIBE URIBE ", "bold 28px 'Microsoft New Tai Lue'", "#1D1B39");
	this.text_8.lineHeight = 42;
	this.text_8.parent = this;
	this.text_8.setTransform(597,173.8);

	this.instance_2 = new lib.ClipGroup();
	this.instance_2.parent = this;
	this.instance_2.setTransform(388,243.4,1,1,0,0,0,165.2,164.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6BC0DD").s().p("Eg6SAR+MAAAgj7MB0lAAAMAAAAj7g");
	this.shape_2.setTransform(619,251.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.instance_2},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.cer_rafael},{t:this.ver_rafael}]},16).to({state:[]},1).wait(16));

	// inf gaitan
	this.ver_gaitan = new lib.ver_gaitan();
	this.ver_gaitan.parent = this;
	this.ver_gaitan.setTransform(526.1,295.5);
	new cjs.ButtonHelper(this.ver_gaitan, 0, 1, 2, false, new lib.ver_gaitan(), 3);

	this.cer_gaitan = new lib.cer_gaitan();
	this.cer_gaitan.parent = this;
	this.cer_gaitan.setTransform(745.6,150.5);
	new cjs.ButtonHelper(this.cer_gaitan, 0, 1, 2, false, new lib.cer_gaitan(), 3);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(167.6,231.4,1,1,0,0,0,153.5,153);

	this.text_9 = new cjs.Text("Cra 7 con Calle 13", "bold 24px 'Microsoft New Tai Lue'", "#1D1D1B");
	this.text_9.lineHeight = 36;
	this.text_9.parent = this;
	this.text_9.setTransform(429.2,234.8);

	this.text_10 = new cjs.Text("1903-1948", "24px 'Microsoft New Tai Lue'", "#1D1D1B");
	this.text_10.lineHeight = 36;
	this.text_10.parent = this;
	this.text_10.setTransform(471.5,200.8);

	this.text_11 = new cjs.Text("JORGE ELIECER GAITAN", "bold 28px 'Microsoft New Tai Lue'", "#1D1B39");
	this.text_11.lineHeight = 42;
	this.text_11.parent = this;
	this.text_11.setTransform(362.2,166.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6BC0DD").s().p("Eg6SAR+MAAAgj7MB0lAAAMAAAAj7g");
	this.shape_3.setTransform(395.2,244.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.instance_3},{t:this.cer_gaitan},{t:this.ver_gaitan}]},9).to({state:[]},1).wait(23));

	// palacio
	this.bo_palacio = new lib.bo_palacio();
	this.bo_palacio.parent = this;
	this.bo_palacio.setTransform(537.6,490);
	new cjs.ButtonHelper(this.bo_palacio, 0, 1, 2, false, new lib.bo_palacio(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bo_palacio).wait(33));

	// gonzalo
	this.bo_gonzalo = new lib.bo_gonzalo();
	this.bo_gonzalo.parent = this;
	this.bo_gonzalo.setTransform(569.9,247.5);
	new cjs.ButtonHelper(this.bo_gonzalo, 0, 1, 2, false, new lib.bo_gonzalo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bo_gonzalo).wait(33));

	// rafael
	this.bo_rafael = new lib.bo_rafael();
	this.bo_rafael.parent = this;
	this.bo_rafael.setTransform(612.6,325.8);
	new cjs.ButtonHelper(this.bo_rafael, 0, 1, 2, false, new lib.bo_rafael(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bo_rafael).wait(33));

	// gaitan
	this.bo_gaitan = new lib.bo_gaitan();
	this.bo_gaitan.parent = this;
	this.bo_gaitan.setTransform(345.2,316.5);
	new cjs.ButtonHelper(this.bo_gaitan, 0, 1, 2, false, new lib.bo_gaitan(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bo_gaitan).wait(33));

	// PALITOS
	this.instance_4 = new lib.Interpolación10("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(485.5,500.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33));

	// bo grande
	this.instance_5 = new lib.Interpolación8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1471.5,266.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33));

	// MAPA TEXT
	this.instance_6 = new lib.Interpolación4("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1372.3,213.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33));

	// bogota
	this.instance_7 = new lib.Interpolación6("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(245.5,969.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33));

	// mapa
	this.instance_8 = new lib.Interpolación2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(777.9,624.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(851.8,616.9,1484.7,1016.7);
// library properties:
lib.properties = {
	id: 'CFB1FE35C999A948B09FB7F810E591A9',
	width: 1600,
	height: 1109,
	fps: 24,
	color: "#000000",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CFB1FE35C999A948B09FB7F810E591A9'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;