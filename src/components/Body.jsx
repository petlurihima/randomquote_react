import React from 'react'

const Body = ({ newquote, quote, author,showAuthor}) => {

    return (
        <div className='container'>
            <h2>Quote of the Day</h2>
            {showAuthor && (
                <>
                    <p>{quote}</p>
                    <p><em>-{author}</em></p>
                </>
            )}
            <button onClick={newquote}>New Quote</button>
        </div>
    )
}

export default Body
