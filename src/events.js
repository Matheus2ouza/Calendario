const dateStart = document.querySelector(".div_date_start"),
dateEnd = document.querySelector(".div_date_end"),
listEventes = document.querySelectorAll(".events_add"),
titleEvent = document.querySelector(".input_text"),
eventAdd = document.querySelector(".add_event");

function dateFormat(value){ //Caso o mês ou o dia sejam menos que 10, adiciona um 0 na frente
    return value < 10 ? `0${value}`: value;
}

//Renderiza os input de data para as datas atuas
const renderInputDate = () =>{
    
    //Obetém a data atual (ano, mês e dia)
    let inputdate = new Date(),
        inputYear = inputdate.getFullYear(),
        inputMonth =inputdate.getMonth() + 1,
        inputDay =inputdate.getDate();
    
    
    //cria as tags dos input data
    let tagDateStart = `<input type="date" class="date_event_start"
    name="date_event" value="${inputYear}-${dateFormat(inputMonth)}-${dateFormat(inputDay)}">`
    let tagDateEnd = `<input type="date" class="date_event_end"
    name="date_event" value="${inputYear}-${dateFormat(inputMonth)}-${dateFormat(inputDay)}">`
    
    dateStart.innerHTML = tagDateStart;
    dateEnd.innerHTML = tagDateEnd;
}
renderInputDate()

//Um evento de click do botão criar
eventAdd.addEventListener('click', (event)=>{
    event.preventDefault();

    const eventStart = document.querySelector(".date_event_start").value,
    eventEnd = document.querySelector(".date_event_end").value;

    let eventStartDay = null,
    eventEndDay = null;

    //pega a data tanto do input start tanto do input end para retornar somente os dias
    if(eventStart && eventEnd){
        let eventStartDate = new Date(eventStart);
        eventEndDate = new Date(eventEnd);

        eventStartDay = eventStartDate.getDate();
        eventEndDay = eventEndDate.getDate();
    }
    
    let litag = `<li>${titleEvent.value}: (${dateFormat(eventStartDay)}-${dateFormat(eventEndDay)})</li>`
    listEventes.forEach(listEvente => {
        listEvente.innerHTML = litag;
    });
})



