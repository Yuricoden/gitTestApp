export const getDataRequested = (type) => {
    return {
        type
    };
  }
  
  export const getDataDone = (type, data) => {
    return {
      type,
      payload: data
    };
  }
  
  export const getDataFailed = (type) => {
    return {
      type
    };
  }

  