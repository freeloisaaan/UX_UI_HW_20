const image = document.getElementById('hoverImage');

image.addEventListener('mouseover', function() {
  image.style.transform = 'scale(1.1)';
});

image.addEventListener('mouseout', function() {
  image.style.transform = 'scale(1)';
});