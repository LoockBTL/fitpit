const createPostParams = (data) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

const getApi = (store) => (next) => async (action) => {
 if(!action.CallApi) next(action);

 const {CallApi, postData} = action;

 try {
  const params = postData ? createPostParams(postData) : {};

  const res = await fetch(CallApi, params);
  const data = await res.json();
  console.log(data);
  next({...action, data})
 } catch (error) {
  console.log(error)
  next(action)
 }
}

export default getApi
