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

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  //will not run during the build process 
  //but will run after deployment
  //page is pre-regenerated for every request
  //dont have data regenerating all the time get static props better for performance
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
  };
}

// export async function getStaticProps() {
//   return {
//     //can do many things
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate: 10  
//   };
// }     

export default HomePage;