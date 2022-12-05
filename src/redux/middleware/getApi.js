const createParams = (paramsData) => ({
  method: paramsData.method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(paramsData.body),
});

const getApi = (store) => (next) => async (action) => {
 if(!action.CallApi) return next(action);

 const {CallApi, paramsData} = action;

 try {
  const params = paramsData ? createParams(paramsData) : {};

  const res = await fetch(CallApi, params);
  const data = await res.json();

  next({...action, data})
 } catch (error) {
  next(action)
 }
}

export default getApi
