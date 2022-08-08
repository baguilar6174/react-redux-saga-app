import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';
import { EntryForm } from './EntryForm';

export const ModalEdit = ({
	isOpen,
	setIsOpen,
	description,
	setDescription,
	value,
	setValue,
	isExpense,
	setIsExpense,
}) => {
	return (
		<Modal open={isOpen}>
			<Modal.Header>Edit entry</Modal.Header>
			<Modal.Content>
				<EntryForm
					description={description}
					setDescription={setDescription}
					value={value}
					setValue={setValue}
					isExpense={isExpense}
					setIsExpense={setIsExpense}
				/>
			</Modal.Content>
			<Modal.Actions>
				<Button color='red' onClick={() => setIsOpen(false)}>
					Close
				</Button>
				<Button primary onClick={() => setIsOpen(false)}>
					Ok
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

ModalEdit.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
	description: PropTypes.string.isRequired,
	setDescription: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
	setValue: PropTypes.func.isRequired,
	isExpense: PropTypes.bool.isRequired,
	setIsExpense: PropTypes.func.isRequired,
};
