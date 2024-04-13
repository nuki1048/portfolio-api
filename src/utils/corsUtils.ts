const whitelist = ['https://portfolio-api-fawn.vercel.app', 'localhost:4000'];

// eslint-disable-next-line import/prefer-default-export
export const corsOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  origin: function (origin: string, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
