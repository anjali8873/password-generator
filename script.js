let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let Uppercase = document.getElementById("Uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyBtn = document.getElementById("copyBtn");

//showing slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})



let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "@#$%^&*";

//FUnction to generate Password
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars: "";
    allChars += Uppercase.checked ? UpperChars: "";
    allChars += numbers.checked ? allnumbers: "";
    allChars += symbols.checked ? allsymbols: "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

let i = 1;
while(i<=inputSlider.value){
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
}
 return genPassword;
}

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passBox.value);

});

