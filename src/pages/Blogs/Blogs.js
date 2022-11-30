import React from 'react';

const Blogs = () => {
    return (
        <div className='mb-44'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl mb-4">All questions answered </h2>

                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> What are the different ways to manage a state in a React application</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Different ways to manage state in React applications · URL · Web Storage · Local State · Lifted State · Derived State.</p>
                        </details>

                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does prototypical inheritance work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.  the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties</p>


                        </details>

                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> What is a unit test? Why should we write unit tests?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages </p>
                        </details>

                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">React vs. Angular vs. Vue?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Angular is written in TypeScript, which means you need some time to learn it to work with this framework.

                                React uses JSX and native Javascript developers are familiar with it. The training period is easier and does not require that much preparation.

                                Vue.js makes use of an HTML-based template syntax that allows you to link the displayed DOM to the data of the base element instance declaratively. All Vue.js templates are valid HTML that can be read by HTML analyzers and browsers that follow the standard. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;