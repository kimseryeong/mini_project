
//퀴즈 시작 함수
function fnQuizStart(){

    $('.start').hide()
    $('.quiz1').show()
}

//퀴즈 다음버튼
let correctNum = 0
let wrongNum = 0
function fnQuizNext(num, $this){
    console.log('현재 퀴즈 번호 : ', num)
    console.log('$this', $this)
    
    let classNum = Number(num)
    let now = '.quiz' + classNum
    let next = '.quiz' + (classNum+1)

    let imgNm = $($this).parent().parent().find('img').attr('class')

    fnQuizAnsSave(classNum, imgNm); //퀴즈 답변 저장

    $(now).hide()
    if(classNum < 5){
        $(next).show()
    }
    else{
        $('.result').show()
        $('.correctNum').html(correctNum)
        $('.wrongNum').html(wrongNum)
    }

}

//퀴즈 답변 저장
function fnQuizAnsSave(num, img){

    $('input:radio[name="chkQuiz' + num + '"]').each(function(){
        if($(this).is(":checked") == true){
            console.log($(this).attr('id'))
            
            let thisVal = $(this).val()
            console.log(thisVal)
            
            if(thisVal == img){
                correctNum += 1
            }
            else{
                wrongNum += 1
            }
        }
    })
    
    
}

//퀴즈 재시작
function fnQuizRestart(){
    location.href = location.href
}