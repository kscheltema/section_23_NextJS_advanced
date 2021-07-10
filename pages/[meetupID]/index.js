import { MongoClient } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetails';

function MeetupDetails() {
  return (  <MeetupDetail 
  description='The meetup description'
  address='Some Street 5, Some City'
  title='A First Meetup'
  image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg' 
  />);
}

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://Seth:Twilight26066701@cluster0.epecw.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  return {
    fallback: false, 
    paths: meetups.map(meetup => ({params: {meetupID: meetup._id.toString()},
  })),
  };
}

export async function getStaticProps(context) {
//fetch data for single meetup

const meetupID = context.params.meetupID;

return {
  props: {
    meetupData: {
      id: meetupID,
      title: 'first meetup',
      address: 'some street 5, some city',
      description: 'This is a first meetup',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg' 
    },
  },
};

}

export default MeetupDetails;