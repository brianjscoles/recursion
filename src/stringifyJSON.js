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

