// url >>> /api/new-meetup
import {MongoClient} from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
  const data = req.body;
  
  const client = await MongoClient.connect('mongodb+srv://Seth:Twilight26066701@cluster0.epecw.mongodb.net/meetups?retryWrites=true&w=majority')
  //this link comes from the mongo connect modal
  //mongodb+srv://<username>:<password>@cluster0.epecw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  //replace the <username> and <password> with actual life users connected to the DB

  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const result = await meetupsCollection.insertOne(data);

  console.log(result);
  client.close();
  res.status(201).json({message: 'meetup inserted'});
  }
}

export default handler;
