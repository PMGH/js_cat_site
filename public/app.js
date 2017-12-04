var app = function(){
  var Cat = function(name, fav_food, image){
    this.name = name;
    this.fav_food = fav_food;
    this.image = image;
  }

  var createUnorderedList = function(){
    var unorderedList = document.createElement('ul');
    unorderedList.classList.add("cat");
    return unorderedList;
  }

  var createListElements = function(){
    var listElements = [];
    for (var i = 0; i < 3; i++){
      listElements.push(document.createElement('li'));
    }
    return listElements;
  }

  var createImage = function(cat){
    var image = document.createElement('img');
    image.width = "500";
    image.src = cat.image;
    return image;
  }

  var appendElements = function(cat, unorderedList, listElements){
    listElements[0].innerText = "Name: " + cat.name;
    listElements[1].innerText = "Favourite Food: " + cat.fav_food;
    var catImage = createImage(cat);
    listElements[2].appendChild(catImage);

    for (var element of listElements){
      unorderedList.appendChild(element);
    }

    var section = document.querySelector('#cats');
    section.appendChild(unorderedList);
  }

  var createCat = function(cat){
    var unorderedList = createUnorderedList();
    var listElements = createListElements();
    appendElements(cat, unorderedList, listElements);
  }

  var cat = new Cat("Genie", "Salmon", "https://static.pexels.com/photos/20787/pexels-photo.jpg");
  createCat(cat);

}

window.onload = app;
