import { Form } from 'semantic-ui-react';
import { EntryForm, ButtonGroup } from './';
import { useEntryDetails } from '../hooks/useEntryDetails';

export const NewEntryForm = () => {
	const {
		description,
		setDescription,
		value,
		setValue,
		isExpense,
		setIsExpense,
		addEntry,
	} = useEntryDetails();

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
