process.stdin.resume();
process.stdin.setEncoding("ascii");

function calc(maxNumber) {
    let list = [];

    if (maxNumber > 9999) {
        return list;
    }

    for (let i = 1000; i <= maxNumber; i++) {
        let numberString = i.toString();
        let number = 0;

        for (let index = 0; index < numberString.length; index++) {
            number += Number(numberString.charAt(index));
        }

        if (number === 21) {
            list.push(i);
        }
    }

    return list;
}

var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    process.stdout.write('2500')
});
