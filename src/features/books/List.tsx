import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { Book } from "./Book";
import styles from './List.module.scss';
import React, { CSSProperties, ReactNode } from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

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

type InnerProps = {
  children: ReactNode,
  style: CSSProperties,
}
const Inner:React.FC<InnerProps> = ({ children, style }) => {
  return (
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
      <TableBody style={{...style, position:'absolute', width:'100%'}}>
        {children}
      </TableBody>
    </Table>
  );
}

const Row:React.FC<ListChildComponentProps<Book[]>> = ({ index, data: books, style }) => {
  const book = books[index];

  return (
    <TableRow style={style}>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.isbn}</TableCell>
      <TableCell>{Array(5).fill(0).map((item, index) => index < book.rating ? <Star key={index} /> : <StarBorder key={index} />)}</TableCell>
    </TableRow>
  );
}

function List() {
  return (
    <Paper className={styles.list} style={{height:'500px', maxHeight:'calc(100vh - 100px)' }}>
      <AutoSizer>
        {({width, height}:{width:number, height:number}) => (
          <FixedSizeList
            width={width}
            height={height}
            itemSize={62}
            itemCount={books.length}
            itemData={books}
            innerElementType={Inner}>
            {Row}
          </FixedSizeList>
        )}
      </AutoSizer>
    </Paper>
  );
}

export default List;
