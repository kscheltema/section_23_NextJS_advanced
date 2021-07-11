//our-domain.com/new-meetup
import {useRouter} from 'next/router';
import Head from 'next/head';
import { Fragment } from 'react';
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

  return (
  <Fragment>
    <Head>
      <title>Add a new Meetup</title>
      <meta name='description'
            content='Add your own meetups, with amazing network opportunities'>
      </meta>
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </Fragment>);
};

export default NewMeetupPage;