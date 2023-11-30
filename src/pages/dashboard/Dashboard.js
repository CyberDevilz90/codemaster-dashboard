import { Box, Text, Image } from '@chakra-ui/react';
import { useDashboard } from '../../services';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { priceFormatter } from '../../utils';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const { statistic } = useDashboard();
  const [data, setData] = useState([]);

  useEffect(() => {
    getListData(1, searchParams.get('search'));
  }, [searchParams]);

  useEffect(() => {
    document.title = 'Dashboard';
  },[]);

  const getListData = async () => {
    try {
      const res = await statistic();
      setData(res)
    } catch (e) {}
  };
  return (
    <Box
      bgColor="white"
      w="100%"
      display="flex"
      h="auto"
      padding="32px"
      gap="24px"
    >
      {/* ===================================STUDENT================================ */}
      <Box
        bgColor="blue.50"
        w="100%"
        height="auto"
        padding="16px"
        gap="8px"
        borderRadius="8px"
      >
        <Box>
          <Image
            src={window.location.origin + '/bx-group.png'}
            width="40px"
            height="40px"
          />
          <Text fontSize="14px" fontWeight="bold" color="blue.800">
            Student
          </Text>
        </Box>
        <Box>
          <Text
            fontSize="30px"
            fontWeight="bold"
            color="gray.900"
            textAlign="right"
          >
           {data.students}
          </Text>
        </Box>
      </Box>
      {/* ===================================COURSE================================ */}
      <Box
        bgColor="pink.50"
        w="100%"
        height="auto"
        padding="16px"
        gap="8px"
        borderRadius="8px"
      >
        <Box>
          <Image
            src={window.location.origin + '/bx-book.png'}
            width="40px"
            height="40px"
          />
          <Text fontSize="14px" fontWeight="bold" color="pink.700">
            Course
          </Text>
        </Box>
        <Box>
          <Text
            fontSize="30px"
            fontWeight="bold"
            color="gray.900"
            textAlign="right"
          >
            {data.courses}
          </Text>
        </Box>
      </Box>
      {/* ===================================Payment================================ */}
      <Box
        bgColor="#FFFAEB"
        w="100%"
        height="auto"
        padding="16px"
        gap="8px"
        borderRadius="8px"
      >
        <Box>
          <Image
            src={window.location.origin + '/bx-dollar.png'}
            width="40px"
            height="40px"
          />
          <Text fontSize="14px" fontWeight="bold" color="#B54708">
            Payment
          </Text>
        </Box>
        <Box justifyContent="end" display="flex" flexDirection="row">
          <Text marginTop="16px">IDR</Text>
          <Text
            fontSize="30px"
            fontWeight="bold"
            color="gray.900"
            textAlign="right"
          >
            {priceFormatter(data.payments)}
          </Text>
        </Box>
      </Box>
      {/* ===================================USER================================ */}
      <Box
        bgGradient="linear(to-r, #f94449 37.55%, #A62D31 184.78%)"
        w="100%"
        height="auto"
        padding="16px"
        gap="8px"
        borderRadius="8px"
      >
        <Box>
          <Image
            src={window.location.origin + '/bx-user.png'}
            width="40px"
            height="40px"
          />
          <Text fontSize="14px" fontWeight="bold" color="white">
            User
          </Text>
        </Box>
        <Box>
          <Text
            fontSize="30px"
            fontWeight="bold"
            color="white"
            textAlign="right"
          >
            {data.users}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
