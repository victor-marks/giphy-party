$(document).ready(function() {
  $('form').on('submit', function(evt) {
    evt.preventDefault();
    let userInput = $('#user-text').val();
    $.get(
      `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=dc6zaTOxFJmzC`,
      addRandomGif
    );
  });

  $('#remove-giphy').on('click', function(evt) {
    evt.preventDefault();
    $('#gif-content').empty();
  });
});

function addRandomGif(data) {
  let randIdx = parseInt(Math.random() * (data.data.length - 1));
  let gif = data.data[randIdx].images.original.url.split('?')[0];
  let $image = $(
    `<div class="text-center m-2"><img src=${gif} class="img-responsive"></img></div>`
  );
  $('#gif-content').append($image);
}
