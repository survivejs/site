var React = require('react');
var LatestPost = require('../components/LatestPost.jsx');

var Index = React.createClass({
    displayName: 'Index',
    render: function() {
        const section = this.props.section;

        return (
            <div className='frontpage'>
                <div className='front__heading' style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(/assets/img/front.jpg)',
                    backgroundPosition: '0px 42%',
                    width: '100%',
                    flexDirection: 'row',
                }}>
                    <div className='front-text-wrapper'>
                        <h1 className='front-header'>SurviveJS - Webpack and React</h1>
                        <h3 className='front-motto'>From apprentice to master</h3>

                        <div className='front__buttons'>
                            <a className='btn btn--inverted' href='/webpack_react/introduction'>Read the free version</a>
                            <a className='btn btn--inverted' href='https://leanpub.com/survivejs_webpack_react'>Buy the full ebook</a>
                        </div>
                    </div>
                </div>
                <div className='post post--front'>
                    <section className='post__content'>
                    <LatestPost sectionItems={section.items} />

                        <div dangerouslySetInnerHTML={{__html: require('./index.md').content}} />
                    </section>

                    <aside className='post__sidebar' dangerouslySetInnerHTML={{__html: require('./sidebar.md').content}} />
                </div>
            </div>
        );
    }
});
Index.description = 'Want to learn Webpack or React? Get started for free and build a Kanban board by following the example project.';

module.exports = Index;

