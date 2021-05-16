import React from 'react'

export const Head = (props) => {
    React.useEffect(() => {
        document.title = props.title + ' | Dogs'
        document.querySelector("meta[name='description']")
            .setAttribute('content', props.description || '')
    })
    return (
        <></>
    )
}
