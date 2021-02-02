const React = require('react');

const WeatherMessage = React.createClass({
  render: function() {
    let {location, temp} = this.props;

    return (
      <div>
        <p>It is {temp} in {location}.</p>
      </div>
    )
  }
})

module.exports = WeatherMessage;