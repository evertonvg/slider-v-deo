$( document ).ready(function(){
    $('.slick-videos').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false
    });

    let video = document.querySelector('.video');
    let videoplay = document.querySelector('.videoplay');
    let X = document.querySelector('.X');
    let slickVideosItens = document.querySelectorAll('.slick-videos-item');
    let tumbnailLarge = document.querySelector('.tumbnailLarge');
    let tumbref = document.querySelector('.tumbref');
    let playtumb = document.querySelector('.playtumb');
    let titulotumb = document.querySelector('.titulotumb');

    slickVideosItens.forEach(function(item){
        item.addEventListener('click',function(e){
            titulotumb.style.display = 'block';
            tumbnailLarge.style.display = 'block';
            playtumb.style.display = 'block';
            videoplay.style.display = 'flex';
            tumbnailLarge.src = 'assets/images/'+item.dataset.tumb;
            video.src = 'assets/videos/'+item.dataset.video;
            titulotumb.innerHTML = item.dataset.titulo;
            fadeIn(videoplay,1);
        });
    });

    tumbref.addEventListener('click',function(){
        tumbnailLarge.style.display = 'none';
        playtumb.style.display = 'none';
        titulotumb.style.display = 'none';
        setTimeout(function(){
            video.play();
        },900);
    });

    X.addEventListener('click',function(){
        fechar();
    });

    // videoplay.addEventListener('dblclick',function(){ 
    //     fechar();
    // });

    // video.addEventListener('click',function(e){
    //     e.preventDefault();
    // });

    function fechar(){
        video.pause();
        fadeOut(videoplay,1);
        
    }

    function fadeIn(element,time){
        processa(element,time,0,100);
    }


    function fadeOut(element,time){
        processa(element,time,100,0);
    }

    function processa(element,time,initial,end){
        if(initial == 0){
            increment = 2;
            element.style.display = "flex";
        }else {
            increment = -2;
        }

        opc = initial;

        intervalo = setInterval(function(){
            if((opc == end)){
                if(end == 0){
                    element.style.display = "none";
                }
                clearInterval(intervalo);
                }else{
                    opc += increment;
                    element.style.opacity = opc/100;
                    element.style.filter = "alpha(opacity="+opc+")";
                }
        },time * 10);
    }
});