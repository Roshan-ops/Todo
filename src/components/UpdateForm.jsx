import Button from 'react-bootstrap/Button';

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(
      <>
        {/* Update Task */}
        <div className="row">
          <div className="col">
            <input 
              value={ updateData && updateData.title }
              onChange={ (e) => changeTask(e)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <Button
              onClick={updateTask}
              className="btn btn-lg btn-success mr-20"
            >Update</Button>
            <Button
              onClick={cancelUpdate}
              className="btn btn-lg btn-warning"
            >Cancel</Button>
          </div>
        </div>
        <br />  
      </>
    )
  }
  
  export default UpdateForm;