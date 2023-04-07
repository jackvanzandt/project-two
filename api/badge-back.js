export default async function handler(request, res) {
  var searchInput = request.body.searchString;

  const badge = [
    {
      "name": "Badge Thing",
      "creator": "Steve",
      "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
      "department": "IST"
    },
    {
      "name": "Badge stuff",
      "creator": "Donnald J. Trump",
      "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
      "department": "Political Science"
      
    },
    
    {
      "name": "Hungry asf",
      "creator": "Caleb Pellerite",
      "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
      "department": "Food"
    },
    {
      "name": "??????",
      "creator": "someone",
      "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
      "department": "We dont know"
    },
    
  ];
  
  let filteredData = badge.filter(
    (value) =>
    value["name"].toLowerCase().includes(searchInput.toLowerCase()) || 
    value["creator"].toLowerCase().includes(searchInput.toLowerCase()) ||
    value["department"].toLowerCase().includes(searchInput.toLowerCase())
  );


  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(filteredData);

  console.log(filteredData);
}
