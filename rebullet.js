// store text to manipulate
const inputText = `
? 	This is a point
?	Actually a differently formatted point
	- Indented subpoint
	- More information
? 	Question tabbed point
`;
// starting text identification and replacement
const initialInputs = ["? 	", "?   ", "?	"];
const initialOutput = "- ";

const lines = inputText.split(/\n/g);

lines.map(line => {
    const initialMatch = initialInputs.filter(initial => (
        line.slice(0, initial.length) === initial
    ));
    const newLine = initialMatch.length
        ? `${initialOutput}${line.slice(initialMatch[0].length)}`
        : line
    ;
    newLine && console.log(newLine);
});
