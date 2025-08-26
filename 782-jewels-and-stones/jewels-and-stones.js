/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {

        for (j = 0; j < jewels.length; j++) {
            if (jewels[j] == stones[i]) {
                count++;
            }
        }
    }
    return count;
};