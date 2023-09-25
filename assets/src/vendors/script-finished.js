const printMessage = require('print-message');

printMessage(["SCRIPT FINISHED"], {
    border: true, // Enable border
    color: 'green', // Text color
    borderColor: 'blue', // Border color is blue
    borderSymbol: '│', // Symbol that uses for border
    sideSymbol: '│', // Symbol that uses for side separators
    leftTopSymbol: '└', // Symbol for left top corner
    leftBottomSymbol: '┌', // Symbol for left bottom corner
    rightTopSymbol: '┘', // Symbol for right top corner
    rightBottomSymbol: '┐', // Symbol for right bottom corner
    marginTop: 1, // Margin before border is begins
    marginBottom: 1, // Margin after border is end
    paddingTop: 0, // Padding top after border begins
    paddingBottom: 0, // Padding bottom before border ends
    printFn: function (message) {
        // Custom function that accepts generated message as argument and print it
        process.stdout.write(message);
    }
});