// изменение картинок при наведении в карточке товара
window.onload = function () {
    var img_arr = document.getElementById("goods").getElementsByTagName("img");
    for (var i = 0; i < img_arr.length; i++) {
        img_arr[i].onmouseover = function () {
            console.log("ygtguh");
            var img_big = document.getElementById("big").getElementsByTagName("img")[0];
            var p = this.src;
            img_big.src = p.replace(".png", "_big.png");
        }
    }
};

// бургер меню


// Поисковик
let inputText=document.querySelector('.inputText');
    submitForm=document.querySelector('submitForm');
    information=document.querySelector('.wrapper')

    searchFunction=(text)=>{
        information.forEach((element)=>{
            if(element.textContent==text){
                element.style="animation:animationElement 2s";
                console.log(element);
            }
        });
    }
submitForm.addEventListener('click', (e)=>{
    e.preventDefault();
    searchFunction(inputText.value);
})