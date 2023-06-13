'use client'
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import { DefaultElementDragableProps as ItemProps } from '../../../model/typeElementdrag';
import { Elements } from '../../../model/SampleData';
import Sidebar from '../sidebar/Sidebar';
import ElementDrag from '../utils/ElementDrag';
import Content from './Content';



const ExampleComponent = () => {
  const [column1, setColumn1] = useState<ItemProps[]>(Elements);
  const [column2, setColumn2] = useState<ItemProps[]>([]);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, item: ItemProps) => {
    // Store the dragged item's ID
    event.dataTransfer.setData('text/plain', item.id.toString());
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData('text/plain');
    const item = column1.find((item) => item.id.toString() === itemId);
    const isUniqeElemet = column2.find((item) => item.id.toString() === itemId);



    if (item) {
      const rect = event.currentTarget.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      // Check if the drop occurred inside the target container
      if (offsetX >= 0 && offsetX <= rect.width && offsetY >= 0 && offsetY <= rect.height) {
        // Remove the item from Column 1 🧰
        // setColumn1((prevColumn1) => prevColumn1.filter((i) => i.id !== item.id));
        // Add the item to Column 2
        const { icon, text, type } = item
        setColumn2([...column2, { icon, text, type, id: uuidv4() }]);
      } else {
        // Item dropped back inside Column 1, do nothing
      }
    } else {
      // if user add two same element we should change Id and label
      console.log('change Id and label')
    }
  };


  useEffect(() => {
    let lastItemAdded = column2[column2.length - 1]


  }, [column2])
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <>

      {/*(wrapper) sidebar Element */}
      <Sidebar>
        <div className='w-full h-full' >
          {column1.map((item) => (
            <div key={item.id} draggable onDragStart={(event) => handleDragStart(event, item)}>
              <ElementDrag icon={item.icon} id={item.id} key={item.id} text={item.text} type={item.type} />
            </div>
          ))}
        </div>
      </Sidebar>
      {/*(wrapper) content Element */}
      <Content>
        <div className='w-full h-full ' onDragOver={handleDragOver} onDrop={handleDrop}>
          {column2.map((item) => (
            <ElementDrag icon={item.icon} id={item.id} key={item.id} text={item.text} type={item.type} />
          ))}
        </div>
      </Content>
    </>
  );
};

export default ExampleComponent;
