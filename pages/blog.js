import { posts } from "./json/blogposts.js";

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

  for (let index = 0; index < post.blog.length; index++) {
    const line = post.blog[index];

    lineEl.innerHTML += line + "</p><p>";
  }

  blog.append(lineEl);

  var posDiv = document.getElementById("posts");
  posDiv.append(title);
  posDiv.append(date);
  posDiv.append(tags);
  posDiv.append(description);
  posDiv.append(blog);

  if (post.img_url != undefined) {
    var image = document.createElement("img");
    image.src = "/School/blogStuff/" + post.img_url + "."+(post.img_ext != undefined ? post.img_ext : 'png');

    posDiv.append(image);
  }
}
