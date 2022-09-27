from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField, StringField
from wtforms.validators import DataRequired, NumberRange

class CartForm(FlaskForm):
  quantity = IntegerField("quantity", validators=[DataRequired(), NumberRange(1, 10)])
  description = StringField("description", validators=[DataRequired()])
  userId = IntegerField("userId", validators=[DataRequired()])
  productId = IntegerField("productId", validators=[DataRequired()])
  submit = SubmitField("submit")
