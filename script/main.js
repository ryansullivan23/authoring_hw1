(function(){
  var theImages = document.querySelectorAll('.image-holder'),
      theHeading = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

function changeElements() {
//  debugger;
  let objectIndex = dynamicContent[this.id];
  let subImages = document.querySelector('.subImagesContainer');

  while(subImages.firstChild) {
    subImages.removeChild(subImages.firstChild);
  }

  objectIndex.images.forEach(function(image, index){
    let newSubImg = document.createElement('img');
    newSubImg.classList.add('thumb');
    newSubImg.src = "images/" + objectIndex.images[index];
    subImages.appendChild(newSubImg);
  });

  theSubhead.classList.remove(appliedClass);
  theHeading.classList.remove(appliedClass);

  theSubhead.classList.add(this.id);
  theHeading.classList.add(this.id);


  theSubhead.firstChild.nodeValue = objectIndex.heading;
  theSeasonText.firstChild.nodeValue = objectIndex.text;


  appliedClass = this.id;

}



theImages.forEach(function(element, index){
  element.addEventListener('click', changeElements, false);
});
theSubhead.firstChild.nodeValue = dynamicContent['spring'].heading;
theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
theHeading.classList.add('spring');
})();
