import { MongoClient } from 'mongodb';
// /api/new-meetup
// POST/ api/new-meetup

async functon handler(req, res) {
    if (req.method == 'POST') {
        const data = req.body;
        const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://SuhasBG:Suhasbg@2001@cluster0.27uhb.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!' });
    }
}

export default handler;