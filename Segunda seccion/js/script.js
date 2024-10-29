document.getElementById('evaluateRiskButton').addEventListener('click', function() {
    const income = parseFloat(document.getElementById('income').value);
    const hasLoans = document.getElementById('hasLoans').checked;
    const latePayments = parseInt(document.getElementById('latePayments').value);
    const isStudent = document.getElementById('isStudent').checked;

    let riskLevel;

    if ((income < 20000 && latePayments > 3) || (hasLoans && isStudent)) {
        riskLevel = 'High';
    } else if ((income >= 20000 && income <= 50000 && latePayments <= 2) || hasLoans) {
        riskLevel = 'Moderate';
    } else {
        riskLevel = 'Low';
    }

    document.getElementById('riskResult').innerText = `Nivel de Riesgo: ${riskLevel}`;
});

document.getElementById('recommendProductButton').addEventListener('click', function() {
    const age = parseInt(document.getElementById('age').value);
    const isMember = document.getElementById('isMember').checked;
    const techProducts = parseInt(document.getElementById('techProducts').value);
    const fashionProducts = parseInt(document.getElementById('fashionProducts').value);
    const otherProducts = parseInt(document.getElementById('otherProducts').value);

    let productRecommendation;

    if ((isMember && techProducts >= 5) || (age >= 18 && age <= 30 && fashionProducts >= 2)) {
        productRecommendation = 'High-Tech Product';
    } else if (!isMember && (techProducts + fashionProducts + otherProducts >= 3) || (age >= 25 && age <= 40)) {
        productRecommendation = 'Fashion Product';
    } else {
        productRecommendation = 'Generic Product';
    }

    document.getElementById('productRecommendation').innerText = `Recomendación: ${productRecommendation}`;
});
