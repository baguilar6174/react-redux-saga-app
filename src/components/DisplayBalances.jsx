import { Grid, Segment } from 'semantic-ui-react';
import { DisplayBalance } from './';
import PropTypes from 'prop-types';

export const DisplayBalances = ({ totalIncome, totalExpense }) => {
	return (
		<Segment textAlign='center'>
			<Grid columns={2} divided>
				<Grid.Row>
					<Grid.Column>
						<DisplayBalance color='green' title='Income' value={totalIncome} />
					</Grid.Column>
					<Grid.Column>
						<DisplayBalance color='red' title='Expenses' value={totalExpense} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

DisplayBalances.propTypes = {
	totalIncome: PropTypes.number.isRequired,
	totalExpense: PropTypes.number.isRequired,
};
