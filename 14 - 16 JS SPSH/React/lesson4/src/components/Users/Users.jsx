function User(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.address}</p>
    </>
  );
}

export default User;
