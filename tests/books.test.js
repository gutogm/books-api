const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.should();

chai.use(chaiHttp);

describe('/POST book', () => {
  it('it sould post the book info', (done) => {
    const book = {
      title: 'Book title example',
      description: 'Book description example',
      isbn: '9781617293290',
      language: 'BR',
    };
    chai.request(app)
      .post('/books')
      .send(book)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.should.have.property('title');
        res.body.should.have.property('description');
        res.body.should.have.property('isbn');
        res.body.should.have.property('language');
        done();
      });
  });
});

describe('/GET books', () => {
  it('it should get a list of limited books', (done) => {
    chai.request(app)
      .get('/books')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('numberBooks');
        res.body.should.have.property('books');
        res.body.books.should.be.a('array');
        done();
      });
  });
});

describe('/GET a book', () => {
  it('it should get a limited books', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/books/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.should.have.property('title');
        res.body.should.have.property('description');
        res.body.should.have.property('isbn');
        res.body.should.have.property('language');
        done();
      });
  });
});
