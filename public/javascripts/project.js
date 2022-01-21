$(document).ready(function(){
function fillCategory(category){

    $('#ptype').empty()
    $('#ptype').append($('<option>').text('-Product Type-'))
    $.getJSON('/products/getproducttype',{'category':category},function(data){
    
$.each(data,function(index,item){
    $('#ptype').append($('<option>').text(item.typename).val(item.typeid))
})
})
}
$('#food').change(function(){
    fillCategory("Food")
$('#gst').val("5")
})

$('#electronics').change(function(){
    fillCategory("Electronics")
$('#gst').val("18")
})

$('#inr').change(function(){
$.getJSON('/products/getprice',{'unitid':$('#unit').val()},function(data){
//alert(JSON.stringify(data))    //to convert object data into json format 
$('#price').val(data[0].price)
})
})

$('#usd').change(function(){
    $.getJSON('/products/getprice',{'unitid':$('#unit').val()},function(data){
    $('#price').val((data[0].price/74.8).toFixed(2))
    })
    })


$('#ptype').change(function(){
    $('#unit').empty()
    $('#unit').append($('<option>').text('-Units-'))
    $.getJSON('/products/getunits',{'typeid':$('#ptype').val()},function(data){
    
$.each(data,function(index,item){
    $('#unit').append($('<option>').text(item.unitvalue).val(item.unitid))
})
})
})

$('#offer').change(function(){
    //alert($('#inr').prop('checked')
        $('#offerrate').val($('#offer').val())
    
})
  

})