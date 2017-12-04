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

  var cats = [
    {name: "Snap", fav_food: "Tuna", image: "https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg"},
    {name: "Genie", fav_food: "Salmon", image: "https://static.pexels.com/photos/20787/pexels-photo.jpg"},
    {name: "Harry", fav_food: "Strawberries", image: "https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/6f97ebf075cf8075?w=400&h=400"}
  ]

  for (var i = 0; i < cats.length; i++){
    cat = cats[i];
    var catName = "cat"+(i+1);
    catName = new Cat(cat.name, cat.fav_food, cat.image);
    createCat(catName);
  }

}

window.onload = app;
