import dotenv from 'dotenv';
dotenv.config();

export const Configs = {
    mongodb: {
        uri: process.env.MONGODB_URI
    },

    api: {
        basePathUrl: process.env.BASE_PATH_API_V1
    },

    server: {
        port: process.env.PORT
    }
}