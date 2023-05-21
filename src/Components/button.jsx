function Button(props) {
  return (
    <>
      <button className={props.mode} onClick={props.handleClick}>{props.children}</button>
    </>
  );
}
export default Button;
