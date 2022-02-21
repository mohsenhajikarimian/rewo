import HTMLReactParser from 'html-react-parser';
import moment from 'jalali-moment';
export const StringHelper = {
	truncate: (value: string, n: number, useWordBoundary: boolean) => {
		if (value.length <= n) {
			return value;
		}
		const subString = value.substr(0, n - 1); // the original check
		return (useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + '&hellip;';
	},
	parseHTMLString: (value: string) => {
		return HTMLReactParser(value);
	},
	parseHTMLStringRemovedTags: (value: string) => {
		return value.replace(/<[^>]*>?/gm, '');
	},
	parseISOStringtoDate: (value: string) => {
		return value.substring(0, 10);
	},
	parseISOStringtoTime: (value: string) => {
		return value.substring(11, 19);
	},
	parseToJalaliDate: (value: string) => {
		return moment(value, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
	},
};
