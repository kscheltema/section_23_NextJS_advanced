//our-domain.com/new-meetup
import {useRouter} from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    console.log("Getting here", enteredMeetupData)
    const response = await fetch('/api/new-meetup', {
      method: 'POST', 
      body: JSON.stringify(enteredMeetupData),
      headers: {'Content-Type': 'application/json'}
    }); //usually an server link 
    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
};

export default NewMeetupPage;