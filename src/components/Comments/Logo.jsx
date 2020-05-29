class Logo extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
Logo.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Logo;
