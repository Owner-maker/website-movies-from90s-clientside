var h_hght = 200; // высота шапки
var h_mrg = 0;     // отступ когда шапка уже не видна

$(function(){
 $(window).scroll(function(){
    var top = $(this).scrollTop();
    var elem = $('.menu-search');
    var elem2 = $('.menu__block1-link');
    var elem3 = $('.menu__search-field');
    var elem4 = $('.menu__search-submit');
    var width = document.documentElement.clientWidth;
    if ((top+h_mrg < h_hght)&&(width>=768)) {   //здесь проверяю услоивие на ширину окна браузера, минимамальная - 768 - для планшетов
     elem.css('top', (h_hght-top));
     elem2.css('background-color', 'rgba(150, 100, 100, 0.342)');
     elem3.css('background-color','rgba(85, 63, 63, 0.445)');
     elem4.css('background-color', 'rgba(150, 100, 100, 0.342)');
    } 
    else if ((top+h_mrg >= h_hght)&&(width>=768)){
     elem.css('top', h_mrg);
     elem2.css('background-color', 'rgba(152, 108, 98, 0.982)');
     elem3.css('background-color','rgba(152, 108, 98, 0.982)');
     elem4.css('background-color', 'rgba(152, 108, 98, 0.982)');
    }
    
  });
});
