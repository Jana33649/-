// 常量定义（数据与逻辑分离）
const PROBABILITIES = ['0%', '20%', '40%', '60%', '80%', '90%', '100%', '不可得知', '模糊不清', '请相信'];
const CHAKRAS = ['根轮', '骶轮', '脐轮', '心轮', '喉轮', '眉心轮', '顶轮'];
const COLORS = [
  '红色', '橙色', '黄色', '绿色', '蓝色', '紫色', '粉色', '棕色', '灰色', '黑色',
  '白色', '青色', '靛蓝', '橄榄绿', '深红', '浅蓝', '深紫', '浅绿', '深灰', '浅灰',
  '金色', '银色', '米色', '卡其色', '珊瑚红', '天蓝色', '森林绿', '海军蓝', '酒红', '玫瑰红',
  '淡紫', '柠檬黄', '巧克力色', '桃红', '松石绿', '象牙白', '深绿', '浅粉'
];
const TAROT_CARDS = [
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

// 通用工具函数
const utils = {
  // 随机获取数组元素
  getRandomItem: arr => arr[Math.floor(Math.random() * arr.length)],
  
  // 安全解析整数
  safeParseInt: (value, defaultValue = 1) => {
    const num = parseInt(value, 10);
    return isNaN(num) ? defaultValue : num;
  }
};

// 页面控制函数
function showSection(sectionId) {
  // 使用更具体的选择器避免冲突
  document.querySelectorAll('.tab-section').forEach(section => {
    section.style.display = 'none';
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) targetSection.style.display = 'block';
  resetResults();
}

function resetResults() {
  // 使用更具体的结果容器选择器
  document.querySelectorAll('.result-box').forEach(result => {
    result.textContent = '';
  });
}

// 概率抽卡
function drawProbability() {
  const result = utils.getRandomItem(PROBABILITIES);
  document.getElementById('probabilityResult').textContent = result;
}

// 脉轮抽卡
function drawChakra() {
  const chakra = utils.getRandomItem(CHAKRAS);
  const percentage = Math.floor(Math.random() * 101);
  document.getElementById('chakraResult').textContent = `${chakra} - ${percentage}%`;
}

// 颜色抽卡
function drawColor() {
  const color = utils.getRandomItem(COLORS);
  document.getElementById('colorResult').textContent = color;
}

// 塔罗牌抽卡（优化版）
function drawTarot() {
  const countInput = document.getElementById('tarotCount').value;
  
  // 输入验证（1-78之间）
  let count = utils.safeParseInt(countInput, 1);
  count = Math.min(Math.max(count, 1), TAROT_CARDS.length);

  // 使用 Set 去重
  const selectedCards = new Set();
  while (selectedCards.size < count) {
    selectedCards.add(utils.getRandomItem(TAROT_CARDS));
  }

  // 优化DOM操作
  const fragment = document.createDocumentFragment();
  selectedCards.forEach(card => {
    const p = document.createElement('p');
    p.className = 'tarot-card';
    p.textContent = card;
    fragment.appendChild(p);
  });

  const resultDiv = document.getElementById('tarotResult');
  resultDiv.innerHTML = '';
  resultDiv.appendChild(fragment);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  showSection('probability');
  
  // 添加输入限制（塔罗牌数量只能输入数字）
  document.getElementById('tarotCount').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^\d]/g, '');
  });
});