import PropTypes from 'prop-types';
import React from 'react';
import urlParser from 'js-video-url-parser';

export class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valid: false, data: {} };
  }
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    field: PropTypes.object,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired
  };

  static defaultProps = {
    value: ''
  };

  fetchFromAPI = e => {
    const { id = '' } = urlParser.parse(e.target.value) || '';
    const APIKey = this.props.field.get('APIkey');
    const data = fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${APIKey}`
    )
      .then(res => res.json())
      .then(json => {
        if (json !== undefined) {
          this.setState({ valid: true, data: json.items[0].snippet });
        } else {
          this.setState({ valid: false });
        }
      })
      .catch(err => {
        this.setState({ valid: false, data: {} });
        return false;
      });

    this.validateURL(e);
  };

  validateURL = e => {
    if (urlParser.parse(e.target.value)) {
      this.setState({ valid: true });
    } else {
      this.setState({ valid: false });
    }

    this.writeOut(e);
  };

  writeOut = e => {
    if (this.props.field.get('extraInfo')) {
      try {
        const { id, provider, mediaType } = urlParser.parse(e.target.value);
        const videoInfo = urlParser.parse(e.target.value);
        this.props.onChange({
          url: e.target.value,
          id: id,
          mediaType: mediaType,
          imageURL: urlParser.create({
            videoInfo,
            format: 'longImage',
            params: { imageQuality: 'maxresdefault' }
          })
        });
      } catch (err) {
        console.error('Not a valid Youtube URL');
        this.props.onChange(e.target.value);
      }
    } else {
      this.props.onChange(e.target.value);
    }
  };

  isValid = () => {
    return this.state.valid;
  };

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props;
    const { valid } = this.state;
    const extraInfo = this.props.field.get('extraInfo');
    const APIKey = this.props.field.get('APIkey');

    if (APIKey) {
      const { data } = this.state;
      return (
        <div
          className="nc-imageControl-imageUpload"
          id={forID}
          className={classNameWrapper}
          onFocus={setActiveStyle}
          onBlur={setInactiveStyle}
        >
          <span className="nc-imageControl-message">
            {data.title && valid ? (
              <div className="nc-imageControl-content">
                <div
                  style={{ flexShrink: 0, width: 120, height: 82 }}
                  className="nc-imageControl-imageWrapper"
                >
                  <img
                    src={data.thumbnails.default.url}
                    style={{
                      width: 120,
                      height: 67.5,
                      objectFit: 'cover'
                    }}
                    alt={data.title}
                  />
                </div>
                <div className="nc-imageControl-textWrapper">
                  <strong
                    style={{ display: 'block' }}
                    className="nc-imageControl-title"
                  >
                    {data.title}
                  </strong>
                  <span className="nc-imageControl-description">
                    {`${data.description.substring(
                      150,
                      data.description.length - 1
                    )}...`}
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      right: -2,
                      padding: '5px 10px',
                      borderRadius: '5px 0',
                      color: 'white',
                      backgroundColor: '#00A86B'
                    }}
                    className="nc-imageControl-validation"
                  >
                    ✓
                  </span>
                </div>
              </div>
            ) : (
              ''
            )}
            <input
              type="text"
              style={{
                width: '100%',
                fontSize: '1rem'
              }}
              value={extraInfo ? value.url : value}
              valid={valid}
              placeholder={`Youtube URL`}
              onChange={this.fetchFromAPI}
            />
          </span>
        </div>
      );
    } else {
      return (
        <input
          type="text"
          id={forID}
          className={classNameWrapper}
          value={extraInfo ? value.url : value}
          valid={valid}
          placeholder={`Youtube URL`}
          onChange={this.validateURL}
          onFocus={setActiveStyle}
          onBlur={setInactiveStyle}
        />
      );
    }
  }
}

export class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoInfo: {}
    };
  }

  getImage(videoInfo) {
    if (videoInfo) {
      return urlParser.create({
        videoInfo,
        format: 'longImage',
        params: { imageQuality: 'maxresdefault' }
      });
    }
  }

  render() {
    const value = this.props.value;
    const { url, id, mediaType, provider = 'youtube' } = value;
    const { imageURL = '' } = this.getImage({ url, id, mediaType, provider });

    return (
      <div className="yt-widgetPreview">
        {value.imageURL || imageURL ? (
          <img
            style={{ width: '100%' }}
            src={value.imageURL ? value.imageURL : imageURL}
            alt="Youtube Video Preview"
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

Preview.propTypes = {
  value: PropTypes.node
};