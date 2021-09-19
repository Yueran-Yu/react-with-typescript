import React, {useState} from "react";
import '../App/App.css';
import AddToList1 from "./AddToList1";
import {IState} from "../react-app-env";
import List1 from "./List1";

const App1 = () => {
	const [people, setPeople] = useState<IState['people']>([{
		name: 'JANE',
		age: 25,
		url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		note: 'build their portfolio to Jane'
	}
	])

	return (
		<div className="App">
			<h1>People Invited to here</h1>
			<List1 people={people}/>
			<AddToList1 people={people} setPeople={setPeople}/>
		</div>
	)
}

export default App1;