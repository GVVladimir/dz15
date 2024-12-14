import React, { useState } from "react";
import styled from "styled-components";
import MenuCardsPost from "./MenuCardsPosts";

interface PostCardProps {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
}

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 15px;
  width: 400px;
  position: relative;
  transition: all 0.3s ease;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const MenuButton = styled.button`

position: absolute;
background: none;
border: none;
cursor: pointer;
font-size: 26px;
right: 10px;
top: 6px;
`

const PostCards: React.FC<PostCardProps> = ({ id, title, content, onDelete }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [postNew, setPostNew] = useState<string>(content);

  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }

  const toggleLick = () => {
    setIsLiked(!isLiked)
  }

  const editCard = () => {
    const newPost = prompt('введите новый текст:', postNew);
    if(newPost){
        setPostNew(newPost)
    }
  }

const deleteCard = () => {
    if(window.confirm('вы уверены?'))
    onDelete(id)
}

  return (
    <Card>
      <h2>{title}</h2>
      <p>{postNew}</p>
      <p>{isLiked ? "в избронных" : ""}</p>
      <MenuButton onClick={toggleMenu}>:</MenuButton>
      {isMenu && <MenuCardsPost 
      onLiked={toggleLick}  onDelete={deleteCard}  onEdit={editCard}/>}
    </Card>
  );
};

export default PostCards;
