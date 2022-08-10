import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import {
	DisplayBalance,
	DisplayBalances,
	EntryLines,
	Mainheader,
	NewEntryForm,
	ModalEdit,
} from './components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntriesRedux } from './redux/actions/entries.action';

function App() {
	const [incomeTotal, setIncomeTotal] = useState(0);
	const [expenseTotal, setExpenseTotal] = useState(0);
	const [total, setTotal] = useState(0);
	const [entry, setEntry] = useState();

	const entries = useSelector((state) => state.entries);
	const { isOpen, id } = useSelector((state) => state.modals);

	const dispatch = useDispatch();

	useEffect(() => {
		const index = entries.findIndex((entry) => entry.id === id);
		setEntry(entries[index]);
	}, [isOpen, id, entries]);

	useEffect(() => {
		let totalIncomes = 0;
		let totalExpenses = 0;
		entries.map((entry) => {
			if (entry.isExpense) {
				return (totalExpenses += Number(entry.value));
			}
			return (totalIncomes += Number(entry.value));
		});
		setTotal(totalIncomes - totalExpenses);
		setExpenseTotal(totalExpenses);
		setIncomeTotal(totalIncomes);
	}, [entries]);

	useEffect(() => {
		dispatch(getAllEntriesRedux());
	}, [dispatch]);

	return (
		<Container>
			<Mainheader title='Budget' type='h1' />
			<DisplayBalance size='small' title='Your Balance' value={total} />
			<DisplayBalances totalIncome={incomeTotal} totalExpense={expenseTotal} />
			<Mainheader title='History' />
			<EntryLines entries={entries} />
			<Mainheader title='Add new transation' />
			<NewEntryForm />
			<ModalEdit isOpen={isOpen} {...entry} />
		</Container>
	);
}

export default App;
