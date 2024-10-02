import { posts } from "./json/blogposts-testing.js";

for (let index = 0; index < posts.length; index++) {
  const post = posts[index];

  var title = document.createElement("h1");
  var description = document.createElement("h3");
  var date = document.createElement("h3");
  var tags = document.createElement("div");
  var blog = document.createElement("div");

  title.innerHTML = post.title + " by " + post.author;
  description.innerHTML = post.description;
  date.innerHTML = post.date;

  var curTag = document.createElement("p");

  for (let index = 0; index < post.tags.length; index++) {
    const tag = post.tags[index];

    curTag.innerHTML += "#" + tag + ' ';
    curTag.style = "color: 0x777777";
  }

  tags.append(curTag);


  var lineEl = document.createElement("p");
  var imgEl = document.createElement('img');
  for (let index = 0; index < post.blog.length; index++) {
    const line = post.blog[index];
    const line_type = line.type;

    lineEl.innerHTML = line.content + "</p><p>";
    imgEl.src = `/School/blogStuff/${line.content}.${line.ext != undefined ? line.ext : 'png'}`;

    var new_line_element = null;
    var new_line_content = null;

    switch (line_type.toLowerCase()) {
      case 'image':
        new_line_element = 'p';
        new_line_content = lineEl.innerHTML;
      case 'text':
        new_line_element = 'img';
        new_line_content = imgEl.src;
    }


    var newEL = document.createElement(new_line_element);

    switch (new_line_element) {
      case 'p':
        newEL.innerHTML = new_line_content;
      case 'img':
        newEL.src = new_line_content;
    }


    if (new_line_element != null) blog.append(newEL);
  }

  var posDiv = document.getElementById("posts");
  posDiv.append(title);
  posDiv.append(date);
  posDiv.append(tags);
  posDiv.append(description);
  posDiv.append(blog);
}
