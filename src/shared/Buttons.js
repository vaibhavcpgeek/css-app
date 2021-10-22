import React from "react";
import styled from "styled-components";

const Button = ({ variant, children }) => {
  const getButtons = (buttonVariant) => {
    switch (buttonVariant) {
      case "primary":
        return <PrimaryButton>{children}</PrimaryButton>;
      case "secondary":
        return <SecondaryButton>{children}</SecondaryButton>;
      case "tertiary":
        return <TertiaryButton>{children}</TertiaryButton>;
      default:
        return <DefaultButton>{children}</DefaultButton>;
    }
  };
  return <>{getButtons(variant)}</>;
};

export default Button;

const DefaultButton = styled.button`
  color: #fff;
  border: none;
  padding: 0 20px;
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
`;

const PrimaryButton = styled(DefaultButton)`
  background-color: #db0011;
`;

const SecondaryButton = styled(DefaultButton)`
  background-color: #4d6474;
`;

const TertiaryButton = styled(DefaultButton)`
  color: #252525;
  background-color: #fff;
  border: solid 1px #252525;
`;
