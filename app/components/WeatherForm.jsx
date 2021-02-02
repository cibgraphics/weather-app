const React = require('react');

const WeatherForm = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" ref="location"></input>
        <button>Get Weather</button>
      </div>
    )
  }
})

module.exports = WeatherForm;