export interface StackDetails {
  logo: string;
  title: string;
  desc: string;
}

function TechStack(props: StackDetails) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 h-full">
      <div
        className="border border-gray-700 border-opacity-75 p-6 rounded-lg"
        style={{ justifyContent: "stretch" }}
      >
        <img
          className="mb-4 w-full h-20 inline-flex items-center justify-center"
          src={props.logo}
          alt="React"
        />
        <h2 className="text-lg text-white font-medium title-font mb-2">
          {props.title}
        </h2>
        <p className="leading-relaxed text-base">{props.desc}</p>
      </div>
    </div>
  );
}

export function ReactStack() {
  return (
    <TechStack
      logo="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
      title="React JS"
      desc="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components."
    />
  );
}

export function FirebaseStack() {
  return (
    <TechStack
      logo="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34"
      title="Firebase"
      desc="Firebase is a comprehensive platform developed by Google that provides a suite of cloud-based services for building and managing applications."
    />
  );
}

export function ReactRouterStack() {
  return (
    <TechStack
      logo="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
      title="React Router DOM"
      desc="React Router is a powerful library designed for managing navigation in React applications."
    />
  );
}

// https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
export function MUIStack() {
  return (
    <TechStack
      logo="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"
      title="MUI"
      desc="MUI is an excellent component provider that can make help to make asthetically appeling React Applications in a few hours."
    />
  );
}

//https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
export function Gmail() {
  return (
    <TechStack
      logo="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
      title="GMail API and Service"
      desc="The Gmail API is a powerful tool provided by Google that allows developers to interact programmatically with Gmail mailboxes."
    />
  );
}

export default TechStack;
