import React, { MouseEvent, KeyboardEvent } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Omnibox from './Omnibox';

const directory = '/Users/username/Desktop/';

const actions = {
  onBrowse: (event: MouseEvent) => action('onBrowse')(event),
  onUserInput: (event: KeyboardEvent) => action('onUserInput')(event),
};

storiesOf('Omnibox', module)
  .addDecorator(storyFn => <div style={{ padding: '10px' }}>{storyFn()}</div>)
  .add('default', () => <Omnibox {...actions} />)
  .add('with value', () => <Omnibox value={directory} {...actions} />)
  .add('rounded', () => <Omnibox rounded={true} {...actions} />);
