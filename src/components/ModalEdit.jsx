import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { useEntryDetails } from '../hooks/useEntryDetails';
import { closeEditModal } from '../redux/actions/modals.action';
import { EntryForm } from './EntryForm';

export const ModalEdit = ({ isOpen, description, value, isExpense, id }) => {
	const dispatch = useDispatch();
	const entryUpdate = useEntryDetails(description, value, isExpense);

	return (
		<Modal open={isOpen}>
			<Modal.Header>Edit entry</Modal.Header>
			<Modal.Content>
				<EntryForm
					description={entryUpdate.description}
					setDescription={entryUpdate.setDescription}
					value={entryUpdate.value}
					setValue={entryUpdate.setValue}
					isExpense={entryUpdate.isExpense}
					setIsExpense={entryUpdate.setIsExpense}
				/>
			</Modal.Content>
			<Modal.Actions>
				<Button color='red' onClick={() => dispatch(closeEditModal())}>
					Close
				</Button>
				<Button primary onClick={() => entryUpdate.updateEntry(id)}>
					Ok
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

ModalEdit.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	description: PropTypes.string,
	value: PropTypes.number,
	isExpense: PropTypes.bool,
	id: PropTypes.string,
};
