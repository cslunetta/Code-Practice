// Inventory application for a bookstore

/* 
use JavaScript classes 
    book class
use a getter method

1. title
2. author
3. isbn
4. numCopies

getAvailablitity() => "out of stock" if 0 available copies, "low stock" if < 10 copies and "in stock" otherwise

sell(numSold)
default number sold to 1

restock(numCopies)
default restock to 5 if no number is provided

*/

class Book {
    constructor(title, author, ISBN, numCopies = 0) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    
    get availibility() {
        return this.getAvailability();
    }

    getAvailability() {
        if (this.numCopies === 0) {
            return "out of stock";
        } else if (this.numCopies < 10) {
            return "low stock";
        } else {
            return "in stock";
        }
    }

    sell(numSold = 1) {
        this.numCopies -= numSold;
    }

    restock(numCopies = 5) {
        this.numCopies += numCopies;
    }
}

export const availableBookResults = () => {
    const newBook = new Book(
        "SQL in a Nutshell",
        "Kevin Kline",
        "978-0-596-51884-4",
        10
    );
    console.log(newBook);
    console.log(newBook.availibility);

    newBook.sell(5);
    console.log(newBook);

    newBook.restock(3);
    console.log(newBook);
};
