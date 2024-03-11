var txt = '';
$('.btn').on('click', function(){
    
    var className = $(this).attr('class');
    
    //AC 클릭 시 초기화
    if(className.indexOf('clear') > -1){
        $('.inout').empty();
        txt = '';
        return false;
    }

    txt += $(this).text();
    console.log(txt);
    $('.inout').html(txt);


    var res = 0;

});

function fnCalc(){
    
}