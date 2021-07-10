import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
  {
id: 'm1',
title: 'A First Meetup',
address: 'Some address 5, some city, 123456',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
description: 'this is a first meetup',
},
  {
id: 'm2',
title: 'A Second Meetup',
address: 'Some address 6, some city, 123456',
image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
description: 'this is a second meetup',
}
];

function HomePage(props) {

  return <Layout>
  <MeetupList meetups={props.meetups} />
  </Layout> 
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