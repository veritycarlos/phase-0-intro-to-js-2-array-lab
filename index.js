const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = (name) => (cats.push(name));

const destructivelyPrependCat = (name) => (cats.unshift(name));

const destructivelyRemoveLastCat = (name) => (cats.pop(name));

const destructivelyRemoveFirstCat = (name) => (cats.shift(name));

const appendCat = (name) => {
    const moreCats = [...cats]
    moreCats.push(name)
    return moreCats
};

const prependCat = (name) => {
    const manyCats = [...cats]
    manyCats.unshift(name)
    return manyCats
};

const removeLastCat = (name) => {
    const lessCats = [...cats]
    lessCats.pop(name)
    return lessCats
};

const removeFirstCat = (name) => {
    const fewerCats = [...cats]
    fewerCats.shift(name)
    return fewerCats
};