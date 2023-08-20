window.onload = ()=>{
    animation();
    parriba();

    
    function animation (){

    const swiper = new Swiper('.swiper', {
        // Optional parameters
       direction: 'horizontal',
       loop: true,
       
       // If we need pagination
       pagination: {
       el: '.swiper-pagination',
       },
       
       // Navigation arrows
       navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
       },
       
       // And if we need scrollbar
       scrollbar: {
       el: '.swiper-scrollbar',
       },
       });
    }
    
    function parriba(){
        var elevador = new Elevator({
            element: document.querySelector("#parriba"),
        });
     
    }
}





