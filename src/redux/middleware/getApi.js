const getApi = (store) => (next) => async (action) => {
 if(!action.CallApi) next(action);

 const {CallApi} = action;

 try {
  const res = await fetch(CallApi, { mode: 'no-cors'});
  console.log(res)
  const data = await res.json();
  console.log(data);
 } catch (error) {
  console.log(error)
 }
}

export default getApi
