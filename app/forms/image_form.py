from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField, StringField
from wtforms.validators import DataRequired, NumberRange, Length, URL

class ImageForm(FlaskForm):
  userId = IntegerField("userId", validators=[DataRequired()])
  productId = IntegerField("productId", validators=[DataRequired()])
  url = StringField("url", validators=[DataRequired(), URL()])
  submit = SubmitField("submit")
