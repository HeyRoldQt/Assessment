db.posts.aggregate([
  {
    $group: {
      _id: {
        year: { $year: { $toDate: "$timestamp" } },
        month: { $month: { $toDate: "$timestamp" } },
        day: { $dayOfMonth: { $toDate: "$timestamp" } },
      },
      totalLikes: { $sum: "$likes" },
      count: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      date: {
        year: "$_id.year",
        month: "$_id.month",
        day: "$_id.day",
      },
      totalLikes: 1,
      averageLikes: { $divide: ["$totalLikes", "$count"] },
    },
  },
]);
