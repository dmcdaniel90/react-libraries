import Item from './Item';

const List = ({ list }) => {
  return (
    <>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
        }}
      >
        {list.map(item => (
          <Item key={item.objectID} item={item} />
        ))}
      </ul>
    </>
  );
};

export default List;
