import React, { useState } from 'react';
import ArticleList from './ArticleList';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

function ArticleForm() {

    const [articles, setArticles] = useState([]);

    const defaultArticleData = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
    };
    const [articleData, setArticleData] = useState(defaultArticleData);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (articleData.firstName.trim() !== '') {
            setArticles(array => ([...array, articleData]));          
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
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="firstName">Nome</Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                placeholder="Nome"
                                type="text"
                                value={articleData.firstName}
                                onChange={(e) => changeArticleData('firstName', e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="lastName">Cognome</Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                placeholder="Cognome"
                                type="text"
                                value={articleData.lastName}
                                onChange={(e) => changeArticleData('lastName', e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="address">Indirizzo</Label>
                    <Input
                        id="address"
                        name="address"
                        placeholder="Indirizzo"
                        value={articleData.address}
                        onChange={(e) => changeArticleData('address', e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="city">Città</Label>
                    <Input
                        id="city"
                        name="city"
                        placeholder="Città"
                        value={articleData.city}
                        onChange={(e) => changeArticleData('city', e.target.value)}
                    />
                </FormGroup>
                <Button type="submit" color="success">Add Article</Button>
            </Form>


            <ArticleList articles={articles} removeArticle={removeArticle} />
        </>
    );
}

export default ArticleForm;
