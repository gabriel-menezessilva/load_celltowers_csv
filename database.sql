CREATE DATABASE cell_towers_database;

--\c into cell_towers

CREATE TABLE cell_towers(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    radio VARCHAR(4),
    mcc INT,
    net INT,
    area INT,
    cell INT,
    unit INT,
    lon DECIMAL,
    lat DECIMAL,
    range INT,
    samples INT,
    changeable INT,
    created INT,
    updated INT,
    averageSignal INT
);

-- INSERT INTO cell_towers (radio, mcc, net, area, cell, unit, lon, lat, range, samples, changeable, created, updated, averageSignal) VALUES (
--     'GSM', 12, 213, 213, 213, 213, 213, 12.23324, 15.4234544, 1, 124, 1234, 112412421, 1412421, 12
-- );