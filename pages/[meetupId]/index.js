import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/a/a4/Aerial_view_of_Georgetown%2C_Washington%2C_D.C..jpg"
      title="First Meetup"
      address="Some address"
      description="Meetup description"
    />
  );
}

export default MeetupDetails;
