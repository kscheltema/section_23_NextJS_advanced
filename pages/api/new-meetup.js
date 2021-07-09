// url >>> /api/new-meetup
import {MongoClient} from 'mongodb';

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
  
    MongoClient.connect('mongodb+srv://Seth:Twilight26066701@cluster0.epecw.mongodb.net/meetups?retryWrites=true&w=majority')
  //this link comes from the mongo connect modal
  //mongodb+srv://<username>:<password>@cluster0.epecw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  //replace the <username> and <password> with actual life users connected to the DB
  
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  meetupsCollection.insertOne(data);
  }
}

export default handler;
