import HomePage from 'presentation-layer/pages/home.page';
import Layout from 'presentation-layer/pages/layout/_layout';
import PostPage from 'presentation-layer/pages/post.page';
import PostsPage from 'presentation-layer/pages/posts.page';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
interface IApp {}
const App: FC<IApp> = (props) => {
	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element={<HomePage />} />
						<Route path='shop' element={<HomePage />}></Route>
						<Route path='login' element={<HomePage />}></Route>
						<Route path='register' element={<HomePage />}></Route>
						<Route path='logout' element={<HomePage />}></Route>
						<Route path='posts'>
							<Route index element={<PostsPage />} />
							<Route path=':id' element={<PostPage />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</Layout>
	);
};
export default App;
