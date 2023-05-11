import "./user.css";

const User = ({
  user: { id, name, username, email, website },
}: {
  user: User;
}) => {
  return (
    <div className="user" data-testid={`user-id-${id}`}>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
};

export default User;
