let string = 'Tanaya Karmakar';

console.log('Started processsing alternate characters');

for(let i = 0; i < string.length; i += 2) {
    console.log(string[i]);
}

console.log('Finished processing alternate characters');