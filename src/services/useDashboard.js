import { services } from '.';

export default () => {
  const statistic = async () => {
    try {
        const response = await services.get('statistics')
        return response
    } catch (e) {
        throw e
    }
  };
  return {
    statistic
  }
};
