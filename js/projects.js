const addProject = () => {
  const projects = document.getElementById("projects");
  projects.setAttribute("class", "projects");

  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  image.setAttribute("src", "images/horology.png");
  image.setAttribute("alt", "title");
  // alt={`${project.title}`}
  image.setAttribute("class", "project-image");
  imageDiv.appendChild(image);

  const rightDiv = document.createElement("div");
  rightDiv.setAttribute("class", "right");

  const titleDiv = document.createElement("div");
  const title = document.createTextNode("Horology");
  titleDiv.setAttribute("class", "title");
  titleDiv.appendChild(title);

  const techonologiesDiv = document.createElement("span");
  const techonologies = document.createTextNode("React, Express, Postgres");
  techonologiesDiv.setAttribute("class", "tech");
  techonologiesDiv.appendChild(techonologies);

  const descriptionDiv = document.createElement("p");
  const description = document.createTextNode(
    "An e-commerce app for selling luxury watches. Features include account registration and user authentication, product filters, a wishlist, cart, checkout via Stripe payments, and admin page for shop owner to manage users and products."
  );
  descriptionDiv.setAttribute("class", "description");
  descriptionDiv.appendChild(description);

  const div = document.createElement("div");

  const githubDiv = document.createElement("span");
  const githubLink = document.createElement("a");
  const github = document.createTextNode("github");
  githubLink.appendChild(github);
  githubLink.href = "https://github.com/chingu-voyages/bears-project-9";
  githubLink.target = "_blank";
  githubDiv.prepend(githubLink);

  const urlDiv = document.createElement("span");
  const urlLink = document.createElement("a");
  const url = document.createTextNode("url");
  urlLink.appendChild(url);
  urlLink.href = "https://github.com/chingu-voyages/bears-project-9";
  urlLink.target = "_blank";
  urlDiv.setAttribute("class", "url");
  urlDiv.prepend(urlLink);

  const websiteDiv = document.createElement("span");
  const websiteLink = document.createElement("a");
  const website = document.createTextNode("website");
  websiteLink.appendChild(website);
  websiteLink.href = "https://horology-bear.herokuapp.com/";
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

  projects.appendChild(imageDiv);
  projects.appendChild(rightDiv);
};
{
  /* <div className="project-image">
            <img
              src={`/images/${project.image}`}
              alt={`${project.title}`}
              className="project"
            />
          </div>

          <div className="right">
            <div className="title">{`${project.title}`}</div>
            <span className="tech">
              Technologies: {`${project.techonologies}`}
            </span>

            <p className="description">{`${project.description}`}</p>
            <div>
              {project.github ? (
                <span className="github">
                  <a
                    href={`https://github.com/tara-fenton/${project.github}`}
                    target="_blank"
                  >
                    github
                  </a>
                </span>
              ) : (
                ""
              )}
              {project.url ? (
                <span className="url">
                  <a
                    href={`http://tarafenton.com/${project.url}`}
                    target="_blank"
                  >
                    app
                  </a>
                </span>
              ) : (
                ""
              )}
              {project.website ? (
                <span className="website">
                  <a
                    href={`${project.website}`}
                    target="_blank"
                  >
                    website
                  </a>
                </span>
              ) : (
                ""
              )}
            </div>
          </div> */
}
// document.body.onload = addProject;
const addProjects = () => {
  // var text =
  // '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
  var obj = fetch("data/projects.json").then(r => {
    r.json();
    console.log(r);
  });
  // obj.age = eval("(" + obj.age + ")");
  const title = document.createTextNode("Horology");
  document.getElementById("projects").innerHTML = obj.title;
  const projects = document.getElementById("projects");
  // const title = document.createTextNode("test");
  projects.setAttribute("class", "projects");
  // var text = fetch("./data/projects.json")
  //   .then(r => r.json())
  //   .then(json => {
  //     console.log("in the then");
  //     var obj = JSON.parse(json);
  //     console.log(obj);
  //     // obj.title = eval("(" + obj.title + ")");

  //     document.getElementById("projects").innerHTML =
  //       obj.description + ", " + obj.title;
  //   });
  // var text =
  //   '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
};

document.body.onload = addProjects;
