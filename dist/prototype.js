Array.prototype.allSame = function (...indexes) {
    let target;
    if (indexes.length === 0) {
        target = this[0];
        indexes = [...Array(this.length).keys()]; // create an array of all indices
    } else {
        target = this[indexes[0]];
    }
    for (let i = 1; i < indexes.length; i++) {
        if (this[indexes[i]] !== target) {
            return false;
        }
    }
    return true;
};

