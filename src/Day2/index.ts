export function isLeapYear(year: number) {
	if (year % 1 != 0 || year <= 0) return false;
	if (year % 4 == 0 && year % 100 != 0) return true;
	if (year % 100 == 0 && year % 400 == 0) return true;

	return false;
}
