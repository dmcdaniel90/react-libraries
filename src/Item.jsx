const Item = ({ item }) => {
  return (
    <li
      style={{
        marginBottom: '2rem',
        backgroundColor: 'hsla(240, 100%, 50%, 0.5)',
        padding: '1rem',
        borderRadius: '0.5rem',
        color: 'white',
      }}
    >
      <span
        style={{
          fontSize: '1.2rem',
          fontWeight: '700',
        }}
      >
        {item.title}
        {` ------>`}
        {'  '}
        <a href={item.url} target="_" style={{ color: 'black' }}>
          {item.url}
        </a>
      </span>
      <p>{item.author}</p>
      <span>{item.num_comments} Comments & </span>
      <span>{item.points} Points</span>
    </li>
  );
};

export default Item;
