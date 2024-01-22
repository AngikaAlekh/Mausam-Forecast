const form=document.querySelector('form');
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const mailid = document.getElementById("emailId");
const qName = document.getElementById("Querry");

function sendEmail() {

	const bodyMessage = `First name: ${firstName.value}<br> Last name: ${lastName.value}<br> Email id: ${mailid.value}<br> Querry: ${qName.value}<br>`;
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "alekhangika@gmail.com",
		Password : "56BBA715DA5A82CC547F5D99CCE9FB0547E9",
		To : 'angika.kumud@gmail.com',
		From : "alekhangika@gmail.com",
		Subject : "This is the subject",
		Body : bodyMessage 
	}).then(
	  message => {
		if (message == "OK") {
			Swal.fire({
				title: "Success!",
				text: "Message sent successfully!",
				icon: "success"
			  });
		}
	  }
	);
}
form.addEventListener("submit", (e) => {
	e.preventDefault();
	sendEmail();
});

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3709087ebmshd53d0bd1a44b364p1bd5ffjsnaa06f8f2164d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//<button onclick="document.getElementById('myInput').value = ''">Clear input field</button>