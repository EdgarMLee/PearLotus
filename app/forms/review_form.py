from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField, StringField
from wtforms.validators import DataRequired, NumberRange, Length

class ReviewForm(FlaskForm):
  stars = IntegerField("stars", validators=[DataRequired(), NumberRange(1, 5)])
  description = StringField("description", validators=[DataRequired(), Length(1, 255)])
  userId = IntegerField("userId", validators=[DataRequired()])
  productId = IntegerField("productId", validators=[DataRequired()])
  submit = SubmitField("submit")
