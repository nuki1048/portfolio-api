export const getUrl = () => {
  return process.env.DATABASE_URL.replace(
    'USERNAME',
    process.env.DATABASE_USERNAME
  ).replace('PASSWORD', process.env.DATABASE_PASSWORD);
};
