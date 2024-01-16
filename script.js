 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	 
           function cal(radius) {
           	return (Math.PI * Math.pow(radius, 2));
           }
			 let area = cal(radius);
			 alert(area);
}
calculateArea();
