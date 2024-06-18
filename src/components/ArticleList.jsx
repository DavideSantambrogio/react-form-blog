import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

function ArticleList({ articles, removeArticle }) {
  return (
    <ListGroup>
      {articles.map(({ title }, index) => (
        <ListGroupItem key={`article${index}`} className="d-flex justify-content-between align-items-center">
          {title}
          <Button color="danger" onClick={() => removeArticle(index)}> Elimina </Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default ArticleList;
