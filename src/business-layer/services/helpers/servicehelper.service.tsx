export const ServiceHelper = {
	extractData: (response: any) => {
		let results;
		if (response.status === 200) {
			results = response.data;
		} else {
			results = undefined;
			console.log(response.status);
		}
		return results;
	},
};
