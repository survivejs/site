import React from 'react';
import Fork from 'react-ghfork';
import {layouts, components} from 'antwar-helpers';
import Footer from '../components/Footer.jsx';
import Gitter from '../components/Gitter.jsx';

const Body = layouts.Body;
const Navigation = components.Navigation;
const RSS = components.RSS;

export default React.createClass({
  displayName: 'Body',
  render() {
    const props = this.props;
    const section = props.section;
    const pathname = props.location.pathname;

    return (
      <Body head={this.renderHead()} {...props}>
        {props.children}

        {pathname !== '/' ? this.renderNavigation(props, section.name) : null}
        {pathname !== '/' ? this.renderFeedback(props.page.title) : null}

        <Footer {...props} />

        <Gitter room="survivejs/webpack_react" />
      </Body>
    );
  },
  renderHead() {
    return <RSS />
  },
  renderNavigation(props, sectionName) {
    return (
      <Navigation {...props} pages={[
        {
          title: 'Home',
          url: '/',
        },
        {
          title: sectionName === 'blog' ? 'Read the free version' : 'Read the blog',
          url: sectionName === 'blog' ? '/webpack_react/introduction/' : '/blog',
        },
        {
          title: 'Buy the full ebook',
          url: 'https://leanpub.com/survivejs_webpack',
        },
        {
          title: '',
          url: '',
        },
        {
          title: '@survivejs',
          url: 'https://twitter.com/survivejs',
        },
      ]} />
    );
  },
  renderFeedback(title) {
    return <Fork className="right ribbon"
      project={`survivejs/webpack_react/issues/new?title=${title} - `}
      text="Submit feedback"
      style={{backgroundColor: 'black'}}
      target="_blank" />;
  }
});
