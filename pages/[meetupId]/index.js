// website.com/m1

import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/a/a4/Aerial_view_of_Georgetown%2C_Washington%2C_D.C..jpg"
      title="First Meetup"
      address="Some address"
      description="Meetup description"
    />
  );
}

export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a4/Aerial_view_of_Georgetown%2C_Washington%2C_D.C..jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some address",
        description: "Meetup description",
      },
    },
  };
}

export default MeetupDetails;
