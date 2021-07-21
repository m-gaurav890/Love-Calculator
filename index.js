var loveRandomNumber=Math.floor(Math.random()*100)+1;
var loveRandomSize=loveRandomNumber+"%";
document.querySelector(".submit").addEventListener("click",
function()
{
    document.querySelector("h3").innerHTML=loveRandomSize;
}
);