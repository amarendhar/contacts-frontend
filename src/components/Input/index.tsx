import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

type InputProps = {
  "aria-label"?: string;
  maxLength?: number;
  autoComplete?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
  value?: string;
  onChange?: (v: string) => void;
  length?: number;
};

const Input = ({
  maxLength,
  autoComplete = "",
  className = "",
  type = "text",
  placeholder = "",
  options = [],
  defaultValue = "",
  value = "",
  onChange = () => {},
  length,
  ...restProps
}: InputProps) => {
  const [text, setText] = useState(defaultValue);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      setText(value);
    }
  }, [value, setText]);

  const props = useMemo(() => {
    const _props: { [key: string]: string | number } = {};

    if (maxLength) _props.maxLength = maxLength;

    return _props;
  }, [maxLength]);

  return (
    <>
      {type === "select" ? (
        <SelectContainer
          autoComplete=""
          aria-label={restProps["aria-label"] || "input-field"}
          className={className}
          placeholder={placeholder}
          value={text}
          onChange={(e) => {
            let _text = e.target.value;

            if (length && _text.length > length) {
              _text = _text.substr(0, length);
            }

            setText(_text);
            onChange(_text);
          }}
          {...props}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectContainer>
      ) : (
        <InputContainer
          autoComplete=""
          aria-label={restProps["aria-label"] || "input-field"}
          className={className}
          type={type}
          placeholder={placeholder}
          value={text}
          onChange={(e) => {
            let _text = e.target.value;

            if (length && _text.length > length) {
              _text = _text.substr(0, length);
            }

            setText(_text);
            onChange(_text);
          }}
          {...props}
        />
      )}
    </>
  );
};

export default Input;

const InputContainer = styled.input`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.space.md}px;
  margin-bottom: ${({ theme }) => theme.space.md}px;
  font-size: ${({ theme }) => theme.fontSizes.md}px;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const SelectContainer = styled.select`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.space.md}px;
  margin-bottom: ${({ theme }) => theme.space.md}px;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  text-transform: capitalize
`;
