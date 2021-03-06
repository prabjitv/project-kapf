const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const adultRoutes = require("./adultsController");
const childRoutes = require("./childController");
const foodRoutes = require("./foodController");
const babysitterRoutes = require("./babysitterController");
const sleepRoutes = require("./sleepController");
const likeRoutes = require("./likeController");
const dislikeRoutes = require("./dislikeController");
const allergyRoutes = require("./allergyController");
const noteRoutes = require("./noteController");
const parentChildRoutes = require("./parentChildController");

// Hook up to the router
router.use("/posts", postRoutes);
router.use("/adults", adultRoutes);
router.use("/child", childRoutes);
router.use("/food", foodRoutes);
router.use("/babysitter", babysitterRoutes);
router.use("/sleep", sleepRoutes);
router.use("/like", likeRoutes);
router.use("/dislike", dislikeRoutes);
router.use("/allergy", allergyRoutes);
router.use("/note", noteRoutes);
router.use("/parentchild", parentChildRoutes)



// Export the router
module.exports = router;
