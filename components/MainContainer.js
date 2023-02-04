import React from 'react';
import A from './A';
import {Head} from 'next/document';

const MainContainer = ({children, keywords}) => {
    return (
        <>
{/*            <Head>
                <meta keywords={"key word1, key word2" + keywords}></meta>
                <title>Main page</title>
            </Head>*/}
            <div className="navbar">
                <A href={'/'} text={'Main Page'}/>
                <A href={'/users'} text={'Users'}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                .navbar {
                    background: orange;
                    padding: 15px
                }
            `}
            </style>
        </>
    );
};

export default MainContainer;
