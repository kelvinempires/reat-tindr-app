const AuthModel = ({ setShowModel }) => {
  const handleClick = () => {
    setShowModel(false);
  };
  return (
    <div>
      <div onClick={handleClick}>ddcdcd*</div>
    </div>
  );
};
export default AuthModel;
