// random.js
const random = Math.random();
console.log(random); // 실행할 때마다 달라짐

// getMaxRandom.js
function getMaxRandom(max){
    return Math.floor(Math.random() * max) + 1;
}
const maxRandom = getMaxRandom(20);
console.log(maxRandom); // 0 이상 20 이하의 무작위 정수

// getMinMaxRandom.js
function getMinMaxRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + 1 + min;
    // 20을 제외하고 싶으면 + 1 삭제
}
const maxRandom2 = getMinMaxRandom(10, 20);
console.log(maxRandom2); // 10 이상 20 이하의 무작위 정수 0