setTimeout(function() {
  var button = document.getElementById('delayedButton');
  button.classList.remove('hidden');
  
  // Add event listener to navigate to indexgift.html when clicked
  button.addEventListener('click', function() {
    window.location.href = 'gift.html';
  });
}, 4000);