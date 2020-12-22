import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//import a component
import Header from './components/header';
import NewsList from './components/news-list';
import Footer from './components/footer';


//create a component and capitalize it
//here is an example of a simple component with a div and h1.
class App extends Component {

    state = {
        news: JSON,
        footerText:'I am a happy footer'
    }

    getKeywords = () => {
        console.log('hey')
    }

    render(){

        return(
            <div className="header">
                <Header
                    keywords={this.getKeywords}
                />
                <NewsList
                    news={this.state.news}
                />
                <Footer footerText={this.state.footerText}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))