import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import '../css/code.css'
const CodeDisplay = () => {
  const code = 
  ` class My_Details:

  # I am a dedicated individual who consistently 
  # puts in diligent effort to achieve my goals. 
  # Additionally, my creative mindset allows me to approach challenges 
  # with innovative and imaginative solutions.

  def __init__(self):
      self.name = "Anurag C Betageri"
      self.age = 22
      self.education = {

          "underGraduation": {

              "University":     "Reva University, Bangalore, India",
              "Course/Board":   "B Tech Computer Science",
              "year":    "2024"
          },

          "preUniversity": {

              "College":    "Mahesh PU College, Mangalore, India",
              "Course/Board":   "PCMC in Karnataka Board",
              "year":    2020
          },

          "Schooling": {

              "School":     "Bhuvana Jyothi Residential School, Shirthady, Karnataka",
              "Course/Board":   "CBSE",
              "year":   2018

          }
      }
      self.hobbies = "Painting, Testing custom Android OS, and testing games"

  # Display details function
  def display_details(self):
      print("")
      print("Name:", self.name)
      print("Age:", self.age)
      print("")
      print("Education:")
      print("_________________________________________")
      for level in self.education:
          print(level + ":")
          details = self.education[level]
          for key in details:
              value = details[key]
              print(key + ":", value)
          print()
      print("Hobbies:", self.hobbies)
      print("")
      print("=== Thank You ===")  

# Creating an instance of the My_Details class
Anurag_info = My_Details()

# Displaying details of My_Details
print("My_Details Details:")
Anurag_info.display_details()


`;

  return (
    <div><SyntaxHighlighter language="python" style={atomDark} >
      {code}
    </SyntaxHighlighter>
    {/* <div class="my-details">
  <h2>My_Details:</h2>
  <div class="detail">
    <span class="label">Name:</span> Anurag C Betageri
  </div>
  <div class="detail">
    <span class="label">Age:</span> 21
  </div>
  <div class="detail">
    <span class="label">Education:</span>
    <ul>
      <li>
        <strong>underGraduation:</strong>
        <ul>
          <li><span class="label">University:</span> Reva University, Bangalore, India</li>
          <li><span class="label">Course/Board:</span> B Tech Computer Science</li>
          <li><span class="label">Year:</span> Still studying</li>
        </ul>
      </li>
      <li>
        <strong>preUniversity:</strong>
        <ul>
          <li><span class="label">College:</span> Mahesh PU College, Mangalore, India</li>
          <li><span class="label">Course/Board:</span> PCMC in Karnataka Board</li>
          <li><span class="label">Year:</span> 2020</li>
        </ul>
      </li>
      <li>
        <strong>Schooling:</strong>
        <ul>
          <li><span class="label">School:</span> Bhuvana Jyothi Residential School, Shirthady, Karnataka</li>
          <li><span class="label">Course/Board:</span> CBSE</li>
          <li><span class="label">Year:</span> 2018</li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="detail">
    <span class="label">Hobbies:</span> Painting, Testing custom Android OS, and testing games
  </div>
</div> */}

    </div>
    

    
  );
};

export default CodeDisplay;
