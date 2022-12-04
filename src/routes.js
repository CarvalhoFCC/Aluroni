import Home from 'pages/home';
import Menu from 'pages/menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/menu' element={ <Menu /> } />
			</Routes>
		</Router>
	);
}