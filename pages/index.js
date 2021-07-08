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

export async function getStaticProps() {
  
  return {
    //can do many things

    props: {
      meetups: DUMMY_MEETUPS
    } 
    //page props component function
  };
} //this function uses async promise to prepare props for rendering
  // in here can execute code that would run in a server  
  // cause it does not execute on client or server side
export default HomePage;