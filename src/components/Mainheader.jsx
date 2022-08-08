import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const Mainheader = ({ title, type }) => {
	return (
		<>
			<Header as={type}>{title}</Header>
		</>
	);
};

Mainheader.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.string,
};

Mainheader.defaultProps = {
	type: 'h3',
};
