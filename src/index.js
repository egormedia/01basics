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
        filtered: JSON,
        footerText:'I am a happy footer'
    }

    getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        });

        this.setState({
            filtered
        });
    }

    render(){
        const {news,footerText,filtered} = this.state;

        return(
            <div className="header">
                <Header
                    keywords={this.getKeywords}
                />
                <NewsList
                    news={filtered}
                />
                <Footer footerText={this.state.footerText}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))