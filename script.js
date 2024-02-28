const endDate = "28 February 2024 2:18:00 PM"
document.getElementById('end-date').innerText = endDate;

const inputs = document.querySelectorAll('input');

function clock(){
    const end = new Date(endDate)// new Date() is the function to find the real date
    const now = new Date()
    const diff = (end - now) / 1000;

    if(diff<0) return;//To keep 0 if time reaches and not to put values in -. 

    inputs[0].value = Math.floor(diff / 3600 / 24); //To know the Date remaining.
    inputs[1].value = Math.floor(diff / 3600) % 24; //To know the Hours remaining
    inputs[2].value = Math.floor(diff / 60) % 60;   //To know the Minutes remaining
    inputs[3].value = Math.floor(diff) % 60;        //To know the Seconds remaining

    /*
    If you didnt understand the above values then I will explain in other video
    but just comment down those who want explaination.
    */
}

clock()


//To refresh website in every 1 seconds.
setInterval (() => {clock()},1000)

