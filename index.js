// const fs=require('fs')

const form=document.querySelector('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const  fb= new FormData(form);
    console.log(fb)
    const obj=Object.fromEntries(fb)
    console.log(obj)
    // const obj=Object.fromEntries(fb)
    // console.log(obj)
   
    const json=JSON.stringify(obj)
    window.localStorage.setItem('form',json)
    window.location.href= "resume2.html";


})  



const imageInput = document.getElementById('img-input');

imageInput.addEventListener('change', event => {
// 👇️ Save the image to localStorage
const image = event.target.files[0];
const reader = new FileReader();

reader.addEventListener('load', () => {
localStorage.setItem('image', reader.result);
console.log(reader.result.split(","))

});




if (image) {
reader.readAsDataURL(image);
}
// console.log(image)

// 👇️ Take the image from localStorage
// and display it
//   const newImage = document.getElementById(
//     'img-from-local-storage',
//   );

//   newImage.src = localStorage.getItem('image');
});






// const imageinput=document.getElementById("photo")
// imageinput.addEventListener("change",(event)=>{
//     const image=event.target.files[0]
//     const reader= new FileReader()

//     reader.addEventListener("load",()=>{
//         localStorage.setItem("image",reader.result)
//     })
//     if (image){
//         reader.readAsDataURL(image)
//     }
// })


// const images1=document.getElementById("table1")
// newImages.src=localStorage.getItem("image")





