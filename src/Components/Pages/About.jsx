import React from "react";

function About() {
  const person = {
    name: "Aaron Daley",
    job: "Fullstack Developer",
    brandStatement: " ",
    skills: [
      "Javascript",
      "Python",
      "Mongoose",
      "SQL",
      "Django",
      "React.js",
      "Next.js",
      "Angular",
    ],
  };
  const name = person.name;
  const job = person.job;
  const skills = person.skills;
  const bio = person.brandStatement;

  console.log(skills, job, name, bio);

  return <></>;
}
export default About;
