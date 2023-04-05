import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// Metode Server-Side Rendering
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // Bisa melakukan operasi fetch data, dll.
//   // Fungsi ini hanya dijalankan di server
//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// }

// Metode Static Site Generation
export async function getStaticProps() {
  // fetch data dari API, membaca file
  // NOTE : harus selalu return object
  const client = await MongoClient.connect(
    "mongodb://bondanjs:bondanjs@ac-z0rwix2-shard-00-00.4zimygo.mongodb.net:27017,ac-z0rwix2-shard-00-01.4zimygo.mongodb.net:27017,ac-z0rwix2-shard-00-02.4zimygo.mongodb.net:27017/?ssl=true&replicaSet=atlas-rwib50-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetupsData = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetupsData.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
    // Mengatur seberapa sering aplikasi melakukan pre-generated secara otomatis (misal : 10 seconds)
  };
}

export default HomePage;
