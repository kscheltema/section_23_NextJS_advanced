import Head from 'next/head';
import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {

  return( <Fragment>
    <Head>
      <title>React Meetups</title>
      <meta name='description'
            content='A huge list of react inspired meetups!'>
      </meta>
    </Head>
    <MeetupList meetups={props.meetups} />
</Fragment>);
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//   };
// }

//this file will be executed when this code is pre-generated

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://Seth:Twilight26066701@cluster0.epecw.mongodb.net/meetups?retryWrites=true&w=majority')

  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()}))
    },
    revalidate: 10  
  };
}     

export default HomePage;