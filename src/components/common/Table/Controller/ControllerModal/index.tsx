import { PropsWithChildren, useEffect, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import {
  ControllerModalButton,
  ControllerModalContainer,
  ControllerModalForm,
} from '../Controller.styled';

type ControllerModalProps = {
  onClose: () => void;
};

export default function ControllerModal({
  onClose,
  children,
}: PropsWithChildren<ControllerModalProps>) {
  const ref = useRef(null);

  const handleClose = () => {
    document.body.style.overflow = 'unset';
    onClose();
  };

  useOnClickOutside(ref, () => {
    handleClose();
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!children) return <></>;

  return (
    <ControllerModalContainer>
      <ControllerModalForm ref={ref}>
        {children}
        <ControllerModalButton>
          <button>Apply filter</button>
        </ControllerModalButton>
      </ControllerModalForm>
    </ControllerModalContainer>
  );
}
