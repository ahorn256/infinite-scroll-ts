import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { Book } from "./Book";
import styles from './List.module.scss';

const tableHead = {
  title: 'Title',
  author: 'Author',
  isbn: 'ISBN',
  rating: 'Bewertung',
};

const books:Book[] = new Array(100).fill(
  {
    "title": "JavaScript - das umfassende Handbuch",
    "author": "Philip Ackermann",
    "isbn": "978-3836286299",
    "rating": 5
  }
).map((book, id) => ({...book, id: id.toString()}));

function List() {
  return (
    <Paper className={styles.list}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.entries(tableHead).map(([key, head]) => (
              <TableCell key={key}>
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map(book => (
            <TableRow key={book.id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{Array(5).fill(0).map((item, index) => index < book.rating ? <Star key={index} /> : <StarBorder key={index} />)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default List;
