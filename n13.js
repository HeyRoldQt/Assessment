db.collection.updateOne(
  {
    "_id": ObjectId("56902f7f31de51cdcfc03f07"),
    "items.name": "Apple"
  },
  {
    $inc: { "items.$.count": 1 }
  }
);
