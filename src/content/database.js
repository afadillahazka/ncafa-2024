const response = await fetch(
    "https://data.jetadmin.app/projects/inncafa/prod/googlesheets_fyr8/models/database_ti",
    {
      headers: {
        Authorization: 'Bearer q1ZPkHTDtpqjsmyyspYZ4B2ZK0nq0rqwliw4mCwT',
      },
    }
  );
  
const data = await response.json();
const journalpartnersDB = data.results;

export default journalpartnersDB
