import { useRouter } from "next/router";
import Card from "../../components/ui/Card";
import classes from "../../components/meetups/MeetupItem.module.css";
import Image from "next/image";

const MeetupDetail = () => {
  const router = useRouter();
  const { meetupId } = router.query;

  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A First Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Some address 5, 12345 Some City",
      description: "This is a first meetup!",
    },
    {
      id: "m2",
      title: "A Second Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Some address 10, 12345 Some City",
      description: "This is a second meetup!",
    },
    {
      id: "m3",
      title: "A third Meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Some address 15, 12345 Some City",
      description: "This is a Third meetup!",
    },
  ];

  const meetup = DUMMY_MEETUPS.find((meet) => meet.id === meetupId);

  return (
    <>
      {meetup && (
        <Card>
          <div className={classes.image}>
            <Image
              src={meetup.image}
              alt={meetup.title}
              width={1280}
              height={720}
            />
          </div>
          <div className={classes.content}>
            <h3>{meetup.title}</h3>
            <address>{meetup.address}</address>
          </div>
        </Card>
      )}
    </>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetups

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetail;
