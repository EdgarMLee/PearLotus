from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField, StringField
from wtforms.validators import DataRequired, NumberRange, Length

class ReviewForm(FlaskForm):
  stars = IntegerField("stars", validators=[DataRequired()])
  description = StringField("description", validators=[DataRequired()])
  userId = IntegerField("userId", validators=[DataRequired()])
  productId = IntegerField("productId", validators=[DataRequired()])
  submit = SubmitField("submit")
