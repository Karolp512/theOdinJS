function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      read === true
        ? console.log(title + " by " + author + ", " + pages + " pages, " + "read")
        : console.log(
            title + " by " + author + ", " + pages + " pages, " + "not read yet"
          );
    };
  }

  Book.prototype.dupa = function(){
    return this.title + " hahaha dupaa";
  }


  function Movie(title, duration) {
    this.title = title;
    this.duration = duration;
  }


  function Romance(){

  }

  function Criminal(){

  }

  Romance.prototype = Object.create(Book.prototype);
  Object.setPrototypeOf(Criminal.prototype, Book.prototype);
 
  const theHobbit = new Book("the Hobbit", "J.R.R Tolkien", 295, false);
  const fightClub = new Movie("Fight Club", 180);
  const loveStory = new Book("love story", "James Johannson", 310, true);
  const serialKiller = new Book("serial killer", "Unknow Dicarpio", 140, false);

  theHobbit.info();