import { useState, useEffect } from "react";
import { Root, Root2 } from "../utils/datamodel";

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
            <div className="bg-blue-300 rounded-3xl m-12 p-12 shadow-lg hover:shadow-xl hover:scale-[110%] duration-150">
              <img className="py-4 " src={person.avatar}></img>
              <h2 className="2xl:text-4xl xl:text-3xl font-bold pt-4">
                {person.first_name} {person.last_name}
              </h2>
              <h4 className="text-xl text-slate-600">
                {person.employment.title}
              </h4>
            </div>
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
