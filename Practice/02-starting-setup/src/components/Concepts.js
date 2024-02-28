function Concepts(props) {
  return props.conceptList.map((item) => {
    return (
      <li key={Math.random()} className="concept">
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </li>
    );
  });
}

export default Concepts;
