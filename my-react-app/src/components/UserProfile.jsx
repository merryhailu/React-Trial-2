const UserProfile = (props) => {
  return (
    <>
      <h1>name: {props.name}</h1>
      <p>age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </>
  );
};

export default UserProfile;
