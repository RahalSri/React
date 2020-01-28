import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const span = Math.ceil(this.imageRef.current.clientHeight / 10);
    this.setState({ spans: span });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }

  
}

export default ImageCard;
