import Swal from 'sweetalert2'

export const errorHandler = (message) => {
  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
  })
}