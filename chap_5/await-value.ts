function promiseWithValues(): Promise<string[]> {
  return new Promise<string[]>(
    (resolve: (values: string[]) => void, reject: (error: string) => void) => {
      resolve(["first", "two"]);
    }
  );
}

async function getValuesFromPromise(){
  let values = await promiseWithValues();
  for (let value of values) {
    console.log(`value : ${value}`)
  }
}

getValuesFromPromise()