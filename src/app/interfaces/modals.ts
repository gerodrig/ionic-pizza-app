import Swal from 'sweetalert2';

const Success = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

const Success2 = Swal.mixin({
    //toast: true,
    position: 'center',
    showConfirmButton: true,
    confirmButtonColor: '#2dd36f'
});

const Error = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    showDenyButton: true,
    denyButtonText: 'Ok',
    
});

const Confirm = Swal.mixin({
    title: 'example text',
    confirmButtonColor: '#2dd36f'
})

const CancelOrder = Swal.mixin({
    title: 'Are you sure you want to cancel order?',
    icon: 'warning',
    confirmButtonText: 'Yes, cancel order!',
    showCancelButton: true,
    confirmButtonColor:  '#0275d8',
    cancelButtonColor: '#d33',
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    }
})


export {
    Success,
    Success2,
    Error,
    Confirm,
    CancelOrder
}