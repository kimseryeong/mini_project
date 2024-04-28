//퀴즈 내용 클래스로 담아놓기
class Quiz{
    constructor(question){
        this.question = [
            {
                "order": 1
                ,"name": "kitten"
                ,"correct": 2
                ,"image": "../img/kitten.jpg"
                ,"choice": ["bear", "kitten", "elephant", "monkey"]
            }
            ,{
                "order": 2
                ,"name": "lion"
                ,"correct": 3
                ,"image": "../img/lion.jpg"
                ,"choice": ["dog", "tiger", "lion", "elephant"]
            }
            ,{
                "order": 3
                ,"name": "panda"
                ,"correct": 2
                ,"image": "../img/panda.jpg"
                ,"choice": ["giraffe", "panda", "zebra", "hippo"]
            }
            ,{
                "order": 4
                ,"name": "polar bear"
                ,"correct": 4
                ,"image": "../img/polar_bear.jpg"
                ,"choice": ["kitten", "zebra", "dog", "polar bear"]
            }
            ,{
                "order": 5
                ,"name": "tiger"
                ,"correct": 2
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
const choice = document.querySelector('.choice');
const btn = document.querySelector('.buttons');
const resultContainer = document.querySelector('.result');

//퀴즈 시작 버튼 클릭
const startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', (e)=>{
    quizes.question.filter((val) => val.order === 1).map((val) => loadQuiz(val, 1));
    
    startBtn.classList.add('invisible');
    quizContainer.classList.remove('invisible');
})

btn.addEventListener('click', (e) => {
    //start -> 0번째 퀴즈
    //next -> 현재 order의 +1을 한 퀴즈
    //prev -> 현재 order의 -1을 한 퀴즈
    //submit -> 최종 페이지

    // quizes.question.filter() -> val.order 와
    // e.target.classList

    const dataset = e.target.dataset;
    const seq = Number(dataset.order);
    const type = dataset.type;

    console.log(`seq: ${seq}, type: ${typeof seq}`)
    console.log(`type: ${type}, type: ${typeof type}`)
    

    if(seq === 0 && type === 'prev'){
        //첫번째 화면으로
        location.href = location.href;
    }
    else if(type === 'prev' || type === 'next'){
        quizes.question.filter((val) => val.order === seq).map((val) => loadQuiz(val, seq));
    }
    else if(type === 'submit'){
        loadResult();
    }
    


})

//퀴즈 로드 함수
function loadQuiz(val, order){
    console.log(`퀴즈 로드 val: ${val}, ${order}`)

    remain.innerHTML = `${val.order} / 5`;
    img.innerHTML = `<img src="${val.image}" alt="${val.correct}">`;
    choice.innerHTML = val.choice.map((val, idx) => loadChoices(val, idx, order)).join('');
    btn.innerHTML = createBtn(order);
}

//버튼 생성 함수
function createBtn(order){
    console.log(`order:${order}`);
    switch(order){
        case 0:
        case 1:
        case 2:
        case 3:
            return `<button class="prevBtn" data-order="${order - 1}" data-type="prev">Prev</button>
                    <button class="nextBtn" data-order="${order + 1}" data-type="next">Next</button>`;
        case 4:
            return `<button class="prevBtn" data-order="${order - 1}" data-type="prev">Prev</button>
                    <button class="submitBtn" data-type="submit">Submit</button>`;
        default:
            new Error('error !!!!!');
    }
}

//선택지 로드 함수
function loadChoices(item, index, order){
    return `
    <div>
        <input type="radio" class="choice${index + 1}" name="chkQuiz${order + 1}" id="choice${index + 1}" value="${item}">
        <label for="choice${index + 1}">${item}</label> 
    </div>
    `;
}

const answerRes = document.querySelector('.answerRes');

//최종 결과 로드 함수
function loadResult(){
    console.log('최종결과');
    
    quizContainer.classList.add('invisible');
    quizContainer.classList.remove('invisible');

    answerRes.innerHTML = `
        <span>정답 : , 오답 : </span>
        <button class = "restartBtn" data-type="restart">Restart</button>
    `;
}