function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));
console.log('I have ' + pluralize('dog', 2));
//console.log('I have ' + pluralize('sheep', 2));
console.log('I have ' + pluralize('dog', 0));
console.log('I have ' + pluralize('cat', 1));

