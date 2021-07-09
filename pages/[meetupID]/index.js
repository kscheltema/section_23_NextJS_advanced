import MeetupDetail from '../../components/meetups/MeetupDetails';

function MeetupDetails() {
  return 
  <MeetupDetails 
  description='The meetup description'
  address='Some Street 5, Some City'
  title='A First Meetup'
  image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg' 
  />
}

export async function getStaticPaths() {
  return {
    fallback: false, //false = paths contains all supported values 
                    //thus if not supported 404 error
    paths: [
      {params: { //for dynamic segments
        meetupID: 'm1',
      },
    },
      {params: { //for dynamic segments
        meetupID: 'm2',
    },
  },
    ]
  }
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
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg' 
    },
  },
};

}

export default MeetupDetails;