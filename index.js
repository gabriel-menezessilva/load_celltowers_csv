const pool = require('./db');
const fs = require('fs');
const fastCsv = require('fast-csv');

const stream = fs.createReadStream('./cell_towers.csv');
const csvData = [];
let counter = 0;

const csvStream = fastCsv.parse().on("data", (data) => {
    if (counter !== 0) {
        const query = "INSERT INTO cell_towers (radio, mcc, net, area, cell, unit, lon, lat, range, samples, changeable, created, updated, averageSignal)"
            + "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)";

        pool.connect((err, client, done) => {
            if (err) throw err;
            try {
                client.query(query, data, (err, res) => {
                    if (err) {
                        console.log(err.stack);
                    } else {
                        console.log('counter: ', counter)
                        console.log("inserted " + res.rowCount + " row:", data);
                    }
                    
                });
            } finally {
                done();
            }
        });
    }
    counter++;
}).on("end", () => {

    console.log('fim');
});

stream.pipe(csvStream);