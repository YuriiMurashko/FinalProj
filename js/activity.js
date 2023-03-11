let timeout = 3000;
let lastActiveTimestamp = 0;
let userIsActive = false;

window.addEventListener('mousemove', active);
window.addEventListener('keypress', active);
window.addEventListener('click', active);

setInterval(checkUserIsActive, 60000)
active();

function checkUserIsActive() {
  if (userIsActive && new Date().getTime() - lastActiveTimestamp > timeout){
    console.log('user is not active');
    userIsActive = false;  
{
     alert("Ви ще тут?");
     return;}
  }

}

function active() {
  lastActiveTimestamp = new Date().getTime();
  if (!userIsActive) {
    userIsActive = true;
    console.log('user is active');
   
   
  }
}