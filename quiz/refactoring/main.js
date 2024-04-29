//퀴즈 내용 클래스로 담아놓기
class Quiz{
    constructor(){
        this.quiz = [
            {
                "seq": 1
                ,"name": "kitten"
                ,"correct": "2"
                ,"image": "../img/kitten.jpg"
                ,"choice": ["bear", "kitten", "elephant", "monkey"]
            }
            ,{
                "seq": 2
                ,"name": "lion"
                ,"correct": "3"
                ,"image": "../img/lion.jpg"
                ,"choice": ["dog", "tiger", "lion", "elephant"]
            }
            ,{
                "seq": 3
                ,"name": "panda"
                ,"correct": "2"
                ,"image": "../img/panda.jpg"
                ,"choice": ["giraffe", "panda", "zebra", "hippo"]
            }
            ,{
                "seq": 4
                ,"name": "polar bear"
                ,"correct": "4"
                ,"image": "../img/polar_bear.jpg"
                ,"choice": ["kitten", "zebra", "dog", "polar bear"]
            }
            ,{
                "seq": 5
                ,"name": "tiger"
                ,"correct": "2"
                ,"image": "../img/tiger.jpg"
                ,"choice": ["monkey", "tiger", "kitten", "giraffe"]
            }
        ]
    }
}


const quizes = new Quiz();
const quizContainer = document.querySelector('.quiz');
const remain = document.querySelector('.remain');
const img = document.querySelector('.img');
const choices = document.querySelector('.choice');
const buttons = document.querySelector('.buttons');
const result = document.querySelector('.answerRes');

//퀴즈 시작 버튼 onclick
function fnStartQuiz(){
    quizes.quiz.filter((val) => val.seq === 1).map((val) => createQuizHtml(val, 1));
}

//버튼클릭
buttons.addEventListener('click', (e) => {
    const order = Number(e.target.dataset.seq);
    const type = e.target.dataset.type;


    if(order == null || type == null){ 
        return;
    }
    if(order === 0){
        return;
    }
    if(type === 'restart'){
        location.href = location.href;
        return;
    }

    //정답체크
    const {right, wrong} = fnCheckRight(order);
    
    if(type === 'submit'){
        fnShowResult(right, wrong);
        return;
    }
    
    //퀴즈 로드
    quizes.quiz.filter((val) => val.seq === order).map((val) => createQuizHtml(val, order));
    
})

let rightNum = 0;
let wrongNum = 0;
function fnCheckRight(order){

    const radio = document.querySelector(`input[name="option${order-1}"]:checked`);
    
    if(radio == null){
        alert('답을 선택하세요 !!');
        return;
    }
    
    if(radio.value === quizes.quiz[order-2].name){
        rightNum += 1;
    }
    else{
        wrongNum += 1;
    }
    
    // console.log(rightNum, wrongNum);
    return {right: rightNum, wrong: wrongNum};
}
//결과보기 함수
function fnShowResult(right, wrong){
    result.classList.remove('invisible');
    quizContainer.classList.add('invisible');
    
    result.innerHTML = `
        <h1>결과</h1>
        정답 : ${right} <br>
        오답 : ${wrong}
    `;
    buttons.innerHTML = `<button class="restartBtn" data-type="restart">restart<button>`;
}

//퀴즈 HTML
function createQuizHtml(quiz, seq){

    quizContainer.classList.remove('invisible');
    
    remain.innerHTML = `${quiz.seq} / ${quizes.quiz.length}`;
    img.innerHTML = `<img src="${quiz.image}" alt="${quiz.name}"/>`;
    choices.innerHTML = quiz.choice.map((val, idx) => createChoicesHtml(val, idx, seq)).join('');
    buttons.innerHTML = createBtnHtml(seq);
}

//선택 옵션 HTML
function createChoicesHtml(option, index, seq){
    return `<div>
            <input type="radio" name="option${seq}" id="option${seq}_${index}" value="${option}">
            <label for="option${seq}_${index}">${option}</label>
            </div>`;
}

//버튼 HTML
function createBtnHtml(seq){
    // console.log(`create btn seq : ${seq}, typeof: ${typeof seq}`);
    switch(seq){
        case 1:
        case 2:
        case 3:
        case 4:
            return `<button class="nextBtn" data-seq="${seq + 1}" data-type="next">Next</button>`;
        case 5:
            return `<button class="submitBtn" data-seq="${seq + 1}" data-type="submit">Submit</button>`;
        default:
            new Error('check your seq !!');
    }
}