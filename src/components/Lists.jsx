import { useState } from 'react';

function Lists({ title, items, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayItems = isCollapsed ? items.slice(0, 3) : items;

  function toggleOpen() {
    setIsOpen((is) => !is);
  }

  return (
    <div>
      <div className="list-container">
        <div className="heading">
          <h2>{title}</h2>
          <button onClick={toggleOpen}>
            {isOpen ? <span>&or;</span> : <span>&and;</span>}
          </button>
        </div>

        {isOpen && <ul className="list">{displayItems.map(render)}</ul>}

        <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
          {isCollapsed ? `Show all ${items.length}` : 'Show less'}
        </button>
      </div>
    </div>
  );
}

export default Lists;
