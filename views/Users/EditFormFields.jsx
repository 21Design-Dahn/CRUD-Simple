const React = require('react')

function EditFormFields(props){
  //console.log(props)
  return(
    <div className="container">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="form-control"/>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" className="form-control"/>
      </div>

      <button type="submit" className="btn btn-primary">Save</button>
      <a className="btn btn-light mr-2" href="/users">Cancel</a>
    </div>
  )
}

module.exports = EditFormFields