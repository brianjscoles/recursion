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
var sampleObj = {a: {b: "c"}};



var stringifyJSON = function(obj) {

  function permute(elem){
  	if(elem===null) return "null";
  	if(elem===undefined) return "undefined";
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
  	if(arr.length===0) return "[]";
  	var strArr = [];
		for (var i = 0; i < arr.length; i++) {
			strArr.push(permute(arr[i]));
		}
  	return "["+strArr.toString()+"]";	
  }

  function buildObject(obj){
  	//need case for handling empty obj {}
  	strArr = [];
  		for (var key in obj) {
  			if(obj.hasOwnProperty(key)){
  				debug("now working on key "+key+" and value "+obj[key])
  				strArr.push('"'+key+'":'+permute(obj[key]));
  			}
  		}
  		return "{" + strArr.toString() + "}"; 		
  }


  var result = [];
  result.push(permute(obj));

  var stringified = result.join(',');
  //if (stringified[stringified.length-1]===",") stringified = stringified.slice(0,-1);
  return stringified;
};

//debug(stringifyJSON(sampleArr));
//debug(JSON.stringify(sampleArr));
debug("my version: " + stringifyJSON(sampleObj));
debug("official:   " + JSON.stringify(sampleObj));



