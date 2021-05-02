import React from 'react'

export const Error = ({ error }) => {
    if (!error) return null;
    return (
        <p style={{ color: '#f31', margin: '1 rem' }}>
            {error}
        </p>
    )
}
