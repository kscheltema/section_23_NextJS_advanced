import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetails';

function MeetupDetails(props) {
  return (  
  <Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta
        content={props.meetupData.description}
        name='description' />
    </Head>
  <MeetupDetail 
    description={props.meetupData.description}
    address={props.meetupData.address}
    title={props.meetupData.title}
    image={props.meetupData.image}/>
  </Fragment>
    );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://Seth:Twilight26066701@cluster0.epecw.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  client.close;

  return {
    fallback: false, 
    paths: meetups.map(meetup => ({params: {meetupID: meetup._id.toString()},
  })),
  };
}

export async function getStaticProps(context) {
//fetch data for single meetup

const meetupID = context.params.meetupID;

  const client = await MongoClient.connect('mongodb+srv://Seth:Twilight26066701@cluster0.epecw.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupID),
  });

  client.close;

return {
  props: {
    meetupData: {
      id:selectedMeetup._id.toString(),
      title: selectedMeetup.title,
      address: selectedMeetup.address,
      description: selectedMeetup.description,
      image: selectedMeetup.image,
    },
  },
};

}

export default MeetupDetails;