// Javascript ES6 Class ECMAScript
class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    //Method
    getSummary(){
        // <h1>${this.title}</h1> <--- Template Literals
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//Magazine subclass
class Magazine extends Book{
    constructor(title, author, year, month){
        //to use the book constructor, use function super
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1.getSummary());
console.log(mag1.month);