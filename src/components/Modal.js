import {
  Box,
  Modal as CModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Button from './Button';

const Modal = ({
  children,
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmButtonText,
  wItHcLoSeIcOn = false,
  isButtonLoading,
}) => {
    return (
        <CModal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                {wItHcLoSeIcOn && <ModalCloseButton />}
                <ModalBody>
                    {children}
                </ModalBody>
                {!wItHcLoSeIcOn && <ModalFooter>
                    <Button onClick={onClose} text='Cancel' bgColor='white' textColor='gray.700' variant='outline' />
                    <Box width='8px'/>
                    <Button onClick={onConfirm} text={confirmButtonText} isBgGradient isLoading={isButtonLoading} />
                    </ModalFooter>}
            </ModalContent>
        </CModal>
    )
};

export default Modal