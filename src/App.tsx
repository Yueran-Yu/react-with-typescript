import React, {useState} from 'react';
import './App.css';
import AddToList from './component/AddToList';
import List from './component/List';

export interface IState {
	people: {
		name: string
		age: number
		url: string
		note?: string
	}[]
}

function App() {
	const [people, setPeople] = useState<IState["people"]>([
		{
			name: "LeBron James",
			url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fruit-salad-horizontal-jpg-1522181219.jpg?crop=1xw:1xh;center,top&resize=768:*',
			age: 36,
			note: "Build encapsulated components that manage their own state."
		}
	])

	people.map(p => p.name)

	return (
		<div className="App">
			<h1>People Invited to my Party</h1>
			<List people={people}/>
			<AddToList people={people} setPeople={setPeople}/>
		</div>
	);
}

export default App;
