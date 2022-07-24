import React, { useRef, RefObject } from "react";
import styled from "styled-components";
import { Button } from "components";
import { useOnClickOutside } from "hooks";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  const ref = useRef<RefObject<HTMLElement>>();
  // @ts-ignore
  useOnClickOutside({ ref, handler: onClose });

  return (
    <Container>
      {/* @ts-ignore */}
      <Content ref={ref}>
        <Close onClick={() => onClose()}>X</Close>
        {children}
      </Content>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding-top: 100px;

  background-color: rgba(0, 0, 0, 0.4);

  overflow: auto;
  z-index: 999;
`;

const Content = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.md}px;
  border: 1px solid #888;
  margin: auto;
  padding: 20px;
  width: 80%;

  background-color: #fefefe;
`;

const Close = styled(Button)`
  position: absolute;
  border: 0 !important;
  top: 0;
  right: 0;

  padding: 10px;
`;
