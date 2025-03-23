function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
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
    const colors = ['红色', '蓝色', '绿色', '黄色', '紫色', '橙色', '粉色', '灰色', '黑色', '白色'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('colorResult').textContent = color;
    document.body.style.backgroundColor = color;
}

// 塔罗牌抽卡
function drawTarot() {
    const tarotCards = ['愚者', '魔术师', '女祭司', '皇后', '皇帝', '教皇', '恋人', '战车', '力量', '隐者'];
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