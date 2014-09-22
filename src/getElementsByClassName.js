// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// You should use document.body, element.childNodes, and element.classList
// what you want to return is an "HTMLcollection."
// https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-document-getelementsbyclassname
// learn up on how HTML nodes work... how am I supposed to iterate through the whole document? and it will require recursion (I assume.)

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var classes = classname.split(' ');  // make an array.
  var result = [];

  //iterate through every element on the page.
  // if element.classList contains ALL elements listed in "classes"
  // then append that element to "result."
};
