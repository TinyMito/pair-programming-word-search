const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalTranspose = transpose(letters); // Call transpose function
    const verticalJoin = verticalTranspose.map(ls => ls.join(''))

    //console.log(horizontalJoin.length, verticalJoin.length) // Debug Only

    // Check all array horizontally
    for (l of horizontalJoin) {
        //console.log('Horizontal: ', word, word.length) // Debug Only

        if (word.length === verticalJoin.length) {
            // Check if the word length match before searching
            if (l.includes(word)){
                // If found return true
                return true;
            } 
        }
    }
    // Check all array vertically from the transposed array
    for (l of verticalJoin) {
        //console.log('Vertical: ', word, word.length) // Debug Only

        if (word.length === horizontalJoin.length) {
            // Check if the word length match before searching
            if (l.includes(word)){
                // If found return true
                return true;
            }  
        }
    }

    // Will always be false until found
    return false;
}

// From previous matrix_transposition.js "There Is No Spoon" Pair Programming exercise
const transpose = function(matrix) {
    /* Get array parameters vertical and horizontal
     * Transpose function will swap the array into vertical order
     */
    const vertical = matrix.length;
    const horizontal = matrix[0].length;
    const verticalArray = [];

    for (let h = 0; h < horizontal; h++) {
        verticalArray[h] = [];
        for (let v = 0; v < vertical; v++) {
            // Swap value into new array
            verticalArray[h][v] = matrix[v][h];
        }
    }
    // Once swapped, return the new array for vertical
    return verticalArray;
}

module.exports = wordSearch

// Assigned pair programming cohort wasn't available