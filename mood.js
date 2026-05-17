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