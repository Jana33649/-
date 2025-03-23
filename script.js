// 控制模块显示
const sections = {
    probability: document.getElementById('probability'),
    chakra: document.getElementById('chakra'),
    color: document.getElementById('color'),
    tarot: document.getElementById('tarot')
};

document.getElementById('probabilityBtn').onclick = () => switchSection('probability');
document.getElementById('chakraBtn').onclick = () => switchSection('chakra');
document.getElementById('colorBtn').onclick = () => switchSection('color');
document.getElementById('tarotBtn').onclick = () => switchSection('tarot');

function switchSection(section) {
    // 隐藏所有板块
    Object.values(sections).forEach(sec => sec.style.display = 'none');
    // 显示当前板块
    sections[section].style.display = 'block';
}

// 概率抽卡
function drawProbabilityCard() {
    const outcomes = ["0%", "20%", "40%", "60%", "80%", "100%", "不可得知", "模糊不清", "请相信"];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    document.getElementById('probabilityResult').innerText = `结果: ${outcomes[randomIndex]}`;
}

// 脉轮抽卡
function drawChakraCard() {
    const chakras = ["根脉轮", "海底轮", "太阳神经丛", "心脉轮", "喉脉轮", "眉心轮", "顶轮"];
    const randomChakra = chakras[Math.floor(Math.random() * chakras.length)];
    const activationPercentage = Math.floor(Math.random() * 101);
    document.getElementById('chakraResult').innerHTML = `脉轮: ${randomChakra}, 活跃度: ${activationPercentage}%`;
}

// 颜色抽卡
function drawColorCard() {
    const colors = [
        "红色", "橙色", "黄色", "绿色", "蓝色", "紫色", "黑色", "白色", "灰色", 
        "粉色", "金色", "银色", "棕色", "青色", "玫瑰金", "天蓝", "靛蓝", "深绿色", "草绿色", 
        "藏青", "淡蓝", "淡紫", "金黄", "浅绿", "橄榄绿", "深紫", "宝蓝", "杏色", 
        "桃色", "紫红色", "巧克力色", "乳白色", "珊瑚色", "橙红色", "蛋壳色", "玳瑁色", 
        "翡翠绿", "水蓝色"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('colorResult').innerText = `抽到的颜色: ${randomColor}`;
}

// 塔罗牌抽卡
function drawTarotCard() {
    const tarotDeck = ["愚者", "魔术师", "女祭司", "皇后", "皇帝", "教皇", "恋人", "战车", "力量", "隐士", "命运之轮", "正义", "倒吊人", "死亡", "节制", "魔鬼", "塔", "星星", "月亮", "太阳", "审判", "世界"];
    const numCards = 1;  // 你可以允许用户选择数量，这里默认为1
    let drawnCards = [];
    for (let i = 0; i < numCards; i++) {
        const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
        drawnCards.push(card);
    }
    document.getElementById('tarotResult').innerText = `抽到的塔罗牌: ${drawnCards.join(", ")}`;
}

// 默认显示概率抽卡
switchSection('probability');