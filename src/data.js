import resume from "./img/resume.PNG";
import crypto from "./img/crypto.PNG";
import travel from "./img/travel.PNG";
import amazon from './img/amazon.PNG';
import css from "./img/css.png";
import employee from "./img/employee.png";

export const projects = [
  {
    id: 1,
    img: css,
    title: "All My CSS Projects",
    desc: "This is a project that I built to practice HTML and CSS. It contains almost all that is used in vanilla CSS and HTML, and also one project is built using SCSS.The project contains many projects like Natours (SCSS and animations project), edgeledger (built using CSS grid) and four more to practice CSS. ",
    stack: ["HTML", "CSS", "", "SCSS"],
    sourceCode: "https://github.com/AbeTeshe/CSS-Projects",
    link: "https://allmycssprojects.000webhostapp.com/"
  },
    {
      id: 2,
      img: employee,
      title: "Employee project",
      desc: "This is a project to master CRUD operations on MEAN Stack. It uses redux and reduxtoolkit for the state management. The code for frontend is written using Typescript and this is where I get to do React with Typescript and It's good experience.",
      stack: ["ReactJS", "Redux", "NodeJS", "MongoDB"],
      sourceCode: "https://github.com/AbeTeshe/employee",
      link: "https://employeeform-project.netlify.app/"
    },
    {
      id: 3,
      img: amazon,
      title: "Amazon Clone",
      desc: "This one is an as the name implies an ecommerce app like Amazon with simple and basic functionalities. The app makes contains basic ecommerce functionalities like adding to cart, remove cart and payment process. It uses Stripe to payment system and firebase for authentication. Redux is also used here for state manamegent.",
      stack: ["ReactJS", "Redux", "Firebase"],
      sourceCode: "https://github.com/AbeTeshe/amazon-clone",
      link: "https://simple-amazon-clone.netlify.app/"
    },
    {
      id: 4,
      img: crypto,
      title: "CryptoCurrency app",
      desc: " This is a API ReactJS app that displays information about best Crypto currencies that is available on the order of their market capital, their enxchanges and latest news about the cyrpto currencies. It uses RapidAPI. It also have search button where you search for crypto currencies you need. It uses Redux of API's data manupilation.",
      stack: ["ReacJS", "Redux", "API"],
      sourceCode: "https://github.com/AbeTeshe/crypto-api-app.git",
      link: "https://crypto-react-app-api.netlify.app/"
    },
    {
      id: 5,
      img: travel,
      title: "Travel Advisor",
      desc: "This is a API ReactJS app that displays restuarants, hotels and attractions around you. You can also filter them based on their ratings. It uses google APIs to displays them. The hotels, restuarants, attractions info on the google map. It uses RapidAPI and Google API. Redux is used for manupation of data we get from the API's.",
      stack: ["ReactJS", "Redux", "API"],
      sourceCode: "https://github.com/AbeTeshe/travel-advisor",
      link: "https://travel-advisor-web.netlify.app/"
    },
    
    {
      id: 6,
      img: resume,
      title: "Resume Builder",
      desc: " Resume builder is a React app that builds resume like on the above picture. It uses Redux for state management and the backend is developed using Nodejs and ExpressJS and MongoDB for data storage. It also has jwt authentication that makes to get olny that you enter.",
      stack: ["ReactJS", "Redux", "NodeJS", "MongoDB"],
      sourceCode: "",
      link: ""
    },
  ];

  export const skill = [
    {
      language: "HTML",
      percent: 90
    },
    {
      language: "JavaScript",
      percent: 85
    },
    {
      language: "MySQL",
      percent: 90
    },
    {
      language: "React JS",
      percent: 85
    },
    {
      language: "CSS",
      percent: 85
    },
    {
      language: "Node JS",
      percent: 85
    },
    {
      language: "Express JS",
      percent: 80
    },
   
    {
      language: "Mongo DB",
      percent: 85
    }
  ]

  export const languages = [
    {
      language : 'Afan Oromo', 
      percent: 100,
    },
    {
      language : 'Amharic', 
      percent: 100,
    },
    {
      language : 'English', 
      percent: 85,
    }
  ]