import React, { useState } from 'react';

const TodoItems = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="my-3 flex items-center gap-2">
      <div className="flex flex-1 cursor-pointer items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <p className="ml-4 text-[17px]">{text}</p>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TodoItems;
