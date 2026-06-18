import React from "react";

const questions = [
  {
    q: "Do I have to sign a long-term contract?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
  },
  {
    q: "Can I pay for a whole year?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
  },
  {
    q: "What if I need help?",
    a: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
  },
];

export const QuestionSection = () => {
  return (
    <section className="section space-y-9">
      <h1 className="text-2xl lg:text-4xl primary-text">
        Common Questions
      </h1>

      {/* Q&A */}
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="space-y-3">
            <h2 className="font-medium primary-text text-lg">{item.q}</h2>
            <p className="text-[#6D6E7A] leading-9">{item.a}</p>
          </div>
        ))}
      </div>

      <button className="border-2 border-[#53B4DAB1] px-4 py-2 rounded-2xl">
        <span className="text-[#1E3E85] font-semibold text-[16px]">
          More Questions
        </span>
      </button>
    </section>
  );
};