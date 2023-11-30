import {
  Box,
  Flex,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Pagination from '../../components/Pagination';
import { GoEye } from 'react-icons/go';
import { useSearchParams } from 'react-router-dom';
import { usePayment } from '../../services';
import { useEffect, useState } from 'react';
import PaymentDetailModal from './component/PaymentDetailModal';

const Course = () => {
  const [searchParams] = useSearchParams();
  const { payments } = usePayment();
  const [data, setData] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getListData(1, searchParams.get('search'));
  }, [searchParams]);

  useEffect(() => {
    document.title = 'Payment';
  },[]);

  const getListData = async (page, q) => {
    try {
      const res = await payments(page, q);
      setData(res?.data);
      setLinks(res?.links);
    } catch (e) {}
  };

  const showDetails = item => {
    setSelectedData(item);
    setModal(true);
  };

  const closeDetails = () => {
    setSelectedData(null);
    setModal(false);
  };

  return (
    <Box>
      <TableContainer>
        <Flex justifyContent="space-between">
          <Text color="gray.900" fontSize="24px" mb="24px">
            Payment Detail
          </Text>
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="gray.500">Name</Th>
              <Th color="gray.500">Payment Schedule</Th>
              <Th color="gray.500">Bill Number</Th>
              <Th color="gray.500">Amount Paid</Th>
              <Th color="gray.500">Balance Amount</Th>
              <Th color="gray.500">Date of Admission</Th>
              <Th color="gray.500"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => {
              return (
                <Tr bgColor="gray.50" key={`payment-item-${item.id}`}>
                  <Td>{item.student.name}</Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.paymentDate}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.number}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.amount}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.balance}
                  </Td>
                  <Td fontSize="14px" color="gray.900">
                    {item.student.admissionDate}
                  </Td>
                  <Td>
                    <Flex gap="10px">
                      <IconButton
                        onClick={() => showDetails(item)}
                        icon={<GoEye />}
                      />
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination links={links} onClick={getListData} />
      <PaymentDetailModal
        isOpen={modal}
        onClose={closeDetails}
        refresh={getListData}
        data={selectedData}
      />
    </Box>
  );
};

export default Course;
