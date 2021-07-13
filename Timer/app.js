    document.addEventListener("DOMContentLoaded",() =>{
        const timeLeftDisplay = document.querySelector("#time-left");
        const startBtn = document.querySelector("#start-button");
        let timeleft = 20;
        

        function countDown(){
            setInterval(function(){
                if(timeleft <= 0){
                    clearInterval(timeleft = 0);
                }
                timeLeftDisplay.innerHTML = timeleft;
                timeleft -=1;
            },1000);
        }
        startBtn.addEventListener('click', countDown);

    })