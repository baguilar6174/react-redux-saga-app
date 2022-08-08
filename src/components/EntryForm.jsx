import { Form } from 'semantic-ui-react';
import ButtonGroup from './ButtonGroup';

const EntryForm = () => {
	return (
		<Form unstackable>
			<Form.Group>
				<Form.Input
					icon={'tags'}
					width={12}
					label='Description'
					placeholder='New shinny thing'
				/>
				<Form.Input
					width={4}
					label='Value'
					placeholder='1000'
					icon={'dollar'}
					iconPosition='left'
				/>
			</Form.Group>
			<ButtonGroup />
		</Form>
	);
};

export default EntryForm;
