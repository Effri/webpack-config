function Logo(props) {
  return <h1>{props.title}</h1>;
}
Logo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Logo;
