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

  var createImage = function(src){
    var image = document.createElement('img');
    var width = "500";
    image.innerHTML = "<img width = " + " src=" + src + " />";
    return image;
  }

}

window.onload = app;
