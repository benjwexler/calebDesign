let myObject = {
    "name":"Kris Zyp",
    "id":"kriszyp",
    "children":[{"id":"jennikazyp", "name":"Jennika Zyp"}],
    "spouse":{
        "name":"Nicole Zyp",
        "spouse":{"$ref":"kriszyp"},
        "children":[{"$ref":"jennikazyp"}]
    }
  }

  myJsonString = dojox.json.ref.toJson(myObject);
  myObject = dojox.json.ref.fromJson(myJsonString);