class Solution {
    gcdOfStrings(str1, str2) {
        // Step 1: check fondamentale
        if (str1 + str2 !== str2 + str1) return "";

        // Step 2: funzione GCD classica
        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

        // Step 3: substring risultato
        return str1.slice(0, gcd(str1.length, str2.length));
    }
}