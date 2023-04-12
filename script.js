let swatchers = document.querySelectorAll('.color-swatch');

var activeColor="blue";




swatchers.forEach(color =>{
  color.addEventListener('click', ()=>{
    var e=document.querySelector(".active");
    e.classList.remove("active");
    color.classList.add("active");
     activeColor=color.getAttribute("class").substring(13, 17);
     changePath();
    
    
    


   })
})
var path;

function changePath(){
  if(activeColor==="blue"){
    path="images/Blue umbrella.png";
  }
  else if(activeColor==="pink"){
    path="images/Pink umbrella.png";
  }
  else if(activeColor==="yell"){
    path="images/Yello umbrella.png";
  }
  changeBg();
  
  changeScr();
  showLoader();
  
}

function changeScr() {
  document.getElementById("umbrella-image").src=path;
  
  }

  function changeScr() {
  document.getElementById("umbrella-image").src=path;
  }


// Get the root element
var r = document.querySelector(':root');



// Create a function for setting a variable value
function changeBg() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  if(activeColor==="blue")
  r.style.setProperty('--bg', 'lightblue');
  else if(activeColor==="pink")
  r.style.setProperty('--bg', 'lightpink');
  else if(activeColor==="yell")
  r.style.setProperty('--bg', 'lightYellow');
}

function showLoader() {
  const umbrellaImage = document.getElementById('umbrella-image');
  const loaderImage = document.createElement('img');
  loaderImage.setAttribute('src', 'images/loader_icon.svg');
  loaderImage.setAttribute('class', 'Loader');
  umbrellaImage.parentNode.replaceChild(loaderImage, umbrellaImage);
  setTimeout(() => {
    loaderImage.parentNode.replaceChild(umbrellaImage, loaderImage);
  }, 1000);
}

function uploadLogo(event) {
  showLoader();
  const logoImage = document.getElementById('logo-image');
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      logoImage.setAttribute('src', event.target.result);
      logoImage.style.display = 'block';
    };
    reader.readAsDataURL(file);
  } else {
    logoImage.style.display = 'none';
  }
  
}

function removeLogo() {
  const logoImage = document.getElementById('logo-image');
  const inputElement = document.querySelector('input[type=file]');
  logoImage.removeAttribute('src');
  logoImage.style.display = 'none';
  inputElement.value = '';
  showLoader();
}












