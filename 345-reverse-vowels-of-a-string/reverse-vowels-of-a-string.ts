function reverseVowels(s: string): string {
    let answer = "";
    let vowelsIdx = [];
    const vowels = 'AEIOUaeiou'

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) vowelsIdx.push(i);
    }

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) answer += s[vowelsIdx.pop() || 0];
        else answer += s[i]
    }

    return answer;

};
