import CONFIG from 'business-layer/config/server.config.json';
export const URLHelper = {
	//----------PATH
	getBaseURL: () => {
		return CONFIG.BASE_URL;
	},
	appendPathToAddress: (path: string) => {
		return CONFIG.BASE_URL + path;
	},
	//----------SLASH
	appendSlashAtFirst: (string: string) => {
		return '/' + string;
	},
	appendSlashAtLast: (string: string) => {
		return string + '/';
	},
	appendSlashAtFirstAndLast: (string: string) => {
		return '/' + string + '/';
	},
	appendS: (path: string) => {
		return path + 's/';
	},
};
