//할 일 목록 추가하기
let cnt = 0;
function fnAddTodo(){
    cnt++;
    let addTodoInput = $('#addTodoInput').val();
    console.log('버튼 클릭됨 >> ', cnt);

    if(addTodoInput == "" || addTodoInput == null){
        alert("입력값 없음");
        return false;
    }
    let list = '<div class="cont">'
                + '<input type="checkbox" id="chkbox' + cnt + '" name="chkbox" onclick="fnChkTodo(event)">'
                + '<label for="chkbox' + cnt + '" class="todo_chk" ></label>'
                + '<span class="todo_cont">'+ addTodoInput + '</span>'
                + '<button onclick="fnDelTodo(event)" type="button" class="del_todo_btn"><img src="./img/close.png" alt="X"></button>'
                + '</div>';

    $('.input-div').append(list);
    $('#addTodoInput').val("");
}

//할 일 목록 완료 체크
function fnChkTodo(event) {
    let checkbox = event.target;
    let span = checkbox.nextElementSibling.nextElementSibling; // 다음 두 번째 sibling을 찾음

    if (checkbox.checked) {
        //console.log('체크됨');
        span.style.color = '#9ac57b';
        span.style.textDecoration = 'line-through';
    } else {
        //console.log('체크 해제됨');
        span.style.color = ''; // 기본값으로 설정
        span.style.textDecoration = ''; // 기본값으로 설정
    }
}

//할 일 목록 삭제
function fnDelTodo(event){
    let delBtn = event.target;
    let div = delBtn.closest('div');
    div.remove();
}