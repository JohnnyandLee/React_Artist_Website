import './index.css'

const Endpoint = ({endPointObj, endPoints, showModal, controlModal}) => {

   return (
            <div className={`modal fade ${showModal ? 'show' : ''}`} id="popup" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <div className="d-flex align-items-center">
                            <img alt="" src={endPointObj.img} width="70"/>
                            <div className="ms-3">
                                <p id="popupTitle">{endPointObj.name}</p>
                                <p id="popupSub">{endPointObj.year}</p>
                            </div>
                        </div>
                        <button type="button" class="btn-close" onClick={() => controlModal(false)}></button>
                    </div>

                    <div className="modal-body">
                        <div className="container text-center">
                            <div className="row gy-2">
                        {
                            endPoints.map((endPointObj) => {
                                return (
                                        <div className="col-lg-4 col-md-6" key={endPointObj.img}>
                                        <div className="card20 h-100 d-flex inihide" id="finalcard1">
                                            <img alt="" id="finalImg1" src={endPointObj.img}/>
                                            <div className="mt-auto">
                                                <p id="artname1">{endPointObj.artname}</p>             
                                            </div>
                                        </div>
                                        </div>
                                )
                            })
                        }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
   )
}

export default Endpoint