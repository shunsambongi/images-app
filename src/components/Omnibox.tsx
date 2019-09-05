import React, {
  useState,
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
  FocusEvent,
} from 'react';
import { InputGroup, Button, Intent } from '@blueprintjs/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  outline: none;
`;

const RoundedInputGroup = styled(InputGroup)`
  & * {
    border-radius: 1000px;
  }
`;

export interface OmniboxProps {
  value?: string;
  rounded?: boolean;
  onBrowse?: (event: MouseEvent) => any;
  onUserInput?: (event: KeyboardEvent<HTMLInputElement>) => any;
}

const Omnibox = ({
  value,
  rounded = false,
  onUserInput,
  onBrowse,
}: OmniboxProps) => {
  const [directory, setDirectory] = useState<string | undefined>(value);

  const browse = (
    <StyledButton
      intent={Intent.PRIMARY}
      small={true}
      onClick={onBrowse}
      text={'Browse'}
      minimal={true}
    />
  );

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.currentTarget.blur();
    }
    onUserInput && onUserInput(event);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setDirectory(event.target.value);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) =>
    event.target.select();

  const InputGroupElement = rounded ? RoundedInputGroup : InputGroup;
  return (
    <InputGroupElement
      value={directory}
      placeholder={'Type a file or directory path'}
      fill={true}
      rightElement={browse}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      onFocus={handleFocus}
    />
  );
};

export default Omnibox;
