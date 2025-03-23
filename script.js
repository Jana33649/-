const angelMessages = [
    "天使告诉你：保持平静，所有的一切都会过去。",
    "你被祝福，前方的路将充满希望。",
    "天使提醒你：信任你的直觉，它将带领你走向正确的方向。",
    "这个时刻是变革的开始，保持信心。",
    "信任你内心的声音，它会引导你走向人生的正道。",
    "现在是放下恐惧的时候，迎接新的人生旅程。",
    "即使是最小的行动，也能带来巨大的变化。",
    "保持希望，勇敢地面对挑战，因为你正走在通往成功的道路上。",
    "你的心灵在静谧中找到了答案，保持安宁，天使会在你身边守护。",
    "天使说：你已经准备好迎接更高的挑战了，不要再犹豫。",
    // 这里请继续添加剩余的66条天使神谕
];

const drawButton = document.getElementById('draw-button');
const resultDiv = document.getElementById('result');
const loadingDiv = document.getElementById('loading');

drawButton.addEventListener('click', () => {
    // 禁用按钮并显示加载状态
    drawButton.disabled = true;
    loadingDiv.style.display = 'block';
    resultDiv.style.opacity = 0; // 在显示新神谕前先隐藏

    // 模拟抽取的延迟，模拟加载过程
    setTimeout(() => {
        // 从angelMessages中随机选取一条
        const randomIndex = Math.floor(Math.random() * angelMessages.length);
        const selectedMessage = angelMessages[randomIndex];

        // 更新结果内容并显示
        resultDiv.innerHTML = `<p>${selectedMessage}</p>`;
        resultDiv.style.opacity = 1; // 显示神谕

        // 弹出窗口显示抽取到的神谕
        alert("你抽取到的天使神谕是：" + selectedMessage);

        // 隐藏加载状态并启用按钮
        loadingDiv.style.display = 'none';
        drawButton.disabled = false;
    }, 1500); // 1.5秒的加载延迟
});