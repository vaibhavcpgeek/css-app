import React from "react";
import styled from "styled-components";

const Text = ({ variant, children }) => {
  const getButtons = (textVariant) => {
    switch (textVariant) {
      case "regular":
        return <RegularText>{children}</RegularText>;
      case "medium":
        return <MediumText>{children}</MediumText>;
      case "regular-light":
        return <RegularLightText>{children}</RegularLightText>;
      case "medium-large":
        return <MediumLargeText>{children}</MediumLargeText>;
      default:
        return <DefaultText>{children}</DefaultText>;
    }
  };
  return <>{getButtons(variant)}</>;
};

export default Text;

const DefaultText = styled.span`
  font-size: 15px;
  line-height: 12px;
  color: #252525;
`;

export const RegularText = styled(DefaultText)`
  font-weight: 400;
`;

export const MediumText = styled(DefaultText)`
  font-weight: 600;
`;

export const RegularLightText = styled(DefaultText)`
  font-weight: 400;
  color: #767676;
`;

const MediumLargeText = styled(DefaultText)`
  font-size: 20px;
  line-height: 22px;
  font-weight: 600;
`;
