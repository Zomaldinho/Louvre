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

export const deleteConfirmation = async() => {
  return await Swal.fire({
    title: 'Are you sure you want to delete this?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  })
}

export const deletionSuccessfulMessage = () => {
  return Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Item is successfully deleted',
    showConfirmButton: false,
    timer: 2000
  })
}