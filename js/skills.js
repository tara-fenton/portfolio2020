const addSkill = (skills, s) => {
  const skill = document.createElement("div");
  skill.setAttribute("class", "skill");

  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  image.setAttribute("src", "images/logos/" + s.image);
  image.setAttribute("alt", s.title);
  image.setAttribute("class", "skill-image");
  imageDiv.appendChild(image);

  //   const rightDiv = document.createElement("div");
  //   rightDiv.setAttribute("class", "right");

  //   const titleDiv = document.createElement("div");
  //   const title = document.createTextNode(s.title);
  //   titleDiv.setAttribute("class", "title");
  //   titleDiv.appendChild(title);

  //   const techonologiesDiv = document.createElement("span");
  //   const techonologies = document.createTextNode(s.techonologies);
  //   techonologiesDiv.setAttribute("class", "tech");
  //   techonologiesDiv.appendChild(techonologies);

  //   const descriptionDiv = document.createElement("p");
  //   const description = document.createTextNode(s.description);
  //   descriptionDiv.setAttribute("class", "description");
  //   descriptionDiv.appendChild(description);

  //   const div = document.createElement("div");

  //   const githubDiv = document.createElement("span");
  //   const githubLink = document.createElement("a");
  //   const github = document.createTextNode("github");
  //   githubLink.appendChild(github);
  //   githubLink.href = s.github;
  //   githubLink.target = "_blank";
  //   githubDiv.prepend(githubLink);

  //   const urlDiv = document.createElement("span");
  //   const urlLink = document.createElement("a");
  //   const url = document.createTextNode("url");
  //   urlLink.appendChild(url);
  //   urlLink.href = s.url;
  //   urlLink.target = "_blank";
  //   urlDiv.setAttribute("class", "url");
  //   urlDiv.prepend(urlLink);

  //   const websiteDiv = document.createElement("span");
  //   const websiteLink = document.createElement("a");
  //   const website = document.createTextNode("website");
  //   websiteLink.appendChild(website);
  //   websiteLink.href = s.website;
  //   websiteLink.target = "_blank";
  //   websiteDiv.setAttribute("class", "website");
  //   websiteDiv.prepend(websiteLink);

  //   rightDiv.appendChild(titleDiv);
  //   rightDiv.appendChild(techonologiesDiv);
  //   rightDiv.appendChild(descriptionDiv);
  //   rightDiv.appendChild(div);
  //   div.appendChild(githubDiv);
  //   div.appendChild(urlDiv);
  //   div.appendChild(websiteDiv);

  skill.appendChild(imageDiv);
  //   skill.appendChild(rightDiv);

  skills.appendChild(skill);
};

const addSkills = () => {
  fetch("https://tarafenton.com/data/skills.json").then(response => {
    response.json().then(json => {
      const skills = document.getElementById("skills");
      skills.setAttribute("class", "skills");
      console.log(json);

      var width = 960,
        height = 500;

      var svg = d3
        .select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      var nodes = json.map((d, i) => {
          return {
            radius: Math.random() * 60 + 28,
            image: json[i].image
          };
        }),
        root = nodes[0];
      // color = d3.scale.category10();
      root.radius = 0;
      root.fixed = true;
      console.log(nodes);
      var force = d3.layout
        .force()
        .gravity(0.05)
        .charge(function(d, i) {
          return i ? 0 : -3000;
        })
        .nodes(nodes)
        .size([width, height]);
      force.start();

      var padding = 4;
      /// here the circles are created and the fill is the color
      svg
        .selectAll("image")
        .data(nodes.slice(1))
        .enter()
        .append("svg:pattern")
        .attr("id", function(d, i) {
          return "skill" + i;
        })
        // .attr("width", 150)
        .attr("width", function(d) {
          return d.radius * 2 - padding;
        })
        .attr("height", function(d) {
          return d.radius * 2 - padding;
        })
        .attr("x", function(d) {
          return d.radius;
        })
        .attr("y", function(d) {
          return d.radius;
        })
        .attr("class", "ball")
        .attr("patternUnits", "userSpaceOnUse")
        .append("svg:image")
        .attr("xlink:href", function(d) {
          return "images/logos/" + d.image;
        })
        .attr("width", function(d) {
          return d.radius * 1.8;
        })
        .attr("height", function(d) {
          return d.radius * 1.8;
        })
        .style("fill", function(d, i) {
          return "url(#skill" + i + ")";
        });

      svg
        .selectAll("circle")
        .data(nodes.slice(1))
        .enter()
        .append("circle")
        // .attr("transform", function(d) {
        //   return "translate(" + d.x + d.radius + " ," + d.y + d.radius + ")";
        // })
        .attr("class", "ball")
        .attr("r", function(d) {
          return d.radius;
        })
        .style("fill", "#000")
        .style("fill", function(d, i) {
          return "url(#skill" + i + ")";
        });

      force.on("tick", function(e) {
        var q = d3.geom.quadtree(nodes),
          i = 0,
          n = nodes.length;
        while (++i < n) q.visit(collide(nodes[i]));
        svg.selectAll("circle").attr("transform", function(d) {
          return "translate(" + d.x + " ," + d.y + ")";
        });
      });
      svg.on("mousemove", function() {
        var p1 = d3.mouse(this);
        root.px = p1[0];
        root.py = p1[1];
        force.resume();
      });
      function collide(node) {
        var r = node.radius + 16,
          nx1 = node.x - r,
          nx2 = node.x + r,
          ny1 = node.y - r,
          ny2 = node.y + r;
        return function(quad, x1, y1, x2, y2) {
          if (quad.point && quad.point !== node) {
            var x = node.x - quad.point.x,
              y = node.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = node.radius + quad.point.radius;
            if (l < r) {
              l = ((l - r) / l) * 0.5;
              node.x -= x *= l;
              node.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        };
      }

      //   json.map(j => {
      //     addSkill(skills, j);
      //   });
    });
  });
};

document.body.onload = addSkills;
