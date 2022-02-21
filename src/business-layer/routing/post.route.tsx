import PostModel from 'business-layer/models/wordpress/post.wordpress.interface';
import { URLHelper } from 'business-layer/services/helpers/urlhelper.service';
import PostService from 'business-layer/services/post.service';
import express from 'express';
const postRoute = express.Router();
let baseRoute = 'post';
// postRoute.get(URLHelper.appendSlashAtFirstAndLast(baseRoute) + ':id', async (req, res) => {
// 	const id = req.params['id'];
// 	let result: ProductModel = await PostService.Get(id);
// 	res.send(result.name);
// });

// postRoute.get(URLHelper.appendSlashAtFirstAndLast(baseRoute) + 'list', async (req, res) => {
// 	let results: ProductModel[] = await PostService.GetAll();
// 	res.send(results[0].name);
// });

// productRoute.post(baseAddress + 'add', (req, res) => {
//         res.send(baseAddress + 'add');
// })

// productRoute.put(baseAddress + 'update/:id', (req, res) => {
//         const id = req.params['id'];
//         res.send(baseAddress + 'update/' + id);
// });

// productRoute.delete(baseAddress + 'delete/:id', (req, res) => {
//         const id = req.params['id'];
//         res.send(baseAddress + 'delete/' + id);
// })

export default postRoute;
