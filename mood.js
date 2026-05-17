//先抓到網頁上的大圖片元素，以及三個按鈕
const moodImg = document.getElementById('moodImg');
const happyBtn = document.getElementById('happyBtn');
const sadBtn = document.getElementById('sadBtn');
const resetBtn = document.getElementById('resetBtn');
const moodTitle = document.getElementById('moodTitle');

//當點擊「開心」按鈕時，把大圖的 src 換成 開心.png
happyBtn.addEventListener('click', () => {
    moodImg.src = '開心.png';
    moodTitle.innerText = '喜拿現在很開心'
    //如果你想讓圖片有漸顯的效果，先重設透明度再觸發
    moodTitle.style.color='#df4985'
});

//當點擊「憂鬱」按鈕時，把大圖的 src 換成 憂鬱.png
sadBtn.addEventListener('click', () => {
    moodImg.src = '憂鬱.png';
    moodTitle.innerText = '喜拿現在很憂鬱'
    moodTitle.style.color='#2a73e0'
});

//當點擊「恢復原狀」按鈕時，把大圖的 src 換回 正常.png
resetBtn.addEventListener('click', () => {
    moodImg.src = '正常.png';
    moodTitle.innerText = '今天心情如何？'
    moodTitle.style.color='#050505'
});
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2 id="moodTitle">今天心情如何？</h2>

    <div id="colorBox">
        <img id="moodImg" src="正常.png" alt="當前心情" style="width: 200px;">
    </div>
    <br> <button id="happyBtn">開心</button>
    <button id="sadBtn">憂鬱</button>
    <button id="resetBtn">恢復原狀</button>
</body>
<script src="mood.js"></script>
</html>
