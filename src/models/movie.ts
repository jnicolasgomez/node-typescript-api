import dbConnect from "../config/postgres"



export async function selectTable() {
  const client = dbConnect();
  (await client).query('SELECT * FROM user')
  .then(async (response: { rows: any; }) => {
      console.log(response.rows);
      ;(await client).end()
  })
  .catch(async (err: any) => {
      console.log('catch err');
      console.log(err);
      (await client).end()
  })
  // throw new Error("Function not implemented.")
}

