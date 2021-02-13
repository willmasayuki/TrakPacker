import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/tpRoutes';

const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/trakPackerDB', { // Change this for connection to cloud
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup (Transpile requests into something the database will understand)
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) => res.send(`TrakPacker is running on port ${PORT}.`));

app.listen(PORT, () => console.log(`TrakPacker is running on port ${PORT}.`));