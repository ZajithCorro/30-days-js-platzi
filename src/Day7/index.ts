export function findLargestPalindrome(words: Array<string>) {
	const largestPalindrome = words.reduce(
		(prev: any, curr) => {
			if (isPalindrome(curr) && prev.largestLength < curr.length) {
				return {
					largestLength: curr.length,
					word: curr,
				};
			}

			return { ...prev };
		},
		{ largestLength: 0, word: '' }
	);

	return largestPalindrome.word || null;
}

const isPalindrome = (word: string) => {
	return word.split('').reverse().join('') == word;
};
