function checkPalindrome() {
    const inputString = document.getElementById('inputString').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = inputString.split('').reverse().join('');

    if (inputString === reversedString) {
        document.getElementById('result1').innerText = 'The string is a palindrome.';
    } else {
        document.getElementById('result1').innerText = 'The string is not a palindrome.';
    }
}

function findMinMax() {
    const numbersInput = document.getElementById('numbersInput').value;
    const numbersArray = numbersInput.split(',').map(num => parseInt(num.trim()));

    if (numbersArray.some(isNaN)) {
        document.getElementById('result2').innerHTML = 'Please enter valid numbers separated by commas.';
        return;
    }

    const minNumber = Math.min(...numbersArray);
    const maxNumber = Math.max(...numbersArray);

    document.getElementById('result2').innerHTML = `
        <p>Minimum number: ${minNumber}</p>
        <p>Maximum number: ${maxNumber}</p>
    `;
}


document.getElementById('seriesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const seriesInput = document.getElementById('series').value;
    const series = seriesInput.split(',').map(num => parseInt(num.trim(), 10));

    findMissingNumber(series);
});

function findMissingNumber(series) {
    let missingNumber = null;

    for (let i = 0; i < series.length - 1; i++) {
        if (series[i] + 1 !== series[i + 1]) {
            missingNumber = series[i] + 1;
            break;
        }
    }

    if (missingNumber !== null) {
        document.getElementById('result3').innerText = `The missing number is: ${missingNumber}`;
    } else {
        document.getElementById('result3').innerText = 'No missing number found in the series.';
    }
}

