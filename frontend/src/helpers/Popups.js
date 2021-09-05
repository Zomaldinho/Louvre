import Swal from 'sweetalert2'

export const errorHandler = (message) => {
  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
  })
}

export const signUpSuccessfulMessage = () => {
  return Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Successfully registered',
    showConfirmButton: false,
    timer: 2000
  })
}