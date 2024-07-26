package com.example.moviePlayer.services;

import com.example.moviePlayer.models.Movie;
import com.example.moviePlayer.models.Review;
import com.example.moviePlayer.repositories.MovieRepository;
import com.example.moviePlayer.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String imdbId, String reviewBody) {
        Review review = reviewRepository.insert(new Review(reviewBody)); //insert review in the database

        mongoTemplate.update(Movie.class) //update movie database
                .matching(Criteria.where("imdbId").is(imdbId)) //match the imdb ids in both databases
                .apply(new Update().push("reviewIds").value(review)) //pushes the new review made into the movies array where it is "reviewIds"
                .first();

        return review;
    }

    public List<Review> getMovieReviews(String imdbId){ // return all the reviews for a specific movie
        return movieRepository.findMovieByImdbId(imdbId).get().getReviewIds();
    }
}
