import React, { Component , setState} from 'react'
import Stories from 'react-insta-stories'
import StoryList from '../src/StoryList'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pauseClicked : false,
      stories: [
        {
          url: 'https://picsum.photos/1080/1920',
          seeMore: 'Detaylı Bak',
          seeMoreText: 'AWDAWDAWD',
          header:
          {
            heading: 'Batuhan Yahşi',
            subheading: 'Posted 1m ago',
            profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
          }
        },
        {
          url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
          header:
          {
            heading: 'Batuhan Yahşi',
            subheading: 'Posted 32m ago',
            profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
          },
          seeMore: 'Detaylı Bak',
          seeMoreText: 'ASDASDAWD'
        },
        {
          url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
          header:
          {
            heading: 'Batuhan Yahşi',
            subheading: 'Posted 32m ago',
            profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
          },
          seeMore: 'Detaylı Bak',
          seeMoreText: 'DAHA FAZLA GÖR'
        },
        {
          url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
          type: 'video',
          duration: 1000,
          seeMore: 'Detaylı Bak',
          seeMoreText: 'DAHA FAZLA GÖR',
          header:
          {
            heading: 'Batuhan Yahşi',
            subheading: 'Posted 34m ago',
            profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
          }
        },
        {
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
          type: 'video',
          seeMore: 'Detaylı Bak',
          seeMoreText: 'DAHA FAZLA GÖR',
          header:
          {
            heading: 'Batuhan Yahşi',
            subheading: 'Posted 36m ago',
            profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
          }
        },
        {
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          type: 'video',
          seeMore: 'Detaylı Bak',
          seeMoreText: 'DAHA FAZLA GÖR',
          header:
          {
            heading: 'Batuhan Yahşi',
            subheading: 'Posted 45m ago',
            profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
          },
        },
        'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
        'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1499202189329-5d76e29aa2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80'
      ].map((s, i) => {
        if (i !== 4 && i !== 5) {
          if (typeof s === 'string') {
            let o = {}
            o.url = s
            o.header = {
              heading: 'Unknown',
              subheading: 'Unknown',
              profileImage: 'http://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg'
            }
            o.styles = {
              objectFit: 'cover',
              width: '100%', margin: 'none'
            }
            return o
          }
          s.styles = {
            objectFit: 'cover',
            width: '100%', margin: 'none'
          }
          return s
        } else return s
      })
    }
    this.stories = React.createRef();
    this.col = React.createRef();
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  play = () => {
    this.stories.current.play();
    this.setState({pauseClicked: false});
  }
  pause = () => {
    this.stories.current.pause();
    this.setState({pauseClicked: true});
  }
  prev = () => {
    this.stories.current.previous();
  }
  next = () => {
    this.stories.current.next();
  }
  reverse = () => {
    this.setState({stories: this.state.stories.reverse()});
  }
  storySelectedHandler = (el,i) => {
    // let temp = Object.assign([],this.state.stories);
    //this.setState({stories : temp.splice(i,0,el)});
  }
  handleScroll = () => {
    if (this.col.clientHeight - window.pageYOffset > 0) {
      if(!this.state.pauseClicked){
        this.play();
      }
    }
    else{
      this.pause();
    }
  }
  render() {
    return (
      <React.Fragment>
        <div style={{paddingLeft: '1%',paddingRight: '1%',paddingBottom: '0.5%', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        <StoryList stories={this.state.stories} storySelected={(el,i) => this.storySelectedHandler(el,i)} />
        </div>
      <div className="App">
        
        <div style={{textAlign:"center !important"}}>
          
        <div className="stories" onScroll={this.handleScroll} ref={(col) => {this.col = col}}>
          <Stories ref={this.stories} stories={this.state.stories} defaultDuration={3000} />
          <div style={{ textAlign: 'center' }}>
            <button onClick={this.pause}>Duraklat</button>
            <button onClick={this.play}>Başlat</button>
            <button onClick={this.prev}> <span> {"<"} </span> </button>
            {"|"}
            <button onClick={this.next}><span>{">"}</span></button>
            <button onClick={this.reverse}><span>{"reverse flow"}</span></button>
          </div>
        </div>
        </div>
      </div >
      <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus nunc eleifend ipsum euismod, eget mollis felis tincidunt. Aliquam venenatis quam justo, at blandit ante rhoncus sed. Quisque fermentum posuere est, in gravida purus euismod a. Vestibulum volutpat cursus libero, quis gravida diam sagittis a. Aenean elementum purus dui, at tincidunt dolor blandit at. Aliquam sit amet dictum justo, eu ultricies magna. Nunc viverra gravida felis, eleifend lobortis ex ornare vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non magna vitae sem congue gravida eget quis erat. Sed eu metus pulvinar, efficitur enim at, vestibulum diam.

Sed id ex fringilla, facilisis lacus ut, vestibulum eros. Curabitur quis eros lacinia, vestibulum justo vitae, hendrerit dui. Mauris vel malesuada purus. Sed posuere rutrum augue et fermentum. Nullam aliquet luctus hendrerit. Nunc porta elit leo, ut facilisis leo faucibus et. Quisque dictum lobortis mi nec semper. Duis ac vestibulum ante sed.
      
      </p>
    </div>
    </React.Fragment>
    )
  }
}

const stories = [
  {
    url: 'https://picsum.photos/1080/1920',
    seeMore: 'Detaylı Bak',
    seeMoreText: 'AWDAWDAWD',
    header:
    {
      heading: 'Batuhan Yahşi',
      subheading: 'Posted 1m ago',
      profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
    }
  },
  {
    url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
    header:
    {
      heading: 'Batuhan Yahşi',
      subheading: 'Posted 32m ago',
      profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
    },
    seeMore: 'Detaylı Bak',
    seeMoreText: 'ASDASDAWD'
  },
  {
    url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
    header:
    {
      heading: 'Batuhan Yahşi',
      subheading: 'Posted 32m ago',
      profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
    },
    seeMore: 'Detaylı Bak',
    seeMoreText: 'DAHA FAZLA GÖR'
  },
  {
    url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
    type: 'video',
    duration: 1000,
    seeMore: 'Detaylı Bak',
    seeMoreText: 'DAHA FAZLA GÖR',
    header:
    {
      heading: 'Batuhan Yahşi',
      subheading: 'Posted 34m ago',
      profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
    }
  },
  {
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    type: 'video',
    seeMore: 'Detaylı Bak',
    seeMoreText: 'DAHA FAZLA GÖR',
    header:
    {
      heading: 'Batuhan Yahşi',
      subheading: 'Posted 36m ago',
      profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
    }
  },
  {
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    type: 'video',
    seeMore: 'Detaylı Bak',
    seeMoreText: 'DAHA FAZLA GÖR',
    header:
    {
      heading: 'Batuhan Yahşi',
      subheading: 'Posted 45m ago',
      profileImage: 'https://avatars2.githubusercontent.com/u/17345531?s=460'
    },
  },
  'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
  'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1499202189329-5d76e29aa2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80'
].map((s, i) => {
  if (i !== 4 && i !== 5) {
    if (typeof s === 'string') {
      let o = {}
      o.url = s
      o.header = {
        heading: 'Unknown',
        subheading: 'Unknown',
        profileImage: 'http://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg'
      }
      o.styles = {
        objectFit: 'cover',
        width: '100%', margin: 'none'
      }
      return o
    }
    s.styles = {
      objectFit: 'cover',
      width: '100%', margin: 'none'
    }
    return s
  } else return s
})
