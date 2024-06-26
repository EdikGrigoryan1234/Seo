import React, { useEffect, useState } from "react";
import "./Global.css";
import "./search.css";
import NewsCard from "./NewsCard";
import Button from "./Button";
import Section from "./Section";

function Blog() {
  let tags = [
    "american",
    "love",
    "fiction",
    "mystery",
    "crime",
    "classic",
    "french",
    "history",
    "english",
    "magical",
  ];

  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [timerId, setTimerId] = useState();
  const [categories, setCategories] = useState([]);
  const [reset, setReset] = useState(false);
  const [buttonColors, setButtonColors] = useState(tags.map(() => '#69bad3'));

  let arr = data;

  let btnStyle = {
    borderRadius:'20px',
    color:'#fff',
    margin:'5px',
    width:'70px',
    height:'30px', 
  };

  useEffect(() => {
    setTimerId(
      setTimeout(() => {
        clearTimeout(timerId);
        fetch("https://dummyjson.com/posts")
          .then((res) => res.json())
          .then((res) =>
            setData(
              res.posts.filter((e) =>
                e.title
                  .trim()
                  .toLowerCase()
                  .startsWith(text.trim().toLowerCase())
              )
            )
          );
      }, 1000)
    );
  }, [text]);

  useEffect(() => {
    clearTimeout(timerId);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((res) =>
        setData(
          res.posts.filter((e) =>
            e.tags.includes(categories)
          )
        )
      );
    console.log(categories, data);
  }, [categories]);



  const handleReset = () => {
	fetch("https://dummyjson.com/posts")
	.then((res) => res.json())
	.then((res) => setData(res.posts));
    setButtonColors(tags.map(() => '#69bad3'));
  };

  return (
    <div className="blog__container">
      <section className="flex gap-12 justify-between p-60">
        <div className="flex gap-5 flex-col">
          <h1 className="z-20 text-6xl text-center">Blog posts</h1>
          <div className="gap-10 flex flex-wrap justify-center items-center">
            {arr.map((e, i) => (
              <NewsCard tags={e.tags} key={i} title={e.title} text={e.body} />
            ))}
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="bg-gradient">
                <input
                  onChange={(val) => setText(val.target.value)}
                  className="input-transparent"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="p-10 gap-10">
                {tags.map((e, i) => (
                  <button
                    style={{ ...btnStyle, background: buttonColors[i] }}
                    key={i}
                    className="categoriesBtn"
                    onClick={() => {
                      setCategories(e);
                      setButtonColors(prevColors => {
                        const newColors = [...prevColors];
                        newColors[i] = newColors[i] === '#69bad3' ? 'red' : '#69bad3';
                        return newColors;
                      });
                    }}
                  >
                    {e}
                  </button>
                ))}
                <button className="categBtn" onClick={handleReset}>X</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section />
      <div className="w-full h-1"></div>
    </div>
  );
}

export default Blog;


