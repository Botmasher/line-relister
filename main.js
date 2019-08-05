// store text to manipulate
const inputText = `
*asdf
*1234
`;
// starting text identification and replacement
const initialInput = "*";
const initialOutput = "- ";

const lines = inputText.split(/\n/g);

lines.map(line => {
    const newLine = line.slice(0, initialInput.length) === initialInput
        ? line.slice(initialInput.length)
        : line
    ;
    newLine && console.log(`${initialOutput}${newLine}`);
});
