function largestAltitude(gain: number[]): number {
    let current = 0;  
    let max = 0;      

    for (let i = 0; i < gain.length; i++) {
        current += gain[i];  
        max = Math.max(current, max); 
    }

    return max;
}