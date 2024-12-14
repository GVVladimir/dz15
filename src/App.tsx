import React, { useState } from "react";
import styled from "styled-components";
import PostCards from "./components/PostCards";


interface Post {
  id: number;
  title: string;
  content: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
  background: linear-gradient(to bottom, rgb(63, 8, 245), rgb(148, 192, 241));
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 18px;
    max-width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const App: React.FC = () => {

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title:'это было вчера',
      content: 'пятница, гулял народ и было весело',
    },

    {
      id: 2,
      title:'это произойдет сегодня',
      content: 'еще нет событий для упоминания...',
    },

    {
      id: 3,
      title:'это будет скоро',
      content: 'в будни нам не интересно, а до пятницы еще далековато...',
    }
  ])

  const handleDeleteCard = (id: number) => {
    setPosts(posts.filter((post) => post.id !==id))
  }

  return (
    <Container>
      <Title>Мои карточки</Title>
      {
      posts.map((post) => (
        <PostCards
        key={post.id}
        id={post.id}
        title={post.title}
        content={post.content}
        onDelete={handleDeleteCard}
        />
      )) 
    }
    </Container>
  );
};
export default App;
