import React from "react";
import styled from "styled-components";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({
  className = "",
  onClick = () => {},
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <ButtonContainer
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      <Label>{children}</Label>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  transition: all 0.3s;
  border-radius: ${({ theme }) => theme.space.sm}px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 6px 16px;

  background-color: transparent;
  color: black;

  font-size: 14px;

  user-select: none;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const Label = styled.span``;
