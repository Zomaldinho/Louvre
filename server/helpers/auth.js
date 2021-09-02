exports.checkUserIsAdmin = (userRole) => {
  if (userRole !== 'Admin') {
    const error = new Error('Only Admin users have access to this endpoint');
    error.statusCode = 401;
    throw error;
  }
}