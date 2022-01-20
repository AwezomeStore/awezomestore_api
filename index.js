"use strict";

const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./environment/.env.${env}` });

const cors = require("cors");

const { stitchSchemas } = require("@graphql-tools/stitch");
const express = require("express");
const gqlMiddleware = require("express-graphql");

const ProductSchema = require('./src/microservices/product');
const PaymentSchema = require('./src/microservices/awezomestore_payment_ms');
const SupportSchema = require('./src/microservices/support');
const SessionSchema = require('./src/microservices/awezomestore_session_ms');
const ShippingSchema = require('./src/microservices/awezomestore_shipping_ms');

const schema = stitchSchemas({
  subschemas: [
    { schema: ProductSchema, batch: true },
    { schema: PaymentSchema, batch: true },
    { schema: SupportSchema, batch: true },
    { schema: SessionSchema, batch: true },
    { schema: ShippingSchema, batch: true },
  ],
});

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(
  "/api",
  gqlMiddleware({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
