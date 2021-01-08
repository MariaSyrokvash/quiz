export const randomInteger = (min: number = 0, max: number = 5) => {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}