function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve({ status: 200, body: 'Success'});
    }
    else {
      resolve({ new Error: The fake API is noot working currently});
    }
  });
}
