// eslint-disable-next-line import/prefer-default-export
export const getUrl = () =>
  process.env.DATABASE_URL.replace(
    'USERNAME',
    process.env.DATABASE_USERNAME,
  ).replace('PASSWORD', process.env.DATABASE_PASSWORD);
