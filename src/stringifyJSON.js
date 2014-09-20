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

var sampleObj = [10, 100, 22, "yellow", true, "true"];




var stringifyJSON = function(obj) {

  function permute(elem){
  	if(Array.isArray(elem)){
  		result.push("[");
  		for (var i = 0; i < elem.length; i++) {
  			permute(elem[i]);
  		}
  		result[result.length-1]=result[result.length-1].toString()+"],"; 
  	} else if(typeof(elem)==='object'){
  		result.push("{");
  		for (var key in elem) {
  			if(elem.hasOwnProperty(key)){
  				result.push('"'+key+'":');
  				permute(elem[j]);
  			}
  		}
  		result[result.length-1]=result[result.length-1].toString()+"},";  		
  	} else if(typeof(elem)==='string'){
  		newstring = '"'+elem+'"';
  		if(result[result.length-1]==="[" || result[result.length-1]==="{"){
  			result[result.length-1] = result[result.length-1] + newstring;
  		} else {
  			result.push(newstring);
  		}
  	} else {
  		if(result[result.length-1]==="[" || result[result.length-1]==="{"){
  			result[result.length-1] = result[result.length-1] + elem;
  		} else {
  			result.push(elem);
  		}
  	}
  }

  var result = [];
  permute(obj);
  var stringified = result.join(',');
  if (stringified[stringified.length-1]===",") stringified = stringified.slice(0,-1);
  return stringified;
};

debug(stringifyJSON(sampleObj))
