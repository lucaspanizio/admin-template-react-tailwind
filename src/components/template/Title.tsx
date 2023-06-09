import React from 'react';

interface ITitle {
  title: string,
  caption: string
}

const Title:React.FC<ITitle> = (props) => {
  return (
    <div>
      <h1 className={`font-black text-3xl text-gray-900 dark:text-gray-100`}>
        {props.title}
      </h1>
      <h2 className={`font-light text-sm text-gray-600 dark:text-gray-300`}>
        {props.caption}
      </h2>
    </div>
  );
}
 
export { Title };
