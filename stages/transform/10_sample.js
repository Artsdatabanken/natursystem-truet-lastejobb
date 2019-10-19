const { csv, io } = require("lastejobb");

const options = {
  from_line: 2,
  delimiter: "\t",
  quote: '"'
};

const src = csv.les("data/rødliste.csv", options, { encoding: "utf16le" });
io.skrivDatafil(__filename, src);
