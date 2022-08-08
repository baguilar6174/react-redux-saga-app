import PropTypes from 'prop-types';
import { Grid, Icon, Segment } from 'semantic-ui-react';

const EntryLine = ({ isExpense, description, value }) => {
	return (
		<Segment color={isExpense ? 'red' : 'green'}>
			<Grid columns={3} textAlign='right'>
				<Grid.Row>
					<Grid.Column width={10} textAlign='left'>
						{description}
					</Grid.Column>
					<Grid.Column width={3} textAlign='right'>
						${value}
					</Grid.Column>
					<Grid.Column width={3}>
						<Icon name='edit' bordered />
						<Icon name='trash' bordered />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

EntryLine.propTypes = {
	value: PropTypes.number,
	isExpense: PropTypes.bool,
	description: PropTypes.string.isRequired,
};

EntryLine.defaultProps = {
	isExpense: false,
	value: 0,
};

export default EntryLine;
