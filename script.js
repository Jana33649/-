// 定义天使神谕信息（身心灵层面的提醒）
const angelMessages = [
    "天使提醒你：每天保持足够的水分，水是你身体和灵魂的源泉 💧。",
    "定期进行运动，保持身体的活力，运动不仅能强健体魄，还能让心灵得到释放 💪。",
    "天使提醒你：保护你的个人能量，避免无谓的消耗 ⚡。",
    "静下心来，连接内在自我，聆听内心的声音，它会引导你走向平静与安宁 🧘‍♀️。",
    "放慢脚步，给自己一点时间去休息和恢复，重拾内在的力量 🌿。",
    "每天给自己一些独处的时光，远离喧嚣，给心灵充电 🌸。",
    "天使告诉你：规律的作息是健康的基础，给予自己足够的休息，才能保持身心的平衡 🛏️。",
    "冥想和深呼吸能帮助你清理内心的杂乱，保持内在的清明 🌙。",
    "天使提醒你：不要忽视内在的感受，情绪是身体给你的信号，学会倾听和照顾自己 💖。",
    "每天给自己几分钟的冥想时间，让心灵恢复平静，重新与自我连接 🌼。",
    "天使说：保持正念，活在当下，避免过度焦虑和自我怀疑 🌟。",
    "学会放松，释放积压的压力，保护自己的情绪健康 💫。",
    "天使提醒你：与大自然连接，呼吸新鲜空气，感受自然的疗愈力量 🌱。",
    "多做深呼吸，帮助清理负能量，让身体和心灵都得到净化 🌬️。",
    "每天练习感恩，感恩生活中的每一个小细节，帮助你保持积极的心态 🙏。",
    "天使告诉你：饮食健康，摄取充足的营养，给予身体所需的能量 🍏。",
    "花时间去感受自己的情绪，尊重自己内心的感受，不要压抑自己 🌹。",
    "天使提醒你：和真心的朋友在一起，倾听他们的心声，同时也分享自己的感受 🤝。",
    "每天花一点时间做自己喜欢的事情，无论是画画、写字，还是散步，给予自己一些创造和放松的时光 🎨。",
    "天使告诉你：相信自己的直觉，它是你内心的声音，指引你走向正确的道路 ✨。",
    "保持心灵的清明和纯净，避免让负面情绪占据心头 🌈。",
    "天使提醒你：偶尔放慢节奏，给自己一个暂停的机会，恢复能量后再前行 🦋。",
    "学会与自己和解，接受自己的不完美，这正是你独特的美 🌻。",
    "天使告诉你：保持开放的心态，接受生活中的每一份挑战 🛤️。",
    "关注自己的身体状况，定期进行身体检查，保持健康的生活习惯 🏃‍♂️。",
    "天使提醒你：尊重自己的需求，学习说‘不’，保护自己的界限 ✋。",
    "每天进行深度的自我反思，帮助你更好地理解自己，提升内在的力量 💡。",
    "天使告诉你：微笑是最好的疗愈，笑一笑，放松自己，释放压力 😀。",
    "每天给自己一些放松的时光，无论是泡澡、读书，还是简单地闭目养神 🛁。",
    "天使提醒你：善待自己，给自己更多的宽容和爱，照顾自己的心灵 ❤️。",
    "每天花时间去做深呼吸，清理你体内的负面能量 🌟。",
    "天使告诉你：尽量避免接触负面的人和环境，保护好自己的能量场 🔮。",
    "无论多忙，都要保持与自己内在的连接，定期进行冥想或深思，听一听心灵的声音 🌙。"
];

// 定义抽取天使神谕信息的函数
function getAngelMessage() {
    const randomIndex = Math.floor(Math.random() * angelMessages.length);
    return angelMessages[randomIndex];
}

// 处理按钮点击事件，显示反馈信息
document.getElementById("extractButton").addEventListener("click", function() {
    // 获取提示文本元素
    const loadingText = document.getElementById("loadingText");
    const messageContainer = document.getElementById("angelMessage");

    // 显示加载提示
    loadingText.style.opacity = 1;
    loadingText.style.visibility = 'visible';

    // 隐藏结果信息
    messageContainer.style.opacity = 0;

    // 等待0.7秒后，抽取神谕
    setTimeout(function() {
        const message = getAngelMessage();
        
        // 显示结果信息
        messageContainer.textContent = message;
        loadingText.style.opacity = 0;  // 隐藏加载提示

        // 让结果渐显
        messageContainer.style.opacity = 1;
    }, 700); // 0.7秒延迟
});