let  a; 
let  date;
let  time;

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {

  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
  document.getElementById('time').innerHTML = time + "<br> on " + date;
}, 1000)


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
} 



// let a = "sunil";
// let b = "pooja";

// console.log(b.toLocaleUpperCase());
// console.log(b.toLocaleLowerCase());

// console.log(b.slice(3,5));
// console.log(b.slice(1));

// console.log(b.replace("nain", "101"));

// console.log(b.concat(a, "nain", "kumer", "singh", "anup"));

// let a1 = [1, 2, 3]

// let a2 = [4, 5, 6]

// let a3 = [9, 8, 7]

// a1. concat(a2 , a3)

// let arrs = (2, 4, 7, 9, 8, 11)
// console.log(arrs)
// const greaterThanSeven  = (e)=>{
// if(e>7) {
//   return true
// }
// return false

// }

// console.log(arrs.filter(greaterThanSeven));




// let a = 6

// function factorial(number){
//   let arr = Array.from(Array(number+1).keys())
//   let c = arr.slice(1,).reduce((a, b)=> a*b )
//   return c
// }


// function facfor(number){
//   let fac = 1;
//   for (let index =1; index  <= number; index ++){
//     fac = fac * index
//   }

//   return fac
// }
//   console.log(factorial(a))
//   console.log(facfor(a))
