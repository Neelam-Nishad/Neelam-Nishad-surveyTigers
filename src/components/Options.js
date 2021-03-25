
const Options = ({addOptions, deleteOptions, uid, updatedOptionText}) => {
    return(
        <>
            <div className="col-md-8 offset-md-2 col-12 input-group my-3">
                <input type="text" className="form-control" placeholder="Option Text" onChange={event => {updatedOptionText(uid, event.target.value)}}/>
                <div className="btn-group" role="group">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => {addOptions()}}>+</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={() => {deleteOptions()}}>-</button>
                </div>
            </div>
        </>
    )
}

export default Options;