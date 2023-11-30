import { services } from '.';

export default () => {
  const courses = async (page = 1, q) => {
    try {
      const response = await services.get('courses', {
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

  const coursesByID = async coursesId => {
    try {
      const response = await services.get(`students/${coursesId}`);
      return response;
    } catch (e) {
      throw e?.response?.data?.message;
    }
  };
  return {
    courses,
    coursesByID,
  };
};
