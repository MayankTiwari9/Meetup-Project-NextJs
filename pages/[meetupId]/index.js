import { useRouter } from "next/router";
import Card from "../../components/ui/Card";
import classes from "../../components/meetups/MeetupItem.module.css";

const MeetupDetail = () => {
  const router = useRouter().query;
  const id = router.meetupId;

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
  ];

  const meetup = DUMMY_MEETUPS.find((meet) => meet.id === id);

  return (
    <>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
        </div>
      </Card>
    </>
  );
};

export default MeetupDetail;
