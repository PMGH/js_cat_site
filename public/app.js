var app = function(){
  var cat = {
    name: "Elf",
    fav_food: "Salmon",
    image: ""
  }

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

  var configureListElements = function(cat, listElements){
    listElements[0].innerText = "Name: " + cat.name;
    listElements[1].innerText = "Favourite Food: " + cat.fav_food;
  }

  var createImage = function(cat){
    var image = document.createElement('img');
    var width = "500";
    image.innerHTML = "<img width = " + " src=" + cat.image + " />";
    return image;
  }

  var appendElements = function(cat, unorderedList, listElements){
    listElements[2].appendChild(cat.image);
    unorderedList.appendChild(listElements);
    var section = document.querySelector('#cats');
    section.appendChild(unorderedList);
  }

}

window.onload = app;
