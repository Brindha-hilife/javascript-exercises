const getTheTitles = function() {
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]
      var result;
      return result = books.map(a => a.title);
  
};

// Do not edit below this line
module.exports = getTheTitles;
