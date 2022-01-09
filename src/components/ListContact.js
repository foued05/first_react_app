import React from 'react'

function ListContact({env}) {
    console.log(env)
    return (
        <>
            {
                env.map((item, index) => (
                    <React.Fragment key={index}>
                        <tr>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                        </tr>
                    </React.Fragment>
                ))
            }
        </>
    )
}

export default ListContact
