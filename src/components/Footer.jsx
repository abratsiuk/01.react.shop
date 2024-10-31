import React from 'react';

function Footer() {
    return (
        <footer className='page-footer light-blue lighten-3'>
            <div className='footer-copyright light-blue accent-4'>
                <div className='container'>
                    <span className='brown-text text-darken-4'>
                        © {new Date().getFullYear()} abratsiuk
                    </span>
                    <a
                        className='brown-text text-darken-4 right'
                        href='https://github.com/abratsiuk/01.react.shop'
                        target='_blank'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
