import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const addMeetupHAndler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHAndler} />
    </div>
  );
};    

export default NewMeetUpPage;
