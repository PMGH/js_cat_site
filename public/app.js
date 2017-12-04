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
    {name: "Harry", fav_food: "Strawberries", image: "https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/6f97ebf075cf8075?w=400&h=400"},
    {name: "Ricky", fav_food: "Tuna", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCPUa6k9Q2FVqNamuLkn8ZqfqhVBkAcZGr56uiICJR6mqn3XV"},
    {name: "Sammy", fav_food: "Salmon", image: "http://cdn7.viralscape.com/wp-content/uploads/2015/07/Donald-Trump-Cat-17.jpg"},
    {name: "Cooper", fav_food: "Tuna", image: "http://www.icenews.is/wp-content/uploads/2015/02/animals-1-700x700.jpg"},
    {name: "Ruby", fav_food: "Haddock", image: "http://www.dewintonvet.com/wp-content/uploads/2015/02/shutterstock_9627004.jpg"},
    {name: "Nala", fav_food: "Pigeon", image: "https://static.boredpanda.com/blog/wp-content/uploads/2017/06/funny-cats-catnip-32-59412c2b1c09a__605.jpg"}
  ]

  for (var i = 0; i < cats.length; i++){
    cat = cats[i];
    var catName = "cat"+(i+1);
    catName = new Cat(cat.name, cat.fav_food, cat.image);
    createCat(catName);
  }

}

window.onload = app;
