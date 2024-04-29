//퀴즈 내용 클래스로 담아놓기
class Quiz{
    constructor(question){
        this.question = [
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
const btn = document.querySelector('.buttons');

const quizContainer = document.querySelector('.quiz');
const remain = document.querySelector('.remain');
const img = document.querySelector('.img');
const choice = document.querySelector('.choice');

//퀴즈 버튼 클릭
btn.addEventListener('click', (e) => {
    const dataset = e.target.dataset;
    const seq = Number(dataset.seq);
    const btnType = dataset.btnType;
    
    if(seq == null || btnType == null){
        return;
    }
    
    console.log(`[버튼 클릭] seq: ${seq}, btnType: ${btnType}`);
    
    //제출버튼의 경우
    if(btnType === 'submit'){
        loadResult();
        return;
    }

    //퀴즈 로드
    fnLoadQuiz(quizes.question, seq);

    // //정답확인
    // quizes.question
    //     .filter((val) => val.seq === seq)
    //     .map((val) => checkRight(val.name))

    // // saveAnswer()
    
    // // return false;

    // quizes.question
    // .filter((val, idx) => seq === idx)
    // .map((val) => {
    //     loadQuiz(val, seq);
    // });

    
})

// 퀴즈 로드 함수
function fnLoadQuiz(quiz, seq){

    if(seq === 0){
        quiz.filter((val) => val.seq === (seq))
        .map((val) => fnShowNextQuiz(val, seq+1));
        return;
    }

    quiz.filter((val) => val.seq === (seq))
        .map((val) => {
            //1. 정답 확인 함수
            fnSaveAnswer(val, seq);
        
            //2. 다음 퀴즈 보여주는 함수
            fnShowNextQuiz(val, seq+1);
    })

    // await loadQuiz(quiz, seq);
    // quiz.map((val) => console.log(val.choice));
}

//정답 확인 함수
function fnSaveAnswer(quiz, seq){
    console.log('fnSaveAnswer');
    console.log(quiz);
    console.log(seq);

    if(seq === 0){
        return;
    }

    fnCheckRight(quiz.name, seq);

    // quiz.filter((val) => val.seq === seq)
    //     .map((val) => fnCheckRight(val.name))
}

//정답 체크 함수
function fnCheckRight(quizName, seq){
    const chkQuiz = document.querySelectorAll(`input[name="chk${seq}"]`).checked;
    console.log(chkQuiz);

    const res =  Array.from(chkQuiz).filter((val) => val.value === quizName);
    console.log(`res:${res}`);
}

//다음 퀴즈 보여주는 함수
function fnShowNextQuiz(quiz, seq){
    // console.log(quiz);

    quizContainer.classList.remove('invisible');
    remain.innerHTML = `${seq} / 5`;
    btn.innerHTML = createBtn(seq);
    choice.innerHTML = quiz.choice.map((val, idx) => fnLoadChoices(val, seq, idx)).join('');
    img.innerHTML = `<img src="${quiz.image}" alt="${quiz.name}">`;

}

//선택옵션 로드 함수
function fnLoadChoices(value, seq, idx){
    return `
        <input type="radio" name="chk${seq}" value="${value}" id="chk${seq}_${idx}"/>
        <label for="chk${seq}_${idx}">${value}</label>
    `;
}

//버튼 생성 함수
function createBtn(order){
    console.log(`order:${order}`);
    switch(order){
        case 0:
            return `<button class="nextBtn" data-seq="${order+1}" data-btn-type="next">Next</button>`;
        case 1:
        case 2:
        case 3:
            return `<button class="prevBtn" data-seq="${order-1}" data-btn-type="prev">Prev</button>
                    <button class="nextBtn" data-seq="${order+1}" data-btn-type="next">Next</button>`;
        case 4:
            return `<button class="prevBtn" data-seq="${order-1}" data-btn-type="prev">Prev</button>
                    <button class="submitBtn" data-btn-type="submit">Submit</button>`;
        default:
            new Error('error !!!!!');
    }
}


//옵션 선택 저장 함수
// let right = 0;
// let wrong = 0;
// function saveAnswer(quiz, seq){

//     console.log(quiz);
//     console.log(seq);



//     Array.from(chkQuiz)
//         .filter((val) => val.checked)
//         .map((val) => checkRight(quiz, val))
    
// }

//정답확인함수
// function checkRight(chkName){
//     // console.log(quiz.name);
//     console.log(chkName);

// }


//퀴즈 로드 함수
// function loadQuiz(val, order){
//     // console.log(val);
//     console.log(`퀴즈 로드 순서: ${order}`)

//     quizContainer.classList.remove('invisible');

//     remain.innerHTML = `${val.seq} / 5`;
//     img.innerHTML = `<img src="${val.image}" alt="${val.name}">`;
//     choice.innerHTML = val.choice.map((val, idx) => loadChoices(val, idx, order)).join('');
//     btn.innerHTML = createBtn(order);
// }


//선택지 로드 함수
// function loadChoices(item, index){
//     return `
//     <div>
//         <input type="radio" class="${index + 1}" name="chkQuiz${index + 1}" id="choice${index + 1}" value="${item}" data-chk-num="${index + 1}">
//         <label for="choice${index + 1}">${item}</label> 
//     </div>
//     `;
// }

const answerRes = document.querySelector('.answerRes');

//최종 결과 로드 함수
function loadResult(){
    console.log('최종결과');
    
    quizContainer.classList.add('invisible');
    answerRes.classList.remove('invisible');

    answerRes.innerHTML = `<span>정답 : ${right}, 오답 : ${wrong}</span>`;
    btn.innerHTML = `<button class = "restartBtn" data-type="restart">Restart</button>`;
}