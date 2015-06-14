import React from 'react';

const baseStyle = {
  cursor: 'pointer'
}

export default class SettingsIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    const {height, style: propsStyle, width, ...props} = this.props;
    const style = {...baseStyle, ...propsStyle};
    let fill = this.props.fill[this.state.hover ? 'active' : 'base'];

    return (
      <span style={style} {...props} onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}>
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 64 64'>
          <g>
						<path fill={fill} d="M4.667,16.667h34.656c0.692,3.234,3.569,5.667,7.006,5.667s6.314-2.433,7.006-5.667h5.998
							c0.828,0,1.5-0.671,1.5-1.5s-0.672-1.5-1.5-1.5h-5.998C52.644,10.433,49.767,8,46.329,8s-6.314,2.433-7.006,5.667H4.667
							c-0.829,0-1.5,0.671-1.5,1.5S3.838,16.667,4.667,16.667z M46.329,11c2.298,0,4.167,1.869,4.167,4.167
							c0,2.298-1.869,4.167-4.167,4.167s-4.167-1.869-4.167-4.167C42.162,12.869,44.031,11,46.329,11z"/>
						<path fill={fill} d="M59.333,30.5h-35.06c-0.692-3.234-3.569-5.667-7.006-5.667s-6.314,2.433-7.006,5.667H4.667
							c-0.829,0-1.5,0.671-1.5,1.5s0.671,1.5,1.5,1.5h5.595c0.692,3.234,3.569,5.667,7.006,5.667s6.314-2.433,7.006-5.667h35.06
							c0.828,0,1.5-0.671,1.5-1.5S60.161,30.5,59.333,30.5z M17.268,36.167c-2.298,0-4.167-1.869-4.167-4.167
							c0-2.297,1.869-4.167,4.167-4.167c2.297,0,4.167,1.869,4.167,4.167C21.434,34.298,19.565,36.167,17.268,36.167z"/>
						<path fill={fill} d="M59.333,47.333H43.666c-0.692-3.233-3.569-5.666-7.005-5.666c-3.437,0-6.314,2.433-7.006,5.666H4.667
							c-0.829,0-1.5,0.672-1.5,1.5s0.671,1.5,1.5,1.5h24.988C30.347,53.567,33.224,56,36.661,56c3.437,0,6.314-2.433,7.005-5.667h15.667
							c0.828,0,1.5-0.672,1.5-1.5S60.161,47.333,59.333,47.333z M36.661,53c-2.298,0-4.167-1.869-4.167-4.167
							c0-2.297,1.869-4.166,4.167-4.166c2.297,0,4.166,1.869,4.166,4.166C40.827,51.131,38.958,53,36.661,53z"/>
					</g>
        </svg>
      </span>
    );
  }

  static propTypes = {
    fill: React.PropTypes.shape({
      active: React.PropTypes.string.isRequired,
      base: React.PropTypes.string.isRequired
    }),
    height: React.PropTypes.number,
    width: React.PropTypes.number
  }

  static defaultProps = {
    fill: {
      active: 'red',
      base: '#323232'
    },
    height: 64,
    width: 64
  }
}
