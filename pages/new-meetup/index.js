//our-domain.com/new-meetup
import Layout from '../../components/layout/Layout';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    console.log("Getting here", enteredMeetupData)
    const response = await fetch('/api/new-meetup', {
      method: 'POST', 
      body: JSON.stringify(enteredMeetupData),
      headers: {'Content-Type': 'application/json'}
    }); //usually an server link 
  }

  return <Layout>
  <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </Layout>
};

export default NewMeetupPage;