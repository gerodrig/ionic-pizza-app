import Swal from 'sweetalert2';
import { Type } from '@angular/core';

export const Success = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

export const Error = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    showDenyButton: true,
    denyButtonText: 'Ok',
    
});