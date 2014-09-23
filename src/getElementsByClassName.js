// duplicates functionality of built-in JS function Node.getElementsByClassName()

function getElementsByClassName(className){
  
    var targetClasses = className.split(' ');  // make an array.
    var result = [];

    function containsAll(arr1,arr2){
      for (var i = 0; i < arr1.length; i++) {
        if(arr2.indexOf(arr1[i])===-1) return false;
      }
      return true;
    }

    function permute(element){
      var elemClasses = element.classList;
      if(typeof(elemClasses)!=='undefined'){
        elemClasses = [].slice.call(elemClasses);
        if(containsAll(targetClasses,elemClasses)){
          result.push(element);
        }
      }
      if(element.hasChildNodes()){
        var nodes = [].slice.call(element.childNodes);
        for (var i = 0; i < nodes.length; i++) {
          permute(nodes[i]);
        }
      }
    };

    permute(document.body);
    return result;
  }


