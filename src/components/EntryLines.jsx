import PropTypes from 'prop-types';
import { EntryLine } from './';

export const EntryLines = ({ entries, deleteEntry, updateEntry }) => {
	return (
		<>
			{entries.map((entry) => (
				<EntryLine
					key={entry.id}
					{...entry}
					deleteEntry={deleteEntry}
					updateEntry={updateEntry}
				/>
			))}
		</>
	);
};

EntryLines.propTypes = {
	entries: PropTypes.array,
	deleteEntry: PropTypes.func.isRequired,
	updateEntry: PropTypes.func.isRequired,
};

EntryLines.defaultProps = {
	entries: [],
};
