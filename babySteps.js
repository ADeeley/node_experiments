let args = process.argv,
    i = 2
    sum = 0;

for (i; i < args.length; i++) {
    sum += +args[i];
}

console.log(sum);