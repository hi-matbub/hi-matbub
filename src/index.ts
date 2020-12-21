import * as _ from "lodash";

const build = async (
  works: {
    project: string;
    description: string;
    path: string;
  }[]
) => {
  for (let i = 0; i < works.length; i++) {
    document.getElementById("root").innerHTML += `
      <div>
        <h2>${works[i].project}</h2>
        <p>${works[i].description}</p>
        <a href='${works[i].path}'>View</a>
      </div>
    `;
  }
};

build([
  {
    project: "Lg-coffee",
    description: "Website generator intergrated with Stripe.",
    path: "https://github.com/hi-matbub/lg-coffee",
  },
  {
    project: "Abcss",
    description:
      "CSS helper functions. For those who prefer long class names over long stylesheets.",
    path: "https://abcss.vercel.app/",
  },
  {
    project: "Flexbox layout generator",
    description: "An assistive flexbox layout utility.",
    path: "https://learnflexbox.us",
  },
  {
    project: "Express.js local playground",
    description: "An express.js server generator.",
    path: "https://github.com/hi-matbub/express-build",
  },
  {
    project: "Express.js server guide",
    description:
      "A resource to assist with the complexity of the server side applications.",
    path: "https://github.com/hi-matbub/express-example",
  },
  {
    project: "Markdown Guide",
    description:
      "A refrence guide to Markdown in GitHub including the odd, less conventional bits.",
    path: "https://github.com/hi-matbub/markdown-guide",
  },
]);

// on load
const date = new Date();
document.getElementById("date").innerHTML = JSON.stringify(date.getFullYear());
