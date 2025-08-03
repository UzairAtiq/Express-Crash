const output = getElementByID('output');
const button = getElementById('button');
const fetchData = async() => {
  const res = await fetch('http://localhost:8080/api/posts');
  const posts = await res.json();
  output.innerHtml = '';
  posts.forEach((post)=>{})
}