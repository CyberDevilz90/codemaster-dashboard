import { Flex, Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Modal from '../../../components/Modal';

const initialState = {
  code: '',
  title: '',
  credits: '',
  description: '',
  enrollmentLimit: '',
  fee: '',
  instructor: '',
  location: '',
};

function CourseDetailModal({ data, onClose, isOpen, refresh }) {
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
      title='Course Details'
    >
      <Flex gap="15px" direction="column">
        <Box flexDirection='row' display='flex' justifyContent='space-between'>
          <Text fontWeight='bold'>Code</Text>
          <Text>{details.title}</Text>
        </Box>
        <Box flexDirection='row' display='flex' justifyContent='space-between'>
          <Text fontWeight='bold'>Duration</Text>
          <Text>{details.credits}</Text>
        </Box>
        <Box flexDirection='row' display='flex' justifyContent='space-between'>
          <Text fontWeight='bold'>Student Limit</Text>
          <Text>{details.enrollmentLimit}</Text>
        </Box>
        <Box flexDirection='row' display='flex' justifyContent='space-between'>
          <Text fontWeight='bold'>Fee</Text>
          <Text>{details.fee}</Text>
        </Box>
        <Box flexDirection='row' display='flex' justifyContent='space-between'>
          <Text fontWeight='bold'>Mentor</Text>
          <Text>{details.instructor}</Text>
        </Box>
        <Box flexDirection='row' display='flex' justifyContent='space-between'>
          <Text fontWeight='bold'>Loaction</Text>
          <Text>{details.location}</Text>
        </Box>
        <Box flexDirection='row' display='flex' justifyContent='space-between'>
          <Text fontWeight='bold'>Code</Text>
          <Text>{details.code}</Text>
        </Box>
        <Box>
          <Text fontWeight='bold'>Description :</Text>
          <Text>{details.description}</Text>
        </Box>
      </Flex>
    </Modal>
  );
}

export default CourseDetailModal