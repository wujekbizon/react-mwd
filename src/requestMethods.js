import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/api/';
// const TOKEN = JSON.parse(
//   JSON.parse(localStorage.getItem('persist:root'))?.user || '{}'
// )?.currentUser?.accessToken;

// const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTFmMmFlZDhlYzY0MzMwNDcwZjkxYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTc5OTYwMSwiZXhwIjoxNjU2MDU4ODAxfQ.fNdCsWU-Fb24AX3V4l_KfpNjAbo9B34Up68DNpjpPpw';
//currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: 'https://adminpanelmwd.herokuapp.com/api/',
});

export const userRequest = axios.create({
  baseURL: 'https://adminpanelmwd.herokuapp.com/api/',
  headers: { token: `Bearer ${TOKEN}` },
});
