import React from "react";
import styled from "styled-components";

interface PostMenuProps {
  onLick: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const MenuContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 16px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  z-index: 10;

  @media (max-wigth: 768px) {
    wigth: 100%;
    tight: 0;
  }
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    background: #f0f0f0;
  }
`;

const MenuCardsPost: React.FC<PostMenuProps> = ({
  onLick,
  onDelete,
  onEdit,
}) => {
  return (
    <MenuContainer>
      <MenuItem onClick={onEdit}>Редактировать</MenuItem>
      <MenuItem onClick={onDelete}>Удалить</MenuItem>
      <MenuItem onClick={onLick}>В избранное</MenuItem>
    </MenuContainer>
  );
};
export default MenuCardsPost;
