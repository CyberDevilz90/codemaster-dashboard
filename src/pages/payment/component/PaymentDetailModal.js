import { Flex, Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Modal from '../../../components/Modal';
import { useCourses } from '../../../services';

const initialState = {
  id: '',
  amount: '',
  balance: '',
  number: '',
  paymentDate: '',
  schedule: '',
  student: {
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    enrollNumber: '',
    admissionDate: '',
  },
};

function PaymentDetailModal({ data, onClose, isOpen, refresh }) {
  const [details, setDetails] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setDetails({ ...data });
    } else {
      setDetails(initialState);
    }
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isButtonLoading={isLoading}
      wItHcLoSeIcOn
      title="Payment Details"
    >
      <Flex gap="15px" direction="column">
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Payment ID</Text>
          <Text>{details.id}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Amount</Text>
          <Text>{details.amount}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Balance</Text>
          <Text>{details.balance}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Number</Text>
          <Text>{details.number}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Payment Date</Text>
          <Text>{details.paymentDate}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Schedule</Text>
          <Text>{details.schedule}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Student ID</Text>
          <Text>{details.student.id}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Student Name</Text>
          <Text>{details.student.name}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Student Email</Text>
          <Text>{details.student.email}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Student Phone Number</Text>
          <Text>{details.student.phoneNumber}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Student Enrollment Number</Text>
          <Text>{details.student.enrollNumber}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Text fontWeight="bold">Admission Date</Text>
          <Text>{details.student.admissionDate}</Text>
        </Box>
      </Flex>
    </Modal>
  );
}

export default PaymentDetailModal;
