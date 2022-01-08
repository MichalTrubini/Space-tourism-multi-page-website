import React, { Component } from 'react';

class MainHome extends React.Component {
    render() { 
        return <>

                <main className="main">
                    <section className="intro">
                        <p className="intro__subtitle">
                            So, you want to travel to
                        </p>
                        <h1 className="intro__heading">
                            Space
                        </h1>
                        <p className="intro__about">
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </section>
                    <div className="explore">
                        <p>Explore</p>
                    </div>
                </main>
               </>;
    }
}
 
export default MainHome;