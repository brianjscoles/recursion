/*

JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify({x: 5, y: 6});              
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]); 
// '[1,"false",false]'

// Symbols:
JSON.stringify({x: undefined, y: Object, z: Symbol("")}); 
// '{}'
JSON.stringify({[Symbol("foo")]: "foo"});                 
// '{}'
JSON.stringify({[Symbol.for("foo")]: "foo"}, [Symbol.for("foo")]);
// '{}'
JSON.stringify({[Symbol.for("foo")]: "foo"}, function (k, v) {
  if (typeof k === "symbol"){
    return "a symbol";
  }
});
// '{}'

*/

var sampleArr = ["pooper", 100, 22, "yellow", true, [57, "pinky"], "true"];
var sampleObj = {a: {b: {c: 5}}};
var sampleObj2 = {"foo":true,"bar":false,"baz":null}
var sampleObj3 = {"functions":function (){},"undefined":undefined}
var sampleObj4 = {"a": "apple"}


var stringifyJSON = function(obj) {

  function permute(elem){
  	if(elem===null) return "null";
  	if(elem===undefined) return undefined;
  	if(Array.isArray(elem)){
  		return(buildArray(elem));
  	} else if(typeof(elem)==='object'){
  		return(buildObject(elem));
  	} else if(typeof(elem)==='string'){
  		return '"'+elem+'"';
  	} else {
  		return(elem);
  	}
  }

  function buildArray(arr){
  	var strArr = [];
		for (var i = 0; i < arr.length; i++) {
			strArr.push(permute(arr[i]));
		}
  	return "["+strArr.toString()+"]";	
  }


  function buildObject(obj2){
		if(Object.getOwnPropertyNames(obj).length === 0){
			return "{}";
		}
		var kvArr = [];
		for (var key in obj2) {
			if(obj2.hasOwnProperty(key)){
				if(typeof(obj2[key])!=="function" && typeof(obj2[key])!=="undefined"){
					kvArr.push('"'+key+'":'+permute(obj2[key]));
				}
			}
		}
		return "{" + kvArr.toString() + "}";
  }
  
  return permute(obj).toString();
};

