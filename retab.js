const input = `
2019-08-01  hours   activity
2019-08-02  hours    activity
2019-08-02   hours    activity
2019-08-03  h ours     activity
2019-08-03      hou rs   ac ti vity
`;
//const oldSeparator = ["  ", "   ", "  "];
const newSeparator = "\t";

const retab = (text, separator, printOut=true) => {
    const lines = text.split(/\n/g);
    const splitLines = lines.map(line => (
        line.split(/\t{1,}|\s{2,}/g)
    ));
    const retabbedLines = splitLines.map(
        line => line.join(separator)
    );
    printOut && retabbedLines.map(line => console.log(line));
    return retabbedLines;
};

retab(input, newSeparator);
