// https://sidecar.gitter.im/
import React from 'react';

export default React.createClass({
  displayName: 'Gitter',
  render() {
    const room = this.props.room;

    return (<div>
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          ((window.gitter = {}).chat = {}).options = {
            room: '${room}'
          };
        `}} />
      <script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>
    </div>);
  }
});
