module.exports = function () {
    function arrayContains(needle, array) {
        if (!array) return false;
        return (array.indexOf(needle) > -1);
    }

    function arrayTrimAll(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].trim();
        }

        return array;
    }

    return {
        arrayContains: arrayContains,
        arrayTrimAll: arrayTrimAll
    }
}();
