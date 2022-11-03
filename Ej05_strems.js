process.stdin.resume();
process.stdin.setEncoding('ascii');

process.stdin.on('data', function (line) {
    process.stdout.write(line);
});