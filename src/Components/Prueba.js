import React from 'react'

export default function Prueba() {
    return (
        <div>
            <section>
                {/*<ParallaxProvider>*/}
                <div className="App">
                    <div style={{ transform: `translateY(${offSetY * 0.5 }px)` }} />
                    <header className="App-header" style={{ transform: `translateY(${offSetY * 0.5 }px)` }}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    </header>

                    <div style={{ transform: `translateY(${offSetY * 0.8 }px)` }}>
                    <h1>SA</h1>
                    <h1>Banner Children</h1>
                    </div>

                    <header className="App-header" style={{ transform: `translateY(${offSetY * 0.7 }px)` }}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    </header>
                </div>

                {/*<Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                    <h1>SA</h1>
                    </Parallax>*/}

                {/*<ParallaxBanner
                    className="your-class"
                    layers={[
                        {
                            image: 'https://foo.com/foo.jpg',
                            amount: 0.1,
                        },
                        {
                            image: 'https://foo.com/bar.png',
                            amount: 0.2,
                        },
                    ]}
                    style={{
                        height: '500px',
                    }}
                    >
                    <h1>Banner Children</h1>
                    </ParallaxBanner>}
                {/*</ParallaxProvider>*/}
            </section>
        </div>
    )
}
