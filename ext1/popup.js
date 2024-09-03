document.addEventListener('DOMContentLoaded', function() {
  const macButton = document.getElementById('mac-button');
  const windowsButton = document.getElementById('windows-button');
  const linuxButton = document.getElementById('linux-button');

  const macContent = document.getElementById('mac-content');
  const windowsContent = document.getElementById('windows-content');
  const linuxContent = document.getElementById('linux-content');

  

  function hideAllContent() {
    macContent.classList.remove('active');
    windowsContent.classList.remove('active');
    linuxContent.classList.remove('active');
  }

  macButton.addEventListener('click', function() {
    hideAllContent();
    macContent.classList.add('active');
    
  });

  windowsButton.addEventListener('click', function() {
    hideAllContent();
    windowsContent.classList.add('active');
    
  });

  linuxButton.addEventListener('click', function() {
    hideAllContent();
    linuxContent.classList.add('active');
    
  });



  
});
