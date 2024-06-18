import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

function ArticleList({ articles, removeArticle }) {
    return (
        <ListGroup className='mt-5'>
            {articles.map((article, index) => (
                <ListGroupItem key={`article${index}`} className="d-flex justify-content-between align-items-center">
                    <div>
                        {/* Dettagli dell'articolo */}
                        <strong>Nome:</strong> {article.firstName} {article.lastName}<br />
                        <strong>Indirizzo:</strong> {article.address}<br />
                        <strong>Città:</strong> {article.city}
                    </div>
                    {/* Pulsante di chiusura per rimuovere l'articolo */}
                    <Button close onClick={() => removeArticle(index)} />
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default ArticleList;
