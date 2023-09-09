import app from './index';
import mongodbConnection from './Database/Mongodb/mongodb.config';
import { Configs } from './Common/config';

const PORT = 8080;

mongodbConnection().then();

app.listen(Configs.server.port || PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});