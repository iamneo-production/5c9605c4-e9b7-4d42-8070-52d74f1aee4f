import React from 'react'

function Booking() {
  return (
    <div class="wrapper bg-white">
    <form action="#">
        <div><h2>Booking Details</h2></div>
        <div class="form-group d-sm-flex margin">
            <div class="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative"> <input type="text" required placeholder="Busname" class="form-control"/>
                <div class="label" id="busname"></div> <span class="fas fa-dot-circle text-muted"></span>
            </div>
           
        </div>
        <div class="form-group d-sm-flex margin">
            <div class="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative"> <input type="date" required placeholder="From Date" class="form-control"/>
                <div class="label" id="from"></div>
            </div>
            
        </div>
        <div class="form-group d-sm-flex margin">
           <div class="form-group border-bottom d-flex align-items-center position-relative"> <input type="text" required placeholder="From place" class="form-control"/>
            <div class="label" id="fromplace"></div> <span class="fas fa-users text-muted"></span>
           </div>
           <div class="form-group border-bottom d-flex align-items-center position-relative"> <input type="text" required placeholder="To place" class="form-control"/>
            <div class="label" id="toplace"></div> <span class="fas fa-users text-muted"></span>
           </div>
        </div>
        <div class="form-group d-sm-flex margin">
           <div class="form-group border-bottom d-flex align-items-center position-relative"> <input type="text" required placeholder="Number of persons" class="form-control"/>
            <div class="label" id="person"></div> <span class="fas fa-users text-muted"></span>
           </div>
           <div class="form-group border-bottom d-flex align-items-center position-relative"> <input type="text" required placeholder="Total Price" class="form-control"/>
            <div class="label" id="price"></div> <span class="fas fa-users text-muted"></span>
           </div>
        </div>
        <div class="form-group my-3">
            <div class="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">Book </div>
        </div>
    </form>
</div>
  )
}

export default Booking