type Cat = {
	name: String;
	followers: Array<number>;
};

type Resp = {
	maxFollowers: number;
	famousCat: Array<string>;
};

export function findFamousCats(cats) {
	const reducedCats: Resp = cats.reduce(
		(prev: Resp, current: Cat) => {
			const { name, followers } = current;
			const currenTotalFollowers = followers.reduce((prev, current) => prev + current, 0);

			if (currenTotalFollowers === prev.maxFollowers) {
				return {
					maxFollowers: prev.maxFollowers,
					famousCat: [...prev.famousCat, name],
				};
			}

			if (currenTotalFollowers > prev.maxFollowers) {
				return {
					maxFollowers: currenTotalFollowers,
					famousCat: [name],
				};
			}

			return prev;
		},
		{ maxFollowers: 0, famousCat: [] }
	);

	return reducedCats.famousCat;
}
