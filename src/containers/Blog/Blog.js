import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, Link } from 'react-router-dom';

class Blog extends Component {   

    render () {   
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            {/* As <a> tag always reload the page which lose the state, 
                                so react has a special component i.e, Link  */}
                            <li><Link to='/'>Home</Link></li>
                            {/* to can be a complex element that can be js object, can be a dynamic content
                                for example */}
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" render={() => <h1>Home</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;