import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	addEntryRedux,
	updateEntryRedux,
} from '../redux/actions/entries.action';
import { v4 as uuid } from 'uuid';
import { closeEditModal } from '../redux/actions/modals.action';

export const useEntryDetails = (desc = '', val = 0, isExp = true) => {
	const [description, setDescription] = useState(desc);
	const [value, setValue] = useState(val);
	const [isExpense, setIsExpense] = useState(isExp);
	const dispatch = useDispatch();

	useEffect(() => {
		setDescription(desc);
		setValue(val);
		setIsExpense(isExp);
	}, [desc, val, isExp]);

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

	const updateEntry = (id) => {
		dispatch(
			updateEntryRedux(id, {
				id,
				description,
				value,
				isExpense,
			})
		);
		resetEntry();
		dispatch(closeEditModal());
	};

	const resetEntry = () => {
		setDescription('');
		setValue(0);
		setIsExpense(true);
	};

	return {
		description,
		setDescription,
		value,
		setValue,
		isExpense,
		setIsExpense,
		addEntry,
		updateEntry,
	};
};
