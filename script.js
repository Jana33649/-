<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>抽牌网站</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav>
        <button onclick="showSection('probability')">概率抽卡</button>
        <button onclick="showSection('chakra')">脉轮抽卡</button>
        <button onclick="showSection('color')">颜色抽卡</button>
        <button onclick="showSection('tarot')">塔罗牌抽卡</button>
    </nav>
    <div id="probability-section" class="section">
        <h2>概率抽卡</h2>
        <button onclick="drawProbability()">抽取</button>
        <p id="probability-result"></p>
    </div>
    <div id="chakra-section" class="section" style="display: none;">