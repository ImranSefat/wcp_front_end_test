import React from "react";
import { Root2 } from "../utils/datamodel";

const ContactCard: React.FC<{ person: Root2 }> = ({ person }) => {
  return (
    <div className="group ">
      {/* Top card */}
      <div
        className="
        
      w-full 
      
      bg-blue-300 
      rounded-3xl 
      m-12 
      p-12 
      shadow-lg 
      hover:shadow-xl 
      
      group-hover:rotate-y-180
      transform transition-all duration-150 ease-in-out
      group-hover:h-0 group-hover:opacity-0
      "
      >
        <img
          className="py-4 text-center w-full h-full"
          src={person.avatar}
          alt={person.first_name}
        ></img>
        <h2 className="2xl:text-4xl xl:text-3xl font-bold pt-4">
          {person.first_name} {person.last_name}
        </h2>
        <h4 className="text-xl text-slate-600">{person.employment.title}</h4>
      </div>
      {/* Back card */}
      <div
        className="
      w-full  
      bg-red-300 
      rounded-3xl 
      m-12 
      p-12 
      shadow-lg 
      transform transition-all duration-150 ease-in-out
      hidden
      group-hover:block group-hover:opacity-100
      text-xl

      "
      >
        <>
          <h2 className="text-4xl">{person.username}</h2>
          <h2 className=" text-gray-600">{person.password}</h2>
          <h2 className="">{person.date_of_birth}</h2>
          <h2 className="">{person.email}</h2>
          <h2 className="">{person.social_insurance_number}</h2>
          <h2 className="">{person.phone_number}</h2>
          <h2 className="">Subscription: {person.subscription.status}</h2>
        </>
      </div>
    </div>
  );
};

export default ContactCard;
