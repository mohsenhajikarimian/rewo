import axios from 'axios';
import { ServiceHelper } from 'business-layer/services/helpers/servicehelper.service';
import CONFIG from './../config/server.config.json';
let auth = {
	username: CONFIG.USERNAME,
	password: CONFIG.PASSWORD,
};
const BaseService = {
	Create: (routePath: string, data: any) => {},
	ReadById: async (routePath: string, id: string) => {
		let address = CONFIG.BASE_URL + routePath + id;
		let response = await axios.get(address, { auth: auth });
		let results = ServiceHelper.extractData(response);
		return results;
	},
	ReadAll: async (routePath: string) => {
		let address = CONFIG.BASE_URL + routePath;
		let response = await axios.get(address, { auth: auth });
		let results = ServiceHelper.extractData(response);
		return results;
	},
	UpdateById: (routePath: string, id: string, data: any) => {},
	DeleteById: (routePath: string, id: string) => {},
};
export default BaseService;
