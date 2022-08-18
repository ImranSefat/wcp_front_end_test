import React from "react";
import { Root2 } from "../utils/datamodel";

const ContactCard: React.FC<{ person: Root2 }> = ({ person }) => {
  return (
    <div>
      <div className="bg-blue-300 rounded-3xl m-12 p-12 shadow-lg hover:shadow-xl hover:scale-[110%] duration-150">
        <img className="py-4 " src={person.avatar}></img>
        <h2 className="2xl:text-4xl xl:text-3xl font-bold pt-4">
          {person.first_name} {person.last_name}
        </h2>
        <h4 className="text-xl text-slate-600">{person.employment.title}</h4>
      </div>
    </div>
  );
};

export default ContactCard;
