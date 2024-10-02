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

    var element = null;

    switch (line_type.toLowerCase()) {
      case 'image' || 'img' || 'sprite' || 'graphic' || 'spr':
        element = imgEl;
      case 'text' || 'line' || 'dialogue' || 'txt' || 'ln' || 'dia':
        element = lineEl;
    }
    if (element != null) blog.append(element);
  }

  var posDiv = document.getElementById("posts");
  posDiv.append(title);
  posDiv.append(date);
  posDiv.append(tags);
  posDiv.append(description);
  posDiv.append(blog);
}
