import React from 'react';
import './Courses.css';  // Import the CSS file for styling
import { Link } from 'react-router-dom';

const coursesData = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "John Doe",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5zQQfgYdauP902KBIcvqGVfUGvUT4gyCJw&s",
    rating: 4.5,
    reviews: 1200,
    price: "₹35000",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    instructor: "Sarah Smith",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavodiQWfdVcPu_jOKJotFqjWuUxRUfcFrwg&s",
    rating: 4.7,
    reviews: 950,
    price: "₹30000",
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    instructor: "James Lee",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGU09ugC8nqOLoXnAR1_KUtyUgYjbwXJLeJg&s",  // replace with your own image path
    rating: 4.9,
    reviews: 2300,
    price: "₹55000",
  },
  {
    id: 4,
    title: "Python",
    instructor: "Emily Adams",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3gIs2LZJIV_Vha30DtHfSB8WFWjOhWPSng&s",
    rating: 4.6,
    reviews: 1500,
    price: "₹45000",
  },
  {
    id: 5,
    title: "Deep Learning",
    instructor: "David Brown",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJ46l8nlkytTLPR3AWKZUgFDmryXgvDdlQg&s",
    rating: 4.8,
    reviews: 1800,
    price: "₹55000",
  },
  {
    id: 6,
    title: "UI/UX Design for Beginners",
    instructor: "Alice Johnson",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRp41j2y2jMZ5KnX2dkyRqiYgUfrCRhlUhdA&s",
    rating: 4.3,
    reviews: 900,
    price: "₹45000",
  },
];

function Courses() {
  return (
    <div className="courses-container">
      <h1 className="page-title">Courses to get you Started</h1>
      <div className="courses-grid">
        {coursesData.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.imageUrl} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-instructor">Instructor: {course.instructor}</p>
            <div className="course-rating">
              <span>{course.rating} ★</span>
              <span className="review-count">({course.reviews} reviews)</span>
            </div>
            <p className="course-price">{course.price}</p>
            <Link to="/payment"> <button className="enroll-button">Enroll Now</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
