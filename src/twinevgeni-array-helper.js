module.exports = function () {

    /**
     * Check if array contains needle
     * @param needle
     * @param array
     * @returns {boolean}
     */
    function arrayContains(needle, array) {
        if (!array) return false;
        return (array.indexOf(needle) > -1);
    }

    /**
     * trim all elements in array
     * @param array
     * @returns {*}
     */
    function arrayTrimAll(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].trim();
        }

        return array;
    }

    /**
     * check that array is not empty
     * @param array
     * @returns {boolean}
     */
    function arrayIsNotEmpty(array) {
        return array !== null && array !== 'undefined' && array.length > 0;
    }

    /**
     * check that array is empty
     * @param array
     * @returns {boolean}
     */
    function arrayIsEmpty(array) {
        return !arrayIsNotEmpty(array);
    }

    return {
        arrayContains: arrayContains,
        arrayTrimAll: arrayTrimAll,
        arrayIsEmpty: arrayIsEmpty,
        arrayIsNotEmpty: arrayIsNotEmpty
    }
}();
