import PropTypes from 'prop-types';
import { Grid, Icon, Segment } from 'semantic-ui-react';

export const EntryLine = ({
	id,
	isExpense,
	description,
	value,
	deleteEntry,
	updateEntry,
}) => {
	return (
		<>
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
							<Icon name='edit' bordered onClick={() => updateEntry(id)} />
							<Icon name='trash' bordered onClick={() => deleteEntry(id)} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</>
	);
};

EntryLine.propTypes = {
	value: PropTypes.number,
	isExpense: PropTypes.bool,
	description: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	deleteEntry: PropTypes.func.isRequired,
	updateEntry: PropTypes.func.isRequired,
};

EntryLine.defaultProps = {
	isExpense: false,
	value: 0,
};
