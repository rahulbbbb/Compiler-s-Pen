function HomePage(){
    const testimonials = [
        {
          id: 1,
          name: "Rajesh Patel",
          testimonial: "The Compiler's Pen has been an invaluable resource for me as a programmer. The articles are well-written, insightful, and cover a wide range of programming languages. Highly recommended!",
        },
        {
          id: 2,
          name: "David Wilson",
          testimonial: "I stumbled upon The Compiler's Pen and instantly fell in love with the content. It has helped me expand my knowledge and stay updated with the latest trends in programming. Keep up the great work!",
        },
        {
          id: 3,
          name: "Priya Gupta",
          testimonial: "As someone new to programming, I found The Compiler's Pen to be an excellent learning companion. The tutorials are beginner-friendly, and the explanations are clear and concise. Thank you for making programming accessible to everyone!",
        },
      ];
    return(
    <>
    <div className="homepage">
      <h1>Welcome to The Compiler's Pen</h1>
      <p className="homepage-paragraph">
        Here, the power of words meets the realm of programming. Join us on a journey through 
        the intricacies of coding languages, exploring their nuances, best practices, and 
        innovative applications.
        <br/><br/>
        With each stroke of our digital pen, we unravel the mysteries of software development,
        sharing insightful articles, tutorials, and thought-provoking insights.
        <br/><br/>
        Whether you're a seasoned programmer seeking inspiration or a curious novice eager to 
        dive into the world of code, The Compiler's Pen is your gateway to discover the artistry
        and logic behind the lines of programming languages. Join us as we delve into the depths
        of syntax, algorithms, and beyond, crafting a narrative that empowers and engages 
        the programmer within you.
      </p>
    </div>

    <div className="testimonials">
        <h3>What Our Readers Say</h3>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    
    
    </>
)};

export default HomePage;