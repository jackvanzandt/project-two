export default async function handler(request, res) {
  var searchInput = request.body.searchString;

  const badge = [
    {
      badgeCreator: "Steve",
      badgeMajor: "Compsci",
      badgeName: "IST",
    },
    {
      badgeCreator: "Joe",
      badgeMajor: "Econ",
      badgeName: "Economic Events",
    },
  ];
  
  let filteredData = badge.filter(
    (value) =>
      JSON.parse(value).name.toLowerCase().includes(searchInput.toLowerCase()) 
  );
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(filteredData);
}
