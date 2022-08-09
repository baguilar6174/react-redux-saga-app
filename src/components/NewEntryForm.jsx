import { Form } from 'semantic-ui-react';
import { EntryForm, ButtonGroup } from './';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntryRedux } from '../redux/actions/entries.action';
import { v4 as uuid } from 'uuid';

export const NewEntryForm = () => {
	const [description, setDescription] = useState('');
	const [value, setValue] = useState(0);
	const [isExpense, setIsExpense] = useState(true);
	const dispatch = useDispatch();

	const addEntry = () => {
		dispatch(
			addEntryRedux({
				id: uuid(),
				description,
				value,
				isExpense,
			})
		);
		resetEntry();
	};

	const resetEntry = () => {
		setDescription('');
		setValue(0);
		setIsExpense(true);
	};

	return (
		<Form unstackable>
			<EntryForm
				description={description}
				setDescription={setDescription}
				value={value}
				setValue={setValue}
				isExpense={isExpense}
				setIsExpense={setIsExpense}
			/>
			<ButtonGroup addEntry={addEntry} />
		</Form>
	);
};
