import React from 'react'
import PropTypes from 'prop-types'

function Post({ id, title, delPost }) {
  return (
    <div className="bg-white w-[576px] p-4 mt-4 mx-auto shadow-md">
        <button className="bg-none border-none p-0 float-right cursor-pointer" onClick={() => delPost(id)}>x</button>
        <div>{title}</div>
        <img className="w-full mt-4" src={`https://images.pexels.com/lib/api/pexels-white.png`} alt="random-img" />
    </div>
  )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  delPost: PropTypes.func.isRequired
}

export default Post