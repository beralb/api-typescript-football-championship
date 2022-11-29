const loginUser = {
  "email": "admin@admin.com",
  "password": "secret_admin"
}

const token = {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc"
}

const returnServiceMock = {
  status: 200,
  message: token
}

module.exports = {
  loginUser,
  token,
  returnServiceMock,
}