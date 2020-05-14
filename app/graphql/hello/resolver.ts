/* eslint-disable no-empty-pattern */
export default {
  Query: {
    hellos(_root: any, {}, { connector }) {
      return connector.hello.hellos();
    },
  },
};
