var app = function(){
  var createUnorderedList = function(){
    var unorderedList = document.createElement('ul');
    unorderedList.classList.add("cat");
    return unorderedList;
  }

  var createListElements = function(){
    for (var i = 0; i < 3; i++){
      var listElement = document.createElement('li');
    }
    return listElements;
  }

}

window.onload = app;
