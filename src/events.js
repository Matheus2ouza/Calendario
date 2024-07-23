const dateStart = document.querySelector(".div_date_start"),
  listEventes = document.querySelectorAll(".events_add"),
  divEnd = document.querySelector('.div_date_end'),
  titleEvent = document.querySelector(".input_text"),
  timeEvent = document.querySelectorAll('.input[name="time_event"]');

function dateFormat(value) {
  //Caso o mês ou o dia sejam menos que 10, adiciona um 0 na frente
  return value < 10 ? `0${value}` : value;
}
//Obetém a data atual (ano, mês e dia)
const inputdate = new Date(),
  inputYear = inputdate.getFullYear(),
  inputMonth = inputdate.getMonth() + 1,
  inputDay = inputdate.getDate();


//Renderiza os input de data para as datas atuas
const renderInputDate = () => {

  //cria as tags dos input data
  let tagDateStart = `<input type="date" class="date_event_start" name="date_event" value="${inputYear}-${dateFormat(inputMonth)}-${dateFormat(inputDay)}">`;

  dateStart.innerHTML += tagDateStart;
};
renderInputDate();



document.addEventListener("DOMContentLoaded", (event) => {

  const eventAdd = document.querySelector(".add_event");
  const timeEvent = document.querySelectorAll('input[class="time_event"]');
  
  let value1 = null;
  let value2 = null;
  let lblTag = `<label for="end" class="lbl_end">Termina</label>`;
  let datetag = `<input type="date" class="date_event_end" name="date_event">`;
  
  function updateDateFieldVisibility(){
    const selectedRadio = document.querySelector('input[name="time_event"]:checked')
    if (selectedRadio.value === '1'){
      divEnd.innerHTML = ''
    } else if (selectedRadio.value === '2'){
      divEnd.innerHTML = lblTag
      divEnd.innerHTML += datetag
    }
  }
  updateDateFieldVisibility();
  timeEvent.forEach((radio) => {
    radio.addEventListener('change', updateDateFieldVisibility);
  });
  
  // Um evento de click do botão criar
  eventAdd.addEventListener("click", (event) =>{
    event.preventDefault();
    const inputDateStart = document.querySelector(".date_event_start").value;
    const inputdateEnd = document.querySelector(".date_event_end").value;
    const selectedDateStart = new Date(inputDateStart);
    const selectedDateEnd = new Date(inputdateEnd)
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0)
    


  timeEvent.forEach((radio) =>{
    if (radio.checked) {
      if (radio.value === "1") {
        value1 = radio.value;
      } else if (radio.value === "2") {
        value2 = radio.value;
      }
    }
  })
    if (value1 !== null) {
      if (titleEvent.value.trim() == ""){
        alert(`Falta um titulo no seu evento`)
      }else if (selectedDateStart < currentDate){
        alert(`data invalida`)
      }else{
        const selectedDay = selectedDate.getDate();
        const litagEvent = `<li>${titleEvent.value.trim()} (${dateFormat(selectedDay + 1)})</li>`
        
        listEventes.forEach((list) =>{
          list.innerHTML += litagEvent
        })
      }
    } else if (value2 !== null) {
      if (titleEvent.value.trim() == ""){
        alert(`Falta um titulo no seu evento`)
      }else if (selectedDateStart === selectedDateEnd || selectedDateStart < currentDate 
        || selectedDateEnd < currentDate || (selectedDateEnd && selectedDateEnd < selectedDateStart)){
        alert(`Datas invalidas, verifique-as`)
      }else{
        console.log("tudo certo")
      }
    }
  });
});

