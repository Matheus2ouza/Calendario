document.addEventListener('DOMContentLoaded', function() {
    const symbolsMoreButton = document.querySelector('.add_event_button');
    const addEventButton = document.querySelector('.return_event');
    const containerMain = document.querySelector('.container_main');
    const containerSecondary = document.querySelector('.container_secondary');
  
    // Adiciona evento para mostrar container_secondary ao clicar em symbols_more
    symbolsMoreButton.addEventListener('click', function() {
      containerMain.classList.add('container_active');
      containerSecondary.classList.add('container_active');
    });
  
    // Adiciona evento para voltar para container_main ao clicar em add_event_button
    addEventButton.addEventListener('click', function() {
      containerMain.classList.remove('container_active');
      containerSecondary.classList.remove('container_active');
    });
  });


  