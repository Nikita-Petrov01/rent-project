import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function Select({ categories, onSelect }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Категории
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item 
          key="all" 
          onClick={() => onSelect('all')}
        >
          Все категории
        </Dropdown.Item>
        {categories.map((category) => (
          <Dropdown.Item 
            key={category.id} 
            onClick={() => onSelect(category.id)}
          >
            {category.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}