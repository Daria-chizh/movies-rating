import React from 'react';
import Star from './Star';

class Stars extends React.Component {
  render() {
    const { count = 0 } = this.props;

    if (!parseInt(count, 10) || count < 1 || count > 5) {
      return null;
    }

    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<li key={i}><Star /></li>);
    }

    return (
      <ul className="card-body-stars u-clearfix">
        {stars}
      </ul>
    )
  }
}
export default Stars;
