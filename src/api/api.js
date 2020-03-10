import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY" : '6a5736af-0417-418e-b9bb-87da189b1883'
  } 
})


export const authAPI = {
  me(){
    return instance.get('auth/me').then(response =>{
      return response
    })
  },
  logout(){
    return instance.delete('auth/login').then(response =>{
      return response
    })
  },
  login(data){
    return instance.post('auth/login',data);
  }
}

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>{
      return response.data
    })
  },
  follow(userId){
    return instance.post(`follow/${userId}`).then(response =>{
    debugger
      return response.data.resultCode
    })
  },
  unfollow(userId){
    return instance.delete(`follow/${userId}`).then(response =>{
      return response.data.resultCode
    })
  },
}

export const profileAPI ={
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then( response => {
      return response
    })
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response =>{
      return response.data
    })
  },
  updateStatus(status){
    return instance.put('profile/status', {status})
  }
}