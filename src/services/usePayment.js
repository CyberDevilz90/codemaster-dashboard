import { services } from '.';

export default () => {
  const payments = async (page = 1, q) => {
    try {
      const response = await services.get('payments', {
        params: {
          page: page,
          search: q,
        },
      });
      return response;
    } catch (e) {
      throw e;
    }
  };

  const paymentsByID = async paymentId => {
    try {
      const response = await services.get(`payments/${paymentId}`);
      return response;
    } catch (e) {
      throw e?.response?.data?.message;
    }
  };
  return {
    payments,
    paymentsByID,
  };
};
