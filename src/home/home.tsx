import { useState, useEffect } from "react";
import { Root, Root2 } from "../utils/datamodel";
import ContactCard from "../components/contact_card";

const Home: React.FC = () => {
  const loadData = async () => {
    const response = await fetch(
      "https://random-data-api.com/api/users/random_user?size=10"
    );
    const data: Root = await response.json();
    setresponseData(data);
  };

  const [responseData, setresponseData] = useState<Root>([]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="text-center m-16">
        <h1 className="text-5xl">WCP Front End Test</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-4 my-12">
          {responseData.map((person: Root2) => (
            <ContactCard person={person} />
          ))}
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full"
          onClick={() => {
            loadData();
          }}
        >
          <h3>Refresh</h3>
        </button>
      </div>
    </>
  );
};

export default Home;
