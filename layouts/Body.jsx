import React from 'react';
import Fork from 'react-ghfork';
import {layouts, components} from 'antwar-helpers';
import Footer from '../components/Footer.jsx';

const Body = layouts.Body;
const Navigation = components.Navigation;
const RSS = components.RSS;

export default React.createClass({
  displayName: 'Body',
  render() {
    const props = this.props;
    const section = props.section;
    const pathname = props.location.pathname;
    const sectionTitle = section.title;

    return (
      <Body head={this.renderHead()} {...props}>
        {props.children}

        {pathname !== '/' ? this.renderNavigation(props, sectionTitle) : null}
        {pathname !== '/' ? this.renderFeedback(props.page.title) : null}

        <Footer {...props} />
      </Body>
    );
  },
  renderHead() {
    return <RSS />
  },
  renderNavigation(props, sectionTitle) {
    return (
      <Navigation {...props} pages={[
        {
          title: 'Home',
          url: '/',
        },
        {
          title: sectionTitle === 'blog' ? 'Read the free version' : 'Read the blog',
          url: sectionTitle === 'blog' ? '/webpack_react/introduction/' : '/blog',
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
