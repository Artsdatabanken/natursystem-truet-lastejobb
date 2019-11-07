const { http } = require("lastejobb");

http.downloadBinary(
  "https://artsdatabanken.no/RLN2018/api/export/csv",
  "truet.csv"
);
