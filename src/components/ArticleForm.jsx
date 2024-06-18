import React, { useState } from 'react';
import ArticleList from './ArticleList';
import { Form, InputGroup, Input, Button } from 'reactstrap';

function ArticleForm() {

    const [articles, setArticles] = useState([]);
    const defaultArticleData = {
        title: ''
    };


    const [articleData, setArticleData] = useState(defaultArticleData);

    // Gestisce il submit del form
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (articleData.title.trim() !== '') {
            setArticles(array => ([...array, articleData]));
            // Resetta il form ai valori di default
            setArticleData(defaultArticleData);
        }
    };

    // Rimuove un articolo dalla lista in base all'indice
    const removeArticle = (indexToDelete) => {
        setArticles(array => array.filter((_, i) => i !== indexToDelete));
    };

    // Aggiorna i dati del nuovo articolo
    const changeArticleData = (key, newValue) => {
        setArticleData(data => ({ ...data, [key]: newValue }));
    };

    return (
        <>            
            <Form onSubmit={handleSubmit}>
                <InputGroup>                    
                    <Input
                        placeholder="and..."
                        type="text"
                        id="articleTitle"
                        value={articleData.title}
                        onChange={(e) => changeArticleData('title', e.target.value)}
                    />
                    
                    <Button type="submit" color="success">
                        To the Right!
                    </Button>
                </InputGroup>

                
                <ArticleList articles={articles} removeArticle={removeArticle} />
            </Form>
            
        </>
    );
}

export default ArticleForm;
