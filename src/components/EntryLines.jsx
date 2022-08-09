import PropTypes from 'prop-types';
import { EntryLine } from './';

export const EntryLines = ({ entries, updateEntry }) => {
	return (
		<>
			{entries.map((entry) => (
				<EntryLine key={entry.id} {...entry} updateEntry={updateEntry} />
			))}
		</>
	);
};

EntryLines.propTypes = {
	entries: PropTypes.array,
	updateEntry: PropTypes.func.isRequired,
};

EntryLines.defaultProps = {
	entries: [],
};
