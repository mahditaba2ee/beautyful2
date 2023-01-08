var message = document.getElementById('message')


slug = ''
function category_search(btn=null,cat_slug='',page=1){
    const request = new XMLHttpRequest()
    
    if (cat_slug != ''){
        slug = cat_slug
    }
    else{
        slug = btn.dataset.slug
    }
    request.open('GET','/search/'+slug+'/?is_ajax=true&page='+page)
    request.onload=function(){
        console.log(this.responseText);
        div_remove = document.getElementsByClassName('remove')
        for (let x = 0; x < div_remove.length; x++) {
         const element = div_remove[x];
         element.innerHTML=''
         element.style.display='none'
        }
            document.getElementById('title_product').innerHTML=slug
            document.getElementById('product').innerHTML = this.responseText  
            
    }
    request.send()
 
}
function page_click(btn){
    cat_slug=document.getElementById('category_slug').dataset.category_slug
    category_search(null,cat_slug,btn.dataset.num)

}


$('.show-product').click(function () {
    $('html, body').animate({scrollTop: document.getElementById('product').offsetTop-60}, 2000, 'easeInOutExpo');
    return false;
});


function comment_for_site(){
    message.hidden=false
    
    message.innerHTML='نظر شما در مورد سایت ثبت شد .'
    my_inerval = setInterval(() => {

     
            message.hidden=true
       
          clearInterval(my_inerval)


    
    }, (5000));
}

function setting_slid(btn){
    window.location='add_slide?id_slide='+btn.dataset.id
    console.log();
}
var box_top_sec = document.getElementById('box-top-sec')
var div_product_sec = document.getElementById('div_product_sec')
var show_animat = document.getElementsByClassName('show-animat')
window.onscroll = function(){
    if(document.documentElement.scrollTop>=50){
        box_top_sec.style.top=0
        box_top_sec.style.opacity='.8'
        box_top_sec.style.transition='1s'
    }
    else{
        box_top_sec.style.top='38px'
        box_top_sec.style.opacity='1'

    }
    hiden_kesho()

    // if(document.documentElement.scrollTop>=1100){
    //     div_product_sec.style.display='block'
    // }
    // else{
    //     div_product_sec.style.display='none'

    // }

};
var nav_left = document.getElementById('kesho')
function show_div_hidden(){
    nav_left.style.left='0'
    // nav_left.classList.remove('animate__animated', 'animate__fadeOutLeft');

    // nav_left.classList.add('animate__animated','animate__fadeInLeft') 
    // nav_left.style.display='block'
    // nav_left.style.opacity='0'

}
function hiden_kesho(){
    nav_left.style.left='-2000px'
}
