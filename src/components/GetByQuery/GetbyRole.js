import React from 'react'

const GetbyRole = () => {
  return (
    <form>
        <div>
            <label htmlFor='firstname'>First Name</label>
            <input type='text' id='firstname' />
            <label htmlFor='lastname'>Last Name</label>
            <input type='text' id='lastname' />
        </div>
        <div>
            <label htmlFor="location">Location</label>
            <select id='location'>
                <option value="">Select a country</option>
                <option value="Chennai">Chennai</option>
                <option value="Banglore">Banglore</option>
                <option value="Kochi">Kochi</option>
            </select>
        </div>
        <div>
            <label htmlFor='terms'>I agree</label>
            <input type='checkbox' id='terms' />
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default GetbyRole