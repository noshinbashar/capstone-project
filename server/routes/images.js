const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/", (req, res) => {
    const imagesJSON = fs.readFileSync("./data/images.json");
    const images = JSON.parse(imagesJSON);
  
    res.status(200).send(images);
  });

 // Get selected image by ID
 router.get("/:imagesId", (req, res) => {

    const { imagesId } = req.params;
    console.log("params: ", imagesId);
  
    // Read image data from JSON file
    const imagesJSON = fs.readFileSync("./data/images.json");
    const images = JSON.parse(imagesJSON);
  
    const selectedImage = images.find(
      (imagesItem) => imagesItem.id === imagesId
    );
  
    res.status(200).send(selectedImage);
  });


  // Get comments for a selected image
router.get("/:id/comments", (req, res) => {
    const imageId = req.params.id;
  
    // Read image data from JSON file
    const imagesJSON = fs.readFileSync("./data/images.json");
    const images = JSON.parse(imagesJSON);
  
    // Find the image by ID
    const image = images.find(image => image.id === imageId);
  
    // If image is found, send its comments as response
    if (image) {
        res.status(200).json(image.comments);
    } else {
        // If image is not found, send 404 error
        res.status(404).json({ error: "Image not found" });
    }
  });

  // Post a new comment for selected image
router.post("/:imageId/comments", (req, res) => {
    const imageId = req.params.imageId;
  
    // Read image data from JSON file
    const imagesJSON = fs.readFileSync("./data/images.json");
    const images = JSON.parse(imagesJSON);
  
    // Find the image by ID
    const imageIndex = images.findIndex(image => image.id === imageId);
  
    // If image is found, create a new comment
    if (imageIndex !== -1) {
      const newComment = {
        id: uuidv4(),
        name: req.body.name, 
        comment: req.body.comment, 
        likes: 0,
        timestamp: Date.now()
      };
      
      images[imageIndex].comments.push(newComment);
  
      // Write updated image data back to JSON file
      fs.writeFileSync("./data/images.json", JSON.stringify(images));
  
      res.status(201).json(newComment);
    } else {
      // If image is not found, send 404 error
      res.status(404).json({ error: "image not found" });
    }
  });


// Delete a comment for selected image
router.delete("/:imageId/comments/:commentId", (req, res) => {
    const imageId = req.params.imageId;
    const commentId = req.params.commentId;
  
    // Read image data from JSON file
    const imagesJSON = fs.readFileSync("./data/images.json");
    let images = JSON.parse(imagesJSON);
  
    // Find the image by ID
    const imageIndex = images.findIndex(image => image.id === imageId);
  
    // If image is found, find the comment by its ID and delete it
    if (imageIndex !== -1) {
      const commentIndex = images[imageIndex].comments.findIndex(comment => comment.id === commentId);
      if (commentIndex !== -1) {
        images[imageIndex].comments.splice(commentIndex, 1);
        
        // Write updated image data back to JSON file
        fs.writeFileSync("./data/images.json", JSON.stringify(images));
  
        res.status(204).send(); // No content
      } 
    } 
  
  });
  

  module.exports = router;
