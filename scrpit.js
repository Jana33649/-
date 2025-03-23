function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    resetResults(); // 清空所有结果
}

function resetResults() {
    document.querySelectorAll('.result').forEach(result => {
        result.textContent = '';
    });
}

// 概率抽卡
function drawProbability() {
    const probabilities = ['0%', '20%', '40%', '60%', '80%', '90%', '100%', '不可得知', '模糊不清', '请相信'];
    const result = probabilities[Math.floor(Math.random() * probabilities.length)];
    document.getElementById('probabilityResult').textContent = result;
}

// 脉轮抽卡
function drawChakra() {
    const chakras = ['根轮', '骶轮', '脐轮', '心轮', '喉轮', '眉心轮', '顶轮'];
    const chakra = chakras[Math.floor(Math.random() * chakras.length)];
    const percentage = Math.floor(Math.random() * 101);
    document.getElementById('chakraResult').textContent = `${chakra} - ${percentage}%`;
}

// 颜色抽卡
function drawColor() {
    const colors = [
        '红色', '橙色', '黄色', '绿色', '蓝色', '紫色', '粉色', '棕色', '灰色', '黑色',
        '白色', '青色', '靛蓝', '橄榄绿', '深红', '浅蓝', '深紫', '浅绿', '深灰', '浅灰',
        '金色', '银色', '米色', '卡其色', '珊瑚红', '天蓝色', '森林绿', '海军蓝', '酒红', '玫瑰红',
        '淡紫', '柠檬黄', '巧克力色', '桃红', '松石绿', '象牙白', '深绿', '浅粉'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('colorResult').textContent = color;
}

// 塔罗牌抽卡
function drawTarot() {
    const tarotCards = [
        '愚者', '魔术师', '女祭司', '皇后', '皇帝', '教皇', '恋人', '战车', '力量', '隐者',
        '命运之轮', '正义', '倒吊人', '死神', '节制', '恶魔', '塔', '星星', '月亮', '太阳',
        '审判', '世界',
        '权杖Ace', '权杖2', '权杖3', '权杖4', '权杖5', '权杖6', '权杖7', '权杖8', '权杖9', '权杖10',
        '权杖侍从', '权杖骑士', '权杖皇后', '权杖国王',
        '圣杯Ace', '圣杯2', '圣杯3', '圣杯4', '圣杯5', '圣杯6', '圣杯7', '圣杯8', '圣杯9', '圣杯10',
        '圣杯侍从', '圣杯骑士', '圣杯皇后', '圣杯国王',
        '宝剑Ace', '宝剑2', '宝剑3', '宝剑4', '宝剑5', '宝剑6', '宝剑7', '宝剑8', '宝剑9', '宝剑10',
        '宝剑侍从', '宝剑骑士', '宝剑皇后', '宝剑国王',
        '钱币Ace', '钱币2', '钱币3', '钱币4', '钱币5', '钱币6', '钱币7', '钱币8', '钱币9', '钱币10',
        '钱币侍从', '钱币骑士', '钱币皇后', '钱币国王'
    ];
    const count = parseInt(document.getElementById('tarotCount').value);
    const resultDiv = document.getElementById('tarotResult');
    resultDiv.innerHTML = '';
    const selectedCards = [];
    while (selectedCards.length < count) {
        const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
        if (!selectedCards.includes(card)) {
            selectedCards.push(card);
            const cardElement = document.createElement('p');
            cardElement.textContent = card;
            resultDiv.appendChild(cardElement);
        }
    }
}

// 默认显示概率抽卡
showSection('probability');