import { Checkbox, Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const EntryForm = ({
	description,
	setDescription,
	value,
	setValue,
	isExpense,
	setIsExpense,
}) => {
	return (
		<>
			<Form.Group>
				<Form.Input
					icon={'tags'}
					width={12}
					label='Description'
					placeholder='New shinny thing'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Form.Input
					width={4}
					label='Value'
					placeholder='1000'
					icon={'dollar'}
					iconPosition='left'
					value={value}
					onChange={(e) => setValue(Number(e.target.value))}
				/>
			</Form.Group>
			<Segment compact>
				<Checkbox
					label='Is expense'
					toggle
					checked={isExpense}
					onChange={() => setIsExpense((isExpense) => !isExpense)}
				/>
			</Segment>
		</>
	);
};

EntryForm.propTypes = {
	description: PropTypes.string.isRequired,
	setDescription: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
	setValue: PropTypes.func.isRequired,
	isExpense: PropTypes.bool.isRequired,
	setIsExpense: PropTypes.func.isRequired,
};
