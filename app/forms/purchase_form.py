from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField, FloatField, DateTimeField
from wtforms.validators import DataRequired, NumberRange

class PurchaseForm(FlaskForm):
  quantity = IntegerField("quantity", validators=[DataRequired(), NumberRange(1, 10)])
  total = FloatField("total", validators=[DataRequired()])
  userId = IntegerField("userId", validators=[DataRequired()])
  productId = IntegerField("productId", validators=[DataRequired()])
  # createdAt = DateTimeField("createdAt", validators=[DataRequired()])
  submit = SubmitField("submit")
