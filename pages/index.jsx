var React = require('react');
var LatestPost = require('../components/LatestPost.jsx');

var Index = React.createClass({
  displayName: 'Index',
  render: function() {
    const section = this.props.section;

    return (
      <div className='frontpage'>
        <div className='front__heading'>
          <div className='front-header-wrapper'>
            <h1 className='front-header'>Learn Webpack and React</h1>
            <h3 className='front-motto'>SurviveJS will take you from</h3>
            <h3 className='front-motto'>apprentice to master</h3>

            <div className='front-button-wrapper'>
              <a className='btn btn--buy' href='https://leanpub.com/survivejs_webpack_react'>Become a master</a>
              <div className='read-free'>
                <span>or <a href='/webpack_react/introduction'>read the free version</a></span>
              </div>
            </div>
          </div>

          <div className='front-cover-wrapper'>
            <img className='front-cover' src='images/title_page_small.png' width='255' height='329' />
          </div>
        </div>
        <div className='post post--front'>
          <section className='post__content'>
            <LatestPost sectionPages={section.pages} />

            <div dangerouslySetInnerHTML={{__html: require('raw!markdown!./index.md')}} />
          </section>

          <aside className='post__sidebar' dangerouslySetInnerHTML={{__html: require('raw!markdown!./sidebar.md')}} />
        </div>
      </div>
    );
  }
});
Index.description = 'Want to learn Webpack or React? Get started for free and build a Kanban board by following the example project.';

module.exports = Index;

