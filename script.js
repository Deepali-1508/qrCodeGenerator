const qrText = document.getElementById("qrText");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qrBody');
let size = sizes.value;

generateBtn.addEventListener('click' ,(e)=>{
    e.preventDefault();
    isEmpty();
});

sizes.addEventListener('change',(e)=>{
    size= e.target.value;
    isEmpty();
});


downloadBtn.addEventListener('click' , ()=>{
    let img = document.querySelector('.qrBody img');
    if(img !== null){
       let imgAttr = img.getAttribute('src');
       downloadBtn.setAttribute("href" ,imgAttr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
});


function isEmpty(){
    qrText.value.length>0 ? generateQRCode() : alert('Enter the text or URL to generate your code');
}


function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode( qrContainer,{
        text: qrText.value,
        width: size,
        height:size ,
        colorLight: "#ffffff" ,
        colorDark: "#000000" ,
        
       });
}
