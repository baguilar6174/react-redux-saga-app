import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { EntryForm, ButtonGroup } from './';

export const NewEntryForm = ({
	addEntry,
	description,
	setDescription,
	value,
	setValue,
	isExpense,
	setIsExpense,
}) => {
	return (
		<>
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
		</>
	);
};

NewEntryForm.propTypes = {
	addEntry: PropTypes.func.isRequired,
	description: PropTypes.string.isRequired,
	setDescription: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
	setValue: PropTypes.func.isRequired,
	isExpense: PropTypes.bool.isRequired,
	setIsExpense: PropTypes.func.isRequired,
};
