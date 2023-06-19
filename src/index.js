import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Bookstore () {
  return (
    <section>
      <div className='heading'>
      <h1>BOOK STORE</h1>
    </div>
    
    <div >
      <Booklist></Booklist> 
    </div>
    </section>
  );
}

// simple list

const books = [
  {
    image : "https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg" ,
    title : "The Jungle",
    author : "James",
    info : "1.A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. The technical term for this physical arrangement is codex (plural, codices).",
  },

  {
    image : "https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg" ,
    title : "A Better India: A Better World",
    author : "Narayana Murthy",
    info : "2.A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. The technical term for this physical arrangement is codex (plural, codices).",
  },

  {
    image : "https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg" ,
    title : "A Passage to India",
    author : "E.M. Foster",
    info : "3.A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. The technical term for this physical arrangement is codex (plural, codices).",
  },

  {
    image : "https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg" ,
    title : "A Revenue Stamp",
    author : "Amrita Pritam",
    info : "4.A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. The technical term for this physical arrangement is codex (plural, codices).",
  },

  {
    image : "https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg" ,
    title : "A Tale of Two Cities",
    author : "Charles Darwin",
    info : "5.A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. The technical term for this physical arrangement is codex (plural, codices).",
  },

  {
    image : "https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg" ,
    title : "A Week with Gandhi",
    author : "Louis Fisher",
    info : "6.A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. The technical term for this physical arrangement is codex (plural, codices).",
  },

  {
    image : "https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg" ,
    title : "Adventures of Tom Sawyer",
    author : "Mark Twain",
    info : "7.A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. The technical term for this physical arrangement is codex (plural, codices).",
  },

  {
    image : "https://edit.org/photos/img/blog/m68-book-cover-templates.jpg-840.jpg" ,
    title : "Alice in Wonderland",
    author : "Lewis Carrol",
    info : "8.A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. The technical term for this physical arrangement is codex (plural, codices).",
  },
];





function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book,index) => {
        // const {image , title , author} = book;
        return <Book book={book} key={index}></Book>
      })}
    </section>
  );
}

const Book = (props) => {
  // console.log(props);
  const {image , title ,author,info} = props.book;
  const handleButtonClick = () => {
    handleConsoleLog(title);
    handleConsoleLog(author);
    handleConsoleLog(info);
  };

  return (
    <article className='book'>
      <img src={image} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4 onClick={() => console.log(author)}>{author}</h4>
      <button onClick={handleButtonClick}>Buy now</button>
    </article>
  );
};

function handleConsoleLog(message) {
  console.log(message);
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Bookstore />
);


