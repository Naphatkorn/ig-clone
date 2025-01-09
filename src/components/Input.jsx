import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Input({ addPost }) {
  const [input, setInput] = useState('');

  function onChange(event) {
    const title = event.target.value;
    setInput(title);
  }

  function onKeyDown(event) {
    const title = event.target.value;
    if (event.key === 'Enter' && title) {
      addPost(title);
      setInput('');
    }
  }

  return (
    <div className="bg-white w-[576px] mt-4 mx-auto rounded-md shadow-md">
      <div className="bg-[#f3f5f6] p-4">Create Post</div>
      <input
        className="w-full h-24 p-4 text-xl border-none focus:outline-none"
        type="text"
        placeholder="here"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}

Input.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default Input