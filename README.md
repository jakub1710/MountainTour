# MountainTour

# I present you project self-made by me a few months after starting to learn programming.

<br>

## The website was created with:
<ul><img src=./img/screenshots/Screenshot1.png width=500px align=right>

<br><br>

<li>HTML and BEM methodology</li>
<li>CSS and SCSS</li>
<li>JavaScript</li>
<li>RWD - Responsive Web Design</li>

</ul>

<br><br><br>

## About
MountainTour is the first project in my programming adventure. I decided made website about it, because I love mountain trips.
<br><br>
### Screen resolution
The web page is fully responsive. It works both mobile devices (above 375px) and desktops.

<img src=./img/screenshots/Screenshot4.png width=300px><img src=./img/screenshots/Screenshot5.png width=550px align=right> 

### JavaScript functions
There is a form on the page in the contact section. If you do not fill in any of the fields, the form will return an error. 

<img src=./img/screenshots/Screenshot3.png width=300px> <img src=./img/screenshots/Screenshot2.png width=300px align=right>

### Validate Email Addresses with Regular Expressions in JavaScript

```javascript
 const checkEmail = (formMail) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(formMail.value)) {
		clearError(formMail);
	} else {
		showError(formMail);
	}
```

