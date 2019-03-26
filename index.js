'use strict';

function getDogImage(num) {
  const url = "https://dog.ceo/api/breeds/image/random/3 " + num;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Uh oh, something went wrong. Try again.'));
}

function checkValidInput(val) {
  if(val >= 1 && val <= 50) {
    return true;
  }
  else {
    return false;
  }
}

function displayResults(responseJson) {
  const imageList = responseJson.message;
  console.log(imageList);
  let imageUrls = "";

  for (let x = 0;x < imageList.length;x++) {
    imageUrls += `<img src="${imageList[x]}" alt="Generated dog image # ${x+1}" class="displayedImages">`;
  }

  console.log(imageUrls);

  $('.images').replaceWith(`<div class="images">${imageUrls}</div>`);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const resultNum = $('#num').val();
    if(checkValidInput(resultNum)) {
      console.log(`Results to retrieve: ${resultNum}`);
      getDogImage(resultNum);
    }
    else {
       alert('Not quite, please enter a number between 1 and 50. Try again.')
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});