// Attach a button listener to the button
$('.btn').click(function() {
  
    $('.text').text('loading bitches....');
  // On click on the button, make an AJAX request to reddit for results of cute puppies
  $.getJSON({
    type:"GET",

    url:"    http://www.reddit.com/r/askreddit/search.json?q=puppy&restrict_sr=true",
    success: function(response) {
      $('.text').html('');
  for (var i=0; i < response.data.children.length; i++ ) {
      var image = "<img src='" +
      response.data.children[i].data.thumbnail + "/>";
    $('.text').append(image);
  };
    
    }
  });
});