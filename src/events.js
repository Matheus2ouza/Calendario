const dateStart = document.querySelector(".div_date_start"),
listEventes = document.querySelectorAll(".events_add"),
titleEvent = document.querySelector(".input_text"),
eventAdd = document.querySelector(".add_event"),
timeEvent = document.querySelectorAll(".time_event");

function dateFormat(value){ //Caso o mês ou o dia sejam menos que 10, adiciona um 0 na frente
    return value < 10 ? `0${value}`: value;
}

// Adiciona um event listener a cada rádio da classe .time_event para escutar mudanças no estado
timeEvent.forEach(radio =>{
    radio.addEventListener('change', updateConditionalInputs);
});

//função que verifica o estado do radio para mudar a visibilidade dos elementos lbl_end e date_event_end
function updateConditionalInputs(){
    const labelEnd = document.querySelector(".lbl_end"),
    dateEnd = document.querySelector(".date_event_end"),
    //verifica se o time_event com valor 2 está selecionado
    isOption2Checked = document.querySelector('.time_event[value="2"]').checked;

    //caso sim, ele remove o hidden
    if (isOption2Checked){        
        labelEnd.classList.remove('hidden');
        dateEnd.classList.remove('hidden')
    }else { //caso não, ele adiciona o hidden
        labelEnd.classList.add('hidden');
        dateEnd.classList.add('hidden')
    }
}
updateConditionalInputs();
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
    
    dateStart.innerHTML = tagDateStart;
}
renderInputDate()

//Um evento de click do botão criar
eventAdd.addEventListener('click', (event)=>{
    event.preventDefault();
    const eventStart = document.querySelector(".date_event_start").value,
    eventEnd = document.querySelector(".date_event_end").value;
    let timeDate = document.querySelector('.time_event').value
    
    let eventStartDay = null,
    eventEndDay = null;

    console.log(titleEvent)
    if (eventEnd === "" && timeDate == 1){
        
            let eventStartDate = new Date(eventStart),
            eventStartDay = eventStartDate.getDate()

            let litag = `<li>${titleEvent.value}: (${dateFormat(eventStartDay+1)})</li>`;
            listEventes.forEach(listEvent =>{
                listEvent.innerHTML += litag
            })
    }else{
        let eventStartDate = new Date(eventStart),
        eventEndDate = new Date(eventEnd);       
        eventStartDay = eventStartDate.getDate(),
        eventEndDay = eventEndDate.getDate();

            if(eventStartDate => eventEndDate || eventEndDate ===""){
                alert("A data Começo está posterior ou igual ao fim do seu Termino ou não foi adicionada, verifique novamente as suas datas do evento")
            }else{
                let litag = `<li>${titleEvent.value}: (${dateFormat(eventStartDay+1)}-${dateFormat(eventEndDay+1)})</li>`;
                listEventes.forEach(listEvent => {
                    listEvent.innerHTML += litag;
                })
            }
    };
});



