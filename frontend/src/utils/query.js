export const userQuery = (userId) => {
     const query = `*[ _type == "user" && _id == '${userId}']`
     return query
}

export const dataQuery = (bioId) => {
     const query = `*[ _type == "profile" && _id == '${bioId}']`
     return query
}



export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    return userInfo;
}