import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const router = useRouter();

  const addMeetupHAndler = async (enteredMeetupData) => {
    const response = await fetch("/api/newmeetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHAndler} />
    </div>
  );
};

export default NewMeetUpPage;
