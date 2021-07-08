import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';
import { useEffect } from 'react';

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

function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
//send a http request and fetch data from server
setLoadedMeetups(DUMMY_MEETUPS);
    }, []);

  return <Layout>
  <MeetupList meetups={loadedMeetups} />
  </Layout> 
};

export default HomePage;