# Welcome to Pear & Lotus
Clone of Peach & Lily skincare website, designed to provide customers with the best Korean skincare products and have better gleaming/radiant skin!

## This project was developed utilizing:

* ####  Backend: 
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)

* #### Frontend: 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* #### DB: 
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-100000?style=for-the-badge&logo=sql&logoColor=BA1212&labelColor=AD0000&color=A90000) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

* ####  Hosted on:
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
<br>

* ####  Live Link:
[Pear & Lotus](https://pear-lotus.herokuapp.com/)

## Wiki Links:

* [Database Schema](https://github.com/EdgarMLee/PearLotus/wiki/DB-Schema)
* [User Stories](https://github.com/EdgarMLee/PearLotus/wiki/User-Stories)
* [API Routes](https://github.com/EdgarMLee/PearLotus/wiki/API-Routes)
* [Redux State Shape](https://github.com/EdgarMLee/PearLotus/wiki/Redux-State-Shape)
* [App Features](https://github.com/EdgarMLee/PearLotus/wiki/App-Features)

***

## How to run Pear & Lotus Locally:
* Clone the repository in your terminal: ```git clone https://github.com/EdgarMLee/PearLotus.git```
* cd into PearLotus folder and run ```pipenv install -r requirements.txt```
* Open two terminal paths for both PearLotus and react-app.
* Under PearLotus run ```pipenv shell``` then ```flask run```, for react-app run ```npm install```
* Create a ```.env``` file under the root of the backend folder with the following contents:
```
REACT_APP_BASE_URL=http://localhost:5000
```
* In the terminal under PearLotus, migrate and seed files as follows:
```
flask db upgrade
flask seed all
```
* Now, run ```flask run``` under PearLotus and ```npm start``` under react-app

### Your local host should be running with full functionality now!

### Splash Page
![image](https://user-images.githubusercontent.com/101891232/194373296-e1be6861-d934-4c48-9bd7-57aa45d86fb3.png)

### Profile Menu
![image](https://user-images.githubusercontent.com/101891232/194373614-f3cc1bac-09f3-404c-8d2a-74eeed72a14c.png)

### Product Details Page
![image](https://user-images.githubusercontent.com/101891232/194373522-2b5686cf-bed8-4db9-aeff-7c85209afe32.png)

### Reviews of Product
![image](https://user-images.githubusercontent.com/101891232/194373811-a4d538b0-c5fb-4707-9371-016b77f78376.png)

### My Reviews
![image](https://user-images.githubusercontent.com/101891232/194373888-ef770fee-40e9-456c-8e0b-6932d430fa55.png)
