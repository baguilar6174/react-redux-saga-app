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

const initialEntries = [
	{
		id: 1,
		description: 'Description 1',
		value: 500,
		isExpense: false,
	},
	{
		id: 2,
		description: 'Description 32',
		value: 5400,
		isExpense: true,
	},
];

function App() {
	const [entries, setEntries] = useState(initialEntries);
	const [description, setDescription] = useState('');
	const [value, setValue] = useState(0);
	const [isExpense, setIsExpense] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [entryId, setEntryId] = useState();
	const [incomeTotal, setIncomeTotal] = useState(0);
	const [expenseTotal, setExpenseTotal] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		if (!isOpen && entryId) {
			const index = entries.findIndex((entry) => entry.id === entryId);
			const newEntries = [...entries];
			newEntries[index].description = description;
			newEntries[index].value = value;
			newEntries[index].isExpense = isExpense;
			setEntries(newEntries);
			resetEntry();
		}
	}, [isOpen]);

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

	const resetEntry = () => {
		setDescription('');
		setValue(0);
		setIsExpense(true);
	};

	const deleteEntry = (id) => {
		const result = entries.filter((entry) => entry.id !== id);
		setEntries(result);
	};

	const addEntry = () => {
		setEntries([
			...entries,
			{
				id: entries.length + 1,
				description,
				value,
				isExpense,
			},
		]);
		resetEntry();
	};

	const updateEntry = (id) => {
		console.log('object');
		if (id) {
			const index = entries.findIndex((entry) => entry.id === id);
			const entry = entries[index];
			setEntryId(id);
			setDescription(entry.description);
			setValue(entry.value);
			setIsExpense(entry.isExpense);
			setIsOpen(true);
		}
	};

	return (
		<Container>
			<Mainheader title='Budget' type='h1' />
			<DisplayBalance size='small' title='Your Balance' value={total} />
			<DisplayBalances totalIncome={incomeTotal} totalExpense={expenseTotal} />
			<Mainheader title='History' />
			<EntryLines
				entries={entries}
				deleteEntry={deleteEntry}
				updateEntry={updateEntry}
			/>
			<Mainheader title='Add new transation' />
			<NewEntryForm
				addEntry={addEntry}
				description={description}
				setDescription={setDescription}
				value={value}
				setValue={setValue}
				isExpense={isExpense}
				setIsExpense={setIsExpense}
			/>
			<ModalEdit
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				description={description}
				setDescription={setDescription}
				value={value}
				setValue={setValue}
				isExpense={isExpense}
				setIsExpense={setIsExpense}
			/>
		</Container>
	);
}

export default App;
