import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "London",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tower_Bridge_from_Shad_Thames.jpg/1280px-Tower_Bridge_from_Shad_Thames.jpg",
    address: "England, United Kingdom",
    description: "London Meetup",
  },
  {
    id: "m2",
    title: "Washington D.C.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Aerial_view_of_Georgetown%2C_Washington%2C_D.C..jpg",
    address: "Washington, United States",
    description: "D.C. Meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// Metode Server-Side Rendering
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  // Bisa melakukan operasi fetch data, dll.
  // Fungsi ini hanya dijalankan di server
  return {
    props: {
      meetups: DUMMY_DATA,
    },
  };
}

// Metode Static Site Generation
// export async function getStaticProps() {
//   // fetch data dari API, membaca file
//   // NOTE : harus selalu return object
//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//     revalidate: 10,
//     // Mengatur seberapa sering aplikasi melakukan pre-generated secara otomatis (misal : 10 seconds)
//   };
// }

export default HomePage;
