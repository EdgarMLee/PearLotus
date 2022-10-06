# Welcome to Pear & Lotus
Clone of Peach & Lily skincare website

## This project was developed utilizing:

* ####  Backend: Python/Flask

* #### Frontend: React/Redux/JS/HTML/CSS

* #### DB: SQLAlchemy

* ####  Hosted on Heroku
[Pear & Lotus](/)

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
