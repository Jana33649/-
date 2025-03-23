// 获取按钮和结果显示区域
const drawCardBtn = document.getElementById('drawCardBtn');
const cardResult = document.getElementById('cardResult');

// 定义抽卡内容
const cardOptions = ["0%", "20%", "40%", "60%", "80%", "100%", "不可得知", "模糊不清", "请相信"];

// 抽卡按钮点击事件
drawCardBtn.addEventListener('click', () => {
    // 随机抽取一个卡片结果
    const randomIndex = Math.floor(Math.random() * cardOptions.length);
    const randomCard = cardOptions[randomIndex];

    // 显示抽卡结果
    cardResult.innerText = randomCard;
});