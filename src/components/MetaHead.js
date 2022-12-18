import React from 'react'

const MetaHead = ({ user }) => {
    return (
        <>
            <title>{user.companyName}</title>
            <meta name="description" content={`${user.companyName} Dijital Menu`} />
            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="noindex" />
        </>)
}

export default MetaHead