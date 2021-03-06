import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='row container mx-auto mb-5'>
            <div className='col-md-12'>
                <h3 className='text-center mt-5 mb-4' style={{ color: '#1DACBF' }}>Blogs</h3>
                <article>
                    <h4 style={{ color: '#1DACBF' }}>What is Context-API and purpose for using it ?</h4>
                    <p>Context API is a react structure which allows passing data from one component to another component without props drilling. The purpose of using context api avoids props drilling in react application. Now I am explaining: First of all we have to know about components. Conceptually components are javascript functions. Using props data can transfer from one component to another component. When our react application becomes too large that time it becomes difficult to manage the application. To make the application easier to manage , we break it down into smaller sections called components. It has one of the biggest features called reusability. Now let’s discuss props drilling. We know that the React data flow system is unidirectional. When we need to pass data from one component to another component of a tree we need to use the prop drilling process. In this process, props are passed from one component to another component that does not need the data but only helps in passing it through the tree. It’s called prop drilling. Because of props, drilling components are re-rendered excessively, which slows down the application performance.  And component re-rendering is especially damaging when developers need components to communicate with each other in a process known as prop drilling. But the context-api provides a scope that we do not need to props drilling when data passes one component to another component . We can pass the data directly Initial destination to final destination without multiple component re-rendering which component data passing should not necessary. That is why we should avoid prop drilling, And the context API will help us to get rid of this problem.Now it is clear that to avoid the props drilling, the context-api is used in react application.</p>
                </article>
            </div>
            <div className='col-md-12'>
                <article>
                    <h4 style={{ color: '#1DACBF' }}>What do you mean by semantic tag? Give Examples.
                    </h4>
                    <p>In any language, it is essential to understand the meaning of words during communication. And if this is computer communication then it becomes more critical. So HTML5 provides more semantic elements which make easy understanding of the code.The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.</p>
                    <strong>Some semantic tag Examples: </strong>
                    <li><strong>header:</strong> Defines a header for a web page.</li>
                    <li><strong>section:</strong> defines a section in a web page.</li>
                    <li><strong>article:</strong>This element contains the main part, containing information about the web page.</li>
                    <li><strong>aside:</strong> Sidebar in a document.</li>
                    <li><strong>footer:</strong> footer for a document.</li>
                </article>
            </div>
            <div className='col-md-12'>
                <article>
                    <h4 className='mt-4' style={{ color: '#1DACBF' }}>Difference between inline, block and inline-block elements.
                    </h4>
                    <p></p>
                    <strong>Inline:</strong>
                    <li>No width and height</li>
                    <li>No margin top and bottom</li>
                    <li>I has only margin left and margin right</li>
                    <strong>Block:</strong>
                    <li>I has width and height</li>
                    <li>It has margin</li>
                    <li>If we force, it can be behave as inline elements</li>
                    <strong>Inline-Block:</strong>
                    <li>Used for creating inline elements to block elements</li>
                </article>
            </div>
        </div>
    );
};

export default Blogs;