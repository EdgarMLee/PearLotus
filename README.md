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
