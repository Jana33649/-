function showCard(type) {
    let result = "";
    if (type === "probability") {
        result = getProbabilityCard();
    } else if (type === "chakra") {
        result = getChakraCard();
    } else if (type === "color") {
        result = getColorCard();
    } else if (type === "tarot") {
        result = getTarotCard();
    }

    document.getElementById("抽卡区域").innerHTML = `<p>${result}</p>`;
}

// 概率抽卡
function getProbabilityCard() {
    const probabilities = [0, 10, 25, 50, 75, 90, 100];
    const specialCards = ["不可得知", "模糊不清", "请相信"];
    let randomIndex = Math.floor(Math.random() * probabilities.length);
    
    // 随机选择概率档次
    let result = `你抽到了概率卡：${probabilities[randomIndex]}%`;
    
    // 10% 的几率抽到特殊卡
    if (Math.random() < 0.1) {
        result = `你抽到了特殊卡：${specialCards[Math.floor(Math.random() * specialCards.length)]}`;
    }
    return result;
}

// 脉轮抽卡
function getChakraCard() {
    const chakras = ["根脉轮", "腹脉轮", "太阳神经丛脉轮", "心脉轮", "喉脉轮", "眉心脉轮", "冠脉轮"];
    const chakraIndex = Math.floor(Math.random() * chakras.length);
    const chakra = chakras[chakraIndex];
    const percentage = Math.floor(Math.random() * 100);
    
    return `你抽到了脉轮卡：${chakra}，活跃度：${percentage}%`;
}

// 颜色抽卡
function getColorCard() {
    const colors = [
        "红色：代表激情与活力",
        "橙色：代表创造力与热情",
        "黄色：代表智慧与阳光",
        "绿色：代表平衡与和谐",
        "蓝色：代表冷静与理智",
        "紫色：代表神秘与灵性",
        "白色：代表纯洁与清晰",
        "黑色：代表未知与深邃",
        "灰色：代表中立与妥协",
        // 其他颜色...
    ];
    const colorIndex = Math.floor(Math.random() * colors.length);
    return `你抽到了颜色卡：${colors[colorIndex]}`;
}

// 塔罗牌抽卡
function getTarotCard() {
    const tarotDeck = [
        "愚者", "魔术师", "女祭司", "皇后", "皇帝", "教皇", "恋人", "战车", 
        "力量", "隐士", "命运之轮", "正义", "倒吊人", "死神", "节制", "恶魔", 
        "塔楼", "星星", "月亮", "太阳", "审判", "世界"
    ];
    const numberOfCards = Math.floor(Math.random() * 3) + 1; // 随机抽取1-3张牌
    let result = "你抽到了塔罗牌：";
    for (let i = 0; i < numberOfCards; i++) {
        const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
        result += `<br>${card}`;
    }
    return result;
}