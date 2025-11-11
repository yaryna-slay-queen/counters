const fs = require('fs');

const data = fs.readFileSync(
    '1.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);

const counters = {
    a:0
};

for (let i = 0; i < data.length; i++){
    if(counters[data[i]] ===  undefined) {
        counters[data[i]] = 0
    }

    counters[data[i]] += 1;
}

console.log(counters)
console.table(Object.entries(counters))
