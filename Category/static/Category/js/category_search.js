function view_list(){
    const request = new XMLHttpRequest()
    request.open('GET','?is_ajax=True')
    request.onload=function(){
        
            document.getElementById('product').innerHTML = this.responseText

        
    }
    request.send()
}
function product_search(btn){
    var name = btn.dataset.name
    var cat = btn.dataset.category
    var slug = btn.dataset.slug
    window.location='/search/'+cat+'/'+slug+'/'+name
}

function page_change(btn){

    window.location='?order='+document.getElementById('order_value').value+'&page='+btn.dataset.num
}
function oreder_change(value){
    window.location='?order='+value 
}