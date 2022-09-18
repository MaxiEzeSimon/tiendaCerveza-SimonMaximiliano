export const getItem = (productos) => {
    return new Promise ((resolve, rejected) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}