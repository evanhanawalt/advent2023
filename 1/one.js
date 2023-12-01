const fs = require("fs");
const readInput = () => {
    return fs.readFileSync("./input.txt", "utf8").split("\n");
};
const readAndReplaceInput = () => {
    return fs.readFileSync("./input.txt", "utf8").trim()
        .replaceAll("one", "one1one")
        .replaceAll("two", "two2two")
        .replaceAll("three", "three3three")
        .replaceAll("four", "four4four")
        .replaceAll("five", "five5five")
        .replaceAll("six", "six6six")
        .replaceAll("seven", "seven7seven")
        .replaceAll("eight", "eight8eight")
        .replaceAll("nine", "nine9nine")
        .split("\n");
}
const part1 = () => {
    const lines = readInput();

    const sum = lines.map((line) => {
        const digits = line.match(/\d/g);
        return parseInt(digits[0] + "" + digits.at(-1));
    }).reduce((accum, val) => accum + val);
    console.log("part1: ", sum);
}

const part2 = () => {
    const lines = readAndReplaceInput();
    const sum = lines.map((line) => {
        const digits = line.match(/\d/g);
        return parseInt(digits[0] + "" + digits.at(-1));
    }).reduce((accum, val) => accum + val);
    console.log("part2: ", sum);
}

part1();
part2();