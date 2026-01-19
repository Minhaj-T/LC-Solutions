/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (arr) {

    let n = arr.length;

    for (let i = 0; i <=n; i++) {

        let found = false;


        for (let j = 0; j < arr.length; j++) {
            if (i === arr[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            return i;
        }

    }
}
