export default function Header() {
  const welcome = {
    greeting: 'Hey',
    title: 'React',
    subtitle: 'A list of React libraries and frameworks',
  };

  const { greeting, title, subtitle } = welcome;

  return (
    <>
      <h1>
        {greeting}, {title}
      </h1>
      <img
        src="src/assets/react.svg"
        alt="React Logo"
        width="96"
        height="96"
        style={{ margin: '0 auto' }}
      />
      <h3>{subtitle}</h3>
    </>
  );
}
