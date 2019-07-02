import React from "react";

const liSpace = { marginBottom: "10px" };

const faqs = [
  {
    title: <>What is a Hackathon?</>,
    description: (
      <>
        A hackathon is an event where students of all academic backgrounds and
        skill levels come together to solve problems by using technology.
        <br /> <br />
        Students form groups and create projects that tackle these challenges,
        all while attending workshops to develop new skills, receiving
        mentorship from industry leaders, and networking with recruiters from
        top companies.
      </>
    )
  },
  {
    title: <>Is there a theme?</>,
    description: (
      <>
        Our theme focuses on diversity, and not just from an academicstandpoint.
        Miami is a cultural melting pot full of people from all walks of life,
        with{" "}
        <a
          className="links"
          rel="noopener noreferrer"
          target="_blank"
          href="https://fiu.edu"
        >
          FIU being no exception
        </a>
        .
      </>
    )
  },
  {
    title: <>Sounds cool. So, can I come?</>,
    description: (
      <>
        If you're a current college/university student or a recent graduate (up
        to 1 year), you're more than welcome to attend! The event is open to
        students of all academic backgrounds and skill levels, so whether you’re
        an aspiring artist or an expert engineer, there’s a place for you at
        ShellHacks.
      </>
    )
  },
  {
    title: <>Wait, I don't know how to code!</>,
    description: (
      <>
        Don't worry, one of the core principles of a hackathon is learning!
        There'll be several workshops throughout the event, ranging from
        beginner to advanced, so there's always something new to learn.
      </>
    )
  },
  {
    title: <>Will there be food?</>,
    description: (
      <>
        There will be food. Lots of food. LOTS. Miami's food scene is diverse,
        so there’s always something for everyone. We’ll do our best to
        accommodate for any dietary restriction as well, just make sure to let
        us know come registration time.
        <br />
        <br />
        There’s also coffee, energy drinks, and tea if you want to keep it
        classy.
      </>
    )
  },
  {
    title: <>Do I need to already have a group?</>,
    description: (
      <>
        Nope. You can go solo, come with your own team (no more than 4), or
        participate in a group mixer we'll have before hacking begins to find a
        group.
      </>
    )
  },
  {
    title: <>Will there be Travel Reimbersement?</>,
    description: (
      <>
        There will be travel reimbursement available with the following
        stipulations:
        <br />
        <br />
        <ol style={{ listStylePosition: "inside", listStyleType: "decimal" }}>
          <li style={liSpace}> Up to $60 in gas dependent on mileage</li>
          <li style={liSpace}>
            Must not be coming from a school which has a bus (unless the bus is
            filled)
          </li>
          <li style={liSpace}>
            All cars must be filled with a minimum of 4 passengers
          </li>
          <li style={liSpace}>
            All passengers must be attending the hackathon
          </li>
        </ol>
        We will be sending information on how to claim the reimbursement at a
        later date, so{" "}
        <span style={{ fontWeight: "bold" }}>
          please keep hold of your receipts!
        </span>
      </>
    )
  },

  {
    title: <>Alright, I'm hyped for ShellHacks! How do I register?</>,
    description: (
      <>
        Just click the big "Register" button up top. Make sure you check your
        email too since we'll be having your verify your email address and
        sending acceptances through there too!
      </>
    )
  },
  {
    title: <>So, why ‘ShellHacks’?</>,
    description: (
      <>
        Well, it started off as a joke about what a turtle-themed hackathon
        would be called. Later on, we actually started thinking about organizing
        a hackathon, but instead of turtles, we decided to focus on diversity in
        Miami. Since the city has an abundance of seashells on its beaches, the
        name stuck. <br />
        <br />
        It's also a play on words about{" "}
        <a
          className="links"
          rel="noopener noreferrer"
          target="_blank"
          href="https://en.wikipedia.org/wiki/Shell_(computing)"
        >
          computer shells
        </a>
        , but that’s just to draw attention away from all the turtle puns.
      </>
    )
  },
  {
    title: <>How can I or my company become a sponsor?</>,
    description: (
      <>
        If you'd like to sponsor, please send us an email at{" "}
        <a
          className="links"
          href="mailto:upe@fiu.edu?subject=Potential%20ShellHacks%20Sponsorship&body=Hello Shell Team,%0A%0A"
        >
          upe@fiu.edu{" "}
        </a>{" "}
        and our team will get back to you promptly.
      </>
    )
  }
];

export default faqs;
