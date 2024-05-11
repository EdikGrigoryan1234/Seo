import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import Service from './components/Service';
import Studio from './components/Studio';
import Study from './components/Study';
import About from './components/About';
import Careers from './components/Careers';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Post from './components/Post';
import Layout from './components/Layout';
import End from './components/End';
function App() {
  return (
    <div className="App">
		<Routes>
			<Route path='/' element={<Layout/>}>
			<Route index element={<Home/>}/>
			<Route path='services' element={<Services/>}/>
			<Route path='service' element={<Service/>}/>
			<Route path='studio' element={<Studio/>}/>
			<Route path='caseStudio' element={<Study/>}/>
			<Route path='about' element={<About/>}/>
			<Route path='careers' element={<Careers/>}/>
			<Route path='blog' element={<Blog/>}/>
			<Route path='post' element={<Post/>}/>
			<Route path='contact' element={<Contact/>}/>
			<Route path='end' element={<End/>}/>
			</Route>
		</Routes>
    </div>
  );
}

export default App;
