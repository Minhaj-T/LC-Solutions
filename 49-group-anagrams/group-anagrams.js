/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};

    for (let i = 0; i < strs.length; i++) { // we have n strings
        let sortedStr = strs[i].split("").sort().join(""); //O(m log m)

        if (!map[sortedStr]) {
            map[sortedStr] = [strs[i]]
        } else {
            map[sortedStr].push(strs[i])
        }
    }

    return [...Object.values(map)]

};

// n -> no of strins
// m -> max length of each string

// TIME = O(n * m log m)
// space = O(n * m)