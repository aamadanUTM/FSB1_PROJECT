import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

//Routes
import CountryRoutes from "./routes/CountryRoutes.js";
import StatesRoutes from "./routes/StatesRoutes.js";
import CityRoutes from "./routes/CityRoutes.js";
import AreaRoutes from "./routes/AreaRoutes.js";
import neighbourRoutes from "./routes/NeighborRoutes.js";
import propertyTypesRoutes from "./routes/PropertyTypesRoutes.js";
import ProjectRoutes from "./routes/ProjectRoutes.js";
import BuildingRoutes from "./routes/BuildingRoutes.js";
import UnitRoutes from "./routes/UnitRoutes.js";
import AmenitiesRoutes from "./routes/AmenitiesRoutes.js";
import ListingAmenitiesRoutes from "./routes/ListingAmenitiesRoutes.js";
import ListingsRoutes from "./routes/ListingsRoutes.js";
import agenciesRoutes from "./routes/AgenciesRoutes.js";
import AgentsRoutes from "./routes/AgentsRoutes.js";
import MediaRoutes from "./routes/MediaRoutes.js";
import ProjectFacilitiesRoutes from "./routes/ProjectFacilitiesRoutes.js";
import ProjectMediaRoutes from "./routes/ProjectMediaRoutes.js";
import ProjectPropertyTypesRoutes from "./routes/ProjectPropertyTypesRoutes.js";
import ListingMediaRoutes from "./routes/ListingMediaRoutes.js";
import UserAuthRoutes from "./routes/UserAuthRoutes.js";
import AuthRoute from "./routes/AuthRoute.js";

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use("/", CountryRoutes);
app.use("/state", StatesRoutes);
app.use("/city", CityRoutes);
app.use("/area", AreaRoutes);
app.use("/neighbour", neighbourRoutes);
app.use("/property", propertyTypesRoutes);
app.use("/project", ProjectRoutes);
app.use("/building", BuildingRoutes);
app.use("/unit", UnitRoutes);
app.use("/amenities", AmenitiesRoutes);
app.use("/agencies", agenciesRoutes);
app.use("/agents", AgentsRoutes);
app.use("/listings", ListingsRoutes);
app.use("/listing_amenities", ListingAmenitiesRoutes);
app.use("/media", MediaRoutes);
app.use("/project_facilities", ProjectFacilitiesRoutes);
app.use("/project_media", ProjectMediaRoutes);
app.use("/project_property_types", ProjectPropertyTypesRoutes);
app.use("/listing_media", ListingMediaRoutes);
app.use("/users", UserAuthRoutes);
app.use("/auth", AuthRoute);

app.get("/", (req, res) => {
  res.send("Hello from FSB1 Backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
