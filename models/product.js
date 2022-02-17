const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reviews: [
    {
      review: {
        type: String,
        required: true,
      },
    },
  ],
});

productSchema.methods.addReview = function (review) {
  // add a new reivew to the list of reviews
  let reviewObj = { review: review };

  const updatedReviews = [...this.reviews];

  updatedReviews.push(reviewObj);

  this.reviews = updatedReviews;

  return this.save();
};

module.exports = mongoose.model('Product', productSchema);
