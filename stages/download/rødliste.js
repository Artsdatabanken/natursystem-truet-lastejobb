const { http } = require("lastejobb");

const url = "https://artsdatabanken.no/RLN2018/api/export/csv";
http.downloadBinary(url, "rødliste.csv");
