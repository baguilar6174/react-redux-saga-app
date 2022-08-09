import PropTypes from 'prop-types';
import { EntryLine } from './';

export const EntryLines = ({ entries }) => {
	return (
		<>
			{entries.map((entry) => (
				<EntryLine key={entry.id} {...entry} />
			))}
		</>
	);
};

EntryLines.propTypes = {
	entries: PropTypes.array,
};

EntryLines.defaultProps = {
	entries: [],
};
