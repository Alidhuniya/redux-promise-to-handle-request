

export const getPosts = () => {
    const endpoint = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    const request = fetch(endpoint)
    .then(result => result.json())
    .then(result => {
        return result
    })
    .catch(error => console.error("Error", error));

    return {
        type: "GET_POSTS",
        payload: request
    }
}
