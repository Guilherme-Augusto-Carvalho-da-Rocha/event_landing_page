AOS.init();

document.addEventListener('DOMContentLoaded', function(){
    ChangeDate();
})

function ChangeDate(){
    const eventDate = new Date("Jan 03 2026 19:00:00");
    const eventTimeStamp = eventDate.getTime();
    const HTMLDateSpan = document.getElementById('counter');

    let actualInterval = setInterval(function(){
        const now = new Date();
        const nowTimeStamp = now.getTime();

        const timeUntilEvent = eventTimeStamp - nowTimeStamp;

        const daysUntilEvent = Math.floor(timeUntilEvent / (1000 * 60 * 60 * 24));
        const hoursUntilEvent = Math.floor(timeUntilEvent % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutesUntilEvent = Math.floor(timeUntilEvent % (1000*60*60) / (1000 * 60));
        const secondsUntilEvent = Math.floor(timeUntilEvent % (1000*60) / (1000));

        // console.log(`dias até o evento: ${daysUntilEvent}`);
        // console.log(`horas: ${hoursUntilEvent}`)
        // console.log(`minutos: ${minutesUntilEvent}`)
        // console.log(`segundos: ${secondsUntilEvent}`)

        
        const timeUntilEventString = `começa em: ${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}min ${secondsUntilEvent}s`;
        HTMLDateSpan.innerHTML = timeUntilEventString;
        //console.log(timeUntilEventString);
        if(timeUntilEvent <= 0){
            clearInterval(actualInterval);
            HTMLDateSpan.innerHTML = "já passou!";
        }

    }, 1000);
    
}