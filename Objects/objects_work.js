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

  const theHobbit = new Book("the Hobbit", "J.R.R Tolkien", 295, false);
  theHobbit.info();