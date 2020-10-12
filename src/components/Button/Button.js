import React from 'react';
import { Button as CustomButton } from './styled';
import { propTypes, defaultProps } from './props';

export const Button = ({ children, ...rest }) => {
  return <CustomButton {...rest}>{children}</CustomButton>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
