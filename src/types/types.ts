export type PostsType = {
    author: string,
    text: string,
    like: number,
    id: number
}
export type ProfileType ={
    userId: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactType,
    photos: PhotosType
}
export type ContactType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
export type PhotosType = {
    small: string,
    large: string
}
export type UserType = {
    id: number,
    name: string,
    status: null | string,
    photos: PhotosType,
    followed: boolean
}