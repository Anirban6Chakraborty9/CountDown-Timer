const endDate= "08 August 2025 12:00 AM"

document.getElementById("end-date").innerText=endDate;

const inputs= document.querySelectorAll("input")

function timer(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;
    console.log(diff);
    if (diff<=0){
        document.getElementById("result").innerHTML="CountDown Stopped, Time Reached."
        return;
    }
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor((diff/60)%60);
    inputs[3].value=Math.floor(diff % 60);
}

timer()

setInterval(()=>{
    timer()
},1000)
