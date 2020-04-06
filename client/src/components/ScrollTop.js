import React, { Component } from 'react';

  
class ScrollButton extends Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <button title='Back to top' className='scroll' 
                 onClick={ () => { this.scrollToTop(); }}>
                  Back to top
                </button>;
    }
} 
  
class ScrollApp extends Component {
    render () {
      return <div className="long">
                <ScrollButton scrollStepInPx="90" delayInMs="16.66"/>
             </div>
    }
}

export default ScrollApp;