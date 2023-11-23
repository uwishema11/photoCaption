// // import dotenv from 'dotenv';

// // dotenv.config();

// // export default {
// //   development: {
// //     url: process.env.DEV_DATABASE_URL,
// //     logging: false,
// //     dialect: 'postgres',
// //   },
// //   test: {
// //     url: process.env.TEST_DATABASE_URL,
// //     logging: false,
// //     dialect: 'postgres',
// //   },
// //   production: {
// //     url: process.env.DATABASE_URL,
// //     logging: false,
// //     dialect: 'postgres',
// //     dialectOptions: {
// //       ssl: {
// //         require: true,
// //         rejectUnauthorized: false,
// //       },
// //     },
// //   },
// // };

// const dotenv = require('dotenv');
// dotenv.config();


// module.exports = {
//   development: {
//     url: process.env.DEV_DATABASE_URL,
//     logging: false,
//     dialect: 'postgres',
//   },
//   test: {
//     url: process.env.TEST_DATABASE_URL,
//     logging: false,
//     dialect: 'postgres',
//   },
//   production: {
//     url: process.env.DATABASE_URL,
//     logging: false,
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   },
// };

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    logging: false,
    listen_addresses : '*',
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    logging: false,
     listen_addresses : '*',
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    logging: false,
    dialect: 'postgres',
     listen_addresses : '*',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
