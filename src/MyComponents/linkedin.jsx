export default function linkedin() {
    return (
        <>


            <div className="container-fluid">

                <div className="row">
                    <div className="col-12 d-flex m-5 justify-content-center align-items-center" >
                        <div className=" d-flex row lh-lg">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="text-primary fs-1 fw-bolder me-5 ms-5">linkedin</div><br />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <div className="fs-5">Connect with friends and the world aound you on Facebook.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <form>
                            <div className="form-group">
                                <label for="email">Email address:</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" className="form-control" id="pwd" />
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" /> Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}