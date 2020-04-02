const addProject = (projects, p) => {
  const project = document.createElement("div");
  project.setAttribute("class", "project");

  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  image.setAttribute("src", "images/" + p.image);
  image.setAttribute("alt", p.title);
  image.setAttribute("class", "project-image");
  imageDiv.appendChild(image);

  const rightDiv = document.createElement("div");
  rightDiv.setAttribute("class", "right");

  const titleDiv = document.createElement("div");
  const title = document.createTextNode(p.title);
  titleDiv.setAttribute("class", "title");
  titleDiv.appendChild(title);

  const techonologiesDiv = document.createElement("span");
  const techonologies = document.createTextNode(p.techonologies);
  techonologiesDiv.setAttribute("class", "tech");
  techonologiesDiv.appendChild(techonologies);

  const descriptionDiv = document.createElement("p");
  const description = document.createTextNode(p.description);
  descriptionDiv.setAttribute("class", "description");
  descriptionDiv.appendChild(description);

  const div = document.createElement("div");

  const githubDiv = document.createElement("span");
  const githubLink = document.createElement("a");
  const github = document.createTextNode("github");
  githubLink.appendChild(github);
  githubLink.href = p.github;
  githubLink.target = "_blank";
  githubDiv.prepend(githubLink);

  const urlDiv = document.createElement("span");
  const urlLink = document.createElement("a");
  const url = document.createTextNode("url");
  urlLink.appendChild(url);
  urlLink.href = p.url;
  urlLink.target = "_blank";
  urlDiv.setAttribute("class", "url");
  urlDiv.prepend(urlLink);

  const websiteDiv = document.createElement("span");
  const websiteLink = document.createElement("a");
  const website = document.createTextNode("website");
  websiteLink.appendChild(website);
  websiteLink.href = p.website;
  websiteLink.target = "_blank";
  websiteDiv.setAttribute("class", "website");
  websiteDiv.prepend(websiteLink);

  rightDiv.appendChild(titleDiv);
  rightDiv.appendChild(techonologiesDiv);
  rightDiv.appendChild(descriptionDiv);
  rightDiv.appendChild(div);
  div.appendChild(githubDiv);
  div.appendChild(urlDiv);
  div.appendChild(websiteDiv);

  project.appendChild(imageDiv);
  project.appendChild(rightDiv);

  projects.appendChild(project);
};

const addProjects = () => {
  fetch("https://tarafenton.com/data/projects.json").then(response => {
    response.json().then(json => {
      const projects = document.getElementById("projects");
      projects.setAttribute("class", "projects");
      json.map(j => {
        addProject(projects, j);
      });
    });
  });
};

document.body.onload = addProjects;
