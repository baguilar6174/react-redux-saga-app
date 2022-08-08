import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = () => {
	return (
		<Segment textAlign='center'>
			<Grid columns={2} divided>
				<Grid.Row>
					<Grid.Column>
						<DisplayBalance color='green' title='Income' value={1502} />
					</Grid.Column>
					<Grid.Column>
						<DisplayBalance color='red' title='Expenses' value={85} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default DisplayBalances;
