const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span"),
timeClock = document.querySelector(".StyledClock");

//Recebendo nova Data, mês e ano
let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

//Renderizando o mês e o ano, formatado
const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
"Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]


const renderClock = () => {
    let date = new Date(),
    currentHour = String(date.getHours()).padStart(2, '0'),
    currentMinute = String(date.getMinutes()).padStart(2, '0');
    timeClock.innerText = `${currentHour}:${currentMinute}`
}
const renderCalendar = () => {
    let firstDateofMonth = new Date(currentYear, currentMonth, 1).getDay(), //Obtém o dia da semana (0 a 6) do primeiro dia do mês atual
    lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(), //Obtém o último dia do mês atual
    lastDayofMonth = new Date(currentYear, currentMonth, lastDateofMonth).getDay(), //Obtém o dia da semana (0 a 6) do último dia do mês atual
    lastDateoflastMonth = new Date(currentYear, currentMonth, 0).getDate(); //Obtém o último dia do mês anterior ao mês atual
    
    let liTag = ""

    for (let i = firstDateofMonth; i > 0; i--) {
        liTag += `<li class = inactive>${lastDateoflastMonth - i + 1} </li>`
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        //Verifica se o dia, mês e ano são iguais ao dia, mês e ano atuais
        //Se for true adiciona a active a classe, se false entao a classe recebe ""
        let toDay = i === date.getDate() && currentMonth === new Date().getMonth()
                    && currentYear ===  new Date().getFullYear() ? "active": "";
        liTag += `<li class= ${toDay}>${i}</li>`
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class = inactive>${i - lastDayofMonth + 1} </li>` 
    }
    
    currentDate.innerText = `${month[currentMonth]} ${currentYear}`
    daysTag.innerHTML =  liTag
}
renderCalendar();
renderClock();
setInterval(renderClock, 1000)

prevNextIcon.forEach(icon =>{ //adicionando o evento de click nos icones
    icon.addEventListener("click", () =>{
        //Caso o id do icone for igual a prev, diminua 1 no mês, caso contrario aumente 1
        currentMonth = icon.id === "prev" ? currentMonth -1 : currentMonth + 1 
        
        //Verifica se o mes esta fora do intervalo (o - 11), se estiver então cria um novo mes e ano
        if (currentMonth < 0 || currentMonth > 11){
            date = new Date( currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth()
        }else{
            date=new Date();
        }

        renderCalendar();
    })
});
