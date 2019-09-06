import React from 'react';

class StoryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: this.props.stories
        }
    }
    render() {
        this.props.stories.map((el, i) => {
            console.log(el.header.heading);
        })
        const storyList = this.props.stories.map((el, i) =>
            (
                <React.Fragment>
                    <div onClick={this.props.storySelected(el,i)}>
                        <div key={i} style={{ backgroundImage: el.url }}>
                            {el.header.profileImage && <img style={styles.img} src={el.header.profileImage} />}
                        </div>
                        <div style={{ margin: 'auto' }}>
                            {el.header.heading && <p style={{ fontSize: '12px' }}>{el.header.heading}</p>}
                            {el.header.heading && <p style={{ fontSize: '10px' }}>{el.header.subheading}</p>}
                        </div>
                    </div>
                </React.Fragment>
            )
        );
        return (
            <React.Fragment>
                <div style={styles.main}>
                    {storyList}
                </div>
            </React.Fragment>
        );
    }
}
const styles = {
    main: {
        display: 'inline-flex',
        alignItems: 'center',
        paddingTop: '10px',
        textAlign: 'center',
        width: '100%',
        height: '1%',
    },
    img: {
        width: 25,
        height: 25,
        borderRadius: 25,
        marginRight: 5,
        filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
        border: '2px solid rgba(255, 255, 255, 0.8)'
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))'
    },
    heading: {
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.9)'
    },
    subheading: {
        fontSize: '0.6rem',
        color: 'rgba(255, 255, 255, 0.8)'
    }
}
export default StoryList;