import Head from "next/head";
import Greeting from "../components/Greeting";
import History from "../Components/History";
import Input from "../Components/Input";
import { useState } from "react";
import AddAnotherButton from "../Components/AddAnotherButton";

export default function Home() {
  const [user, setUser] = useState({
    name: "Jaxon",
    email: "Skidmore@chapman.edu",
  });

  const [gratitudes, setGratitudes] = useState([
    "nyguyen's kitchen",
    "bahn mi sandwiches",
    "the dodgers",
  ]);

  const [hasSubmittedToday, setHasSubmittedToday] = useState(false);

  const addGratitude = (entry) => {
    if (entry.replace(/\s+/g, "").length === 0) {
      alert("You must enter something to submit!");
    } else {
      let newGratitude = [...gratitudes, entry];
      setGratitudes(newGratitude);
      setHasSubmittedToday(true);
    }
  };

  const AddAnother = () => {
    setHasSubmittedToday(false);
  };

  return (
    <div className="bg-yellow-300 min-h-screen min-w-screen ">
      <Head>
        <title>{user.name}'s Gratitude Journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col p-1 items-center">
        <Greeting
          color="text-yellow-600"
          user={user}
          gratitudes={gratitudes}
          hasSubmittedToday={hasSubmittedToday}
        ></Greeting>
        {!hasSubmittedToday && <Input handleSubmit={addGratitude}></Input>}
        {hasSubmittedToday && (
          <AddAnotherButton AddAnother={AddAnother}></AddAnotherButton>
        )}

        {gratitudes.length > 0 && (
          <History className="p-3" gratitudes={gratitudes}></History>
        )}
      </main>
    </div>
  );
}
