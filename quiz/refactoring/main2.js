//퀴즈 내용 클래스로 담아놓기
class Quizes{
    constructor(quiz){
        this.quiz = [
            {
                "seq": 1
                ,"name": "kitten"
                ,"correct": 2
                ,"image": "../img/kitten.jpg"
                ,"choice": ["bear", "kitten", "elephant", "monkey"]
            }
            ,{
                "seq": 2
                ,"name": "lion"
                ,"correct": 3
                ,"image": "../img/lion.jpg"
                ,"choice": ["dog", "tiger", "lion", "elephant"]
            }
            ,{
                "seq": 3
                ,"name": "panda"
                ,"correct": 2
                ,"image": "../img/panda.jpg"
                ,"choice": ["giraffe", "panda", "zebra", "hippo"]
            }
            ,{
                "seq": 4
                ,"name": "polar bear"
                ,"correct": 4
                ,"image": "../img/polar_bear.jpg"
                ,"choice": ["kitten", "zebra", "dog", "polar bear"]
            }
            ,{
                "seq": 5
                ,"name": "tiger"
                ,"correct": 2
                ,"image": "../img/tiger.jpg"
                ,"choice": ["monkey", "tiger", "kitten", "giraffe"]
            }
        ]
    }
}

const quizes = new Quizes();
console.log(quizes.quiz);

const startBtn = document.querySelector('startBtn');
const btn = document.querySelector('buttons');

const quizContainer = document.querySelector('.quiz');
const remain = document.querySelector('.remain');
const img = document.querySelector('.img');
const choice = document.querySelector('.choice');
const resultContainer = document.querySelector('.result');

//버튼 클릭
btn.addEventListener('click', (e) => {
    //fnLoadQuiz : 퀴즈 로드 함수

    const dataset = e.target.dataset;
    const seq = dataset.seq;
    const btnType = dataset.btn.type;

    console.log(`btn 클릭됨, seq: ${seq}, btnType: ${btnType}`);
});