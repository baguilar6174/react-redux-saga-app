import PropTypes from 'prop-types';
import { Statistic } from 'semantic-ui-react';

export const DisplayBalance = ({ title, value, color, size }) => {
	return (
		<Statistic size={size} color={color}>
			<Statistic.Label style={{ textAlign: 'left' }}>{title}:</Statistic.Label>
			<Statistic.Value>{value}</Statistic.Value>
		</Statistic>
	);
};

DisplayBalance.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.number,
	color: PropTypes.string,
	size: PropTypes.string,
};

DisplayBalance.defaultProps = {
	value: 0,
	color: 'black',
	size: 'tiny',
};
