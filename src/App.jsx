import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryForm from './components/EntryForm';
import EntryLine from './components/EntryLine';
import Mainheader from './components/Mainheader';

function App() {
	return (
		<Container>
			<Mainheader title='Budget' type='h1' />
			<DisplayBalance size='small' title='Your Balance' value={2500} />
			<DisplayBalances />
			<Mainheader title='History' />
			<EntryLine description='Hello' value={100} />
			<Mainheader title='Add new transation' />
			<EntryForm />
		</Container>
	);
}

export default App;
