import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export const ButtonGroup = ({ addEntry }) => {
	return (
		<Button.Group style={{ marginTop: 20 }}>
			<Button>Cancel</Button>
			<Button.Or />
			<Button primary onClick={() => addEntry()}>
				Ok
			</Button>
		</Button.Group>
	);
};

ButtonGroup.propTypes = {
	addEntry: PropTypes.func.isRequired,
};
